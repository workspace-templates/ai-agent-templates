# Check Responsive

**Command** · Frontend

Reviews layout code for small-screen breakage such as overflow, fixed widths and cramped tap targets, then fixes the breakpoints.

## Install

```bash
npx workspacetemplates add check-responsive
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/check-responsive.md](claude-code/.claude/commands/check-responsive.md) | `.claude/commands/check-responsive.md` |
| Codex | [codex/home/.codex/prompts/check-responsive.md](codex/home/.codex/prompts/check-responsive.md) | `~/.codex/prompts/check-responsive.md` |
| Cursor | [cursor/.cursor/skills/check-responsive/SKILL.md](cursor/.cursor/skills/check-responsive/SKILL.md) | `.cursor/skills/check-responsive/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/check-responsive.toml](gemini-cli/.gemini/commands/check-responsive.toml) | `.gemini/commands/check-responsive.toml` |
| GitHub Copilot | [copilot/.github/skills/check-responsive/SKILL.md](copilot/.github/skills/check-responsive/SKILL.md) | `.github/skills/check-responsive/SKILL.md` |

## What it does

Layouts that look fine on a laptop often break at 360 pixels wide: text spills out, tables push the page sideways and buttons sit too close together. This command reads the styles and markup for the files you name and finds those problems without needing a browser.

It lists each issue with the rule that causes it, applies small fixes, and leaves design decisions as questions for you.

## Use it when

- A page is reported as broken on phones
- You are about to ship a new layout and have not tried narrow widths
- The page scrolls sideways on mobile
- You inherited CSS full of fixed pixel widths

## What it can access

- Reads markup and style files
- Edits CSS and layout code for the files in scope

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/check-responsive/
