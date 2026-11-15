# Django Rules

**Project rules** · Backend and APIs · python, django

Project rules for Django: small focused apps, logic in models and services, efficient ORM queries, safe migrations and pytest-django tests.

## Install

```bash
npx workspacetemplates add django-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/django-rules.mdc](cursor/.cursor/rules/django-rules.mdc) | `.cursor/rules/django-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

Django gives you a lot of structure, and agents still tend to pile logic into views or run queries inside loops. These rules point the work back to the places Django expects it.

They also keep migrations and settings safe, since those are the two areas where a careless edit hurts a live database or leaks a secret.

## Use it when

- You are adding features to an existing Django project
- Views are growing past a screen of code
- Pages slow down because of repeated queries
- You want migrations reviewed like normal code

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/django-rules/
