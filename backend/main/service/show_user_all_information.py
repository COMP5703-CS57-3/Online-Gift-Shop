from ..model.create_database import User
from flask import make_response
from ..connect_to_aws import database


def show_all_user_information_method(id):
    output_message_400 = {
        "message": "Message information waiting for response"
    }
    output_message_200 = {
        'user_name': "Message information waiting for response",
        'user_email': "Message information waiting for response",
        'user_date_of_birth': "Message information waiting for response",
        'user_mobile': "Message information waiting for response",
        'user_address': "Message information waiting for response",
    }
    this_row_user_information = User.query.filter_by(id=id).first()
    if not this_row_user_information:
        status_code = 400
        output_message_400['message'] = "user doesn't exit"
        output_json = make_response(output_message_400)
        output_json.status_code = status_code
        output_json.message = output_message_400['message']
    else:
        status_code = 200
        output_message_200['id'] = this_row_user_information.id
        output_message_200['user_name'] = this_row_user_information.user_name
        output_message_200['user_email'] = this_row_user_information.user_email
        output_message_200['user_date_of_birth'] = this_row_user_information.user_date_of_birth
        output_message_200['user_mobile'] = this_row_user_information.user_mobile
        output_message_200['user_address'] = this_row_user_information.user_address
        output_json = make_response(output_message_200)
        output_json.status_code = status_code
        output_json.id = output_message_200['id']
        output_json.user_name = output_message_200['user_name']
        output_json.user_email = output_message_200['user_email']
        output_json.user_date_of_birth = output_message_200['user_date_of_birth']
        output_json.user_mobile = output_message_200['user_mobile']
        output_json.user_address = output_message_200['user_address']
    database.session.close()
    return output_json
