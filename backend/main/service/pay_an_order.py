from ..model.create_database import Order
from flask import make_response
from ..connect_to_aws import database



def pay_an_order_method(info):
    response_message = {
        "message": "paid successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_paid = Order.query.filter_by(order_number=info, order_state='paid').first()
        if this_row_order_paid:
            status_code = 400
            response_message['message'] = 'This order has been paid.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            paid_order = 'paid'
            this_row_order.order_state = paid_order
            database.session.commit()
            response_message['message'] = 'paid successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp


def set_an_order_as_delivery(info):
    response_message = {
        "message": "set an order as delivery successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_delivery = Order.query.filter_by(order_number=info, order_state='delivery').first()
        if this_row_order_delivery:
            status_code = 400
            response_message['message'] = 'This order has been delivered.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            delivery_order = 'delivery'
            this_row_order.order_state = delivery_order
            database.session.commit()
            response_message['message'] = 'set an order as delivery successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp

def set_an_order_as_completed(info):
    response_message = {
        "message": "set an order as completed successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_delivery = Order.query.filter_by(order_number=info, order_state='completed').first()
        if this_row_order_delivery:
            status_code = 400
            response_message['message'] = 'This order has been completed.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            delivery_completed = 'completed'
            this_row_order.order_state = delivery_completed
            database.session.commit()
            response_message['message'] = 'set an order as completed successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp