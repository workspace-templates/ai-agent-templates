# Test Data Builder

**Subagent** · Testing

Subagent that creates factories and builders for test data so tests state only what matters and stop copying huge fixture blobs.

## Install

```bash
npx workspacetemplates add test-data-builder
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/test-data-builder.md](claude-code/.claude/agents/test-data-builder.md) | `.claude/agents/test-data-builder.md` |
| Codex | [codex/.codex/agents/test-data-builder.toml](codex/.codex/agents/test-data-builder.toml) | `.codex/agents/test-data-builder.toml` |
| Cursor | [cursor/.cursor/agents/test-data-builder.md](cursor/.cursor/agents/test-data-builder.md) | `.cursor/agents/test-data-builder.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/test-data-builder.md](gemini-cli/.gemini/agents/test-data-builder.md) | `.gemini/agents/test-data-builder.md` |
| GitHub Copilot | [copilot/.github/agents/test-data-builder.agent.md](copilot/.github/agents/test-data-builder.agent.md) | `.github/agents/test-data-builder.agent.md` |

## What it does

Tests with forty-line fixtures hide the one field that matters. This subagent finds the repeated setup in your suite and replaces it with small builders that supply sensible defaults and let each test override only what it cares about.

It keeps the change mechanical and safe: build the helper, convert a few tests, run them, then continue.

## Use it when

- The same large object literal appears in dozens of tests
- Adding a required field breaks hundreds of tests
- Tests are hard to read because setup drowns the assertion
- You need valid-by-default records with unique values

## What it can access

- Reads models, schemas and the test suite
- Edits test helpers and test files, runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/test-data-builder/
