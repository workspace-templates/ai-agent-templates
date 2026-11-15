# Test Coverage Gap Analysis

**Skill** · Testing

Reads the coverage report, ranks uncovered branches by risk and writes meaningful tests for the top gaps instead of chasing a percentage.

## Install

```bash
npx workspacetemplates add test-coverage-gap-analysis
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/test-coverage-gap-analysis/SKILL.md](claude-code/.claude/skills/test-coverage-gap-analysis/SKILL.md) | `.claude/skills/test-coverage-gap-analysis/SKILL.md` |
| Codex | [codex/.agents/skills/test-coverage-gap-analysis/SKILL.md](codex/.agents/skills/test-coverage-gap-analysis/SKILL.md) | `.agents/skills/test-coverage-gap-analysis/SKILL.md` |
| Cursor | [cursor/.cursor/skills/test-coverage-gap-analysis/SKILL.md](cursor/.cursor/skills/test-coverage-gap-analysis/SKILL.md) | `.cursor/skills/test-coverage-gap-analysis/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/test-coverage-gap-analysis/SKILL.md](gemini-cli/.gemini/skills/test-coverage-gap-analysis/SKILL.md) | `.gemini/skills/test-coverage-gap-analysis/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/test-coverage-gap-analysis/SKILL.md](copilot/.github/skills/test-coverage-gap-analysis/SKILL.md) | `.github/skills/test-coverage-gap-analysis/SKILL.md` |

## What it does

A coverage number says how much code ran, not how much is protected. This skill points the agent at the lines that matter: error paths, money, permissions and data changes that no test touches.

It ranks gaps by blast radius and change frequency, writes tests that assert behavior, and reports the result in branches covered rather than a vanity total.

## Use it when

- You inherit a codebase and need to know where tests are thin
- The coverage target is 80 percent and someone proposes filler tests
- Before touching a risky module with little protection
- A bug shipped from code that showed as covered

## What it can access

- Reads source, test and coverage files
- Runs your test suite with coverage and adds test files

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/test-coverage-gap-analysis/
