# Flask Rules

**Project rules** · Backend and APIs · python, flask

Project rules for Flask apps: application factory, blueprints, environment-based config, explicit extensions, JSON error handlers and pytest fixtures.

## Install

```bash
npx workspacetemplates add flask-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/flask-rules.mdc](cursor/.cursor/rules/flask-rules.mdc) | `.cursor/rules/flask-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Flask is small enough that every project invents its own structure. These rules fix one structure so new routes, extensions and tests land where a teammate would look first.

They lean on the application factory pattern, which removes most of the import cycles and test setup headaches that Flask projects collect over time.

## Use it when

- You start a Flask service from scratch
- Imports between modules have become circular
- Tests share state or need a running server
- Error responses differ from route to route

## What it can access

- Instructions only; nothing is read or executed by the file itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/flask-rules/
