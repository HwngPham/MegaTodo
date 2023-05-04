from .models import Todo
from ..configs.db import Todo as TodoModel


def serialize(todo: TodoModel) -> Todo:
    return Todo(content=todo.content, is_done=todo.is_done)


def get_all_todo():
    return [serialize(todo) for todo in TodoModel.select()]


def create_todo(content: str, is_done: bool = False):
    todo = TodoModel(content=content, is_done=is_done)
    todo.save()
    return serialize(todo)


def update_todo(find_by_content: str, content: str, is_done: bool = False):
    todo = TodoModel.get(TodoModel.content == find_by_content)
    todo.content = content
    todo.is_done = is_done
    todo.save()
    return serialize(todo)
