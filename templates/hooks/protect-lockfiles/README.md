# Protect Lockfiles

**Hook** · DevOps and cloud

A Claude Code hook that blocks hand edits to package-lock.json, yarn.lock, Cargo.lock, poetry.lock and other lockfiles the package manager owns.

## Install

```bash
npx workspacetemplates add protect-lockfiles
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

A lockfile pins exact versions and integrity hashes. A hand edit, even a small one, can break installs or hide a downgrade, so this PreToolUse hook refuses Edit and Write calls that target one.

Fifteen common lockfile names are covered, from npm and yarn to Cargo, Poetry, Composer, Bundler and Go. The agent is told to change the manifest and run the install command, which keeps the lock honest.

## Use it when

- Stop merge-conflict fixes that rewrite a lockfile by hand
- Keep dependency changes going through the package manager
- Review agent diffs without wading through lock noise
- Protect hashes and pinned versions

## What it can access

- Reads the target file path of each Edit and Write call
- Blocks matching calls and changes no file itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/protect-lockfiles/
