from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Order
from ..model.create_database import OrderItems




def admin_input_payer_id_orders_method(payer_id):
    status_code = 200
    orders = Order.query.filter_by(payer_id=payer_id['payer_id']).all()
    response_message = {
        "message": "success"
    }
    response_data = {
        "orders_inf": []
    }
    # gifts_dict = {
    #     "wishlists_inf": wishlists_model
    # }
    a = isinstance(payer_id['payer_id'], int)
    if not a:
        response_message['message'] = 'please input a valid payer id'
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    if not orders:
        response_message['message'] = 'The payer id do not have any order.'
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    l = []
    for o in orders:
        wishlists_inf = {
            "id": o.id,
            "order_time": o.order_time,
            "order_total": o.order_total,
            "order_number": o.order_number,
            "first_name": o.first_name,
            "last_name": o.last_name,
            "phone": o.phone,
            "address": o.address,
            "postcode": o.postcode,
            "payer_id": o.payer_id,
            "payer_name": o.payer_name,
            "order_state": o.order_state,
            "wishlist_code": o.wishlist_code,
            "user_id": o.user_id,
            "products": [],
        }
        productList = OrderItems.query.filter_by(order_id=o.id).all()
        L = []
        # if not productList:
        #     continue
        for p in productList:
            p_list = {"id": p.id,
                      "gift_name": p.gift_name,
                      "item_cover_url": p.item_cover_url,
                      "size": p.size,
                      "count": p.count,
                      "price": p.price,
                      "each_total_price": p.each_total_price,
                      "gift_id": p.productID,
                      "order_id": p.order_id,
                      }
            L.append(p_list)
        wishlists_inf["products"] = L
        l.append(wishlists_inf)
    response_data["orders_inf"] = l
    resp = make_response(response_message)
    resp.status_code = status_code
    resp.response_data = response_data
    database.session.close()
    return resp