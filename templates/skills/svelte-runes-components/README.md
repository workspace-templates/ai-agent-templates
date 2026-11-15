# Svelte Runes Components

**Skill** · Frontend · svelte

Builds Svelte 5 components with runes and snippets, and replaces stores and legacy reactive statements. Use it when writing or upgrading Svelte code.

## Install

```bash
npx workspacetemplates add svelte-runes-components
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/svelte-runes-components/SKILL.md](claude-code/.claude/skills/svelte-runes-components/SKILL.md) | `.claude/skills/svelte-runes-components/SKILL.md` |
| Codex | [codex/.agents/skills/svelte-runes-components/SKILL.md](codex/.agents/skills/svelte-runes-components/SKILL.md) | `.agents/skills/svelte-runes-components/SKILL.md` |
| Cursor | [cursor/.cursor/skills/svelte-runes-components/SKILL.md](cursor/.cursor/skills/svelte-runes-components/SKILL.md) | `.cursor/skills/svelte-runes-components/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/svelte-runes-components/SKILL.md](gemini-cli/.gemini/skills/svelte-runes-components/SKILL.md) | `.gemini/skills/svelte-runes-components/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/svelte-runes-components/SKILL.md](copilot/.github/skills/svelte-runes-components/SKILL.md) | `.github/skills/svelte-runes-components/SKILL.md` |

## What it does

Models still produce Svelte 4 code by habit: export let, the dollar-label reactive statements, slots and writable stores. Those still compile in Svelte 5, but they fight the new compiler and confuse a reader who expects runes.

This skill makes the agent write runes-first components, choose between state, derived and effect with care, and use snippets instead of slots for anything that needs arguments.

## Use it when

- You are creating a Svelte 5 component from scratch
- A SvelteKit project is being moved off export let and stores
- An effect keeps looping or runs too often
- You need a reusable piece of markup that takes parameters

## What it can access

- Edits .svelte and .svelte.ts files
- Runs svelte-check through npx

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/svelte-runes-components/
