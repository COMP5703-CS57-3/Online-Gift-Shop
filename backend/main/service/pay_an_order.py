from ..model.create_database import Order
from ..model.create_database import OrderItems
from ..model.create_database import Size
from ..model.create_database import Gifts
from flask import make_response
from ..connect_to_aws import database



def pay_an_order_method(info):
    response_message = {
        "message": "paid successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_paid = Order.query.filter_by(order_number=info, order_state='paid').first()
        if this_row_order_paid:
            status_code = 400
            response_message['message'] = 'This order has been paid.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            paid_order = 'paid'
            the_order_id = this_row_order.id
            change_infor = OrderItems.query.filter_by(order_id=the_order_id).all()
            if change_infor:
                for o in change_infor:
                    the_gift_size_change = Size.query.filter_by(gift_id=o.productID, size=o.size).first()
                    if the_gift_size_change:
                        each_sales = the_gift_size_change.this_size_sales
                        each_stock = the_gift_size_change.stock
                        the_gift_size_change.stock = each_stock - o.count
                        the_gift_size_change.this_size_sales = each_sales + o.count
                        each_income = the_gift_size_change.this_size_income
                        the_gift_size_change.this_size_income = each_income + o.each_total_price
                        product_info = Gifts.query.filter_by(id=o.productID).first()
                        gift_sales = product_info.gift_sales
                        gift_income = product_info.gift_income
                        product_info.gift_sales = gift_sales + o.count
                        product_info.gift_income = gift_income + o.each_total_price
                        # database.session.commit()
                        # database.session.flush()
                        # database.session.refresh(product_info)
                        # database.session.refresh(the_gift_size_change)
                        # database.session.close()
                    else:
                        response_message['message'] = 'do not have this gift or size in the system'
                        resp = make_response(response_message)
                        resp.message = response_message['message']
                        resp.status_code = status_code
                        database.session.close()
                        return resp
            else:
                response_message['message'] = 'do not have this item in the order'
                resp = make_response(response_message)
                resp.message = response_message['message']
                resp.status_code = status_code
                database.session.close()
                return resp
            this_row_order.order_state = paid_order
            database.session.commit()
            response_message['message'] = 'paid successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp


def set_an_order_as_delivery(info):
    response_message = {
        "message": "set an order as delivery successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_delivery = Order.query.filter_by(order_number=info, order_state='delivery').first()
        if this_row_order_delivery:
            status_code = 400
            response_message['message'] = 'This order has been delivered.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            delivery_order = 'delivery'
            this_row_order.order_state = delivery_order
            database.session.commit()
            response_message['message'] = 'set an order as delivery successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp

def set_an_order_as_completed(info):
    response_message = {
        "message": "set an order as completed successfully"
    }
    status_code = 200
    this_row_order = Order.query.filter_by(order_number=info).first()
    if not this_row_order:
        status_code = 400
        response_message['message'] = 'Please input a valid order number.'
        resp = make_response(response_message)
        resp.message = response_message['message']
        resp.status_code = status_code
        database.session.close()
        return resp
    else:
        this_row_order_delivery = Order.query.filter_by(order_number=info, order_state='completed').first()
        if this_row_order_delivery:
            status_code = 400
            response_message['message'] = 'This order has been completed.'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp
        else:
            delivery_completed = 'completed'
            this_row_order.order_state = delivery_completed
            database.session.commit()
            response_message['message'] = 'set an order as completed successfully'
            resp = make_response(response_message)
            resp.message = response_message['message']
            resp.status_code = status_code
            database.session.close()
            return resp