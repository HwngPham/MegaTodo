from fastapi import FastAPI
from .routers import health, todos
from .libs.db import db
from .models.todo import Todo


def create_app(config={}):
    db.connect(reuse_if_open=True)
    db.create_tables([Todo])

    app = FastAPI(**config)
    app.include_router(health.router)
    app.include_router(todos.router)

    return app
