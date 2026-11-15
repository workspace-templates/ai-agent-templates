# Scaffold Component

**Command** · Frontend

Creates a new UI component with props, styles, a test and a story, copying the folder layout your project already uses.

## Install

```bash
npx workspacetemplates add scaffold-component
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/scaffold-component.md](claude-code/.claude/commands/scaffold-component.md) | `.claude/commands/scaffold-component.md` |
| Codex | [codex/home/.codex/prompts/scaffold-component.md](codex/home/.codex/prompts/scaffold-component.md) | `~/.codex/prompts/scaffold-component.md` |
| Cursor | [cursor/.cursor/skills/scaffold-component/SKILL.md](cursor/.cursor/skills/scaffold-component/SKILL.md) | `.cursor/skills/scaffold-component/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/scaffold-component.toml](gemini-cli/.gemini/commands/scaffold-component.toml) | `.gemini/commands/scaffold-component.toml` |
| GitHub Copilot | [copilot/.github/skills/scaffold-component/SKILL.md](copilot/.github/skills/scaffold-component/SKILL.md) | `.github/skills/scaffold-component/SKILL.md` |

## What it does

A new component usually starts by copying a neighbor and renaming things, which drags old props and stale styles along. This command studies how existing components are laid out and builds the new one to the same pattern.

It generates the component file, its style file, a test and a story when the project has Storybook. Nothing outside the new folder is edited, except an index export when the project keeps one.

## Use it when

- You need a new button, card or form field that should look like the rest
- A teammate asks for a component and you want the same file layout every time
- You are adding a design system piece with a story and a test
- You want props typed and documented from the first commit

## What it can access

- Reads existing components to learn the layout
- Creates files in one new component folder
- Runs lint, type check and the new test

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/scaffold-component/
