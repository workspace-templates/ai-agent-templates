# Extract Hook

**Command** · Frontend · react

Moves stateful logic out of a React component into a custom hook, keeps behavior identical and adds tests for the hook.

## Install

```bash
npx workspacetemplates add extract-hook
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/extract-hook.md](claude-code/.claude/commands/extract-hook.md) | `.claude/commands/extract-hook.md` |
| Codex | [codex/home/.codex/prompts/extract-hook.md](codex/home/.codex/prompts/extract-hook.md) | `~/.codex/prompts/extract-hook.md` |
| Cursor | [cursor/.cursor/skills/extract-hook/SKILL.md](cursor/.cursor/skills/extract-hook/SKILL.md) | `.cursor/skills/extract-hook/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/extract-hook.toml](gemini-cli/.gemini/commands/extract-hook.toml) | `.gemini/commands/extract-hook.toml` |
| GitHub Copilot | [copilot/.github/skills/extract-hook/SKILL.md](copilot/.github/skills/extract-hook/SKILL.md) | `.github/skills/extract-hook/SKILL.md` |

## What it does

Components that mix data fetching, state, effects and markup are hard to read and harder to test. This command picks out the logic that belongs together and moves it into a hook with a clear name and a small return value.

Rendering stays unchanged, and the hook gets its own tests, so the refactor can be checked rather than trusted.

## Use it when

- A component is over 200 lines and half of it is state and effects
- The same fetching or toggling logic appears in two places
- You want to test logic without rendering the whole component
- Effect dependencies have become confusing

## What it can access

- Reads the component and related hooks
- Creates a hook file and its test, edits the component

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/extract-hook/
