# Kubernetes Fundamentals

Kubernetes (K8s) is the industry-standard container orchestration platform used to deploy, manage, scale and automate containerized applications.

Modern companies use Kubernetes to run:
- microservices
- cloud-native applications
- DevOps pipelines
- AI workloads
- scalable enterprise infrastructure

Kubernetes is one of the most important technologies in DevOps and Cloud Engineering.

---

# What is Kubernetes?

Kubernetes is an open-source container orchestration system.

It automates:
- deployment
- scaling
- networking
- recovery
- monitoring

of containerized applications.

Kubernetes was originally developed by Google and later donated to the CNCF (Cloud Native Computing Foundation).

---

# Why Kubernetes Exists

Docker solved:
- containerization

But managing hundreds or thousands of containers manually became difficult.

Problems:
- container crashes
- scaling issues
- networking complexity
- load balancing
- service discovery
- rolling updates

Kubernetes solves these problems automatically.

---

# Kubernetes Architecture

Kubernetes mainly consists of:

---

# Control Plane

Manages the cluster.

Responsible for:
- scheduling
- orchestration
- API management
- cluster state

---

# Worker Nodes

Machines where applications run.

Worker nodes contain:
- pods
- containers
- kubelet
- container runtime

---

# Important Kubernetes Components

---

# 1. API Server

Central communication component.

All Kubernetes commands communicate through:
- kube-apiserver

Example:

```bash
kubectl get pods
```

sends request to API server.

---

# 2. etcd

Distributed key-value database.

Stores:
- cluster configuration
- secrets
- state information

---

# 3. Scheduler

Decides:
- where pods should run

based on:
- resources
- policies
- constraints

---

# 4. Controller Manager

Maintains desired cluster state.

Example:
- restart failed pods
- maintain replica count

---

# 5. Kubelet

Agent running on each worker node.

Responsibilities:
- communicate with API server
- manage containers
- monitor pod health

---

# Core Kubernetes Concepts

---

# Pod

Smallest deployable unit in Kubernetes.

A pod contains:
- one or more containers

Example:
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
```

---

# Node

Machine running Kubernetes workloads.

Can be:
- virtual machine
- cloud instance
- physical server

---

# Cluster

Collection of:
- control plane
- worker nodes

working together.

---

# Deployment

Manages pods automatically.

Provides:
- scaling
- rolling updates
- self healing

Example:
```yaml
kind: Deployment
```

---

# Service

Exposes applications to network traffic.

Types:
- ClusterIP
- NodePort
- LoadBalancer

---

# Namespace

Logical separation inside cluster.

Used for:
- environments
- teams
- isolation

Example:
```bash
kubectl get pods -n production
```

---

# ConfigMap

Stores non-sensitive configuration data.

Examples:
- environment variables
- config files

---

# Secret

Stores sensitive information securely.

Examples:
- API keys
- passwords
- tokens

---

# Kubernetes Workflow

Typical workflow:

1. Build Docker image
2. Push image to registry
3. Create Kubernetes manifests
4. Apply manifests
5. Monitor pods
6. Scale application

---

# Important Kubernetes Commands

---

# Check Cluster Info

```bash
kubectl cluster-info
```

Shows cluster endpoints.

---

# Get Nodes

```bash
kubectl get nodes
```

Displays worker nodes.

---

# Get Pods

```bash
kubectl get pods
```

Shows running pods.

More details:

```bash
kubectl get pods -o wide
```

---

# Describe Resource

```bash
kubectl describe pod pod-name
```

Shows:
- events
- errors
- configurations

---

# View Logs

```bash
kubectl logs pod-name
```

Follow logs live:

```bash
kubectl logs -f pod-name
```

---

# Apply YAML Files

```bash
kubectl apply -f deployment.yaml
```

Creates or updates resources.

---

# Delete Resources

```bash
kubectl delete -f deployment.yaml
```

Removes resources.

---

# Scale Deployments

```bash
kubectl scale deployment nginx --replicas=5
```

Changes replica count.

---

# Execute Commands Inside Pod

```bash
kubectl exec -it pod-name -- bash
```

Useful for:
- debugging
- troubleshooting

---

# Kubernetes YAML Files

Kubernetes resources are defined using YAML manifests.

Example Deployment:

```yaml
apiVersion: apps/v1
kind: Deployment

metadata:
  name: nginx-deployment

spec:
  replicas: 2

  selector:
    matchLabels:
      app: nginx

  template:
    metadata:
      labels:
        app: nginx

    spec:
      containers:
      - name: nginx
        image: nginx:latest
```

---

# Kubernetes Networking

Every pod receives:
- unique IP address

Kubernetes networking enables:
- pod-to-pod communication
- service discovery
- load balancing

---

# Kubernetes Scaling

Kubernetes supports automatic scaling.

Types:
- Horizontal Pod Autoscaler (HPA)
- Vertical Pod Autoscaler (VPA)

Example:

```bash
kubectl autoscale deployment nginx --cpu-percent=70 --min=2 --max=10
```

---

# Self Healing

Kubernetes automatically:
- restarts failed containers
- replaces unhealthy pods
- reschedules workloads

This is one of Kubernetes' most powerful features.

---

# Real-world Kubernetes Usage

Companies use Kubernetes for:
- microservices
- cloud-native applications
- AI/ML infrastructure
- enterprise platforms
- scalable APIs

Major users:
- Google
- Spotify
- Netflix
- Airbnb
- Adobe

---

# Kubernetes in DevOps & DevSecOps

Kubernetes integrates with:
- Docker
- Helm
- ArgoCD
- Jenkins
- GitHub Actions
- Terraform

Used heavily in:
- GitOps workflows
- CI/CD pipelines
- infrastructure automation

---

# Kubernetes Security Best Practices

---

# Never Run Containers as Root

Bad:
```yaml
runAsUser: 0
```

Better:
```yaml
runAsNonRoot: true
```

---

# Use Resource Limits

Prevent resource abuse.

Example:

```yaml
resources:
  limits:
    memory: "512Mi"
    cpu: "500m"
```

---

# Use Namespaces

Separate:
- production
- staging
- development

---

# Use RBAC

RBAC = Role-Based Access Control.

Controls:
- user permissions
- service permissions

---

# Scan Kubernetes Configurations

Use Trivy:

```bash
trivy config .
```

Detects:
- misconfigurations
- insecure settings

---

# Common Kubernetes Mistakes

- using latest image tags
- no resource limits
- exposing services publicly
- hardcoded secrets
- no readiness probes
- running privileged containers

---

# Troubleshooting

---

# Pod CrashLoopBackOff

Cause:
container repeatedly crashing.

Debug:

```bash
kubectl logs pod-name
```

---

# ImagePullBackOff

Cause:
Kubernetes cannot pull image.

Possible reasons:
- wrong image name
- authentication issue
- missing registry access

---

# Pending Pods

Cause:
insufficient resources or scheduling issue.

Debug:

```bash
kubectl describe pod pod-name
```

---

# Service Not Accessible

Check:
- service type
- port mapping
- selectors
- pod status

---

# Interview Questions

---

## What is Kubernetes?

Kubernetes is a container orchestration platform used to automate deployment and management of containerized applications.

---

## Difference between Pod and Container?

Container:
- application runtime

Pod:
- wrapper around one or more containers

---

## What is a Deployment?

Deployment manages:
- replica count
- updates
- self healing

for pods.

---

## What is a Service?

Service exposes applications to network traffic.

---

## Why is Kubernetes important in DevOps?

Kubernetes provides:
- automation
- scalability
- resilience
- orchestration

for modern cloud-native infrastructure.

---

# Summary

Kubernetes is the backbone of modern cloud-native infrastructure.

It provides:
- scalability
- automation
- self healing
- orchestration
- resilience

and is one of the most valuable skills in:
- DevOps
- Cloud Engineering
- DevSecOps
- Platform Engineering