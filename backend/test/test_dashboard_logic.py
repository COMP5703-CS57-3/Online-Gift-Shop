import json
import re


def test_return_new_orders(client):
    response = client.post('/dashboard/return_new_orders')
    assert response.status_code == 200
    assert len(response.json['orders_inf']) >= 0


def test_show_users_number(client):
    response = client.post('/dashboard/show_users_number')
    reg = r"There are [\d]+ users in the system"
    assert response.status_code == 200
    assert re.match(reg, response.json['message']) is not None


def test_show_good_sales_gift(client):
    response = client.post('/dashboard/show_good_sales_gift')
    assert response.status_code == 200
    assert len(response.json['most_sales_gifts']) > 0


def test_show_all_order_number(client):
    response = client.post('/dashboard/show_all_order_number')
    reg = r"There are [\d]+ order\(s\) in the system"
    assert response.status_code == 200
    assert re.match(reg, response.json['message']) is not None


def test_show_completed_order_number(client):
    response = client.post('/dashboard/show_completed_order_number')
    reg = r"There are [\d]+ completed order\(s\) in the system"
    assert response.status_code == 200
    assert re.match(reg, response.json['message']) is not None


def test_show_wishlist_number(client):
    response = client.post('/dashboard/show_wishlist_number')
    reg = r"There are [\d]+ wishlist\(s\) in the system"
    assert response.status_code == 200
    assert re.match(reg, response.json['message']) is not None