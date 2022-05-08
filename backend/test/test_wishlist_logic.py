import json


def test_create_wishlist_with_not_exist_owner_id(client):
    response = client.post('/wishlist/create', data=json.dumps({
        "owner_id": 999,
        "owner_first_name": "test first name",
        "owner_last_name": "test last name",
        "wishlist_name": "dream",
        "description": "dream",
        "address": "Australia, New South Wales, 123",
        "phone": "123456789",
        "postcode": "12345",
        "user_expected_delivery_time": "Wed Jan 10 1900 00:00:00 GM",
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'User does not exist.'


def test_create_wishlist_with_exist_owner_id(client):
    response = client.post('/wishlist/create', data=json.dumps({
        "owner_id": 2,
        "owner_first_name": "test first name",
        "owner_last_name": "test last name",
        "wishlist_name": "dream",
        "description": "dream",
        "address": "Australia, New South Wales, 123",
        "phone": "123456789",
        "postcode": "12345",
        "user_expected_delivery_time": "Wed Jan 10 1900 00:00:00 GM",
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'
    assert response.json['wishlist_id'] is not None


def test_delete_wishlist_with_not_exist_wishlist_id(client):
    response = client.post('/wishlist/delete', data=json.dumps({
        "owner_id": 2,
        "wishlist_id": 'notexsitid',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This wishlist does not exist.'


def test_delete_wishlist_with_wishlist_not_owned_by_owner_id(client):
    response = client.post('/wishlist/delete', data=json.dumps({
        "owner_id": 2,
        "wishlist_id": 'BIEU8Z',
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'A wishlist can only be deleted by its owner.'


def test_add_wishlist_item_with_wishlist_has_been_completed(client):
    response = client.post('/wishlist/add', data=json.dumps({
        "owner_id": 2,
        "product_id": 'BIEU8Z',
        'wishlist_id': 'FjkZgH',
        'size': 'M',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'this wishlist has been completed, please create a new wishlist.'


def test_add_wishlist_item_with_wishlist_has_been_partial_paid_by_friends(client):
    response = client.post('/wishlist/add', data=json.dumps({
        "owner_id": 2,
        "product_id": 20,
        'wishlist_id': 'fjNlbY',
        'size': 'M',
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'add one gift in this wishlist successfully.'


def test_add_wishlist_item_with_user_has_no_wishlst(client):
    response = client.post('/wishlist/add', data=json.dumps({
        "owner_id": 9,
        "product_id": 'BIEU8Z',
        'wishlist_id': 'wk7ovz',
        'size': 'M',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This user has no wishlist.'


def test_add_wishlist_item_with_product_not_has_the_size(client):
    response = client.post('/wishlist/add', data=json.dumps({
        "owner_id": 2,
        "product_id": 19,
        'wishlist_id': 'wk7ovz',
        'size': 'XXL',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This product does not have this size.'


def test_add_wishlist_item_with_valid_info(client):
    response = client.post('/wishlist/add', data=json.dumps({
        "owner_id": 2,
        "product_id": 19,
        'wishlist_id': 'wk7ovz',
        'size': 'M',
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_remove_wishlist_item_with_not_exist_owner_id(client):
    response = client.post('/wishlist/remove', data=json.dumps({
        "owner_id": 999,
        "product_id": 19,
        'wishlist_id': 'wk7ovz',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This user has no wishlist.'


def test_remove_wishlist_item_with_not_exist_product_id(client):
    response = client.post('/wishlist/remove', data=json.dumps({
        "owner_id": 2,
        "product_id": 999,
        'wishlist_id': 'wk7ovz',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This product does not exist.'


def test_remove_wishlist_item_with_product_not_in_wishlist(client):
    response = client.post('/wishlist/remove', data=json.dumps({
        "owner_id": 2,
        "product_id": 20,
        'wishlist_id': 'testwishid',
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'This product does not in this wishlist.'


def test_remove_wishlist_size_with_not_exist_product_id(client):
    response = client.post('/wishlist/remove_size', data=json.dumps({
        "wishlist_id": 2,
        "product_id": 999,
        "owner_id": 2,
        'size': 'fjNlbY',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This product does not exist.'


def test_remove_wishlist_size_with_not_exist_product_id(client):
    response = client.post('/wishlist/remove_size', data=json.dumps({
        "wishlist_id": 'wk7ovz',
        "product_id": 20,
        "owner_id": 2,
        'size': 'M',
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'This product does not in this wishlist.'


def test_remove_wishlist_size_with_valid_params(client):
    response = client.post('/wishlist/remove_size', data=json.dumps({
        "wishlist_id": 'fjNlbY',
        "product_id": 20,
        "owner_id": 2,
        'size': 'M',
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_wishlist_item_show_with_not_exist_owner_id(client):
    response = client.post('/wishlist/show', data=json.dumps({
        "owner_id": 999,
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This user has no wishlist.'


def test_wishlist_item_show_with_exist_owner_id(client):
    response = client.post('/wishlist/show', data=json.dumps({
        "owner_id": 2,
    }))
    assert response.status_code == 200
    assert len(response.json['wishlists_inf']) >= 3


def test_wishlist_item_search_with_not_exist_wishlist_id(client):
    response = client.post('/wishlist/search', data=json.dumps({
        "wishlist_id": 'notexistid',
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This wishlist does not exist.'


def test_wishlist_item_search_with_exist_wishlist_id(client):
    response = client.post('/wishlist/search', data=json.dumps({
        "wishlist_id": 'fjNlbY',
    }))
    assert response.status_code == 200
    assert response.json['id'] == 8
    assert response.json['wishlist_name'] == 'wtx'
    assert response.json['owner_id'] == 2


def test_wishlist_item_change_count_with_invalid_params(client):
    response = client.put('/wishlist/changeCount', data=json.dumps({
        "wishlist_id": 'fjNlbY',
        "products_id": 1,
        "size": 'M',
        "count": 2,
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'Input information not correct'


def test_wishlist_item_change_count_with_valid_params(client):
    response = client.put('/wishlist/changeCount', data=json.dumps({
        "wishlist_id": 'wk7ovz',
        "products_id": 19,
        "size": 'M',
        "count": 2,
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'count changed'


def test_pay_wishlist_item_with_not_exist_id(client):
    response = client.post('/wishlist/pay', data=json.dumps({
        "owner_id": 1,
        "owner_first_name": 'dream',
        'owner_last_name': 'dream',
        'wishlist_id': 'noexistid',
        'phone': '123456789',
        'address': 'Australia, New South Wales, 123',
        'postcode': '12345',
        'payer_first_name': 'zheng',
        'payer_id': '1',
        'total_price': 100,
        'product_list': [],
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This wishlist is empty.'


def test_pay_wishlist_item_with_not_exist_id(client):
    response = client.post('/wishlist/pay', data=json.dumps({
        "owner_id": 99,
        "owner_first_name": 'dream',
        'owner_last_name': 'dream',
        'wishlist_id': 'wk7ovz',
        'phone': '123456789',
        'address': 'Australia, New South Wales, 123',
        'postcode': '12345',
        'payer_first_name': 'zheng',
        'payer_id': '1',
        'total_price': 100,
        'product_list': [],
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'This owner or wishlist does not exist.'


# def test_pay_wishlist_item_with_valid_params(client):
#     response = client.post('/wishlist/pay', data=json.dumps({
#         "owner_id": 2,
#         "owner_first_name": 'dream',
#         'owner_last_name': 'dream',
#         'wishlist_id': 'fjNlbY',
#         'phone': '123456789',
#         'address': 'Australia, New South Wales, 123',
#         'postcode': '12345',
#         'payer_first_name': 'zheng',
#         'payer_id': '1',
#         'total_price': 100,
#         'product_list': [],
#     }))
#     assert response.status_code == 200
#     assert response.json['message'] == 'This owner or wishlist does not exist.'


# def test_remove_wishlist_item_with_valid_params(client):
#     response = client.post('/wishlist/remove', data=json.dumps({
#         "owner_id": 2,
#         "product_id": 20,
#         'wishlist_id': 'fjNlbY',
#     }))
#     assert response.status_code == 200
#     assert response.json['message'] == 'success'

# def test_wishlist_item_send_email(client):
#     response = client.post('/wishlist/send_email', data=json.dumps({
#         "wishlist_id": 'fjNlbY',
#         "receiver_email": '111@qq.com',
#     }))
#     assert response.status_code == 200
#     assert response.json['message'] == 'count changed'