# Go Table Driven Tests

**Skill** · Testing · go

Writes idiomatic table-driven Go tests with named subtests, golden files and race detector runs, and refactors repetitive tests into tables.

## Install

```bash
npx workspacetemplates add go-table-driven-tests
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/go-table-driven-tests/SKILL.md](claude-code/.claude/skills/go-table-driven-tests/SKILL.md) | `.claude/skills/go-table-driven-tests/SKILL.md` |
| Codex | [codex/.agents/skills/go-table-driven-tests/SKILL.md](codex/.agents/skills/go-table-driven-tests/SKILL.md) | `.agents/skills/go-table-driven-tests/SKILL.md` |
| Cursor | [cursor/.cursor/skills/go-table-driven-tests/SKILL.md](cursor/.cursor/skills/go-table-driven-tests/SKILL.md) | `.cursor/skills/go-table-driven-tests/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/go-table-driven-tests/SKILL.md](gemini-cli/.gemini/skills/go-table-driven-tests/SKILL.md) | `.gemini/skills/go-table-driven-tests/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/go-table-driven-tests/SKILL.md](copilot/.github/skills/go-table-driven-tests/SKILL.md) | `.github/skills/go-table-driven-tests/SKILL.md` |

## What it does

Go has a strong testing idiom: a slice of cases, a loop and a subtest per row. Done well, a new case costs one line. Done badly, it hides which case failed. This skill teaches the agent the version that reads and fails clearly.

It also covers golden files for large outputs, helper functions that mark themselves, parallel subtests without the loop variable trap, and running everything with the race detector.

## Use it when

- You are adding tests to a Go package
- A test file repeats the same arrange and assert block ten times
- Output is large and you need a golden file workflow
- Concurrency code needs race detection in the test run

## What it can access

- Reads Go source and test files
- Edits test files and testdata, and runs go test with the race detector

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/go-table-driven-tests/
