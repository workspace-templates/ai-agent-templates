# Unit Test Writing

**Skill** · Testing

Writes focused unit tests for a function or class, covering boundaries and failures without testing mocks. Use it when code lacks tests or a bug needs one.

## Install

```bash
npx workspacetemplates add unit-test-writing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/unit-test-writing/SKILL.md](claude-code/.claude/skills/unit-test-writing/SKILL.md) | `.claude/skills/unit-test-writing/SKILL.md` |
| Codex | [codex/.agents/skills/unit-test-writing/SKILL.md](codex/.agents/skills/unit-test-writing/SKILL.md) | `.agents/skills/unit-test-writing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/unit-test-writing/SKILL.md](cursor/.cursor/skills/unit-test-writing/SKILL.md) | `.cursor/skills/unit-test-writing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/unit-test-writing/SKILL.md](gemini-cli/.gemini/skills/unit-test-writing/SKILL.md) | `.gemini/skills/unit-test-writing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/unit-test-writing/SKILL.md](copilot/.github/skills/unit-test-writing/SKILL.md) | `.github/skills/unit-test-writing/SKILL.md` |

## What it does

Generated tests tend to repeat the implementation, mock everything and pass no matter what the code does. This skill starts from the behavior a caller depends on, picks the inputs that matter, and checks that each test can actually fail.

You get a few readable tests per function, named after the behavior, in the style your project already uses.

## Use it when

- A new function has no tests yet
- A bug was fixed and needs a regression test
- Coverage is high but bugs still slip through
- You inherit a module and want its behavior pinned down

## What it can access

- Reads files in your project
- Creates or edits test files and runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/unit-test-writing/
