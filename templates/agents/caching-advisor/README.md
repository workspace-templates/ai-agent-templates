# Caching Advisor

**Subagent** · Backend and APIs

Read-only subagent that finds reads worth caching and existing caches that are unsafe, with key design and invalidation advice for each.

## Install

```bash
npx workspacetemplates add caching-advisor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/caching-advisor.md](claude-code/.claude/agents/caching-advisor.md) | `.claude/agents/caching-advisor.md` |
| Codex | [codex/.codex/agents/caching-advisor.toml](codex/.codex/agents/caching-advisor.toml) | `.codex/agents/caching-advisor.toml` |
| Cursor | [cursor/.cursor/agents/caching-advisor.md](cursor/.cursor/agents/caching-advisor.md) | `.cursor/agents/caching-advisor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/caching-advisor.md](gemini-cli/.gemini/agents/caching-advisor.md) | `.gemini/agents/caching-advisor.md` |
| GitHub Copilot | [copilot/.github/agents/caching-advisor.agent.md](copilot/.github/agents/caching-advisor.agent.md) | `.github/agents/caching-advisor.agent.md` |

## What it does

Caching is easy to add and hard to get right. A cache without a clear invalidation path serves stale data, and a key missing the tenant or locale leaks one user's response to another. This subagent looks at both sides: where a cache would pay off, and where one already hurts.

Each recommendation includes the key, the time to live, what invalidates it and what happens on a cold start or a stampede. It never writes code, so you keep the decision.

## Use it when

- The database or an upstream API is the bottleneck on read-heavy pages
- Users sometimes see stale or somebody else's data
- You are about to add Redis or a CDN rule and want a plan first
- Cache hit rate is poor and you do not know why

## What it can access

- Reads source, cache configuration and HTTP header settings
- Edits nothing and runs no commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/caching-advisor/
