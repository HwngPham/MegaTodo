import strawberry
from .types import Todo


@strawberry.type
class TodoMutation:
    @strawberry.mutation
    def add_todo(self, content: str, is_done: bool = False) -> Todo:
        pass
