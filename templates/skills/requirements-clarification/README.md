# Requirements Clarification

**Skill** · Workflow

Turns a vague request into a few pointed questions and written acceptance criteria before any code is written.

## Install

```bash
npx workspacetemplates add requirements-clarification
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/requirements-clarification/SKILL.md](claude-code/.claude/skills/requirements-clarification/SKILL.md) | `.claude/skills/requirements-clarification/SKILL.md` |
| Codex | [codex/.agents/skills/requirements-clarification/SKILL.md](codex/.agents/skills/requirements-clarification/SKILL.md) | `.agents/skills/requirements-clarification/SKILL.md` |
| Cursor | [cursor/.cursor/skills/requirements-clarification/SKILL.md](cursor/.cursor/skills/requirements-clarification/SKILL.md) | `.cursor/skills/requirements-clarification/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/requirements-clarification/SKILL.md](gemini-cli/.gemini/skills/requirements-clarification/SKILL.md) | `.gemini/skills/requirements-clarification/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/requirements-clarification/SKILL.md](copilot/.github/skills/requirements-clarification/SKILL.md) | `.github/skills/requirements-clarification/SKILL.md` |

## What it does

Most rework starts with a request that sounded clear and was not. This skill has the agent check the code for what it can learn alone, then ask only the questions that would change the design, and finish with acceptance criteria you can test.

You get a short document the requester can agree to in a minute. If they cannot answer a question, it becomes a recorded assumption instead of a silent guess.

## Use it when

- A ticket says 'make search better' or 'add export'
- Two people describe the same feature differently
- You are about to start work and cannot say how it will be checked
- A stakeholder keeps changing their mind after delivery

## What it can access

- Reads files and docs in your project
- Writes the clarified requirements only if you name a file

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/requirements-clarification/
