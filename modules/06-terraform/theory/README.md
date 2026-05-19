# 🏗️ Terraform — Theory

## What is Terraform?
Terraform lets you create and manage infrastructure using code.
Instead of clicking buttons in AWS/Azure/GCP — you write code.
This is called **Infrastructure as Code (IaC)**.

## Why Terraform?
- Reproducible: same code = same infrastructure every time
- Version controlled: track infrastructure changes in Git
- Automated: no manual clicking in cloud consoles

## Key Concepts

| Concept | What it is |
|---------|-----------|
| Provider | Plugin to talk to cloud (AWS, GCP, Azure) |
| Resource | A piece of infrastructure (VM, database, network) |
| State | Terraform's record of what it created |
| Plan | Preview of what Terraform will do |
| Apply | Actually create/change infrastructure |
| Destroy | Delete all infrastructure |
| Module | Reusable group of resources |
| Variable | Input value to make configs reusable |

## Basic Structure

```hcl
# Provider
terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
    }
  }
}

provider "docker" {}

# Resource
resource "docker_container" "web" {
  name  = "my-web-app"
  image = "nginx:alpine"
  ports {
    internal = 80
    external = 8080
  }
}
```

## Terraform Workflow
Write .tf files → terraform init → terraform plan → terraform apply → terraform destroy
## Next Step
Go to `../exercises/README.md`
