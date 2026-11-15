# PR Checklist

**Command** · Git and releases

Runs tests, lint and type checks, hunts leftover debug code and trims the diff before you open a pull request.

## Install

```bash
npx workspacetemplates add pr-checklist
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/pr-checklist.md](claude-code/.claude/commands/pr-checklist.md) | `.claude/commands/pr-checklist.md` |
| Codex | [codex/home/.codex/prompts/pr-checklist.md](codex/home/.codex/prompts/pr-checklist.md) | `~/.codex/prompts/pr-checklist.md` |
| Cursor | [cursor/.cursor/skills/pr-checklist/SKILL.md](cursor/.cursor/skills/pr-checklist/SKILL.md) | `.cursor/skills/pr-checklist/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/pr-checklist.toml](gemini-cli/.gemini/commands/pr-checklist.toml) | `.gemini/commands/pr-checklist.toml` |
| GitHub Copilot | [copilot/.github/skills/pr-checklist/SKILL.md](copilot/.github/skills/pr-checklist/SKILL.md) | `.github/skills/pr-checklist/SKILL.md` |

## What it does

Most review comments on a fresh pull request are things the author could have caught: a console.log, a skipped test, an unrelated formatting change. This command runs through those checks in one pass and lists what to fix.

It works from the diff against your base branch, so findings point at lines you actually changed. It only reports and fixes small mechanical issues after you agree.

## Use it when

- Right before you push a branch and open a pull request
- After a long debugging session that left experiments behind
- When a reviewer keeps asking for the same cleanups
- When you want to know if docs or a changelog entry are missing

## What it can access

- Reads the branch diff and project config
- Runs your test, lint and type-check commands
- Edits files only for fixes you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pr-checklist/
