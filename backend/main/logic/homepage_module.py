import json
from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
from ..util.dto import main_home_page_dto
from ..service.show_homepage import *

main_home_page_namespace = main_home_page_dto.main_home_page_namespace

@main_home_page_namespace.route("")
class Home(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success', model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found', model=main_home_page_dto.main_home_no_gift_output_format)
    def get():
        # sort the main page gifts
        if request.args:
            # output_gifts = show_main_homepage_gifts_in_sort_method(request.args)
            output_gifts = show_main_homepage_gifts_in_sort_method()
        # show the main page gifts
        else:
            output_gifts = show_main_homepage_method()
        try:
            output_gifts.status_code
            return marshal(output_gifts, main_home_page_dto.main_home_no_gift_output_format)
        except:
            return marshal(output_gifts, main_home_page_dto.main_homepage_gifts_list_output_format)


