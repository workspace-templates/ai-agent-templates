# Notebook Reviewer

**Subagent** · Data and AI · python

Read-only subagent that audits Jupyter notebooks for hidden state, data leakage and cells that cannot be reproduced.

## Install

```bash
npx workspacetemplates add notebook-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/notebook-reviewer.md](claude-code/.claude/agents/notebook-reviewer.md) | `.claude/agents/notebook-reviewer.md` |
| Codex | [codex/.codex/agents/notebook-reviewer.toml](codex/.codex/agents/notebook-reviewer.toml) | `.codex/agents/notebook-reviewer.toml` |
| Cursor | [cursor/.cursor/agents/notebook-reviewer.md](cursor/.cursor/agents/notebook-reviewer.md) | `.cursor/agents/notebook-reviewer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/notebook-reviewer.md](gemini-cli/.gemini/agents/notebook-reviewer.md) | `.gemini/agents/notebook-reviewer.md` |
| GitHub Copilot | [copilot/.github/agents/notebook-reviewer.agent.md](copilot/.github/agents/notebook-reviewer.agent.md) | `.github/agents/notebook-reviewer.agent.md` |

## What it does

A notebook that works on your laptop often fails for everyone else, because cells ran out of order, variables linger from deleted code, or a path points at a private folder. This subagent reads the notebook as a script and finds those traps.

It also looks for the mistakes that quietly inflate results, such as fitting a scaler before the split. It never edits the notebook; it lists what to change and why.

## Use it when

- Before sharing a notebook with a teammate or committing it
- A result cannot be reproduced after restarting the kernel
- Reviewing a notebook that reports suspiciously good accuracy
- Turning exploratory work into a pipeline and needing a list of problems

## What it can access

- Reads notebook files and nearby project files
- Cannot run code or edit anything

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/notebook-reviewer/
