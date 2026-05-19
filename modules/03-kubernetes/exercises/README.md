# 🏋️ Kubernetes — Exercises

## Exercise 1 — Start a local cluster

```bash
kind create cluster --name dso-lab
kubectl cluster-info
kubectl get nodes
```

✅ Expected: 1 node showing `Ready`

---

## Exercise 2 — Deploy your first app

```bash
cat > deployment.yml << 'KEOF'
apiVersion: apps/v1
kind: Deployment
metadata:
  name: hello-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      labels:
        app: hello
    spec:
      containers:
      - name: hello
        image: nginx:alpine
        ports:
        - containerPort: 80
KEOF

kubectl apply -f deployment.yml
kubectl get pods
kubectl get deployments
```

✅ Expected: 2 pods running

---

## Exercise 3 — Expose with a Service

```bash
cat > service.yml << 'SEOF'
apiVersion: v1
kind: Service
metadata:
  name: hello-service
spec:
  selector:
    app: hello
  ports:
  - port: 80
    targetPort: 80
  type: ClusterIP
SEOF

kubectl apply -f service.yml
kubectl get services
```

✅ Expected: Service created

---

## Exercise 4 — Scale up and down

```bash
kubectl scale deployment hello-app --replicas=4
kubectl get pods
kubectl scale deployment hello-app --replicas=1
kubectl get pods
```

✅ Expected: Pods scale up then down

---

## Exercise 5 — Clean up

```bash
kubectl delete -f deployment.yml
kubectl delete -f service.yml
kind delete cluster --name dso-lab
```

✅ Expected: All resources removed

---

## ✅ Done? Move to `../challenges/README.md`
