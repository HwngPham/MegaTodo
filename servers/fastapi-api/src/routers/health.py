from fastapi import APIRouter


router = APIRouter(prefix='/health')


@router.get("/")
async def status():
    return {"health": "ok"}
