# Pull Request Reviewer

**Skill** · Code quality

Reviews the diff of a branch or pull request for real bugs, checks each finding against the code and returns a short list ranked by severity.

## Install

```bash
npx workspacetemplates add pull-request-reviewer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/pull-request-reviewer/SKILL.md](claude-code/.claude/skills/pull-request-reviewer/SKILL.md) | `.claude/skills/pull-request-reviewer/SKILL.md` |
| Codex | [codex/.agents/skills/pull-request-reviewer/SKILL.md](codex/.agents/skills/pull-request-reviewer/SKILL.md) | `.agents/skills/pull-request-reviewer/SKILL.md` |
| Cursor | [cursor/.cursor/skills/pull-request-reviewer/SKILL.md](cursor/.cursor/skills/pull-request-reviewer/SKILL.md) | `.cursor/skills/pull-request-reviewer/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/pull-request-reviewer/SKILL.md](gemini-cli/.gemini/skills/pull-request-reviewer/SKILL.md) | `.gemini/skills/pull-request-reviewer/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/pull-request-reviewer/SKILL.md](copilot/.github/skills/pull-request-reviewer/SKILL.md) | `.github/skills/pull-request-reviewer/SKILL.md` |

## What it does

Most automated reviews bury two real problems under twenty style nits. This skill keeps the agent on the diff, makes it read the code around each change and drop anything it cannot back with a concrete failure, so what reaches you is short and worth reading.

Each finding comes with the file and line, what breaks, and the input or state that triggers it. Style, naming and formatting are left to your linter.

## Use it when

- Before you merge a branch or open a pull request
- When a teammate asks for a second pair of eyes on a change
- After a large refactor, to catch callers the change broke
- When you want findings you can act on, not a style lecture

## What it can access

- Reads files in your project
- Runs read-only git commands such as git diff and git log

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/pull-request-reviewer/
