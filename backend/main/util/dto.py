# this part is for DTO data transfer object
# The data transfer target is usually a data access object that retrieves data from a database
# Normalized input and output
# The DTO part is just for The data stored in the
# database is often the same as the data that needs to be displayed on the page
from flask_restplus import Namespace
from flask_restplus import fields


# define the user, admin and product dto model
class login_part_dto:
    login_founction_namespace = Namespace("The user logic module",
                                description="test login, sign up, change password, get validation and forget password function here")

    # the sign up input/output format
    user_sign_up_expectation_input_format = login_founction_namespace.model("user_sign_up_expectation_input_format", {
        'user_name': fields.String,
        'user_email': fields.String,
        'user_mobile': fields.String,
        'user_password': fields.String
    })
    user_sign_up_output_format = login_founction_namespace.model("user_sign_up_output_format", {
        'id': fields.Integer,
        'message': fields.String,
    })


    # the login input/output format
    user_login_expectation_input_format = login_founction_namespace.model("user_login_expectation_input_format", {
        'user_email': fields.String,
        'user_password': fields.String
    })
    user_login_ouput_format = login_founction_namespace.model("user_login_ouput_format", {
        'id': fields.Integer,
        'message': fields.String,
    })

    # the change password input/output format
    user_change_password_expectation_input_format = login_founction_namespace.model("user_change_password_expectation_input_format", {
        "id": fields.Integer,
        "user_old_password": fields.String,
        "user_new_password": fields.String,
    })
    user_change_password_output_format = login_founction_namespace.model("user_change_password_output_format", {
        "message": fields.String,
    })

    # the get validation input/output format
    user_get_validation_expectation_input_format = login_founction_namespace.model("user_get_validation_expectation_input_format", {
        "user_email": fields.String,
    })
    user_get_validation_output_format = login_founction_namespace.model("user_get_validation_output_format", {
        "validation_code": fields.String,
        "message": fields.String,
    })

    # the forget password input/output format
    user_forget_password_expectation_input_format = login_founction_namespace.model("user_forget_password_expectation_input_format", {
        "user_email": fields.String,
        "validation_code": fields.String,
        "user_new_password": fields.String,

    })
    user_forget_password_output_format = login_founction_namespace.model("user_forget_password_output_format", {
        "message": fields.String,
    })
