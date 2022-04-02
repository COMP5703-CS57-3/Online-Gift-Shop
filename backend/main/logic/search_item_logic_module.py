from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
from ..service.search_gift_by_name import search_gift_method
from ..util.dto import search_part_dto
import json
search_part_namespace = search_part_dto.search_part_namespace


@search_part_namespace.route("/search_gift/<gift_name>")
class Search_gift(Resource):
    @staticmethod
    @search_part_namespace.response(200, 'success', model=search_part_dto.search_gift_list_output_format)
    def get(gift_name):
        seatch_output_result = search_gift_method(gift_name)
        try:
            seatch_output_result.status_code
            return seatch_output_result
        except:
            return marshal(seatch_output_result, search_part_dto.search_gift_list_output_format)