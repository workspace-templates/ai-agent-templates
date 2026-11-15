# Design Doc Writing

**Skill** · Documentation

Drafts a design doc with goals, non-goals, alternatives considered and a rollout plan, grounded in the current code before proposing anything.

## Install

```bash
npx workspacetemplates add design-doc-writing
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/design-doc-writing/SKILL.md](claude-code/.claude/skills/design-doc-writing/SKILL.md) | `.claude/skills/design-doc-writing/SKILL.md` |
| Codex | [codex/.agents/skills/design-doc-writing/SKILL.md](codex/.agents/skills/design-doc-writing/SKILL.md) | `.agents/skills/design-doc-writing/SKILL.md` |
| Cursor | [cursor/.cursor/skills/design-doc-writing/SKILL.md](cursor/.cursor/skills/design-doc-writing/SKILL.md) | `.cursor/skills/design-doc-writing/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/design-doc-writing/SKILL.md](gemini-cli/.gemini/skills/design-doc-writing/SKILL.md) | `.gemini/skills/design-doc-writing/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/design-doc-writing/SKILL.md](copilot/.github/skills/design-doc-writing/SKILL.md) | `.github/skills/design-doc-writing/SKILL.md` |

## What it does

A design doc earns its keep by forcing the hard questions before the code exists. This skill makes the agent study the present system first, then lay out the problem, the options and the cost of each, instead of defending the first idea.

The draft names what it will not do, shows at least two real alternatives, and ends with a rollout and rollback plan a reviewer can poke at.

## Use it when

- A change touches several services or a public interface
- You must pick between two approaches and need to show the reasoning
- A project needs sign-off before work starts
- You want reviewers to argue about the plan, not the pull request

## What it can access

- Reads the repository to understand the current design
- Writes one design document

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/design-doc-writing/
