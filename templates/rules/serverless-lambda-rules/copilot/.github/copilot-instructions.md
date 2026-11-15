# Project rules: AWS Lambda

## Structure
- Keep the handler a thin adapter: parse the event, call a plain function, shape the response. Business logic lives in modules that know nothing about Lambda.
- Create SDK clients and read config once, outside the handler, so warm invocations reuse them.
- One function, one job. Share code through a layer or a bundled package, not by importing between functions.

## Cold start and size
- Bundle with esbuild or the framework's bundler, tree-shake, and import only the SDK client modules you use.
- Choose memory by measurement; more memory also means more CPU. Set the timeout just above the real worst case, below the upstream caller's timeout.

## Configuration
- Read environment variables through one typed loader that fails fast when a value is missing. Secrets come from Secrets Manager or Parameter Store, cached between invocations. Never put them in plain environment variables committed to git.

## Reliability
- Assume at-least-once delivery. Make handlers idempotent with a key (event ID or business ID) stored with a conditional write.
- For SQS batches, return `batchItemFailures` so one bad record does not retry the whole batch. Attach a dead-letter queue to every async source.

## Logging
- Log one JSON object per line with request ID, function name and outcome. Never log payloads containing personal data.

## Before finishing
- Run unit tests on the core logic, a local invoke with a sample event, and the type check and linter.
