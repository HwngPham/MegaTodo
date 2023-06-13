from peewee import *


db = SqliteDatabase("sqlite.db")


class BaseModel(Model):
    class Meta:
        database = db


class Todo(BaseModel):
    content = TextField()
    is_done = BooleanField(default=False)


def init_db():
    db.connect()
    db.create_tables([Todo])
