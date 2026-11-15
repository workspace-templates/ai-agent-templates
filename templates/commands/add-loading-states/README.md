# Add Loading States

**Command** · Frontend

Adds loading, empty and error states to a view that fetches data, using the spinners, skeletons and messages the app already has.

## Install

```bash
npx workspacetemplates add add-loading-states
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/add-loading-states.md](claude-code/.claude/commands/add-loading-states.md) | `.claude/commands/add-loading-states.md` |
| Codex | [codex/home/.codex/prompts/add-loading-states.md](codex/home/.codex/prompts/add-loading-states.md) | `~/.codex/prompts/add-loading-states.md` |
| Cursor | [cursor/.cursor/skills/add-loading-states/SKILL.md](cursor/.cursor/skills/add-loading-states/SKILL.md) | `.cursor/skills/add-loading-states/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/add-loading-states.toml](gemini-cli/.gemini/commands/add-loading-states.toml) | `.gemini/commands/add-loading-states.toml` |
| GitHub Copilot | [copilot/.github/skills/add-loading-states/SKILL.md](copilot/.github/skills/add-loading-states/SKILL.md) | `.github/skills/add-loading-states/SKILL.md` |

## What it does

Many screens handle only the success case, so users see a blank area while data loads or a frozen page when a request fails. This command finds the data flow in the view you name and covers the three missing states.

It reuses the existing skeletons, banners and copy style of the app, and it keeps retry behavior simple and visible.

## Use it when

- A list or dashboard shows a blank area while the request is in flight
- A failed request leaves the page silent
- New accounts see an empty table with no hint about what to do
- You are polishing a screen before release

## What it can access

- Reads the view, its data layer and shared UI components
- Edits the view and its test file

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/add-loading-states/
