# Add Rate Limit

**Command** · Backend and APIs

Adds rate limiting to a named route group using your current stack, with sane limits, proper 429 replies and a test.

## Install

```bash
npx workspacetemplates add add-rate-limit
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-rate-limit.md](claude-code/.claude/commands/add-rate-limit.md) | `.claude/commands/add-rate-limit.md` |
| Codex | [codex/home/.codex/prompts/add-rate-limit.md](codex/home/.codex/prompts/add-rate-limit.md) | `~/.codex/prompts/add-rate-limit.md` |
| Cursor | [cursor/.cursor/skills/add-rate-limit/SKILL.md](cursor/.cursor/skills/add-rate-limit/SKILL.md) | `.cursor/skills/add-rate-limit/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-rate-limit.toml](gemini-cli/.gemini/commands/add-rate-limit.toml) | `.gemini/commands/add-rate-limit.toml` |
| GitHub Copilot | [copilot/.github/skills/add-rate-limit/SKILL.md](copilot/.github/skills/add-rate-limit/SKILL.md) | `.github/skills/add-rate-limit/SKILL.md` |

## What it does

Login, signup and search routes invite abuse long before anything else does. This command adds limits to the route group you name, using the middleware or gateway feature your stack already has.

It picks the limit key with care, since keying only on IP punishes shared offices and keying only on user misses anonymous abuse. A test proves the limit actually trips.

## Use it when

- Login or password reset can be hammered
- A public search or export route is costing too much
- You see bursts from one client in the logs
- A security review asks for throttling on auth routes

## What it can access

- Reads server setup, middleware and dependencies
- Edits middleware and test files, then runs tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-rate-limit/
