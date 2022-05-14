import json


def test_login_with_invalid_email(client):
    response = client.post('/login_signup/login', data=json.dumps({
        "user_email": "test",
        "user_password": "test",
    }))
    assert response.status_code == 403
    assert response.json['message'] == 'User did not exit, please sign up first'


def test_login_with_invalid_password(client):
    response = client.post('/login_signup/login', data=json.dumps({
        "user_email": "111@qq.com",
        "user_password": "test",
    }))
    assert response.status_code == 400


def test_login_with_correct_user(client):
    response = client.post('/login_signup/login', data=json.dumps({
        "user_email": "111@qq.com",
        "user_password": "1234",
    }))
    assert response.status_code == 200
    assert response.json['id'] == 1
    assert response.json['user_name'] == 'zhengli'
    assert response.json['message'] == 'User login successfully'


def test_sign_up_with_exits_email(client):
    response = client.post('/login_signup/sign_up', data=json.dumps({
        "user_name": "111",
        "user_email": "111@qq.com",
        "user_password": "1234",
        "user_mobile": "1234",
    }))
    assert response.status_code == 403
    assert response.json['message'] == 'User already exits'


def test_sign_up_with_exits_email(client):
    response = client.post('/login_signup/sign_up', data=json.dumps({
        "user_name": "tests",
        "user_email": "test99@qq.com",
        "user_password": "1234",
        "user_mobile": "1234",
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'User successfully sign up'


def test_change_password_with_error_old_password(client):
    response = client.put('/login_signup/change_password', data=json.dumps({
        "id": 2,
        "user_old_password": "123",
        "user_new_password": "123456",
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'Please input correct old password'


def test_change_password_with_valid_old_password(client):
    response = client.put('/login_signup/change_password', data=json.dumps({
        "id": 2,
        "user_old_password": "12345678",
        "user_new_password": "123456",
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'The password already updated'


def test_forget_password_with_invalid_email(client):
    response = client.put('/login_signup/forget_password', data=json.dumps({
        "user_email": "test",
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'you are a invalid user or you do not have the validation code'


def test_get_user_email_by_password(client):
    response = client.post('/login_signup/get_user_email_by_password', data=json.dumps({
        "id": 1,
        "user_password": "1234",
    }))
    assert response.status_code == 200
    assert response.json['user_name'] == "zhengli"
    assert response.json['user_email'] == "111@qq.com"
    assert response.json['user_mobile'] == "123456789"
    assert response.json['message'] == "success"


def test_return_role_by_email(client):
    response = client.get('/login_signup/return_role_by_email/111%40qq.com')
    assert response.status_code == 200
    assert response.json['message'] == "this email owner is a user"


def test_get_validation_with_not_exist_user_email(client):
    response = client.post('/login_signup/get_validation', data=json.dumps({
        "user_email": 'notexistemail',
    }))
    assert response.status_code == 400
    assert response.json['message'] == "user did not exits"


def test_get_validation_with_valid_email_and_not_validation(client):
    response = client.post('/login_signup/get_validation', data=json.dumps({
        "user_email": '2910842215@qq.com',
    }))
    assert response.status_code == 200
    assert response.json['message'] == "the validation code already sent to your email"


def test_get_validation_with_valid_email_and_validation(client):
    response = client.post('/login_signup/get_validation', data=json.dumps({
        "user_email": '2910842215@qq.com',
    }))
    assert response.status_code == 200
    assert response.json['message'] == "the validation code already sent to your email"
