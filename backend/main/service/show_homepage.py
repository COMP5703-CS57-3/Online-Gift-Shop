import json
from ..model.create_database import Gifts
from flask import make_response
from ..connect_to_aws import database




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
        output_message = make_response(response_data)
        output_message.status_code = status_code
        output_message.message = response_data["message"]
        database.session.close()
        return output_message
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
                    "gift_side_category1" : o.gift_side_category1,
                    "gift_side_category2" : o.gift_side_category2,
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
    sort = args["sort"]
    the_sort_type = ['price-low-to-high', 'price-high-to-low', 'popular']
    if sort in the_sort_type:
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
                      "gift_side_category1": o.gift_side_category1,
                      "gift_side_category2": o.gift_side_category2,
                      "gift_show_url1": o.gift_show_url1,
                      "gift_show_url2": o.gift_show_url2,
                      "gift_show_url3": o.gift_show_url3,
                      "gift_show_url4": o.gift_show_url4,
                      "gift_sales": o.gift_sales,
                      "gift_income": o.gift_income}
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


def show_top_category_method(category, sort):
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
    not_exist_information = {
        "message": "Information waiting for confirmation"
    }
    category = category
    sort = sort
    all_sort = ['price-low-to-high', 'price-high-to-low', 'popular', 'discountprice']
    if sort not in all_sort:
        gifts = Gifts.query.filter_by(gift_category=category).order_by(Gifts.id.asc()).all()
    elif sort == 'price-low-to-high':
        gifts = Gifts.query.filter_by(gift_category=category).order_by(Gifts.gift_price).all()
    elif sort == 'price-high-to-low':
        gifts = Gifts.query.filter_by(gift_category=category).order_by(Gifts.gift_price.desc()).all()
    elif sort == 'discountprice':
        gifts = Gifts.query.filter_by(gift_category=category).order_by(Gifts.gift_discount_price.asc()).all()
    elif sort == 'popular':
        gifts = Gifts.query.filter_by(gift_category=category).order_by(Gifts.gift_sales.desc()).all()
    if gifts:
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
                      "gift_side_category1": o.gift_side_category1,
                      "gift_side_category2": o.gift_side_category2,
                      "gift_show_url1": o.gift_show_url1,
                      "gift_show_url2": o.gift_show_url2,
                      "gift_show_url3": o.gift_show_url3,
                      "gift_show_url4": o.gift_show_url4,
                      "gift_sales": o.gift_sales,
                      "gift_income": o.gift_income}
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
    else:
        not_exist_information["message"] = "Do not have gifts in this category"
        status_code = 404
        output_message = make_response(not_exist_information)
        output_message.status_code = status_code
        database.session.close()
        return output_message




def show_side_category_method(category, side_category1, side_category2, sort):
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
        "message": "Information waiting for confirmation"
    }
    category = category
    side_category1 = side_category1
    side_category2 = side_category2
    sort = sort
    all_type_sort = ['price-low-to-high', 'price-high-to-low', 'popular', 'discountprice']
    if sort not in all_type_sort:
        gifts = Gifts.query.filter_by(gift_category=category, gift_side_category1=side_category1, gift_side_category2=side_category2).order_by(Gifts.id.desc()).all()
    elif sort == 'price-high-to-low':
        gifts = Gifts.query.filter_by(gift_category=category, gift_side_category1=side_category1, gift_side_category2=side_category2).order_by(Gifts.gift_price.desc).all()
    elif sort == 'price-low-to-high':
        gifts = Gifts.query.filter_by(gift_category=category, gift_side_category1=side_category1, gift_side_category2=side_category2).order_by(Gifts.gift_price.asc()).all()
    elif sort == 'popular':
        gifts = Gifts.query.filter_by(gift_category=category, gift_side_category1=side_category1, gift_side_category2=side_category2).order_by(Gifts.gift_sales.desc()).all()
    elif sort == 'discountprice':
        gifts = Gifts.query.filter_by(gift_category=category, gift_side_category1=side_category1, gift_side_category2=side_category2).order_by(Gifts.gift_discount_price.desc()).all()
    if gifts:
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
                      "gift_side_category1": o.gift_side_category1,
                      "gift_side_category2": o.gift_side_category2,
                      "gift_show_url1": o.gift_show_url1,
                      "gift_show_url2": o.gift_show_url2,
                      "gift_show_url3": o.gift_show_url3,
                      "gift_show_url4": o.gift_show_url4,
                      "gift_sales": o.gift_sales,
                      "gift_income": o.gift_income}
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
    else:
        response_data["message"] = "Do not have gifts in this category"
        status_code = 404
        output_message = make_response(response_data)
        output_message.status_code = status_code
        database.session.close()
        return output_message