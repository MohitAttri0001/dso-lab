# 🏋️ Docker — Exercises

Complete in order. Each builds on the previous one.

---

## Exercise 1 — Pull and run your first container

```bash
docker pull hello-world
docker run hello-world
docker images
docker ps -a
```

✅ Expected: See "Hello from Docker!" message

---

## Exercise 2 — Run a real app in a container

```bash
docker run -d -p 8080:80 --name my-nginx nginx
docker ps
```

Now open your browser and go to:
👉 http://localhost:8080

✅ Expected: Nginx welcome page visible in browser

Stop and remove it when done:
```bash
docker stop my-nginx
docker rm my-nginx
```

---

## Exercise 3 — Build your own image

```bash
mkdir ~/docker-practice && cd ~/docker-practice
```

Create the app file:
```bash
cat > app.py << 'PYEOF'
from http.server import HTTPServer, BaseHTTPRequestHandler

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"Hello from my Docker container!")

HTTPServer(("", 8080), Handler).serve_forever()
PYEOF
```

Create the Dockerfile:
```bash
cat > Dockerfile << 'DEOF'
FROM python:3.11-slim
WORKDIR /app
COPY app.py .
EXPOSE 8080
CMD ["python", "app.py"]
DEOF
```

Build and run:
```bash
docker build -t my-python-app .
docker run -d -p 8080:8080 --name my-app my-python-app
```

Test it:
```bash
curl http://localhost:8080
```

✅ Expected: `Hello from my Docker container!`

---

## Exercise 4 — Enter a running container

```bash
docker exec -it my-app bash
ls
cat app.py
exit
```

✅ Expected: You can see files inside the container

---

## Exercise 5 — Docker Compose

```bash
cd ~/docker-practice
cat > docker-compose.yml << 'CEOF'
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:8080"
  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
CEOF
```

Run both services:
```bash
docker compose up -d
docker compose ps
docker compose logs
docker compose down
```

✅ Expected: Both web and redis containers running together

---

## ✅ Done with exercises?
Move to `../challenges/README.md`
