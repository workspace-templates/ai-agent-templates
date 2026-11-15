# Standup Summary

**Command** · Workflow

Summarizes what you changed since yesterday from git history and the working tree, in a form you can read out at standup.

## Install

```bash
npx workspacetemplates add standup-summary
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/standup-summary.md](claude-code/.claude/commands/standup-summary.md) | `.claude/commands/standup-summary.md` |
| Codex | [codex/home/.codex/prompts/standup-summary.md](codex/home/.codex/prompts/standup-summary.md) | `~/.codex/prompts/standup-summary.md` |
| Cursor | [cursor/.cursor/skills/standup-summary/SKILL.md](cursor/.cursor/skills/standup-summary/SKILL.md) | `.cursor/skills/standup-summary/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/standup-summary.toml](gemini-cli/.gemini/commands/standup-summary.toml) | `.gemini/commands/standup-summary.toml` |
| GitHub Copilot | [copilot/.github/skills/standup-summary/SKILL.md](copilot/.github/skills/standup-summary/SKILL.md) | `.github/skills/standup-summary/SKILL.md` |

## What it does

Standup is easier when you do not have to remember Tuesday. This command reads your commits, branches and uncommitted work and turns them into three short parts: done, in progress and blocked.

It looks at your own work by default, handles weekends by going back to the last working day, and says plainly when the history is too thin to claim anything.

## Use it when

- Five minutes before the daily standup
- On Monday when Friday is a blur
- When you must send a written status update
- After switching between several branches in a day

## What it can access

- Reads git history, status and stash list
- Changes nothing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/standup-summary/
