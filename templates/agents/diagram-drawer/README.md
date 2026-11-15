# Diagram Drawer

**Subagent** · Documentation

Subagent that reads your code and draws accurate Mermaid architecture and sequence diagrams, then places them in the right doc files.

## Install

```bash
npx workspacetemplates add diagram-drawer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/diagram-drawer.md](claude-code/.claude/agents/diagram-drawer.md) | `.claude/agents/diagram-drawer.md` |
| Codex | [codex/.codex/agents/diagram-drawer.toml](codex/.codex/agents/diagram-drawer.toml) | `.codex/agents/diagram-drawer.toml` |
| Cursor | [cursor/.cursor/agents/diagram-drawer.md](cursor/.cursor/agents/diagram-drawer.md) | `.cursor/agents/diagram-drawer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/diagram-drawer.md](gemini-cli/.gemini/agents/diagram-drawer.md) | `.gemini/agents/diagram-drawer.md` |
| GitHub Copilot | [copilot/.github/agents/diagram-drawer.agent.md](copilot/.github/agents/diagram-drawer.agent.md) | `.github/agents/diagram-drawer.agent.md` |

## What it does

Hand-drawn architecture diagrams go out of date the week after they are made. This subagent derives the picture from the code itself: modules and their imports for the architecture view, a real call path for each sequence diagram.

It writes Mermaid blocks that render on GitHub and in most doc tools, limits each diagram to a size a person can scan, and adds them to your existing docs without touching the prose around them.

## Use it when

- A new teammate needs a map of how the services fit together
- You are documenting a request flow such as login, checkout or webhook handling
- The README has no picture and the module layout is hard to follow
- An old diagram needs regenerating after a refactor

## What it can access

- Reads source files across the project
- Edits or creates Markdown documentation files only

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/diagram-drawer/
