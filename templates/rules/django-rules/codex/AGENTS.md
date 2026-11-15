# Project rules: Django

## Layout
- One app per domain concept, each with `models.py`, `views.py`, `urls.py`, `tests/`. Add `services.py` for multi-step business logic.
- Settings are split into base, local and production modules. Read secrets from the environment; never commit `SECRET_KEY`.

## Models and views
- Put rules about one record on the model or its manager and queryset. Keep views thin: parse input, call a service, return a response.
- Always set `related_name`, `__str__`, `Meta.ordering` where order matters, and database constraints for invariants.
- Use `get_object_or_404`. Validate input with forms or serializers, never by hand.

## ORM
- Use `select_related` for foreign keys and `prefetch_related` for reverse and many-to-many. Never query inside a loop or template.
- Use `F()` expressions and `transaction.atomic()` for updates that race. Use `bulk_create` for large inserts.

## Migrations
- Generate with `makemigrations`, read the file, and commit it. Never edit a migration that has shipped. Split schema and data changes, and add `RunPython` with a reverse function.

## Tests
- pytest-django with factories. Use the test client for views and test permissions explicitly.

## Before finishing
Run `python manage.py check`, `makemigrations --check --dry-run`, `ruff check .` and `pytest`.
