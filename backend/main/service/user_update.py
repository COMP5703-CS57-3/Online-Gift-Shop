
from ..model.create_database import User
from flask import make_response
from ..connect_to_aws import database
import re


def update_user_information(user_input_dictionary):
    output_message = {
        "id": 0,
        "message": "Message information waiting for response"
    }
    # get the row information by searching user id
    this_row_user_information = User.query.filter_by(id=user_input_dictionary["id"]).first()
    # if this id's user is exsit, update information
    if this_row_user_information:
        email = user_input_dictionary["user_email"]
        mobile = user_input_dictionary["user_mobile"]
        if re.match(r'^[0-9a-zA-Z_]{0,19}@[0-9a-zA-Z]{1,13}\.[com,cn,net,sydney,edu,au]{1,6}.[com,cn,net,sydney,edu,au]{1,6}.[com,cn,net,sydney,edu,au]{1,6}$',email):
            if re.match(r'^[0-9]{5,19}$',mobile):
                status_code = 200
                output_message['message'] = "Information successfully updated"
                this_row_user_information.user_name = user_input_dictionary["user_name"]
                this_row_user_information.user_email = email
                this_row_user_information.user_mobile = user_input_dictionary["user_mobile"]
                this_row_user_information.user_date_of_birth = user_input_dictionary["user_date_of_birth"]
                this_row_user_information.user_address = user_input_dictionary["user_address"]
                database.session.commit()
                database.session.close()
            else:
                status_code = 300
                output_message['message'] = "Please input a correct mobile"
                database.session.close()
        else:
            status_code = 300
            output_message['message'] = "Please input a correct email"
            database.session.close()
    else:
        status_code = 400
        output_message['message'] = "System do not have the user, please sign up first"
        database.session.close()
    # pass the json return information
    output_json = make_response(output_message)
    if status_code == 200 or 300:
        output_json.id = this_row_user_information.id
    else:
        output_json.id = 0
    output_json.status_code = status_code
    output_json.message = output_message['message']
    return output_json
