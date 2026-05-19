# 🏆 Terraform — Challenges

## Challenge 1 — Multi-container setup
Write Terraform code that creates:
1. An Nginx container on port 8080
2. A Redis container on port 6379
3. Both on the same Docker network

✅ Success: Both containers running, on same network

---

## Challenge 2 — Variables and outputs
1. Add an `outputs.tf` file that outputs:
   - Container name
   - Container ID
   - External port
2. Run `terraform output` after apply

✅ Success: All outputs display correctly

---

## Challenge 3 — Scan with Trivy
Run Trivy IaC scan on your Terraform files:

```bash
trivy config ~/terraform-practice/
```

1. Read the findings
2. Fix any HIGH severity misconfigurations
3. Run scan again to verify fixes

✅ Success: No HIGH severity findings

---

## 🏅 Completed? You've earned the Terraform badge!
You've completed all 6 modules! 🎉
