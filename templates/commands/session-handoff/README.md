# Session Handoff

**Command** · Workflow

Writes a handoff note covering what was done, what remains, decisions made and the exact commands to resume work.

## Install

```bash
npx workspacetemplates add session-handoff
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/session-handoff.md](claude-code/.claude/commands/session-handoff.md) | `.claude/commands/session-handoff.md` |
| Codex | [codex/home/.codex/prompts/session-handoff.md](codex/home/.codex/prompts/session-handoff.md) | `~/.codex/prompts/session-handoff.md` |
| Cursor | [cursor/.cursor/skills/session-handoff/SKILL.md](cursor/.cursor/skills/session-handoff/SKILL.md) | `.cursor/skills/session-handoff/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/session-handoff.toml](gemini-cli/.gemini/commands/session-handoff.toml) | `.gemini/commands/session-handoff.toml` |
| GitHub Copilot | [copilot/.github/skills/session-handoff/SKILL.md](copilot/.github/skills/session-handoff/SKILL.md) | `.github/skills/session-handoff/SKILL.md` |

## What it does

Work stops mid-task all the time: end of day, a teammate takes over, or a fresh agent session starts with no memory. This command captures the state of the work from the repository itself, not from recollection.

The note names the branch, the changes in progress and the next commands to run, so the next person can continue within minutes.

## Use it when

- You are ending the day in the middle of a task
- Another developer will pick up your branch
- You want to restart an agent session without losing context
- A task must pause for a review or an outside dependency

## What it can access

- Reads git status, history and changed files
- Runs the project test command once
- Writes HANDOFF.md only after you agree

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/session-handoff/
