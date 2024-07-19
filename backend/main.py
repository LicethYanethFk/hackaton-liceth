from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.route_cases import route_cases
from app.db.session import engine, Base
import json

Base.metadata.create_all(bind=engine)


app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(route_cases)

@app.get("/")
async def root():
    return json.dumps({
        "message": "Hello World"
    })
