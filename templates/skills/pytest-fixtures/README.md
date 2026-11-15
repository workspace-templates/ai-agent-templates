# pytest Fixtures

**Skill** · Testing · python

Designs pytest fixtures, parametrization and conftest layout so Python suites run fast, read clearly and do not share hidden state.

## Install

```bash
npx workspacetemplates add pytest-fixtures
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/pytest-fixtures/SKILL.md](claude-code/.claude/skills/pytest-fixtures/SKILL.md) | `.claude/skills/pytest-fixtures/SKILL.md` |
| Codex | [codex/.agents/skills/pytest-fixtures/SKILL.md](codex/.agents/skills/pytest-fixtures/SKILL.md) | `.agents/skills/pytest-fixtures/SKILL.md` |
| Cursor | [cursor/.cursor/skills/pytest-fixtures/SKILL.md](cursor/.cursor/skills/pytest-fixtures/SKILL.md) | `.cursor/skills/pytest-fixtures/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/pytest-fixtures/SKILL.md](gemini-cli/.gemini/skills/pytest-fixtures/SKILL.md) | `.gemini/skills/pytest-fixtures/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/pytest-fixtures/SKILL.md](copilot/.github/skills/pytest-fixtures/SKILL.md) | `.github/skills/pytest-fixtures/SKILL.md` |

## What it does

Large pytest suites often grow giant conftest files, autouse fixtures nobody remembers and fixtures that quietly depend on each other. This skill teaches the agent to place and scope fixtures deliberately.

It covers scope choices, yield cleanup, factory fixtures, parametrize with ids, and monkeypatch, plus a habit of reading a test and seeing what it needs from its arguments.

## Use it when

- A Python suite is slow because every test rebuilds a database
- conftest.py has hundreds of lines and nobody knows what is used
- Several tests repeat the same setup with tiny differences
- You need to test many input cases without copy-pasting

## What it can access

- Reads Python source and test files
- Edits tests and conftest.py, and runs pytest

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pytest-fixtures/
