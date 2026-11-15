# CSS Refactorer

**Subagent** · Frontend · css

Subagent that merges duplicated CSS into tokens and shared classes, proving the rendered result is unchanged.

## Install

```bash
npx workspacetemplates add css-refactorer
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/agents/css-refactorer.md](claude-code/.claude/agents/css-refactorer.md) | `.claude/agents/css-refactorer.md` |
| Codex | [codex/.codex/agents/css-refactorer.toml](codex/.codex/agents/css-refactorer.toml) | `.codex/agents/css-refactorer.toml` |
| Cursor | [cursor/.cursor/agents/css-refactorer.md](cursor/.cursor/agents/css-refactorer.md) | `.cursor/agents/css-refactorer.md` |
| Gemini CLI | [gemini-cli/.gemini/agents/css-refactorer.md](gemini-cli/.gemini/agents/css-refactorer.md) | `.gemini/agents/css-refactorer.md` |
| GitHub Copilot | [copilot/.github/agents/css-refactorer.agent.md](copilot/.github/agents/css-refactorer.agent.md) | `.github/agents/css-refactorer.agent.md` |

## What it does

Stylesheets grow by copy and paste: the same blue in forty places, the same card padding written six ways. This subagent finds the repeats and folds them into custom properties and a small set of shared classes.

The rule is that nothing visible changes. It records computed values before and after where it can, edits in small steps, and stops to ask when two near-identical values might have been meant to differ.

## Use it when

- The same hex colors and pixel values repeat across many files
- You are about to add dark mode or theming and need tokens first
- Several components share almost identical button or card styles
- A stylesheet doubled in size and nobody knows what is still used

## What it can access

- Reads and edits stylesheet files
- Runs your build and test commands

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/css-refactorer/
