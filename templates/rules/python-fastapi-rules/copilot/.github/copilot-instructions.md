# Project rules: Python FastAPI

## Structure
- Layers: `routers/` (HTTP only), `services/` (business rules), `repositories/` (database), `schemas/` (Pydantic), `models/` (ORM). A router never talks to the database directly.
- One router per resource, with `APIRouter(prefix=..., tags=[...])`. Set `response_model`, `status_code` and error responses on every route.

## Typing and validation
- Python 3.11+, full type hints, `mypy --strict` or pyright clean.
- Separate input and output schemas (`UserCreate`, `UserRead`). Never return an ORM object or a password hash directly. Use `model_config = ConfigDict(from_attributes=True)`.

## Dependencies and async
- Use `Depends` for the database session, current user and settings. Settings come from `pydantic-settings`, never from `os.environ` inside routes.
- Use `async def` only with async drivers. Blocking code (requests, sync ORM, file I/O) goes in `def` routes or `run_in_threadpool`.
- Commit in the service layer once per request; roll back on error.

## Errors
- Raise `HTTPException` or a domain error mapped by an exception handler to `{"error": {"code", "message"}}`. Never expose stack traces.

## Tests and tooling
- pytest with `httpx.AsyncClient`, override dependencies instead of patching. Migrations through Alembic only.
- Before finishing run `ruff check`, `ruff format`, mypy and `pytest`.
