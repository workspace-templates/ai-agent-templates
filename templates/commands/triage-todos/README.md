# Triage Todos

**Command** · Workflow

Collects to-do comments and open issues, then sorts them into do now, later and drop with a short reason for each.

## Install

```bash
npx workspacetemplates add triage-todos
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/triage-todos.md](claude-code/.claude/commands/triage-todos.md) | `.claude/commands/triage-todos.md` |
| Codex | [codex/home/.codex/prompts/triage-todos.md](codex/home/.codex/prompts/triage-todos.md) | `~/.codex/prompts/triage-todos.md` |
| Cursor | [cursor/.cursor/skills/triage-todos/SKILL.md](cursor/.cursor/skills/triage-todos/SKILL.md) | `.cursor/skills/triage-todos/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/triage-todos.toml](gemini-cli/.gemini/commands/triage-todos.toml) | `.gemini/commands/triage-todos.toml` |
| GitHub Copilot | [copilot/.github/skills/triage-todos/SKILL.md](copilot/.github/skills/triage-todos/SKILL.md) | `.github/skills/triage-todos/SKILL.md` |

## What it does

Old to-do comments pile up until nobody trusts them. This command gathers them from the code, compares each with git history and any open issues, and decides which are still real.

You get three clear groups and a reason per item. Removing stale comments or filing tickets happens only after you pick.

## Use it when

- The repository has hundreds of forgotten to-do and FIXME markers
- You are planning a cleanup sprint
- Before a release when risky leftovers must be found
- A new teammate needs to know which notes still matter

## What it can access

- Reads source files, blame data and optionally open issues
- Edits files only to remove comments you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/triage-todos/
