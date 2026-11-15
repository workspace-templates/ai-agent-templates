# Task Planner

**Subagent** · Workflow

Read-only subagent that turns a goal into an ordered, checked implementation plan with the exact files to touch and a way to verify each step.

## Install

```bash
npx workspacetemplates add task-planner
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/task-planner.md](claude-code/.claude/agents/task-planner.md) | `.claude/agents/task-planner.md` |
| Codex | [codex/.codex/agents/task-planner.toml](codex/.codex/agents/task-planner.toml) | `.codex/agents/task-planner.toml` |
| Cursor | [cursor/.cursor/agents/task-planner.md](cursor/.cursor/agents/task-planner.md) | `.cursor/agents/task-planner.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/task-planner.md](gemini-cli/.gemini/agents/task-planner.md) | `.gemini/agents/task-planner.md` |
| GitHub Copilot | [copilot/.github/agents/task-planner.agent.md](copilot/.github/agents/task-planner.agent.md) | `.github/agents/task-planner.agent.md` |

## What it does

Starting to code before the plan is clear is how a one-day task becomes a week. This subagent reads the repo, finds where the change belongs, and hands back a short sequence of steps, each small enough to finish and test on its own.

Every file in the plan has been opened and every function it names exists. Open questions and risks are listed up front so you can decide before work begins.

## Use it when

- You have a feature request and no idea where to begin in this codebase
- A change spans several modules and the order matters
- You want a plan to review before an agent starts editing
- A teammate needs a clear handoff for a task

## What it can access

- Reads your files
- Runs read-only searches

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/task-planner/
