# Data Validation Pydantic

**Skill** · Data and AI · python

Validates API payloads, files and config in Python with Pydantic v2 models, strict types and error reports a user can understand.

## Install

```bash
npx workspacetemplates add data-validation-pydantic
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/data-validation-pydantic/SKILL.md](claude-code/.claude/skills/data-validation-pydantic/SKILL.md) | `.claude/skills/data-validation-pydantic/SKILL.md` |
| Codex | [codex/.agents/skills/data-validation-pydantic/SKILL.md](codex/.agents/skills/data-validation-pydantic/SKILL.md) | `.agents/skills/data-validation-pydantic/SKILL.md` |
| Cursor | [cursor/.cursor/skills/data-validation-pydantic/SKILL.md](cursor/.cursor/skills/data-validation-pydantic/SKILL.md) | `.cursor/skills/data-validation-pydantic/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/data-validation-pydantic/SKILL.md](gemini-cli/.gemini/skills/data-validation-pydantic/SKILL.md) | `.gemini/skills/data-validation-pydantic/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/data-validation-pydantic/SKILL.md](copilot/.github/skills/data-validation-pydantic/SKILL.md) | `.github/skills/data-validation-pydantic/SKILL.md` |

## What it does

Data from outside your program is untrusted until a model says otherwise. This skill has the agent put a Pydantic model at every boundary, so the rest of the code works with typed objects instead of loose dicts.

It also covers the part people skip: turning a validation failure into a message that names the field and the problem, for logs and for end users.

## Use it when

- You parse JSON, CSV rows or webhooks into dicts
- Config errors only show up deep in a run
- An API returns a vague 422 or 500 on bad input
- You are migrating from Pydantic v1 to v2

## What it can access

- Reads and edits Python files in your project
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/data-validation-pydantic/
