# Rails Rules

**Project rules** · Backend and APIs · ruby, rails

Project rules for Rails apps: lean controllers, plain Ruby service objects, safe Active Record queries, reversible migrations and RSpec request specs.

## Install

```bash
npx workspacetemplates add rails-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/rails-rules.mdc](cursor/.cursor/rules/rails-rules.mdc) | `.cursor/rules/rails-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Rails conventions are strong, but an agent can still write business logic in callbacks or loop over associations one record at a time. These rules keep the work in the right layer.

They also treat the database as a real boundary: constraints, indexes and migrations get the same care as application code.

## Use it when

- You are extending a mature Rails codebase
- Models are heavy with callbacks that trigger side effects
- Index pages issue a query per row
- You want request specs rather than controller specs

## What it can access

- Instructions only; it never executes on its own

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rails-rules/
