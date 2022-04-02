from ..model.create_database import User
from ..connect_to_aws import database
from flask import make_response


# define the function that to process the user sign up
def signup_method(user_input_dictionary):
    # setting output_message is a dictionary
    output_message = {
        "message": "Information waiting for confirmation"
    }
    # search user's row information by user's email
    this_row_user_information = User.query.filter_by(user_email=user_input_dictionary["user_email"]).all()
    # this email has signed up, so cannot sign up again
    if this_row_user_information:
        status_code = 403
        output_message['message'] = "User already exits"
    # this email is absent, so can be signed up
    else:
        status_code = 200
        output_message['message'] = "User successfully sign up"
        # add the new user to the user table, the user's information is in 'user_input_dictionary'
        # this row is absent, so directly add the data
        this_row_user_information = User(user_name=user_input_dictionary["user_name"],
                                         user_email=user_input_dictionary["user_email"],
                                         user_password=user_input_dictionary["user_password"],
                                         user_mobile=user_input_dictionary["user_mobile"])
        database.session.add(this_row_user_information)
        # commit database
        database.session.commit()
    # database.session.close()
    # use make_response function add output_message's infor and dictionary format to output_json
    output_json = make_response(output_message)
    # show 0 as user's id, if the email has signed up
    if status_code == 403:
        output_json.id = 0
    # the new user's email is already in the User table, get the new user's id
    # show the new user's id to front-end
    else:
        new_user = User.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
        # database.session.close()
        output_json.id = new_user.id
    # show message in output_json to front-end
    output_json.message = output_message['message']
    # manage statues code(403 or 200)
    output_json.status_code = status_code
    database.session.close()
    return output_json