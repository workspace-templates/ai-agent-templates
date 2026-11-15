# Kotlin Ktor Rules

**Project rules** · Backend and APIs · kotlin

Project rules for Ktor servers: routing extension functions, kotlinx serialization, auth plugins, structured coroutines and testApplication tests.

## Install

```bash
npx workspacetemplates add kotlin-ktor-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/kotlin-ktor-rules.mdc](cursor/.cursor/rules/kotlin-ktor-rules.mdc) | `.cursor/rules/kotlin-ktor-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Ktor gives you a toolkit, not a layout, so two agents will build two different servers. These rules choose a layout built from small routing extensions and installable plugins.

They also keep coroutine use safe on the server, where a blocking call or leaked job quietly reduces throughput for every request.

## Use it when

- You are building a new Ktor service
- Routing code sits in one giant Application module
- Blocking database calls run on the request dispatcher
- You want tests that do not bind a real port

## What it can access

- Instructions only; it does not run commands itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/kotlin-ktor-rules/
