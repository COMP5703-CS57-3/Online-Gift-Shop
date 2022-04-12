from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Gifts
from ..model.create_database import Size


def admin_return_all_gifts_methods():
    status_code = 200
    gifts = Gifts.query.order_by(Gifts.id.asc()).all()
    response_message = {
        "message": "success"
    }
    response_data = {
        "gifts_inf": []
    }
    # gifts_dict = {
    #     "wishlists_inf": wishlists_model
    # }
    if not gifts:
        response_message['message'] = 'The system do not have any gift.'
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    l = []
    for o in gifts:
        wishlists_inf = {
            "id": o.id,
            "gift_name": o.gift_name,
            "gift_price": o.gift_price,
            "gift_discount_price": o.gift_discount_price,
            "gift_discount_state": o.gift_discount_state,
            "gift_description": o.gift_description,
            "sizes": [],
            "gift_category": o.gift_category,
            "gift_side_category1": o.gift_side_category1,
            "gift_side_category2": o.gift_side_category2,
            "gift_cover_url": o.gift_cover_url,
            "gift_show_url1": o.gift_show_url1,
            "gift_show_url2": o.gift_show_url2,
            "gift_show_url3": o.gift_show_url3,
            "gift_show_url4": o.gift_show_url4,
            "gift_sales": o.gift_sales,
            "gift_income": o.gift_income,
        }
        sizeList = Size.query.filter_by(gift_id=o.id).all()
        L = []
        # if not productList:
        #     continue
        for p in sizeList:
            p_list = {"id": p.id,
                      "gift_id": p.gift_id,
                      "size": p.size,
                      "stock": p.stock,
                      "this_size_sales": p.this_size_sales,
                      "this_size_income": p.this_size_income,
                      }
            L.append(p_list)
        wishlists_inf["sizes"] = L
        l.append(wishlists_inf)
    response_data["gifts_inf"] = l
    resp = make_response(response_message)
    resp.status_code = status_code
    resp.response_data = response_data
    # database.session.close()
    return resp
