# Project rules: AWS CDK (TypeScript)

## Layout
- `bin/` holds the app entry, `lib/constructs/` reusable constructs, `lib/stacks/` deployable stacks, `test/` the tests. Keep stacks thin and put logic in constructs.
- Prefer L2 constructs. Drop to L1 (`Cfn*`) or escape hatches only with a comment saying what the L2 lacks.
- Pass environment as props (account, region, stage) from the app file. Never read `process.env` inside a construct and never hard-code account IDs.

## Naming and state
- Do not set physical names (`bucketName`, `tableName`) unless a cross-stack contract demands it; a fixed name blocks replacement.
- Set `removalPolicy: RETAIN` on databases, buckets and key stores in production, and enable point-in-time recovery or versioning.
- Split stateful and stateless resources into separate stacks so a code change cannot replace data.
- Tag every stack with `owner` and `stage`.

## Security
- Grant access with `grantRead`, `grantWrite` and similar methods. Write a raw IAM statement only when no grant exists, and never use `*` for both actions and resources.
- Keep secrets in Secrets Manager or SSM; reference them, do not inline values.

## Tests and delivery
- Use `Template.fromStack` with `hasResourceProperties` for key assertions, and snapshot tests sparingly.
- Run `npx tsc --noEmit`, `npm test`, `npx cdk synth` and `npx cdk diff` before finishing. Report any resource marked for replacement or deletion and wait for approval.
