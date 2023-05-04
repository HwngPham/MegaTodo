from graphene import *
from .schemas.todo import TodoQuery, TodoMutation


class RootQuery(TodoQuery):
    pass


class RootMutation(ObjectType):
    create_todo = TodoMutation.Field()


schema = Schema(query=RootQuery, mutation=RootMutation)
