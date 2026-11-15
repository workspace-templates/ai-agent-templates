# Systematic Debugging

**Skill** · Code quality

Finds the root cause of a bug by reproducing it, isolating it and testing hypotheses before any fix. Use it when something fails and the cause is unclear.

## Install

```bash
npx workspacetemplates add systematic-debugging
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/systematic-debugging/SKILL.md](claude-code/.claude/skills/systematic-debugging/SKILL.md) | `.claude/skills/systematic-debugging/SKILL.md` |
| Codex | [codex/.agents/skills/systematic-debugging/SKILL.md](codex/.agents/skills/systematic-debugging/SKILL.md) | `.agents/skills/systematic-debugging/SKILL.md` |
| Cursor | [cursor/.cursor/skills/systematic-debugging/SKILL.md](cursor/.cursor/skills/systematic-debugging/SKILL.md) | `.cursor/skills/systematic-debugging/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/systematic-debugging/SKILL.md](gemini-cli/.gemini/skills/systematic-debugging/SKILL.md) | `.gemini/skills/systematic-debugging/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/systematic-debugging/SKILL.md](copilot/.github/skills/systematic-debugging/SKILL.md) | `.github/skills/systematic-debugging/SKILL.md` |

## What it does

Agents often jump from an error message straight to an edit, and the edit hides the symptom while the cause stays. This skill forces a different order: make the failure repeatable, shrink it, name a cause, and prove that cause before touching the code.

The fix that follows is small and comes with a regression test that failed first. If the evidence points somewhere else than the first guess, the agent says so and changes course.

## Use it when

- A test fails and the stack trace does not explain why
- A bug appears only sometimes, or only in production
- Someone proposes a fix that you suspect treats the symptom
- You have been changing code for an hour and the bug is still there

## What it can access

- Reads files in your project
- Runs your test and build commands, and read-only git commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/systematic-debugging/
