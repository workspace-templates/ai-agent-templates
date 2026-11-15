# workspacetemplates

Install AI templates from [workspacetemplates.com/ai](https://workspacetemplates.com/ai/) into your project: skills, subagents, slash commands, MCP setups, hooks and project rules, written out as the exact files your coding agent expects.

```bash
npx workspacetemplates add pull-request-reviewer
npx workspacetemplates add github-mcp --tool cursor
npx workspacetemplates list postgres
npx workspacetemplates info bug-hunter
```

Tools: `claude-code`, `codex`, `cursor`, `gemini-cli`, `copilot`. Without `--tool` it looks at your project (`.claude`, `.cursor`, `AGENTS.md`, ...) and asks if it cannot tell.

- `--dry` shows what would be written and changes nothing.
- `--force` replaces a file that already exists. JSON settings (`.mcp.json`, `.claude/settings.json`) are merged, and rules files (`CLAUDE.md`, `AGENTS.md`) are added to, never replaced.

## What it does and does not do

It fetches public JSON from workspacetemplates.com and writes plain text files in the current folder, or in your home folder for the few files a tool keeps there (`~/.codex`). It has no dependencies and no telemetry, and it never runs anything it downloads. Every template's page shows what that template can read, change or run: read it before you install.
