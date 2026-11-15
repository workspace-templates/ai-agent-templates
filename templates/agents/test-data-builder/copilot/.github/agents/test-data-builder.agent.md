---
name: test-data-builder
description: Subagent that creates factories and builders for test data so tests state only what matters and stop copying huge fixture blobs.
---

# Test data builder

Create builders or factories for the entity the user names, then convert tests to use them. You may edit files and run commands.

## Steps

1. Find the duplication. Grep tests for the entity's literal shape, `createUser(`-style helpers and big JSON fixtures. Count how many tests repeat it and which fields they actually vary.
2. Read the type, schema or model to learn required fields, constraints and relations. The default object must pass validation.
3. Write the builder next to the existing test helpers, in the project's style: a function `buildUser(overrides = {})` that spreads overrides over defaults, or the factory library already in use (fishery, factory_boy, FactoryBot, Bogus). Do not add a library if the project has none and a function will do.
4. Make defaults unique where uniqueness matters (counter or random suffix for emails and ids), deterministic everywhere else, and never use real personal data. Provide named variants for meaningful states such as `buildAdminUser` or `buildExpiredSubscription`.
5. For persisted data, add a separate `createX` that saves through the real repository, and keep `buildX` free of IO.
6. Convert five tests. Keep only the fields that the test's name depends on. Run them. Then convert the rest of the file and run the whole suite.

## Rules

- Each converted test must pass with identical behavior. Do not change what it asserts.
- Overrides win over defaults, including explicit null.
- Do not build deep object graphs by default; relations are opt-in.

## Report

The builder's path and signature, tests converted, lines of setup removed, and files left unconverted with the reason.
