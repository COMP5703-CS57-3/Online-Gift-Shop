from flask import make_response
from ..connect_to_aws import database
from ..model.create_database import Admin




def admin_signup(admin_info):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    status_code = 200
    admin_by_name = Admin.query.filter_by(admin_name=admin_info["admin_name"]).first()
    admin = Admin.query.filter_by(admin_email=admin_info["admin_email"]).first()
    output_message['message'] = "the admin successfully sign up"
    if admin:
        output_message['message'] = "This admin email already exits"
        status_code = 400
    elif admin_by_name:
        output_message['message'] = "This admin name already exits"
        status_code = 400
    else:
        email = admin_info["admin_email"]
        admin_email_format = '@giftshop.com'
        if email.endswith(admin_email_format):
            admin = Admin(admin_name=admin_info["admin_name"],
                          admin_email=admin_info["admin_email"],
                          admin_password=admin_info["admin_password"],
                          admin_mobile=admin_info["admin_mobile"])
            database.session.add(admin)
            database.session.commit()
        else:
            output_message['message'] = "please inpuit a valid admin email"
            status_code = 400
    output_json = make_response(output_message)
    if status_code == 200:
        new_user = Admin.query.filter_by(admin_email=admin_info["admin_email"]).first()
        output_json.id = new_user.id
    output_json.status_code = status_code
    output_json.message = output_message['message']
    database.session.close()
    return output_json