from ..model.create_database import Order
from ..model.create_database import OrderItems
from flask import make_response
from ..connect_to_aws import database



def process_delete_order(user_id, order_number):
    response_data = {
        "message": "success"
    }
    status_code = 200
    uid = user_id
    orderNumber = order_number
    # query order table to get order information
    the_order = Order.query.filter_by(user_id=uid, order_number=orderNumber).first()
    # check the query order is eixst or not
    if the_order is None:
        response_data['message'] = "Input information not correct, please check your user id and order number"
        status_code = 403
        database.session.close()
    else:
        # query orderproduct table to get all product rows and delete these information
        productList = OrderItems.query.filter_by(order_id=the_order.id).all()
        for p in productList:
            database.session.delete(p)
        database.session.delete(the_order)
        database.session.commit()
        database.session.close()

    resp = make_response(response_data)
    resp.status_code = status_code
    resp.message = response_data['message']
    return resp
