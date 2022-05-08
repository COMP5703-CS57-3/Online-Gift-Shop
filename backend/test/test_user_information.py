import json


def test_get_user_profile_with_not_exist_user_id(client):
    response = client.get('/user_information/user_profile/999')
    assert response.status_code == 400
    assert response.json['message'] == 'user doesn\'t exit'


def test_get_user_profile_with_exist_user_id(client):
    response = client.get('/user_information/user_profile/1')
    assert response.status_code == 200
    assert response.json['user_name'] == 'zhengli'
    assert response.json['user_email'] == '111@qq.com'
    assert response.json['user_mobile'] == '123456789'


def test_update_user_with_not_exist_user_id(client):
    response = client.put('/user_information/user_profile/update_user_information', data=json.dumps({
        "id": 999,
        "user_name": "teet name",
        "user_mobile": "12244764567",
        "user_date_of_birth": "2020-05-01",
        "user_address": "test address",
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'System do not have the user, please sign up first'


def test_update_user_with_invalid_mobile(client):
    response = client.put('/user_information/user_profile/update_user_information', data=json.dumps({
        "id": 2,
        "user_name": "teet name",
        "user_mobile": "test mobile",
        "user_date_of_birth": "2020-05-01",
        "user_address": "test address",
    }))
    assert response.status_code == 300
    assert response.json['message'] == 'Please input a correct mobile'


def test_update_user_with_valid_user(client):
    response = client.put('/user_information/user_profile/update_user_information', data=json.dumps({
        "id": 2,
        "user_name": "teet name",
        "user_mobile": "12345678",
        "user_date_of_birth": "2020-05-01",
        "user_address": "test address",
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'Information successfully updated'
