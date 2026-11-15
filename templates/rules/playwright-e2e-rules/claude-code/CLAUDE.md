# Project rules: Playwright E2E

## Locators and assertions
- Locate by role, label, text or test id: `getByRole`, `getByLabel`, `getByTestId`. Avoid XPath and deep CSS chains. Add `data-testid` in the app when no accessible name exists.
- Use web-first assertions (`await expect(locator).toBeVisible()`, `toHaveText`, `toHaveURL`), which retry. Never use `waitForTimeout` or fixed sleeps; wait on a condition or a network response.
- No `if` branches in tests; one behavior per test, named like a sentence.

## Isolation and setup
- Each test runs alone and in any order. Create data through the API or a fixture, not through earlier tests.
- Log in once in a setup project and reuse `storageState`. Put page objects and custom fixtures in `tests/fixtures`, using `test.extend`.
- Mock only third-party services with `page.route`; keep your own backend real.

## Config and CI
- Set `baseURL`, `retries: 2` only in CI, `trace: 'on-first-retry'`, `screenshot: 'only-on-failure'`, and `forbidOnly` in CI.
- Shard with `--shard=1/4` across jobs, merge blob reports and upload the HTML report and traces.
- Run `npx tsc --noEmit` and `npx playwright test` locally before finishing.
