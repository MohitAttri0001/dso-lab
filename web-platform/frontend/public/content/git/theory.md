# Git Fundamentals

Git is the foundation of modern DevOps and DevSecOps workflows.

Every modern software company — from startups to enterprises like Google, Microsoft and Amazon — uses Git for source code management, collaboration, automation and CI/CD pipelines.

Git is not just a tool.

It is the backbone of:
- software collaboration
- release management
- CI/CD automation
- infrastructure management
- DevSecOps workflows

---

# What is Git?

Git is a **distributed version control system (DVCS)** used to track changes in source code during software development.

It allows developers to:
- track file history
- collaborate safely
- create isolated branches
- merge features
- revert mistakes
- manage releases

Git was created by **Linus Torvalds** in 2005 to manage Linux kernel development.

---

# Why Git Exists

Before Git, developers commonly shared code using:
- ZIP files
- shared folders
- FTP uploads
- manual backups

This created major problems:

- developers overwrote each other’s code
- difficult rollback process
- poor collaboration
- no proper history tracking
- high risk during deployments

Git solved these issues by introducing:
- version history
- branching
- distributed repositories
- safe collaboration
- fast rollback capability

---

# Core Advantages of Git

## 1. Version Tracking

Git records every change made to files.

This allows:
- rollback to older versions
- auditing changes
- tracking contributors

---

## 2. Branching

Developers can create isolated environments called branches.

This allows:
- feature development
- bug fixing
- experimentation
- parallel development

without affecting production code.

---

## 3. Collaboration

Multiple developers can work on the same project safely.

Git handles:
- merges
- conflict detection
- history tracking

---

## 4. Distributed Architecture

Every developer has a complete copy of the repository.

Benefits:
- offline work
- redundancy
- faster operations

---

# Git Architecture

Git mainly works using three areas.

---

## 1. Working Directory

The actual project files on your machine.

This is where developers:
- edit code
- create files
- modify content

Example:
```bash
touch app.py
```

---

## 2. Staging Area

Temporary area where changes are prepared before commit.

Also called:
- index
- staging area

Files are added using:

```bash
git add .
```

Purpose:
- choose what gets committed
- review changes before saving snapshot

---

## 3. Local Repository

Stores commit history permanently.

Commits are saved using:

```bash
git commit -m "message"
```

The repository contains:
- commit history
- branches
- tags
- metadata

---

# Git Workflow

A standard Git workflow looks like this:

```bash
git add .
git commit -m "message"
git push
```

---

## Step 1 — Modify Files

Developer edits project files.

Example:

```bash
nano app.py
```

---

## Step 2 — Stage Changes

Add changes to staging area.

```bash
git add .
```

Common alternatives:

```bash
git add app.py
git add src/
```

---

## Step 3 — Create Commit

Save snapshot of changes.

```bash
git commit -m "add login feature"
```

Best practices:
- keep commit messages meaningful
- avoid huge commits
- commit frequently

---

## Step 4 — Push to Remote Repository

Upload local commits to GitHub.

```bash
git push origin main
```

---

# Important Git Commands

---

# Initialize Repository

## git init

Creates a new Git repository.

```bash
git init
```

After running:
- `.git/` directory is created
- Git starts tracking project

---

# Clone Repository

## git clone

Downloads remote repository locally.

```bash
git clone https://github.com/user/repo.git
```

Commonly used when:
- joining projects
- contributing to open source
- setting up development environments

---

# Check Repository Status

## git status

Shows:
- modified files
- untracked files
- staged files

```bash
git status
```

Short format:

```bash
git status -s
```

---

# Add Files

## git add

Stages changes.

Add single file:

```bash
git add app.py
```

Add everything:

```bash
git add .
```

---

# Commit Changes

## git commit

Creates snapshot of staged changes.

```bash
git commit -m "fix authentication bug"
```

Good commit message examples:
- `fix login validation`
- `add docker support`
- `update kubernetes manifests`

Bad examples:
- `changes`
- `update`
- `fix`

---

# View Commit History

## git log

Displays commit history.

```bash
git log
```

Compact version:

```bash
git log --oneline
```

---

# Branching in Git

Branches allow developers to work independently.

Without branches:
- every developer modifies main code directly
- higher risk of breaking production

Branches solve this problem.

---

# Create Branch

## git checkout -b

Creates and switches branch.

```bash
git checkout -b feature/login
```

Benefits:
- isolated development
- safer experimentation
- parallel work

---

# Switch Branch

```bash
git checkout main
```

Moves between branches.

---

# Merge Branches

## git merge

Combines changes from another branch.

```bash
git merge feature/login
```

Usually done after:
- code review
- testing
- approval

---

# Merge Conflicts

Conflicts happen when:
- two developers modify same lines
- Git cannot decide which version to keep

Git marks conflicts manually:

```txt
<<<<<<< HEAD
current code
=======
incoming code
>>>>>>> feature-branch
```

Developer must:
- edit file manually
- remove markers
- commit resolved version

---

# GitHub Integration

GitHub is a cloud platform for hosting Git repositories.

Git manages:
- version control

GitHub provides:
- remote hosting
- collaboration
- pull requests
- CI/CD integrations
- issue tracking

---

# Connect Local Repo to GitHub

```bash
git remote add origin https://github.com/user/repo.git
```

Verify remote:

```bash
git remote -v
```

---

# Push Code to GitHub

```bash
git push -u origin main
```

The `-u` flag sets upstream tracking.

Future pushes become:

```bash
git push
```

---

# Pull Latest Changes

## git pull

Downloads latest changes from remote repository.

```bash
git pull origin main
```

Important before pushing code.

Prevents:
- merge conflicts
- outdated local branches

---

# Real-world Git Workflow

In companies, Git workflows usually involve:

1. Clone repository
2. Create feature branch
3. Write code
4. Commit changes
5. Push branch
6. Create Pull Request (PR)
7. Code review
8. CI/CD checks run
9. Merge into main
10. Deploy application

---

# Git in DevOps & DevSecOps

Git is heavily integrated with:
- GitHub Actions
- Jenkins
- GitLab CI/CD
- ArgoCD
- Terraform
- Kubernetes pipelines

Git repositories often store:
- source code
- Dockerfiles
- Kubernetes manifests
- Terraform files
- CI/CD pipelines

---

# Security Best Practices

---

# Never Commit Secrets

Do NOT commit:
- API keys
- passwords
- `.env`
- SSH keys
- cloud credentials

Use:
```bash
.gitignore
```

to exclude sensitive files.

---

# Use Signed Commits

Signed commits improve authenticity.

```bash
git commit -S -m "secure commit"
```

---

# Protect Main Branch

Production branches should:
- require pull requests
- require code reviews
- block force pushes
- require CI checks

---

# Common Git Mistakes

---

# Force Push to Main

Dangerous command:

```bash
git push --force
```

Can overwrite production history.

Avoid unless absolutely necessary.

---

# Huge Commits

Bad practice:
- difficult reviews
- difficult rollback
- poor history readability

Better:
- smaller focused commits

---

# Committing Secrets

One of the most common security mistakes.

Use:
- `.gitignore`
- secret scanners
- git-secrets
- Trivy
- Gitleaks

---

# Troubleshooting

---

# Permission denied (publickey)

Cause:
SSH authentication failed.

Fix:

```bash
ssh-keygen -t ed25519
```

Then add public key to GitHub.

---

# Merge Conflict Error

Cause:
Two branches modified same lines.

Fix:
1. open conflicted file
2. remove conflict markers
3. keep correct code
4. commit resolved version

---

# Detached HEAD State

Occurs when checking out commit directly.

Fix:

```bash
git checkout main
```

or create branch:

```bash
git checkout -b fix-branch
```

---

# Interview Questions

---

## Difference between Git and GitHub?

Git:
- version control system

GitHub:
- cloud hosting platform for Git repositories

---

## What is a commit?

A commit is a snapshot of project changes at a specific point in time.

---

## What is branching?

Branching allows isolated development without affecting main codebase.

---

## Difference between merge and rebase?

Merge:
- preserves history
- creates merge commit

Rebase:
- rewrites history
- creates linear commit flow

---

## Why is Git important in DevOps?

Git enables:
- CI/CD automation
- collaboration
- infrastructure versioning
- deployment tracking

---

# Summary

Git is one of the most important technologies in modern software engineering and DevSecOps.

Without Git:
- collaboration becomes difficult
- CI/CD pipelines break
- deployments become risky
- rollback becomes harder

Mastering Git is the first major step toward becoming:
- DevOps Engineer
- DevSecOps Engineer
- Cloud Engineer
- Platform Engineer
- Software Engineer