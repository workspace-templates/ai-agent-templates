# Project rules: Spring Boot

## Layers
- Package by feature (`orders/`, `billing/`), each with controller, service and repository. Controllers only translate HTTP; services hold business rules; repositories hold queries.
- Use constructor injection with `final` fields. No field `@Autowired`.
- Expose records or DTO classes at the API edge. Never serialize JPA entities.

## Configuration
- Bind settings with `@ConfigurationProperties` on a record and `@Validated`. Avoid scattered `@Value`.
- Profiles for environments; secrets come from environment variables or a vault, never from committed YAML.

## Web
- Validate request bodies with `@Valid` and Jakarta constraints. Handle failures in one `@RestControllerAdvice` returning `ProblemDetail`.
- Return `ResponseEntity` only when you need to set status or headers.

## Data
- `@Transactional` belongs on service methods, not controllers. Keep reads `readOnly = true`.
- Prevent N+1 with fetch joins or entity graphs. Manage schema with Flyway or Liquibase, not `ddl-auto`.

## Tests
- `@WebMvcTest` for controllers, `@DataJpaTest` for repositories, plain JUnit 5 and Mockito for services. Use `@SpringBootTest` sparingly, with Testcontainers for real databases.

## Before finishing
Run `./mvnw verify` (or `./gradlew check`) and fix every warning you introduced.
