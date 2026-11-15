# Codebase Mapper

**Subagent** · Workflow

Read-only subagent that maps an unfamiliar repo: modules, entry points, data flow, and where to start reading, in a one-page guide.

## Install

```bash
npx workspacetemplates add codebase-mapper
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/codebase-mapper.md](claude-code/.claude/agents/codebase-mapper.md) | `.claude/agents/codebase-mapper.md` |
| Codex | [codex/.codex/agents/codebase-mapper.toml](codex/.codex/agents/codebase-mapper.toml) | `.codex/agents/codebase-mapper.toml` |
| Cursor | [cursor/.cursor/agents/codebase-mapper.md](cursor/.cursor/agents/codebase-mapper.md) | `.cursor/agents/codebase-mapper.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/codebase-mapper.md](gemini-cli/.gemini/agents/codebase-mapper.md) | `.gemini/agents/codebase-mapper.md` |
| GitHub Copilot | [copilot/.github/agents/codebase-mapper.agent.md](copilot/.github/agents/codebase-mapper.agent.md) | `.github/agents/codebase-mapper.agent.md` |

## What it does

Joining a project means weeks of guessing which folder matters. This subagent reads the repo structure, manifests, and entry points, then writes a map that shows what the parts are, how a request or job travels through them, and where the risky areas sit.

The map is based on files it opened, not on folder names alone, and it marks anything it could not confirm. Save it as the first page of your onboarding notes.

## Use it when

- You just cloned a repo you have never seen
- You are onboarding a new teammate and want a starting guide
- You inherit a project with no architecture document
- You want to know what depends on a module before changing it

## What it can access

- Reads files and manifests
- Runs read-only commands such as git log and directory listings

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/codebase-mapper/
