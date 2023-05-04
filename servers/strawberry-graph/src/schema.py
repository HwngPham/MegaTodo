import strawberry
from .health.schema import HealthQuery
from .todo.schema import TodoQuery, TodoMutation
from .configs.db import init_db

init_db()


@strawberry.type
class RootQuery(TodoQuery, HealthQuery):
    pass


@strawberry.type
class RootMutation(TodoMutation):
    pass


schema = strawberry.Schema(query=RootQuery, mutation=TodoMutation)
