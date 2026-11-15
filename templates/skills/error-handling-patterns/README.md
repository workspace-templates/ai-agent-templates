# Error Handling Patterns

**Skill** · Code quality

Designs consistent error types and propagation, and rewrites swallowed or blindly rethrown errors so failures stay visible and messages help the user.

## Install

```bash
npx workspacetemplates add error-handling-patterns
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/error-handling-patterns/SKILL.md](claude-code/.claude/skills/error-handling-patterns/SKILL.md) | `.claude/skills/error-handling-patterns/SKILL.md` |
| Codex | [codex/.agents/skills/error-handling-patterns/SKILL.md](codex/.agents/skills/error-handling-patterns/SKILL.md) | `.agents/skills/error-handling-patterns/SKILL.md` |
| Cursor | [cursor/.cursor/skills/error-handling-patterns/SKILL.md](cursor/.cursor/skills/error-handling-patterns/SKILL.md) | `.cursor/skills/error-handling-patterns/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/error-handling-patterns/SKILL.md](gemini-cli/.gemini/skills/error-handling-patterns/SKILL.md) | `.gemini/skills/error-handling-patterns/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/error-handling-patterns/SKILL.md](copilot/.github/skills/error-handling-patterns/SKILL.md) | `.github/skills/error-handling-patterns/SKILL.md` |

## What it does

The two common failures are the empty catch block that hides a bug and the rethrow that loses the context needed to find it. This skill sets one policy per layer and applies it across the code you point it at.

Low-level code reports what failed with its cause attached. Boundaries translate that into a stable error type, and only the outermost layer decides what the user sees.

## Use it when

- Logs say "something went wrong" with no cause
- You find catch blocks that ignore the error
- Users see raw exception text or stack traces
- Every module invents its own error shape

## What it can access

- Reads source files
- Edits code and adds tests
- Runs your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/error-handling-patterns/
