# i18n Extractor

**Subagent** · Frontend

Subagent that moves hardcoded UI strings into message files with stable keys and plural forms, then checks for missing keys.

## Install

```bash
npx workspacetemplates add i18n-extractor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/i18n-extractor.md](claude-code/.claude/agents/i18n-extractor.md) | `.claude/agents/i18n-extractor.md` |
| Codex | [codex/.codex/agents/i18n-extractor.toml](codex/.codex/agents/i18n-extractor.toml) | `.codex/agents/i18n-extractor.toml` |
| Cursor | [cursor/.cursor/agents/i18n-extractor.md](cursor/.cursor/agents/i18n-extractor.md) | `.cursor/agents/i18n-extractor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/i18n-extractor.md](gemini-cli/.gemini/agents/i18n-extractor.md) | `.gemini/agents/i18n-extractor.md` |
| GitHub Copilot | [copilot/.github/agents/i18n-extractor.agent.md](copilot/.github/agents/i18n-extractor.agent.md) | `.github/agents/i18n-extractor.agent.md` |

## What it does

Adding a second language is painful when the first one is baked into the markup. This subagent walks through your components, lifts each user-facing string into a message file, and swaps in the translation call your i18n library expects.

It handles the awkward parts that people skip: variables inside sentences, plural rules, and strings that are not meant for translation. A final check compares every locale file so no key is missing.

## Use it when

- You are about to add a second language to an English-only app
- A feature shipped with hardcoded strings that need translating
- Locale files have drifted and some keys exist in one language only
- You want keys named consistently instead of ad hoc

## What it can access

- Reads and edits UI source files and locale files
- Runs your tests, type check and a locale comparison

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/i18n-extractor/
