import { ModuleData } from "./types"

export const securityModule: ModuleData = {
  id: "05",
  title: "Security",
  icon: "🔒",
  color: "from-red-500 to-rose-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Scan Docker Images with Trivy",
      goal: "Learn how container vulnerability scanning works.",
      commands: [
        "trivy image nginx:latest",
        "trivy image nginx:alpine",
      ],
      expected:
        "The alpine image should generally show fewer vulnerabilities.",
    },

    {
      title: "Exercise 2 — Run SAST Scan with Semgrep",
      goal: "Understand static application security testing.",
      commands: [
        "semgrep --config auto .",
      ],
      expected:
        "Semgrep should scan project files and report findings.",
    },

    {
      title: "Exercise 3 — Detect Secrets with git-secrets",
      goal: "Learn how to prevent accidental secret leaks.",
      commands: [
        "git secrets --install",
        "git secrets --register-aws",
      ],
      expected:
        "git-secrets should block commits containing AWS secrets.",
    },

    {
      title: "Exercise 4 — Scan Kubernetes Configurations",
      goal: "Identify insecure Kubernetes configurations.",
      commands: [
        "trivy config .",
      ],
      expected:
        "Trivy should report configuration risks and misconfigurations.",
    },

    {
      title: "Exercise 5 — Inspect Open Ports",
      goal: "Learn basic system/network exposure inspection.",
      commands: [
        "ss -tulnp",
      ],
      expected:
        "You should see listening ports and associated services.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Secure a Docker Container",
      scenario:
        "A containerized application needs basic security hardening.",
      objectives: [
        "Understand container attack surface",
        "Reduce vulnerabilities",
        "Use safer images",
      ],
      tasks: [
        "Run nginx:latest scan with Trivy",
        "Run nginx:alpine scan",
        "Compare vulnerabilities",
        "Document security differences",
      ],
      success:
        "You should understand why lightweight images improve security posture.",
    },

    {
      title: "Lab 2 — Detect Exposed Secrets",
      scenario:
        "A developer accidentally commits credentials into a repository.",
      objectives: [
        "Understand secret leakage risks",
        "Install git-secrets",
        "Block unsafe commits",
      ],
      tasks: [
        "Install git-secrets",
        "Create test AWS key inside a file",
        "Attempt commit",
        "Observe secret detection",
      ],
      success:
        "git-secrets should block commits containing exposed credentials.",
    },

    {
      title: "Lab 3 — Scan Kubernetes Misconfigurations",
      scenario:
        "Your Kubernetes manifests may contain insecure settings.",
      objectives: [
        "Understand Kubernetes security risks",
        "Run IaC scans",
        "Identify misconfigurations",
      ],
      tasks: [
        "Create insecure Kubernetes YAML",
        "Run trivy config .",
        "Inspect findings",
        "Fix insecure settings",
        "Run scan again",
      ],
      success:
        "Security findings should reduce after configuration fixes.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Trivy Scan Fails",
      problem:
        "Trivy cannot complete image or configuration scanning.",
      symptoms: [
        "Database download errors",
        "Timeout errors",
        "Scan aborted",
      ],
      investigationSteps: [
        "Verify internet connectivity",
        "Update Trivy database",
        "Check image name correctness",
      ],
      fix:
        "Ensure internet access and update Trivy vulnerability database.",
    },

    {
      title: "Troubleshooting 2 — git-secrets Not Blocking Commits",
      problem:
        "Sensitive credentials are not being detected.",
      symptoms: [
        "Secrets commit successfully",
        "No warnings shown",
      ],
      investigationSteps: [
        "Check git-secrets installation",
        "Verify hooks installed",
        "Run git secrets --scan",
      ],
      fix:
        "Reinstall git-secrets hooks and verify repository configuration.",
    },

    {
      title: "Troubleshooting 3 — Semgrep Produces No Results",
      problem:
        "Semgrep runs but shows no findings.",
      symptoms: [
        "No output",
        "No vulnerabilities reported",
      ],
      investigationSteps: [
        "Verify project files exist",
        "Check semgrep config",
        "Run semgrep with verbose output",
      ],
      fix:
        "Use correct scanning rules and ensure supported source files exist.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Scan and Compare Images",
      scenario:
        "Compare the security posture of multiple Docker images.",
      tasks: [
        "Scan nginx:latest",
        "Scan nginx:alpine",
        "Compare vulnerability counts",
        "Identify safer image",
      ],
      success:
        "You should understand how image choice affects security.",
    },

    {
      title: "Practice Task 2 — Simulate Secret Leakage",
      scenario:
        "Practice detecting accidentally committed credentials.",
      tasks: [
        "Install git-secrets",
        "Create test credential file",
        "Attempt git commit",
        "Observe prevention mechanism",
      ],
      success:
        "git-secrets should block the commit successfully.",
    },

    {
      title: "Practice Task 3 — Audit Local System Exposure",
      scenario:
        "Inspect running services and exposed ports on your system.",
      tasks: [
        "Run ss -tulnp",
        "Identify listening services",
        "Research unknown ports",
        "Stop unnecessary services",
      ],
      success:
        "You should understand how to identify exposed local services.",
    },
  ],
}