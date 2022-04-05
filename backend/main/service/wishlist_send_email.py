from ..model.create_database import Wishlist
from flask import make_response
from flask_mail import Mail,Message
from flask import Flask
from ..connect_to_aws import database

def wishlist_send_email_method(user_input_dictionary):
    response_data = {
        "message": "success"
    }
    status_code = 200

    wishlist = Wishlist.query.filter_by(wishlist_id=user_input_dictionary["wishlist_id"]).first()

    if wishlist:
        response_data['message'] = "the email sent successfully"
        app = Flask(__name__)
        app.config["MAIL_SERVER"] = "smtp.qq.com"
        app.config["MAIL_PORT"] = 465
        app.config['MAIL_USE_SSL'] = True
        app.config['MAIL_USE_TLS'] = False
        app.config["MAIL_USERNAME"] = "519231856@qq.com"
        app.config["MAIL_PASSWORD"] = "cxrmlsvpgmpnbidh"
        mail = Mail(app)
        receiver_email = user_input_dictionary["receiver_email"]
        msg = Message("Wishlist code",
                      sender="519231856@qq.com",
                      recipients=[receiver_email])
        output = "****************************************************************************\n" \
                 "Your friends have a wishlist. Could you help him/her?\n" \
                 "Give him/her a suprise. the Online Gift Shop's wishlist code is '{code}'.\n" \
                 "Please have a look at our oline gift shop: 'www.olinegiftshop.com'\n" \
                 "Search '{code}' in our website and buy brilliant gifts for your friends!\n" \
                 "****************************************************************************"
        msg.body = output.format(code=user_input_dictionary["wishlist_id"])
        with app.app_context():
            mail.send(msg)
    else:
        status_code = 400
        response_data['message'] = "the system do not have this wishlist code"
    output_json = make_response(response_data)
    output_json.status_code = status_code
    output_json.message = response_data['message']
    database.session.close()
    return output_json