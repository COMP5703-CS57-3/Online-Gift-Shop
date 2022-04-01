from ..model.create_database import User
from flask import make_response
from ..connect_to_aws import database


# define the function that to process the user profile show
def get_user_email_information(user_input_dictionary):
    output_message = {
        'id': 0,
        'user_name': "fields.String",
        'user_email': "fields.String",
        'user_date_of_birth': "fields.String",
        'user_mobile': "fields.String",
        'user_address': "fields.String",
        'message': "fields.String",
    }

    # query the user information table to get user row
    this_row_user_information = User.query.filter_by(id=user_input_dictionary["id"]).first()
    # check the user exist or not
    if this_row_user_information:
        user_input_password = user_input_dictionary["user_password"]
        if this_row_user_information.user_password == user_input_password:
            status_code = 200
            output_json = make_response(output_message)
            output_message['message'] = "success"
            output_json.id = this_row_user_information.id
            output_json.user_name = this_row_user_information.user_name
            output_json.user_email = this_row_user_information.user_email
            output_json.user_mobile = this_row_user_information.user_mobile
            output_json.user_date_of_birth = this_row_user_information.user_date_of_birth
            output_json.user_address = this_row_user_information.user_address
            output_json.status_code = status_code
            output_json.message = output_message['message']
        else:
            status_code = 300
            output_message['message'] = "input correct password to get your information"
            output_json = make_response(output_message)
            output_json.status_code = status_code
            output_json.message = output_message['message']
    else:
        output_message['message'] = "user doesn't exit"
        status_code = 400
        output_json = make_response(output_message)
        output_json.status_code = status_code
        output_json.message = output_message['message']
    database.session.close()
    return output_json