from django.db.models import *
from core.abstract import BaseModel


class Todo(BaseModel):
    content = TextField()
    is_done = BooleanField(default=False)

    def __repr__(self):
        return f"<Todo: content={self.content}, is_done={self.is_done}>"
