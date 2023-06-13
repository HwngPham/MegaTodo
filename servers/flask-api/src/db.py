from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def register_db(app):
    db.init_app(app)
    db.create_all()
