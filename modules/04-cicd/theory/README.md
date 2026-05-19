# ⚙️ CI/CD — Theory

## What is CI/CD?
- **CI (Continuous Integration):** Automatically test code every time you push
- **CD (Continuous Delivery):** Automatically deploy code after tests pass

Think of CI/CD as a **robot assistant** that tests and ships your code for you.

## Why CI/CD?
- Catch bugs early before they reach production
- No manual deployments — everything is automated
- Faster delivery of features

## GitHub Actions
GitHub's built-in CI/CD tool. Workflows are defined in `.github/workflows/`.

## Key Concepts

| Concept | What it is |
|---------|-----------|
| Workflow | Automated process defined in a YAML file |
| Job | A set of steps that run together |
| Step | A single task (run a command or action) |
| Trigger | What starts the workflow (push, PR, schedule) |
| Runner | The machine that runs your workflow |
| Action | A reusable step from the marketplace |

## Workflow Structure

```yaml
name: CI Pipeline

on: [push]          # Trigger

jobs:
  build:            # Job name
    runs-on: ubuntu-latest   # Runner
    steps:
      - uses: actions/checkout@v3    # Action
      - name: Run tests              # Step
        run: npm test
```

## Next Step
Go to `../exercises/README.md`
