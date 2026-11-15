# Memory Leak Hunter

**Subagent** · Code quality

Read-only subagent that traces listeners, caches and long-lived references that grow without bound and explains how to release them.

## Install

```bash
npx workspacetemplates add memory-leak-hunter
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/memory-leak-hunter.md](claude-code/.claude/agents/memory-leak-hunter.md) | `.claude/agents/memory-leak-hunter.md` |
| Codex | [codex/.codex/agents/memory-leak-hunter.toml](codex/.codex/agents/memory-leak-hunter.toml) | `.codex/agents/memory-leak-hunter.toml` |
| Cursor | [cursor/.cursor/agents/memory-leak-hunter.md](cursor/.cursor/agents/memory-leak-hunter.md) | `.cursor/agents/memory-leak-hunter.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/memory-leak-hunter.md](gemini-cli/.gemini/agents/memory-leak-hunter.md) | `.gemini/agents/memory-leak-hunter.md` |
| GitHub Copilot | [copilot/.github/agents/memory-leak-hunter.agent.md](copilot/.github/agents/memory-leak-hunter.agent.md) | `.github/agents/memory-leak-hunter.agent.md` |

## What it does

A memory leak is usually a reference that outlives the thing it was meant to serve. This subagent starts from what is held for the life of the process, such as module-level maps, event emitters, timers and singletons, and asks what is added to each and when it is ever removed.

It reads code only. The report ranks suspects by how fast they can grow and describes how to confirm each with a heap snapshot or a counter.

## Use it when

- A server needs a restart every few days as memory climbs
- A browser tab slows after navigating between views many times
- A worker is killed for exceeding its memory limit
- You added a cache and want to check it has a bound

## What it can access

- Reads files in your project
- Runs read-only commands such as git log

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/memory-leak-hunter/
