# API Compatibility Checker

**Subagent** · Code quality

Read-only subagent that compares a change against your public API and flags breaking changes, each with a migration note.

## Install

```bash
npx workspacetemplates add api-compatibility-checker
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/api-compatibility-checker.md](claude-code/.claude/agents/api-compatibility-checker.md) | `.claude/agents/api-compatibility-checker.md` |
| Codex | [codex/.codex/agents/api-compatibility-checker.toml](codex/.codex/agents/api-compatibility-checker.toml) | `.codex/agents/api-compatibility-checker.toml` |
| Cursor | [cursor/.cursor/agents/api-compatibility-checker.md](cursor/.cursor/agents/api-compatibility-checker.md) | `.cursor/agents/api-compatibility-checker.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/api-compatibility-checker.md](gemini-cli/.gemini/agents/api-compatibility-checker.md) | `.gemini/agents/api-compatibility-checker.md` |
| GitHub Copilot | [copilot/.github/agents/api-compatibility-checker.agent.md](copilot/.github/agents/api-compatibility-checker.agent.md) | `.github/agents/api-compatibility-checker.agent.md` |

## What it does

Breaking a public API rarely looks dramatic in a diff. A renamed parameter, a narrower type or a new required field is enough to break every consumer. This subagent compares the base and the change, works out what outside code can see, and lists what would stop compiling or behaving the same.

Each finding comes with a migration note you can paste into a changelog. Nothing is edited.

## Use it when

- You maintain a library or SDK and are preparing a release
- A backend change touches request or response shapes
- You need to decide between a patch, minor and major version
- Mobile clients cannot be force-updated and must stay compatible

## What it can access

- Reads files in your project
- Runs read-only git commands such as git diff and git show

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/api-compatibility-checker/
