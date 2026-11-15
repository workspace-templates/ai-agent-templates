# Accessibility Fixer

**Subagent** · Frontend

Subagent that fixes accessibility problems in UI components: labels, roles, focus order and contrast, then re-checks each fix.

## Install

```bash
npx workspacetemplates add accessibility-fixer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/accessibility-fixer.md](claude-code/.claude/agents/accessibility-fixer.md) | `.claude/agents/accessibility-fixer.md` |
| Codex | [codex/.codex/agents/accessibility-fixer.toml](codex/.codex/agents/accessibility-fixer.toml) | `.codex/agents/accessibility-fixer.toml` |
| Cursor | [cursor/.cursor/agents/accessibility-fixer.md](cursor/.cursor/agents/accessibility-fixer.md) | `.cursor/agents/accessibility-fixer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/accessibility-fixer.md](gemini-cli/.gemini/agents/accessibility-fixer.md) | `.gemini/agents/accessibility-fixer.md` |
| GitHub Copilot | [copilot/.github/agents/accessibility-fixer.agent.md](copilot/.github/agents/accessibility-fixer.agent.md) | `.github/agents/accessibility-fixer.agent.md` |

## What it does

Most accessibility bugs are small and mechanical: unnamed buttons, form fields missing labels, dialogs that never take focus, and text that fails contrast. This subagent finds them in the components you point at and fixes them in place.

It prefers native HTML over ARIA, keeps visual design unchanged unless contrast forces a color tweak, and re-runs the checks after each change so you get a list of what is now fixed and what needs a human decision.

## Use it when

- An audit or Lighthouse run flagged missing labels and low contrast
- You built a custom dropdown, tab set or dialog and need keyboard support
- A form cannot be completed with the keyboard alone
- You want a component made screen reader friendly before release

## What it can access

- Reads and edits component and style files
- Runs your linter or accessibility test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/accessibility-fixer/
