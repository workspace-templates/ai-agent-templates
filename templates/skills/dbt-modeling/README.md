# dbt Modeling

**Skill** · Data and AI

Builds dbt models in staging, intermediate and mart layers with tests and generated docs. Use it when adding or restructuring warehouse transformations.

## Install

```bash
npx workspacetemplates add dbt-modeling
```

Or copy the file for your tool:

| Tool | File | Goes to |
|---|---|---|
| Claude Code | [claude-code/.claude/skills/dbt-modeling/SKILL.md](claude-code/.claude/skills/dbt-modeling/SKILL.md) | `.claude/skills/dbt-modeling/SKILL.md` |
| Codex | [codex/.agents/skills/dbt-modeling/SKILL.md](codex/.agents/skills/dbt-modeling/SKILL.md) | `.agents/skills/dbt-modeling/SKILL.md` |
| Cursor | [cursor/.cursor/skills/dbt-modeling/SKILL.md](cursor/.cursor/skills/dbt-modeling/SKILL.md) | `.cursor/skills/dbt-modeling/SKILL.md` |
| Gemini CLI | [gemini-cli/.gemini/skills/dbt-modeling/SKILL.md](gemini-cli/.gemini/skills/dbt-modeling/SKILL.md) | `.gemini/skills/dbt-modeling/SKILL.md` |
| GitHub Copilot | [copilot/.github/skills/dbt-modeling/SKILL.md](copilot/.github/skills/dbt-modeling/SKILL.md) | `.github/skills/dbt-modeling/SKILL.md` |

## What it does

A dbt project stays maintainable when each layer has one job. This skill puts raw renaming and casting in staging, business logic in intermediate and marts, and attaches tests and descriptions to the model in the same change that creates it.

The agent follows your project's naming and materialization conventions, runs the models it touched, and reports test results rather than assuming they pass.

## Use it when

- You are adding a new source and need clean staging models for it
- A mart model has grown into a 300 line query with repeated logic
- Tests are missing and nobody knows which columns are unique or required
- New teammates cannot find what a model means because nothing is documented

## What it can access

- Reads dbt project files and compiled SQL
- Creates and edits models and YAML
- Runs dbt commands against your configured warehouse profile

## Automated checks

- ✅ **No hidden text.** No invisible or direction-changing characters in any file.
- ✅ **No embedded secrets.** No keys or tokens; secrets are read from your environment.
- ✅ **Instructions only.** Plain text for the agent to read. It runs nothing by itself; your agent asks before acting, as usual.

More: https://workspacetemplates.com/ai/dbt-modeling/
