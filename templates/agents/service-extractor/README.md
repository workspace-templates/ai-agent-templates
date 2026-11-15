# Service Extractor

**Subagent** · Backend and APIs

Subagent that moves business logic out of fat controllers into service classes in small steps, keeping the tests green after each move.

## Install

```bash
npx workspacetemplates add service-extractor
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/service-extractor.md](claude-code/.claude/agents/service-extractor.md) | `.claude/agents/service-extractor.md` |
| Codex | [codex/.codex/agents/service-extractor.toml](codex/.codex/agents/service-extractor.toml) | `.codex/agents/service-extractor.toml` |
| Cursor | [cursor/.cursor/agents/service-extractor.md](cursor/.cursor/agents/service-extractor.md) | `.cursor/agents/service-extractor.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/service-extractor.md](gemini-cli/.gemini/agents/service-extractor.md) | `.gemini/agents/service-extractor.md` |
| GitHub Copilot | [copilot/.github/agents/service-extractor.agent.md](copilot/.github/agents/service-extractor.agent.md) | `.github/agents/service-extractor.agent.md` |

## What it does

Controllers that parse input, apply business rules, talk to the database and format output are hard to test and harder to reuse. This subagent pulls the rules out into services one slice at a time, and runs the tests between slices.

It does not redesign anything. The behavior, the routes and the public responses stay exactly as they were. If there are no tests covering a slice, it writes characterization tests first.

## Use it when

- A controller action is hundreds of lines long
- The same business rule is copy-pasted in a controller and a job
- You want to test pricing or eligibility rules without HTTP
- You plan to expose the same logic through an API, CLI and queue

## What it can access

- Reads controllers, models and tests
- Creates service files and edits controllers and tests
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/service-extractor/
