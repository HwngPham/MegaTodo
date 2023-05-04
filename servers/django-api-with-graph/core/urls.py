from django.urls import path, include

urlpatterns = [
    path("graphql", include("graph.urls")),
    path("todo", include("todo.urls")),
]
