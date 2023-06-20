import typing
from .models import Todo
from ..configs.db import Todo as TodoModel


def serialize(todo: TodoModel) -> Todo:
    return Todo(id=todo.id, content=todo.content, is_done=todo.is_done)


def get_all_todo() -> typing.List[Todo]:
    return [serialize(todo) for todo in TodoModel.select()]


def create_todo(content: str, is_done: bool = False) -> Todo:
    todo = TodoModel(content=content, is_done=is_done)
    todo.save()
    return serialize(todo)


def update_todo(id: int, content: str, is_done: bool = False) -> Todo:
    todo = TodoModel.get_by_id(id)
    todo.content = content
    todo.is_done = is_done
    todo.save()
    return serialize(todo)


def delete_todo(id: int) -> Todo:
    todo = TodoModel.get_by_id(id)
    todo.delete_instance()
    return serialize(todo)
