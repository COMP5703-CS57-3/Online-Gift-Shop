
from ..model.create_database import Gifts
from ..model.create_database import WishlistItems
from ..model.create_database import Wishlist
from ..model.create_database import Order
from ..model.create_database import OrderItems
from ..model.create_database import Size
from flask import make_response
from ..connect_to_aws import database
import random
import string
import datetime



def process_order_create(order_inf):
    response_message = {
        "message": "success"
    }
    response_data = {
        "user_id": 0,
        "wishlist_id": "",
        "order_number": "",
        "message": "",
    }
    status_code = 200
    wishlist_id = order_inf["wishlist_id"]
    wishlist = WishlistItems.query.filter_by(wishlist_id=wishlist_id).all()
    if len(wishlist) == 0:
        response_message['message'] = "user's Wishlist is empty, please add product to Wishlist first"
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        resp.message = response_message['message']
    else:
        order_time = datetime.datetime.now()
        order_number = ''.join(random.sample(string.ascii_letters + string.digits, 15))
        first_name = order_inf["first_name"]
        last_name = order_inf["last_name"]
        phone = order_inf["phone"]
        address = order_inf["address"]
        postcode = order_inf["postcode"]
        order_total = order_inf["total_price"]
        wishlist_owner = Wishlist.query.filter_by(wishlist_id=wishlist_id).first()
        uid = wishlist_owner.owner_id
        each_order = Order(user_id=uid, order_time=order_time, order_total=order_total, order_number=order_number,
                           first_name=first_name, last_name=last_name, phone=phone,
                           address=address, postcode=postcode)
        database.session.add(each_order)
        database.session.flush()
        database.session.refresh(each_order)
        oid = each_order.id
        product_list = order_inf["product_list"]
        check_dic = {}
        out_of_stock_list = []
        for k in product_list:
            check_productID = k["product_id"]
            check_productName = k["product_name"]
            check_size = k["size"]
            check_count = k["count"]
            name_with_size = "product_id: " + str(check_productID) + " name: " + str(
                check_productName) + " size:" + str(check_size) + " "
            check_product_storage = Size.query.filter_by(gift_id=check_productID, size=check_size).first()
            if check_product_storage.stock < check_count:
                check_dic[name_with_size] = None
                out_stock_product = {
                    "product_id": check_productID,
                    "product_name": check_productName,
                    "size": check_size
                }
                out_of_stock_list.append(out_stock_product)
        if len(check_dic) > 0:
            the_str = ""
            for n in check_dic.keys():
                the_str += str(n) + " "
            response_message['message'] = "product: " + the_str + "does not have enough stock"
            new_resp_data = {
                "message": "below product out of stock",
                "product_list": out_of_stock_list
            }
            status_code = 403
            resp = make_response(response_message)
            resp.status_code = status_code
            resp.message = response_message['message']
            resp.response_data = new_resp_data
        else:
            for p in product_list:
                productID = p["product_id"]
                product_name = p["product_name"]
                cover_url = p["cover_url"]
                size = p["size"]
                count = p["count"]
                price = p["price"]
                each_total_price = price * count
                orderID = oid
                each_order_product = OrderItems(gift_name=product_name, item_cover_url=cover_url, size=size,
                                                  count=count,
                                                  price=price, each_total_price=each_total_price,
                                                  productID=productID, order_id=orderID)
                database.session.add(each_order_product)
            item_each_sales_dic = {}
            item_each_income_dic = {}
            for item in product_list:
                the_productID = item["product_id"]
                the_size = item["size"]
                the_count = item["count"]
                the_price = item["price"]
                the_each_total_price = the_price * the_count
                product_with_size = Size.query.filter_by(gift_id=the_productID, size=the_size).first()
                previous_stock = product_with_size.stock
                current_stock = previous_stock - the_count
                product_with_size.stock = current_stock
                previous_individual_sales = product_with_size.this_size_sales
                current_individual_sales = previous_individual_sales + the_count
                product_with_size.this_size_sales = current_individual_sales
                previous_individual_incomes = product_with_size.this_size_income
                current_individual_incomes = previous_individual_incomes + the_each_total_price
                product_with_size.this_size_income = current_individual_incomes

                if the_productID not in item_each_sales_dic.keys():
                    item_each_sales_dic[the_productID] = the_count
                else:
                    item_each_sales_dic[the_productID] += the_count

                if the_productID not in item_each_income_dic.keys():
                    item_each_income_dic[the_productID] = the_each_total_price
                else:
                    item_each_income_dic[the_productID] += the_each_total_price

            for sales_id in item_each_sales_dic.keys():
                product_with_sales_id = Gifts.query.filter_by(id=sales_id).first()
                previous_total_sales = product_with_sales_id.gift_sales
                product_with_sales_id.gift_sales = previous_total_sales + item_each_sales_dic[sales_id]

            for incomes_id in item_each_income_dic.keys():
                product_with_incomes_id = Gifts.query.filter_by(id=incomes_id).first()
                previous_total_incomes = product_with_incomes_id.gift_income
                product_with_incomes_id.gift_income = previous_total_incomes + item_each_income_dic[incomes_id]

            database.session.commit()

            response_message['message'] = "the order is generated successfully"
            response_data['message'] = 'the order is generated successfully'
            response_data['wishlist_id'] = wishlist_id
            response_data['user_id'] = uid
            response_data['order_number'] = order_number
            resp = make_response(response_message)
            resp.status_code = status_code
            resp.response_data = response_data
    database.session.close()
    return resp