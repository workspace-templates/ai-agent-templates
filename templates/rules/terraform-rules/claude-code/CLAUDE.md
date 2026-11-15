# Project rules: Terraform

## Layout
- Keep a root configuration per environment (`envs/dev`, `envs/prod`) that calls reusable modules in `modules/`. Each module has `main.tf`, `variables.tf`, `outputs.tf` and `versions.tf`, with a short README.
- Pin the Terraform version and every provider with `required_version` and `required_providers`, and commit `.terraform.lock.hcl`.

## State
- Use a remote backend with locking and encryption, and separate state per environment. Never commit state files or secrets. Do not edit state by hand; use `moved` blocks, `import` blocks or `terraform state` commands with review.

## Style
- Use snake_case resource names, with `this` for a module's single main resource. Give every variable a `type` and `description`, add `validation` blocks where limits exist, and mark sensitive values.
- Prefer `for_each` over `count` so removing an item does not shift others. Avoid over-nested modules and huge `locals`.
- Apply consistent tags through provider `default_tags`, including owner and environment.

## Safety
- Set `prevent_destroy` on stateful resources and use `lifecycle` rules sparingly. Pass secrets from a secret manager, not variables files.

## Before finishing
- Run `terraform fmt -check -recursive`, `terraform validate`, `tflint` and a scanner such as Checkov or Trivy. Run `terraform plan -out=tfplan` and summarize the adds, changes and destroys. Never run `apply` without approval.
