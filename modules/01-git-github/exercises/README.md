# 🏋️ Git & GitHub — Exercises

Complete these in order. Each builds on the previous one.

---

## Exercise 1 — Initialize a repo

```bash
mkdir git-practice
cd git-practice
git init
```

✅ Expected: `Initialized empty Git repository in .../git-practice/.git/`

---

## Exercise 2 — Make your first commit

```bash
echo "# My First Repo" > README.md
git status
git add README.md
git status
git commit -m "first commit: add README"
git log --oneline
```

✅ Expected: You see your commit in the log

---

## Exercise 3 — Create and switch branches

```bash
git checkout -b feature/hello-world
echo "print('Hello, DevSecOps!')" > hello.py
git add hello.py
git commit -m "add hello world script"
git log --oneline
```

✅ Expected: 2 commits visible, on branch `feature/hello-world`

---

## Exercise 4 — Merge branch into main

```bash
git checkout main
git merge feature/hello-world
git log --oneline
```

✅ Expected: Both commits now visible on main

---

## Exercise 5 — Push to GitHub

1. Create a new repo on GitHub called `git-practice`
2. Then run:

```bash
git remote add origin git@github.com:MohitAttri0001/git-practice.git
git push -u origin main
```

✅ Expected: Repo visible on GitHub with your files

---

## Exercise 6 — Simulate a team workflow

```bash
git checkout -b feature/new-feature
echo "new feature code" > feature.txt
git add feature.txt
git commit -m "add new feature"
git push origin feature/new-feature
```

Now go to GitHub and create a **Pull Request** from `feature/new-feature` into `main`.

✅ Expected: PR visible on GitHub, ready to merge

---

## ✅ Done with exercises?
Move to `../challenges/README.md` to test yourself!
