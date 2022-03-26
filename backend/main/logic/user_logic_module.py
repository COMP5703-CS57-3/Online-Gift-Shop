# control the user logic module

import json
from ..service.login import login_method
from ..service.sign_up import signup_method
from ..service.change_password import change_password_method
from ..service.get_validation import get_validation_method
from ..service.forget_password import forget_password_method
from ..util.dto import login_part_dto
from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
# login_signup_namespace is dto's namespace
login_signup_namespace = login_part_dto.login_founction_namespace


# user sign up logic control module
@login_signup_namespace.route("/sign_up")
class UserSignup(Resource):
    @staticmethod
    @login_signup_namespace.expect(login_part_dto.user_sign_up_expectation_input_format)
    @login_signup_namespace.response(200, 'User successfully sign up[200]',
                                     model = login_part_dto.user_sign_up_output_format)
    @login_signup_namespace.response(403, 'User already exits[403]',
                                     model = login_part_dto.user_sign_up_output_format)
    def post():
        output_json = signup_method(json.loads(request.data))
        if output_json.status_code == 200:
            return marshal(output_json, login_part_dto.user_sign_up_output_format), 200
        else:
            return marshal(output_json, login_part_dto.user_sign_up_output_format), 403

# user login logic control module
@login_signup_namespace.route("/login")
class UserLogin(Resource):
    @staticmethod
    @login_signup_namespace.expect(login_part_dto.user_login_expectation_input_format)
    @login_signup_namespace.response(200, 'User login successfully[200]',
                                     model=login_part_dto.user_login_200_ouput_format)
    @login_signup_namespace.response(400, 'Please input correct password[400]',
                                     model=login_part_dto.user_login_ouput_format)
    @login_signup_namespace.response(403, 'User did not exit, please sign up first[403]',
                                     model=login_part_dto.user_login_ouput_format)
    @login_signup_namespace.response(404, 'Unknown error[403]',
                                     model=login_part_dto.user_login_ouput_format)
    def post():
        output_json = login_method(json.loads(request.data))
        if output_json.status_code == 200:
            return marshal(output_json, login_part_dto.user_login_200_ouput_format), 200
        elif output_json.status_code == 403:
            return marshal(output_json, login_part_dto.user_login_ouput_format), 403
        elif output_json.status_code == 404:
            return marshal(output_json, login_part_dto.user_login_ouput_format), 404
        else:
            return marshal(output_json, login_part_dto.user_login_ouput_format), 400

# user change password logic control module
@login_signup_namespace.route("/change_password")
class ChangePassword(Resource):
    @staticmethod
    @login_signup_namespace.expect(login_part_dto.user_change_password_expectation_input_format)
    @login_signup_namespace.response(200, 'Successfully change password[200]',
                                     model=login_part_dto.user_change_password_output_format)
    @login_signup_namespace.response(400, 'Failed request[400]',
                                     model=login_part_dto.user_change_password_output_format)
    def put():
        output_json = change_password_method(json.loads(request.data))
        if output_json.status_code == 200:
            return marshal(output_json.response_data, login_part_dto.user_change_password_output_format), 200
        else:
            return marshal(output_json.response_data, login_part_dto.user_change_password_output_format), 400

# user get validation logic control module
@login_signup_namespace.route("/get_validation")
class GetValidation(Resource):
    @staticmethod
    @login_signup_namespace.expect(login_part_dto.user_get_validation_expectation_input_format)
    @login_signup_namespace.response(200, 'the validation code already sent to your email[200]',
                                     model = login_part_dto.user_get_validation_output_format)
    @login_signup_namespace.response(400, 'user did not exits[400]',
                                     model = login_part_dto.user_get_validation_output_format)
    def post():
        output_json = get_validation_method(json.loads(request.data))
        if output_json.status_code == 200:
            return marshal(output_json, login_part_dto.user_get_validation_output_format), 200
        else:
            return marshal(output_json, login_part_dto.user_get_validation_output_format), 400

# user forget password logic control module
@login_signup_namespace.route("/forget_password")
class ForgetPassword(Resource):
    @staticmethod
    @login_signup_namespace.expect(login_part_dto.user_forget_password_expectation_input_format)
    @login_signup_namespace.response(200, 'successfully change password[200]',
                                     model=login_part_dto.user_forget_password_output_format)
    @login_signup_namespace.response(400, 'Failed request[400]',
                                     model=login_part_dto.user_forget_password_output_format)
    def put():
        output_json = forget_password_method(json.loads(request.data))
        if output_json.status_code == 400:
            return marshal(output_json.response_data, login_part_dto.user_forget_password_output_format), 400
        else:
            return marshal(output_json.response_data, login_part_dto.user_forget_password_output_format), 200

