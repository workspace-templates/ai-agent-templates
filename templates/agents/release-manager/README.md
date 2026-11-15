# Release Manager

**Subagent** · Git and releases

Subagent that prepares a release: picks the version bump, drafts the changelog from commits, runs the checks and gives you the tag commands.

## Install

```bash
npx workspacetemplates add release-manager
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/release-manager.md](claude-code/.claude/agents/release-manager.md) | `.claude/agents/release-manager.md` |
| Codex | [codex/.codex/agents/release-manager.toml](codex/.codex/agents/release-manager.toml) | `.codex/agents/release-manager.toml` |
| Cursor | [cursor/.cursor/agents/release-manager.md](cursor/.cursor/agents/release-manager.md) | `.cursor/agents/release-manager.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/release-manager.md](gemini-cli/.gemini/agents/release-manager.md) | `.gemini/agents/release-manager.md` |
| GitHub Copilot | [copilot/.github/agents/release-manager.agent.md](copilot/.github/agents/release-manager.agent.md) | `.github/agents/release-manager.agent.md` |

## What it does

Releases go wrong in small ways: a forgotten version file, a changelog that misses a breaking change, a tag on the wrong commit. This subagent follows the same checklist every time.

It reads the commits since the last tag, proposes a version following semantic versioning, writes the changelog entry grouped by type, and runs your tests and build. It stops before tagging or publishing and prints the exact commands for you to run.

## Use it when

- It is release day and you need a version number and changelog
- You want breaking changes caught before they ship as a patch
- A project has version strings in several files that must stay in sync
- You want a repeatable pre-release checklist

## What it can access

- Reads git history and project files
- Edits version files and the changelog
- Runs your tests, linter and build

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/release-manager/
