# Docker Fundamentals

Docker is one of the most important technologies in modern DevOps and DevSecOps.

It allows developers to package applications together with all dependencies into lightweight, portable containers.

Docker solves the classic problem:

> "It works on my machine but not on the server."

---

# What is Docker?

Docker is a containerization platform.

It allows applications to run consistently across:
- developer laptops
- testing environments
- cloud servers
- Kubernetes clusters

Docker packages:
- application code
- runtime
- libraries
- dependencies
- configurations

into a single portable unit called a **container**.

---

# Why Docker Exists

Before Docker:
- applications behaved differently on different systems
- dependency conflicts were common
- deployments were unreliable
- scaling was difficult

Developers often faced:
- version mismatches
- missing packages
- broken environments

Docker solved these issues using:
- isolated containers
- portable images
- reproducible environments

---

# Containers vs Virtual Machines

## Virtual Machines

VMs contain:
- full operating system
- guest kernel
- applications

Problems:
- heavy resource usage
- slow startup
- larger storage

---

## Containers

Containers share host OS kernel.

Benefits:
- lightweight
- fast startup
- smaller size
- better scalability

---

# Docker Architecture

Docker mainly consists of:

---

# 1. Docker Client

CLI used by developers.

Example:

```bash
docker run nginx
```

---

# 2. Docker Daemon

Background service managing:
- containers
- images
- networks
- volumes

Runs as:
```bash
dockerd
```

---

# 3. Docker Images

Blueprint/template used to create containers.

Images are:
- read-only
- reusable
- layered

Example:
```bash
nginx:latest
```

---

# 4. Docker Containers

Running instances of images.

Containers are:
- isolated
- lightweight
- temporary by default

---

# 5. Docker Registry

Stores Docker images.

Examples:
- Docker Hub
- GitHub Container Registry
- AWS ECR

---

# Docker Workflow

Typical Docker workflow:

```bash
docker build -t my-app .
docker run my-app
docker push my-app
```

---

# Important Docker Commands

---

# Check Docker Version

```bash
docker --version
```

Verifies Docker installation.

---

# Pull Image

## docker pull

Downloads image from registry.

```bash
docker pull nginx
```

---

# List Images

## docker images

Shows downloaded images.

```bash
docker images
```

---

# Run Container

## docker run

Creates and starts container.

```bash
docker run nginx
```

Run in detached mode:

```bash
docker run -d nginx
```

Port mapping:

```bash
docker run -p 8080:80 nginx
```

---

# List Running Containers

## docker ps

```bash
docker ps
```

Show all containers:

```bash
docker ps -a
```

---

# Stop Container

## docker stop

```bash
docker stop container-id
```

---

# Remove Container

## docker rm

```bash
docker rm container-id
```

---

# Build Image

## docker build

Build image from Dockerfile.

```bash
docker build -t my-app .
```

Flags:
- `-t` → tag image

---

# View Logs

## docker logs

```bash
docker logs container-id
```

Follow logs live:

```bash
docker logs -f container-id
```

---

# Enter Container

## docker exec

```bash
docker exec -it container-id bash
```

Flags:
- `-i` → interactive
- `-t` → terminal

---

# Dockerfile

Dockerfile contains instructions for building images.

Example:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]
```

---

# Important Dockerfile Instructions

---

## FROM

Base image.

```dockerfile
FROM ubuntu:22.04
```

---

## WORKDIR

Sets working directory.

```dockerfile
WORKDIR /app
```

---

## COPY

Copies files.

```dockerfile
COPY . .
```

---

## RUN

Executes commands during build.

```dockerfile
RUN npm install
```

---

## CMD

Default startup command.

```dockerfile
CMD ["npm", "start"]
```

---

# Docker Networking

Containers communicate using networks.

Create network:

```bash
docker network create my-network
```

Run container in network:

```bash
docker run --network my-network nginx
```

---

# Docker Volumes

Volumes store persistent data.

Without volumes:
- container data is lost after deletion

Create volume:

```bash
docker volume create app-data
```

Mount volume:

```bash
docker run -v app-data:/data nginx
```

---

# Docker Compose

Docker Compose manages multi-container applications.

Example:
- frontend
- backend
- database

all together.

---

# Example docker-compose.yml

```yaml
version: "3"

services:
  web:
    image: nginx
    ports:
      - "8080:80"

  redis:
    image: redis
```

Run services:

```bash
docker compose up
```

---

# Real-world Docker Usage

Companies use Docker for:
- microservices
- CI/CD pipelines
- cloud deployments
- Kubernetes workloads
- application isolation

Docker integrates with:
- Kubernetes
- Jenkins
- GitHub Actions
- AWS
- Azure
- GCP

---

# Docker in DevSecOps

Docker is heavily used in DevSecOps pipelines.

Common security scans:
- Trivy
- Grype
- Snyk

Typical workflow:
1. Build image
2. Scan image
3. Push image
4. Deploy securely

---

# Docker Security Best Practices

---

# Use Minimal Base Images

Prefer:
```dockerfile
node:alpine
```

instead of:
```dockerfile
node:latest
```

Benefits:
- smaller size
- fewer vulnerabilities

---

# Do Not Run as Root

Bad:
```dockerfile
USER root
```

Better:
```dockerfile
USER appuser
```

---

# Scan Images Regularly

Use Trivy:

```bash
trivy image my-app
```

---

# Never Store Secrets in Images

Do NOT hardcode:
- passwords
- API keys
- tokens

Use:
- environment variables
- secret managers

---

# Common Docker Mistakes

- huge images
- using latest tag everywhere
- running containers as root
- exposing unnecessary ports
- ignoring vulnerability scans

---

# Troubleshooting

---

# Docker Daemon Not Running

Error:
```bash
Cannot connect to the Docker daemon
```

Fix:

```bash
sudo systemctl start docker
```

---

# Port Already in Use

Error:
```bash
Bind for 0.0.0.0:80 failed
```

Cause:
another process already uses port.

Fix:
- stop conflicting process
- use different port

Example:

```bash
docker run -p 8080:80 nginx
```

---

# Container Exits Immediately

Cause:
main process finished.

Debug:

```bash
docker logs container-id
```

---

# Interview Questions

---

## Difference between Image and Container?

Image:
- blueprint/template

Container:
- running instance of image

---

## Why is Docker important in DevOps?

Docker provides:
- consistency
- portability
- scalability
- automation support

---

## What is a Dockerfile?

A text file containing instructions to build Docker images.

---

## Difference between CMD and ENTRYPOINT?

CMD:
- default arguments

ENTRYPOINT:
- fixed executable

---

## What is containerization?

Packaging applications and dependencies into isolated portable environments.

---

# Summary

Docker revolutionized software deployment by making applications:
- portable
- consistent
- scalable
- lightweight

Docker is now a core technology in:
- DevOps
- Cloud Computing
- Kubernetes
- DevSecOps
- CI/CD pipelines