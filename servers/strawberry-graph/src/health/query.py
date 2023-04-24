import strawberry
from .resolvers import get_health
from .types import Health


@strawberry.type
class HealthQuery:
    health: Health = strawberry.field(resolver=get_health)
