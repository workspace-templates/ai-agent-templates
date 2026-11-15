# Legacy Modernizer

**Subagent** · Code quality

Subagent that upgrades outdated syntax and deprecated API calls one file at a time, running the tests after every step.

## Install

```bash
npx workspacetemplates add legacy-modernizer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/legacy-modernizer.md](claude-code/.claude/agents/legacy-modernizer.md) | `.claude/agents/legacy-modernizer.md` |
| Codex | [codex/.codex/agents/legacy-modernizer.toml](codex/.codex/agents/legacy-modernizer.toml) | `.codex/agents/legacy-modernizer.toml` |
| Cursor | [cursor/.cursor/agents/legacy-modernizer.md](cursor/.cursor/agents/legacy-modernizer.md) | `.cursor/agents/legacy-modernizer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/legacy-modernizer.md](gemini-cli/.gemini/agents/legacy-modernizer.md) | `.gemini/agents/legacy-modernizer.md` |
| GitHub Copilot | [copilot/.github/agents/legacy-modernizer.agent.md](copilot/.github/agents/legacy-modernizer.agent.md) | `.github/agents/legacy-modernizer.agent.md` |

## What it does

Modernizing old code goes wrong when it happens all at once. This subagent works in small steps: pick a file, replace one kind of outdated construct, run the tests, move on. If a step turns tests red, it reverts that file and notes why.

The result is a series of boring, reviewable edits instead of a giant rewrite, and a list of the spots it deliberately left alone.

## Use it when

- A codebase still uses callbacks, var, or removed language features
- A dependency upgrade deprecated half the APIs you call
- You want to raise the minimum language version safely
- Compiler or linter warnings about deprecation have piled up

## What it can access

- Reads and edits source files in your project
- Runs your test, build and lint commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/legacy-modernizer/
