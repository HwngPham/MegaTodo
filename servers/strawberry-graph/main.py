from os import environ
from dotenv import load_dotenv
from uvicorn import run
from strawberry.asgi import GraphQL
from src.schema import schema

load_dotenv()
app = GraphQL(schema)


def main():
    run(
        app="main:app",
        host="0.0.0.0",
        port=int(environ.get("PORT", 8000)),
        reload=bool(environ.get("DEBUG", False)),
    )


if __name__ == "__main__":
    main()
