from ..connect_to_aws import database
from flask import make_response
from ..model.create_database import Gifts



def search_gift_method(gift_name):
    gift_name = "%{}%".format(gift_name.lower())
    gifts = Gifts.query.filter(Gifts.gift_name.like(gift_name)).all()
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
        'id': 1,
        'gift_name': "fields.String",
        'gift_price': "fields.String",
        'gift_discount_price': 1.0,
        'gift_discount_state': "fields.String",
        'gift_description': "fields.String",
        'gift_category': "fields.String",
        'gift_cover_url': "fields.String",
        'gift_sales': 1,
        'gift_income': 1.0
    }
    search_dict = {
        "search_gifts": search_model
    }
    response_data = {
        "message": "Information waiting for confirmation"
    }
    if not gifts:
        status_code = 404
        response_data["message"] = "The gift does not exist"
        no_gift_output = make_response(response_data)
        no_gift_output.status_code = status_code
        database.session.close()
        return no_gift_output
    else:
        List = []
        for o in gifts:
            p_list = {"id": o.id,
                      "gift_name": o.gift_name,
                      "gift_price": o.gift_price,
                      "gift_discount_price": o.gift_discount_price,
                      "gift_discount_state": o.gift_discount_state,
                      "gift_description": o.gift_description,
                      "gift_category": o.gift_category,
                      "gift_cover_url": o.gift_cover_url,
                      "gift_sales": o.gift_sales,
                      "gift_income": o.gift_income}
            List.append(p_list)
        search_dict["search_gifts"] = List
        search_dict_json = make_response(search_dict)
        search_dict_json = search_dict
        database.session.close()
        return search_dict_json

#        return Gift

