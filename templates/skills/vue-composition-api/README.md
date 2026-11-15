# Vue Composition API

**Skill** · Frontend · vue

Writes Vue 3 script setup components and composables with typed props, typed emits and reactivity that does not leak. Use it for any new or ported component.

## Install

```bash
npx workspacetemplates add vue-composition-api
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/vue-composition-api/SKILL.md](claude-code/.claude/skills/vue-composition-api/SKILL.md) | `.claude/skills/vue-composition-api/SKILL.md` |
| Codex | [codex/.agents/skills/vue-composition-api/SKILL.md](codex/.agents/skills/vue-composition-api/SKILL.md) | `.agents/skills/vue-composition-api/SKILL.md` |
| Cursor | [cursor/.cursor/skills/vue-composition-api/SKILL.md](cursor/.cursor/skills/vue-composition-api/SKILL.md) | `.cursor/skills/vue-composition-api/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/vue-composition-api/SKILL.md](gemini-cli/.gemini/skills/vue-composition-api/SKILL.md) | `.gemini/skills/vue-composition-api/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/vue-composition-api/SKILL.md](copilot/.github/skills/vue-composition-api/SKILL.md) | `.github/skills/vue-composition-api/SKILL.md` |

## What it does

Vue 3 code written by an agent tends to mix Options API habits with refs, destructure reactive props until they stop updating, and bury logic in components that should live in composables. This skill sets one clear style for the whole file.

It leans on type-based defineProps and defineEmits, extracts stateful logic into small use-functions, and cleans up every listener and timer it starts.

## Use it when

- You are writing a new Vue 3 component with script setup
- A component has grown past 200 lines of mixed state and template logic
- You are porting an Options API component to Vue 3
- Props lose reactivity after destructuring and you cannot see why

## What it can access

- Reads and edits .vue and .ts files in the project
- Runs vue-tsc and your test command

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/vue-composition-api/
