from ..model.create_database import User
from flask import make_response
from ..connect_to_aws import database



def admin_search_a_user_method(user_id):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    user = User.query.filter_by(id=user_id).first()
    if user:
        database.session.close()
        return user
    else:
        status_code = 400
        output_message['message'] = "the system do not have this user id"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json


def admin_search_a_user_by_name_method(user_name):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    user_name = "%{}%".format(user_name.lower())
    user = User.query.filter(User.user_name.like(user_name)).all()
    if user:
        database.session.close()
        return user
    else:
        status_code = 400
        output_message['message'] = "the system do not have this user name"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json


def admin_search_a_user_by_email_method(user_mail):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    user_mail = "%{}%".format(user_mail.lower())
    email = User.query.filter(User.user_email.like(user_mail)).all()
    if email:
        database.session.close()
        return email
    else:
        status_code = 400
        output_message['message'] = "the system do not have this user email"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
        database.session.close()
        return output_json