from fastapi import APIRouter, HTTPException
from ..models.todo import Todo
from ..schema import *


router = APIRouter(prefix="/todos")


@router.get("/")
async def all_todos() -> TodoListSchema:
    instances = Todo.filter()
    return {"items": [e.dict() for e in instances], "count": len(instances)}


@router.post("/")
async def create_todo(input: TodoInputSchema) -> TodoModelSchema:
    instance = Todo(**input.dict())
    instance.save()
    return instance.dict()


@router.get("/{id}")
async def get_todo_by_id(id) -> TodoModelSchema:
    try:
        return Todo.get_by_id(id).dict()
    except:
        raise HTTPException(status_code=404, detail=f"Todo id={id} is not found")


@router.patch("/{id}")
async def update_todo(id, input: TodoInputSchema) -> TodoModelSchema:
    try:
        instance = Todo.get_by_id(id)
    except:
        raise HTTPException(status_code=404, detail=f"Todo id={id} is not found")

    instance.__dict__["__data__"].update(**input.dict())
    instance.save()
    return instance.dict()


@router.delete("/{id}")
async def delete_todo(id) -> IdSchema:
    try:
        Todo.get_by_id(id)
        return {"id": Todo.delete_by_id(id)}
    except:
        raise HTTPException(status_code=404, detail=f"Todo id={id} is not found")
