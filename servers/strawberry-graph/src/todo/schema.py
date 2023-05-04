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
    def update_todo(
        self, find_by_content: str, content: str, is_done: bool = False
    ) -> Todo:
        return update_todo(
            find_by_content=find_by_content, content=content, is_done=is_done
        )
