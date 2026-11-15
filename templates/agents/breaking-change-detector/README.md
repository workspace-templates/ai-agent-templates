# Breaking Change Detector

**Subagent** · Git and releases

Read-only subagent that scans the diff between two tags for breaking changes and drafts upgrade notes for the people who depend on you.

## Install

```bash
npx workspacetemplates add breaking-change-detector
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/breaking-change-detector.md](claude-code/.claude/agents/breaking-change-detector.md) | `.claude/agents/breaking-change-detector.md` |
| Codex | [codex/.codex/agents/breaking-change-detector.toml](codex/.codex/agents/breaking-change-detector.toml) | `.codex/agents/breaking-change-detector.toml` |
| Cursor | [cursor/.cursor/agents/breaking-change-detector.md](cursor/.cursor/agents/breaking-change-detector.md) | `.cursor/agents/breaking-change-detector.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/breaking-change-detector.md](gemini-cli/.gemini/agents/breaking-change-detector.md) | `.gemini/agents/breaking-change-detector.md` |
| GitHub Copilot | [copilot/.github/agents/breaking-change-detector.agent.md](copilot/.github/agents/breaking-change-detector.agent.md) | `.github/agents/breaking-change-detector.agent.md` |

## What it does

Semver only helps if the version number is honest. This subagent compares two tags, reads what changed in the public surface, and lists every change that could break a caller, even when the commit message calls it a small fix.

Each finding comes with the old and new signature and a short migration step. The result is a draft you can paste into release notes, plus a verdict on whether the bump should be major, minor, or patch.

## Use it when

- Your next tag is planned as minor and you doubt that label
- You publish a library and need upgrade notes
- A consumer says an update broke them and you need to find what changed
- You review a large PR that touches exported code

## What it can access

- Reads source files and git history
- Runs read-only git commands such as diff and tag listing

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/breaking-change-detector/
