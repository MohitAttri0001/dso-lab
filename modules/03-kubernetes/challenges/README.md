# 🏆 Kubernetes — Challenges

## Challenge 1 — Full deployment
Deploy your Docker image from Module 2 into Kubernetes:
1. Create a kind cluster called `challenge-cluster`
2. Load your `my-node-app` image into kind
3. Write a Deployment with 3 replicas
4. Write a Service to expose it
5. Verify all 3 pods are running

✅ Success: `kubectl get pods` shows 3 running pods

---

## Challenge 2 — Self healing
1. Get the name of one running pod
2. Delete that pod manually: `kubectl delete pod <name>`
3. Watch what happens: `kubectl get pods -w`

✅ Success: Kubernetes automatically creates a new pod

---

## Challenge 3 — ConfigMap
1. Create a ConfigMap with key `APP_ENV=production`
2. Mount it as an environment variable in your deployment
3. Exec into a pod and verify: `echo $APP_ENV`

✅ Success: Returns `production`

---

## 🏅 Completed? You've earned the Kubernetes badge!
Proceed to `../../04-cicd/theory/README.md`
