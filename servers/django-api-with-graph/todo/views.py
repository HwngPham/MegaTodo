from .models import Todo
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoSerializer


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
