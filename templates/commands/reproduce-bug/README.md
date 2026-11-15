# Reproduce Bug

**Command** · Workflow

Turns a bug report into the smallest set of steps or a failing test and shows the actual failing output.

## Install

```bash
npx workspacetemplates add reproduce-bug
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/reproduce-bug.md](claude-code/.claude/commands/reproduce-bug.md) | `.claude/commands/reproduce-bug.md` |
| Codex | [codex/home/.codex/prompts/reproduce-bug.md](codex/home/.codex/prompts/reproduce-bug.md) | `~/.codex/prompts/reproduce-bug.md` |
| Cursor | [cursor/.cursor/skills/reproduce-bug/SKILL.md](cursor/.cursor/skills/reproduce-bug/SKILL.md) | `.cursor/skills/reproduce-bug/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/reproduce-bug.toml](gemini-cli/.gemini/commands/reproduce-bug.toml) | `.gemini/commands/reproduce-bug.toml` |
| GitHub Copilot | [copilot/.github/skills/reproduce-bug/SKILL.md](copilot/.github/skills/reproduce-bug/SKILL.md) | `.github/skills/reproduce-bug/SKILL.md` |

## What it does

A bug you cannot reproduce cannot be fixed with confidence. This command takes the report, strips it down to the minimum conditions and proves the failure by running it.

The result is either a small failing test or exact steps, plus the output as evidence.

## Use it when

- A report says "it sometimes breaks" with little detail
- You need a failing test before you start the fix
- A bug appears with real data and you need a small case
- Support forwarded a ticket and you must confirm it is real

## What it can access

- Reads source and existing tests
- Creates one test or script file and runs it

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/reproduce-bug/
