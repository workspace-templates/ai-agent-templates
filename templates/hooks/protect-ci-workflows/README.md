# Protect CI Workflows

**Hook** · DevOps and cloud · github-actions

A Claude Code hook that pauses for your approval before the agent edits GitHub Actions workflows, GitLab CI, Jenkinsfile or other pipeline files.

## Install

```bash
npx workspacetemplates add protect-ci-workflows
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/settings.json](claude-code/.claude/settings.json) | `.claude/settings.json` (merge) |

## What it does

Pipeline files run with your secrets and deploy rights, so a small edit can have a large reach. This PreToolUse hook does not block them. It switches the permission prompt on for those files, even if you allowed edits in general.

It matches workflow and action files under .github, plus GitLab CI, Azure Pipelines, Bitbucket Pipelines, CircleCI and Jenkinsfile. You see the proposed change and approve or reject it.

## Use it when

- Allow auto-accepted edits but keep a gate on pipelines
- Review any change to deploy or release steps
- Guard secrets that workflows can read
- Catch an agent that loosens a permissions block

## What it can access

- Reads the target file path of each Edit and Write call
- Asks you to confirm matching calls and changes no file itself

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **No network calls.** The hook command works offline and sends nothing anywhere.
- ℹ️ **Runs a command.** Runs one Node.js command on PreToolUse for Edit, Write. Read it above before installing.

More: https://workspacetemplates.com/ai/protect-ci-workflows/
