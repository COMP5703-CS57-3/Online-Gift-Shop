from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import User



def show_users_number_method():
    output_message = {
        "message": "Information waiting for confirmation"
    }
    users = User.query.order_by(User.id.asc()).first()
    if users:
        users_number = User.query.order_by(User.id.asc()).count()
        d = int(users_number)
        status_code = 200
        output_message['message'] = "There are "  + str(d)  + " users in the system"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json
    else:
        output_message['message'] = "no users in the system"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json


