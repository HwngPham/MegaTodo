import typing
import strawberry
from .resolvers import *
from .models import Todo


@strawberry.type
class TodoQuery:
    all_todo: typing.List[Todo] = strawberry.field(resolver=get_all_todo)


@strawberry.type
class TodoMutation:
    @strawberry.mutation
    def create_todo(self, content: str, is_done: bool = False) -> Todo:
        return create_todo(content=content, is_done=is_done)

    @strawberry.mutation
    def update_todo(self, id: int, content: str, is_done: bool = False) -> Todo:
        return update_todo(id=id, content=content, is_done=is_done)

    @strawberry.mutation
    def delete_todo(self, id: int) -> Todo:
        return delete_todo(id=id)
