# Project rules: LLM applications

## Prompts
- Store prompts as files (`prompts/*.md` or templates), not inline strings. Version them with the code and name the variables explicitly. Never build a prompt by concatenating raw user text into instructions; put user content in a clearly delimited section.
- Keep model names, temperature and token limits in config, not scattered through call sites.

## Output
- Ask for structured output through the provider's schema or tool-calling feature and validate it with Pydantic or Zod. On a validation failure, retry once with the error, then fail with a typed error.
- Treat model text as untrusted. Never run it as code, shell commands or SQL, and escape it before rendering.

## Reliability and cost
- Wrap every call with a timeout, a bounded retry with exponential backoff and jitter for rate limits and 5xx errors, and a per-request and per-user token budget. Stream long answers.
- Cache deterministic calls. Use a smaller model for classification and routing.

## Evals
- Keep a golden set of real inputs with expected properties. Run it in CI and on every prompt or model change, and compare scores to the last run.

## Logging and secrets
- Log model, prompt version, token counts, latency and request id. Redact personal data and never log keys. Load keys from the environment.

## Done checks
- Run the type checker, linter, unit tests with a mocked client, and the eval suite.
