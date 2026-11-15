# Project rules: Flask

## Structure
- Use an application factory: `create_app(config_name)` in `app/__init__.py`. No module-level `app` object.
- One blueprint per feature under `app/<feature>/` with `routes.py`, `schemas.py` and `services.py`. Register blueprints inside the factory.
- Create extensions (`db`, `migrate`) unbound in `app/extensions.py` and call `init_app` in the factory. Import them from there, never from `app`.

## Config
- Config classes in `config.py`; select by environment variable. Secrets come from the environment only.
- Read settings through `current_app.config`, not through globals.

## Routes
- Handlers stay short: validate with marshmallow or pydantic, call a service, return `jsonify` with an explicit status code.
- Do not touch the database from a route function directly; go through a service.
- Register `errorhandler` functions that return one JSON shape: `{"error": {"code": ..., "message": ...}}`. Log the traceback; do not send it to the client.

## Data
- SQLAlchemy sessions come from the extension. Manage schema with Flask-Migrate and commit the generated revision after reviewing it.

## Tests
- pytest with an `app` fixture built from the factory using a testing config, plus a `client` fixture. Use a throwaway database per test run.

## Before finishing
Run `ruff check .`, `flask db check` and `pytest -q`.
