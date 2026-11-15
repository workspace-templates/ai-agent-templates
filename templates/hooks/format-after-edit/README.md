# Format After Edit

**Hook** · Code quality

A Claude Code hook that runs Prettier on each file the agent edits, and quietly does nothing when the project has no Prettier installed.

## Install

```bash
npx workspacetemplates add format-after-edit
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Agent edits often drift from your formatting. This PostToolUse hook runs Prettier on the single file that was just written, so diffs stay clean without a separate formatting step.

It only acts when node_modules/prettier exists and the file type is one Prettier handles. In any other project it exits silently.

## Use it when

- Keep agent diffs formatted like your own code
- Avoid a noisy format-only commit later
- Work in a repo that already uses Prettier
- Skip manual format runs after every edit

## What it can access

- Runs Prettier through npx on the edited file
- Rewrites that file in place

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PostToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/format-after-edit/
