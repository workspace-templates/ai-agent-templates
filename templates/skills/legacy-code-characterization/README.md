# Legacy Code Characterization

**Skill** · Code quality

Records what untested legacy code actually does by writing characterization tests first, so you can change or refactor it without guessing at behavior.

## Install

```bash
npx workspacetemplates add legacy-code-characterization
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/legacy-code-characterization/SKILL.md](claude-code/.claude/skills/legacy-code-characterization/SKILL.md) | `.claude/skills/legacy-code-characterization/SKILL.md` |
| Codex | [codex/.agents/skills/legacy-code-characterization/SKILL.md](codex/.agents/skills/legacy-code-characterization/SKILL.md) | `.agents/skills/legacy-code-characterization/SKILL.md` |
| Cursor | [cursor/.cursor/skills/legacy-code-characterization/SKILL.md](cursor/.cursor/skills/legacy-code-characterization/SKILL.md) | `.cursor/skills/legacy-code-characterization/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/legacy-code-characterization/SKILL.md](gemini-cli/.gemini/skills/legacy-code-characterization/SKILL.md) | `.gemini/skills/legacy-code-characterization/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/legacy-code-characterization/SKILL.md](copilot/.github/skills/legacy-code-characterization/SKILL.md) | `.github/skills/legacy-code-characterization/SKILL.md` |

## What it does

You cannot refactor code if you do not know what it does today, and old code rarely has a spec. A characterization test asks the code itself: it runs real inputs, records the output and fails when that output changes.

This skill builds that safety net around one function or module before any edit. The tests describe current behavior, bugs included, and the bugs are listed separately so you decide what to fix.

## Use it when

- You must change a function that has no tests and no owner
- A refactor is planned for code you do not fully understand
- Behavior depends on odd data formats found only in production
- You want to upgrade a framework under code nobody dares to touch

## What it can access

- Reads source files, fixtures and logs you point to
- Adds test files and small seams
- Runs your test command with coverage

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/legacy-code-characterization/
