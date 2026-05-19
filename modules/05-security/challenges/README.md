# 🏆 Security — Challenges

## Challenge 1 — Fix vulnerable image
1. Run `trivy image python:3.11` and note the vulnerabilities
2. Find a slimmer/safer alternative base image
3. Rebuild and scan again
4. Document the difference in a `findings.md` file

✅ Success: Reduced vulnerability count, findings documented

---

## Challenge 2 — Add security to CI pipeline
Add these steps to your GitHub Actions workflow:
1. Semgrep SAST scan
2. Trivy image scan
3. git-secrets check
4. Fail pipeline if HIGH or CRITICAL issues found

✅ Success: Pipeline catches security issues automatically

---

## Challenge 3 — Find the vulnerability
This code has a security issue — find and fix it:

```python
import sqlite3

def get_user(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    query = "SELECT * FROM users WHERE username = '" + username + "'"
    cursor.execute(query)
    return cursor.fetchone()
```

✅ Success: Identify the vulnerability type and write the fixed version

---

## 🏅 Completed? You've earned the Security badge!
Proceed to `../../06-terraform/theory/README.md`
