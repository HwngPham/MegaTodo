from graphene import *
from .schemas.todo import TodoQuery, UpdateOrCreateTodoMutation, DeleteTodoMutation


class RootQuery(TodoQuery):
    pass


class RootMutation(ObjectType):
    update_or_create_todo = UpdateOrCreateTodoMutation.Field()
    delete_todo = DeleteTodoMutation.Field()


schema = Schema(query=RootQuery, mutation=RootMutation)
