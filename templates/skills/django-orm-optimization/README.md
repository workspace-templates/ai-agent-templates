# Django ORM Optimization

**Skill** · Backend and APIs · python, django

Finds slow Django queries and N+1 patterns, then fixes them with select_related, prefetch_related, only and indexes, with query counts as proof.

## Install

```bash
npx workspacetemplates add django-orm-optimization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/django-orm-optimization/SKILL.md](claude-code/.claude/skills/django-orm-optimization/SKILL.md) | `.claude/skills/django-orm-optimization/SKILL.md` |
| Codex | [codex/.agents/skills/django-orm-optimization/SKILL.md](codex/.agents/skills/django-orm-optimization/SKILL.md) | `.agents/skills/django-orm-optimization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/django-orm-optimization/SKILL.md](cursor/.cursor/skills/django-orm-optimization/SKILL.md) | `.cursor/skills/django-orm-optimization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/django-orm-optimization/SKILL.md](gemini-cli/.gemini/skills/django-orm-optimization/SKILL.md) | `.gemini/skills/django-orm-optimization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/django-orm-optimization/SKILL.md](copilot/.github/skills/django-orm-optimization/SKILL.md) | `.github/skills/django-orm-optimization/SKILL.md` |

## What it does

Django makes it easy to loop over a queryset and touch a related object on every row, which silently runs one query per row. This skill has the agent measure the real number of queries per view before editing anything.

It then applies the narrowest fix, whether that is a join, a prefetch, fewer columns or a missing index, and adds an assertion on the query count so the problem cannot come back without a failing test.

## Use it when

- A Django view or admin page is slow with real data
- django-debug-toolbar shows hundreds of duplicated queries
- A serializer or template touches related objects in a loop
- You need to decide which index a query actually needs

## What it can access

- Reads models, views, serializers and migrations
- Edits querysets and adds tests and an index migration when approved
- Runs your Django tests against the local test database

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/django-orm-optimization/
