from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import User




def admin_return_all_users_methods():
    output_message = {
        "message": "Information waiting for confirmation"
    }
    users = User.query.order_by(User.id.asc()).all()
    output_message['message'] = "the admin successfully sign up"
    if users:
        database.session.close()
        return users
    else:
        output_message['message'] = "no users in the system"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        return output_json