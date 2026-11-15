# Frontend i18n

**Skill** · Frontend

Extracts hard-coded UI text into translation files and handles plurals, dates, numbers and right-to-left layout for a multi-language frontend.

## Install

```bash
npx workspacetemplates add frontend-i18n
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/frontend-i18n/SKILL.md](claude-code/.claude/skills/frontend-i18n/SKILL.md) | `.claude/skills/frontend-i18n/SKILL.md` |
| Codex | [codex/.agents/skills/frontend-i18n/SKILL.md](codex/.agents/skills/frontend-i18n/SKILL.md) | `.agents/skills/frontend-i18n/SKILL.md` |
| Cursor | [cursor/.cursor/skills/frontend-i18n/SKILL.md](cursor/.cursor/skills/frontend-i18n/SKILL.md) | `.cursor/skills/frontend-i18n/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/frontend-i18n/SKILL.md](gemini-cli/.gemini/skills/frontend-i18n/SKILL.md) | `.gemini/skills/frontend-i18n/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/frontend-i18n/SKILL.md](copilot/.github/skills/frontend-i18n/SKILL.md) | `.github/skills/frontend-i18n/SKILL.md` |

## What it does

Internationalization fails in the details: a plural built with a ternary, a date glued together from parts, a button that breaks when the German label is twice as long. This skill sets up a translation workflow and fixes those traps while it extracts the strings.

It uses the platform Intl APIs and ICU message syntax so the result does not depend on one library, and it keeps translators in mind with stable keys and context notes.

## Use it when

- You are adding a second language to an existing app
- Plural forms or date formats look wrong in some locales
- The layout must support Arabic or Hebrew
- Translators keep asking what a string means

## What it can access

- Reads and edits components and translation files
- Runs your type check and test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/frontend-i18n/
