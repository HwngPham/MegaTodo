from rest_framework.serializers import *
from .models import Todo


class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "content", "is_done"]
