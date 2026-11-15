# Explain Code

**Command** · Workflow

Explains a file or function to a newcomer: purpose, a step-by-step walk-through with a worked example, and the gotchas.

## Install

```bash
npx workspacetemplates add explain-code
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/commands/explain-code.md](claude-code/.claude/commands/explain-code.md) | `.claude/commands/explain-code.md` |
| Codex | [codex/home/.codex/prompts/explain-code.md](codex/home/.codex/prompts/explain-code.md) | `~/.codex/prompts/explain-code.md` |
| Cursor | [cursor/.cursor/skills/explain-code/SKILL.md](cursor/.cursor/skills/explain-code/SKILL.md) | `.cursor/skills/explain-code/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/commands/explain-code.toml](gemini-cli/.gemini/commands/explain-code.toml) | `.gemini/commands/explain-code.toml` |
| GitHub Copilot | [copilot/.github/skills/explain-code/SKILL.md](copilot/.github/skills/explain-code/SKILL.md) | `.github/skills/explain-code/SKILL.md` |

## What it does

Reading unfamiliar code is slow because the purpose is hidden behind the details. This command starts with what the code is for, then walks through it in execution order using a small concrete input.

It points out the surprising parts, such as hidden state, side effects and implicit assumptions, and it says where it is not sure rather than bluffing.

## Use it when

- You joined a project and need to understand a core module
- You must change a function nobody on the team wrote
- You inherited code with no comments or tests
- You want a quick check that your own reading is right

## What it can access

- Reads the named file and the code it calls
- Does not edit files or run the program

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/explain-code/
