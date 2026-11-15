# Task Breakdown

**Skill** · Workflow

Splits a feature request into small, ordered tasks that each have a clear acceptance check, so work ships in reviewable steps.

## Install

```bash
npx workspacetemplates add task-breakdown
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/task-breakdown/SKILL.md](claude-code/.claude/skills/task-breakdown/SKILL.md) | `.claude/skills/task-breakdown/SKILL.md` |
| Codex | [codex/.agents/skills/task-breakdown/SKILL.md](codex/.agents/skills/task-breakdown/SKILL.md) | `.agents/skills/task-breakdown/SKILL.md` |
| Cursor | [cursor/.cursor/skills/task-breakdown/SKILL.md](cursor/.cursor/skills/task-breakdown/SKILL.md) | `.cursor/skills/task-breakdown/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/task-breakdown/SKILL.md](gemini-cli/.gemini/skills/task-breakdown/SKILL.md) | `.gemini/skills/task-breakdown/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/task-breakdown/SKILL.md](copilot/.github/skills/task-breakdown/SKILL.md) | `.github/skills/task-breakdown/SKILL.md` |

## What it does

A feature written as one paragraph becomes one enormous change that nobody can review. This skill has the agent read the code first and then cut the work into slices that each leave the project working, ordered by dependency and risk.

Every task states what changes, where, and how you will know it is done. The output is a plan you can hand to a teammate, an agent or an issue tracker as it stands.

## Use it when

- A ticket says 'add team accounts' and nothing more
- You want to hand pieces of a feature to several people or agents
- A branch is already huge and needs to be cut into pull requests
- You need an estimate you can defend with a list of steps

## What it can access

- Reads files in your project
- Runs read-only search and git commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/task-breakdown/
