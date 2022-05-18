
def test_search_gift_name_with_not_exist_gift_name(client):
    response = client.get('/search/search_gift_name/notexistgiftname')
    assert response.status_code == 404
    assert response.json['message'] == 'The gift does not exist'


def test_search_gift_name_with_exist_gift_name(client):
    response = client.get('/search/search_gift_name/Firda%20Quilted%20Jacket')
    assert response.status_code == 200
    assert response.json['search_gifts'][0]['id'] == 3
    assert response.json['search_gifts'][0]['gift_price'] == 795.0
    assert response.json['search_gifts'][0]['gift_discount_state'] == '100%'


def test_search_gift_id_return_size_with_not_exist_gift_size_id(client):
    response = client.get('/search/search_gift_id_return_size/999')
    assert response.status_code == 404
    assert response.json['message'] == 'do not have this size\'s gifts'


def test_search_gift_id_return_size_with_exist_gift_size_id(client):
    response = client.get('/search/search_gift_id_return_size/1')
    assert response.status_code == 200
    assert len(response.json) >= 5


def test_search_gift_id_with_not_exist_gift_id(client):
    response = client.get('/search/search_gift_id/999')
    assert response.status_code == 404
    assert response.json['message'] == 'this gift id does not exist'


def test_search_gift_id_with_exist_gift_id(client):
    response = client.get('/search/search_gift_id/2')
    assert response.status_code == 200
    assert response.json['gift_name'] == 'Veoy Pile Fleece Women\'s Vest'
    assert response.json['gift_price'] == 250.0
    assert response.json['gift_discount_state'] == '91%'
