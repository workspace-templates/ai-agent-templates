# Why Changed

**Command** · Git and releases

Explains why a file or function looks the way it does by tracing its commits, blame and linked issues, with evidence.

## Install

```bash
npx workspacetemplates add why-changed
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/why-changed.md](claude-code/.claude/commands/why-changed.md) | `.claude/commands/why-changed.md` |
| Codex | [codex/home/.codex/prompts/why-changed.md](codex/home/.codex/prompts/why-changed.md) | `~/.codex/prompts/why-changed.md` |
| Cursor | [cursor/.cursor/skills/why-changed/SKILL.md](cursor/.cursor/skills/why-changed/SKILL.md) | `.cursor/skills/why-changed/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/why-changed.toml](gemini-cli/.gemini/commands/why-changed.toml) | `.gemini/commands/why-changed.toml` |
| GitHub Copilot | [copilot/.github/skills/why-changed/SKILL.md](copilot/.github/skills/why-changed/SKILL.md) | `.github/skills/why-changed/SKILL.md` |

## What it does

Odd-looking code usually has a reason that lives in an old commit or ticket. This command follows the history of the exact lines you ask about and tells the story: who changed them, when, and what problem the change solved.

It separates what the history proves from what it only suggests, so you know whether removing a strange workaround is safe.

## Use it when

- A strange conditional looks like a bug but you fear removing it
- You inherit a module and need to know how it got this way
- A reviewer asks why a function was split or merged
- Before deleting a workaround that nobody can explain

## What it can access

- Reads git history, blame and file contents
- Optionally reads linked issues through the gh CLI

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/why-changed/
