# Rate Limiting Implementation

**Skill** · Backend and APIs

Adds token bucket rate limits per API key or user, with a shared store, correct 429 responses and RateLimit headers, and tests for the edge cases.

## Install

```bash
npx workspacetemplates add rate-limiting-implementation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/rate-limiting-implementation/SKILL.md](claude-code/.claude/skills/rate-limiting-implementation/SKILL.md) | `.claude/skills/rate-limiting-implementation/SKILL.md` |
| Codex | [codex/.agents/skills/rate-limiting-implementation/SKILL.md](codex/.agents/skills/rate-limiting-implementation/SKILL.md) | `.agents/skills/rate-limiting-implementation/SKILL.md` |
| Cursor | [cursor/.cursor/skills/rate-limiting-implementation/SKILL.md](cursor/.cursor/skills/rate-limiting-implementation/SKILL.md) | `.cursor/skills/rate-limiting-implementation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/rate-limiting-implementation/SKILL.md](gemini-cli/.gemini/skills/rate-limiting-implementation/SKILL.md) | `.gemini/skills/rate-limiting-implementation/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/rate-limiting-implementation/SKILL.md](copilot/.github/skills/rate-limiting-implementation/SKILL.md) | `.github/skills/rate-limiting-implementation/SKILL.md` |

## What it does

A limiter kept in one process memory stops nothing once you run two instances, and one that keys on IP address punishes whole offices behind a single address. This skill has the agent decide the key, the budget and the store before writing code.

It implements a token bucket with an atomic update, returns the standard headers so well-behaved clients slow down, and tests the burst, refill and failure paths, including what happens when the store is down.

## Use it when

- Your API has no limits and one client can saturate it
- Login or password reset endpoints need brute-force protection
- You run several instances and per-process counters are not enough
- Clients ask how many requests they have left

## What it can access

- Reads source files and access log samples you point it to
- Edits middleware, config and tests when approved
- Runs your test command and may start a local Redis if you allow it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rate-limiting-implementation/
