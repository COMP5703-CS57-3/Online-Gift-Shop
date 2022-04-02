from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Admin


def admin_login_v2(admin_info):
    admin = Admin.query.filter_by(admin_email=admin_info["admin_email"]).first()
    database.session.close()
    response_data = {
        "message": "success"
    }
    if admin is None:
        status_code = 404
        response_data["message"] = "the admin email: " + admin_info["admin_email"] + " does not exist"
        resp = make_response(response_data)
        resp.status_code = status_code
        return resp
    elif admin.admin_password != admin_info["admin_password"]:
        status_code = 400
        response_data["message"] = "Incorrect Password"
        resp = make_response(response_data)
        resp.status_code = status_code
        return resp
    else:
        return admin
