from peewee import *
from datetime import datetime
from ..libs.db import BaseModel
from ..constants import DATETIME_FORMAT


class Todo(BaseModel):
    content = TextField()
    is_done = BooleanField(default=False)
    created_at = DateTimeField(default=datetime.now)
    updated_at = DateTimeField(default=datetime.now)

    def dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "is_done": self.is_done,
            "created_at": self.created_at.strftime(DATETIME_FORMAT),
            "updated_at": self.updated_at.strftime(DATETIME_FORMAT),
        }
