from ..connect_to_aws import database
# The database is created in this .py file


class User(database.Model):
    __tablename__ = 'user'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    user_name = database.Column(database.String(50))
    user_email = database.Column(database.String(100), unique=True)
    user_password = database.Column(database.String(50))
    user_mobile = database.Column(database.String(50))
    user_date_of_birth = database.Column(database.String(50))
    user_address = database.Column(database.String(100))
    # setting relationship
    # user_carts = database.relationship("Cart", backref='user_cart')
    user_orders = database.relationship("Order", backref='user_order', cascade="all,delete")

class ValidationInformation(database.Model):
    __tablename__ = 'validationinformation'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    user_email = database.Column(database.String(100), database.ForeignKey('user.user_email', ondelete='CASCADE'))
    validation_code = database.Column(database.String(10))

class Admin(database.Model):
    __tablename__ = 'admin'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    admin_email = database.Column(database.String(150), unique=True)
    admin_name = database.Column(database.String(100))
    admin_password = database.Column(database.String(100))
    admin_mobile = database.Column(database.String(50))

class Gifts(database.Model):
    __tablename__ = 'gifts'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    gift_name = database.Column(database.String(150))
    gift_price = database.Column(database.Float)
    gift_discount_price = database.Column(database.Float)
    gift_discount_state = database.Column(database.String(10), default='no')
    gift_description = database.Column(database.String(300))
    gift_category = database.Column(database.String(100))
    gift_side_category1 = database.Column(database.String(100))
    gift_side_category2 = database.Column(database.String(100))
    gift_cover_url = database.Column(database.String(500))
    gift_show_url1 = database.Column(database.String(500))
    gift_show_url2 = database.Column(database.String(500))
    gift_show_url3 = database.Column(database.String(500))
    gift_show_url4 = database.Column(database.String(500))
    gift_sales = database.Column(database.Integer, default=0)
    gift_income = database.Column(database.Float, default=0.0)
    # setting relationship
    size = database.relationship('Size', backref='gifts', cascade="all,delete")
    # product_carts = database.relationship("Cart", backref='gift_cart', cascade="all,delete")

class Size(database.Model):
    __tablename__ = 'size'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    gift_id = database.Column(database.Integer, database.ForeignKey('gifts.id', ondelete='CASCADE'))
    size = database.Column(database.String(50))
    stock = database.Column(database.Integer)
    this_size_sales = database.Column(database.Integer, default=0)
    this_size_income = database.Column(database.Float, default=0.0)

# class Cart(database.Model):
#     __tablename__ = 'cart'
#     id = database.Column(database.Integer, unique=True, primary_key=True)
#     user_id = database.Column(database.Integer, database.ForeignKey('user.id', ondelete='CASCADE'))
#     gift_id = database.Column(database.Integer, database.ForeignKey('gifts.id', ondelete='CASCADE'))
#     count = database.Column(database.Integer)
#     each_gift_all_price = database.Column(database.Float)
#     gift_unique_id = database.Column(database.Integer)
#     user_unique_id = database.Column(database.Integer)
#     gift_size = database.Column(database.String(100))


class Order(database.Model):
    __tablename__ = 'order'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    order_time = database.Column(database.String(100))
    order_total = database.Column(database.Float)
    order_number = database.Column(database.String(100))
    first_name = database.Column(database.String(100))
    last_name = database.Column(database.String(100))
    phone = database.Column(database.String(100))
    address = database.Column(database.String(500))
    postcode = database.Column(database.String(50))
    user_id = database.Column(database.Integer, database.ForeignKey('user.id', ondelete='CASCADE'))
    # setting relationship
    order_item = database.relationship("OrderItems", backref='order_gift', cascade="all,delete")

class OrderItems(database.Model):
    __tablename__ = 'orderitems'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    gift_name = database.Column(database.String(100))
    item_cover_url = database.Column(database.String(500))
    size = database.Column(database.String(100))
    count = database.Column(database.Integer)
    price = database.Column(database.Float)
    each_total_price = database.Column(database.Float)
    productID = database.Column(database.Integer, database.ForeignKey('gifts.id', ondelete='CASCADE'))
    # productID = database.Column(database.Integer)
    order_id = database.Column(database.Integer, database.ForeignKey('order.id', ondelete='CASCADE'))
class Wishlist(database.Model):
    """this is wishlist table"""
    __tablename__ = 'wishlist'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    wishlist_id = database.Column(database.String(100))
    owner_id = database.Column(database.Integer, database.ForeignKey('user.id', ondelete='CASCADE'))
    # owner_id = database.Column(database.Integer)
    wishlist_name = database.Column(database.String(100))
    wishlist_description = database.Column(database.String(100))
    first_name = database.Column(database.String(100))
    last_name = database.Column(database.String(100))
    address = database.Column(database.String(300))
    phone = database.Column(database.String(50))
    postcode = database.Column(database.String(50))
    state = database.Column(database.String(100), default='processing')
    payer_fname = database.Column(database.String(100), default='none')
    # WishlistItems_item = database.relationship("WishlistItems", backref='wishlist_gift', cascade="all,delete")
class WishlistItems(database.Model):
    """this is wishlistitems table"""
    __tablename__ = 'wishlistitems'
    id = database.Column(database.Integer, unique=True, primary_key=True)
    wishlistID = database.Column(database.Integer, database.ForeignKey('wishlist.id', ondelete='CASCADE') )
    wishlist_id = database.Column(database.String(100))
    products_id = database.Column(database.Integer)
    product_name = database.Column(database.String(150))
    product_cover = database.Column(database.String(500))
    size = database.Column(database.String(50))
    price = database.Column(database.Float)
    count = database.Column(database.Integer)
