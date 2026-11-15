# Go CLI Rules

**Project rules** · Workflow · go

Project rules for Go command line tools: cobra command layout, config precedence, wrapped errors, exit codes and table-driven tests.

## Install

```bash
npx workspacetemplates add go-cli-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/go-cli-rules.mdc](cursor/.cursor/rules/go-cli-rules.mdc) | `.cursor/rules/go-cli-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules describe a Go command line tool with commands kept apart from the logic they call. An agent following them produces packages that are small, testable and easy to extend with new subcommands.

They also pin down configuration order, error wrapping and exit behavior, which are the details that make a tool pleasant in scripts.

## Use it when

- You start a Go command line tool
- Commands contain business logic and global variables
- Flags, env vars and config files override each other unpredictably
- You want table-driven tests for commands

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/go-cli-rules/
