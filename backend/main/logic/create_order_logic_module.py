from flask_restplus import Resource
from flask_restplus import marshal
import json

from ..service.create_an_pay import create_checkout_session, pay_order_success, pay_order_fail
from ..util.dto import create_order_part_dto
from ..service.create_order import process_order_create
from ..service.delete_order import process_delete_order
from ..service.search_an_order import search_an_order_method
from ..service.pay_an_order import pay_an_order_method, set_an_order_as_delivery, set_an_order_as_completed
create_order_part_namespace = create_order_part_dto.create_order_part_namespace
from flask import request, redirect


@create_order_part_namespace.route('/create')
class CreateOrder(Resource):
    @staticmethod
    @create_order_part_namespace.expect(create_order_part_dto.create_order_input_format)
    @create_order_part_namespace.response(200, 'success', model=create_order_part_dto.create_order_output_format)
    @create_order_part_namespace.response(404, 'not found')
    @create_order_part_namespace.response(403, 'Bad request')
    def post():
        resp = process_order_create(json.loads(request.data))
        if resp.status_code == 404:
            return marshal(resp, create_order_part_dto.order_output_format), 404
        elif resp.status_code == 403:
            return marshal(resp.response_data, create_order_part_dto.order_gift_stock_output_format), 403
        else:
            return marshal(resp.response_data, create_order_part_dto.create_order_output_format), 200

@create_order_part_namespace.route('/delete/<user_id>/<order_number>')
class DeleteOrder(Resource):
    @staticmethod
    @create_order_part_namespace.response(200, 'success', model=create_order_part_dto.delete_order_output_format)
    @create_order_part_namespace.response(403, 'not found')
    def post(user_id, order_number):
        resp = process_delete_order(user_id, order_number)
        if resp.status_code == 403:
            return marshal(resp, create_order_part_dto.delete_order_output_format), 403
        else:
            return marshal(resp, create_order_part_dto.delete_order_output_format), 200


@create_order_part_namespace.route('/search_an_order/<an_order>')
class SearchAnOrder(Resource):
    @staticmethod
    #@create_order_part_namespace.expect(create_order_part_dto.search_an_order_input_format)
    @create_order_part_namespace.response(200, 'success', create_order_part_dto.search_an_order_output_format)
    @create_order_part_namespace.response(404, 'not found')
    @create_order_part_namespace.response(400, 'Bad request')
    def post(an_order):
        # resp = search_an_order_method(json.loads(request.data))
        resp = search_an_order_method(an_order)
        if resp.status_code == 200:
            return marshal(resp.response_data, create_order_part_dto.search_an_order_output_format)
        else:
            return resp


@create_order_part_namespace.route('/create_checkout_session')
class CreateCheckoutSession(Resource):
    @staticmethod
    @create_order_part_namespace.response(200, 'success')
    @create_order_part_namespace.response(404, 'not found')
    @create_order_part_namespace.response(400, 'Bad request')
    @create_order_part_namespace.expect(create_order_part_dto.create_checkout_session_format)
    def post():
        an_order = json.loads(request.data)
        resp = create_checkout_session(an_order)
        if resp.status_code == 200:
            return redirect(resp.response_data.url, code=303)
        else:
            return resp


@create_order_part_namespace.route('/pay_result/<order_id>')
class PayResultCallback(Resource):
    @staticmethod
    def get(order_id):
        args = request.args
        if args.get('success'):
            resp = pay_order_success(order_id)
            if resp.status_code == 200:
                return redirect("http://localhost:3000/", code=303)
        else:
            resp = pay_order_fail(order_id)
            if resp.status_code == 200:
                return 'pay fail'


@create_order_part_namespace.route('/pay_an_order/<an_order>')
class PayAnOrder(Resource):
    @staticmethod
    #@create_order_part_namespace.expect(create_order_part_dto.search_an_order_input_format)
    @create_order_part_namespace.response(200, 'success', create_order_part_dto.pay_an_order_output_format)
    @create_order_part_namespace.response(400, 'Bad request', create_order_part_dto.pay_an_order_output_format)
    def post(an_order):
        # resp = search_an_order_method(json.loads(request.data))
        resp = pay_an_order_method(an_order)
        if resp.status_code == 200:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 200
        else:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 400


@create_order_part_namespace.route('/set_an_order_as_delivery/<an_order>')
class SetAnOrderAsDelivery(Resource):
    @staticmethod
    #@create_order_part_namespace.expect(create_order_part_dto.search_an_order_input_format)
    @create_order_part_namespace.response(200, 'success', create_order_part_dto.pay_an_order_output_format)
    @create_order_part_namespace.response(400, 'Bad request', create_order_part_dto.pay_an_order_output_format)
    def post(an_order):
        # resp = search_an_order_method(json.loads(request.data))
        resp = set_an_order_as_delivery(an_order)
        if resp.status_code == 200:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 200
        else:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 400


@create_order_part_namespace.route('/set_an_order_as_completed/<an_order>')
class SetAnOrderAsCompleted(Resource):
    @staticmethod
    #@create_order_part_namespace.expect(create_order_part_dto.search_an_order_input_format)
    @create_order_part_namespace.response(200, 'success', create_order_part_dto.pay_an_order_output_format)
    @create_order_part_namespace.response(400, 'Bad request', create_order_part_dto.pay_an_order_output_format)
    def post(an_order):
        # resp = search_an_order_method(json.loads(request.data))
        resp = set_an_order_as_completed(an_order)
        if resp.status_code == 200:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 200
        else:
            return marshal(resp, create_order_part_dto.pay_an_order_output_format), 400