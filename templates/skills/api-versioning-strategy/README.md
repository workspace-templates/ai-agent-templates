# API Versioning Strategy

**Skill** · Backend and APIs

Plans and introduces a new API version without breaking existing clients, with deprecation headers, usage tracking and a dated sunset schedule.

## Install

```bash
npx workspacetemplates add api-versioning-strategy
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/api-versioning-strategy/SKILL.md](claude-code/.claude/skills/api-versioning-strategy/SKILL.md) | `.claude/skills/api-versioning-strategy/SKILL.md` |
| Codex | [codex/.agents/skills/api-versioning-strategy/SKILL.md](codex/.agents/skills/api-versioning-strategy/SKILL.md) | `.agents/skills/api-versioning-strategy/SKILL.md` |
| Cursor | [cursor/.cursor/skills/api-versioning-strategy/SKILL.md](cursor/.cursor/skills/api-versioning-strategy/SKILL.md) | `.cursor/skills/api-versioning-strategy/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/api-versioning-strategy/SKILL.md](gemini-cli/.gemini/skills/api-versioning-strategy/SKILL.md) | `.gemini/skills/api-versioning-strategy/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/api-versioning-strategy/SKILL.md](copilot/.github/skills/api-versioning-strategy/SKILL.md) | `.github/skills/api-versioning-strategy/SKILL.md` |

## What it does

Versioning goes wrong in two ways: a new version for every small change, or a breaking change shipped quietly under the old one. This skill has the agent first decide whether a change is breaking at all, since additive changes need no new version.

When a break is unavoidable it sets up the version selector, keeps the old behavior running, adds Deprecation and Sunset headers, and measures who still calls the old version so the shutdown date is based on traffic.

## Use it when

- You must rename or remove a response field that clients use
- Partners depend on the current contract and cannot update quickly
- You want to retire an old endpoint with a clear schedule
- Your team keeps arguing whether a change needs a v2

## What it can access

- Reads source files and existing API documentation
- Edits routing, adapters and docs when approved
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-versioning-strategy/
