from peewee import *


db = SqliteDatabase("db.sqlite3")


class BaseModel(Model):
    class Meta:
        database = db
