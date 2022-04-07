from ..model.create_database import User
from ..model.create_database import Admin
from flask import make_response
from ..connect_to_aws import database



def return_role_by_email_method(email):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    user = User.query.filter_by(user_email=email).first()
    admin = Admin.query.filter_by(admin_email=email).first()
    if user:
        status_code = 200
        output_message['message'] = "this email owner is a user"
    elif admin:
        status_code = 200
        output_message['message'] = 'this email owner is an admin'
    else:
        status_code = 400
        output_message['message'] = "this is not our system's email"
    output_json = make_response(output_message)
    output_json.status_code = status_code
    output_json.message = output_message['message']
    database.session.close()
    return output_json
