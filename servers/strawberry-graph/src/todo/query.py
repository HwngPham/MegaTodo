import typing
import strawberry
from .resolvers import get_all_todo
from .types import Todo


@strawberry.type
class TodoQuery:
    all_todo: typing.List[Todo] = strawberry.field(resolver=get_all_todo)
