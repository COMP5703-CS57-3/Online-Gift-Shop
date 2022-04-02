import json
from ..model.create_database import Gifts
from flask import make_response
from ..connect_to_aws import database
import datetime




def show_main_homepage_method():
    gifts = Gifts.query.order_by(Gifts.id.asc()).all()
    gift_model = {
        'id': 1,
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
        'gift_income': 1.0
    }
    gifts_dict = {
        "gifts": gift_model
    }
    response_data = {
        "message": "success"
    }
    if not gifts:
        status_code = 404
        response_data["message"] = "Gifts does not exist in the homepage"
        resp = make_response(response_data)
        resp.status_code = status_code
        resp.message = response_data["message"]
        database.session.close()
        return resp
    else:
        List = []
        for o in gifts:
            p_list ={"id" : o.id,
                    "gift_name" : o.gift_name,
                    "gift_price" : o.gift_price,
                    "gift_discount_price" : o.gift_discount_price,
                    "gift_discount_state" : o.gift_discount_state,
                    "gift_description" : o.gift_description,
                    "gift_category" : o.gift_category,
                    "gift_cover_url" : o.gift_cover_url,
                    "gift_side_category1" : o.gift_cover_url,
                    "gift_side_category2" : o.gift_cover_url,
                    "gift_show_url1" : o.gift_show_url1,
                    "gift_show_url2" : o.gift_show_url2,
                    "gift_show_url3" : o.gift_show_url3,
                    "gift_show_url4" : o.gift_show_url4,
                    "gift_sales" : o.gift_sales,
                    "gift_income" : o.gift_income}
            List.append(p_list)
        gifts_dict["gifts"] = List
        # gifts_dict["gifts"] = List
        # gift_model_json = make_response(L)
        # gift_model_json = List
    # gifts_dict["gifts"] = gift_model
        gift_dict_json = make_response(gifts_dict)
        gift_dict_json = gifts_dict
        database.session.close()
        return gift_dict_json





def show_main_homepage_gifts_in_sort_method(args):

    sort = args["sort"]
    all_sort = ['price-low-to-high', 'price-high-to-low', 'popular']
    if sort == 'popular':
        gifts = Gifts.query.order_by(Gifts.gift_sales.desc()).all()
    elif sort == 'price-high-to-low':
        gifts = Gifts.query.order_by(Gifts.gift_price.desc()).all()
    elif sort == 'price-low-to-high':
        gifts = Gifts.query.order_by(Gifts.gift_price.asc).all()
    else:
        gifts = Gifts.query.order_by(Gifts.id.asc()).all()
    output_dictionary = {
        "message": "Gifts showed successfully"
    }
    if not gifts:
        status_code = 404
        output_dictionary["message"] = "Gifts does not exist in the homepage"
        output_json = make_response(output_dictionary)
        output_json.status_code = status_code
        database.session.close()
        return output_json
    else:
        database.session.close()
        return gifts


