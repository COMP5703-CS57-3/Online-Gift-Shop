from flask_restplus import Resource
from flask_restplus import marshal
from flask import request
from ..util.dto import main_home_page_dto
from ..service.show_homepage import show_main_homepage_gifts_in_sort_method
from ..service.show_homepage import show_main_homepage_method
from ..service.show_homepage import show_top_category_method
from ..service.show_homepage import show_side_category_method
from ..service.show_homepage import just_search_side_category_method

main_home_page_namespace = main_home_page_dto.main_home_page_namespace

@main_home_page_namespace.route("")
class Home(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success', model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found', model=main_home_page_dto.main_home_no_gift_output_format)
    def get():
        # sort the main page gifts
        if request.args:
            output_gifts = show_main_homepage_gifts_in_sort_method(request.args)
            # output_gifts = show_main_homepage_gifts_in_sort_method()
        # show the main page gifts
        else:
            output_gifts = show_main_homepage_method()
        try:
            output_gifts.status_code
            return marshal(output_gifts, main_home_page_dto.main_home_no_gift_output_format)
        except:
            return marshal(output_gifts, main_home_page_dto.main_homepage_gifts_list_output_format)


top_categories = ['Clothing', 'Shoe', 'Electronics', 'Birthday', 'WeddingCelebration',
                  'Christmas', 'EasterDay', 'NewYear', 'Graduate', 'Other']
side_categories1 = ['Male', 'Female', 'Other']
side_categories2 = ['Juvenile', 'Youth', 'Elderly']
the_sort_type = ['price-low-to-high', 'price-high-to-low', 'popular','discountprice-low-to-high', 'discountprice-high-to-low']
@main_home_page_namespace.route("/<top_category>, <sort>")
class Category_design1(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success', model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found')
    def get(top_category, sort):
        gifts = show_top_category_method(top_category, sort)
        try:
            gifts.status_code
            return gifts
        except:
            return marshal(gifts, main_home_page_dto.main_homepage_gifts_list_output_format)

@main_home_page_namespace.route("/top_category")
class Category_design2(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success',
                                       model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found')
    def get():
        if 'top_type' in request.args.keys():
            category = request.args['top_type'].capitalize()
            if category in top_categories:
                if 'gift_sort' in request.args.keys():
                    sort = request.args['gift_sort'].lower()
                    gifts = show_top_category_method(category, sort)
                else:
                    sort = 'do_not_sort'
                    gifts = show_top_category_method(category, sort)
                try:
                    gifts.status_code
                    return gifts
                except:
                    return marshal(gifts, main_home_page_dto.main_homepage_gifts_list_output_format)

@main_home_page_namespace.route("/<top_category>, <side_category1>, <side_category2>, <sort>")
class Category_side_design1(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success', model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found')
    def get(top_category, side_category1,side_category2, sort):
        gifts = show_side_category_method(top_category, side_category1, side_category2, sort)
        try:
            gifts.status_code
            return gifts
        except:
            return marshal(gifts, main_home_page_dto.main_homepage_gifts_list_output_format)



@main_home_page_namespace.route("/<side_category1>, <side_category2>, <sort>")
class JustCategorysideSearch(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success', model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found')
    def get(side_category1,side_category2, sort):
        gifts = just_search_side_category_method(side_category1, side_category2, sort)
        try:
            gifts.status_code
            return gifts
        except:
            return marshal(gifts, main_home_page_dto.main_homepage_gifts_list_output_format)



@main_home_page_namespace.route("/all_category")
class Category_side_design2(Resource):
    @staticmethod
    @main_home_page_namespace.response(200, 'success',
                                       model=main_home_page_dto.main_homepage_gifts_list_output_format)
    @main_home_page_namespace.response(404, 'Not Found')
    def get():
        if 'top_type' in request.args.keys():
            category = request.args['top_type'].capitalize()
            if category in top_categories:
                if 'side_type1' in request.args.keys():
                    side_category1 = request.args['side_type1'].capitalize()
                    if side_category1 in side_categories1:
                        if 'side_type2' in request.args.keys():
                            side_category2 = request.args['side_type2'].capitalize()
                            if side_category2 in side_categories2:
                                if 'gift_sort' in request.args.keys():
                                    gift_sort = request.args['gift_sort'].lower()
                                    gifts = show_side_category_method(category, side_category1, side_category2, gift_sort)
                                else:
                                    gift_sort = 'do_not_sort'
                                    gifts = show_side_category_method(category, side_category1, side_category2, gift_sort)
                                try:
                                    gifts.status_code
                                    return gifts
                                except:
                                    return marshal(gifts, main_home_page_dto.main_homepage_gifts_list_output_format)