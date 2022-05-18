import json


def test_login_with_invalid_email(client):
    response = client.post('/admin/admin_login', data=json.dumps({
        "admin_email": "test",
        "admin_password": "test",
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'the admin email: test does not exist'


def test_login_with_invalid_password(client):
    response = client.post('/admin/admin_login', data=json.dumps({
        "admin_email": "12345@giftshop.com",
        "admin_password": "test",
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'Incorrect Password'


def test_login_with_correct_admin(client):
    response = client.post('/admin/admin_login', data=json.dumps({
        "admin_email": "12345@giftshop.com",
        "admin_password": "12345678",
    }))
    assert response.status_code == 200
    assert response.json['id'] == 1
    assert response.json['admin_name'] == '12345'
    assert response.json['admin_mobile'] == '15636128575'


def test_admin_sign_up_with_exits_email(client):
    response = client.post('/admin/admin_sign_up', data=json.dumps({
        "admin_name": "12345",
        "admin_email": "12345@giftshop.com",
        "admin_password": "12345678",
        "admin_mobile": "15636128575"
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'This admin email already exits'


def test_admin_sign_up_with_exits_name(client):
    response = client.post('/admin/admin_sign_up', data=json.dumps({
        "admin_name": "12345",
        "admin_email": "admin123@giftshop.com",
        "admin_password": "12345678",
        "admin_mobile": "15636128575"
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'This admin name already exits'


def test_admin_sign_up_with_invalid_email(client):
    response = client.post('/admin/admin_sign_up', data=json.dumps({
        "admin_name": "admin123",
        "admin_email": "admin123@gmail.com",
        "admin_password": "12345678",
        "admin_mobile": "15636128575"
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'please inpuit a valid admin email'


def test_admin_sign_up_with_valid_admin(client):
    response = client.post('/admin/admin_sign_up', data=json.dumps({
        "admin_name": "admin123",
        "admin_email": "admin123@giftshop.com",
        "admin_password": "123456",
        "admin_mobile": "15636128575"
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'the admin successfully sign up'


def test_admin_add_items_with_exists_name(client):
    response = client.post('/admin/admin_add_items', data=json.dumps({
        "gift_name": "Utvaer Men's Windbreaker Vest",
    }))
    assert response.status_code == 400
    assert response.json['message'] == 'product already exists'


def test_admin_add_items_with_invalid_params(client):
    response = client.post('/admin/admin_add_items', data=json.dumps({
        "gift_name": "test gift name",
        "field": "invalid field"
    }))
    assert response.status_code == 403
    assert response.json['message'] == 'please check JSON format'


def test_admin_add_items_with_valid_params(client):
    response = client.post('/admin/admin_add_items', data=json.dumps({
        "gift_name": "test gift name",
        "gift_price": 100,
        "gift_discount_price": 99,
        "gift_discount_state": "1%",
        "gift_description": "test description",
        "gift_category": "Clothing",
        "gift_side_category1": "Life",
        "gift_side_category2": "Clothes",
        "gift_cover_url": "https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9737/22802/83881_F__31461.1646918392.jpg?c=2",
        "gift_show_url1": "",
        "gift_show_url2": "",
        "gift_show_url3": "",
        "gift_show_url4": "",
        "sizes": [{"size": "S", "size_stock": 100}],
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_admin_add_size_for_item(client):
    response = client.post('/admin/admin_add_size_for_item', data=json.dumps({
        "size": "S",
        "stock": 100,
        "gift_id": 19,
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_admin_delete_items(client):
    response = client.delete('/admin/admin_manage_items/delete/12')
    assert response.status_code == 200
    assert response.json['message'] == 'success'


def test_admin_return_all_users(client):
    response = client.post('/admin/admin_return_all_users')
    assert response.status_code == 200
    assert len(response.json) > 0


def test_admin_search_a_user_by_not_exist_name(client):
    response = client.post('/admin/admin_search_a_user_by_name/notexistname')
    assert response.status_code == 400
    assert response.json['message'] == 'the system do not have this user name'


def test_admin_search_a_user_by_name(client):
    response = client.post('/admin/admin_search_a_user_by_name/e')
    assert response.status_code == 200
    assert len(response.json) >= 2


def test_admin_search_a_user_by_not_exist_email(client):
    response = client.post('/admin/admin_search_a_user_by_email/notexist%40gmail.com')
    assert response.status_code == 400
    assert response.json['message'] == 'the system do not have this user email'


def test_admin_search_a_user_by_email(client):
    response = client.post('/admin/admin_search_a_user_by_email/111%40qq.com')
    assert response.status_code == 200
    assert response.json[0]['id'] == 1
    assert response.json[0]['user_mobile'] == '123456789'


def test_admin_return_all_wishlist(client):
    response = client.post('/admin/admin_return_all_wishlist')
    assert response.status_code == 200
    assert len(response.json['wishlists_inf']) >= 7


def test_admin_return_all_orders(client):
    response = client.post('/admin/admin_return_all_orders')
    assert response.status_code == 200
    assert len(response.json['orders_inf']) >= 10


def test_admin_return_all_gifts(client):
    response = client.post('/admin/admin_return_all_gifts')
    assert response.status_code == 200
    assert len(response.json['gifts_inf']) >= 20


def test_admin_input_payer_id_orders_with_invalid_player_id(client):
    response = client.post('/admin/admin_input_payer_id_orders', data=json.dumps({
        "payer_id": 999,
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'The payer id do not have any order.'


def test_admin_input_payer_id_orders(client):
    response = client.post('/admin/admin_input_payer_id_orders', data=json.dumps({
        "payer_id": 2,
    }))
    assert response.status_code == 200
    assert len(response.json['orders_inf']) >= 1


def test_admin_edit_item_with_invalid_id(client):
    response = client.put('/admin/admin_edit_items', data=json.dumps({
        "id": 999,
        "gift_name": "Tyssoy Men's Sweater",
        "gift_price": 225,
        "gift_discount_price": 225,
        "gift_discount_state": "100%",
        "gift_description": "94411 - Tyss?y Men's Sweater What do you get if you cross the famous Sotra sweater with our official sweater from the 1964 Olympic Games in Innsbruck? The best of two worlds. The Tyss?y sweater combines the complexity of the Sotra pattern (with the eight-petal roses across it) mixed with the simpl",
        "gift_category": "teenager",
        "gift_side_category1": "Life",
        "gift_side_category2": "Clothes",
        "gift_cover_url": "https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/9316/22843/94411_C__08203.1646930850.jpg?c=2",
        "gift_show_url1": "",
        "gift_show_url2": "",
        "gift_show_url3": "",
        "gift_show_url4": "",
        "sizes": "M",
    }))
    assert response.status_code == 404
    assert response.json['message'] == 'product does not exist'


def test_admin_edit_item_with_invalid_id(client):
    response = client.put('/admin/admin_edit_items', data=json.dumps({
        "id": 3,
        "gift_name": "Firda Quilted Jacket",
        "gift_price": 795,
        "gift_discount_price": 795,
        "gift_discount_state": "100%",
        "gift_description": "85301 - Firda Quilted Jacket XS - L | Regular fit | Outer layer | 100% skin soft merino wool | Zefir Nano 20.5 micron | 2-ply | 10 gauge | 1615g (size M) | J-sleeve | Two-way zipper, zippered front pockets | Drawstring hood | Insulation: Lavalan virgin wool fibre fill. Lining: skin soft merino woo",
        "gift_category": "Clothing",
        "gift_side_category1": "Male",
        "gift_side_category2": "Juvenile",
        "gift_cover_url": "https://cdn11.bigcommerce.com/s-i8agbb7iol/images/stencil/1280x1280/products/10155/22892/85301_F00__00944.1649086461.jpg?c=2",
        "gift_show_url1": "1",
        "gift_show_url2": "",
        "gift_show_url3": "",
        "gift_show_url4": "",
        "sizes": [
            {
                "size": "XS",
                "size_stock": 185
            },
            {
                "size": "S",
                "size_stock": 90
            },
            {
                "size": "M",
                "size_stock": 974
            },
            {
                "size": "L",
                "size_stock": 639
            }
        ],
    }))
    assert response.status_code == 200
    assert response.json['message'] == 'success'
