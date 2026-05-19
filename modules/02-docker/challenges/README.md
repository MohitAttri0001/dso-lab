# 🏆 Docker — Challenges

## Rules
- No hints allowed
- Try for at least 20 minutes before checking solutions
- Solutions are in `../solutions/`

---

## Challenge 1 — Containerise a Node.js app

Create a simple Node.js app and containerise it yourself.

**Your tasks:**
1. Create a folder called `node-app`
2. Inside it create `server.js`:
```javascript
const http = require('http')
http.createServer((req, res) => {
  res.end('Hello from Node container!')
}).listen(3000)
```
3. Create a `Dockerfile` that:
   - Uses `node:20-alpine` as base
   - Sets `/app` as working directory
   - Copies `server.js`
   - Exposes port 3000
   - Runs the server
4. Build the image as `my-node-app`
5. Run it on port 3000
6. Test with `curl http://localhost:3000`

✅ Success: Returns `Hello from Node container!`

---

## Challenge 2 — Multi-container app

Create a `docker-compose.yml` that runs:
1. A Python web app on port 5000
2. A PostgreSQL database
3. The web app must connect to the database

**Requirements:**
- Use environment variables for DB credentials
- Both services must be on the same network
- Database data must persist using a volume

✅ Success: Both containers running, web app connects to DB

---

## Challenge 3 — Security scan

Run Trivy on your image from Challenge 1:

```bash
trivy image my-node-app
```

**Your tasks:**
1. Read the vulnerability report
2. Find which base image has fewer vulnerabilities
3. Rebuild using the safer base image
4. Run Trivy again and compare results

✅ Success: Vulnerability count reduced

---

## 🏅 Completed all challenges?
You've earned the **Docker badge!**
Proceed to `../../03-kubernetes/theory/README.md`
