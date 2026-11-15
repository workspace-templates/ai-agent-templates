# Rust CLI Rules

**Project rules** · Workflow · rust

Project rules for Rust command line tools: clap derive, thiserror and anyhow errors, exit codes, tracing logs and assert_cmd tests.

## Install

```bash
npx workspacetemplates add rust-cli-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/rust-cli-rules.mdc](cursor/.cursor/rules/rust-cli-rules.mdc) | `.cursor/rules/rust-cli-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules shape a Rust command line tool into a small binary over a testable library. Parsing, domain logic and error reporting each get a clear home.

They help an agent avoid common slips such as panicking on bad input, printing diagnostics to stdout or burying logic in main.

## Use it when

- You start a Rust command line tool
- The agent uses unwrap on user input
- Logs and results share stdout
- You need integration tests for the compiled binary

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rust-cli-rules/
