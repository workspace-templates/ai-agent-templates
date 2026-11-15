# Project rules: Laravel

## Structure
- Controllers stay thin: authorize, call an action or service class, return a resource or redirect. Put reusable business steps in `app/Actions` or `app/Services`.
- Use `declare(strict_types=1)`, typed properties and return types.

## Input and output
- Validate in a Form Request class, never with inline `$request->validate` in long controllers. Use `$request->validated()` only; do not pass `$request->all()` to a model.
- Return API Resources, not raw models. Define `$fillable` explicitly.

## Authorization
- One Policy per model, called with `$this->authorize` or the `can` middleware. Do not compare user ids by hand.

## Eloquent
- Eager load with `with()` and catch lazy loading in development using `Model::preventLazyLoading()`. Select needed columns, use `chunkById` or `lazy` for large sets.
- Wrap multi-step writes in `DB::transaction`. Use scopes for repeated conditions.
- Every schema change is a migration with a working `down`. Use factories and seeders for sample data.

## Queues
- Move email, exports and API calls into queued jobs and notifications. Make jobs idempotent and set `tries` and `backoff`.

## Config
- Call `env()` only inside config files; use `config()` elsewhere. Secrets stay in `.env`.

## Tests
- Pest feature tests with `RefreshDatabase`, factories, `Queue::fake()` and `Mail::fake()`.

## Before finishing
Run `./vendor/bin/pint`, `php artisan test` and `./vendor/bin/phpstan analyse`.
