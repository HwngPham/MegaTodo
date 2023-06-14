from flask_restful import Api
from .resources.health import HealthResource
from .resources.todo import TodoResource, TodoListResource


def register_routes(app):
    router = Api(app)
    router.add_resource(HealthResource, "/health/")
    router.add_resource(TodoResource, "/todos/<int:id>")
    router.add_resource(TodoListResource, "/todos/")
