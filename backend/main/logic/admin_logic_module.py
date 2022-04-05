from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
import json
from ..util.dto import admin_part_dto
from ..service.admin_sign_up import admin_signup
from ..service.admin_login import admin_login
from ..service.admin_manage_items import admin_add_gift_method
from ..service.admin_manage_items import admin_edit_gift_method
from ..service.admin_manage_items import admin_delete_gift_method
admin_namespace = admin_part_dto.admin_part_namespace

@admin_namespace.route("/admin_sign_up")
class AdminSignup(Resource):
    @staticmethod
    @admin_namespace.expect(admin_part_dto.admin_sign_up_expectation_input_format)
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_sign_up_expectation_output_format)
    @admin_namespace.response(400, 'Bad request')
    def post():
        resp = admin_signup(json.loads(request.data))
        if resp.status_code == 400:
            return marshal(resp, admin_part_dto.admin_sign_up_expectation_output_format), 400
        else:
            return marshal(resp, admin_part_dto.admin_sign_up_expectation_output_format), 200

@admin_namespace.route("/admin_login")
class Adminlogin(Resource):

    @staticmethod
    @admin_namespace.expect(admin_part_dto.admin_login_expectation_input_format)
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_login_output_format)
    @admin_namespace.response(400, 'Bad Request')
    @admin_namespace.response(404, 'Not Found')
    def post():
        output_admin_information = admin_login(json.loads(request.data))
        try:
            output_admin_information.status_code
            return output_admin_information
        except:
            return marshal(output_admin_information, admin_part_dto.admin_login_output_format)

@admin_namespace.route("/admin_add_items")
class AddManage(Resource):

    @staticmethod
    @admin_namespace.expect(admin_part_dto.admin_add_gift_items_input_model)
    def post():
        resp = admin_add_gift_method(json.loads(request.data))
        return resp

@admin_namespace.route("/admin_edit_items")
class EditManage(Resource):
    @staticmethod
    @admin_namespace.expect(admin_part_dto.admin_edit_gift_items_input_model)
    def put():
        resp = admin_edit_gift_method(json.loads(request.data))
        return resp

@admin_namespace.route("/admin_manage_items/delete/<id>")
class AdminDelete(Resource):
    @staticmethod
    def delete(id):
        resp = admin_delete_gift_method(id)
        return resp



