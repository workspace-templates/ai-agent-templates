# Incident Investigator

**Subagent** · DevOps and cloud

Read-only subagent that rebuilds an incident timeline from logs, deploys and commits, then ranks the likely causes with evidence.

## Install

```bash
npx workspacetemplates add incident-investigator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/incident-investigator.md](claude-code/.claude/agents/incident-investigator.md) | `.claude/agents/incident-investigator.md` |
| Codex | [codex/.codex/agents/incident-investigator.toml](codex/.codex/agents/incident-investigator.toml) | `.codex/agents/incident-investigator.toml` |
| Cursor | [cursor/.cursor/agents/incident-investigator.md](cursor/.cursor/agents/incident-investigator.md) | `.cursor/agents/incident-investigator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/incident-investigator.md](gemini-cli/.gemini/agents/incident-investigator.md) | `.gemini/agents/incident-investigator.md` |
| GitHub Copilot | [copilot/.github/agents/incident-investigator.agent.md](copilot/.github/agents/incident-investigator.agent.md) | `.github/agents/incident-investigator.agent.md` |

## What it does

During an outage, facts arrive in pieces: an alert time, a log line, someone remembering a deploy. This subagent lines them up on one clock, finds what changed just before things went wrong, and separates the trigger from the underlying cause.

It reads logs, git history and config in your repository and changes nothing. The result is a timeline and a short list of causes, each with the evidence for and against it, ready to paste into a postmortem.

## Use it when

- Production had an outage and you need to know what changed before it
- You are writing a postmortem and need a verified timeline
- Errors started at a specific minute and the cause is unclear
- Several teams deployed on the same day and each blames another

## What it can access

- Reads log files, configuration and source in the project
- Runs read-only git commands on history

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/incident-investigator/
