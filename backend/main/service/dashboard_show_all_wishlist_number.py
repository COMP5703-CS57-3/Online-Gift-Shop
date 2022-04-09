from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Wishlist



def show_wishlist_number_method():
    output_message = {
        "message": "Information waiting for confirmation"
    }
    wishlists = Wishlist.query.order_by(Wishlist.id.asc()).first()
    if wishlists:
        wishlist_number = Wishlist.query.order_by(Wishlist.id.asc()).count()
        d = int(wishlist_number)
        status_code = 200
        output_message['message'] = "There are "  + str(d)  + " wishlist(s) in the system"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json
    else:
        output_message['message'] = "no wishlist in the system"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json
