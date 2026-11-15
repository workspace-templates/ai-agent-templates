# Redis Data Structures

**Skill** · Databases · redis

Picks the right Redis structure, key naming and expiry for queues, counters, leaderboards, rate limits and sessions.

## Install

```bash
npx workspacetemplates add redis-data-structures
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/redis-data-structures/SKILL.md](claude-code/.claude/skills/redis-data-structures/SKILL.md) | `.claude/skills/redis-data-structures/SKILL.md` |
| Codex | [codex/.agents/skills/redis-data-structures/SKILL.md](codex/.agents/skills/redis-data-structures/SKILL.md) | `.agents/skills/redis-data-structures/SKILL.md` |
| Cursor | [cursor/.cursor/skills/redis-data-structures/SKILL.md](cursor/.cursor/skills/redis-data-structures/SKILL.md) | `.cursor/skills/redis-data-structures/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/redis-data-structures/SKILL.md](gemini-cli/.gemini/skills/redis-data-structures/SKILL.md) | `.gemini/skills/redis-data-structures/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/redis-data-structures/SKILL.md](copilot/.github/skills/redis-data-structures/SKILL.md) | `.github/skills/redis-data-structures/SKILL.md` |

## What it does

Redis does well when the structure matches the job, and badly when everything is a string holding JSON. This skill maps each use case to the proper type and adds the expiry and memory care that keep an instance healthy.

It includes safe patterns for atomic updates, so two clients cannot corrupt a counter or double-process a job.

## Use it when

- You are adding a cache, queue or rate limiter backed by Redis
- A leaderboard or counter is slow or inconsistent
- Redis memory keeps growing
- Keys are named inconsistently across services

## What it can access

- Reads and edits code in your project
- Does not connect to a Redis server unless you run its suggested commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/redis-data-structures/
