# Tailwind CSS Rules

**Project rules** · Frontend · tailwind

Project rules for Tailwind CSS: design tokens in theme config, class ordering, component extraction, dark mode and limited arbitrary values.

## Install

```bash
npx workspacetemplates add tailwind-css-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/tailwind-css-rules.mdc](cursor/.cursor/rules/tailwind-css-rules.mdc) | `.cursor/rules/tailwind-css-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

This file keeps Tailwind markup consistent across a project and across authors. Colors, spacing and type come from the theme, and long class lists are handled by components instead of copy and paste.

It also sets limits on escape hatches such as arbitrary values and important flags, so a stylesheet does not turn into a pile of one-off numbers.

## Use it when

- You style a new page with an agent
- Class lists differ for the same button in many places
- Hex colors and pixel sizes appear inline in classes
- You are adding dark mode to an existing design

## What it can access

- Guidance text; it does not touch your files until you ask the agent to edit

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/tailwind-css-rules/
