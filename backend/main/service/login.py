from ..model.create_database import User
from flask import make_response


# define the function that to process the user login function
def login_method(user_input_dictionary):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    # output_message_200 = {
    #     "user_name": "",
    #     "message": "Information waiting for confirmation"
    # }
    # this is a login function, so need to check the user row in User table by user email
    user = User.query.filter_by(user_email=user_input_dictionary["user_email"]).first()
    # this situation is the user did not exit
    if user is None:
        status_code = 403
        output_message['message'] = "User did not exit, please sign up first"
    # this situation is the user input incorrect password
    elif user.user_password != user_input_dictionary["user_password"]:
        status_code = 400
        output_message['message'] = 'Please input correct password'
    # this situation is the user's password is correct
    elif user.user_password == user_input_dictionary["user_password"]:
        status_code = 200
        output_message['user_name'] = user.user_name
        output_message['message'] = "User login successfully"
    else:
        status_code = 404
        output_message['message'] = "Unknown error"
    if user:
        # use make_response function add output_message's infor and dictionary format to output_json
        output_json = make_response(output_message)
        # the status_code should be 200, 400, 403, 404
        output_json.status_code = status_code
        # pass the 'message' information in above 4 types
        output_json.id = user.id
        output_json.message = output_message['message']
        output_json.user_name = output_message['user_name']
        # if user exits, will pass the user's id to front-end

    else:
        # use make_response function add output_message's infor and dictionary format to output_json
        output_json = make_response(output_message)
        # the status_code should be 200, 400, 403, 404
        output_json.status_code = status_code
        # pass the 'message' information in above 4 types
        output_json.message = output_message['message']
        # if user exits, will pass the user's id to front-end
        output_json.id = 0

    return output_json
