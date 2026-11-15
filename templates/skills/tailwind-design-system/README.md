# Tailwind Design System

**Skill** · Frontend · tailwind

Sets up Tailwind theme tokens, component classes and typed variants so a UI stays consistent without piles of repeated utility strings.

## Install

```bash
npx workspacetemplates add tailwind-design-system
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/tailwind-design-system/SKILL.md](claude-code/.claude/skills/tailwind-design-system/SKILL.md) | `.claude/skills/tailwind-design-system/SKILL.md` |
| Codex | [codex/.agents/skills/tailwind-design-system/SKILL.md](codex/.agents/skills/tailwind-design-system/SKILL.md) | `.agents/skills/tailwind-design-system/SKILL.md` |
| Cursor | [cursor/.cursor/skills/tailwind-design-system/SKILL.md](cursor/.cursor/skills/tailwind-design-system/SKILL.md) | `.cursor/skills/tailwind-design-system/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/tailwind-design-system/SKILL.md](gemini-cli/.gemini/skills/tailwind-design-system/SKILL.md) | `.gemini/skills/tailwind-design-system/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/tailwind-design-system/SKILL.md](copilot/.github/skills/tailwind-design-system/SKILL.md) | `.github/skills/tailwind-design-system/SKILL.md` |

## What it does

Tailwind projects drift: five shades of gray, three button paddings, and a 40-class string copied into ten files. This skill pulls those decisions into theme tokens and a few real components, so a color or spacing change happens in one place.

It audits what exists before it adds anything, and it keeps Tailwind in charge instead of wrapping it in custom CSS.

## Use it when

- A project has inconsistent colors, radii or spacing
- The same long class string appears in many files
- You are adding dark mode or a second brand theme
- A new component needs variants such as size and intent

## What it can access

- Reads markup and CSS across the project
- Edits the Tailwind config, theme CSS and components

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/tailwind-design-system/
