import pytest

from app import app
from test.connect_to_aws_test import aws_test_endpoint


@pytest.fixture
def client():
    app.config['TESTING'] = True
    app.config['SQLALCHEMY_DATABASE_URI'] = aws_test_endpoint

    with app.test_client():
        client = app.test_client()
        yield client
