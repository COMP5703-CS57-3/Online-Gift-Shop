import stripe as stripe

from .pay_an_order import pay_an_order_method
from ..model.create_database import Order
from flask import make_response
from ..connect_to_aws import database


# TODO replace with config
stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
stripe.verify_ssl_certs = False
DOMAIN = 'http://localhost:5000/order/pay_result'


def create_checkout_session(order):
    output_message = {
        "message": "success"
    }
    order_id = order['orderId']
    status_code = 200
    checkout_session = None
    check_valid = Order.query.filter_by(id=order_id).first()
    if not check_valid:
        status_code = 404
        output_message['message'] = 'This order does not exist.'
        resp = make_response(output_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data':  {
                        'currency': order['currency'],
                        'product_data': {
                            'name': order['productName'],
                            'description': order['productDesc'],
                            'images': [order['productImage']],
                        },
                        'unit_amount_decimal': float(order['orderPrice']),
                    },
                    'quantity': 1,
                },
            ],
            metadata= {
                'order_id': order_id
            },
            mode='payment',
            success_url=DOMAIN + '/' + order_id + '?success=true',
            cancel_url=DOMAIN + '/' + order_id + '?canceled=true',
        )
    except Exception as e:
        status_code = 500

    output_message['message'] = 'create a checkout session for order: ' + str(order_id)
    output_json = make_response(output_message)
    output_json.response_data = checkout_session
    output_json.status_code = status_code

    return output_json


def pay_order_success(order_id):
    output_message = {
        'message': 'The order ' + str(order_id) + ' has been paid successfully'
    }
    pay_an_order_method(order_id)
    output_json = make_response(output_message)
    output_json.status_code = 200

    return output_json


def pay_order_fail(order_id):
    output_message = {
        'message': 'The order ' + str(order_id) + ' has been paid failed'
    }

    output_json = make_response(output_message)
    output_json.status_code = 200

    return output_json
