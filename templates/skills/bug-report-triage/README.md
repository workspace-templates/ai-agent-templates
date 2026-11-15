# Bug Report Triage

**Skill** · Workflow

Triages an incoming bug report, tries to reproduce it, and writes a minimal repro with a severity and the next step for the owner.

## Install

```bash
npx workspacetemplates add bug-report-triage
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/bug-report-triage/SKILL.md](claude-code/.claude/skills/bug-report-triage/SKILL.md) | `.claude/skills/bug-report-triage/SKILL.md` |
| Codex | [codex/.agents/skills/bug-report-triage/SKILL.md](codex/.agents/skills/bug-report-triage/SKILL.md) | `.agents/skills/bug-report-triage/SKILL.md` |
| Cursor | [cursor/.cursor/skills/bug-report-triage/SKILL.md](cursor/.cursor/skills/bug-report-triage/SKILL.md) | `.cursor/skills/bug-report-triage/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/bug-report-triage/SKILL.md](gemini-cli/.gemini/skills/bug-report-triage/SKILL.md) | `.gemini/skills/bug-report-triage/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/bug-report-triage/SKILL.md](copilot/.github/skills/bug-report-triage/SKILL.md) | `.github/skills/bug-report-triage/SKILL.md` |

## What it does

Bug reports arrive as screenshots, half sentences and 'it just broke'. This skill has the agent turn each one into a verdict: reproduced or not, how bad, and where the problem probably sits, backed by a repro someone else can run in a minute.

It does not fix the bug. The goal is a report an engineer can pick up without a single follow-up question, or a clear reason why the report cannot move yet.

## Use it when

- The issue tracker has reports you cannot act on as written
- Support forwards a customer complaint with no steps
- You need to decide what is urgent and what can wait
- A report might be a duplicate of something already fixed

## What it can access

- Reads files, git history and issue text you provide
- Runs your app, scripts and tests locally to reproduce
- Creates a repro file only when you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/bug-report-triage/
