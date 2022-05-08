import json


def test_create_order_with_invalid_wishlist_id(client):
    response = client.post('/order/create', data=json.dumps({
        "wishlist_id": "test wishlist_id",
        "first_name": "zheng",
        "last_name": "li",
        "phone": "123456789",
        "address": "test address",
        "postcode": "12345",
        "total_price": 100
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'user\'s Wishlist is empty, please add product to Wishlist first'


def test_create_order_with_valid_wishlist_id(client):
    response = client.post('/order/create', data=json.dumps({
        "wishlist_id": "fjNlbY",
        "first_name": "zheng",
        "last_name": "li",
        "phone": "123456789",
        "address": "test address",
        "postcode": "12345",
        "total_price": 100,
        "product_list": [{
            "product_id": 1,
            "product_name": "Utvaer Men's Windbreaker Vest",
            "size": "M",
            "count": 3,
            "cover_url": "https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10178/23186/55031_C00__94643.1647178830.jpg?c=2",
            "price": 325
        }]
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'the order is generated successfully'


def test_delete_order_with_invalid_user_id_or_order_id(client):
    response = client.post('/order/delete/99/99')
    assert response.status_code == 403
    assert response.json['message'] == 'Input information not correct, please check your user id and order number'


def test_delete_order_with_valid_user_id_and_order_id(client):
    order_resp = client.post('/admin/admin_return_all_orders')
    last_order = order_resp.json["orders_inf"][len(order_resp.json["orders_inf"]) - 1]
    response = client.post('/order/delete/' + str(last_order['user_id']) + '/' + str(last_order['order_number']))
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_search_order_with_not_exist_order_number(client):
    response = client.post('/order/search_an_order/testordernumber')
    assert response.status_code == 404
    assert response.json['message'] == 'This order does not exist.'


def test_search_order_with_exist_order_number(client):
    response = client.post('/order/search_an_order/qabJ5vH7ew2npLc')
    assert response.status_code == 200
    assert response.json == {
        'id': 1,
        'order_time': '2022-04-20 21:33:07.740386',
        'order_total': 100.0,
        'order_number': 'qabJ5vH7ew2npLc',
        'first_name': 'zheng',
        'last_name': 'li',
        'address': 'dddd',
        'phone': '123456789',
        'postcode': '1234',
        'payer_id': 0,
        'payer_name': 'ddd',
        'order_state': 'waiting',
        'wishlist_code': 'BIEU8Z',
        'user_id': 1,
        'user_expected_delivery_time': '03/02/2022',
        'products': [{'products_id': 1, 'product_name': 'string', 'product_cover': 'string', 'size': '1', 'price': 1.0, 'count': 1}]
    }


def test_create_order_payment_checkout_session_with_not_exist_order_id(client):
    response = client.post('/order/create_checkout_session', data={
        "orderId": 999
    })
    assert response.status_code == 404
    assert response.json['message'] == 'This order does not exist.'


def test_create_order_payment_checkout_session_with_exist_order_id(client):
    response = client.post('/order/create_checkout_session', data={
        "orderId": 2
    })
    assert response.status_code == 303
    assert response.location.startswith('https://checkout.stripe.com/pay/')


def test_payment_callback_success(client):
    response = client.get('/order/pay_result/2?success=True')
    assert response.status_code == 303
    assert response.location.startswith('http://localhost:3000/')


def test_payment_callback_fail(client):
    response = client.get('/order/pay_result/2')
    assert response.status_code == 200
    assert response.json == 'pay fail'


def test_set_an_order_as_delivery_with_not_exist_order_number(client):
    response = client.post('/order/set_an_order_as_delivery/testoredernumber')
    assert response.status_code == 400
    assert response.json["message"] == 'Please input a valid order number.'


def test_set_an_order_as_delivery_with_exist_order_number(client):
    response = client.post('/order/set_an_order_as_delivery/Hu80l7ygN9jJp4I')
    assert response.status_code == 200
    assert response.json["message"] == 'set an order as delivery successfully'


def test_set_an_order_as_completed_with_not_exist_order_number(client):
    response = client.post('/order/set_an_order_as_completed/testoredernumber')
    assert response.status_code == 400
    assert response.json["message"] == 'Please input a valid order number.'


def test_set_an_order_as_completed_with_exist_order_number(client):
    response = client.post('/order/set_an_order_as_completed/Hu80l7ygN9jJp4I')
    assert response.status_code == 200
    assert response.json["message"] == 'set an order as completed successfully'
