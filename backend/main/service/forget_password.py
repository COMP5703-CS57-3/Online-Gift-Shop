from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import User
from ..model.create_database import ValidationInformation




def forget_password_method(user_input_dictionary):
    response_data = {
        "message": "success"
    }
    status_code = 200
    validationinf = ValidationInformation.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
    user = User.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
    if validationinf is None:
        response_data['message'] = "you are a invalid user or you do not have the validation code"
        status_code = 400
    else:
        user_input_validation_code = user_input_dictionary["validation_code"]
        user_system_validation_code = validationinf.validation_code

        if user_input_validation_code != user_system_validation_code:
            response_data['message'] = "please input correct validation code"
            status_code = 400
        else:
            user.user_password = user_input_dictionary["user_new_password"]
            database.session.commit()
            response_data['message'] = "the password already upadate"
    output_json = make_response(response_data)
    output_json.status_code = status_code
    output_json.response_data = response_data
    return output_json