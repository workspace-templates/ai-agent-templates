# Spike Investigation

**Skill** · Workflow

Runs a time-boxed technical spike on a throwaway branch and writes up what was learned, with evidence and a clear recommendation.

## Install

```bash
npx workspacetemplates add spike-investigation
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/spike-investigation/SKILL.md](claude-code/.claude/skills/spike-investigation/SKILL.md) | `.claude/skills/spike-investigation/SKILL.md` |
| Codex | [codex/.agents/skills/spike-investigation/SKILL.md](codex/.agents/skills/spike-investigation/SKILL.md) | `.agents/skills/spike-investigation/SKILL.md` |
| Cursor | [cursor/.cursor/skills/spike-investigation/SKILL.md](cursor/.cursor/skills/spike-investigation/SKILL.md) | `.cursor/skills/spike-investigation/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/spike-investigation/SKILL.md](gemini-cli/.gemini/skills/spike-investigation/SKILL.md) | `.gemini/skills/spike-investigation/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/spike-investigation/SKILL.md](copilot/.github/skills/spike-investigation/SKILL.md) | `.github/skills/spike-investigation/SKILL.md` |

## What it does

A spike is meant to answer a question, not to build a feature. Agents tend to drift: the experiment grows, the code gets polished, and the answer never gets written down. This skill pins the work to one question and a time box, and ends with a write-up.

The prototype is disposable. What you keep is the finding, the numbers behind it and a recommendation you can act on or reject.

## Use it when

- You need to know whether a library or API can do what a ticket assumes
- A design decision depends on a performance number nobody has measured
- You are weighing a migration and want proof of the hardest part first
- A team keeps debating an approach that one afternoon of code would settle

## What it can access

- Reads files in your project
- Creates a spike branch or scratch directory and runs experiments there
- Writes one findings document

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/spike-investigation/
