import { ModuleData } from "./types"

export const dockerModule: ModuleData = {
  id: "02",
  title: "Docker",
  icon: "🐳",
  color: "from-blue-500 to-cyan-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Verify Docker Installation",
      goal: "Understand whether Docker is properly installed and running.",
      commands: [
        "docker --version",
        "docker info",
      ],
      expected:
        "Docker version and daemon information should appear without errors.",
    },

    {
      title: "Exercise 2 — Run Your First Container",
      goal: "Learn how Docker downloads and runs images.",
      commands: [
        "docker pull hello-world",
        "docker run hello-world",
        "docker images",
        "docker ps -a",
      ],
      expected:
        "You should see the 'Hello from Docker!' message and the hello-world image listed.",
    },

    {
      title: "Exercise 3 — Run Nginx Container",
      goal: "Learn detached mode and port mapping.",
      commands: [
        "docker run -d -p 8080:80 --name my-nginx nginx",
        "docker ps",
        "curl http://localhost:8080",
      ],
      expected:
        "Nginx should run on port 8080 and return the default welcome page.",
    },

    {
      title: "Exercise 4 — Inspect Container Logs",
      goal: "Learn how to inspect running containers.",
      commands: [
        "docker logs my-nginx",
        "docker inspect my-nginx",
      ],
      expected:
        "You should see container metadata and logs.",
    },

    {
      title: "Exercise 5 — Enter a Running Container",
      goal: "Learn how to access a container shell.",
      commands: [
        "docker exec -it my-nginx bash",
        "ls",
        "pwd",
        "exit",
      ],
      expected:
        "You should be able to interact with the container filesystem.",
    },

    {
      title: "Exercise 6 — Stop and Remove Containers",
      goal: "Learn proper cleanup workflow.",
      commands: [
        "docker stop my-nginx",
        "docker rm my-nginx",
        "docker ps -a",
      ],
      expected:
        "The my-nginx container should be removed successfully.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Containerize a Node.js Application",
      scenario:
        "You are given a simple Node.js application and need to run it inside Docker.",
      objectives: [
        "Create a Node.js app",
        "Write a Dockerfile",
        "Build a Docker image",
        "Run the application container",
        "Expose the app on port 3000",
      ],
      tasks: [
        "Create server.js with a simple HTTP server",
        "Create package.json",
        "Write a Dockerfile using node:20-alpine",
        "Build the image as dso-node-app",
        "Run the container on port 3000",
        "Verify using curl http://localhost:3000",
      ],
      success:
        "The application should respond successfully from inside the container.",
    },

    {
      title: "Lab 2 — Persistent Storage with Docker Volumes",
      scenario:
        "Your application data must survive container deletion.",
      objectives: [
        "Understand Docker volumes",
        "Create persistent storage",
        "Mount volumes into containers",
        "Verify persistence",
      ],
      tasks: [
        "Create a volume named dso-volume",
        "Run Ubuntu container with mounted volume",
        "Create a file inside mounted directory",
        "Delete the container",
        "Start a new container using same volume",
        "Verify the file still exists",
      ],
      success:
        "The file should persist after recreating the container.",
    },

    {
      title: "Lab 3 — Multi-container Application with Docker Compose",
      scenario:
        "You need to run multiple containers together using Docker Compose.",
      objectives: [
        "Understand Docker Compose",
        "Create docker-compose.yml",
        "Run multi-container applications",
      ],
      tasks: [
        "Create a docker-compose.yml file",
        "Add nginx service",
        "Add redis service",
        "Start services using docker compose up",
        "Verify both containers are running",
      ],
      success:
        "Both nginx and redis containers should run together successfully.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Container Exits Immediately",
      problem:
        "A container starts and then stops immediately.",
      symptoms: [
        "Container not visible in docker ps",
        "Container status shows Exited",
        "Application inaccessible",
      ],
      investigationSteps: [
        "Run docker ps -a",
        "Inspect logs using docker logs <container>",
        "Check startup command",
        "Verify whether application crashes",
      ],
      fix:
        "Ensure the main application process keeps running and check logs for startup failures.",
    },

    {
      title: "Troubleshooting 2 — Port Already Allocated",
      problem:
        "Docker cannot bind the requested port.",
      symptoms: [
        "Bind failed error",
        "Container fails to start",
        "Port already in use",
      ],
      investigationSteps: [
        "Check running containers",
        "Run sudo lsof -i :8080",
        "Identify conflicting process",
        "Try another port",
      ],
      fix:
        "Stop the conflicting process or map to another port like 8081:80.",
    },

    {
      title: "Troubleshooting 3 — Cannot Pull Image",
      problem:
        "Docker fails while pulling images from Docker Hub.",
      symptoms: [
        "Network timeout",
        "Access denied",
        "Image not found",
      ],
      investigationSteps: [
        "Verify internet connectivity",
        "Check image spelling",
        "Run docker login if required",
      ],
      fix:
        "Use valid image names and verify registry/network access.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Secure Nginx Deployment",
      scenario:
        "Deploy an nginx container securely and inspect it.",
      tasks: [
        "Run nginx in detached mode",
        "Expose it on localhost:8080",
        "Inspect logs",
        "Inspect container metadata",
        "Enter container shell",
        "Stop and remove container",
      ],
      success:
        "Nginx should be accessible and container should be cleaned up safely.",
    },

    {
      title: "Practice Task 2 — Vulnerability Scanning with Trivy",
      scenario:
        "Scan Docker images for vulnerabilities.",
      tasks: [
        "Install Trivy",
        "Scan nginx:latest",
        "Scan nginx:alpine",
        "Compare vulnerability counts",
        "Identify safer image",
      ],
      success:
        "You should understand how minimal images reduce attack surface.",
    },

    {
      title: "Practice Task 3 — Build Your Own Docker Image",
      scenario:
        "Create and run a custom Docker image.",
      tasks: [
        "Create a custom Dockerfile",
        "Build the image",
        "Tag the image properly",
        "Run the container",
        "Verify the application works",
      ],
      success:
        "Your custom image should build and run successfully.",
    },
  ],
}