# Cyclomatic Complexity Reduction

**Skill** · Code quality

Flattens deeply nested conditionals with guard clauses, lookup tables and extraction, and proves with tests that the behavior did not change.

## Install

```bash
npx workspacetemplates add cyclomatic-complexity-reduction
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/cyclomatic-complexity-reduction/SKILL.md](claude-code/.claude/skills/cyclomatic-complexity-reduction/SKILL.md) | `.claude/skills/cyclomatic-complexity-reduction/SKILL.md` |
| Codex | [codex/.agents/skills/cyclomatic-complexity-reduction/SKILL.md](codex/.agents/skills/cyclomatic-complexity-reduction/SKILL.md) | `.agents/skills/cyclomatic-complexity-reduction/SKILL.md` |
| Cursor | [cursor/.cursor/skills/cyclomatic-complexity-reduction/SKILL.md](cursor/.cursor/skills/cyclomatic-complexity-reduction/SKILL.md) | `.cursor/skills/cyclomatic-complexity-reduction/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/cyclomatic-complexity-reduction/SKILL.md](gemini-cli/.gemini/skills/cyclomatic-complexity-reduction/SKILL.md) | `.gemini/skills/cyclomatic-complexity-reduction/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/cyclomatic-complexity-reduction/SKILL.md](copilot/.github/skills/cyclomatic-complexity-reduction/SKILL.md) | `.github/skills/cyclomatic-complexity-reduction/SKILL.md` |

## What it does

A function with six levels of if and else is not only ugly, it hides which branch handles which case. This skill reduces nesting step by step, running the tests between steps so a refactoring never turns into a rewrite.

It measures complexity before and after with a tool already in your project when one exists, and with a manual count of branches when not.

## Use it when

- A function has more than four levels of indentation
- A linter reports complexity above your limit
- You need to add a case to a conditional and cannot tell where it belongs
- A switch or if-chain repeats in several places

## What it can access

- Reads and edits source files
- Runs your test command and an optional complexity linter

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/cyclomatic-complexity-reduction/
