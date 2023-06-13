from flask_restful import Resource, fields, marshal_with, reqparse
from ..models import Todo
from ..db import db


todo_schema = {
    "id": fields.Integer,
    "content": fields.String,
    "is_done": fields.Boolean,
}
parser = reqparse.RequestParser()
parser.add_argument("content", type=str)
parser.add_argument("is_done", type=bool)


class TodoResource(Resource):
    @marshal_with(todo_schema)
    def get(self, id):
        return db.get_or_404(Todo, id, description=f"Todo {id} is not found.")

    @marshal_with(todo_schema)
    def put(self, id):
        todo = db.get_or_404(Todo, id, description=f"Todo {id} is not found.")
        args = parser.parse_args()
        todo.content = args["content"]
        todo.is_done = args["is_done"]
        db.session.add(todo)
        db.session.commit()
        return todo, 201

    def delete(self, id):
        todo = db.get_or_404(Todo, id, description=f"Todo {id} is not found.")
        db.session.delete(todo)
        db.session.commit()
        return None, 204


class TodoListResource(Resource):
    @marshal_with(todo_schema)
    def get(self):
        return Todo.query.all()

    @marshal_with(todo_schema)
    def post(self):
        args = parser.parse_args()
        todo = Todo(content=args["content"], is_done=args["is_done"])
        db.session.add(todo)
        db.session.commit()
        return todo, 201
