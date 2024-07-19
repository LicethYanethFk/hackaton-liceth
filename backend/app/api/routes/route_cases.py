from fastapi import APIRouter, Depends
from typing import List
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.api.validations.support_case_validation import SupportCaseSchema
from app.db.models.support_case import SupportCaseDB

route_cases = APIRouter()

@route_cases.post("/cases/", response_model=SupportCaseSchema)
def create_case(case: SupportCaseSchema, db: Session = Depends(get_db)):
    db_case = SupportCaseDB(**case.model_dump())
    db.add(db_case)
    db.commit()
    db.refresh(db_case)
    return db_case

@route_cases.get("/cases/", response_model=List[SupportCaseSchema])
def read_cases(db: Session = Depends(get_db)):
    db_cases = db.query(SupportCaseDB).all()
    return [case for case in db_cases]