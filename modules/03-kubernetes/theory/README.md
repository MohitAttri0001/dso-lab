# ☸️ Kubernetes — Theory

## What is Kubernetes?
Kubernetes (K8s) manages and scales your Docker containers automatically.
Think of Docker as a **single ship**, Kubernetes as the **entire fleet manager**.

## Key Concepts

| Concept | What it is |
|---------|-----------|
| Pod | Smallest unit — one or more containers |
| Node | A machine (VM or physical) running pods |
| Cluster | A group of nodes managed together |
| Deployment | Manages how many pods run and updates them |
| Service | Exposes pods to network traffic |
| Namespace | Virtual cluster inside a cluster |
| ConfigMap | Store config data separately from code |
| Secret | Store sensitive data like passwords |

## Key Commands

| Command | What it does |
|---------|-------------|
| `kubectl get pods` | List all pods |
| `kubectl get nodes` | List all nodes |
| `kubectl apply -f file.yml` | Create/update resources |
| `kubectl delete -f file.yml` | Delete resources |
| `kubectl describe pod <name>` | Detailed pod info |
| `kubectl logs <pod>` | View pod logs |
| `kubectl exec -it <pod> -- bash` | Enter a pod |
| `kubectl scale deployment <name> --replicas=3` | Scale up/down |

## Kubernetes Workflow
Dockerfile → Image → Pod → Deployment → Service → User
## Next Step
Go to `../exercises/README.md`
