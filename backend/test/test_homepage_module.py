def test_home_page_with_sort_args(client):
    response = client.get('/main_home_page?sort=popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_home_page_without_args(client):
    response = client.get('/main_home_page')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_category_design1(client):
    response = client.get('/main_home_page/Clothing, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_category_design2(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_category_side_design1(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_category_side_design1_with_other_category(client):
    response = client.get('/main_home_page/Other, Male, Juvenile, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_all_category(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_all_category_without_sort(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
