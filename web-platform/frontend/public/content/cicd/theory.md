# CI/CD Fundamentals

CI/CD is one of the core practices in modern DevOps and DevSecOps.

It helps teams:
- automate testing
- automate deployments
- reduce human errors
- release software faster
- improve reliability

CI/CD pipelines are used in almost every modern software company.

---

# What is CI/CD?

CI/CD stands for:

- Continuous Integration (CI)
- Continuous Delivery / Continuous Deployment (CD)

CI/CD automates the software delivery lifecycle.

Instead of manually:
- testing code
- building applications
- deploying software

everything happens automatically using pipelines.

---

# Why CI/CD Exists

Before CI/CD:
- deployments were manual
- releases were slow
- bugs reached production
- integration problems were common
- teams wasted time

Developers often faced:
- merge conflicts
- broken builds
- inconsistent environments
- failed deployments

CI/CD solved these issues through automation.

---

# Continuous Integration (CI)

Continuous Integration means:

> Developers frequently merge code into a shared repository where automated tests run automatically.

Goal:
- detect issues early
- ensure code quality
- keep main branch stable

---

# CI Workflow

Typical CI process:

1. Developer pushes code
2. Pipeline starts automatically
3. Dependencies install
4. Tests run
5. Build process executes
6. Security scans run
7. Results are reported

---

# Continuous Delivery (CD)

Continuous Delivery means:

> Code is automatically prepared for deployment after passing all tests.

Deployment still requires manual approval.

---

# Continuous Deployment

Continuous Deployment means:

> Code automatically deploys to production without manual approval.

Every successful pipeline becomes a deployment.

---

# CI vs CD

| CI | CD |
|---|---|
| Focuses on testing and integration | Focuses on deployment |
| Detects issues early | Automates releases |
| Improves code quality | Improves delivery speed |

---

# CI/CD Architecture

A CI/CD pipeline usually contains:

- Source Control
- Build Stage
- Test Stage
- Security Stage
- Artifact Storage
- Deployment Stage
- Monitoring

---

# Important CI/CD Components

---

# 1. Source Control

Usually:
- GitHub
- GitLab
- Bitbucket

Code changes trigger pipelines.

---

# 2. Build System

Builds applications.

Examples:
- npm
- Maven
- Gradle
- Docker build

---

# 3. Testing Stage

Runs:
- unit tests
- integration tests
- API tests

Goal:
- verify application quality

---

# 4. Security Stage

Runs:
- SAST
- dependency scanning
- container scanning
- secret detection

Tools:
- Trivy
- Semgrep
- Snyk
- git-secrets

---

# 5. Deployment Stage

Deploys applications to:
- servers
- cloud
- Kubernetes

---

# Popular CI/CD Tools

---

# GitHub Actions

GitHub-native CI/CD platform.

Uses:
```yaml
.github/workflows/
```

---

# Jenkins

Most widely used CI/CD server.

Features:
- plugins
- pipelines
- automation

---

# GitLab CI/CD

Integrated CI/CD inside GitLab.

---

# CircleCI

Cloud-native CI/CD platform.

---

# ArgoCD

GitOps continuous delivery tool for Kubernetes.

---

# GitHub Actions Workflow

Example:

```yaml
name: CI Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v4

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
```

---

# Important GitHub Actions Concepts

---

# Workflow

Automation file.

Stored inside:

```txt
.github/workflows/
```

---

# Job

A group of steps.

Example:
- build
- test
- deploy

---

# Step

Single task inside job.

Example:
- install dependencies
- run tests

---

# Runner

Machine executing workflow.

Example:
```yaml
runs-on: ubuntu-latest
```

---

# Trigger

Defines when workflow starts.

Examples:
- push
- pull_request
- workflow_dispatch

---

# Important CI/CD Commands

---

# Run GitHub Actions Locally

Using Act:

```bash
act push
```

---

# Validate YAML

```bash
yamllint workflow.yml
```

---

# Docker Build in Pipeline

```bash
docker build -t my-app .
```

---

# Trivy Scan

```bash
trivy image my-app
```

---

# Kubernetes Deploy

```bash
kubectl apply -f deployment.yml
```

---

# Terraform Deploy

```bash
terraform apply
```

---

# CI/CD Pipeline Stages

Typical DevOps pipeline:

```text
Code → Build → Test → Scan → Package → Deploy → Monitor
```

---

# CI/CD in DevSecOps

DevSecOps integrates security into CI/CD pipelines.

Security becomes automated.

This is called:

> Shift Left Security

Meaning:
security starts early in development.

---

# Common DevSecOps Scans

---

# SAST

Static Application Security Testing.

Scans source code.

Tools:
- Semgrep
- SonarQube

---

# DAST

Dynamic Application Security Testing.

Scans running applications.

Tools:
- OWASP ZAP
- Burp Suite

---

# Dependency Scanning

Checks vulnerable packages.

Tools:
- Dependabot
- Snyk

---

# Container Scanning

Scans Docker images.

Tools:
- Trivy
- Grype

---

# Secret Scanning

Detects leaked credentials.

Tools:
- git-secrets
- Gitleaks

---

# Real-world CI/CD Usage

Companies use CI/CD for:
- automated testing
- fast deployments
- cloud-native apps
- Kubernetes delivery
- microservices

Benefits:
- faster releases
- fewer bugs
- reliable deployments
- improved developer productivity

---

# CI/CD Best Practices

---

# Keep Pipelines Fast

Slow pipelines reduce productivity.

Optimize:
- dependencies
- caching
- parallel jobs

---

# Fail Fast

Run critical checks early.

Example:
- linting
- syntax validation

before expensive stages.

---

# Use Branch Protection

Protect:
- main branch
- production branches

Require:
- PR reviews
- successful CI checks

---

# Store Secrets Securely

Never hardcode:
- passwords
- tokens
- API keys

Use:
- GitHub Secrets
- Vault
- cloud secret managers

---

# Scan Everything

Always scan:
- code
- dependencies
- containers
- IaC files

---

# Common CI/CD Mistakes

- huge pipelines
- hardcoded secrets
- no rollback strategy
- no testing stage
- skipping security scans
- deploying directly from developer laptops

---

# Troubleshooting

---

# Pipeline Fails Randomly

Possible causes:
- unstable dependencies
- race conditions
- flaky tests

---

# Build Fails

Check:
- logs
- dependency versions
- environment variables

---

# Workflow Not Triggering

Check:
- YAML syntax
- branch names
- trigger conditions

---

# Deployment Failed

Check:
- credentials
- Kubernetes access
- Terraform state
- cloud permissions

---

# Interview Questions

---

## What is CI/CD?

CI/CD is a DevOps practice that automates:
- integration
- testing
- deployment

of software.

---

## Difference between Continuous Delivery and Continuous Deployment?

Continuous Delivery:
- manual approval before production

Continuous Deployment:
- automatic production deployment

---

## What is a pipeline?

A sequence of automated stages that build, test and deploy applications.

---

## Why is CI/CD important?

CI/CD provides:
- faster releases
- fewer bugs
- automation
- better reliability

---

## What is Shift Left Security?

Integrating security early into development and CI/CD pipelines.

---

# Summary

CI/CD is the backbone of modern DevOps automation.

It enables:
- fast delivery
- reliable deployments
- automated testing
- security integration
- scalable software delivery

CI/CD is essential for:
- DevOps
- Cloud Engineering
- Platform Engineering
- DevSecOps