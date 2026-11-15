# Add Caching

**Command** · Backend and APIs

Adds caching to a hot read path with clear keys, an expiry and invalidation on writes, after proving the path is hot.

## Install

```bash
npx workspacetemplates add add-caching
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-caching.md](claude-code/.claude/commands/add-caching.md) | `.claude/commands/add-caching.md` |
| Codex | [codex/home/.codex/prompts/add-caching.md](codex/home/.codex/prompts/add-caching.md) | `~/.codex/prompts/add-caching.md` |
| Cursor | [cursor/.cursor/skills/add-caching/SKILL.md](cursor/.cursor/skills/add-caching/SKILL.md) | `.cursor/skills/add-caching/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-caching.toml](gemini-cli/.gemini/commands/add-caching.toml) | `.gemini/commands/add-caching.toml` |
| GitHub Copilot | [copilot/.github/skills/add-caching/SKILL.md](copilot/.github/skills/add-caching/SKILL.md) | `.github/skills/add-caching/SKILL.md` |

## What it does

A cache is only a good idea when you know what makes it stale. This command asks where the read is hot, picks a key that includes everything the result depends on, and ties invalidation to the writes that change the data.

It uses the cache layer already in the project, such as Redis, an in-process map or a CDN header, and avoids caching anything that is per-user unless the user id is in the key.

## Use it when

- A read endpoint or query dominates your load
- The same expensive lookup runs on every request
- You want a cache but fear serving stale or wrong-user data
- You need to cut third-party API calls

## What it can access

- Reads the code path and its callers
- Edits source and test files, then runs the tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-caching/
