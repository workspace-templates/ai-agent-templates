# Estimate Task

**Command** · Workflow

Estimates a task by inspecting the code it touches, then gives an hour range with assumptions and the unknowns behind it.

## Install

```bash
npx workspacetemplates add estimate-task
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/estimate-task.md](claude-code/.claude/commands/estimate-task.md) | `.claude/commands/estimate-task.md` |
| Codex | [codex/home/.codex/prompts/estimate-task.md](codex/home/.codex/prompts/estimate-task.md) | `~/.codex/prompts/estimate-task.md` |
| Cursor | [cursor/.cursor/skills/estimate-task/SKILL.md](cursor/.cursor/skills/estimate-task/SKILL.md) | `.cursor/skills/estimate-task/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/estimate-task.toml](gemini-cli/.gemini/commands/estimate-task.toml) | `.gemini/commands/estimate-task.toml` |
| GitHub Copilot | [copilot/.github/skills/estimate-task/SKILL.md](copilot/.github/skills/estimate-task/SKILL.md) | `.github/skills/estimate-task/SKILL.md` |

## What it does

Estimates made from a ticket title are guesses. This command opens the files the task would change, counts what depends on them and checks how well they are tested before giving a number.

The answer is a range with a stated confidence and a list of assumptions, so the person asking sees what could move it.

## Use it when

- A manager asks how long a change will take
- You are sizing tickets for the next sprint
- A request sounds small but might touch shared code
- You want the risky parts named before committing to a date

## What it can access

- Reads source files, tests and git history
- Makes no changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/estimate-task/
