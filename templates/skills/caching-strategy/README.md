# Caching Strategy

**Skill** · Backend and APIs · redis

Decides what is worth caching, designs keys, TTLs and invalidation, and proves the change with hit rate and latency numbers before and after.

## Install

```bash
npx workspacetemplates add caching-strategy
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/caching-strategy/SKILL.md](claude-code/.claude/skills/caching-strategy/SKILL.md) | `.claude/skills/caching-strategy/SKILL.md` |
| Codex | [codex/.agents/skills/caching-strategy/SKILL.md](codex/.agents/skills/caching-strategy/SKILL.md) | `.agents/skills/caching-strategy/SKILL.md` |
| Cursor | [cursor/.cursor/skills/caching-strategy/SKILL.md](cursor/.cursor/skills/caching-strategy/SKILL.md) | `.cursor/skills/caching-strategy/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/caching-strategy/SKILL.md](gemini-cli/.gemini/skills/caching-strategy/SKILL.md) | `.gemini/skills/caching-strategy/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/caching-strategy/SKILL.md](copilot/.github/skills/caching-strategy/SKILL.md) | `.github/skills/caching-strategy/SKILL.md` |

## What it does

Caching adds a second source of truth that can be wrong. This skill has the agent justify each cache with a measurement: how slow the call is, how often the same answer is requested, and how stale an answer may be.

Then it designs the key, picks a TTL and an invalidation path, guards against stampedes, and reports the hit rate it actually achieved. If the numbers do not support a cache, it says so and leaves the code alone.

## Use it when

- An endpoint is slow and the data changes rarely
- The database is under load from repeated identical reads
- You are deciding between caching and fixing the query
- A cache already exists and nobody knows if it helps

## What it can access

- Reads source files and configuration
- Edits data access code and adds tests when approved
- Runs your load or test commands and may connect to a local Redis

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/caching-strategy/
