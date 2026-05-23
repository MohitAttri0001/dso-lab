# Terraform Fundamentals

Terraform is one of the most important Infrastructure as Code (IaC) tools used in modern DevOps and Cloud Engineering.

Terraform allows engineers to:
- automate infrastructure
- manage cloud resources
- provision servers
- create networks
- deploy containers
- manage Kubernetes clusters

using code instead of manual configuration.

Terraform is heavily used in:
- AWS
- Azure
- Google Cloud
- Kubernetes
- DevOps pipelines
- Platform Engineering

---

# What is Terraform?

Terraform is an open-source Infrastructure as Code (IaC) tool created by HashiCorp.

It allows you to define infrastructure using configuration files.

Instead of manually creating:
- virtual machines
- networks
- databases
- Kubernetes clusters

you write code that automatically creates them.

---

# Why Terraform Exists

Before Terraform:
- infrastructure was created manually
- environments became inconsistent
- scaling was difficult
- configuration drift happened frequently
- deployments were slow

Problems included:
- human errors
- missing configurations
- difficult recovery
- inconsistent environments

Terraform solved this using:
- automation
- reproducibility
- declarative infrastructure
- version-controlled infrastructure

---

# What is Infrastructure as Code (IaC)?

Infrastructure as Code means:

> Managing infrastructure using code instead of manual processes.

Benefits:
- automation
- consistency
- repeatability
- scalability
- version control
- faster deployments

---

# Declarative vs Imperative Infrastructure

---

# Imperative Approach

You define:
- HOW to create infrastructure

Example:
```bash
create VM
install packages
configure network
```

---

# Declarative Approach

You define:
- WHAT infrastructure should look like

Terraform automatically determines:
- how to create it

This is Terraform’s approach.

---

# Terraform Architecture

Terraform mainly consists of:

- Terraform Core
- Providers
- State File
- Configuration Files

---

# Terraform Core

Main engine responsible for:
- reading configurations
- creating execution plans
- managing state
- applying changes

---

# Providers

Providers allow Terraform to communicate with platforms.

Examples:
- AWS
- Azure
- GCP
- Docker
- Kubernetes

Example:

```hcl
provider "aws" {
  region = "ap-south-1"
}
```

---

# State File

Terraform stores infrastructure information inside:

```text
terraform.tfstate
```

This tracks:
- resources
- configurations
- metadata

Terraform uses state to determine:
- what exists
- what changed
- what must be updated

---

# Terraform Configuration Files

Terraform uses:

```text
.tf
```

files written in:
- HCL (HashiCorp Configuration Language)

---

# Basic Terraform Workflow

Typical workflow:

```text
Write Code → terraform init → terraform plan → terraform apply
```

---

# Important Terraform Commands

---

# terraform init

Initializes Terraform project.

Downloads:
- providers
- modules

Example:

```bash
terraform init
```

---

# terraform plan

Shows execution plan.

Preview of:
- resources to create
- changes to apply

Example:

```bash
terraform plan
```

---

# terraform apply

Creates or modifies infrastructure.

Example:

```bash
terraform apply
```

Auto approve:

```bash
terraform apply -auto-approve
```

---

# terraform destroy

Deletes infrastructure.

Example:

```bash
terraform destroy
```

---

# terraform validate

Checks configuration syntax.

Example:

```bash
terraform validate
```

---

# terraform fmt

Formats Terraform code.

Example:

```bash
terraform fmt
```

---

# terraform output

Displays outputs.

Example:

```bash
terraform output
```

---

# Terraform File Structure

Typical structure:

```text
terraform-project/
├── main.tf
├── variables.tf
├── outputs.tf
├── terraform.tfvars
└── provider.tf
```

---

# main.tf

Contains main resources.

Example:

```hcl
resource "docker_container" "nginx" {
  image = "nginx"
  name  = "my-nginx"
}
```

---

# variables.tf

Defines reusable variables.

Example:

```hcl
variable "region" {
  default = "ap-south-1"
}
```

---

# outputs.tf

Displays useful information.

Example:

```hcl
output "container_name" {
  value = docker_container.nginx.name
}
```

---

# terraform.tfvars

Stores variable values.

Example:

```hcl
region = "us-east-1"
```

---

# Terraform Resources

Resources are infrastructure components.

Examples:
- VM
- container
- database
- network
- load balancer

Example:

```hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t2.micro"
}
```

---

# Terraform Variables

Variables make configurations reusable.

Example:

```hcl
variable "instance_type" {
  default = "t2.micro"
}
```

Usage:

```hcl
instance_type = var.instance_type
```

---

# Terraform Outputs

Outputs expose important values.

Examples:
- IP addresses
- URLs
- resource IDs

---

# Terraform Modules

Modules are reusable Terraform components.

Benefits:
- reusable code
- cleaner architecture
- standardization

Example:

```hcl
module "network" {
  source = "./modules/network"
}
```

---

# Terraform Providers

Terraform supports many providers.

Popular providers:
- AWS
- Azure
- GCP
- Kubernetes
- Docker
- GitHub

---

# Docker with Terraform

Example:

```hcl
provider "docker" {}

resource "docker_image" "nginx" {
  name = "nginx:latest"
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "terraform-nginx"
}
```

---

# Kubernetes with Terraform

Terraform can manage:
- clusters
- namespaces
- deployments
- services

Example:

```hcl
provider "kubernetes" {}
```

---

# Terraform in DevOps

Terraform is heavily used in:
- cloud automation
- CI/CD pipelines
- Kubernetes infrastructure
- infrastructure provisioning
- GitOps workflows

Terraform integrates with:
- GitHub Actions
- Jenkins
- ArgoCD
- Kubernetes
- Docker

---

# Terraform in DevSecOps

Security is critical in Infrastructure as Code.

Terraform security focuses on:
- least privilege
- secure networking
- secret management
- compliance

---

# Terraform Security Best Practices

---

# Never Hardcode Secrets

Bad:

```hcl
password = "admin123"
```

Better:
- environment variables
- Vault
- AWS Secrets Manager

---

# Use Remote State

Avoid local state in teams.

Use:
- S3
- Terraform Cloud
- Azure Storage

Benefits:
- collaboration
- locking
- backup

---

# Enable State Locking

Prevents concurrent modifications.

---

# Use Least Privilege IAM

Terraform should only have permissions it needs.

---

# Scan Terraform Code

Use:
- Trivy
- tfsec
- Checkov

Example:

```bash
trivy config .
```

---

# Common Terraform Mistakes

- hardcoded credentials
- no remote state
- over-permissioned IAM
- skipping validation
- large monolithic configs
- ignoring security scans

---

# Terraform State Management

State is extremely important.

Problems with bad state management:
- infrastructure drift
- accidental deletion
- conflicting changes

Best practice:
- store state remotely
- enable locking
- backup state files

---

# Terraform Cloud

Terraform Cloud provides:
- remote execution
- state management
- collaboration
- policy enforcement

---

# Real-world Terraform Usage

Companies use Terraform for:
- cloud infrastructure
- Kubernetes provisioning
- networking
- multi-cloud deployments
- CI/CD automation

Major users:
- Netflix
- Shopify
- Airbnb
- Stripe

---

# CI/CD with Terraform

Terraform is often automated inside pipelines.

Typical workflow:

1. Developer updates `.tf` files
2. GitHub Actions starts
3. terraform fmt
4. terraform validate
5. terraform plan
6. security scan
7. approval
8. terraform apply

---

# Example GitHub Actions Terraform Workflow

```yaml
name: Terraform Pipeline

on: [push]

jobs:
  terraform:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Terraform Init
      run: terraform init

    - name: Terraform Validate
      run: terraform validate

    - name: Terraform Plan
      run: terraform plan
```

---

# Troubleshooting

---

# Provider Plugin Error

Fix:

```bash
terraform init
```

Again downloads providers.

---

# State Lock Error

Cause:
another process holds lock.

Fix carefully:

```bash
terraform force-unlock LOCK_ID
```

---

# Validation Errors

Check:
- syntax
- variables
- provider configuration

Use:

```bash
terraform validate
```

---

# Drift Detected

Infrastructure changed outside Terraform.

Fix:
- import resources
- re-apply configs

---

# Interview Questions

---

## What is Terraform?

Terraform is an Infrastructure as Code tool used to automate infrastructure provisioning.

---

## What is IaC?

Managing infrastructure using code.

---

## Difference between terraform plan and apply?

plan:
- preview changes

apply:
- executes changes

---

## What is Terraform state?

State file tracks infrastructure managed by Terraform.

---

## Why are Terraform modules important?

Modules provide:
- reusable
- scalable
- maintainable

infrastructure code.

---

## Why should secrets never be hardcoded?

Hardcoded secrets can expose infrastructure and credentials.

---

# Summary

Terraform is one of the most important tools in:
- DevOps
- Cloud Engineering
- Platform Engineering
- DevSecOps

It enables:
- infrastructure automation
- reproducible environments
- scalable cloud management
- secure infrastructure provisioning

Terraform is now a foundational technology in modern cloud-native engineering.