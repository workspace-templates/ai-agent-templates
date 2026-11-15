# Write ADR

**Command** · Documentation

Writes an architecture decision record for a decision your team just made, with context, options weighed and consequences.

## Install

```bash
npx workspacetemplates add write-adr
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/write-adr.md](claude-code/.claude/commands/write-adr.md) | `.claude/commands/write-adr.md` |
| Codex | [codex/home/.codex/prompts/write-adr.md](codex/home/.codex/prompts/write-adr.md) | `~/.codex/prompts/write-adr.md` |
| Cursor | [cursor/.cursor/skills/write-adr/SKILL.md](cursor/.cursor/skills/write-adr/SKILL.md) | `.cursor/skills/write-adr/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/write-adr.toml](gemini-cli/.gemini/commands/write-adr.toml) | `.gemini/commands/write-adr.toml` |
| GitHub Copilot | [copilot/.github/skills/write-adr/SKILL.md](copilot/.github/skills/write-adr/SKILL.md) | `.github/skills/write-adr/SKILL.md` |

## What it does

Six months from now nobody remembers why the team picked one queue, database or framework over another. An ADR keeps the reasoning next to the code, and this command drafts it while the discussion is still fresh.

It uses your repository numbering and template if you have them, pulls facts from the code and recent history, and marks anything you must confirm instead of inventing rationale.

## Use it when

- Right after a design meeting that picked a direction
- When replacing a library or service
- A reviewer asks "why did we do it this way?"
- You want a record of options that were rejected

## What it can access

- Reads the repository and recent history
- Creates one Markdown file after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/write-adr/
