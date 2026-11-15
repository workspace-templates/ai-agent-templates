# Library Evaluator

**Subagent** · Workflow

Read-only subagent that compares candidate libraries against your project needs and recommends one, with risks and a switching cost estimate.

## Install

```bash
npx workspacetemplates add library-evaluator
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/library-evaluator.md](claude-code/.claude/agents/library-evaluator.md) | `.claude/agents/library-evaluator.md` |
| Codex | [codex/.codex/agents/library-evaluator.toml](codex/.codex/agents/library-evaluator.toml) | `.codex/agents/library-evaluator.toml` |
| Cursor | [cursor/.cursor/agents/library-evaluator.md](cursor/.cursor/agents/library-evaluator.md) | `.cursor/agents/library-evaluator.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/library-evaluator.md](gemini-cli/.gemini/agents/library-evaluator.md) | `.gemini/agents/library-evaluator.md` |
| GitHub Copilot | [copilot/.github/agents/library-evaluator.agent.md](copilot/.github/agents/library-evaluator.agent.md) | `.github/agents/library-evaluator.agent.md` |

## What it does

Picking a dependency by star count is a gamble you live with for years. This subagent takes two to four candidates and a list of what your project needs, then checks each on fit, maintenance, size, license, and how hard it is to leave.

It looks at your code to see what you would actually use, and at each package for release cadence and open issues. You get a recommendation with the reasons it could be wrong.

## Use it when

- You must choose a date, form, state, or HTTP library for a new feature
- The library you use is unmaintained and you need a replacement
- A teammate proposes a new dependency and you want a fair comparison
- You want to know if you can drop a dependency and use the standard library

## What it can access

- Reads manifests and code that would use the library
- Fetches registry and documentation pages

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/library-evaluator/
