from typing import Optional
from pydantic import BaseModel
from datetime import datetime
from enum import Enum


class CaseStatus(str, Enum):
    open = 'Open'
    closed = 'Closed'
    in_progress = 'In Progress'

class SupportCaseSchema(BaseModel):
    id: Optional[int] = None
    title: str
    description: str
    creation_date: Optional[datetime] = None
    status: CaseStatus
    company: str