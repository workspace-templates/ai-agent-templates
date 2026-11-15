# Incident Postmortem

**Skill** · DevOps and cloud

Writes a blameless postmortem from logs, chat and commits, with a verified timeline, a real root cause and follow-up actions that have owners.

## Install

```bash
npx workspacetemplates add incident-postmortem
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/incident-postmortem/SKILL.md](claude-code/.claude/skills/incident-postmortem/SKILL.md) | `.claude/skills/incident-postmortem/SKILL.md` |
| Codex | [codex/.agents/skills/incident-postmortem/SKILL.md](codex/.agents/skills/incident-postmortem/SKILL.md) | `.agents/skills/incident-postmortem/SKILL.md` |
| Cursor | [cursor/.cursor/skills/incident-postmortem/SKILL.md](cursor/.cursor/skills/incident-postmortem/SKILL.md) | `.cursor/skills/incident-postmortem/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/incident-postmortem/SKILL.md](gemini-cli/.gemini/skills/incident-postmortem/SKILL.md) | `.gemini/skills/incident-postmortem/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/incident-postmortem/SKILL.md](copilot/.github/skills/incident-postmortem/SKILL.md) | `.github/skills/incident-postmortem/SKILL.md` |

## What it does

A postmortem is only useful if it changes something. Most of them list a timeline, blame the person who pushed, and end with actions nobody tracks. This skill collects the evidence first, separates what happened from why, and writes about systems and decisions rather than individuals.

Every action item is specific, has an owner and a due date, and says how you will know it worked.

## Use it when

- An outage or data incident has just been resolved
- Leadership asks for a written review of last week's incident
- The same kind of failure has happened twice
- You need the timeline reconstructed from commits, deploys and alerts

## What it can access

- Reads logs, git history and files you point it to
- Runs read-only commands such as git log; writes one markdown file

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/incident-postmortem/
