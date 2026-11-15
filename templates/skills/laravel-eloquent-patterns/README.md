# Laravel Eloquent Patterns

**Skill** · Backend and APIs · php, laravel

Writes Laravel model code the idiomatic way: typed relations, query scopes, form requests and eager loading. Use it when adding or reviewing Eloquent code.

## Install

```bash
npx workspacetemplates add laravel-eloquent-patterns
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/laravel-eloquent-patterns/SKILL.md](claude-code/.claude/skills/laravel-eloquent-patterns/SKILL.md) | `.claude/skills/laravel-eloquent-patterns/SKILL.md` |
| Codex | [codex/.agents/skills/laravel-eloquent-patterns/SKILL.md](codex/.agents/skills/laravel-eloquent-patterns/SKILL.md) | `.agents/skills/laravel-eloquent-patterns/SKILL.md` |
| Cursor | [cursor/.cursor/skills/laravel-eloquent-patterns/SKILL.md](cursor/.cursor/skills/laravel-eloquent-patterns/SKILL.md) | `.cursor/skills/laravel-eloquent-patterns/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/laravel-eloquent-patterns/SKILL.md](gemini-cli/.gemini/skills/laravel-eloquent-patterns/SKILL.md) | `.gemini/skills/laravel-eloquent-patterns/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/laravel-eloquent-patterns/SKILL.md](copilot/.github/skills/laravel-eloquent-patterns/SKILL.md) | `.github/skills/laravel-eloquent-patterns/SKILL.md` |

## What it does

Laravel makes it easy to put a query in a controller, a validation rule in a closure and an N+1 loop in a Blade view. This skill steers the agent toward the structure the framework already gives you, so models stay small and controllers stay thin.

It checks relations for eager loading, moves repeated where clauses into scopes, and puts input rules in form requests. Raw SQL and mass-assignment shortcuts are flagged instead of copied.

## Use it when

- You are adding a new model with relations and a controller
- A page runs dozens of queries and you suspect lazy loading
- The same where clause appears in three controllers
- A controller method validates input inline and has grown past thirty lines

## What it can access

- Reads models, migrations, controllers and views
- Edits PHP files in your project
- Runs php artisan test

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/laravel-eloquent-patterns/
