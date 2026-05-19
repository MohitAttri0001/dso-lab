# 🔒 Security — Theory

## What is DevSecOps?
Security built INTO the development process — not added at the end.
**Dev + Sec + Ops = Everyone owns security.**

## Types of Security Testing

| Type | What it does | Tool |
|------|-------------|------|
| SAST | Scans source code for vulnerabilities | Semgrep |
| DAST | Tests running app for vulnerabilities | OWASP ZAP |
| Container Scan | Finds vulnerabilities in Docker images | Trivy |
| Secret Scan | Finds leaked passwords/keys in code | git-secrets |
| IaC Scan | Finds misconfigs in Terraform/K8s files | Trivy |

## SAST (Static Application Security Testing)
- Scans code WITHOUT running it
- Finds: SQL injection, XSS, hardcoded secrets, insecure functions
- Run it: before committing code

## DAST (Dynamic Application Security Testing)
- Tests your RUNNING application
- Finds: auth bypass, injection attacks, misconfigurations
- Run it: against a test/staging environment

## Trivy
All-in-one scanner:
- Docker image vulnerabilities
- Filesystem vulnerabilities
- IaC misconfigurations
- Secret detection

## Common Vulnerabilities to Know

| Vulnerability | What it is |
|--------------|-----------|
| SQL Injection | Attacker runs SQL commands via input fields |
| XSS | Attacker injects scripts into web pages |
| Hardcoded secrets | Passwords/keys committed to code |
| Outdated dependencies | Libraries with known CVEs |
| Misconfigured containers | Running as root, no resource limits |

## Next Step
Go to `../exercises/README.md`
