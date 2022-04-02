from flask_restplus import Namespace, Resource, marshal
from flask import request, make_response, jsonify
import json
from ..service.wishlist import *
from ..util.dto import WishlistDto

wishlist_ns = WishlistDto.wishlist_ns

@wishlist_ns.route('/create')
class CreateWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.create_wishlist_model)
    @wishlist_ns.response(200, 'success', model=WishlistDto.create_wishlist_response_model)
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = create_wishlist(json.loads(request.data))
        return resp


@wishlist_ns.route('/delete')
class DeleteWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.delete_wishlist_model)
    @wishlist_ns.response(200, 'success')
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = delete_wishlist(json.loads(request.data))
        return resp


@wishlist_ns.route('/add')
class AddToWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.add_items_model)
    @wishlist_ns.response(200, 'success')
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = add_items(json.loads(request.data))
        return resp


@wishlist_ns.route('/remove')
class RemoveFromWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.remove_item_model)
    @wishlist_ns.response(200, 'success')
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = remove_item(json.loads(request.data))
        return resp


@wishlist_ns.route('/show')
class ShowWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.show_wishlist_request_model)
    @wishlist_ns.response(200, 'success', WishlistDto.show_wishlists_model)
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = show_all(json.loads(request.data))
        if resp.status_code == 200:
            return marshal(resp.response_data, WishlistDto.show_wishlists_model)
        else:
            return resp



@wishlist_ns.route('/pay')
class PayWishlist(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.pay_all_items_model)
    @wishlist_ns.response(200, 'success', WishlistDto.wishlist_complete_model)
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = pay_wishlist(json.loads(request.data))
        if resp.status_code == 200:
            return marshal(resp.response_data, WishlistDto.wishlist_complete_model)
        else:
            return resp


@wishlist_ns.route('/search')
class SearchWishList(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.search_items_model)
    @wishlist_ns.response(200, 'success', WishlistDto.wishlist_items_model)
    @wishlist_ns.response(404, 'not found')
    @wishlist_ns.response(400, 'Bad request')
    def post():
        resp = search(json.loads(request.data))
        if resp.status_code == 200:
            return marshal(resp.response_data, WishlistDto.wishlist_items_model)
        else:
            return resp

@wishlist_ns.route('/changeCount')
class ChangeCount(Resource):
    @staticmethod
    @wishlist_ns.expect(WishlistDto.wishlist_items_change_count_input_format)
    @wishlist_ns.response(200, 'success', model=WishlistDto.wishlist_items_change_count_output_format)
    @wishlist_ns.response(400, 'Bad request')
    def put():
        resp = process_change_count(json.loads(request.data))
        if resp.status_code == 400:
            return marshal(resp, WishlistDto.wishlist_items_change_count_output_format), 400
        else:
            return marshal(resp, WishlistDto.wishlist_items_change_count_output_format), 200
