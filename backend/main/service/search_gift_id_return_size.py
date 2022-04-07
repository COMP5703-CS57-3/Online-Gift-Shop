from ..connect_to_aws import database
from flask import make_response
from ..model.create_database import Size



def search_gift_id_return_size_method(gift_id):
    size = Size.query.filter_by(gift_id=gift_id).all()
    response_data = {
        "message": "Information waiting for confirmation"
    }
    if not size:
        status_code = 404
        response_data["message"] = "do not have this size's gifts"
        no_gift_output = make_response(response_data)
        no_gift_output.status_code = status_code
        database.session.close()
        return no_gift_output
    else:
        database.session.close()
        return size
