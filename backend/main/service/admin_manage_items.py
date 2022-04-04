from ..model.create_database import Gifts
from ..model.create_database import Size
from flask import make_response
from ..connect_to_aws import database



def admin_add_gift_method(product_info):
    response_data = {
        "message": "success",
        'product_id': ""
    }
    check_exist = Gifts.query.filter_by(name=product_info["gift_name"]).first()
    if check_exist:
        response_data['message'] = "product already exists"
        status_code = 400
        resp = make_response(response_data)
        resp.status_code = status_code
        database.session.close()
        return resp
    status_code = 200
    try:
        name = product_info["gift_name"]
        price = product_info["gift_price"]
        discountprice = product_info["gift_discount_price"]
        discountstate = product_info["gift_discount_state"]
        description = product_info["gift_description"]
        main_category = product_info["gift_category"]
        side_category1 = product_info["gift_side_category1"]
        side_category2 = product_info["gift_side_category2"]
        cover_url = product_info["gift_cover_url"]
        url1 = product_info["gift_show_url1"]
        url2 = product_info["gift_show_url2"]
        url3 = product_info["gift_show_url3"]
        url4 = product_info["gift_show_url4"]
        sizes = product_info["sizes"]
    except:
        response_data['message'] = 'please check JSON format'
        status_code = 400
        resp = make_response(response_data)
        resp.status_code = status_code
        database.session.close()
        return resp
    sales = 0
    product = Gifts(gift_name=name, gift_price=price, gift_discount_price=discountprice, gift_discount_state=discountstate, gift_description=description, gift_category=main_category,
              gift_side_category1=side_category1,gift_side_category2=side_category2,gift_cover_url=cover_url, gift_show_url1=url1, gift_show_url2=url2, gift_show_url3=url3,
             gift_show_url4=url4, sales=sales)
    database.session.add(product)
    database.session.flush()
    database.session.refresh(product)
    products_id = product.id
    for s in sizes:
        size = s['size']
        size_stock = s['size_stock']
        insert_size = Size(size=size, stock=size_stock, products_id=products_id)
        database.session.add(insert_size)
    database.session.commit()
    response_data['product_id'] = products_id
    resp = make_response(response_data)
    resp.status_code = status_code
    database.session.close()
    return resp

    # database.session.commit()


# Admin edit a product
def admin_edit_gift_method(product_info):
    response_data = {
        "message": "success"
    }
    status_code = 200
    product = Gifts.query.filter_by(id=product_info['id']).first()
    if not product:
        response_data['message'] = 'product does not exist'
        resp = make_response(response_data)
        status_code = 404
        resp.status_code = status_code
        database.session.close()
        return resp
    try:
        name = product_info["gift_name"]
        price = product_info["gift_price"]
        discountprice = product_info["gift_discount_price"]
        discountstate = product_info["gift_discount_state"]
        description = product_info["gift_description"]
        top_category = product_info["gift_category"]
        side_category1 = product_info["gift_side_category1"]
        side_category2 = product_info["gift_side_category2"]
        cover_url = product_info["gift_cover_url"]
        url1 = product_info["gift_show_url1"]
        url2 = product_info["gift_show_url2"]
        url3 = product_info["gift_show_url3"]
        url4 = product_info["gift_show_url4"]
        product_sizes = product_info["sizes"]
    except:
        response_data['message'] = 'please check JSON format'
        status_code = 400
        resp = make_response(response_data)
        resp.status_code = status_code
        database.session.close()
        return resp
    product.gift_name = name
    product.gift_price = price
    product.gift_discount_price = discountprice
    product.gift_discount_state = discountstate
    product.gift_description = description
    product.gift_category = top_category
    product.gift_side_category1 = side_category1
    product.gift_side_category2 = side_category2
    product.gift_cover_url = cover_url
    product.gift_show_url1 = url1
    product.gift_show_url2 = url2
    product.gift_show_url3 = url3
    product.gift_show_url4 = url4

    sizes = Size.query.filter_by(products_id=product_info['id']).all()
    for s in range(len(sizes)):
        sizes[s].size = product_sizes[s]['size']
        sizes[s].stock = product_sizes[s]['size_stock']
    database.session.commit()
    resp = make_response(response_data)
    database.session.close()
    return resp

def admin_delete_gift_method(product_id):
    response_data = {
        "message": "success"
    }
    status_code = 200
    product = Gifts.query.filter_by(id=product_id).first()
    if not product:
        response_data['message'] = 'product does not exist'
        resp = make_response(response_data)
        status_code = 404
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        Gifts.query.filter_by(id=product_id).delete()
        Size.query.filter_by(products_id=product_id).delete()
        database.session.commit()
        resp = make_response(response_data)
        resp.status_code = status_code
        database.session.close()
        return resp
