# Frontend Reviewer

**Subagent** · Frontend · react, typescript, css

Read-only subagent that reviews UI changes for missing states, accessibility failures and broken layouts on small screens.

## Install

```bash
npx workspacetemplates add frontend-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/frontend-reviewer.md](claude-code/.claude/agents/frontend-reviewer.md) | `.claude/agents/frontend-reviewer.md` |
| Codex | [codex/.codex/agents/frontend-reviewer.toml](codex/.codex/agents/frontend-reviewer.toml) | `.codex/agents/frontend-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/frontend-reviewer.md](cursor/.cursor/agents/frontend-reviewer.md) | `.cursor/agents/frontend-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/frontend-reviewer.md](gemini-cli/.gemini/agents/frontend-reviewer.md) | `.gemini/agents/frontend-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/frontend-reviewer.agent.md](copilot/.github/agents/frontend-reviewer.agent.md) | `.github/agents/frontend-reviewer.agent.md` |

## What it does

Most UI bugs live in the states nobody drew: the empty list, the failed request, the 400-pixel screen, the keyboard user. This subagent reads a UI change and checks those cases one by one against the code.

It reports problems with a file and line and a short fix, and leaves the code alone. Taste and brand choices are out of scope.

## Use it when

- Before merging a new page, form or component
- When a design was implemented and you want a gap check
- After a refactor of shared UI components
- When accessibility has never been reviewed on a screen

## What it can access

- Reads components, styles and the git diff
- No edits, no writes

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/frontend-reviewer/
