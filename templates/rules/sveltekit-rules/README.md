# SvelteKit Rules

**Project rules** · Frontend · svelte

Project rules for SvelteKit: load functions, form actions, Svelte 5 runes, server-only modules and clear client and server boundaries.

## Install

```bash
npx workspacetemplates add sveltekit-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/sveltekit-rules.mdc](cursor/.cursor/rules/sveltekit-rules.mdc) | `.cursor/rules/sveltekit-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

This rules file keeps an agent inside the SvelteKit model: data comes from load functions, mutations go through form actions, and server code stays on the server.

It also sets the Svelte 5 style, using runes for state, so new components are consistent and free of legacy store patterns where they are not needed.

## Use it when

- You add routes to a SvelteKit app with an agent
- Components fetch data in onMount instead of load
- A form works only with JavaScript enabled
- Private modules risk being bundled for the browser

## What it can access

- Guidance for the agent; it neither runs commands nor edits files unless you ask

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/sveltekit-rules/
