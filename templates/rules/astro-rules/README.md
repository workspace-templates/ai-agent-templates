# Astro Rules

**Project rules** · Frontend · astro

Project rules for Astro sites: zero-JS by default, islands with the right client directive, typed content collections and optimized images.

## Install

```bash
npx workspacetemplates add astro-rules
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/CLAUDE.md](claude-code/CLAUDE.md) | `CLAUDE.md` (merge) |
| Codex | [codex/AGENTS.md](codex/AGENTS.md) | `AGENTS.md` (merge) |
| Cursor | [cursor/.cursor/rules/astro-rules.mdc](cursor/.cursor/rules/astro-rules.mdc) | `.cursor/rules/astro-rules.mdc` |
| Gemini CLI | [gemini-cli/GEMINI.md](gemini-cli/GEMINI.md) | `GEMINI.md` (merge) |
| GitHub Copilot | [copilot/.github/copilot-instructions.md](copilot/.github/copilot-instructions.md) | `.github/copilot-instructions.md` (merge) |

## What it does

These rules teach an agent to treat Astro as a content-first framework where pages ship no JavaScript unless an island asks for it. They settle where data loads, when a framework component is justified and how images are served.

Use them to stop generated code from sprinkling client:load on everything or reaching for fetch inside components when a content collection would give typed, validated data.

## Use it when

- You start a new Astro site
- An agent adds client:load to every component
- Content lives in loose Markdown files with no schema
- Lighthouse scores drop after a generated change

## What it can access

- Instructions only; it does not read or run anything by itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/astro-rules/
