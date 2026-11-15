# Project rules: Rails

## Structure
- Follow Rails naming and RESTful routes; add a custom action only after trying to model it as another resource.
- Controllers: load, authorize, call, respond. Multi-step business logic goes into a plain Ruby object in `app/services` with a single public `call` method that returns a result, not a half-saved record.
- Avoid callbacks for anything but data normalization. Never send email or call an API from a model callback.

## Params and security
- Use strong parameters with an explicit `permit` list. Authorize with Pundit or CanCanCan on every action. Credentials live in `rails credentials` or the environment.

## Active Record
- Prevent N+1 with `includes`, `preload` or `eager_load`; add the Bullet gem in development. Use `pluck`, `exists?` and `find_each` where a full model is wasteful.
- Express rules as validations plus matching database constraints. Put named `scope`s on models for reuse.
- Wrap related writes in `transaction`.

## Migrations
- Reversible with `change` or explicit `up` and `down`. Add indexes on foreign keys, and use `strong_migrations` patterns for large tables. Commit `db/schema.rb`.

## Jobs
- Slow work goes to Active Job; pass ids, not objects.

## Tests
- RSpec request specs and model specs with FactoryBot. Avoid testing private methods.

## Before finishing
Run `bundle exec rubocop`, `bin/rails db:migrate:status` and `bundle exec rspec`.
