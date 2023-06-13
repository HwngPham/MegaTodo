from dotenv import load_dotenv
from os import environ
from src.app import create_app


load_dotenv()
host = environ.get("HOST", "localhost")
port = int(environ.get("PORT", 3000))
debug = bool(environ.get("DEBUG", False))
app = create_app()

if __name__ == "__main__":
    app.run(debug=debug, host=host, port=port)
