# this part is for DTO data transfer object
# The data transfer target is usually a data access object that retrieves data from a database
# Normalized input and output
# The DTO part is just for The data stored in the
# database is often the same as the data that needs to be displayed on the page
from flask_restplus import Namespace
from flask_restplus import fields



class login_part_dto:
    login_founction_namespace = Namespace("The user logic module",
                                description="test login, sign up, change password, get validation and forget password function here")

    # the sign up input/output format
    user_sign_up_expectation_input_format = login_founction_namespace.model("user_sign_up_expectation_input_format", {
        'user_name': fields.String,
        'user_email': fields.String,
        'user_mobile': fields.String,
        'user_password': fields.String
    })
    user_sign_up_output_format = login_founction_namespace.model("user_sign_up_output_format", {
        'id': fields.Integer,
        'message': fields.String,
    })

    # the login input/output format
    user_login_expectation_input_format = login_founction_namespace.model("user_login_expectation_input_format", {
        'user_email': fields.String,
        'user_password': fields.String
    })
    user_login_ouput_format = login_founction_namespace.model("user_login_ouput_format", {
        'id': fields.Integer,
        'message': fields.String,
    })
    user_login_200_ouput_format = login_founction_namespace.model("user_login_200_ouput_format", {
        'id': fields.Integer,
        'user_name': fields.String,
        'message': fields.String,
    })

    # the change password input/output format
    user_change_password_expectation_input_format = login_founction_namespace.model("user_change_password_expectation_input_format", {
        "id": fields.Integer,
        "user_old_password": fields.String,
        "user_new_password": fields.String,
    })
    user_change_password_output_format = login_founction_namespace.model("user_change_password_output_format", {
        "message": fields.String,
    })

    # the get validation input/output format
    user_get_validation_expectation_input_format = login_founction_namespace.model("user_get_validation_expectation_input_format", {
        "user_email": fields.String,
    })
    user_get_validation_output_format = login_founction_namespace.model("user_get_validation_output_format", {
        "validation_code": fields.String,
        "message": fields.String,
    })

    # the forget password input/output format
    user_forget_password_expectation_input_format = login_founction_namespace.model("user_forget_password_expectation_input_format", {
        "user_email": fields.String,
        "validation_code": fields.String,
        "user_new_password": fields.String,

    })
    user_forget_password_output_format = login_founction_namespace.model("user_forget_password_output_format", {
        "message": fields.String,
    })
    user_get_information_input_format = login_founction_namespace.model("user_get_information_input_format", {
        'id': fields.Integer,
        'user_password': fields.String,
    })
    user_get_information_output_format = login_founction_namespace.model("user_get_information_output_format", {
        'id': fields.Integer,
        'user_name': fields.String,
        'user_email': fields.String,
        'user_date_of_birth': fields.String,
        'user_mobile': fields.String,
        'user_address': fields.String,
        'message': fields.String,
    })

    # return_role_by_email_input_format = login_founction_namespace.model("return_role_by_email_input_format", {
    #     "email": fields.String,
    # })
    return_role_by_email_output_format = login_founction_namespace.model("return_role_by_email_output_format", {
        "message": fields.String,
    })

class User_information_dto:
    user_information_namespace = Namespace("User's information module", description="update user's information in this module")

    user_information_update_input_format = user_information_namespace.model("user_information_update_input_format",{
        'id': fields.Integer,
        'user_name': fields.String,
        'user_mobile': fields.String,
        'user_date_of_birth': fields.String,
        'user_address': fields.String,
    })
    user_information_update_output_format = user_information_namespace.model("user_information_update_output_format", {
        'id': fields.Integer,
        'message': fields.String,
    })

    get_user_all_information_output_format = user_information_namespace.model("get_user_all_information_output_format",{
        'id': fields.Integer,
        'user_name': fields.String,
        'user_email': fields.String,
        'user_date_of_birth': fields.String,
        'user_mobile': fields.String,
        'user_address': fields.String,
    })
    get_user_all_information_fail_output_format = user_information_namespace.model("get_user_all_information_fail_output_format",{
        'id': fields.Integer,
        'message': fields.String,
    })

class main_home_page_dto:
    main_home_page_namespace = Namespace("Main home page",
                        description="this page will show gifts in the home page")

    main_homepage_individual_gift_output_format = main_home_page_namespace.model("main_homepage_individual_gift_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        'gift_show_url1':fields.String,
        'gift_show_url2': fields.String,
        'gift_show_url3': fields.String,
        'gift_show_url4': fields.String,
        'gift_sales': fields.Integer,
        'gift_income': fields.Float
    })
    main_homepage_gifts_list_output_format = main_home_page_namespace.model("main_homepage_gifts_list_output_format", {
        'gifts': fields.List(fields.Nested(main_homepage_individual_gift_output_format))
    })
    main_home_no_gift_output_format = main_home_page_namespace.model("main_home_no_gift_output_format", {
        "message": fields.String,
    })

class WishlistDto:
    wishlist_ns = Namespace("Wishlist", description="inplement wishlist functionlities")
    create_wishlist_model = wishlist_ns.model("create_wishlist_model", {
        "owner_id": fields.Integer,
        "owner_first_name": fields.String,
        'owner_last_name': fields.String,
        'wishlist_name': fields.String,
        'description': fields.String,
        # 'wishlistid': fields.String,
        'address': fields.String,
        'phone': fields.String,
        'postcode': fields.String,
        'user_expected_delivery_time': fields.String,
    })
    create_wishlist_response_model = wishlist_ns.model("create_wishlist_response_model", {
        'message': fields.String,
        "owner_id": fields.Integer,
        'wishlist_id': fields.String
    })
    wishlist_item_model = wishlist_ns.model("wishlist_item_model", {
        "products_id": fields.Integer,
        "product_name": fields.String,
        "product_cover": fields.String,
        "size": fields.String,
        "price": fields.Float,
        "count": fields.Integer
    })
    wishlist_items_model = wishlist_ns.model("wishlist_items_model", {
        'id': fields.Integer,
        'wishlist_name': fields.String,
        'wishlist_description': fields.String,
        'wishlist_id': fields.String,
        'owner_id': fields.Integer,
        'first_name': fields.String,
        'last_name': fields.String,
        'address': fields.String,
        'phone': fields.String,
        'postcode': fields.String,
        'state': fields.String,
        'payer_fname': fields.String,
        'user_expected_delivery_time': fields.String,
        # 'total_price': fields.Float,
        'products': fields.List(fields.Nested(wishlist_item_model)),
    })
    show_wishlists_model = wishlist_ns.model('show_wishlists_model', {
        'wishlists_inf': fields.List(fields.Nested(wishlist_items_model))
    })
    wishlist_delete_item_model = wishlist_ns.model("wishlist_delete_item_model", {
        'user_id': fields.Integer,
        'product_id': fields.Integer,
        'size': fields.String
    })
    wishlist_change_count_model = wishlist_ns.model("wishlist_change_count_model", {
        "user_id": fields.Integer,
        "product_id": fields.Integer,
        "size": fields.String,
        "count": fields.Integer
    })
    delete_wishlist_model = wishlist_ns.model("delete_wishlist_model", {
        "owner_id": fields.Integer,
        "wishlist_id": fields.String,
    })
    add_items_model = wishlist_ns.model("add_items_model", {
        "owner_id": fields.Integer,
        "wishlist_id": fields.String,
        "product_id": fields.Integer,
        # "product_name": fields.String,
        # "cover_url": fields.String,
        "size": fields.String,
        "count" : fields.Integer,
        # "price": fields.Float,
    })
    remove_item_model = wishlist_ns.model("remove_item_model", {
        "owner_id": fields.Integer,
        "wishlist_id": fields.String,
        "product_id": fields.Integer,
    })
    remove_item_size_model = wishlist_ns.model("remove_item_size_model", {
        # "owner_id": fields.Integer,
        "wishlist_id": fields.String,
        "product_id": fields.Integer,
        "size": fields.String,
    })
    show_wishlist_request_model = wishlist_ns.model("show_wishlist_request_model", {
        "owner_id": fields.Integer
    })
    pay_each_item_model = wishlist_ns.model("pay_each_item_model", {
        "products_id": fields.Integer,
        "product_name": fields.String,
        "product_cover": fields.String,
        "size": fields.String,
        "count": fields.Integer,
        "price": fields.Float,
    })
    pay_input_format = wishlist_ns.model("pay_input_format", {
        "owner_id": fields.Integer,
        # "order_time": fields.String,
        "owner_first_name": fields.String,
        "owner_last_name": fields.String,
        "wishlist_id": fields.String,
        "phone": fields.String,
        "address": fields.String,
        "postcode": fields.String,
        "payer_first_name": fields.String,
        "payer_id": fields.String,
        "total_price": fields.Float,
        "product_list": fields.List(fields.Nested(pay_each_item_model))
    })
    pay_output_format = wishlist_ns.model("pay_output_format", {
        "owner_id": fields.Integer,
        "wishlist_id": fields.String,
        "owner_first_name": fields.String,
        "owner_last_name": fields.String,
        "payer_first_name": fields.String,
        "payer_id": fields.String,
        "order_number": fields.String,
        "user_expected_delivery_time": fields.String,
    })
    search_items_model = wishlist_ns.model("search_items_model", {
        "wishlist_id": fields.String,
    })
    wishlist_items_change_count_input_format = wishlist_ns.model("wishlist_items_change_count_input_format", {
        "wishlist_id": fields.String,
        "products_id": fields.Integer,
        "size": fields.String,
        "count": fields.Integer
    })
    wishlist_items_change_count_output_format = wishlist_ns.model("wishlist_items_change_count_output_format", {
        "message": fields.String
    })

    wishlist_send_email_input_format = wishlist_ns.model("wishlist_send_email_input_format", {
        "wishlist_id": fields.String,
        "receiver_email": fields.String,
    })
    wishlist_send_email_output_format = wishlist_ns.model("wishlist_send_email_output_format", {
        "message": fields.String
    })


class admin_part_dto:
    admin_part_namespace = Namespace("The admin logic module",
                                description="test admin function here")

    # the admin sign up input/output format
    admin_sign_up_expectation_input_format = admin_part_namespace.model("admin_sign_up_expectation_input_format", {
        'admin_name': fields.String,
        'admin_email': fields.String,
        'admin_mobile': fields.String,
        'admin_password': fields.String
    })
    admin_sign_up_expectation_output_format = admin_part_namespace.model("admin_sign_up_expectation_output_format", {
        'id': fields.Integer,
        'message': fields.String,
    })

    admin_login_expectation_input_format = admin_part_namespace.model("admin_login_expectation_input_format", {
        'admin_email': fields.String,
        'admin_password': fields.String
    })
    admin_login_output_format = admin_part_namespace.model("admin_login_output_format", {
        'id': fields.Integer,
        'admin_name': fields.String,
        'admin_email': fields.String,
        'admin_mobile': fields.String,
    })
    edit_size_model = admin_part_namespace.model("edit_size_model", {
        'size': fields.String,
        'size_stock': fields.Integer
    })
    admin_add_gift_items_input_model = admin_part_namespace.model('admin_add_gift_items_input_model', {
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'sizes': fields.List(fields.Nested(edit_size_model)),
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        'gift_show_url1': fields.String,
        'gift_show_url2': fields.String,
        'gift_show_url3': fields.String,
        'gift_show_url4': fields.String
    })
    admin_edit_gift_items_input_model = admin_part_namespace.model('admin_edit_gift_items_input_model', {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'sizes': fields.List(fields.Nested(edit_size_model)),
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        'gift_show_url1': fields.String,
        'gift_show_url2': fields.String,
        'gift_show_url3': fields.String,
        'gift_show_url4': fields.String
    })
    admin_add_size_for_item_model = admin_part_namespace.model('admin_add_size_for_item_model', {
        'size': fields.String,
        'stock': fields.Integer,
        'gift_id': fields.Integer
    })

    admin_return_all_users_output_format = admin_part_namespace.model("admin_return_all_users_output_format", {
        'id': fields.Integer,
        'user_name': fields.String,
        'user_email': fields.String,
        'user_mobile': fields.String,
        'user_date_of_birth': fields.String,
        'user_address': fields.String,
    })
    admin_return_no_user_output_format = admin_part_namespace.model("admin_return_no_user_output_format", {
        'message': fields.String,
    })

    admin_search_a_user_output_format = admin_part_namespace.model("admin_search_a_user_output_format", {
        'id': fields.Integer,
        'user_name': fields.String,
        'user_email': fields.String,
        'user_mobile': fields.String,
        'user_date_of_birth': fields.String,
        'user_address': fields.String,
    })
    admin_search_no_user_output_format = admin_part_namespace.model("admin_search_no_user_output_format", {
        'message': fields.String,
    })

    admin_return_wishlist_items_output_format = admin_part_namespace.model("admin_return_wishlist_items_output_format", {
        'belong_to_which_wishlist': fields.Integer,
        'wishlist_id': fields.String,
        'product_id': fields.Integer,
        'product_name': fields.String,
        'product_cover': fields.String,
        'size': fields.String,
        'price': fields.Float,
        'count': fields.Integer,
        'this_gift_state': fields.String,
        'paid_count': fields.Integer,
    })
    admin_return_all_wishlist_output_format = admin_part_namespace.model("admin_return_all_wishlist_output_format", {
        'id': fields.Integer,
        'wishlist_id': fields.String,
        'owner_id': fields.String,
        'wishlist_name': fields.String,
        'wishlist_description': fields.String,
        'first_name': fields.String,
        'last_name': fields.String,
        'address': fields.String,
        'phone': fields.String,
        'postcode': fields.String,
        'state': fields.String,
        'payer_fname': fields.String,
        'user_expected_delivery_time': fields.String,
        # 'total_price': fields.Float,
        'products': fields.List(fields.Nested(admin_return_wishlist_items_output_format)),
    })
    admin_return_no_wishlist_output_format = admin_part_namespace.model("admin_return_no_wishlist_output_format", {
        'message': fields.String,
    })
    show_wishlists = admin_part_namespace.model('show_wishlists', {
        'wishlists_inf': fields.List(fields.Nested(admin_return_all_wishlist_output_format))
    })

    admin_return_order_items_output_format = admin_part_namespace.model("admin_return_order_items_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'item_cover_url': fields.String,
        'size': fields.String,
        'count': fields.Integer,
        'price': fields.Float,
        'each_total_price': fields.Float,
        'gift_id': fields.Integer,
        'order_id': fields.Integer,
    })
    admin_return_all_orders_output_format = admin_part_namespace.model("admin_return_all_orders_output_format", {
        'id': fields.Integer,
        'order_time': fields.String,
        'order_total': fields.Float,
        'order_number': fields.String,
        'first_name': fields.String,
        'last_name': fields.String,
        'phone': fields.String,
        'address': fields.String,
        'postcode': fields.String,
        'payer_id': fields.Integer,
        'payer_name': fields.String,
        'order_state': fields.String,
        'wishlist_code': fields.String,
        'user_id': fields.Integer,
        'user_expected_delivery_time': fields.String,
        # 'total_price': fields.Float,
        'products': fields.List(fields.Nested(admin_return_order_items_output_format)),
    })
    show_orders = admin_part_namespace.model('show_orders', {
        'orders_inf': fields.List(fields.Nested(admin_return_all_orders_output_format))
    })

    admin_return_gift_size_output_format = admin_part_namespace.model("admin_return_gift_size_output_format", {
        'id': fields.Integer,
        'gift_id': fields.String,
        'size': fields.String,
        'stock': fields.Integer,
        'this_size_sales': fields.Float,
        'this_size_income': fields.Float,
    })
    admin_return_all_gifts_output_format = admin_part_namespace.model("admin_return_all_gifts_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'sizes': fields.List(fields.Nested(admin_return_gift_size_output_format)),
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        'gift_show_url1': fields.String,
        'gift_show_url2': fields.String,
        'gift_show_url3': fields.String,
        'gift_show_url4': fields.String,
        'gift_sales': fields.Integer,
        'gift_income': fields.Float
    })
    show_gifts = admin_part_namespace.model('show_gifts', {
        'gifts_inf': fields.List(fields.Nested(admin_return_all_gifts_output_format))
    })

    admin_input_payer_id_orders_format = admin_part_namespace.model("admin_input_payer_id_orders_format", {
        'payer_id': fields.Integer,
    })

class search_part_dto:
    search_part_namespace = Namespace("The search logic module",
                                description="test search function here")

    search_gift_output_format = search_part_namespace.model("search_gift_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'gift_cover_url': fields.String,
        'gift_sales': fields.Integer,
        'gift_income': fields.Float
    })
    search_gift_list_output_format = search_part_namespace.model("search_gift_list_output_format", {
        'search_gifts': fields.List(fields.Nested(search_gift_output_format))
    })

    search_gift_id_return_size_output_format = search_part_namespace.model("search_gift_id_return_size_output_format", {
        'gift_id': fields.Integer,
        'size': fields.String,
        'stock': fields.Integer,
        'this_size_sales': fields.String,
        'this_size_income': fields.String
    })

    search_gift_id_output_format = search_part_namespace.model("search_gift_id_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        'gift_show_url1': fields.String,
        'gift_show_url2': fields.String,
        'gift_show_url3': fields.String,
        'gift_show_url4': fields.String,
        'gift_sales': fields.Integer,
    })
    # search_gift_id_list_output_format = search_part_namespace.model("search_gift_id_list_output_format", {
    #     'search_gifts': fields.List(fields.Nested(search_gift_id_output_format))
    # })

class create_order_part_dto:
    create_order_part_namespace = Namespace("The create order logic module",
                                description="test order function here")
    order_input_product_list_model = create_order_part_namespace.model("order_input_product_list_model", {
        "product_id": fields.Integer,
        "product_name": fields.String,
        "cover_url": fields.String,
        "size": fields.String,
        "count": fields.Integer,
        "price": fields.Float,

    })
    create_order_input_format = create_order_part_namespace.model("create_order_input_format", {
        "wishlist_id": fields.String,
        "order_time": fields.String,
        "first_name": fields.String,
        "last_name": fields.String,
        "phone": fields.String,
        "address": fields.String,
        "postcode": fields.String,
        "total_price": fields.Float,
        "product_list": fields.List(fields.Nested(order_input_product_list_model))
    })
    create_order_output_format = create_order_part_namespace.model("create_order_output_format", {
        "user_id": fields.Integer,
        "wishlist_id": fields.String,
        "order_number": fields.String,
        "message": fields.String,
    })
    order_output_format = create_order_part_namespace.model("order_output_format", {
        "message": fields.String
    })
    order_gift_stock_output_format = create_order_part_namespace.model("order_gift_stock_output_format", {
        "message": fields.String,
        "product_list": fields.List(fields.Nested(order_input_product_list_model)),
    })
    delete_order_output_format = create_order_part_namespace.model("delete_order_output_format", {
        "message": fields.String
    })

    search_an_order_input_format = create_order_part_namespace.model("search_an_order_input_format", {
        "order_number": fields.String,
    })
    search_an_order_gift_output_format = create_order_part_namespace.model("search_an_order_gift_output_format", {
        "products_id": fields.Integer,
        "product_name": fields.String,
        "product_cover": fields.String,
        "size": fields.String,
        "price": fields.Float,
        "count": fields.Integer
    })
    search_an_order_output_format = create_order_part_namespace.model("search_an_order_output_format", {
        'id': fields.Integer,
        'order_time': fields.String,
        'order_total': fields.Float,
        'order_number': fields.String,
        'first_name': fields.String,
        'last_name': fields.String,
        'address': fields.String,
        'phone': fields.String,
        'postcode': fields.String,
        'payer_id': fields.Integer,
        'payer_name': fields.String,
        'order_state': fields.String,
        'wishlist_code': fields.String,
        'user_id': fields.Integer,
        'user_expected_delivery_time': fields.String,
        # 'total_price': fields.Float,
        'products': fields.List(fields.Nested(search_an_order_gift_output_format)),
    })
    pay_an_order_output_format = create_order_part_namespace.model("pay_an_order_output_format", {
        "message": fields.String
    })
    payment_order_parser = create_order_part_namespace.parser()
    payment_order_parser.add_argument('orderId', help='Order ID', required=True)
    payment_order_parser.add_argument('currency', help='Payment Currency')

class dashboard_dto:
    dashboard_namespace = Namespace("The dashboard logic module",
                                description="test dashboard function here")
    show_new_order_items_output_format = dashboard_namespace.model("show_new_order_items_output_format", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'item_cover_url': fields.String,
        'size': fields.String,
        'count': fields.Integer,
        'price': fields.Float,
        'each_total_price': fields.Float,
        'gift_id': fields.Integer,
        'order_id': fields.Integer,
    })
    show_new_orders_output_format = dashboard_namespace.model("show_new_orders_output_format", {
        'id': fields.Integer,
        'order_time': fields.String,
        'order_total': fields.Float,
        'order_number': fields.String,
        'first_name': fields.String,
        'last_name': fields.String,
        'phone': fields.String,
        'address': fields.String,
        'postcode': fields.String,
        'payer_id': fields.Integer,
        'payer_name': fields.String,
        'order_state': fields.String,
        'wishlist_code': fields.String,
        'user_id': fields.Integer,
        'user_expected_delivery_time': fields.String,
        # 'total_price': fields.Float,
        'products': fields.List(fields.Nested(show_new_order_items_output_format)),
    })
    show_new_orders = dashboard_namespace.model('show_new_orders', {
        'orders_inf': fields.List(fields.Nested(show_new_orders_output_format))
    })


    most_sales_gift_output = dashboard_namespace.model("most_sales_gift_output", {
        'id': fields.Integer,
        'gift_name': fields.String,
        'gift_price': fields.Float,
        'gift_discount_price': fields.Float,
        'gift_discount_state': fields.String,
        'gift_description': fields.String,
        'gift_category': fields.String,
        'gift_side_category1': fields.String,
        'gift_side_category2': fields.String,
        'gift_cover_url': fields.String,
        # 'gift_show_url1':fields.String,
        # 'gift_show_url2': fields.String,
        # 'gift_show_url3': fields.String,
        # 'gift_show_url4': fields.String,
        'gift_sales': fields.Integer,
        'gift_income': fields.Float
    })
    show_most_sales = dashboard_namespace.model('show_most_sales', {
        'most_sales_gifts': fields.List(fields.Nested(most_sales_gift_output))
    })

    show_users_number_information = dashboard_namespace.model("show_users_number_information", {
        "message": fields.String
    })

    show_order_number_information = dashboard_namespace.model("show_order_number_information", {
        "message": fields.String
    })