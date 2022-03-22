from main.connect_to_aws import aws_endpoint
from main.model.create_database import database
from main.logic.user_logic_module import login_signup_namespace
from flask import Flask
from flask import Blueprint
from flask_cors import CORS
from flask_restplus import Api
from flask_script import Manager

# from main.namespace import add_namespace

# Blueprints can be used to make your own templates in flask
the_test_blueprint_page = Blueprint("gift_shop", __name__, url_prefix='')
# define cross-origin resource sharing to handle cross-domain requirements
cors = CORS(the_test_blueprint_page)
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


add_namespace()

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = aws_endpoint
database.init_app(app)
# using flask's object app register blueprint
app.register_blueprint(the_test_blueprint_page)

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


if __name__ == '__main__':
    manager_command.run()
