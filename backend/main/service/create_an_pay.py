import stripe as stripe

from .pay_an_order import pay_an_order_method
from ..model.create_database import Order, OrderItems
from flask import make_response
from ..connect_to_aws import database


# TODO replace with config
stripe.api_key = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'
stripe.verify_ssl_certs = False
DOMAIN = 'http://localhost:5000/order/pay_result'


def create_checkout_session(an_order):
    output_message = {
        "message": "success"
    }
    order_id = an_order['orderId']
    status_code = 200
    checkout_session = None

    order = Order.query.filter_by(id=order_id).first()
    if not order:
        status_code = 404
        output_message['message'] = 'This order does not exist.'
        resp = make_response(output_message)
        resp.status_code = status_code
        database.session.close()
        return resp

    product_name = 'Gift Name'
    product_image = ['https://hbimg.huabanimg.com/fbf18a5314f750da671711dfb176cf8791fbc687153d-g7YSBF_fw658/format/webp']
    currency = 'AUD'

    if an_order["currency"] is not None:
        currency = an_order["currency"]

    order_items = OrderItems.query.filter_by(order_id=order_id).all()
    if len(order_items) > 0:
        product_name = order_items[0]["gift_name"]
        product_image = [order_items[0]["item_cover_url"]]

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data':  {
                        'currency': currency,
                        'product_data': {
                            'name': product_name,
                            # 'description': order['productDesc'],
                            'images': product_image,
                        },
                        'unit_amount_decimal': float(order.order_total),
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
