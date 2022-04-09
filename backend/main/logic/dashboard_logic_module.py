from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
from ..util.dto import dashboard_dto
from ..service.dashboard_return_new_orders import return_new_order_methods
from ..service.dashboard_show_good_sales_gift import show_good_sales_gift_method
from ..service.dashboard_show_users_number import show_users_number_method
from ..service.dashboard_show_all_order_number import show_all_order_number_method, show_completed_order_number_method
from ..service.dashboard_show_all_wishlist_number import show_wishlist_number_method
from ..service.show_homepage import show_main_homepage_method
from ..service.show_homepage import show_top_category_method
from ..service.show_homepage import show_side_category_method

dashboard_namespace = dashboard_dto.dashboard_namespace


@dashboard_namespace.route("/return_new_orders")
class ShowNewOrders(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_new_orders)
    @dashboard_namespace.response(404, 'not found')
    def post():
        resp = return_new_order_methods()
        if resp.status_code == 200:
            return marshal(resp.response_data, dashboard_dto.show_new_orders)
        else:
            return resp


# @dashboard_namespace.route("/show_good_sales_gift")
# class ShowGoodSalesGift(Resource):
#     @staticmethod
#     @dashboard_namespace.response(200, 'success', model=dashboard_dto.most_sales_gift_output)
#     @dashboard_namespace.response(400, 'Not Found', model=dashboard_dto.no_most_sales_gift_output)
#     def post():
#         output_gifts = show_good_sales_gift_method()
#         try:
#             output_gifts.status_code
#             return marshal(output_gifts, dashboard_dto.no_most_sales_gift_output), 400
#         except:
#             return marshal(output_gifts, dashboard_dto.most_sales_gift_output), 200
@dashboard_namespace.route("/show_good_sales_gift")
class ShowGoodSalesGift(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_most_sales)
    @dashboard_namespace.response(404, 'not found')
    def post():
        resp = show_good_sales_gift_method()
        if resp.status_code == 200:
            return marshal(resp.response_data, dashboard_dto.show_most_sales)
        else:
            return resp

@dashboard_namespace.route("/show_users_number")
class ShowUsersNumber(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_order_number_information)
    @dashboard_namespace.response(400, 'not found', dashboard_dto.show_order_number_information)
    def post():
        resp = show_users_number_method()
        if resp.status_code == 200:
            return marshal(resp, dashboard_dto.show_users_number_information), 200
        else:
            return marshal(resp, dashboard_dto.show_users_number_information), 400

@dashboard_namespace.route("/show_all_order_number")
class ShowAllOrderNumber(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_order_number_information)
    @dashboard_namespace.response(400, 'not found', dashboard_dto.show_order_number_information)
    def post():
        resp = show_all_order_number_method()
        if resp.status_code == 200:
            return marshal(resp, dashboard_dto.show_order_number_information), 200
        else:
            return marshal(resp, dashboard_dto.show_order_number_information), 400

@dashboard_namespace.route("/show_completed_order_number")
class ShowCompletedOrderNumber(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_order_number_information)
    @dashboard_namespace.response(400, 'not found', dashboard_dto.show_order_number_information)
    def post():
        resp = show_completed_order_number_method()
        if resp.status_code == 200:
            return marshal(resp, dashboard_dto.show_order_number_information), 200
        else:
            return marshal(resp, dashboard_dto.show_order_number_information), 400

@dashboard_namespace.route("/show_wishlist_number")
class ShowWishlistNumber(Resource):
    @staticmethod
    @dashboard_namespace.response(200, 'success', dashboard_dto.show_order_number_information)
    @dashboard_namespace.response(400, 'not found', dashboard_dto.show_order_number_information)
    def post():
        resp = show_wishlist_number_method()
        if resp.status_code == 200:
            return marshal(resp, dashboard_dto.show_order_number_information), 200
        else:
            return marshal(resp, dashboard_dto.show_order_number_information), 400