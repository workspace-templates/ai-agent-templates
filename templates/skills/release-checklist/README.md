# Release Checklist

**Skill** · Git and releases

Runs a release step by step: verifies the branch, tests and changelog, tags the version, builds artifacts and writes a rollback note before shipping.

## Install

```bash
npx workspacetemplates add release-checklist
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/release-checklist/SKILL.md](claude-code/.claude/skills/release-checklist/SKILL.md) | `.claude/skills/release-checklist/SKILL.md` |
| Codex | [codex/.agents/skills/release-checklist/SKILL.md](codex/.agents/skills/release-checklist/SKILL.md) | `.agents/skills/release-checklist/SKILL.md` |
| Cursor | [cursor/.cursor/skills/release-checklist/SKILL.md](cursor/.cursor/skills/release-checklist/SKILL.md) | `.cursor/skills/release-checklist/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/release-checklist/SKILL.md](gemini-cli/.gemini/skills/release-checklist/SKILL.md) | `.gemini/skills/release-checklist/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/release-checklist/SKILL.md](copilot/.github/skills/release-checklist/SKILL.md) | `.github/skills/release-checklist/SKILL.md` |

## What it does

Releases go wrong in boring ways: a dirty tree, a stale changelog, a tag on the wrong commit, no way back. This skill turns the release into a short checklist that is checked with commands, not remembered.

It stops at the first failed gate and never publishes without your go-ahead. The last output is a rollback note you can follow at two in the morning.

## Use it when

- You are about to cut a release of a library or service
- A new teammate does the release for the first time
- Releases have broken production because a step was forgotten
- You want the same gates every time, whatever the project

## What it can access

- Runs git, your test and build commands, and the dependency audit
- Edits version files and the changelog; creates a local tag only after the gates pass

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/release-checklist/
