import strawberry


@strawberry.type
class Todo:
    content: str
    is_done: bool
