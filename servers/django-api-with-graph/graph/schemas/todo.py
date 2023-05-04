from graphene import *
from graphene_django import DjangoObjectType
from graphene_django.rest_framework.mutation import SerializerMutation
from todo.models import Todo
from todo.serializers import TodoSerializer


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = ("id", "content", "is_done")


class TodoQuery(ObjectType):
    all_todo = List(TodoType, content=String())

    def resolve_all_todo(root, info, content=None):
        if content:
            return Todo.objects.filter(content=content)
        return Todo.objects.all()


class TodoMutation(SerializerMutation):
    class Arguments:
        content = String(required=True)
        is_done = Boolean()

    class Meta:
        serializer_class = TodoSerializer
        model_operations = ["create", "update"]
        lookup_field = "id"
