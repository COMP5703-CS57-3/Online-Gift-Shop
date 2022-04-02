# this module is to manage user profile page
# users can use the module to update the information and show thier information

#from flask_restplus import Namespace
from flask_restplus import Resource
from flask_restplus import marshal
from ..util.dto import User_information_dto
from flask import request
from ..service.user_update import update_user_information
from ..service.show_user_all_information import show_all_user_information_method
import json
# user_information_namespace is dto's namespace
user_information_namespace = User_information_dto.user_information_namespace

@user_information_namespace.route('/user_profile/update_user_information')
class UserUpdateInformation(Resource):
    @staticmethod
    @user_information_namespace.expect(User_information_dto.user_information_update_input_format)
    @user_information_namespace.response(200, 'successfully updated',
                                         model=User_information_dto.user_information_update_output_format)
    @user_information_namespace.response(300, 'input correct information',
                                         model=User_information_dto.user_information_update_output_format)
    @user_information_namespace.response(400, 'failed request',
                                         model=User_information_dto.user_information_update_output_format)
    def put():
        output_json = update_user_information(json.loads(request.data))
        if output_json.status_code == 200:
            return marshal(output_json, User_information_dto.user_information_update_output_format), 200
        elif output_json.status_code == 300:
            return marshal(output_json, User_information_dto.user_information_update_output_format), 300
        else:
            return marshal(output_json, User_information_dto.user_information_update_output_format), 400


@user_information_namespace.route('/user_profile/<id>')
class ShowAllUserInformation(Resource):
    @staticmethod
    @user_information_namespace.response(200, 'success',
                                         model=User_information_dto.get_user_all_information_output_format)
    @user_information_namespace.response(400, 'failed request',
                                         model=User_information_dto.get_user_all_information_fail_output_format)
    def get(id):
        output_json = show_all_user_information_method(id)
        if output_json.status_code == 200:
            return marshal(output_json, User_information_dto.get_user_all_information_output_format), 200
        else:
            return marshal(output_json, User_information_dto.get_user_all_information_fail_output_format), 400