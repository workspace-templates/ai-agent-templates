# Contributing

Thanks for helping. A template lives in `templates/<type>/<name>/item.json`; the per-tool files and the README next to it are generated from it, so edit only `item.json`.

## Add or change a template

1. Copy an existing `item.json` of the same type and change it. The name is lowercase-with-hyphens and must match the folder.
2. Write it the way you would brief a senior colleague: specific steps, real commands, a defined result. Say what it must never do.
3. Fill in `access` honestly: what it reads, changes or runs.
4. MCP setups must point to the vendor's official server, with the official page in `mcp.source`. Hooks must be one cross-platform `node -e` command with no network calls, tested before you send it.
5. Run `node scripts/validate.mjs` and open a pull request. Describe how you tested it.

Original work only: do not copy templates from other projects.

By contributing you agree that your contribution is licensed under the MIT license.
