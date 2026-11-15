# Semantic Versioning

**Skill** · Git and releases

Works out the next version number from the real changes since the last tag, applies semver rules to breaking changes and drafts the release notes.

## Install

```bash
npx workspacetemplates add semantic-versioning
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/semantic-versioning/SKILL.md](claude-code/.claude/skills/semantic-versioning/SKILL.md) | `.claude/skills/semantic-versioning/SKILL.md` |
| Codex | [codex/.agents/skills/semantic-versioning/SKILL.md](codex/.agents/skills/semantic-versioning/SKILL.md) | `.agents/skills/semantic-versioning/SKILL.md` |
| Cursor | [cursor/.cursor/skills/semantic-versioning/SKILL.md](cursor/.cursor/skills/semantic-versioning/SKILL.md) | `.cursor/skills/semantic-versioning/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/semantic-versioning/SKILL.md](gemini-cli/.gemini/skills/semantic-versioning/SKILL.md) | `.gemini/skills/semantic-versioning/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/semantic-versioning/SKILL.md](copilot/.github/skills/semantic-versioning/SKILL.md) | `.github/skills/semantic-versioning/SKILL.md` |

## What it does

Version numbers are a promise to the people who depend on you. Picking one from the commit titles alone misses a changed default, a removed export or a stricter validation, each of which breaks someone.

This skill reads the actual public surface that changed, classifies every change as major, minor or patch, and explains the pick so the number can be defended in review.

## Use it when

- You are about to tag a release and are unsure whether it is minor or major
- A library changed behavior without changing a signature
- You need release notes grouped by impact
- Commits do not follow a convention but you still want a correct bump

## What it can access

- Runs git describe and git diff against the last tag
- Edits version fields and the changelog after you approve

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/semantic-versioning/
