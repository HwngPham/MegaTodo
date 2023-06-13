from flask import Flask
from .db import register_db
from .routes import register_routes
from .models import *


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"

    with app.app_context():
        register_db(app)
        register_routes(app)

    return app
