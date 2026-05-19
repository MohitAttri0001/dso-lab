# 🐳 Docker — Theory

## What is Docker?
Docker is a tool that packages your application and everything it needs
(code, libraries, settings) into a single unit called a **container**.

Think of it as a **lunchbox** — everything your app needs is packed
inside, and it works the same everywhere.

## Why Docker?
❌ Without Docker: "It works on my machine but not on the server"
✅ With Docker: Works the same everywhere — laptop, server, cloud

## Key Concepts

### Image
A blueprint/template for creating containers.
Like a **recipe** — it defines what goes inside.

### Container
A running instance of an image.
Like a **meal made from the recipe** — the actual running thing.

### Dockerfile
A text file with instructions to build an image.
Like the **recipe card** itself.

### Docker Hub
A registry where Docker images are stored and shared.
Like the **App Store but for containers**.

### Docker Compose
A tool to run multiple containers together.
Like a **conductor** managing multiple services at once.

## Key Commands

| Command | What it does |
|---------|-------------|
| `docker pull <image>` | Download an image |
| `docker images` | List downloaded images |
| `docker run <image>` | Create and start a container |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker stop <id>` | Stop a container |
| `docker rm <id>` | Remove a container |
| `docker rmi <image>` | Remove an image |
| `docker build -t <name> .` | Build image from Dockerfile |
| `docker logs <id>` | View container logs |
| `docker exec -it <id> bash` | Enter a running container |

## Dockerfile Structure

```dockerfile
FROM node:20-alpine        # Base image
WORKDIR /app               # Set working directory
COPY package*.json ./      # Copy dependency files
RUN npm install            # Install dependencies
COPY . .                   # Copy all source code
EXPOSE 3000                # Open port
CMD ["node", "server.js"]  # Start command
```

## Docker Workflow
Dockerfile → docker build → Image → docker run → Container
↑
Docker Hub
## Next Step
Go to `../exercises/README.md` to practice hands-on!
