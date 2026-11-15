# Project rules: Java Maven library

## API surface
- Keep implementation in a `internal` package that is not exported. Default to package-private, then public only what users need. Prefer interfaces, final classes and static factories or builders.
- If you use JPMS, export only the API packages in `module-info.java`.
- Never change or remove a public signature in a minor release. Deprecate with `@Deprecated(since=..., forRemoval=...)` and a Javadoc `@deprecated` pointing to the replacement.

## Contracts
- Parameters and returns are non-null unless documented. Use `Objects.requireNonNull` with a message at entry points, `Optional` for absent return values and never for fields or parameters.
- Throw unchecked exceptions for programming errors. Use a small checked or custom hierarchy for expected failures, with the cause attached.
- Make types immutable where possible and document thread safety.

## Documentation
- Every public type and method has Javadoc with the behavior, parameters, exceptions and an example. Build with `-Xdoclint` and fail on warnings.

## Build and versions
- Follow semantic versioning. Pin plugin versions, declare dependencies with the narrowest scope and keep them few. Never leak third-party types in the API.
- Run a binary compatibility check, such as japicmp, against the last release.

## Done checks
- Run `mvn -B verify` with tests, Javadoc and the compatibility check. Releases go through `mvn release:prepare` or the CI workflow, with a changelog entry and a signed tag.
