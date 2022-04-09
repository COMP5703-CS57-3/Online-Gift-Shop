from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Gifts




# def show_good_sales_gift_method():
#     output_message = {
#         "message": "Information waiting for confirmation"
#     }
#     gifts = Gifts.query.order_by(Gifts.gift_sales.desc()).limit(2)
#     if gifts:
#         database.session.close()
#         return gifts
#     else:
#         output_message['message'] = "no gifts in the system"
#         status_code = 400
#         output_json = make_response(output_message)
#         output_json.status_code = status_code
#         output_json.message = output_message['message']
#         database.session.close()
#         return output_json

def show_good_sales_gift_method():
    status_code = 200
    gifts = Gifts.query.order_by(Gifts.gift_sales.desc()).limit(5)
    response_message = {
        "message": "success"
    }
    response_data = {
        "most_sales_gifts": []
    }
    # gifts_dict = {
    #     "wishlists_inf": wishlists_model
    # }
    if not gifts:
        response_message['message'] = 'The system do not have any order.'
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    l = []
    for o in gifts:
        p = {
            "id": o.id,
            "gift_name": o.gift_name,
            "gift_price": o.gift_price,
            "gift_discount_price": o.gift_discount_price,
            "gift_discount_state": o.gift_discount_state,
            "gift_description": o.gift_description,
            "gift_category": o.gift_category,
            "gift_side_category1": o.gift_side_category1,
            "gift_side_category2": o.gift_side_category2,
            "gift_cover_url": o.gift_cover_url,
            # "gift_show_url1": o.gift_show_url1,
            # "gift_show_url2": o.gift_show_url2,
            # "gift_show_url3": o.gift_show_url3,
            # "gift_show_url4": o.gift_show_url4,
            "gift_sales": o.gift_sales,
            "gift_income": o.gift_income,
            }
        l.append(p)
    response_data["most_sales_gifts"] = l
    resp = make_response(response_message)
    resp.status_code = status_code
    resp.response_data = response_data
    database.session.close()
    return resp