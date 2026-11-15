# Project rules: Go CLI

## Layout
- `cmd/<tool>/main.go` only builds the root command and exits. Commands live in `internal/cli`, one file per subcommand; logic lives in `internal/<domain>` packages that know nothing about cobra.
- Avoid `init()` and package-level mutable state. Build commands with constructors that take their dependencies.

## Config and I/O
- Precedence: flags, then environment variables, then config file, then defaults. Document it in `--help`.
- Write results to `cmd.OutOrStdout()` and diagnostics to `cmd.ErrOrStderr()`, so tests can capture both. Offer `--json`.
- Use `RunE` and return errors; never call `os.Exit` or `log.Fatal` inside a command.

## Errors and exit codes
- Wrap with `fmt.Errorf("load config: %w", err)`; compare with `errors.Is` and `errors.As`. Error strings are lowercase with no trailing punctuation.
- `main` maps errors to codes: `0` success, `1` failure, `2` usage. Set `SilenceUsage` after argument validation.
- Pass `context.Context` first, and cancel it on SIGINT with `signal.NotifyContext`.

## Quality
- Write table-driven tests with `t.Run`, `t.TempDir()` and `t.Parallel()` where safe. Execute commands with `SetArgs` and a buffer.
- Run `gofmt -l .`, `go vet ./...`, `golangci-lint run` and `go test -race ./...` before finishing.
