from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Admin




def admin_signup(admin_info):
    response_data = {
        "message": "success"
    }
    status_code = 200
    admin = Admin.query.filter_by(admin_email=admin_info["admin_email"]).first()
    admin_username = Admin.query.filter_by(admin_name=admin_info["admin_name"]).first()
    if admin_username:
        response_data['message'] = "This username already exits"
        status_code = 400
    elif admin:
        response_data['message'] = "This email already in use"
        status_code = 400
    else:
        username = admin_info["admin_name"]
        email = admin_info["admin_email"]
        password = admin_info["admin_password"]
        mobile = admin_info["admin_mobile"]
        valid_format = '@giftshop.com'
        if email.endswith(valid_format):
            admin = Admin(admin_name=username, admin_email=email, admin_password=password, admin_mobile=mobile)
            database.session.add(admin)
            database.session.commit()
        else:
            response_data['message'] = "Invalid Email"
            status_code = 400
    resp = make_response(response_data)
    if status_code == 200:
        new_user = Admin.query.filter_by(admin_email=admin_info["admin_email"]).first()
        resp.id = new_user.id
    resp.status_code = status_code
    resp.message = response_data['message']
    database.session.close()
    return resp