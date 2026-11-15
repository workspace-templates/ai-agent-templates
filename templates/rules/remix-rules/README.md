# Remix Rules

**Project rules** · Frontend · react, remix

Project rules for Remix: route loaders and actions, nested routes, error boundaries, validated forms and progressive enhancement.

## Install

```bash
npx workspacetemplates add remix-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/remix-rules.mdc](cursor/.cursor/rules/remix-rules.mdc) | `.cursor/rules/remix-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules keep an agent working with the platform in Remix: data in loaders, writes in actions and forms that submit even before JavaScript loads.

They also set expectations for nested routes and error boundaries so failures stay local to one section of a page instead of taking down the whole screen.

## Use it when

- You add routes to a Remix app with an agent
- Components fetch data with effects instead of loaders
- A failed request blanks the whole page
- Forms rely on client-side state only

## What it can access

- Instructions for the agent only; no commands or network use of its own

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/remix-rules/
