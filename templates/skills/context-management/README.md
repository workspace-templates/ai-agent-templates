# Context Management

**Skill** · Workflow

Keeps long agent sessions on track with a running notes file, checkpoints and tightly scoped reads, so quality does not fade as the context fills.

## Install

```bash
npx workspacetemplates add context-management
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/context-management/SKILL.md](claude-code/.claude/skills/context-management/SKILL.md) | `.claude/skills/context-management/SKILL.md` |
| Codex | [codex/.agents/skills/context-management/SKILL.md](codex/.agents/skills/context-management/SKILL.md) | `.agents/skills/context-management/SKILL.md` |
| Cursor | [cursor/.cursor/skills/context-management/SKILL.md](cursor/.cursor/skills/context-management/SKILL.md) | `.cursor/skills/context-management/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/context-management/SKILL.md](gemini-cli/.gemini/skills/context-management/SKILL.md) | `.gemini/skills/context-management/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/context-management/SKILL.md](copilot/.github/skills/context-management/SKILL.md) | `.github/skills/context-management/SKILL.md` |

## What it does

Long sessions fail quietly. The agent forgets a decision from two hours ago, rereads the same large files, or repeats an approach that already failed. This skill gives it a small set of habits that keep the important facts outside the context window and the context itself lean.

You end up with a notes file that any fresh session can pick up, so stopping and restarting costs minutes instead of an hour of re-explaining.

## Use it when

- A task will take more than an hour or touch many files
- The agent starts contradicting earlier decisions
- You need to hand a half-finished task to a new session
- Responses slow down because huge files keep being read in full

## What it can access

- Reads files in your project
- Writes a notes file under .agent and a line in .git/info/exclude
- Runs your tests at checkpoints

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/context-management/
