# Changelog Entry

**Command** · Git and releases

Builds a Keep a Changelog entry from the commits since the last tag and adds it to CHANGELOG.md after you approve the text.

## Install

```bash
npx workspacetemplates add changelog-entry
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/changelog-entry.md](claude-code/.claude/commands/changelog-entry.md) | `.claude/commands/changelog-entry.md` |
| Codex | [codex/home/.codex/prompts/changelog-entry.md](codex/home/.codex/prompts/changelog-entry.md) | `~/.codex/prompts/changelog-entry.md` |
| Cursor | [cursor/.cursor/skills/changelog-entry/SKILL.md](cursor/.cursor/skills/changelog-entry/SKILL.md) | `.cursor/skills/changelog-entry/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/changelog-entry.toml](gemini-cli/.gemini/commands/changelog-entry.toml) | `.gemini/commands/changelog-entry.toml` |
| GitHub Copilot | [copilot/.github/skills/changelog-entry/SKILL.md](copilot/.github/skills/changelog-entry/SKILL.md) | `.github/skills/changelog-entry/SKILL.md` |

## What it does

A changelog is for people who use the software, yet raw commit logs are written for the people who build it. This command reads the commits since the latest tag and turns them into entries a user can understand.

It sorts them under the Keep a Changelog headings, drops noise such as formatting and dependency bumps, and suggests the next version number from the kind of changes found.

## Use it when

- You are about to tag a release
- The changelog fell behind by several versions
- You want the next semantic version suggested from the changes
- A release note must be reviewed before it is published

## What it can access

- Reads commit history since the last tag
- Edits CHANGELOG.md after approval

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/changelog-entry/
