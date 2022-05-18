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
    response = client.get('/main_home_page/Clothing, discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design3(client):
    response = client.get('/main_home_page/Clothing, discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design4(client):
    response = client.get('/main_home_page/Clothing, price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design5(client):
    response = client.get('/main_home_page/Clothing, price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design6(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design7(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design8(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design9(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design10(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_design11(client):
    response = client.get('/main_home_page/top_category?top_type=Clothing&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_side_design1(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design2(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design3(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design4(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design5(client):
    response = client.get('/main_home_page/Clothing, Male, Juvenile, discountprice-high-to-low')
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
def test_all_category2(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category3(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category4(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category5(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category6(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category7(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category8(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category9(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category10(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category11(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category12(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category13(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category14(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category15(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Other&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_all_category16(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category17(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category18(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category19(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_all_category20(client):
    response = client.get('/main_home_page/all_category?top_type=Other&side_type1=Male&side_type2=Juvenile'
                          '&gift_sort=discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_all_category_without_sort(client):
    response = client.get('/main_home_page/all_category?top_type=Clothing&side_type1=Male&side_type2=Juvenile')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0


def test_category_side_design6(client):
    response = client.get('/main_home_page/Male, Juvenile, price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design7(client):
    response = client.get('/main_home_page/Male, Juvenile, price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design8(client):
    response = client.get('/main_home_page/Male, Juvenile, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design9(client):
    response = client.get('/main_home_page/Male, Juvenile, discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design10(client):
    response = client.get('/main_home_page/Male, Juvenile, discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0

def test_category_side_design11(client):
    response = client.get('/main_home_page/Other, Juvenile, price-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design12(client):
    response = client.get('/main_home_page/Other, Juvenile, price-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design13(client):
    response = client.get('/main_home_page/Other, Juvenile, popular')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design14(client):
    response = client.get('/main_home_page/Other, Juvenile, discountprice-low-to-high')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0
def test_category_side_design15(client):
    response = client.get('/main_home_page/Other, Juvenile, discountprice-high-to-low')
    assert response.status_code == 200
    assert len(response.json['gifts']) > 0