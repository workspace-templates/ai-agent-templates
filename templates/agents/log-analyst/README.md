# Log Analyst

**Subagent** · DevOps and cloud

Read-only subagent that sifts large log files for error clusters, first occurrences and rate changes without loading the whole file.

## Install

```bash
npx workspacetemplates add log-analyst
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/log-analyst.md](claude-code/.claude/agents/log-analyst.md) | `.claude/agents/log-analyst.md` |
| Codex | [codex/.codex/agents/log-analyst.toml](codex/.codex/agents/log-analyst.toml) | `.codex/agents/log-analyst.toml` |
| Cursor | [cursor/.cursor/agents/log-analyst.md](cursor/.cursor/agents/log-analyst.md) | `.cursor/agents/log-analyst.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/log-analyst.md](gemini-cli/.gemini/agents/log-analyst.md) | `.gemini/agents/log-analyst.md` |
| GitHub Copilot | [copilot/.github/agents/log-analyst.agent.md](copilot/.github/agents/log-analyst.agent.md) | `.github/agents/log-analyst.agent.md` |

## What it does

A multi-gigabyte log does not fit in anyone's head, or in a context window. This subagent works with grep, counting and sampling so it can group the noise into a few distinct error signatures and tell you when each one began.

It reports counts, first and last times and a representative line for every cluster, and points out which ones changed around the moment you care about. It never modifies a log.

## Use it when

- A log file is too large to read and you need the real errors in it
- You want to know when a specific error first appeared
- Error volume spiked and you need to see which messages grew
- You need a summary of a day of logs for a ticket

## What it can access

- Reads log files you point it at
- Runs read-only shell tools such as grep, awk and jq

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/log-analyst/
