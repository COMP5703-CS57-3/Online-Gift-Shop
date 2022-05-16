from flask import Blueprint, redirect, url_for
from flask import Flask, render_template
from flask_cors import CORS
from flask_restplus import Api
from flask_script import Manager
from werkzeug.routing import BaseConverter

from main.connect_to_aws import aws_endpoint
from main.logic.admin_logic_module import admin_namespace
from main.logic.create_order_logic_module import create_order_part_namespace
from main.logic.dashboard_logic_module import dashboard_namespace
from main.logic.homepage_module import main_home_page_namespace
from main.logic.search_item_logic_module import search_part_namespace
from main.logic.user_information_module import user_information_namespace
from main.logic.user_logic_module import login_signup_namespace
from main.logic.wishlist_logic_module import wishlist_ns
from main.model.create_database import database


# 自定义转换器
class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


# from main.namespace import add_namespace

# Blueprints can be used to make your own templates in flask
the_test_blueprint_page = Blueprint("gift_shop", __name__, url_prefix='/api')
# define cross-origin resource sharing to handle cross-domain requirements

# set the gift shop api's information
# the flask_restplus's Api is about swagger
gift_shop = Api(the_test_blueprint_page, title="Online gift shop",
                description='this test blueprint page is for Online Gift Shop backend test')


# @the_test_blueprint_page.route('/test')
# def index():
#     return "<h1>this test blueprint page is for Online Gift Shop backend test</h1>"

# add login_founction's namespace
# gift_shop.add_namespace(login_founction, "/login_signup")

def add_namespace():
    gift_shop.add_namespace(login_signup_namespace, "/login_signup")
    gift_shop.add_namespace(user_information_namespace, "/user_information")
    gift_shop.add_namespace(main_home_page_namespace, "/main_home_page")
    gift_shop.add_namespace(wishlist_ns, "/wishlist")
    gift_shop.add_namespace(admin_namespace, "/admin")
    gift_shop.add_namespace(search_part_namespace, "/search")
    gift_shop.add_namespace(create_order_part_namespace, "/order")
    gift_shop.add_namespace(dashboard_namespace, "/dashboard")


add_namespace()

app = Flask(__name__,
            template_folder='../frontend/build',
            static_folder='../frontend/build/static', )
app.url_map.converters['reg'] = RegexConverter
app.config['DEBUG'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = aws_endpoint
app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
    'pool_size': 10,
    'pool_recycle': 120,
    'pool_pre_ping': True,
    'pool_timeout': 900,
    'max_overflow': 5,
}
database.init_app(app)
CORS(app)
# using flask's object app register blueprint
app.register_blueprint(the_test_blueprint_page)


@app.before_request
def make_session_close():
    database.session.remove()
    database.engine.dispose()


# Use flask_script's manager function to write commands
manager_command = Manager(app)


# use command 'python3 app.py create_database' or 'python app.py create_database' to create database
@manager_command.command
def create_database():
    database.create_all()


# use command 'python3 app.py delete_database' or 'python app.py delete_database' to create database
@manager_command.command
def delete_database():
    database.drop_all()


# use command to run the backend sevice
@manager_command.command
def run():
    app.run()


# @app.route('/', defaults={'path': ''})
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/adlogin')
def adlogin():
    return render_template('index.html')


#
#

@app.route('/administer')
def admin():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('index.html')


# @app.route('/'
#            '<reg("^((?!static).)*")'
#            ':path>')
# def catch_all(path):
#     # return redirect(url_for("index"))
#     print(path)
#     return render_template("index.html")


@app.route('/<any>')
def red(any):
    return redirect(url_for('index'))


@app.route('/administer/<any>')
def adred(any):
    return redirect(url_for("admin"))


if __name__ == '__main__':
    app.run(host="0.0.0.0")
