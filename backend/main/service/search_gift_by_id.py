from ..connect_to_aws import database
from flask import make_response
from ..model.create_database import Gifts



def search_gift_id_method(gift_id):
    gift = Gifts.query.filter_by(id=gift_id).first()
    # 'id': fields.Integer,
    # 'gift_name': fields.String,
    # 'gift_price': fields.Float,
    # 'gift_discount_price': fields.Float,
    # 'gift_discount_state': fields.String,
    # 'gift_description': fields.String,
    # 'gift_cover_url': fields.String,
    # 'gift_sales': fields.Integer,
    # 'gift_income': fields.Float
    search_model = {
        'id':1,
        'gift_name': "fields.String",
        'gift_price': "fields.String",
        'gift_discount_price': 1.0,
        'gift_discount_state': "fields.String",
        'gift_description': "fields.String",
        'gift_category': "fields.String",
        'gift_side_category1': "fields.String",
        'gift_side_category2': "fields.String",
        'gift_cover_url': "fields.String",
        'gift_show_url1': "fields.String",
        'gift_show_url2': "fields.String",
        'gift_show_url3': "fields.String",
        'gift_show_url4': "fields.String",
        'gift_sales': 1,
    }
    response_data = {
        "message": "Information waiting for confirmation"
    }
    if gift:
        p_list = {"id": gift.id,
                  "gift_name": gift.gift_name,
                  "gift_price": gift.gift_price,
                  "gift_discount_price": gift.gift_discount_price,
                  "gift_discount_state": gift.gift_discount_state,
                  "gift_description": gift.gift_description,
                  "gift_category": gift.gift_category,
                  'gift_side_category1': gift.gift_side_category1,
                  'gift_side_category2': gift.gift_side_category2,
                  "gift_cover_url": gift.gift_cover_url,
                  'gift_show_url1': gift.gift_show_url1,
                  'gift_show_url2': gift.gift_show_url2,
                  'gift_show_url3': gift.gift_show_url3,
                  'gift_show_url4': gift.gift_show_url4,
                  "gift_sales": gift.gift_sales}
                  #"gift_income": o.gift_income
        database.session.close()
        return p_list

    else:
        status_code = 404
        response_data["message"] = "this gift id does not exist"
        no_gift_output = make_response(response_data)
        no_gift_output.status_code = status_code
        database.session.close()
        return no_gift_output

