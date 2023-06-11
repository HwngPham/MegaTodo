from pydantic import BaseModel


class IdSchema(BaseModel):
    id: int | None


class TimestampSchema(BaseModel):
    created_at: str
    updated_at: str


class TodoInputSchema(BaseModel):
    content: str
    is_done: bool | None = False


class TodoModelSchema(TimestampSchema, TodoInputSchema, IdSchema):
    pass


class TodoListSchema(BaseModel):
    items: list[TodoModelSchema]
    count: int
