from flask_restplus import Resource
from flask_restplus import marshal
from ..service.search_gift_by_name import search_gift_name_method
from ..service.search_gift_id_return_size import search_gift_id_return_size_method
from ..service.search_gift_by_id import search_gift_id_method
from ..util.dto import search_part_dto
search_part_namespace = search_part_dto.search_part_namespace


@search_part_namespace.route("/search_gift_name/<gift_name>")
class Search_gift_name(Resource):
    @staticmethod
    @search_part_namespace.response(200, 'success', model=search_part_dto.search_gift_list_output_format)
    def get(gift_name):
        seatch_output_result = search_gift_name_method(gift_name)
        try:
            seatch_output_result.status_code
            return seatch_output_result
        except:
            return marshal(seatch_output_result, search_part_dto.search_gift_list_output_format)


@search_part_namespace.route("/search_gift_id_return_size/<gift_id>")
class Search_gift_id_return_size(Resource):
    @staticmethod
    @search_part_namespace.response(200, 'success', model=search_part_dto.search_gift_id_return_size_output_format)
    def get(gift_id):
        seatch_output_result = search_gift_id_return_size_method(gift_id)
        try:
            seatch_output_result.status_code
            return seatch_output_result
        except:
            return marshal(seatch_output_result, search_part_dto.search_gift_id_return_size_output_format)


@search_part_namespace.route("/search_gift_id/<gift_id>")
class Search_gift_id(Resource):
    @staticmethod
    @search_part_namespace.response(200, 'success', model=search_part_dto.search_gift_id_output_format)
    def get(gift_id):
        seatch_output_result = search_gift_id_method(gift_id)
        try:
            seatch_output_result.status_code
            return seatch_output_result
        except:
            return marshal(seatch_output_result, search_part_dto.search_gift_id_output_format)