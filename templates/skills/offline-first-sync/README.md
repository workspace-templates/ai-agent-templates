# Offline First Sync

**Skill** · Mobile

Designs local storage and background sync with conflict handling, so an app stays usable on flaky networks and never silently loses edits.

## Install

```bash
npx workspacetemplates add offline-first-sync
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/offline-first-sync/SKILL.md](claude-code/.claude/skills/offline-first-sync/SKILL.md) | `.claude/skills/offline-first-sync/SKILL.md` |
| Codex | [codex/.agents/skills/offline-first-sync/SKILL.md](codex/.agents/skills/offline-first-sync/SKILL.md) | `.agents/skills/offline-first-sync/SKILL.md` |
| Cursor | [cursor/.cursor/skills/offline-first-sync/SKILL.md](cursor/.cursor/skills/offline-first-sync/SKILL.md) | `.cursor/skills/offline-first-sync/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/offline-first-sync/SKILL.md](gemini-cli/.gemini/skills/offline-first-sync/SKILL.md) | `.gemini/skills/offline-first-sync/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/offline-first-sync/SKILL.md](copilot/.github/skills/offline-first-sync/SKILL.md) | `.github/skills/offline-first-sync/SKILL.md` |

## What it does

Adding a cache is not the same as going offline first. The hard parts are what happens to an edit made on a train, who wins when two devices changed the same record, and how to retry without duplicating anything. This skill makes the agent settle those questions before writing code.

It produces a short design, then an implementation in small steps: a local store as the source of truth, a queue of pending changes, and a sync loop that is safe to run twice.

## Use it when

- Users lose work when the connection drops mid-save
- Two devices edit the same record and one change vanishes
- You are adding an offline mode to an app that only reads from an API
- Sync sometimes creates duplicates after a retry
- You need to choose between last-write-wins and merging

## What it can access

- Reads files in your project
- Runs your test commands
- Edits storage, networking and sync code, and may propose server API changes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/offline-first-sync/
