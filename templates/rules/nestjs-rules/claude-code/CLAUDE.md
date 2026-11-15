# Project rules: NestJS

## Modules
- One module per feature under `src/<feature>/`: module, controller, service, `dto/`, `entities/`. Export from a module only what others need and import the module, never the provider file.
- Avoid `forwardRef`; a circular dependency means the design needs a third module or an event.

## Controllers and DTOs
- Controllers parse and delegate; services hold logic. Return plain objects or serialized DTOs, never persistence entities with secrets.
- Define input as classes with `class-validator` decorators. Enable a global `ValidationPipe` with `whitelist`, `forbidNonWhitelisted` and `transform`.
- Use `ParseUUIDPipe` and friends for path parameters.

## Auth and errors
- Protect routes with guards (`@UseGuards`) and read roles with a custom decorator and `Reflector`. Keep global guards for authentication.
- Throw built-in HTTP exceptions from services only when meaningful; map domain errors in an exception filter that returns one JSON shape.

## Config
- Use `@nestjs/config` with a validated schema and inject typed config through `ConfigService`. Do not read `process.env` in providers.

## Data
- Inject repositories (TypeORM or Prisma service) into services. Use migrations, not `synchronize: true`.

## Tests
- Unit-test services with `Test.createTestingModule` and mocked providers. Write e2e tests under `test/` with supertest against `createNestApplication`.

## Before finishing
Run `npm run lint`, `npm run build`, `npm test` and `npm run test:e2e`.
