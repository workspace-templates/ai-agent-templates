# Security

These templates are plain text that a coding agent reads or, for hooks and MCP setups, configuration that makes it run a command or connect to a server. Each template's README lists what it can access.

Every template is checked automatically for hidden characters, embedded secrets and, for hooks, network calls. Those are pattern checks, not an audit: read a template before you install it.

## Reporting a problem

If a template does something its README does not say, or you find a way it could harm a user, open a private report under **Security → Report a vulnerability** in this repository. Please do not open a public issue for it. We aim to answer within a few days.
