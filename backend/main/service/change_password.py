from ..model.create_database import User
from ..connect_to_aws import database
from flask import make_response



def change_password_method(user_input_dictionary):
    output_message = {
        "message": "Information waiting for confirmation"
    }
    # this is a change password function, so need to check the user row in User table by user id
    user = User.query.filter_by(id=user_input_dictionary["id"]).first()
    # the system has this user
    if user:
        user_input_old_password = user_input_dictionary["user_old_password"]
        user_system_password = user.user_password
        # if user input the correct old password
        if user_input_old_password == user_system_password:
            # the user input new password is not the system's old password
            if user_system_password != user_input_dictionary["user_new_password"]:
                # setting the system password is the user input new password
                user.user_password = user_input_dictionary["user_new_password"]
                database.session.commit()
                status_code = 200
                output_message['message'] = "The password already updated"
                # database.session.close()
                # database.close()
            else :
                status_code = 400
                output_message['message'] = "You cannot input your old password as your new password"
                # database.session.close()
                # database.close()
        # if user input the incorrect old password
        else:
            output_message['message'] = "Please input correct old password"
            status_code = 400
            # database.close()
            # database.session.close()
    # the system did not has this user
    else:
        output_message['message'] = "User id doesn't correct, please input correct user id"
        status_code = 400
        # database.session.close()
        # database.close()
    # use make_response function add output_message's infor and dictionary format to output_json
    output_json = make_response(output_message)
    # the status code can be 200 or 400
    output_json.status_code = status_code
    output_json.message = output_message['message']
    output_json.response_data = output_message
    database.session.close()
    return output_json