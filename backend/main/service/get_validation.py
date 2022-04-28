from ..model.create_database import User
from ..model.create_database import ValidationInformation
import random
from flask import make_response
from flask_mail import Mail,Message
from flask import Flask
from ..connect_to_aws import database



# open-source code from https://blog.csdn.net/Pythonlaowan/article/details/100326118
def generate_verification_code(len=6):
    code_list = []
    for i in range(10):
        code_list.append(str(i))
    for i in range(65, 91):
        code_list.append(chr(i))
    for i in range(97, 123):
        code_list.append(chr(i))
    myslice = random.sample(code_list, len)
    verification_code = ''.join(myslice)
    return verification_code

# define the function that to process the user change password
def get_validation_method(user_input_dictionary):
    response_data = {
        "message": "success"
    }
    status_code = 200
    # this is a get validation function, so need to check the user row in User table by user email
    userInfomation = User.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
    # this row is exsit in User table
    if userInfomation:
        validation_information = ValidationInformation.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
        # this row is exist in Validation table, put new validation code
        if validation_information:
            validation_code = generate_verification_code(6)
            response_data['validation_code'] = validation_code
            response_data['message'] = "the validation code already sent to your email"
            app = Flask(__name__)
            app.config["MAIL_SERVER"] = "smtp.qq.com"
            app.config["MAIL_PORT"] = 465
            app.config['MAIL_USE_SSL'] = True
            app.config['MAIL_USE_TLS'] = False
            app.config["MAIL_USERNAME"] = "zhengli74@qq.com"
            app.config["MAIL_PASSWORD"] = "ldegcibyorucbggj"
            mail = Mail(app)
            user_email = user_input_dictionary["user_email"]
            msg = Message("Validation Code",
                          sender="zhengli74@qq.com",
                          recipients=[user_email])
            output = "the Online Gift Shop's validation code is {code}"
            msg.body = output.format(code=validation_code)
            with app.app_context():
                mail.send(msg)
            # put validation code to Validation table
            validation_information.validation_code = validation_code
            # ValidationInformation(validation_code=validation_code)
            database.session.commit()

        # The Validation table does not contain this email,
        # put email and validation code
        else:
            # send validation code to email
            validation_code = generate_verification_code(6)
            response_data['validation_code'] = validation_code
            response_data['message'] = "the validation code already sent to your email"
            app = Flask(__name__)
            app.config["MAIL_SERVER"] = "smtp.qq.com"
            app.config["MAIL_PORT"] = 465
            app.config['MAIL_USE_SSL'] = True
            app.config['MAIL_USE_TLS'] = False
            app.config["MAIL_USERNAME"] = "519231856@qq.com"
            app.config["MAIL_PASSWORD"] = "ixsmrheedjkqbhdh"
            mail = Mail(app)
            user_email = user_input_dictionary["user_email"]
            msg = Message("Validation Code",
                          sender="519231856@qq.com",
                          recipients=[user_email])
            output = "the Online Gift Shop's validation code is {code}"
            msg.body = output.format(code = validation_code)
            with app.app_context():
                mail.send(msg)
            # put email and validation code to Validation table
            user_email = user_input_dictionary["user_email"]
            # validation_code = userInf["validation_code"]
            validationInf = ValidationInformation(user_email=user_email, validation_code=validation_code)
            database.session.add(validationInf)
            database.session.commit()


    # the user email is absent in User table
    else:
        status_code = 400
        response_data['validation_code'] = "null"
        response_data['message'] = "user did not exits"

    output_json = make_response(response_data)
    output_json.status_code = status_code
    output_json.validation_code = response_data['validation_code']
    output_json.message = response_data['message']
    database.session.close()
    return output_json