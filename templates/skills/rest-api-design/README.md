# REST API Design

**Skill** · Backend and APIs

Designs or reviews HTTP APIs: resource names, methods, status codes, pagination, error format and versioning, with a short spec before any code.

## Install

```bash
npx workspacetemplates add rest-api-design
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/rest-api-design/SKILL.md](claude-code/.claude/skills/rest-api-design/SKILL.md) | `.claude/skills/rest-api-design/SKILL.md` |
| Codex | [codex/.agents/skills/rest-api-design/SKILL.md](codex/.agents/skills/rest-api-design/SKILL.md) | `.agents/skills/rest-api-design/SKILL.md` |
| Cursor | [cursor/.cursor/skills/rest-api-design/SKILL.md](cursor/.cursor/skills/rest-api-design/SKILL.md) | `.cursor/skills/rest-api-design/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/rest-api-design/SKILL.md](gemini-cli/.gemini/skills/rest-api-design/SKILL.md) | `.gemini/skills/rest-api-design/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/rest-api-design/SKILL.md](copilot/.github/skills/rest-api-design/SKILL.md) | `.github/skills/rest-api-design/SKILL.md` |

## What it does

An API outlives the code behind it, so mistakes in names, status codes and error shapes stay for years. This skill makes the agent settle the contract first, in a few lines you can read, and only then write handlers.

It also reviews an existing API against the same checklist and lists the changes that would break clients so they can be planned instead of discovered.

## Use it when

- Adding a new endpoint or a whole new resource
- Reviewing a pull request that changes responses
- Clients complain about inconsistent errors or paging
- Planning a v2 and deciding what must not break

## What it can access

- Reads files in your project
- Writes spec files and handlers when you approve the contract

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/rest-api-design/
