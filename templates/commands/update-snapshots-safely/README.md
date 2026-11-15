# Update Snapshots Safely

**Command** · Testing

Reviews every changed snapshot before updating it and flags the ones that hide a real regression.

## Install

```bash
npx workspacetemplates add update-snapshots-safely
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/update-snapshots-safely.md](claude-code/.claude/commands/update-snapshots-safely.md) | `.claude/commands/update-snapshots-safely.md` |
| Codex | [codex/home/.codex/prompts/update-snapshots-safely.md](codex/home/.codex/prompts/update-snapshots-safely.md) | `~/.codex/prompts/update-snapshots-safely.md` |
| Cursor | [cursor/.cursor/skills/update-snapshots-safely/SKILL.md](cursor/.cursor/skills/update-snapshots-safely/SKILL.md) | `.cursor/skills/update-snapshots-safely/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/update-snapshots-safely.toml](gemini-cli/.gemini/commands/update-snapshots-safely.toml) | `.gemini/commands/update-snapshots-safely.toml` |
| GitHub Copilot | [copilot/.github/skills/update-snapshots-safely/SKILL.md](copilot/.github/skills/update-snapshots-safely/SKILL.md) | `.github/skills/update-snapshots-safely/SKILL.md` |

## What it does

Running the update flag on a red suite is how bugs get approved. This command shows each snapshot difference, decides whether it is an intended change, and updates only the ones that are.

Suspicious differences, such as a missing field or an error message captured as expected output, are held back and explained.

## Use it when

- After a component or serializer change makes snapshots fail
- When a library upgrade shifts generated markup
- Before approving a pull request with hundreds of snapshot lines
- When the team habit is to press u without looking

## What it can access

- Reads test output and git diffs
- Rewrites snapshot files for approved cases only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/update-snapshots-safely/
