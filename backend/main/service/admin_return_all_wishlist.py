from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Wishlist
from ..model.create_database import WishlistItems




def admin_return_all_wishlist_methods():
    status_code = 200
    wishlists = Wishlist.query.order_by(Wishlist.id.asc()).all()
    response_message = {
        "message": "success"
    }
    # wishlists_model = {
    #     "id": 1,
    #     "wishlist_id": "fields.String",
    #     "owner_id": 1,
    #     "wishlist_name": "fields.String",
    #     "wishlist_description": "fields.String",
    #     "first_name": "fields.String",
    #     "last_name": "fields.String",
    #     "address": "fields.String",
    #     "phone": "fields.String",
    #     "postcode": "fields.String",
    #     "state": "fields.String",
    #     "payer_fname": "fields.String",
    #     "products": []
    # }
    response_data = {
        "wishlists_inf": []
    }
    # gifts_dict = {
    #     "wishlists_inf": wishlists_model
    # }
    if not wishlists:
        response_message['message'] = 'The system do not have any wishlist.'
        status_code = 404
        resp = make_response(response_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    l = []
    for o in wishlists:
        wishlists_inf = {
            "id": o.id,
            "wishlist_id": o.wishlist_id,
            "owner_id": o.owner_id,
            "wishlist_name": o.wishlist_name,
            "wishlist_description": o.wishlist_description,
            "first_name": o.first_name,
            "last_name": o.last_name,
            "address": o.address,
            "phone": o.phone,
            "postcode": o.postcode,
            "state": o.state,
            "payer_fname": o.payer_fname,
            "user_expected_delivery_time": o.user_expected_delivery_time,
            "products": [],
        }
        productList = WishlistItems.query.filter_by(wishlist_id=o.wishlist_id).all()
        L = []
        # if not productList:
        #     continue
        for p in productList:
            p_list = {"belong_to_which_wishlist": p.wishlistID,
                      "wishlist_id": p.wishlist_id,
                      "products_id": p.products_id,
                      "product_name": p.product_name,
                      "product_cover": p.product_cover,
                      "size": p.size,
                      "price": p.price,
                      "count": p.count,
                      "this_gift_state": p.this_gift_state,
                      "paid_count": p.paid_count
                      }
            L.append(p_list)
        wishlists_inf["products"] = L
        l.append(wishlists_inf)
    response_data["wishlists_inf"] = l
    resp = make_response(response_message)
    resp.status_code = status_code
    resp.response_data = response_data
    database.session.close()
    return resp