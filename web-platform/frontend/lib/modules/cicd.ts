import { ModuleData } from "./types"

export const cicdModule: ModuleData = {
  id: "04",
  title: "CI/CD",
  icon: "⚙️",
  color: "from-orange-500 to-amber-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Verify GitHub Actions Setup",
      goal: "Understand GitHub Actions workflow structure.",
      commands: [
        "mkdir -p .github/workflows",
        "touch .github/workflows/ci.yml",
        "git status",
      ],
      expected:
        "The workflows directory and ci.yml file should be created successfully.",
    },

    {
      title: "Exercise 2 — Create Your First Workflow",
      goal: "Learn how CI workflows trigger automatically.",
      commands: [
        "git add .",
        'git commit -m "ci: add first workflow"',
        "git push origin main",
      ],
      expected:
        "Workflow should appear inside GitHub Actions tab with a green checkmark.",
    },

    {
      title: "Exercise 3 — Run Workflow Locally Using Act",
      goal: "Learn how to test GitHub Actions locally.",
      commands: [
        "act push",
      ],
      expected:
        "Workflow should execute locally using Docker containers.",
    },

    {
      title: "Exercise 4 — Add Docker Build Workflow",
      goal: "Automate Docker image builds using CI/CD.",
      commands: [
        "git add .github/workflows/docker.yml",
        'git commit -m "ci: add docker workflow"',
        "git push origin main",
      ],
      expected:
        "Docker image build should trigger automatically in GitHub Actions.",
    },

    {
      title: "Exercise 5 — Check Workflow Logs",
      goal: "Learn how to debug CI/CD pipelines.",
      commands: [
        "Open GitHub Actions tab",
        "Select workflow run",
        "Inspect failed or successful steps",
      ],
      expected:
        "You should understand how workflow logs help debugging pipelines.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Build a Complete CI Pipeline",
      scenario:
        "You are working on a Node.js application and need automated testing on every push.",
      objectives: [
        "Create workflow YAML",
        "Run tests automatically",
        "Understand CI automation",
      ],
      tasks: [
        "Create .github/workflows/ci.yml",
        "Add checkout action",
        "Install Node.js",
        "Install dependencies",
        "Run npm test",
        "Push workflow to GitHub",
      ],
      success:
        "Workflow should automatically run tests whenever code is pushed.",
    },

    {
      title: "Lab 2 — Docker CI Pipeline",
      scenario:
        "You need to automatically build Docker images during CI/CD.",
      objectives: [
        "Automate Docker builds",
        "Understand Docker integration in CI",
        "Trigger workflows automatically",
      ],
      tasks: [
        "Create docker.yml workflow",
        "Add Docker build step",
        "Build Docker image automatically",
        "Verify workflow execution on GitHub",
      ],
      success:
        "Docker image should build automatically after every push.",
    },

    {
      title: "Lab 3 — Deploy Workflow",
      scenario:
        "You need to simulate a deployment pipeline after successful builds.",
      objectives: [
        "Understand deployment stages",
        "Chain CI/CD jobs",
        "Use workflow dependencies",
      ],
      tasks: [
        "Create build job",
        "Create deploy job",
        "Use needs keyword",
        "Add deployment simulation step",
        "Verify workflow order",
      ],
      success:
        "Deploy stage should run only after build stage succeeds.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Workflow Not Triggering",
      problem:
        "GitHub Actions workflow does not start after push.",
      symptoms: [
        "No workflow runs appear",
        "GitHub Actions tab empty",
        "Push succeeds but CI does not execute",
      ],
      investigationSteps: [
        "Verify workflow file location",
        "Check .github/workflows path",
        "Validate YAML syntax",
        "Verify trigger configuration",
      ],
      fix:
        "Place workflow files correctly and ensure YAML syntax and triggers are valid.",
    },

    {
      title: "Troubleshooting 2 — Workflow Fails During Build",
      problem:
        "Pipeline fails during dependency installation or build.",
      symptoms: [
        "Workflow shows red failed status",
        "npm install fails",
        "Docker build errors appear",
      ],
      investigationSteps: [
        "Inspect workflow logs",
        "Check dependency versions",
        "Verify Dockerfile syntax",
        "Check missing files",
      ],
      fix:
        "Correct dependency issues, Dockerfile problems, or workflow commands causing failures.",
    },

    {
      title: "Troubleshooting 3 — YAML Syntax Errors",
      problem:
        "GitHub Actions cannot parse workflow file.",
      symptoms: [
        "Workflow invalid",
        "YAML syntax error",
        "Workflow ignored by GitHub",
      ],
      investigationSteps: [
        "Check indentation",
        "Validate YAML format",
        "Verify jobs and steps structure",
      ],
      fix:
        "Correct YAML indentation and workflow formatting issues.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Create Your Own CI Workflow",
      scenario:
        "Build a complete beginner CI pipeline for a simple project.",
      tasks: [
        "Create workflow directory",
        "Create ci.yml",
        "Add checkout step",
        "Add test step",
        "Push workflow to GitHub",
        "Verify successful execution",
      ],
      success:
        "Your CI workflow should run automatically after every push.",
    },

    {
      title: "Practice Task 2 — Automate Docker Builds",
      scenario:
        "Practice integrating Docker with GitHub Actions.",
      tasks: [
        "Create Dockerfile",
        "Create docker workflow",
        "Add Docker build command",
        "Push changes",
        "Verify Docker image builds automatically",
      ],
      success:
        "Docker build pipeline should complete successfully.",
    },

    {
      title: "Practice Task 3 — Debug a Failed Pipeline",
      scenario:
        "A CI pipeline fails and you need to identify the root cause.",
      tasks: [
        "Intentionally break workflow YAML",
        "Push changes",
        "Inspect workflow logs",
        "Fix YAML issue",
        "Re-run workflow",
      ],
      success:
        "You should understand how to debug common CI/CD workflow failures.",
    },
  ],
}