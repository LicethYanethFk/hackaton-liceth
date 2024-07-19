from sqlalchemy import Column, Integer, String, DateTime, Enum
from ..session import Base


class SupportCaseDB(Base):
    __tablename__ = "support_cases"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    creation_date = Column(DateTime)
    company = Column(String)
    status = Column(Enum('Open', 'Closed', 'In Progress', name='case_status'))