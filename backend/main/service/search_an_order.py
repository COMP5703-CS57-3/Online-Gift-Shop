
from ..model.create_database import Order, OrderItems
from flask import make_response
from ..connect_to_aws import database



def search_an_order_method(info):
    response_message = {
        "message": "success"
    }
    status_code = 200
    response_data = {
        "id": 0,
        "order_time": '',
        "order_total": 0,
        "order_number": '',
        "first_name": '',
        "last_name": '',
        "address": '',
        "phone": '',
        "postcode": '',
        "payer_id": 0,
        "payer_name": '',
        "order_state": '',
        "wishlist_code": '',
        "user_id": 0,
        "products": [],
    }
    # order_number = info['order_number']
    check_valid = Order.query.filter_by(order_number=info).first()
    if not check_valid:
        status_code = 404
        response_message['message'] = 'This wishlist does not exist.'
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    order_id = check_valid.id
    products = OrderItems.query.filter_by(order_id=order_id).all()
    response_data['id'] = check_valid.id
    response_data['order_time'] = check_valid.order_time
    response_data['order_total'] = check_valid.order_total
    response_data['order_number'] = check_valid.order_number
    response_data['first_name'] = check_valid.first_name
    response_data['last_name'] = check_valid.last_name
    response_data['address'] = check_valid.address
    response_data['phone'] = check_valid.phone
    response_data['postcode'] = check_valid.postcode
    response_data['payer_name'] = check_valid.payer_name
    response_data['order_state'] = check_valid.order_state
    response_data['wishlist_code'] = check_valid.wishlist_code
    response_data['owner_id'] = check_valid.user_id
    L = []
    for p in products:
        p_list = {"products_id": p.productID,
                  "product_name": p.gift_name,
                  "product_cover": p.item_cover_url,
                  "size": p.size,
                  "price": p.price,
                  "count": p.count}
        # "products_id": fields.Integer,
        # "product_name": fields.String,
        # "product_cover": fields.String,
        # "size": fields.String,
        # "count": fields.Integer,
        # "price": fields.Float,
        L.append(p_list)
    response_data["products"] = L
    resp = make_response(response_data)
    resp.status_code = status_code
    resp.response_data = response_data
    database.session.close()
    return resp