import strawberry
from .health.query import HealthQuery
from .todo.query import TodoQuery


@strawberry.type
class RootQuery(TodoQuery, HealthQuery):
    pass


schema = strawberry.Schema(query=RootQuery)
