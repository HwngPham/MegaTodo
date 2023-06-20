import strawberry
from typing import Optional


@strawberry.type
class Todo:
    id: Optional[int]
    content: str
    is_done: bool
