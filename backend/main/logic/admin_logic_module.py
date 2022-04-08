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
from ..service.admin_return_all_users import admin_return_all_users_methods
from ..service.admin_search_a_user import admin_search_a_user_method
from ..service.admin_search_a_user import admin_search_a_user_by_name_method
from ..service.admin_search_a_user import admin_search_a_user_by_email_method
from ..service.admin_return_all_wishlist import admin_return_all_wishlist_methods
from ..service.admin_return_all_orders import admin_return_all_order_methods
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


@admin_namespace.route("/admin_return_all_users")
class AdminReturnAllUsers(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_return_all_users_output_format)
    @admin_namespace.response(400, 'Not Found', model=admin_part_dto.admin_return_no_user_output_format)
    def get():
        output_gifts = admin_return_all_users_methods()
        try:
            output_gifts.status_code
            return marshal(output_gifts, admin_part_dto.admin_return_no_user_output_format), 400
        except:
            return marshal(output_gifts, admin_part_dto.admin_return_all_users_output_format), 200
        # if output_gifts.status_code == 200:
        #     return marshal(output_gifts, admin_part_dto.admin_return_all_users_output_format), 200
        # else:
        #     return marshal(output_gifts, admin_part_dto.admin_return_no_user_output_format), 404

@admin_namespace.route("/admin_search_a_user_by_id/<user_id>")
class AdminSearchAUser(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_search_a_user_output_format)
    @admin_namespace.response(400, 'failed request', model=admin_part_dto.admin_search_no_user_output_format)
    def get(user_id):
        output_gifts = admin_search_a_user_method(user_id)
        try:
            output_gifts.status_code
            return marshal(output_gifts, admin_part_dto.admin_search_no_user_output_format), 400
        except:
            return marshal(output_gifts, admin_part_dto.admin_search_a_user_output_format), 200
        # if seatch_output_result.status_code == 200:
        #     return marshal(seatch_output_result, admin_part_dto.admin_search_a_user_output_format), 200
        # else:
        #     return marshal(seatch_output_result, admin_part_dto.admin_search_no_user_output_format), 400

@admin_namespace.route("/admin_search_a_user_by_name/<user_name>")
class AdminSearchAUserByName(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_search_a_user_output_format)
    @admin_namespace.response(400, 'failed request', model=admin_part_dto.admin_search_no_user_output_format)
    def get(user_name):
        output_gifts = admin_search_a_user_by_name_method(user_name)
        try:
            output_gifts.status_code
            return marshal(output_gifts, admin_part_dto.admin_search_no_user_output_format), 400
        except:
            return marshal(output_gifts, admin_part_dto.admin_search_a_user_output_format), 200

@admin_namespace.route("/admin_search_a_user_by_email/<user_email>")
class AdminSearchAUserByEmail(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', model=admin_part_dto.admin_search_a_user_output_format)
    @admin_namespace.response(400, 'failed request', model=admin_part_dto.admin_search_no_user_output_format)
    def get(user_email):
        output_gifts = admin_search_a_user_by_email_method(user_email)
        try:
            output_gifts.status_code
            return marshal(output_gifts, admin_part_dto.admin_search_no_user_output_format), 400
        except:
            return marshal(output_gifts, admin_part_dto.admin_search_a_user_output_format), 200

# @admin_namespace.route("/admin_return_all_wishlist")
# class AdminReturnAllWishlist(Resource):
#     @staticmethod
#     @admin_namespace.response(200, 'success', model=admin_part_dto.admin_return_all_wishlist_output_format)
#     @admin_namespace.response(400, 'Not Found', model=admin_part_dto.admin_return_no_wishlist_output_format)
#     def get():
#         output_gifts = admin_return_all_wishlist_methods()
#         try:
#             output_gifts.status_code
#             return marshal(output_gifts, admin_part_dto.admin_return_no_wishlist_output_format)
#         except:
#             return marshal(output_gifts, admin_part_dto.admin_return_all_wishlist_output_format)


@admin_namespace.route("/admin_return_all_wishlist")
class ShowWishlist(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', admin_part_dto.show_wishlists)
    @admin_namespace.response(404, 'not found')
    def get():
        resp = admin_return_all_wishlist_methods()
        if resp.status_code == 200:
            return marshal(resp.response_data, admin_part_dto.show_wishlists)
        else:
            return resp


@admin_namespace.route("/admin_return_all_orders")
class ShowOrders(Resource):
    @staticmethod
    @admin_namespace.response(200, 'success', admin_part_dto.show_orders)
    @admin_namespace.response(404, 'not found')
    def get():
        resp = admin_return_all_order_methods()
        if resp.status_code == 200:
            return marshal(resp.response_data, admin_part_dto.show_orders)
        else:
            return resp