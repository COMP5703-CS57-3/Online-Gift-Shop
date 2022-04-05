from flask_restplus import Resource
from flask_restplus import marshal
import json
from ..util.dto import create_order_part_dto
from ..service.create_order import process_order_create
from ..service.delete_order import process_delete_order
create_order_part_namespace = create_order_part_dto.create_order_part_namespace
from flask import request


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
    def get(user_id, order_number):
        resp = process_delete_order(user_id, order_number)
        if resp.status_code == 403:
            return marshal(resp, create_order_part_dto.delete_order_output_format), 403
        else:
            return marshal(resp, create_order_part_dto.delete_order_output_format), 200