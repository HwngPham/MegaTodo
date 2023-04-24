import strawberry


@strawberry.type
class Health:
    status: str
