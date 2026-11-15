# Library Selection

**Skill** · Workflow

Compares candidate libraries on maintenance, fit, size and risk, then recommends one with evidence instead of picking whatever is popular.

## Install

```bash
npx workspacetemplates add library-selection
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/library-selection/SKILL.md](claude-code/.claude/skills/library-selection/SKILL.md) | `.claude/skills/library-selection/SKILL.md` |
| Codex | [codex/.agents/skills/library-selection/SKILL.md](codex/.agents/skills/library-selection/SKILL.md) | `.agents/skills/library-selection/SKILL.md` |
| Cursor | [cursor/.cursor/skills/library-selection/SKILL.md](cursor/.cursor/skills/library-selection/SKILL.md) | `.cursor/skills/library-selection/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/library-selection/SKILL.md](gemini-cli/.gemini/skills/library-selection/SKILL.md) | `.gemini/skills/library-selection/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/library-selection/SKILL.md](copilot/.github/skills/library-selection/SKILL.md) | `.github/skills/library-selection/SKILL.md` |

## What it does

Choosing a dependency by download count is how projects end up on abandoned packages. This skill makes the agent write down what you actually need, shortlist a few candidates and check each against the same list of facts, with sources you can open.

It ends with one recommendation, the runner-up, and the cost of leaving later. If the best answer is to write forty lines yourself, it says that.

## Use it when

- You need a date, validation, charting or queue library and several exist
- A dependency is deprecated and you must pick its replacement
- Your team argues about two packages without any shared criteria
- You want to be sure a new dependency is safe before it enters the lockfile

## What it can access

- Reads your manifests, lockfiles and source files
- Reads public package registries and repositories
- Runs experiments in a scratch directory outside your project

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/library-selection/
