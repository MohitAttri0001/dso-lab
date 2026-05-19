# 🏆 CI/CD — Challenges

## Challenge 1 — Full CI pipeline
Create a workflow that:
1. Triggers on push to main and on PRs
2. Checks out code
3. Builds your Docker image
4. Runs Trivy scan on it
5. Fails the pipeline if CRITICAL vulnerabilities found

✅ Success: Pipeline passes with no critical vulnerabilities

---

## Challenge 2 — Branch protection
1. Go to GitHub repo Settings → Branches
2. Add a branch protection rule for `main`
3. Require status checks to pass before merging
4. Create a PR and verify CI must pass before merge

✅ Success: Cannot merge PR until CI is green

---

## Challenge 3 — Test act locally
Run your GitHub Actions workflow locally without pushing:

```bash
act push
```

✅ Success: Workflow runs locally in Docker

---

## 🏅 Completed? You've earned the CI/CD badge!
Proceed to `../../05-security/theory/README.md`
