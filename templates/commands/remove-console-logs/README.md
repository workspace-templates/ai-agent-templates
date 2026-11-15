# Remove Console Logs

**Command** · Code quality

Finds and removes leftover debug logging and prints while keeping the intentional logger calls and CLI output.

## Install

```bash
npx workspacetemplates add remove-console-logs
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/remove-console-logs.md](claude-code/.claude/commands/remove-console-logs.md) | `.claude/commands/remove-console-logs.md` |
| Codex | [codex/home/.codex/prompts/remove-console-logs.md](codex/home/.codex/prompts/remove-console-logs.md) | `~/.codex/prompts/remove-console-logs.md` |
| Cursor | [cursor/.cursor/skills/remove-console-logs/SKILL.md](cursor/.cursor/skills/remove-console-logs/SKILL.md) | `.cursor/skills/remove-console-logs/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/remove-console-logs.toml](gemini-cli/.gemini/commands/remove-console-logs.toml) | `.gemini/commands/remove-console-logs.toml` |
| GitHub Copilot | [copilot/.github/skills/remove-console-logs/SKILL.md](copilot/.github/skills/remove-console-logs/SKILL.md) | `.github/skills/remove-console-logs/SKILL.md` |

## What it does

Debug prints sneak into commits and end up in production logs, sometimes with data that should never be logged. This command finds them and removes the ones that were clearly for debugging.

It leaves alone anything that goes through your logger, command-line tools whose job is to print, and test output. Doubtful cases are listed for you instead of deleted.

## Use it when

- Before opening a pull request after a debugging session
- Production logs are noisy or leak values
- You are cleaning up a service that mixes print and a logger
- A lint rule against console is about to be switched on

## What it can access

- Searches source files for debug output
- Removes lines only after you confirm the table, then runs lint and tests

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/remove-console-logs/
