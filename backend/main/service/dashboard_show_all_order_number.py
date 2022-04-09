from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Order



def show_all_order_number_method():
    output_message = {
        "message": "Information waiting for confirmation"
    }
    orders = Order.query.order_by(Order.id.asc()).first()
    if orders:
        order_number = Order.query.order_by(Order.id.asc()).count()
        d = int(order_number)
        status_code = 200
        output_message['message'] = "There are "  + str(d)  + " order(s) in the system"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json
    else:
        output_message['message'] = "no orders in the system"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json


def show_completed_order_number_method():
    output_message = {
        "message": "Information waiting for confirmation"
    }
    orders = Order.query.order_by(Order.id.asc()).first()
    if orders:
        order_number = Order.query.filter_by(order_state="completed").count()
        d = int(order_number)
        status_code = 200
        output_message['message'] = "There are "  + str(d)  + " completed order(s) in the system"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json
    else:
        output_message['message'] = "no orders in the system"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json

