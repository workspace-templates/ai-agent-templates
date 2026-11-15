# AI templates for coding agents

500 free, original templates for **Claude Code, Codex, Cursor, Gemini CLI and GitHub Copilot**: 150 skills, 100 subagents, 100 commands and prompts, 60 mcp setups, 40 hooks, 50 project rules. Each one is written once and delivered as the exact file every tool expects.

Browse and search them at **[workspacetemplates.com/ai](https://workspacetemplates.com/ai/)**.

## Install one

```bash
npx workspacetemplates add pull-request-reviewer
npx workspacetemplates add github-mcp --tool cursor
npx workspacetemplates list postgres
```

The CLI has no dependencies and no telemetry. It writes plain text files into your project and never runs what it downloads. Its source is in [`cli/`](cli/).

## How this repository is organised

```
templates/<type>/<name>/
  item.json        the template, written once, tool-neutral
  README.md        what it does, what it can access, automated checks
  claude-code/     the ready files for each tool, at the paths that tool reads
  codex/  cursor/  gemini-cli/  copilot/
```

Every template says what it can read, change or run. Read the file before you install it.

## Templates

### Skills (150)

| Template | What it does |
|---|---|
| [Angular Signals Migration](templates/skills/angular-signals-migration/) | Moves Angular components to signals, signal inputs and standalone APIs one component at a time, with a build and test run after each step. |
| [API Deprecation Handling](templates/skills/api-deprecation-handling/) | Deprecates a public function or endpoint the careful way: replacement first, runtime warnings, docs, a migration note and a dated removal plan. |
| [API Documentation](templates/skills/api-documentation/) | Documents HTTP endpoints from the real handlers, with request and response examples, error cases and auth, so integrators succeed on the first call. |
| [API Error Responses](templates/skills/api-error-responses/) | Defines one error format with stable machine codes and problem details, then applies it to every endpoint so clients can handle failures reliably. |
| [API Pagination Design](templates/skills/api-pagination-design/) | Picks cursor or offset pagination for a list endpoint, then implements stable ordering, hard limits and next links that never skip or repeat rows. |
| [API Versioning Strategy](templates/skills/api-versioning-strategy/) | Plans and introduces a new API version without breaking existing clients, with deprecation headers, usage tracking and a dated sunset schedule. |
| [Architecture Decision Records](templates/skills/architecture-decision-records/) | Writes architecture decision records that capture the context, the options weighed, the decision and its consequences in a short, numbered file. |
| [Authentication Flow Review](templates/skills/authentication-flow-review/) | Reviews login, session handling, password reset and MFA code for bypasses and weak defaults, reporting each flaw with its exact attack path. |
| [AWS IAM Least Privilege](templates/skills/aws-iam-least-privilege/) | Narrows AWS IAM policies to the actions and resources a workload really uses, based on code and access logs, with every change explained. |
| [AWS Lambda Serverless](templates/skills/aws-lambda-serverless/) | Builds AWS Lambda functions that handle cold starts, timeouts, memory sizing and retries, with idempotent handlers and clear failure paths. |
| [Background Job Design](templates/skills/background-job-design/) | Moves slow or unreliable work off the request path into queues, with idempotent handlers, bounded retries with backoff and a dead-letter queue. |
| [Bug Report Triage](templates/skills/bug-report-triage/) | Triages an incoming bug report, tries to reproduce it, and writes a minimal repro with a severity and the next step for the owner. |
| [Bundle Size Reduction](templates/skills/bundle-size-reduction/) | Analyzes a JavaScript bundle, splits code and replaces heavy dependencies, and reports byte counts before and after every change it makes. |
| [Caching Strategy](templates/skills/caching-strategy/) | Decides what is worth caching, designs keys, TTLs and invalidation, and proves the change with hit rate and latency numbers before and after. |
| [CI Pipeline Speedup](templates/skills/ci-pipeline-speedup/) | Measures where a CI pipeline spends its time, then cuts minutes with caching, parallel jobs and skipping work that did not change. |
| [Code Comments Docstrings](templates/skills/code-comments-docstrings/) | Writes docstrings and comments that explain why the code is the way it is, and removes stale or noisy ones, without changing behavior. |
| [Code Duplication Removal](templates/skills/code-duplication-removal/) | Detects copy-pasted blocks and merges them into one abstraction only when the copies change together, leaving look-alikes that evolve apart untouched. |
| [Code Smell Detection](templates/skills/code-smell-detection/) | Scans a diff or folder for long methods, feature envy and god classes, and proposes the smallest change that removes each smell. It reports before editing. |
| [Codebase Onboarding](templates/skills/codebase-onboarding/) | Builds a written map of an unfamiliar repository: entry points, layers, conventions, the commands that work, plus the areas most likely to break. |
| [Concurrency Bug Analysis](templates/skills/concurrency-bug-analysis/) | Finds races, deadlocks and lost updates by mapping shared state and lock order, then proposes the narrowest lock, queue or atomic operation that fixes them. |
| [Context Management](templates/skills/context-management/) | Keeps long agent sessions on track with a running notes file, checkpoints and tightly scoped reads, so quality does not fade as the context fills. |
| [Contract Testing](templates/skills/contract-testing/) | Adds consumer-driven contract tests between services so a breaking API change fails in CI before it ships to the service that depends on it. |
| [Core Web Vitals Optimization](templates/skills/core-web-vitals-optimization/) | Improves LCP, INP and CLS with measured fixes to images, fonts, scripts and layout, and reports before and after numbers for each change. |
| [CSRF and CORS Hardening](templates/skills/csrf-and-cors-hardening/) | Sets up CORS and CSRF protection that fits how your app authenticates, with cookies or bearer tokens, and removes the wildcard shortcuts. |
| [CSS Layout Debugging](templates/skills/css-layout-debugging/) | Diagnoses broken flexbox and grid layouts by inspecting the box model and computed styles, then fixes the root rule instead of piling on overrides. |
| [Cyclomatic Complexity Reduction](templates/skills/cyclomatic-complexity-reduction/) | Flattens deeply nested conditionals with guard clauses, lookup tables and extraction, and proves with tests that the behavior did not change. |
| [Data Pipeline Design](templates/skills/data-pipeline-design/) | Designs idempotent, testable batch pipelines with safe backfills and data quality checks. Use it when planning or reviewing a scheduled data job. |
| [Data Validation Pydantic](templates/skills/data-validation-pydantic/) | Validates API payloads, files and config in Python with Pydantic v2 models, strict types and error reports a user can understand. |
| [Database Connection Pooling](templates/skills/database-connection-pooling/) | Sizes and configures database connection pools, and diagnoses exhausted pools, leaked connections and idle-in-transaction sessions. |
| [Database Migration Safety](templates/skills/database-migration-safety/) | Plans schema changes that run without downtime: expand and contract steps, safe backfills, lock checks and a tested rollback for each migration. |
| [Database Schema Design](templates/skills/database-schema-design/) | Models entities, keys, relationships and constraints for a new feature, and states the reason for any denormalization before writing DDL. |
| [dbt Modeling](templates/skills/dbt-modeling/) | Builds dbt models in staging, intermediate and mart layers with tests and generated docs. Use it when adding or restructuring warehouse transformations. |
| [Dead Dependency Cleanup](templates/skills/dead-dependency-cleanup/) | Finds unused and duplicated packages in your manifests and removes them one at a time, running the build and tests after each removal so nothing breaks. |
| [Dependency Vulnerability Triage](templates/skills/dependency-vulnerability-triage/) | Sorts npm, pip or other audit output by whether the vulnerable code is reachable, then fixes the real risks first and documents what is safe to defer. |
| [Deployment Strategies](templates/skills/deployment-strategies/) | Picks blue-green, canary or rolling for a service from its risk and state, then writes the rollout, verification and rollback steps. |
| [Design Doc Writing](templates/skills/design-doc-writing/) | Drafts a design doc with goals, non-goals, alternatives considered and a rollout plan, grounded in the current code before proposing anything. |
| [Diagram as Code](templates/skills/diagram-as-code/) | Produces Mermaid diagrams of flows, sequences and data models read from the actual code, ready to commit next to your docs. |
| [Django ORM Optimization](templates/skills/django-orm-optimization/) | Finds slow Django queries and N+1 patterns, then fixes them with select_related, prefetch_related, only and indexes, with query counts as proof. |
| [Docker Compose Development](templates/skills/docker-compose-development/) | Sets up a Docker Compose dev environment with health checks, ordered startup, sane volumes and seed data so a new teammate runs one command. |
| [Dockerfile Optimization](templates/skills/dockerfile-optimization/) | Rewrites Dockerfiles for small images, fast cached builds, a non-root user and reproducible builds, then proves the image still starts and runs. |
| [E2E Test Design](templates/skills/e2e-test-design/) | Chooses the few user journeys that deserve end-to-end coverage and writes stable browser tests with resilient locators and no fixed waits. |
| [Error Handling Patterns](templates/skills/error-handling-patterns/) | Designs consistent error types and propagation, and rewrites swallowed or blindly rethrown errors so failures stay visible and messages help the user. |
| [Exploratory Data Analysis](templates/skills/exploratory-data-analysis/) | Profiles a new dataset, finds quality problems and summarizes findings with plots. Use it before modeling or reporting on data you have not seen yet. |
| [Express Middleware Design](templates/skills/express-middleware-design/) | Orders Express and Fastify middleware correctly, centralizes error handling and validates requests at the edge, so handlers only see clean input. |
| [Flaky Test Diagnosis](templates/skills/flaky-test-diagnosis/) | Reproduces an intermittent test failure, finds the shared state or timing cause and fixes it, rather than hiding it behind retries or longer waits. |
| [Flutter State Management](templates/skills/flutter-state-management/) | Chooses between Riverpod and Bloc for a Flutter feature, implements it cleanly and covers the logic and widgets with tests. |
| [Frontend i18n](templates/skills/frontend-i18n/) | Extracts hard-coded UI text into translation files and handles plurals, dates, numbers and right-to-left layout for a multi-language frontend. |
| [Git Bisect Regression](templates/skills/git-bisect-regression/) | Finds the exact commit that introduced a regression by running git bisect with an automated test, then explains what that commit changed. |
| [Git Conflict Resolution](templates/skills/git-conflict-resolution/) | Resolves merge and rebase conflicts by working out what each side intended, combining them on purpose and proving the result with tests. |
| [Git History Cleanup](templates/skills/git-history-cleanup/) | Turns a noisy branch of wip and fixup commits into a short, logical series with interactive rebase, with a backup and a tree-equality check. |
| [GitHub Actions Workflows](templates/skills/github-actions-workflows/) | Writes GitHub Actions workflows that run fast, cache dependencies, use least-privilege tokens and share steps through reusable workflows. |
| [Go Table Driven Tests](templates/skills/go-table-driven-tests/) | Writes idiomatic table-driven Go tests with named subtests, golden files and race detector runs, and refactors repetitive tests into tables. |
| [GraphQL N+1](templates/skills/graphql-n-plus-one/) | Finds resolvers that fire one query per parent object and fixes them with request-scoped dataloaders, batching and proof from query counts. |
| [GraphQL Schema Design](templates/skills/graphql-schema-design/) | Designs a GraphQL schema around the product domain, with honest nullability, input types and mutation payloads that report errors as data. |
| [gRPC Service Design](templates/skills/grpc-service-design/) | Designs protobuf services with evolution-safe fields, proper status codes and deadlines, then checks changes with buf for breaking compatibility. |
| [Helm Chart Authoring](templates/skills/helm-chart-authoring/) | Builds Helm charts with a small, documented values file, clean templates and a tested install, upgrade and rollback path. |
| [Incident Postmortem](templates/skills/incident-postmortem/) | Writes a blameless postmortem from logs, chat and commits, with a verified timeline, a real root cause and follow-up actions that have owners. |
| [Input Validation Hardening](templates/skills/input-validation-hardening/) | Adds allowlist validation where data enters your code and context-correct encoding where it leaves, closing injection paths at every trust boundary. |
| [Integration Testing](templates/skills/integration-testing/) | Writes integration tests that use real databases and services, each with isolated data and fixed setup, so they are trustworthy and repeatable. |
| [Jest Testing Patterns](templates/skills/jest-testing-patterns/) | Structures Jest suites with factories, fake timers and module mocks that reset cleanly, so tests stay independent and order does not matter. |
| [JUnit Testing Java](templates/skills/junit-testing-java/) | Writes JUnit 5 tests with parameterized cases and Mockito used carefully, avoiding static mocking, over-stubbing and tests tied to implementation. |
| [JWT Security](templates/skills/jwt-security/) | Audits how an app signs, verifies, stores and expires JSON Web Tokens, and fixes algorithm confusion, weak secrets and unsafe browser storage. |
| [Kotlin Android Compose](templates/skills/kotlin-android-compose/) | Builds Jetpack Compose screens with state hoisting, ViewModels and one-way data flow, so UI stays stateless, previewable and easy to test. |
| [Kubernetes Manifest Review](templates/skills/kubernetes-manifest-review/) | Reviews Kubernetes manifests for missing limits, probes, security context and unsafe rollout settings, and returns fixes ranked by risk. |
| [Laravel Eloquent Patterns](templates/skills/laravel-eloquent-patterns/) | Writes Laravel model code the idiomatic way: typed relations, query scopes, form requests and eager loading. Use it when adding or reviewing Eloquent code. |
| [Legacy Code Characterization](templates/skills/legacy-code-characterization/) | Records what untested legacy code actually does by writing characterization tests first, so you can change or refactor it without guessing at behavior. |
| [Library Selection](templates/skills/library-selection/) | Compares candidate libraries on maintenance, fit, size and risk, then recommends one with evidence instead of picking whatever is popular. |
| [LLM Cost and Latency](templates/skills/llm-cost-and-latency/) | Finds where an app wastes LLM tokens and time, then cuts both with prompt caching, smaller models, batching and streaming. |
| [LLM Evals](templates/skills/llm-evals/) | Builds an eval set and scorer for an LLM feature and tracks regressions with each change. Use it so prompt and model changes are measured, not guessed. |
| [LLM Tool Calling](templates/skills/llm-tool-calling/) | Designs tool schemas and the call loop for LLM function calling, with argument validation, error feedback and a hard step limit. |
| [Load Testing](templates/skills/load-testing/) | Designs a k6 load test with realistic traffic, explicit thresholds and a clear pass or fail result, and reads the numbers back to you. |
| [Logging Best Practices](templates/skills/logging-best-practices/) | Adds structured log lines with levels, correlation IDs and no personal data where they help. Use it when a service is hard to debug from its logs. |
| [Memory Leak Diagnosis](templates/skills/memory-leak-diagnosis/) | Locates memory leaks by measuring growth, comparing heap snapshots and tracing the reference that keeps objects alive, then fixes that reference. |
| [Microservice Boundaries](templates/skills/microservice-boundaries/) | Finds real seams in a monolith, assigns data ownership, and proposes a migration order that extracts one service at a time with a clear reason. |
| [ML Experiment Tracking](templates/skills/ml-experiment-tracking/) | Logs params, metrics, code version and artifacts so ML experiments can be reproduced and compared. Use it when results are hard to trace back to a run. |
| [Mobile App Release](templates/skills/mobile-app-release/) | Prepares an iOS or Android store release: version and build bump, signing check, changelog, screenshots list and review notes, without uploading anything. |
| [Model Evaluation](templates/skills/model-evaluation/) | Chooses metrics, splits and baselines for a model, then reports results with uncertainty. Use it before claiming a model is good or better than another. |
| [MongoDB Schema Modeling](templates/skills/mongodb-schema-modeling/) | Decides between embedding and referencing in MongoDB and shapes documents around the actual read and write patterns of the app. |
| [Monorepo Management](templates/skills/monorepo-management/) | Sets up and maintains a TypeScript monorepo with workspaces, shared configs, task caching and CI that builds only the packages a change affects. |
| [Mutation Testing](templates/skills/mutation-testing/) | Runs mutation testing, reads the surviving mutants and strengthens the tests whose assertions failed to notice a deliberate code change. |
| [MySQL Query Tuning](templates/skills/mysql-query-tuning/) | Finds slow MySQL queries in the slow log, reads EXPLAIN, and fixes them with correctly ordered composite indexes and query rewrites. |
| [Next.js Data Fetching](templates/skills/nextjs-data-fetching/) | Chooses server components, caching and revalidation for each data need in the Next.js App Router, and fixes slow or stale pages. |
| [Observability Setup](templates/skills/observability-setup/) | Adds metrics, traces and structured logs to a service, then builds the alerts and dashboards you need to find a problem within minutes. |
| [Offline First Sync](templates/skills/offline-first-sync/) | Designs local storage and background sync with conflict handling, so an app stays usable on flaky networks and never silently loses edits. |
| [Onboarding Guide](templates/skills/onboarding-guide/) | Builds a developer onboarding doc from the repo's actual setup, scripts, conventions and CI, so day-one questions get answered in writing. |
| [OpenAPI Spec Authoring](templates/skills/openapi-spec-authoring/) | Writes or repairs an OpenAPI 3.1 spec that matches the real code, lints it, and checks that a generated client compiles against it. |
| [ORM Query Review](templates/skills/orm-query-review/) | Reviews ORM code for N+1 queries, lazy loading, over-fetching and missing transactions, and proves each finding by counting queries. |
| [OWASP Top 10 Review](templates/skills/owasp-top-10-review/) | Walks a codebase category by category through the OWASP Top 10 and reports each confirmed weakness with file, line and a concrete fix. |
| [Pandas Data Cleaning](templates/skills/pandas-data-cleaning/) | Cleans messy DataFrames with typed columns, explicit null handling and assertions. Use it when raw CSV or Excel data needs to become trustworthy. |
| [Pandas Performance](templates/skills/pandas-performance/) | Speeds up slow pandas code by measuring first, then vectorizing, shrinking dtypes and chunking reads. Use it when a script is slow or runs out of memory. |
| [Payment Integration Safety](templates/skills/payment-integration-safety/) | Builds or reviews payment code so amounts are set on the server, webhooks are verified and idempotent, and every charge can be reconciled with the provider. |
| [Performance Profiling](templates/skills/performance-profiling/) | Finds why code is slow by measuring first: sets a baseline, profiles the hot path, changes one thing and verifies the gain with repeatable numbers. |
| [Postgres Index Tuning](templates/skills/postgres-index-tuning/) | Reads EXPLAIN ANALYZE output for a slow Postgres query, then adds or drops indexes only when the measured timing proves a gain. |
| [Prisma Schema Workflow](templates/skills/prisma-schema-workflow/) | Evolves a Prisma schema safely with named migrations, seed scripts, type-safe queries and a check for destructive changes. |
| [Prompt Engineering](templates/skills/prompt-engineering/) | Writes and iterates production prompts with clear structure, examples and failure tests. Use it when a prompt behind a feature must work every time. |
| [Property Based Testing](templates/skills/property-based-testing/) | Writes property-based tests with generators, invariants and shrinking for parsers, serializers and pure logic where example tests miss edge cases. |
| [Pull Request Reviewer](templates/skills/pull-request-reviewer/) | Reviews the diff of a branch or pull request for real bugs, checks each finding against the code and returns a short list ranked by severity. |
| [pytest Fixtures](templates/skills/pytest-fixtures/) | Designs pytest fixtures, parametrization and conftest layout so Python suites run fast, read clearly and do not share hidden state. |
| [Python Type Hints](templates/skills/python-type-hints/) | Adds and tightens Python type hints, then runs mypy or pyright until clean without blanket ignores. Use it on untyped or loosely typed modules. |
| [PyTorch Training Loop](templates/skills/pytorch-training-loop/) | Writes a correct PyTorch training loop with seeding, mixed precision, clipping and resumable checkpoints. Use it to start or fix a training script. |
| [RAG Pipeline Design](templates/skills/rag-pipeline-design/) | Designs retrieval-augmented generation with sensible chunking, embeddings, reranking and cited answers. Use it when an LLM must answer from your documents. |
| [Rails Service Objects](templates/skills/rails-service-objects/) | Extracts business logic out of fat Rails controllers and models into small service and query objects, with specs that prove behavior stays the same. |
| [Rate Limiting Implementation](templates/skills/rate-limiting-implementation/) | Adds token bucket rate limits per API key or user, with a shared store, correct 429 responses and RateLimit headers, and tests for the edge cases. |
| [React Component Design](templates/skills/react-component-design/) | Designs and reviews React components for clean state, correct effects, composition and complete loading, empty and error states, in TypeScript. |
| [React Forms Validation](templates/skills/react-forms-validation/) | Builds accessible React forms with schema validation, clear error messages and safe submit handling against double sends and server errors. |
| [React Hooks Patterns](templates/skills/react-hooks-patterns/) | Writes custom React hooks with honest dependency arrays, proper cleanup and no stale closures, and fixes effects that misuse useEffect. |
| [React Native Performance](templates/skills/react-native-performance/) | Finds and fixes janky lists, wasted re-renders and chatty bridge calls in a React Native app, measuring before and after each change. |
| [React Performance Optimization](templates/skills/react-performance-optimization/) | Finds needless React re-renders with the Profiler and adds memoization only where a measurement shows it pays off. |
| [React State Management](templates/skills/react-state-management/) | Chooses local state, context, a reducer or a store for each piece of React state and removes prop drilling without adding a library by habit. |
| [README Writing](templates/skills/readme-writing/) | Writes or rewrites a README so a new developer goes from clone to a running app in minutes, with every command tested against the repo. |
| [Redis Data Structures](templates/skills/redis-data-structures/) | Picks the right Redis structure, key naming and expiry for queues, counters, leaderboards, rate limits and sessions. |
| [Release Checklist](templates/skills/release-checklist/) | Runs a release step by step: verifies the branch, tests and changelog, tags the version, builds artifacts and writes a rollback note before shipping. |
| [Requirements Clarification](templates/skills/requirements-clarification/) | Turns a vague request into a few pointed questions and written acceptance criteria before any code is written. |
| [Responsive Design](templates/skills/responsive-design/) | Makes a page work from 320px up using fluid type, container queries and breakpoints chosen by the content and tested at real widths. |
| [REST API Design](templates/skills/rest-api-design/) | Designs or reviews HTTP APIs: resource names, methods, status codes, pagination, error format and versioning, with a short spec before any code. |
| [Review Comment Resolution](templates/skills/review-comment-resolution/) | Works through reviewer comments on a pull request: applies the fixes that are right, pushes back on the ones that are not and drafts a reply to every thread. |
| [Runbook Writing](templates/skills/runbook-writing/) | Turns an operational task or alert into a runbook with symptoms, checks and exact commands, so on-call can act at 3am without guessing. |
| [Safe Refactoring](templates/skills/safe-refactoring/) | Restructures code in small steps that each keep behavior identical and tests green. Use it for renames, extractions, moves and cleanup of messy modules. |
| [Secrets Scanning Cleanup](templates/skills/secrets-scanning-cleanup/) | Finds API keys and passwords committed to a repository, plans their rotation, removes them from history and adds a check against repeats. |
| [Secure File Upload](templates/skills/secure-file-upload/) | Hardens upload endpoints by checking type, size, name and storage location, blocking path traversal, executable content and image bombs. |
| [Security Headers CSP](templates/skills/security-headers-csp/) | Adds a Content Security Policy and the other protective HTTP headers, starting in report-only mode so nothing breaks before you tighten it. |
| [Security Review](templates/skills/security-review/) | Reviews a code change for injection, broken authorization, secrets, SSRF and unsafe input handling, and reports only exploitable findings with a fix. |
| [Semantic Versioning](templates/skills/semantic-versioning/) | Works out the next version number from the real changes since the last tag, applies semver rules to breaking changes and drafts the release notes. |
| [Shell Script Hardening](templates/skills/shell-script-hardening/) | Hardens bash scripts with strict mode, safe quoting, cleanup traps and clean shellcheck results, without changing what the script does. |
| [SLO and Alerting](templates/skills/slo-and-alerting/) | Defines SLIs, SLOs and multi-window burn-rate alerts so on-call is paged only when users are affected and the error budget is at risk. |
| [Spike Investigation](templates/skills/spike-investigation/) | Runs a time-boxed technical spike on a throwaway branch and writes up what was learned, with evidence and a clear recommendation. |
| [Spring Boot Service Design](templates/skills/spring-boot-service-design/) | Structures a Spring Boot service into thin controllers, transactional services and typed config, tested with slice tests instead of full context starts. |
| [SQL Analytics Queries](templates/skills/sql-analytics-queries/) | Writes readable CTE-based SQL for funnels, cohorts and retention, with the grain stated up front. Use it for product and revenue analytics questions. |
| [SQL Injection Prevention](templates/skills/sql-injection-prevention/) | Finds queries built from strings and rewrites them as parameterized statements, with allowlists for column names, sort order and other identifiers. |
| [SQL Query Optimization](templates/skills/sql-query-optimization/) | Speeds up slow PostgreSQL queries by reading EXPLAIN ANALYZE, fixing indexes and N+1 patterns, and rewriting only when results stay identical. |
| [SQLAlchemy Patterns](templates/skills/sqlalchemy-patterns/) | Applies SQLAlchemy 2 patterns for sessions, typed models, relationship loading and Alembic migrations, and removes legacy 1.x habits. |
| [Supply Chain Security](templates/skills/supply-chain-security/) | Pins dependencies and CI actions, checks package provenance and trims workflow permissions to reduce the damage a poisoned package could do. |
| [Svelte Runes Components](templates/skills/svelte-runes-components/) | Builds Svelte 5 components with runes and snippets, and replaces stores and legacy reactive statements. Use it when writing or upgrading Svelte code. |
| [SwiftUI Patterns](templates/skills/swiftui-patterns/) | Structures SwiftUI views, state and navigation around observable models so screens stay small, previewable and free of stale-state bugs. |
| [Systematic Debugging](templates/skills/systematic-debugging/) | Finds the root cause of a bug by reproducing it, isolating it and testing hypotheses before any fix. Use it when something fails and the cause is unclear. |
| [Tailwind Design System](templates/skills/tailwind-design-system/) | Sets up Tailwind theme tokens, component classes and typed variants so a UI stays consistent without piles of repeated utility strings. |
| [Task Breakdown](templates/skills/task-breakdown/) | Splits a feature request into small, ordered tasks that each have a clear acceptance check, so work ships in reviewable steps. |
| [TDD Workflow](templates/skills/tdd-workflow/) | Builds a feature in small red, green, refactor cycles, with one failing test first and one commit per cycle, so every step stays verified. |
| [Technical Docs Writing](templates/skills/technical-docs-writing/) | Writes READMEs and how-to guides a stranger can follow, by running every step itself and cutting anything the reader does not need on first use. |
| [Terraform Module Design](templates/skills/terraform-module-design/) | Designs reusable Terraform modules with clear inputs and outputs, a safe state layout, and a plan review before anything is applied. |
| [Test Coverage Gap Analysis](templates/skills/test-coverage-gap-analysis/) | Reads the coverage report, ranks uncovered branches by risk and writes meaningful tests for the top gaps instead of chasing a percentage. |
| [Test Mocking Strategies](templates/skills/test-mocking-strategies/) | Picks the right test double for each dependency (real object, fake, stub or spy) so tests stay fast without mocking away the behavior they should verify. |
| [Threat Modeling](templates/skills/threat-modeling/) | Builds a STRIDE threat model for a feature, with data flows, trust boundaries, abuse cases and ranked mitigations tied to real code. |
| [TypeScript Strict Migration](templates/skills/typescript-strict-migration/) | Moves a TypeScript project to strict mode one compiler flag at a time, fixing each wave of errors with real types instead of any casts or ts-ignore. |
| [Unit Test Writing](templates/skills/unit-test-writing/) | Writes focused unit tests for a function or class, covering boundaries and failures without testing mocks. Use it when code lacks tests or a bug needs one. |
| [Vector Database Design](templates/skills/vector-database-design/) | Chooses the index type, embedding dimensions, chunking and metadata filters for a vector store, with recall checked against a test set. |
| [Vue Composition API](templates/skills/vue-composition-api/) | Writes Vue 3 script setup components and composables with typed props, typed emits and reactivity that does not leak. Use it for any new or ported component. |
| [Web Accessibility Audit](templates/skills/web-accessibility-audit/) | Audits UI code against WCAG 2.2 for keyboard access, labels, contrast and focus handling, and fixes what it finds. Use it on any page or component. |
| [Webhook Handling](templates/skills/webhook-handling/) | Builds a webhook receiver that verifies signatures on the raw body, rejects replays, deduplicates events and acknowledges fast before processing. |
| [Zero Downtime Schema Change](templates/skills/zero-downtime-schema-change/) | Plans schema changes as expand, migrate and contract steps with batched backfills, so old and new code both work during every deploy. |

### Subagents (100)

| Template | What it does |
|---|---|
| [Accessibility Fixer](templates/agents/accessibility-fixer/) | Subagent that fixes accessibility problems in UI components: labels, roles, focus order and contrast, then re-checks each fix. |
| [ADR Writer](templates/agents/adr-writer/) | Subagent that drafts an architecture decision record from a decision you describe and the code around it, including options weighed and consequences. |
| [API Compatibility Checker](templates/agents/api-compatibility-checker/) | Read-only subagent that compares a change against your public API and flags breaking changes, each with a migration note. |
| [API Doc Generator](templates/agents/api-doc-generator/) | Subagent that documents HTTP endpoints from the routes, types and validators in your code, with request and response examples that match them. |
| [API Reviewer](templates/agents/api-reviewer/) | Read-only subagent that reviews HTTP endpoints for naming, status codes, validation and consistency, and lists concrete fixes by severity. |
| [Architecture Advisor](templates/agents/architecture-advisor/) | Read-only subagent that evaluates a proposed design against your real code, lists the trade-offs and recommends one option with reasons. |
| [Auth Flow Reviewer](templates/agents/auth-flow-reviewer/) | Read-only subagent that traces login, session, and permission paths through your code and flags missing checks and object-level access holes. |
| [Background Job Reviewer](templates/agents/background-job-reviewer/) | Read-only subagent that audits queue workers and scheduled jobs for idempotency, retry storms, poison messages and lost work. |
| [Breaking Change Detector](templates/agents/breaking-change-detector/) | Read-only subagent that scans the diff between two tags for breaking changes and drafts upgrade notes for the people who depend on you. |
| [Bug Hunter](templates/agents/bug-hunter/) | Read-only subagent that traces a reported bug to its root cause, proves it with evidence, and proposes the smallest possible fix. |
| [Bundle Analyzer](templates/agents/bundle-analyzer/) | Read-only subagent that analyzes your build output, lists the heaviest modules and suggests cheaper alternatives or lazy loading. |
| [C# Reviewer](templates/agents/csharp-reviewer/) | Read-only subagent that reviews C# and .NET code for async pitfalls, missing disposal, nullable warnings and costly LINQ. |
| [Caching Advisor](templates/agents/caching-advisor/) | Read-only subagent that finds reads worth caching and existing caches that are unsafe, with key design and invalidation advice for each. |
| [CI Fixer](templates/agents/ci-fixer/) | Reads a failing CI log, finds the real cause behind the first error, fixes it and reruns the same steps locally before reporting. |
| [Cloud Cost Reviewer](templates/agents/cloud-cost-reviewer/) | Read-only subagent that reviews infrastructure code and bill exports for waste, then proposes savings ranked by dollars and risk. |
| [Code Explorer](templates/agents/code-explorer/) | Read-only subagent that maps an unfamiliar part of a codebase and answers where and how questions with exact file and line references. |
| [Code Simplifier](templates/agents/code-simplifier/) | Subagent that simplifies recently changed code for clarity and reuse without altering behavior, then runs the tests to prove it. |
| [Codebase Mapper](templates/agents/codebase-mapper/) | Read-only subagent that maps an unfamiliar repo: modules, entry points, data flow, and where to start reading, in a one-page guide. |
| [Commit Splitter](templates/agents/commit-splitter/) | Subagent that turns one big uncommitted change into a series of small logical commits, each building and each with a clear message. |
| [Component Extractor](templates/agents/component-extractor/) | Subagent that pulls repeated JSX into a typed, tested React component and updates every call site to use it. |
| [Concurrency Reviewer](templates/agents/concurrency-reviewer/) | Read-only subagent that reviews threads, async code and locks for data races, deadlocks and unsafe shared state. |
| [Container Security Reviewer](templates/agents/container-security-reviewer/) | Read-only subagent that reviews Dockerfiles and compose files for root users, baked-in secrets, unpinned bases and bloated images. |
| [Coverage Improver](templates/agents/coverage-improver/) | Subagent that raises coverage on one module by writing meaningful tests for its riskiest uncovered branches, not for the easy lines. |
| [CSS Refactorer](templates/agents/css-refactorer/) | Subagent that merges duplicated CSS into tokens and shared classes, proving the rendered result is unchanged. |
| [Data Cleaner](templates/agents/data-cleaner/) | Subagent that cleans a messy dataset with a repeatable pandas script and logs every row it changes, drops or flags. |
| [Database Expert](templates/agents/database-expert/) | Designs schemas and queries, reads query plans and suggests indexes. Always asks before running anything that writes or alters data. |
| [Dead Code Remover](templates/agents/dead-code-remover/) | Subagent that deletes code proven unused by searches and build checks, working in small clusters you can review one at a time. |
| [Dependency Upgrader](templates/agents/dependency-upgrader/) | Upgrades one dependency at a time, reads its changelog for breaking changes, fixes call sites and runs the tests before moving on. |
| [Dependency Vulnerability Scanner](templates/agents/dependency-vulnerability-scanner/) | Read-only subagent that runs your audit tools, checks whether vulnerable code is reachable, and ranks the real exposure for a fix order. |
| [Deploy Readiness Checker](templates/agents/deploy-readiness-checker/) | Read-only subagent that checks migrations, config, feature flags and rollback steps for the changes in a release before you deploy. |
| [Design System Auditor](templates/agents/design-system-auditor/) | Read-only subagent that finds colors, spacing and one-off components that bypass your design system, and counts each deviation. |
| [Diagram Drawer](templates/agents/diagram-drawer/) | Subagent that reads your code and draws accurate Mermaid architecture and sequence diagrams, then places them in the right doc files. |
| [Doc Drift Checker](templates/agents/doc-drift-checker/) | Read-only subagent that compares your docs with the code and lists every statement that is no longer true, with proof from the source. |
| [Dockerfile Reviewer](templates/agents/dockerfile-reviewer/) | Read-only subagent that reviews a Dockerfile for layer order, image size, cache misses and security, and lists fixes by impact. |
| [Docs Writer](templates/agents/docs-writer/) | Writes or updates README files, API docs and guides so they match what the code does today, verifying each example before it ships. |
| [Docstring Writer](templates/agents/docstring-writer/) | Subagent that adds accurate docstrings to undocumented public functions by reading what they do, how callers use them and which errors they raise. |
| [E2E Test Author](templates/agents/e2e-test-author/) | Subagent that writes Playwright end-to-end tests for one user journey, using stable locators and web-first assertions with no fixed sleeps. |
| [Endpoint Scaffolder](templates/agents/endpoint-scaffolder/) | Subagent that adds one new API endpoint end to end by copying your existing patterns: route, validation, service, tests and docs. |
| [Error Handling Reviewer](templates/agents/error-handling-reviewer/) | Read-only subagent that audits a change for swallowed errors, leaked resources and failure paths that leave callers guessing. |
| [Flaky Test Fixer](templates/agents/flaky-test-fixer/) | Subagent that reproduces a flaky test with repeated runs, identifies why it is unstable, and fixes the test or the code it exposes. |
| [Flutter Widget Reviewer](templates/agents/flutter-widget-reviewer/) | Read-only subagent that reviews Flutter widgets for rebuild cost, state placement, and layout overflow before they reach a device. |
| [Frontend Reviewer](templates/agents/frontend-reviewer/) | Read-only subagent that reviews UI changes for missing states, accessibility failures and broken layouts on small screens. |
| [Git History Investigator](templates/agents/git-history-investigator/) | Read-only subagent that explains why a line or behavior exists by tracing its commits, merges, and the discussions linked to them. |
| [GitHub Actions Author](templates/agents/github-actions-author/) | Subagent that writes or repairs a GitHub Actions workflow for a stated need, with dependency caching, pinned actions and minimal permissions. |
| [Go Reviewer](templates/agents/go-reviewer/) | Read-only subagent that reviews Go code for ignored errors, goroutine leaks, context misuse and oversized interfaces. |
| [i18n Extractor](templates/agents/i18n-extractor/) | Subagent that moves hardcoded UI strings into message files with stable keys and plural forms, then checks for missing keys. |
| [IAM Policy Reviewer](templates/agents/iam-policy-reviewer/) | Read-only subagent that audits AWS IAM policies and roles for wildcards, privilege escalation paths and permissions nobody uses. |
| [Incident Investigator](templates/agents/incident-investigator/) | Read-only subagent that rebuilds an incident timeline from logs, deploys and commits, then ranks the likely causes with evidence. |
| [Index Advisor](templates/agents/index-advisor/) | Read-only subagent that compares your Postgres query patterns with existing indexes and lists which to add, merge or drop. |
| [Injection Hunter](templates/agents/injection-hunter/) | Read-only subagent that traces untrusted input to SQL, shell, template and HTML sinks and reports each unsafe path with a proof. |
| [Java Reviewer](templates/agents/java-reviewer/) | Read-only subagent that reviews Java for null handling, stream misuse, unclosed resources and poorly designed exceptions. |
| [Kotlin Reviewer](templates/agents/kotlin-reviewer/) | Read-only subagent that reviews Kotlin for coroutine scope mistakes, unsafe nullability, weak sealed types and collection misuse. |
| [Kubernetes Debugger](templates/agents/kubernetes-debugger/) | Read-only subagent that diagnoses pods stuck in CrashLoopBackOff, Pending or ImagePullBackOff from describe output, events and logs. |
| [Legacy Modernizer](templates/agents/legacy-modernizer/) | Subagent that upgrades outdated syntax and deprecated API calls one file at a time, running the tests after every step. |
| [Library Evaluator](templates/agents/library-evaluator/) | Read-only subagent that compares candidate libraries against your project needs and recommends one, with risks and a switching cost estimate. |
| [License Compliance Checker](templates/agents/license-compliance-checker/) | Read-only subagent that lists every dependency license and flags the ones that conflict with your project license or distribution model. |
| [Log Analyst](templates/agents/log-analyst/) | Read-only subagent that sifts large log files for error clusters, first occurrences and rate changes without loading the whole file. |
| [Logging Auditor](templates/agents/logging-auditor/) | Read-only subagent that audits application logs for missing context, wrong levels, noise and leaked personal data or secrets. |
| [Memory Leak Hunter](templates/agents/memory-leak-hunter/) | Read-only subagent that traces listeners, caches and long-lived references that grow without bound and explains how to release them. |
| [Merge Conflict Resolver](templates/agents/merge-conflict-resolver/) | Subagent that resolves merge and rebase conflicts file by file, explains why it kept each side, and runs the tests before finishing. |
| [Migration Writer](templates/agents/migration-writer/) | Subagent that writes a reversible database migration for a described change and checks it against the current schema before finishing. |
| [ML Code Reviewer](templates/agents/ml-code-reviewer/) | Read-only subagent that reviews PyTorch and ML code for data leakage, seed handling, evaluation mistakes and silent shape bugs. |
| [Mobile UI Reviewer](templates/agents/mobile-ui-reviewer/) | Read-only subagent that reviews mobile screens for touch targets, safe areas, missing states, and platform conventions on iOS and Android. |
| [Mutation Test Analyst](templates/agents/mutation-test-analyst/) | Read-only subagent that interprets mutation testing output and lists the exact assertions that must be strengthened to kill surviving mutants. |
| [N+1 Hunter](templates/agents/n-plus-one-hunter/) | Read-only subagent that finds N+1 query patterns in ORM and GraphQL code and proposes batched or eager-loaded replacements. |
| [Notebook Reviewer](templates/agents/notebook-reviewer/) | Read-only subagent that audits Jupyter notebooks for hidden state, data leakage and cells that cannot be reproduced. |
| [OpenAPI Sync Checker](templates/agents/openapi-sync-checker/) | Read-only subagent that compares your OpenAPI spec with the routes the code really serves and lists every mismatch it can prove. |
| [Performance Analyst](templates/agents/performance-analyst/) | Read-only subagent that reads hot paths, queries and loops to find likely performance bottlenecks and ranks them with evidence. |
| [PHP Reviewer](templates/agents/php-reviewer/) | Read-only subagent that reviews PHP changes for missing types, injection risks, swallowed errors and framework misuse. |
| [PR Triager](templates/agents/pr-triager/) | Read-only subagent that sorts open pull requests by size, risk and staleness and proposes the order in which to review them. |
| [Privacy Data Flow Reviewer](templates/agents/privacy-data-flow-reviewer/) | Read-only subagent that maps where personal data is collected, stored, logged and sent to third parties, then flags the privacy risks. |
| [Prompt Reviewer](templates/agents/prompt-reviewer/) | Read-only subagent that reviews prompts and LLM API calls for ambiguity, injection exposure, brittle parsing and missing evals. |
| [Python Reviewer](templates/agents/python-reviewer/) | Read-only subagent that reviews Python changes for idioms, typing, mutable defaults, exception handling and packaging mistakes. |
| [Query Optimizer](templates/agents/query-optimizer/) | Subagent that tunes one slow SQL query from its EXPLAIN output and proposes an index or rewrite backed by before and after plans. |
| [RAG Evaluator](templates/agents/rag-evaluator/) | Subagent that builds a small retrieval test set and measures recall and answer quality of a RAG pipeline with a repeatable script. |
| [React Native Debugger](templates/agents/react-native-debugger/) | Subagent that diagnoses Metro, native build, and red-screen errors in React Native, finds the real cause, and applies a minimal fix. |
| [React Performance Reviewer](templates/agents/react-performance-reviewer/) | Read-only subagent that finds avoidable re-renders, heavy effects and unvirtualized long lists in React code, ranked by likely impact. |
| [README Updater](templates/agents/readme-updater/) | Subagent that checks a README against the current code and fixes outdated setup steps, commands, options and examples, without rewriting its voice. |
| [Refactoring Planner](templates/agents/refactoring-planner/) | Read-only subagent that maps a tangled module and writes an ordered, low-risk refactoring plan with a test checkpoint between every step. |
| [Regression Test Writer](templates/agents/regression-test-writer/) | Subagent that turns a fixed bug into a regression test that fails on the old code and passes on the fix, at the lowest useful test level. |
| [Release Manager](templates/agents/release-manager/) | Subagent that prepares a release: picks the version bump, drafts the changelog from commits, runs the checks and gives you the tag commands. |
| [Research Assistant](templates/agents/research-assistant/) | Read-only subagent that researches a technical question across docs and the web and reports sourced findings, with confidence stated for each. |
| [Rust Reviewer](templates/agents/rust-reviewer/) | Read-only subagent that reviews Rust code for unclear ownership, needless clones, unwrap in library paths and weak error types. |
| [Schema Reviewer](templates/agents/schema-reviewer/) | Read-only subagent that reviews a database schema for missing constraints, poor column types, naming drift and normalization problems. |
| [Secrets Hunter](templates/agents/secrets-hunter/) | Read-only subagent that searches the working tree and git history for leaked keys, tokens, and credentials and reports each with where it lives. |
| [Security Auditor](templates/agents/security-auditor/) | Read-only subagent that audits a repo for exploitable vulnerabilities and returns them ranked by severity with evidence and fixes. |
| [Seed Data Generator](templates/agents/seed-data-generator/) | Subagent that writes realistic, deterministic seed scripts for your schema, with valid relations and a fixed random seed. |
| [Service Extractor](templates/agents/service-extractor/) | Subagent that moves business logic out of fat controllers into service classes in small steps, keeping the tests green after each move. |
| [Shell Script Reviewer](templates/agents/shell-script-reviewer/) | Read-only subagent that reviews shell scripts for quoting, error handling, unsafe deletes and portability bugs, with a fixed line for each. |
| [SQL Analyst](templates/agents/sql-analyst/) | Subagent that answers a business question with SQL against your database and returns the query, the result and the caveats. |
| [Swift Reviewer](templates/agents/swift-reviewer/) | Read-only subagent that reviews Swift changes for retain cycles, unsafe optionals, concurrency bugs and misuse of value types. |
| [Task Planner](templates/agents/task-planner/) | Read-only subagent that turns a goal into an ordered, checked implementation plan with the exact files to touch and a way to verify each step. |
| [Technical Debt Auditor](templates/agents/technical-debt-auditor/) | Read-only subagent that scans a repository for debt hotspots and ranks them by cost to change and risk of leaving them. |
| [Terraform Plan Reviewer](templates/agents/terraform-plan-reviewer/) | Read-only subagent that reads a terraform plan and flags destroys, forced replacements, data loss risk and surprise changes before apply. |
| [Test Data Builder](templates/agents/test-data-builder/) | Subagent that creates factories and builders for test data so tests state only what matters and stop copying huge fixture blobs. |
| [Test Reviewer](templates/agents/test-reviewer/) | Read-only subagent that reviews tests for weak assertions, over-mocking, hidden coupling and the edge cases a suite quietly skips. |
| [Test Writer](templates/agents/test-writer/) | Writes and runs unit tests for a change, covers edge cases and failure paths, and never edits the code under test. |
| [Threat Modeler](templates/agents/threat-modeler/) | Read-only subagent that builds a threat model for a feature from its real code and data flows, with ranked threats and the controls to add. |
| [Type Safety Auditor](templates/agents/type-safety-auditor/) | Read-only subagent that finds any-casts, unchecked assertions and unsafe narrowing in TypeScript and proposes properly typed replacements. |
| [TypeScript Reviewer](templates/agents/typescript-reviewer/) | Read-only subagent that reviews TypeScript for weak type design, unsafe casts, unhandled promises and tangled module boundaries. |

### Commands and prompts (100)

| Template | What it does |
|---|---|
| [A11y Check](templates/commands/a11y-check/) | Audits a page or component for accessibility problems against WCAG 2.2 and lists fixes ordered by impact on real users. |
| [Add Caching](templates/commands/add-caching/) | Adds caching to a hot read path with clear keys, an expiry and invalidation on writes, after proving the path is hot. |
| [Add Edge Case Tests](templates/commands/add-edge-case-tests/) | Adds tests for the boundary and error cases of one function: empty, huge, null, malformed and surprising input. |
| [Add Endpoint](templates/commands/add-endpoint/) | Adds a new API endpoint that matches your existing routes, with validation, error handling, tests and docs in one pass. |
| [Add Error Handling](templates/commands/add-error-handling/) | Adds real error handling to one function: lists its failure modes, handles each with a clear message and cleans up resources. |
| [Add Form Validation](templates/commands/add-form-validation/) | Adds matching client and server validation to a form, with plain error messages that are announced to screen readers. |
| [Add Health Check](templates/commands/add-health-check/) | Adds liveness and readiness endpoints that test real dependencies with short timeouts, so orchestrators restart the right things. |
| [Add Index](templates/commands/add-index/) | Proposes an index for one slow query with plan evidence and the write cost, then creates it safely only when you approve. |
| [Add Loading States](templates/commands/add-loading-states/) | Adds loading, empty and error states to a view that fetches data, using the spinners, skeletons and messages the app already has. |
| [Add Logging](templates/commands/add-logging/) | Adds structured log lines to one flow at the points that help debugging, with levels, context fields and no sensitive data. |
| [Add Pagination](templates/commands/add-pagination/) | Adds pagination to a list endpoint in the style your project already uses, with a stable order and updated tests. |
| [Add Rate Limit](templates/commands/add-rate-limit/) | Adds rate limiting to a named route group using your current stack, with sane limits, proper 429 replies and a test. |
| [Add Regression Test](templates/commands/add-regression-test/) | Writes a test that fails on the bug you describe, proves it fails, then confirms it passes once the fix is in. |
| [Add Types](templates/commands/add-types/) | Adds precise type annotations to one file and fixes the checker errors that show up, without leaning on any or ignores. |
| [Add Validation](templates/commands/add-validation/) | Adds request validation to a handler using the validation library your project already uses, with tests for bad input. |
| [Analyze CSV](templates/commands/analyze-csv/) | Loads a CSV, profiles every column and its quality problems, and summarizes the data with a few plots saved to disk. |
| [Audit Dependencies](templates/commands/audit-dependencies/) | Runs your package manager audit, explains which advisories really matter and proposes the smallest safe upgrade for each. |
| [Branch Cleanup](templates/commands/branch-cleanup/) | Lists merged and stale local branches, shows exactly what would be removed and deletes only the ones you approve. |
| [Changelog Entry](templates/commands/changelog-entry/) | Builds a Keep a Changelog entry from the commits since the last tag and adds it to CHANGELOG.md after you approve the text. |
| [Check Android Lint](templates/commands/check-android-lint/) | Runs Android lint, groups the findings by impact and fixes the ones that affect users, crashes or Play Store releases. |
| [Check Auth](templates/commands/check-auth/) | Walks every route and handler in an area and confirms each one checks who the caller is and what they may do. |
| [Check Responsive](templates/commands/check-responsive/) | Reviews layout code for small-screen breakage such as overflow, fixed widths and cramped tap targets, then fixes the breakpoints. |
| [Cherry Pick Fix](templates/commands/cherry-pick-fix/) | Cherry-picks a fix commit onto a release branch, resolves conflicts with you and runs the tests there before anything is pushed. |
| [Clean Notebook](templates/commands/clean-notebook/) | Cleans a Jupyter notebook: removes dead cells, fixes run order, moves reusable code into modules and checks it runs top to bottom. |
| [Commit Message](templates/commands/commit-message/) | Writes a Conventional Commits message from your staged changes, shows it to you and commits only after you say yes. |
| [Convert to TypeScript](templates/commands/convert-to-typescript/) | Converts a JavaScript file to TypeScript with real types and no any shortcuts, and keeps the build and tests passing. |
| [Coverage Gaps](templates/commands/coverage-gaps/) | Runs coverage, ranks the riskiest untested code by what breaks if it fails, and writes tests for the top items. |
| [Debug Container](templates/commands/debug-container/) | Finds why a Docker container exits, restarts or misbehaves by reading its logs, exit code, config and Dockerfile together. |
| [Debug Error](templates/commands/debug-error/) | Finds the root cause of an error message or stack trace in your code, shows the evidence and proposes a minimal fix. |
| [Deploy Checklist](templates/commands/deploy-checklist/) | Builds a deploy checklist from your current diff: migrations, config changes, feature flags, order of steps and how to roll back. |
| [Dockerize](templates/commands/dockerize/) | Writes a Dockerfile and .dockerignore for your project with layer caching, a slim final image and a non-root user. |
| [Document Endpoint](templates/commands/document-endpoint/) | Writes reference docs for one endpoint from the real code: parameters, responses, errors and a working example call. |
| [Document Env Vars](templates/commands/document-env-vars/) | Finds every environment variable your code reads and writes an example env file plus a table of what each one does. |
| [Document Function](templates/commands/document-function/) | Writes a docstring for the selected function in your language and style: inputs, return value, errors raised and a working example. |
| [E2E Scenario](templates/commands/e2e-scenario/) | Turns a plain-language user journey into an end-to-end test written in the framework your project already uses. |
| [Estimate Task](templates/commands/estimate-task/) | Estimates a task by inspecting the code it touches, then gives an hour range with assumptions and the unknowns behind it. |
| [Eval Prompt](templates/commands/eval-prompt/) | Runs a prompt against several test inputs and reports which outputs fail your stated criteria, with the evidence for each failure. |
| [Explain Code](templates/commands/explain-code/) | Explains a file or function to a newcomer: purpose, a step-by-step walk-through with a worked example, and the gotchas. |
| [Explain Error](templates/commands/explain-error/) | Explains an error message or stack trace in plain words, points to the line most likely at fault and suggests what to check first. |
| [Explain Query](templates/commands/explain-query/) | Explains what a SQL query returns, how the database plans to run it and which parts will be slow, using the real plan if allowed. |
| [Extract Function](templates/commands/extract-function/) | Pulls a block of code into a well-named function with few parameters, updates the callers and checks nothing else changed. |
| [Extract Hook](templates/commands/extract-hook/) | Moves stateful logic out of a React component into a custom hook, keeps behavior identical and adds tests for the hook. |
| [Find Dead Code](templates/commands/find-dead-code/) | Finds unused exports, files and dependencies and shows the evidence for each, so you can delete with confidence. |
| [Find Secrets](templates/commands/find-secrets/) | Searches the working tree for API keys, tokens, private keys and risky config files and reports where each one lives. |
| [Fix Failing Tests](templates/commands/fix-failing-tests/) | Runs the suite, groups failures by shared cause and fixes one cause at a time, rerunning after each fix. |
| [Fix iOS Build](templates/commands/fix-ios-build/) | Diagnoses an Xcode build or code signing failure from the error output and applies the smallest fix that makes it build. |
| [Fix Lint Errors](templates/commands/fix-lint/) | Runs your linter, applies only safe fixes, then lists every remaining finding with a reason so nothing is silenced by accident. |
| [Fix Type Errors](templates/commands/fix-type-errors/) | Runs your type checker and fixes each reported error at its root cause, never with casts, any or suppression comments. |
| [Fixup Commits](templates/commands/fixup-commits/) | Matches staged review fixes to the commits they belong to, creates fixup commits and autosquashes once you approve. |
| [Generate API Docs](templates/commands/generate-api-docs/) | Builds API reference pages from your source code in the docs format and folder your project already uses. |
| [Git Sync](templates/commands/git-sync/) | Brings your current branch up to date with its upstream by rebase or merge, resolves small conflicts and reports what changed. |
| [Harden Input](templates/commands/harden-input/) | Adds validation and sanitization to the inputs of one named handler and writes tests that throw bad data at it. |
| [Mock External API](templates/commands/mock-external-api/) | Builds a realistic mock of an external API for your tests, shaped from recorded or documented responses. |
| [Optimize Images](templates/commands/optimize-images/) | Scans the project for heavy images and outdated formats, then proposes sizes, conversions and markup changes before touching any file. |
| [Organize Imports](templates/commands/organize-imports/) | Sorts, groups and prunes imports in your changed files to match the project convention, then proves nothing broke. |
| [Plan Feature](templates/commands/plan-feature/) | Plans a feature before any code is written: files to touch, ordered steps, risks and the exact checks that prove it works. |
| [Plan Tests](templates/commands/plan-tests/) | Produces a test plan for a feature: the cases, the edge conditions, the data needed and which level each test belongs to. |
| [PR Checklist](templates/commands/pr-checklist/) | Runs tests, lint and type checks, hunts leftover debug code and trims the diff before you open a pull request. |
| [Profile DataFrame](templates/commands/profile-dataframe/) | Profiles a pandas DataFrame for dtypes, nulls, outliers and duplicates, then suggests exact pandas fixes for each issue. |
| [Pull Request Description](templates/commands/pr-description/) | Drafts a pull request title and description from the diff between your branch and the base branch, ready to paste into GitHub. |
| [Refactor](templates/commands/refactor/) | Refactors the code you name for clarity in small steps, running the tests after each step so behavior never changes. |
| [Release Notes](templates/commands/release-notes/) | Writes user-facing release notes from merged pull requests since the last release, grouped by what users can now do. |
| [Remove Console Logs](templates/commands/remove-console-logs/) | Finds and removes leftover debug logging and prints while keeping the intentional logger calls and CLI output. |
| [Remove Duplication](templates/commands/remove-duplication/) | Finds duplicated logic in one area and merges it only where the copies truly belong together, with tests proving behavior held. |
| [Rename Symbol](templates/commands/rename-symbol/) | Renames a function, class or variable everywhere, including strings, docs and tests, then verifies the build still passes. |
| [Repository Code Tour](templates/commands/code-tour/) | Gives a new developer a guided tour of the repository: layout, entry points, request flow, how to run it and where the risky parts are. |
| [Reproduce Bug](templates/commands/reproduce-bug/) | Turns a bug report into the smallest set of steps or a failing test and shows the actual failing output. |
| [Research Topic](templates/commands/research-topic/) | Researches a technical question and returns a short sourced brief with options compared and one clear recommendation. |
| [Resolve Conflicts](templates/commands/resolve-conflicts/) | Finds every conflicted file after a merge or rebase, resolves each with written reasoning and runs the checks before you continue. |
| [Resolve Todos](templates/commands/resolve-todos/) | Gathers to-do and fix-me comments, ranks them by risk and age, and fixes only the small, safe ones once you approve. |
| [Review Changes](templates/commands/review-changes/) | Reviews your own uncommitted changes before you commit and lists problems by severity, so you catch them before a reviewer does. |
| [Review Permissions](templates/commands/review-permissions/) | Reviews roles, scopes and access lists in a config or manifest and proposes a trimmed version that keeps only what is used. |
| [Review PR](templates/commands/review-pr/) | Reviews a pull request by number or link and returns a verdict with blocking issues, optional suggestions and what was checked. |
| [Review Terraform Plan](templates/commands/review-terraform-plan/) | Summarizes a terraform plan in plain words and flags destroys, forced replacements and changes that could cause an outage. |
| [Scaffold Component](templates/commands/scaffold-component/) | Creates a new UI component with props, styles, a test and a story, copying the folder layout your project already uses. |
| [Schema Diff Review](templates/commands/schema-diff-review/) | Reviews a schema change or migration diff for risk, missing indexes and rollback, and returns a verdict with line references. |
| [Security Scan](templates/commands/security-scan/) | Scans the codebase for injection, broken auth, unsafe deserialization and similar flaws, then ranks each finding by severity. |
| [Seed Database](templates/commands/seed-database/) | Writes a seed script with realistic, properly related sample data that is safe to run twice and refuses to run in production. |
| [Session Handoff](templates/commands/session-handoff/) | Writes a handoff note covering what was done, what remains, decisions made and the exact commands to resume work. |
| [Setup GitHub Actions](templates/commands/setup-github-actions/) | Creates a GitHub Actions workflow that installs with a cache, runs lint, tests and build, and uses least-privilege permissions. |
| [Simplify Code](templates/commands/simplify-code/) | Cuts the length and nesting of one function without changing what it does, and proves it with before and after tests. |
| [Split PR](templates/commands/split-pr/) | Plans how to break a large branch into small pull requests, in an order where each one builds, passes tests and can merge alone. |
| [SQL From Question](templates/commands/sql-from-question/) | Turns a plain-language question into a SQL query that fits your real schema, explains each part and runs only read-only statements. |
| [Squash Commits](templates/commands/squash-commits/) | Turns a messy branch history into a few clear commits with proper messages, showing the plan before rewriting anything. |
| [Standup Summary](templates/commands/standup-summary/) | Summarizes what you changed since yesterday from git history and the working tree, in a form you can read out at standup. |
| [Summarize Diff](templates/commands/summarize-diff/) | Explains a diff in plain language for a product manager or support lead: what changed, who is affected and what could go wrong. |
| [Tag Release](templates/commands/tag-release/) | Picks the next semantic version from commits since the last tag and prepares the annotated tag command for your approval. |
| [Triage CI Failure](templates/commands/triage-ci-failure/) | Reads a failing CI log, finds the first real error behind the noise and proposes a specific fix you can approve. |
| [Triage Test Failure](templates/commands/triage-test-failure/) | Diagnoses one failing test from its output and tells you whether the test or the code is wrong, with the evidence. |
| [Triage Todos](templates/commands/triage-todos/) | Collects to-do comments and open issues, then sorts them into do now, later and drop with a short reason for each. |
| [Undo Last Commit](templates/commands/undo-last-commit/) | Undoes the most recent commit safely, keeps your work, and picks between soft reset, mixed reset and revert for your case. |
| [Update OpenAPI](templates/commands/update-openapi/) | Brings your OpenAPI spec in line with changed routes and validates the file, so the spec matches what the server does. |
| [Update README](templates/commands/update-readme/) | Compares your README with the real code and fixes install, run and usage sections that no longer match what the project does. |
| [Update Snapshots Safely](templates/commands/update-snapshots-safely/) | Reviews every changed snapshot before updating it and flags the ones that hide a real regression. |
| [Why Changed](templates/commands/why-changed/) | Explains why a file or function looks the way it does by tracing its commits, blame and linked issues, with evidence. |
| [Write ADR](templates/commands/write-adr/) | Writes an architecture decision record for a decision your team just made, with context, options weighed and consequences. |
| [Write Kubernetes Manifest](templates/commands/write-k8s-manifest/) | Writes Deployment, Service and config manifests for a service with probes, resource limits and a rollout that can be undone. |
| [Write Migration](templates/commands/write-migration/) | Drafts an up and down migration for the schema change you describe, then checks it for table locks, data loss and rollout order. |
| [Write Runbook](templates/commands/write-runbook/) | Writes an on-call runbook for a service or alert, with first checks, exact commands, escalation and a safe way back. |
| [Write Tests](templates/commands/write-tests/) | Writes tests for a named file or function in your existing test style, runs them and reports what they cover and what they miss. |

### MCP setups (60)

| Template | What it does |
|---|---|
| [Apify MCP Server](templates/mcp/apify-mcp/) | Give your coding agent Apify's hosted MCP server to find Actors, run web scrapers and read their datasets, signing in with OAuth. |
| [Asana MCP Server](templates/mcp/asana-mcp/) | Let your coding agent read and update Asana tasks and projects through Asana's hosted V2 MCP server with a browser OAuth sign-in. |
| [Atlassian MCP Server](templates/mcp/atlassian-mcp/) | Connect your agent to Atlassian's hosted MCP server to search and update Jira work items and Confluence pages with your own permissions. |
| [Auth0 MCP Server](templates/mcp/auth0-mcp/) | Inspect Auth0 applications, APIs, actions and logs from your coding agent with Auth0's official MCP server, in read-only mode by default. |
| [AWS Documentation MCP Server](templates/mcp/aws-mcp/) | Run the AWS Labs documentation MCP server with uvx so your agent can search and read current AWS docs instead of guessing from memory. |
| [Azure MCP Server](templates/mcp/azure-mcp/) | Start Microsoft's Azure MCP server via npx and let the agent work with Azure storage, Monitor logs and Cosmos DB using your az login. |
| [Box MCP Server](templates/mcp/box-mcp/) | Connect your coding agent to Box's hosted MCP server to search folders, read files and ask Box AI questions about documents you can already open. |
| [Brave Search MCP Server](templates/mcp/brave-mcp/) | Give your coding agent live web, news, image and local search through Brave's own MCP server, so it can look up current docs and errors. |
| [Browserbase MCP Server](templates/mcp/browserbase-mcp/) | Run browser sessions in the Browserbase cloud from your agent to open pages, act on them in plain language and extract data, via the self-hosted server. |
| [Chroma MCP Server](templates/mcp/chroma-mcp/) | Create Chroma collections and add, query and inspect embeddings from your coding agent with the chroma-mcp server, run through uvx. |
| [Chrome DevTools MCP Server](templates/mcp/chrome-devtools-mcp/) | Let your coding agent open Chrome, read the console and network panel, and record performance traces to debug a live page with DevTools. |
| [CircleCI MCP Server](templates/mcp/circleci-mcp/) | Read CircleCI build failures, test results and pipeline status from your agent, then get help fixing the config or the failing job. |
| [ClickHouse MCP Server](templates/mcp/clickhouse-mcp/) | Let your agent run read-only SQL against ClickHouse and browse its databases and tables using ClickHouse's official MCP server. |
| [ClickUp MCP Server](templates/mcp/clickup-mcp/) | Connect your agent to ClickUp's hosted MCP server to search, create and update tasks, docs and time entries after an OAuth sign-in. |
| [Cloudflare MCP Server](templates/mcp/cloudflare-mcp/) | Point your agent at Cloudflare's hosted API MCP server to manage Workers, R2, DNS and other products and to search the Cloudflare docs. |
| [Context7 MCP Server](templates/mcp/context7-mcp/) | Give your coding agent current library documentation and code examples through Upstash's Context7 MCP server, so it stops guessing at old APIs. |
| [Convex MCP Server](templates/mcp/convex-mcp/) | Let your coding agent inspect a Convex deployment's tables, data, logs and functions through the Convex CLI's MCP server, with write tools turned off. |
| [Docker MCP Gateway](templates/mcp/docker-mcp/) | Route your agent through Docker's MCP gateway so each tool server runs in its own isolated container with secrets kept out of env variables. |
| [Exa MCP Server](templates/mcp/exa-mcp/) | Add Exa's hosted MCP server so your agent can run neural web search and fetch full page contents with web_search_exa and web_fetch_exa. |
| [Fetch MCP Server](templates/mcp/fetch-mcp/) | Let your agent download a web page and read it as clean markdown, in chunks, using the reference fetch server from the MCP project. |
| [Figma MCP Server](templates/mcp/figma-mcp/) | Read Figma frames, variables and components through Figma's remote MCP server so generated UI code follows the real design. |
| [Filesystem MCP Server](templates/mcp/filesystem-mcp/) | Give an agent scoped file access through the reference Filesystem MCP server, limited to the folders you list and optionally read-only. |
| [Firebase MCP Server](templates/mcp/firebase-mcp/) | Run the Firebase CLI's built-in MCP server so your agent can work with Firestore, Auth, rules and hosting in your Firebase project. |
| [Firecrawl MCP Server](templates/mcp/firecrawl-mcp/) | Scrape pages, crawl whole sites and pull structured data into your agent as clean markdown with the official Firecrawl MCP server. |
| [Git MCP Server](templates/mcp/git-mcp/) | Give your agent structured git tools for status, diffs, logs, branches and commits through the reference mcp-server-git, fenced to one repository. |
| [GitHub MCP Server](templates/mcp/github-mcp/) | Connect your coding agent to GitHub's official MCP server to read issues, pull requests, code and Actions runs without leaving the chat. |
| [GitLab MCP Server](templates/mcp/gitlab-mcp/) | Work with GitLab issues, merge requests and pipelines from your agent through the MCP server built into GitLab itself. |
| [Google Cloud MCP Server](templates/mcp/gcloud-mcp/) | Let the agent run gcloud commands through Google's MCP server (npx), under your own account or a limited service account. |
| [Grafana MCP Server](templates/mcp/grafana-mcp/) | Let your agent search Grafana dashboards, query Prometheus and Loki and read alert rules through Grafana's own MCP server, in read-only mode. |
| [Honeycomb MCP Server](templates/mcp/honeycomb-mcp/) | Query Honeycomb traces, datasets and SLOs from your agent through Honeycomb's hosted MCP server, signed in with OAuth. |
| [Hugging Face MCP Server](templates/mcp/huggingface-mcp/) | Search Hugging Face models, datasets, Spaces and papers from your agent through the official hosted MCP server and a read token. |
| [Intercom MCP Server](templates/mcp/intercom-mcp/) | Let your coding agent search Intercom conversations, contacts and Help Center articles through Intercom's hosted MCP server with OAuth sign-in. |
| [Linear MCP Server](templates/mcp/linear-mcp/) | Connect your agent to Linear's hosted MCP server to find, read, create and update issues and projects without leaving the terminal. |
| [Memory MCP Server](templates/mcp/memory-mcp/) | Give your agent a persistent knowledge graph of people, projects and decisions that survives between sessions, stored in one local JSONL file. |
| [monday.com MCP Server](templates/mcp/monday-mcp/) | Run monday.com's official MCP server locally in read-only mode so your agent can inspect boards and items without changing anything. |
| [MongoDB MCP Server](templates/mcp/mongodb-mcp/) | Query MongoDB and Atlas clusters, inspect collections and indexes from your agent with the official server, started in read-only mode. |
| [Neon MCP Server](templates/mcp/neon-mcp/) | Manage Neon Postgres projects and branches from your agent, and test schema changes on a temporary branch before they touch your main data. |
| [Netlify MCP Server](templates/mcp/netlify-mcp/) | Netlify's official MCP server, started with npx, lets your agent create, configure and deploy sites and manage environment variables. |
| [Notion MCP Server](templates/mcp/notion-mcp/) | Connect your agent to Notion's hosted MCP server to search workspace pages, read databases and write notes, specs and tasks back. |
| [PagerDuty MCP Server](templates/mcp/pagerduty-mcp/) | Read PagerDuty incidents, services, schedules and on-call rotations from your coding agent using PagerDuty's local MCP server in read-only mode. |
| [PayPal MCP Server](templates/mcp/paypal-mcp/) | Run PayPal's official MCP server locally so your agent can create orders and invoices, manage subscriptions and list transactions in sandbox. |
| [Perplexity MCP Server](templates/mcp/perplexity-mcp/) | Add Perplexity's official MCP server so your coding agent can run live web searches and get cited research answers while it works. |
| [Pinecone MCP Server](templates/mcp/pinecone-mcp/) | Let your coding agent manage Pinecone indexes and run vector searches and upserts through Pinecone's own MCP server, started with npx. |
| [PlanetScale MCP Server](templates/mcp/planetscale-mcp/) | Inspect PlanetScale databases and branches from your agent, run read queries, check schema and review performance insights over OAuth. |
| [Playwright MCP Server](templates/mcp/playwright-mcp/) | Let your coding agent drive a real browser through Microsoft's Playwright MCP server to click through pages, fill forms and check what renders. |
| [Postman MCP Server](templates/mcp/postman-mcp/) | Connect your coding agent to Postman's hosted MCP server to read and update collections, environments and API definitions from the chat. |
| [Prisma MCP Server](templates/mcp/prisma-mcp/) | Connect your agent to Prisma's hosted MCP server to manage Prisma Postgres databases, run SQL, restore backups and search the Prisma docs. |
| [Qdrant MCP Server](templates/mcp/qdrant-mcp/) | Give your agent a semantic memory in Qdrant: store notes and code snippets, then find them again by meaning with the official mcp-server-qdrant. |
| [Redis MCP Server](templates/mcp/redis-mcp/) | Let your agent read and write Redis strings, hashes, streams and vector indexes through the official Redis MCP server, run with uvx. |
| [Resend MCP Server](templates/mcp/resend-mcp/) | Run Resend's official MCP server so your agent can send test emails, manage domains, templates and contacts and check delivery from the chat. |
| [Sentry MCP Server](templates/mcp/sentry-mcp/) | Connect your agent to Sentry's hosted MCP server to read issues, stack traces and events for a project and fix the bug behind an alert. |
| [Sequential Thinking MCP Server](templates/mcp/sequential-thinking-mcp/) | Add a step-by-step reasoning tool to your agent so it can plan hard problems, revise earlier thoughts and branch, using the reference MCP server. |
| [Square MCP Server](templates/mcp/square-mcp/) | Use Square's hosted MCP server to let your agent work with payments, catalog, orders and customers through the Square API after an OAuth sign-in. |
| [Stripe MCP Server](templates/mcp/stripe-mcp/) | Connect your coding agent to Stripe's hosted MCP server to look up customers, payments, subscriptions and invoices while you build billing code. |
| [Supabase MCP Server](templates/mcp/supabase-mcp/) | Connect your agent to Supabase's hosted MCP server to inspect tables, run read-only SQL and manage a project from your editor. |
| [Tavily MCP Server](templates/mcp/tavily-mcp/) | Run Tavily's official MCP server through npx so your agent can search the web and extract page content with tavily-search and tavily-extract. |
| [Terraform MCP Server](templates/mcp/terraform-mcp/) | Give your agent HashiCorp's Terraform MCP server to look up current provider and module docs from the registry while it writes infrastructure code. |
| [Time MCP Server](templates/mcp/time-mcp/) | Give your agent the real current time and reliable time zone conversion, so it stops guessing dates, deadlines and meeting hours. |
| [Upstash MCP Server](templates/mcp/upstash-mcp/) | Use Upstash's hosted MCP server to manage Redis databases, QStash and Workflow from your coding agent with OAuth sign-in and no local install. |
| [Vercel MCP Server](templates/mcp/vercel-mcp/) | Connect your agent to Vercel's official remote MCP server to inspect projects, deployments and build logs and search the Vercel docs. |

### Hooks (40)

| Template | What it does |
|---|---|
| [Block Chmod 777](templates/hooks/block-chmod-777/) | A Claude Code hook that refuses chmod calls giving everyone write access, such as 777, 666 or a+w, and suggests tighter modes like 755 and 644. |
| [Block Curl Pipe Shell](templates/hooks/block-curl-pipe-shell/) | A Claude Code hook that refuses commands which pipe curl or wget output into sh or bash, or run a downloaded script through a command substitution. |
| [Block Dangerous Commands](templates/hooks/block-dangerous-commands/) | A Claude Code hook that refuses rm -rf on the root or home folder, force pushes to main or master, and DROP DATABASE before the shell runs. |
| [Block Database Drops](templates/hooks/block-database-drops/) | A Claude Code hook that stops shell commands containing DROP DATABASE, DROP TABLE, DROP SCHEMA or TRUNCATE, so SQL cleanup never runs unreviewed. |
| [Block Env in Git Add](templates/hooks/block-env-in-git-add/) | A Claude Code hook that stops git add from staging .env files, private keys and credential files, and checks wildcard adds against .gitignore. |
| [Block Force Push](templates/hooks/block-force-push/) | A Claude Code hook that stops git push --force, -f and --force-with-lease aimed at main or master, including bare pushes made from those branches. |
| [Block Generated File Edits](templates/hooks/block-generated-file-edits/) | A Claude Code hook that refuses edits to files whose first lines say they are generated, so the agent changes the source and not the output. |
| [Block Git No Verify](templates/hooks/block-git-no-verify/) | A Claude Code hook that blocks git commit and git push calls using --no-verify, so pre-commit and pre-push checks always run. |
| [Block Git Reset Hard](templates/hooks/block-git-reset-hard/) | A Claude Code hook that blocks git reset --hard and forced git clean in the shell, so uncommitted work is never wiped without you running it. |
| [Block Global Installs](templates/hooks/block-global-installs/) | A Claude Code hook that refuses global npm, pnpm, yarn, pip and gem installs so tools are added to the project and not to your whole machine. |
| [Block Large Writes](templates/hooks/block-large-writes/) | A Claude Code hook that rejects Write calls over a size limit, which catches runaway generated files before they land in your repository. |
| [Block npm Publish](templates/hooks/block-npm-publish/) | A Claude Code hook that blocks npm publish, pnpm publish and yarn publish in the shell, so shipping a package always stays a human decision. |
| [Block Secrets in Edits](templates/hooks/block-secrets-in-edits/) | A Claude Code hook that stops edits and new files containing API keys, tokens or private keys before they reach your repository. |
| [Block Secrets in Prompts](templates/hooks/block-secrets-in-prompts/) | A Claude Code hook that blocks a prompt before it is sent when it holds an AWS, GitHub, Anthropic, OpenAI, Stripe or Slack key, or a private key block. |
| [Block Sudo Commands](templates/hooks/block-sudo-commands/) | A Claude Code hook that blocks any Bash command starting with sudo or doas and tells the agent to hand the exact command to you for a manual run. |
| [Block Vendor Edits](templates/hooks/block-vendor-edits/) | A Claude Code hook that denies edits to files inside node_modules, vendor and dist folders, so fixes go to your own source and not copies. |
| [Check Node Version](templates/hooks/check-node-version/) | A Claude Code hook that compares the running Node version with .nvmrc or package.json engines at session start and warns the agent on a mismatch. |
| [Detect Merge Markers](templates/hooks/detect-merge-markers/) | A Claude Code hook that blocks an edit when Git conflict markers are still sitting in the file the agent just wrote or changed. |
| [Enforce Package Manager](templates/hooks/enforce-package-manager/) | A Claude Code hook that blocks npm and npx when the project has a pnpm, Yarn or Bun lockfile, and tells the agent which tool to use instead. |
| [Ensure Final Newline](templates/hooks/ensure-final-newline/) | A Claude Code hook that makes sure each edited text file ends with exactly one newline, matching the line endings the file already uses. |
| [Format After Edit](templates/hooks/format-after-edit/) | A Claude Code hook that runs Prettier on each file the agent edits, and quietly does nothing when the project has no Prettier installed. |
| [Inject Current Date](templates/hooks/inject-current-date/) | A Claude Code hook that tells the agent today's date, weekday and time zone on each prompt, so date math and changelog entries come out right. |
| [Inject Git Branch](templates/hooks/inject-git-branch/) | A Claude Code hook that adds the current Git branch and a count of uncommitted files to every prompt you send, so the agent always knows where it is. |
| [Log Bash Commands](templates/hooks/log-bash-commands/) | A Claude Code hook that appends every shell command the agent runs to .claude/command-log.txt with a timestamp, for review afterward. |
| [Log Session End](templates/hooks/log-session-end/) | A Claude Code hook that appends a timestamped line with the working folder and session id to a local log file each time a turn ends. |
| [Notification Bell](templates/hooks/notification-bell/) | Beeps in your terminal whenever Claude Code asks for permission or waits on you, so an agent that is blocked never sits unnoticed. |
| [Protect CI Workflows](templates/hooks/protect-ci-workflows/) | A Claude Code hook that pauses for your approval before the agent edits GitHub Actions workflows, GitLab CI, Jenkinsfile or other pipeline files. |
| [Protect Env Files](templates/hooks/protect-env-files/) | A Claude Code hook that blocks the agent from reading or writing .env files and private keys such as .pem and id_rsa, while allowing .env.example. |
| [Protect Lockfiles](templates/hooks/protect-lockfiles/) | A Claude Code hook that blocks hand edits to package-lock.json, yarn.lock, Cargo.lock, poetry.lock and other lockfiles the package manager owns. |
| [Remind Run Tests](templates/hooks/remind-run-tests/) | A Claude Code hook that holds back the end of a turn once, asking the agent to run the test suite when source files changed since the last commit. |
| [Session Git Context](templates/hooks/session-git-context/) | A Claude Code hook that gives each new session the branch, the five latest commits and the changed files as starting context, with no prompt needed. |
| [Stop Bell](templates/hooks/stop-bell/) | Sounds a bell in your terminal at the end of every Claude turn, which lets you look away while a long task runs in the background. |
| [Trim Trailing Whitespace](templates/hooks/trim-trailing-whitespace/) | A Claude Code hook that removes spaces and tabs at the end of lines in each file the agent edits, keeping diffs free of invisible changes. |
| [Validate JSON After Edit](templates/hooks/validate-json-after-edit/) | A Claude Code hook that parses every edited .json file and sends the parser error back to the agent when the syntax is broken. |
| [Warn Console Log](templates/hooks/warn-console-log/) | A Claude Code hook that warns the agent when an edit adds console.log to a JavaScript, TypeScript, Vue or Svelte file, so debug output is not left behind. |
| [Warn Debugger Statements](templates/hooks/warn-debugger-statements/) | A Claude Code hook that flags debugger, breakpoint() and pdb calls the agent leaves behind in JavaScript, Python and Ruby files after an edit. |
| [Warn Long Files](templates/hooks/warn-long-files/) | A Claude Code hook that flags any edited source file longer than 500 lines, so the agent splits the code before the file gets unwieldy. |
| [Warn New Todos](templates/hooks/warn-new-todos/) | A Claude Code hook that reports to-do and fix-me marker comments the agent just added, so unfinished work gets finished or called out. |
| [Warn Skipped Tests](templates/hooks/warn-skipped-tests/) | Claude Code hook that flags an edit to a JavaScript or TypeScript test file when it adds .skip, .only, xit, xdescribe, fit or fdescribe. |
| [Warn Uncommitted Changes](templates/hooks/warn-uncommitted-changes/) | A Claude Code hook that shows which files are still uncommitted whenever the agent finishes a turn, so finished work is not left unsaved. |

### Project rules (50)

| Template | What it does |
|---|---|
| [.NET Blazor Rules](templates/rules/dotnet-blazor-rules/) | Project rules for Blazor apps: small components, scoped state, injected services, EditForm validation and bUnit component tests. |
| [Angular Rules](templates/rules/angular-rules/) | Project rules for Angular: standalone components, signals, typed reactive forms, safe RxJS subscriptions and TestBed component tests. |
| [ASP.NET Core Web API Rules](templates/rules/dotnet-webapi-rules/) | Project rules for ASP.NET Core APIs, minimal APIs or controllers: DTOs, async all the way, ProblemDetails errors and EF Core discipline. |
| [Astro Rules](templates/rules/astro-rules/) | Project rules for Astro sites: zero-JS by default, islands with the right client directive, typed content collections and optimized images. |
| [AWS CDK Rules](templates/rules/aws-cdk-rules/) | Project rules for AWS CDK in TypeScript: construct layers, stable naming, removal policies, assertion tests and a mandatory cdk diff review. |
| [Django Rules](templates/rules/django-rules/) | Project rules for Django: small focused apps, logic in models and services, efficient ORM queries, safe migrations and pytest-django tests. |
| [Docker Rules](templates/rules/docker-rules/) | Project rules for Dockerfiles and Compose: multi-stage builds, pinned base images, non-root users, layer caching and health checks. |
| [Electron Rules](templates/rules/electron-rules/) | Project rules for Electron apps: isolated renderers, a narrow preload API, validated IPC, safe packaging and signed auto-updates. |
| [Flask Rules](templates/rules/flask-rules/) | Project rules for Flask apps: application factory, blueprints, environment-based config, explicit extensions, JSON error handlers and pytest fixtures. |
| [Flutter Rules](templates/rules/flutter-rules/) | Project rules for Flutter apps: feature folders, one state solution, const widgets, ThemeData tokens and widget and unit tests. |
| [GitHub Actions Rules](templates/rules/github-actions-rules/) | Project rules for GitHub Actions workflows: pinned actions, minimal token permissions, caching, reusable workflows and safe secret handling. |
| [Go CLI Rules](templates/rules/go-cli-rules/) | Project rules for Go command line tools: cobra command layout, config precedence, wrapped errors, exit codes and table-driven tests. |
| [Go Service Rules](templates/rules/go-service-rules/) | Project rules for Go services: small interfaces, wrapped errors, context everywhere, table-driven tests and no hidden goroutines. |
| [GraphQL API Rules](templates/rules/graphql-api-rules/) | Project rules for GraphQL servers: consistent schema naming, deliberate nullability, dataloaders, typed errors and depth and cost limits. |
| [Java Maven Library Rules](templates/rules/java-maven-library-rules/) | Project rules for Java libraries built with Maven: a small public API, semantic versions, null contracts, Javadoc and a repeatable release. |
| [Jest Vitest Rules](templates/rules/jest-vitest-rules/) | Project rules for Jest and Vitest unit tests: clear names, arrange-act-assert, narrow mocks, deterministic time and meaningful coverage. |
| [Kotlin Android Rules](templates/rules/kotlin-android-rules/) | Project rules for Android in Kotlin: Jetpack Compose UI, ViewModel with StateFlow, Hilt injection, structured coroutines and tests. |
| [Kotlin Ktor Rules](templates/rules/kotlin-ktor-rules/) | Project rules for Ktor servers: routing extension functions, kotlinx serialization, auth plugins, structured coroutines and testApplication tests. |
| [Kubernetes Rules](templates/rules/kubernetes-rules/) | Project rules for Kubernetes manifests: standard labels, resource requests, probes, restricted security contexts, config handling and safe rollouts. |
| [Laravel Rules](templates/rules/laravel-rules/) | Project rules for Laravel apps: form request validation, Eloquent query hygiene, queued jobs, policies for authorization and Pest feature tests. |
| [LLM App Rules](templates/rules/llm-app-rules/) | Project rules for LLM applications: prompts stored as files, validated structured output, bounded retries, evals, redacted logs and cost caps. |
| [MongoDB Rules](templates/rules/mongodb-rules/) | Project rules for MongoDB: schema design around queries, deliberate indexes, schema validation, projections and no unbounded arrays. |
| [MySQL Rules](templates/rules/mysql-rules/) | Project rules for MySQL 8: InnoDB and utf8mb4 defaults, careful indexes, online migrations, short transactions and parameterized queries. |
| [NestJS Rules](templates/rules/nestjs-rules/) | Project rules for NestJS: feature modules, injectable providers, class-validator DTOs, guards, typed ConfigService and supertest e2e tests. |
| [Next.js App Router Rules](templates/rules/nextjs-app-router-rules/) | Project rules for a Next.js App Router codebase: server components first, explicit caching, typed data boundaries and no client-side waterfalls. |
| [Node Express Rules](templates/rules/node-express-rules/) | Project rules for Express services: routes, services and data layers, schema validation, central error middleware, structured logs and supertest. |
| [Nuxt Rules](templates/rules/nuxt-rules/) | Project rules for Nuxt 3: directory conventions, auto imports, useFetch data loading, Nitro server routes and per-route rendering modes. |
| [Playwright E2E Rules](templates/rules/playwright-e2e-rules/) | Project rules for Playwright suites: role-based locators, fixtures, test isolation, web-first assertions, traces and CI sharding. |
| [Postgres SQL Rules](templates/rules/postgres-sql-rules/) | Project rules for PostgreSQL SQL: naming, column types, constraints, indexes, reversible migrations and queries that stay safe and fast. |
| [Python CLI Rules](templates/rules/python-cli-rules/) | Project rules for Python command line tools: argparse or Typer, clear exit codes, pyproject packaging, stderr logging and pytest. |
| [Python Data Science Rules](templates/rules/python-data-science-rules/) | Project rules for Python data science repos: notebooks kept thin, logic in modules, fixed seeds, tidy pandas code and versioned data. |
| [Python FastAPI Rules](templates/rules/python-fastapi-rules/) | Project rules for FastAPI services: typed Pydantic models, dependency injection, async-safe database access and consistent error responses. |
| [PyTorch Rules](templates/rules/pytorch-rules/) | Project rules for PyTorch projects: config-driven training, deterministic seeding, device-agnostic code, safe checkpoints and strict evaluation. |
| [Rails Rules](templates/rules/rails-rules/) | Project rules for Rails apps: lean controllers, plain Ruby service objects, safe Active Record queries, reversible migrations and RSpec request specs. |
| [React Native Expo Rules](templates/rules/react-native-expo-rules/) | Project rules for Expo and React Native apps: Expo Router, typed navigation, safe storage, list performance and builds through EAS. |
| [React TypeScript Rules](templates/rules/react-typescript-rules/) | Project rules for React with TypeScript: typed props, hook discipline, feature-based layout, Testing Library tests and accessible markup. |
| [Remix Rules](templates/rules/remix-rules/) | Project rules for Remix: route loaders and actions, nested routes, error boundaries, validated forms and progressive enhancement. |
| [Rust Axum Rules](templates/rules/rust-axum-rules/) | Project rules for Axum web services: shared state, typed extractors, one IntoResponse error type, tower middleware and compile-checked sqlx queries. |
| [Rust CLI Rules](templates/rules/rust-cli-rules/) | Project rules for Rust command line tools: clap derive, thiserror and anyhow errors, exit codes, tracing logs and assert_cmd tests. |
| [Serverless Lambda Rules](templates/rules/serverless-lambda-rules/) | Project rules for AWS Lambda functions: thin handlers, cold start care, validated environment config, structured logs and idempotent processing. |
| [Spring Boot Rules](templates/rules/spring-boot-rules/) | Project rules for Spring Boot services: controller, service and repository layers, constructor injection, typed properties, validation and test slices. |
| [SvelteKit Rules](templates/rules/sveltekit-rules/) | Project rules for SvelteKit: load functions, form actions, Svelte 5 runes, server-only modules and clear client and server boundaries. |
| [SwiftUI iOS Rules](templates/rules/swiftui-ios-rules/) | Project rules for SwiftUI apps: @Observable models, NavigationStack routing, async/await with actors, previews and XCTest coverage. |
| [Symfony Rules](templates/rules/symfony-rules/) | Project rules for Symfony apps: autowired services, thin controllers, Doctrine repositories, Form types, Messenger handlers and PHPUnit tests. |
| [Tailwind CSS Rules](templates/rules/tailwind-css-rules/) | Project rules for Tailwind CSS: design tokens in theme config, class ordering, component extraction, dark mode and limited arbitrary values. |
| [Terraform Rules](templates/rules/terraform-rules/) | Project rules for Terraform: module layout, naming, remote state with locking, typed variables, tagging and a reviewed plan before every apply. |
| [Turborepo Monorepo Rules](templates/rules/turborepo-monorepo-rules/) | Project rules for Turborepo monorepos: clear package boundaries, cacheable task pipelines, shared configs and disciplined versioning. |
| [TypeScript Library Rules](templates/rules/typescript-library-rules/) | Project rules for publishing a TypeScript package: exports map, bundled types, semver discipline, tree-shaking and tests against the built output. |
| [TypeScript Node.js Rules](templates/rules/typescript-node-rules/) | Project rules for TypeScript services on Node.js: strict types, validated boundaries, structured logging and safe async error handling. |
| [Vue 3 Composition Rules](templates/rules/vue3-composition-rules/) | Project rules for Vue 3: script setup with TypeScript, composables, Pinia stores, typed props and emits, and Vitest component tests. |

## Contributing

New templates and fixes are welcome: see [CONTRIBUTING.md](CONTRIBUTING.md). To report a security problem, see [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).
