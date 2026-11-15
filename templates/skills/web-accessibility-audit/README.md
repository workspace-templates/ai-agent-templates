# Web Accessibility Audit

**Skill** · Frontend

Audits UI code against WCAG 2.2 for keyboard access, labels, contrast and focus handling, and fixes what it finds. Use it on any page or component.

## Install

```bash
npx workspacetemplates add web-accessibility-audit
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/web-accessibility-audit/SKILL.md](claude-code/.claude/skills/web-accessibility-audit/SKILL.md) | `.claude/skills/web-accessibility-audit/SKILL.md` |
| Codex | [codex/.agents/skills/web-accessibility-audit/SKILL.md](codex/.agents/skills/web-accessibility-audit/SKILL.md) | `.agents/skills/web-accessibility-audit/SKILL.md` |
| Cursor | [cursor/.cursor/skills/web-accessibility-audit/SKILL.md](cursor/.cursor/skills/web-accessibility-audit/SKILL.md) | `.cursor/skills/web-accessibility-audit/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/web-accessibility-audit/SKILL.md](gemini-cli/.gemini/skills/web-accessibility-audit/SKILL.md) | `.gemini/skills/web-accessibility-audit/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/web-accessibility-audit/SKILL.md](copilot/.github/skills/web-accessibility-audit/SKILL.md) | `.github/skills/web-accessibility-audit/SKILL.md` |

## What it does

Most accessibility failures can be found by reading the markup: a div acting as a button, an input without a label, a modal that never returns focus. This skill checks for those directly in the code before anyone opens a screen reader.

The output is a list of failures tied to a WCAG criterion and a line of code, each with the corrected snippet, so the fix is a copy and paste rather than a research task.

## Use it when

- Before shipping a new page, form or dialog
- When a component library gets a new interactive widget
- After a design change to colors or layout
- When a customer or audit reports accessibility issues

## What it can access

- Reads files in your project
- Edits markup and styles only when you ask it to fix

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/web-accessibility-audit/
