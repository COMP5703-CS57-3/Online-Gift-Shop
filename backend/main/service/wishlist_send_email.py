import os
from imp import reload

from ..model.create_database import Wishlist
from flask import make_response
from flask_mail import Mail,Message
from flask import Flask
from ..connect_to_aws import database
from email.mime.text import MIMEText
from flask import render_template
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formataddr

def wishlist_send_email_method(user_input_dictionary):
    response_data = {
        "message": "success"
    }
    status_code = 200

    wishlist = Wishlist.query.filter_by(wishlist_id=user_input_dictionary["wishlist_id"]).first()

    if wishlist:
        response_data['message'] = "the email sent successfully"
        receiver_email = user_input_dictionary["receiver_email"]
        my_sender = '519231856@qq.com'
        my_pass = 'cxrmlsvpgmpnbidh'
        my_user = receiver_email

        # mail_msg = """
        #  <td id="QQMAILSTATIONERY" style="background:url(https://rescdn.qqmail.com/zh_CN/htmledition/images/xinzhi/bg/a_12.jpg)
        #  repeat-x left bottom #e3ebf4; min-height:550px; padding: 100px 55px 200px; ">
        #  <div>Dear receiver:</div>
        #  <div>Your friends have a wishlist. Could you help him/her?</div>
        #  <div>The Online Gift Shop's wishlist code is '{code}'</div>
        #  <div>Please have a look at our oline gift shop: 'www.olinegiftshop.com'</div>
        #  <div>Search '{code}' in our website and buy brilliant gifts for your friends!</div>
        #  </td>
        #  """


        mail_msg = """
         <td id="QQMAILSTATIONERY" style="background:url(https://res.wx.qq.com/t/GYWeb/mailcard/res/assets/pages/flower/images/backend@3x-18003b4df70.png)
         repeat-x left bottom #e3ebf4; min-height:550px; padding: 100px 55px 200px; ">
           <div style="background-color:#fff;width:570px">
             <div style="padding:25px">
               <h4 ><p>Dear receiver:</p ></h4>
               <p>Your friends have a wishlist. Could you help him/her?</p >
               <p>The Online Gift Shop's wishlist code is </p >
                <div style="padding-left: 200px"><h2 >{code}</h2></div>
               <p>Please have a look at our oline gift shop: 'www.olinegiftshop.com'</p >
               <p>Search '{code}' in our website and buy brilliant gifts for your friends!</p >
             </div>
           </div>
         </td>
         """

        mail_msg = mail_msg.format(code=user_input_dictionary["wishlist_id"])
        msg = MIMEText(mail_msg, 'html', 'utf-8')
        msg['From'] = formataddr(['Online Gift Shop',my_sender])
        msg['To'] = formataddr(['Dear receiver',my_user])
        msg['Subject'] = 'gift'
        server = smtplib.SMTP_SSL('smtp.qq.com', 465)
        server.login(my_sender,my_pass)
        server.sendmail(my_sender, [my_user], msg.as_string())
        server.quit()


        # app = Flask(__name__)
        # app.config["MAIL_SERVER"] = "smtp.qq.com"
        # app.config["MAIL_PORT"] = 465
        # app.config['MAIL_USE_SSL'] = True
        # app.config['MAIL_USE_TLS'] = False
        # app.config["MAIL_USERNAME"] = "519231856@qq.com"
        # app.config["MAIL_PASSWORD"] = "cxrmlsvpgmpnbidh"
        # mail = Mail(app)
        # receiver_email = user_input_dictionary["receiver_email"]
        # _user = "519231856@qq.com"
        # _pwd = "cxrmlsvpgmpnbidh"
        # _recer = [receiver_email]
        # receiver_email = user_input_dictionary["receiver_email"]
        # msg = Message("Wishlist code",
        #               sender="519231856@qq.com",
        #               recipients=[receiver_email])
        # mess = """
        # <p> python ....</p>
        # <p> <a  href="http://news.baidu.com" target="_blank" class ="mnav c-font-normal c-color-t">....</a></p>
        # """
        # msg = MIMEText(mess, 'html', 'utf-8')
        # msg["Subject"] = " don't panic"
        # msg["From"] = _user
        # msg["To"] = _recer
        #
        # s = smtplib.SMTP_SSL("smtp.qq.com", 465)
        # s.login(_user, _pwd)
        # s.sendmail(_user, _recer, msg.as_string())
        # s.quit()
        # output = "****************************************************************************\n" \
        #          "Your friends have a wishlist. Could you help him/her?\n" \
        #          "Give him/her a suprise. the Online Gift Shop's wishlist code is '{code}'.\n" \
        #          "Please have a look at our oline gift shop: 'www.olinegiftshop.com'\n" \
        #          "Search '{code}' in our website and buy brilliant gifts for your friends!\n" \
        #          "****************************************************************************"

        # msg.body = output.format(code=user_input_dictionary["wishlist_id"])
        # with app.app_context():
        #     mail.send(msg)
    else:
        status_code = 400
        response_data['message'] = "the system do not have this wishlist code"
    output_json = make_response(response_data)
    output_json.status_code = status_code
    output_json.message = response_data['message']
    database.session.close()
    return output_json

