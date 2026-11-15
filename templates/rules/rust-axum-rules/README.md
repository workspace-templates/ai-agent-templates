# Rust Axum Rules

**Project rules** · Backend and APIs · rust

Project rules for Axum web services: shared state, typed extractors, one IntoResponse error type, tower middleware and compile-checked sqlx queries.

## Install

```bash
npx workspacetemplates add rust-axum-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/rust-axum-rules.mdc](cursor/.cursor/rules/rust-axum-rules.mdc) | `.cursor/rules/rust-axum-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Axum rewards a clean separation between extractors, handlers and state, but the compiler errors from a mismatched handler can push an agent toward awkward workarounds. These rules describe the shape that compiles cleanly and stays readable.

They set up one error type for the whole service and a clear rule for where sqlx queries live, so failures turn into correct HTTP responses instead of panics.

## Use it when

- You are adding routes to an Axum service
- Handlers use unwrap and crash on bad input
- Shared state is passed in inconsistent ways
- You need database queries checked at build time

## What it can access

- Instructions only; commands are run by the agent that follows them

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rust-axum-rules/
