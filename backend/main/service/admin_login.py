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
        resp = make_response(output_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    elif admin.admin_password != admin_login_information["admin_password"]:
        status_code = 400
        output_message["message"] = "Incorrect Password"
        resp = make_response(output_message)
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        output_message["message"] = "admin successfully login"
        database.session.close()
        return admin
