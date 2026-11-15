# Integration Testing

**Skill** · Testing

Writes integration tests that use real databases and services, each with isolated data and fixed setup, so they are trustworthy and repeatable.

## Install

```bash
npx workspacetemplates add integration-testing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/integration-testing/SKILL.md](claude-code/.claude/skills/integration-testing/SKILL.md) | `.claude/skills/integration-testing/SKILL.md` |
| Codex | [codex/.agents/skills/integration-testing/SKILL.md](codex/.agents/skills/integration-testing/SKILL.md) | `.agents/skills/integration-testing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/integration-testing/SKILL.md](cursor/.cursor/skills/integration-testing/SKILL.md) | `.cursor/skills/integration-testing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/integration-testing/SKILL.md](gemini-cli/.gemini/skills/integration-testing/SKILL.md) | `.gemini/skills/integration-testing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/integration-testing/SKILL.md](copilot/.github/skills/integration-testing/SKILL.md) | `.github/skills/integration-testing/SKILL.md` |

## What it does

Unit tests with every collaborator mocked cannot tell you whether the SQL runs, the migration applied or the HTTP client sends what the other side expects. Integration tests cover that gap, as long as they are deterministic.

This skill builds them around real dependencies, usually in containers, and gives each test its own data so order never matters. It also keeps the suite fast enough that people still run it before pushing.

## Use it when

- A bug slipped past mocked tests and showed up at the database
- You add a repository, queue consumer or API client
- Tests pass alone but fail when run together
- You are setting up a CI database for the first time

## What it can access

- Reads and edits test files and test configuration
- Starts local containers through Docker and runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/integration-testing/
