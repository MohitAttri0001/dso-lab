# 🏋️ Terraform — Exercises

## Exercise 1 — First Terraform config

```bash
mkdir ~/terraform-practice && cd ~/terraform-practice
```

```bash
cat > main.tf << 'TEOF'
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name = "nginx:alpine"
}

resource "docker_container" "web" {
  name  = "terraform-nginx"
  image = docker_image.nginx.image_id
  ports {
    internal = 80
    external = 8088
  }
}
TEOF
```

Run the workflow:
```bash
terraform init
terraform plan
terraform apply
```

Verify:
```bash
docker ps | grep terraform-nginx
curl http://localhost:8088
```

✅ Expected: Nginx running, managed by Terraform

---

## Exercise 2 — Variables

```bash
cat > variables.tf << 'VEOF'
variable "container_name" {
  description = "Name of the container"
  type        = string
  default     = "my-app"
}

variable "external_port" {
  description = "External port"
  type        = number
  default     = 8089
}
VEOF
```

Update `main.tf` to use variables:
```bash
cat > main.tf << 'TEOF'
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name = "nginx:alpine"
}

resource "docker_container" "web" {
  name  = var.container_name
  image = docker_image.nginx.image_id
  ports {
    internal = 80
    external  = var.external_port
  }
}
TEOF
```

```bash
terraform apply -var="container_name=custom-app" -var="external_port=8090"
```

✅ Expected: Container named `custom-app` running on port 8090

---

## Exercise 3 — Clean up

```bash
terraform destroy
docker ps
```

✅ Expected: Container removed by Terraform

---

## ✅ Done? Move to `../challenges/README.md`
