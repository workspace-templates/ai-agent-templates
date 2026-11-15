# Diagram as Code

**Skill** · Documentation

Produces Mermaid diagrams of flows, sequences and data models read from the actual code, ready to commit next to your docs.

## Install

```bash
npx workspacetemplates add diagram-as-code
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/diagram-as-code/SKILL.md](claude-code/.claude/skills/diagram-as-code/SKILL.md) | `.claude/skills/diagram-as-code/SKILL.md` |
| Codex | [codex/.agents/skills/diagram-as-code/SKILL.md](codex/.agents/skills/diagram-as-code/SKILL.md) | `.agents/skills/diagram-as-code/SKILL.md` |
| Cursor | [cursor/.cursor/skills/diagram-as-code/SKILL.md](cursor/.cursor/skills/diagram-as-code/SKILL.md) | `.cursor/skills/diagram-as-code/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/diagram-as-code/SKILL.md](gemini-cli/.gemini/skills/diagram-as-code/SKILL.md) | `.gemini/skills/diagram-as-code/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/diagram-as-code/SKILL.md](copilot/.github/skills/diagram-as-code/SKILL.md) | `.github/skills/diagram-as-code/SKILL.md` |

## What it does

Hand-drawn architecture pictures are wrong within a month. A Mermaid block lives in Markdown, renders on GitHub, and can be fixed in a pull request. This skill has the agent trace the real code before drawing a single box.

It picks the right diagram type for the question, keeps each diagram small enough to read, and checks that every node maps to a real file, table or service.

## Use it when

- You need a sequence diagram of a login or checkout flow
- A new teammate asks how data moves between services
- A schema changed and the ER diagram in the wiki is wrong
- You want diagrams reviewed in pull requests like any other text

## What it can access

- Reads source files, migrations and config
- Writes Markdown files with Mermaid blocks

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/diagram-as-code/
