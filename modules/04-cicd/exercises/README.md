# 🏋️ CI/CD — Exercises

## Exercise 1 — Your first workflow

```bash
cat > .github/workflows/ci.yml << 'WEOF'
name: DSO-Lab CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Print hello
        run: echo "CI pipeline is working!"

      - name: List files
        run: ls -la

      - name: Check git log
        run: git log --oneline -5
WEOF
```

Push and watch it run on GitHub:
```bash
git add .github/workflows/ci.yml
git commit -m "ci: add first github actions workflow"
git push origin main
```

Go to GitHub → Actions tab to see it run.
✅ Expected: Green checkmark on your workflow

---

## Exercise 2 — Add Docker build to pipeline

```bash
cat > .github/workflows/docker.yml << 'DEOF'
name: Docker Build

on:
  push:
    branches: [ main ]

jobs:
  docker:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build Docker image
        run: |
          cd modules/02-docker
          docker build -t dso-lab:latest . || echo "No Dockerfile yet"

      - name: Run Trivy scan
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'nginx:alpine'
          format: 'table'
          exit-code: '0'
DEOF
```

```bash
git add .github/workflows/docker.yml
git commit -m "ci: add docker build and trivy scan workflow"
git push origin main
```

✅ Expected: Docker build and security scan run automatically

---

## ✅ Done? Move to `../challenges/README.md`
