import os
import dotenv
import uvicorn
from src.app import create_app


dotenv.load_dotenv()
app = create_app()

if __name__ == "__main__":
    uvicorn.run(
        app="main:app",
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 8000)),
        reload=bool(os.environ.get("DEBUG", False)),
    )
