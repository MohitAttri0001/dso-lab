# 🏆 Git & GitHub — Challenge

## Rules
- No hints allowed
- Try for at least 15 minutes before looking at solutions
- Solutions are in `../solutions/`

---

## Challenge 1 — The Broken Repo

You will fix a repo that has issues.

```bash
# Setup — run this first
mkdir broken-repo && cd broken-repo
git init
echo "hello" > file1.txt
echo "world" > file2.txt
```

**Your tasks:**
1. Stage only `file1.txt` and commit it with message `"add file1"`
2. Create a branch called `fix/add-file2`
3. Stage and commit `file2.txt` on that branch
4. Merge `fix/add-file2` back into `main`
5. Push the final result to a new GitHub repo called `broken-repo`

✅ Success: Both files on main branch, visible on GitHub

---

## Challenge 2 — Conflict Resolution

```bash
# Setup
mkdir conflict-practice && cd conflict-practice
git init
echo "line 1" > story.txt
git add . && git commit -m "init"
```

**Your tasks:**
1. Create branch `version-a` — change `story.txt` to say `"line 1 — version A"`
2. Go back to main — change `story.txt` to say `"line 1 — version B"`
3. Try to merge `version-a` into main
4. Resolve the conflict manually
5. Complete the merge

✅ Success: Conflict resolved, single clean commit on main

---

## 🏅 Completed both challenges?
You've earned the **Git & GitHub badge!**
Proceed to `../../02-docker/theory/README.md`
