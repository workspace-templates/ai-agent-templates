# Plan Tests

**Command** · Testing

Produces a test plan for a feature: the cases, the edge conditions, the data needed and which level each test belongs to.

## Install

```bash
npx workspacetemplates add plan-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/plan-tests.md](claude-code/.claude/commands/plan-tests.md) | `.claude/commands/plan-tests.md` |
| Codex | [codex/home/.codex/prompts/plan-tests.md](codex/home/.codex/prompts/plan-tests.md) | `~/.codex/prompts/plan-tests.md` |
| Cursor | [cursor/.cursor/skills/plan-tests/SKILL.md](cursor/.cursor/skills/plan-tests/SKILL.md) | `.cursor/skills/plan-tests/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/plan-tests.toml](gemini-cli/.gemini/commands/plan-tests.toml) | `.gemini/commands/plan-tests.toml` |
| GitHub Copilot | [copilot/.github/skills/plan-tests/SKILL.md](copilot/.github/skills/plan-tests/SKILL.md) | `.github/skills/plan-tests/SKILL.md` |

## What it does

Writing tests without a plan leads to ten copies of the happy path. This command reads the feature and lists what could go wrong, then sorts each case into unit, integration or end-to-end so effort lands in the cheapest layer that can catch it.

The plan is a document, not code. You review it, cut what you do not want and then ask for the tests.

## Use it when

- At the start of a feature, before coding
- When a reviewer asks how you will test something
- Before handing a feature to QA
- When a module has no tests and you need a map

## What it can access

- Reads source, specs and existing tests
- Writes nothing to disk unless you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/plan-tests/
