# 🏋️ Security — Exercises

## Exercise 1 — Scan an image with Trivy

```bash
trivy image nginx:latest
trivy image nginx:alpine
```

Compare the results:
- How many vulnerabilities in each?
- Which is safer?

✅ Expected: alpine has fewer vulnerabilities

---

## Exercise 2 — Scan your own code with Semgrep

```bash
cd ~/projects/dso-lab
semgrep --config auto .
```

✅ Expected: Semgrep scans all files and reports findings

---

## Exercise 3 — Detect secrets with git-secrets

```bash
cd ~/projects/dso-lab
git secrets --install
git secrets --register-aws
```

Now test it — try to commit a fake secret:
```bash
echo "AWS_SECRET_KEY=abc123fake" > test-secret.txt
git add test-secret.txt
git commit -m "test secret detection"
```

✅ Expected: git-secrets BLOCKS the commit

Clean up:
```bash
git rm test-secret.txt
```

---

## Exercise 4 — Scan Kubernetes files with Trivy

```bash
trivy config modules/03-kubernetes/
```

✅ Expected: Trivy reports any misconfigurations

---

## ✅ Done? Move to `../challenges/README.md`
