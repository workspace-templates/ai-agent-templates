# Refactoring Planner

**Subagent** · Code quality

Read-only subagent that maps a tangled module and writes an ordered, low-risk refactoring plan with a test checkpoint between every step.

## Install

```bash
npx workspacetemplates add refactoring-planner
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/refactoring-planner.md](claude-code/.claude/agents/refactoring-planner.md) | `.claude/agents/refactoring-planner.md` |
| Codex | [codex/.codex/agents/refactoring-planner.toml](codex/.codex/agents/refactoring-planner.toml) | `.codex/agents/refactoring-planner.toml` |
| Cursor | [cursor/.cursor/agents/refactoring-planner.md](cursor/.cursor/agents/refactoring-planner.md) | `.cursor/agents/refactoring-planner.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/refactoring-planner.md](gemini-cli/.gemini/agents/refactoring-planner.md) | `.gemini/agents/refactoring-planner.md` |
| GitHub Copilot | [copilot/.github/agents/refactoring-planner.agent.md](copilot/.github/agents/refactoring-planner.agent.md) | `.github/agents/refactoring-planner.agent.md` |

## What it does

Big refactors fail when they start with editing. This subagent starts with understanding: who calls the module, what it depends on, which parts are tested and which parts change most often. Then it writes a sequence of small steps.

The plan is the output. Each step is independently shippable, says what it proves, and names the check to run before moving on. You can hand the steps to a person or to an editing agent.

## Use it when

- A module is too scary to touch and you need a safe path through it
- You are splitting a large file or class and want the order worked out
- A refactor keeps getting abandoned halfway
- You need to estimate the effort before committing to it

## What it can access

- Reads source files and tests
- Runs read-only git commands to see history

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/refactoring-planner/
