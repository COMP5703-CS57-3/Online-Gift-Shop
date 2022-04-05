from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Admin


def admin_login(admin_login_information):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    admin = Admin.query.filter_by(admin_email=admin_login_information["admin_email"]).first()
    if admin is None:
        status_code = 404
        output_message["message"] = "the admin email: " + admin_login_information["admin_email"] + " does not exist"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        database.session.close()
        return output_json
    elif admin.admin_password != admin_login_information["admin_password"]:
        status_code = 400
        output_message["message"] = "Incorrect Password"
        output_json = make_response(output_message)
        output_json.status_code = status_code
        database.session.close()
        return output_json
    else:
        output_message["message"] = "admin successfully login"
        database.session.close()
        return admin
