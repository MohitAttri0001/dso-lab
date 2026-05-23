# DevSecOps & Security Fundamentals

Security is one of the most important parts of modern software engineering.

Today, companies cannot afford:
- insecure applications
- vulnerable containers
- leaked secrets
- insecure cloud infrastructure

DevSecOps integrates security directly into the DevOps lifecycle.

Instead of adding security at the end, security becomes part of:
- development
- testing
- deployment
- infrastructure
- CI/CD pipelines

---

# What is DevSecOps?

DevSecOps stands for:

- Development
- Security
- Operations

It means:

> Everyone shares responsibility for security.

Security is automated and integrated throughout the software delivery process.

---

# Why DevSecOps Exists

Traditional security approaches had major problems:
- security checks happened too late
- vulnerabilities reached production
- manual audits were slow
- developers and security teams worked separately

This caused:
- delayed releases
- insecure software
- expensive fixes
- production breaches

DevSecOps solves this by shifting security earlier into development.

---

# Shift Left Security

Shift Left Security means:

> Security starts early in the software lifecycle.

Instead of testing only before production:
- developers scan code while coding
- pipelines run security checks automatically
- containers are scanned before deployment

Benefits:
- earlier detection
- lower fixing cost
- faster remediation
- improved security culture

---

# DevSecOps Workflow

Typical workflow:

```text
Code → Build → Test → Security Scan → Deploy → Monitor
```

Security becomes part of every stage.

---

# Important Security Concepts

---

# Vulnerability

A weakness that attackers can exploit.

Examples:
- outdated libraries
- SQL injection
- insecure configurations

---

# Threat

Potential danger capable of exploiting vulnerabilities.

---

# Risk

Combination of:
- vulnerability
- threat
- impact

---

# CVE

Common Vulnerabilities and Exposures.

Public database of known vulnerabilities.

Example:
```text
CVE-2024-12345
```

---

# CVSS

Common Vulnerability Scoring System.

Measures severity:
- LOW
- MEDIUM
- HIGH
- CRITICAL

---

# OWASP Top 10

OWASP lists most critical web application risks.

Important examples:
- Broken Access Control
- Injection Attacks
- Security Misconfiguration
- Vulnerable Components
- Cryptographic Failures

---

# Types of Security Testing

---

# SAST

Static Application Security Testing.

Scans source code without running the application.

Finds:
- insecure code
- weak logic
- dangerous functions

Tools:
- Semgrep
- SonarQube
- CodeQL

---

# DAST

Dynamic Application Security Testing.

Tests running applications.

Finds:
- runtime vulnerabilities
- exposed endpoints
- authentication flaws

Tools:
- OWASP ZAP
- Burp Suite

---

# SCA

Software Composition Analysis.

Scans dependencies for known vulnerabilities.

Tools:
- Dependabot
- Snyk
- Trivy

---

# Container Security

Scans Docker images for:
- vulnerable packages
- insecure configurations
- outdated libraries

Tools:
- Trivy
- Grype

---

# IaC Security

Scans Infrastructure-as-Code files.

Checks:
- insecure Terraform configs
- exposed resources
- bad permissions

Tools:
- Trivy
- Checkov
- tfsec

---

# Secret Scanning

Detects:
- API keys
- passwords
- tokens
- certificates

Tools:
- git-secrets
- Gitleaks

---

# Trivy

Trivy is one of the most popular DevSecOps security scanners.

Created by:
- Aqua Security

Trivy scans:
- containers
- Kubernetes configs
- Terraform
- Git repositories
- filesystem
- SBOMs

---

# Install Trivy

Linux:

```bash
sudo apt install trivy
```

Verify:

```bash
trivy --version
```

---

# Scan Docker Images

```bash
trivy image nginx:latest
```

Scans image for vulnerabilities.

---

# Scan Filesystem

```bash
trivy fs .
```

Scans current directory.

---

# Scan Kubernetes Configs

```bash
trivy config .
```

Detects:
- misconfigurations
- insecure YAML files

---

# Scan Git Repository

```bash
trivy repo https://github.com/example/repo
```

---

# Trivy Severity Levels

Trivy categorizes findings:
- LOW
- MEDIUM
- HIGH
- CRITICAL

Production pipelines often fail on:
- HIGH
- CRITICAL

---

# Semgrep

Semgrep is a lightweight SAST tool.

Scans source code for:
- insecure patterns
- dangerous functions
- coding mistakes

---

# Install Semgrep

```bash
pip install semgrep
```

---

# Run Semgrep Scan

```bash
semgrep --config auto .
```

Automatically detects languages and rules.

---

# Git Secrets

git-secrets prevents committing secrets into repositories.

Detects:
- AWS keys
- passwords
- tokens

---

# Install git-secrets

```bash
sudo apt install git-secrets
```

---

# Configure git-secrets

```bash
git secrets --install
```

---

# Register AWS Rules

```bash
git secrets --register-aws
```

---

# OWASP ZAP

OWASP ZAP is a DAST scanner.

Scans running applications for:
- XSS
- SQL injection
- authentication flaws

---

# Run OWASP ZAP Docker

```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t http://target-app
```

---

# Container Security Best Practices

---

# Use Minimal Images

Prefer:

```dockerfile
node:alpine
```

instead of:
```dockerfile
node:latest
```

Benefits:
- fewer vulnerabilities
- smaller attack surface

---

# Avoid Running as Root

Bad:
```dockerfile
USER root
```

Better:
```dockerfile
USER appuser
```

---

# Scan Images Frequently

Example:

```bash
trivy image my-app
```

---

# Kubernetes Security Best Practices

---

# Use RBAC

RBAC controls:
- permissions
- access policies

---

# Use Namespaces

Separate:
- dev
- staging
- production

---

# Set Resource Limits

Prevent:
- denial-of-service
- resource exhaustion

Example:

```yaml
resources:
  limits:
    cpu: "500m"
    memory: "512Mi"
```

---

# Never Store Secrets in YAML

Use:
- Kubernetes Secrets
- Vault
- secret managers

---

# CI/CD Security

Security should run automatically in pipelines.

Example stages:
1. SAST
2. Dependency scan
3. Container scan
4. Secret scan
5. IaC scan

---

# Example GitHub Actions Security Pipeline

```yaml
name: Security Pipeline

on: [push]

jobs:
  scan:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Run Trivy
      run: trivy fs .

    - name: Run Semgrep
      run: semgrep --config auto .
```

---

# Infrastructure Security

Infrastructure must also be secured.

Important areas:
- IAM permissions
- network security
- encryption
- secrets management
- logging
- monitoring

---

# Common DevSecOps Mistakes

- hardcoded secrets
- using latest image tags
- no vulnerability scanning
- excessive permissions
- insecure CI/CD pipelines
- ignoring patch management

---

# Security Monitoring

Security is continuous.

Monitor:
- logs
- suspicious activity
- vulnerabilities
- unusual traffic

Tools:
- Falco
- Wazuh
- ELK Stack
- Splunk

---

# Incident Response

When security incidents happen:
1. detect
2. contain
3. investigate
4. recover
5. improve controls

---

# Compliance & Standards

Common security standards:
- ISO 27001
- SOC 2
- PCI-DSS
- HIPAA
- GDPR

Many companies require compliance audits.

---

# Troubleshooting

---

# Trivy Database Update Error

Fix:

```bash
trivy image --download-db-only
```

---

# Semgrep Slow Scan

Limit directories:

```bash
semgrep --config auto src/
```

---

# False Positives

Security tools may report safe code.

Always:
- validate findings
- prioritize critical risks

---

# CI/CD Security Pipeline Fails

Check:
- permissions
- scanner versions
- network access
- registry authentication

---

# Interview Questions

---

## What is DevSecOps?

DevSecOps integrates security directly into the DevOps lifecycle.

---

## Difference between SAST and DAST?

SAST:
- scans source code

DAST:
- scans running applications

---

## What is Trivy?

Trivy is a vulnerability and misconfiguration scanner used in DevSecOps.

---

## Why is Shift Left Security important?

It detects vulnerabilities earlier and reduces remediation cost.

---

## What is container security?

Protecting containerized applications from vulnerabilities and misconfigurations.

---

## Why should secrets never be hardcoded?

Hardcoded secrets can leak credentials and compromise systems.

---

# Real-world DevSecOps Workflow

Typical enterprise workflow:

1. Developer writes code
2. GitHub Actions triggers
3. Semgrep scans source code
4. Trivy scans containers
5. Secrets scan runs
6. Terraform security checks execute
7. Kubernetes manifests validated
8. Deployment proceeds only if scans pass

---

# Summary

DevSecOps integrates security into every phase of software delivery.

It provides:
- automated security
- continuous scanning
- secure deployments
- faster remediation
- safer infrastructure

Modern DevOps teams heavily rely on:
- Trivy
- Semgrep
- OWASP ZAP
- GitHub Actions
- Kubernetes security
- Infrastructure scanning

Security is no longer optional —
it is a core part of modern engineering.