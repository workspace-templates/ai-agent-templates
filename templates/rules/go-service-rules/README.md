# Go Service Rules

**Project rules** · Backend and APIs · go

Project rules for Go services: small interfaces, wrapped errors, context everywhere, table-driven tests and no hidden goroutines.

## Install

```bash
npx workspacetemplates add go-service-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/go-service-rules.mdc](cursor/.cursor/rules/go-service-rules.mdc) | `.cursor/rules/go-service-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Go rewards plain code, and agents tend to write it like Java: big interfaces, global state and swallowed errors. These rules pull generated code back to the idioms that Go teams review for.

They cover project layout, error handling, concurrency and testing, and set the commands that must pass before a change is done.

## Use it when

- You start a new Go service or API
- Agent code ignores errors or invents deep package trees
- Goroutines leak or requests never time out
- You want one test and logging style across the team

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/go-service-rules/
