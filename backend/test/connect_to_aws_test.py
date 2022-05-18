from flask_sqlalchemy import SQLAlchemy

# connect our team's aws cloud server test
database = SQLAlchemy()
aws_test_endpoint = "mysql+pymysql://ZhengLi:Comp5703;@database-comp5703-cs57-3.cvbkv8f5esm6.us-east-1.rds.amazonaws.com:3306/comp5703_test"



