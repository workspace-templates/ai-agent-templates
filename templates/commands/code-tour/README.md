# Repository Code Tour

**Command** · Documentation

Gives a new developer a guided tour of the repository: layout, entry points, request flow, how to run it and where the risky parts are.

## Install

```bash
npx workspacetemplates add code-tour
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/code-tour.md](claude-code/.claude/commands/code-tour.md) | `.claude/commands/code-tour.md` |
| Codex | [codex/home/.codex/prompts/code-tour.md](codex/home/.codex/prompts/code-tour.md) | `~/.codex/prompts/code-tour.md` |
| Cursor | [cursor/.cursor/skills/code-tour/SKILL.md](cursor/.cursor/skills/code-tour/SKILL.md) | `.cursor/skills/code-tour/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/code-tour.toml](gemini-cli/.gemini/commands/code-tour.toml) | `.gemini/commands/code-tour.toml` |
| GitHub Copilot | [copilot/.github/skills/code-tour/SKILL.md](copilot/.github/skills/code-tour/SKILL.md) | `.github/skills/code-tour/SKILL.md` |

## What it does

A new teammate loses days finding the front door of a codebase. This command explores the repository like a careful newcomer and writes a tour in the order you would want to learn it.

It follows one real path through the system, from entry point to data store, instead of listing folders. It also records commands it actually ran, so the setup steps are tested.

## Use it when

- A new developer starts on Monday
- You return to a project after a long break
- You are evaluating an open source repository before using it
- Onboarding docs are missing or out of date

## What it can access

- Reads files and git history
- Runs safe setup and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/code-tour/
