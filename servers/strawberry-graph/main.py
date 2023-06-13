import asyncio
from os import environ
from dotenv import load_dotenv
from uvicorn import Config, Server
from strawberry.asgi import GraphQL
from src.schema import schema

load_dotenv()
app = GraphQL(schema)


async def main():
    config = Config(
        "main:app",
        host="0.0.0.0",
        port=int(environ.get("PORT", 8000)),
        reload=bool(environ.get("DEBUG", False)),
    )
    server = Server(config)
    await server.serve()


if __name__ == "__main__":
    asyncio.run(main())
