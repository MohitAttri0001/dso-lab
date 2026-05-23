import { ModuleData } from "./types"

export const gitModule: ModuleData = {
  id: "01",
  title: "Git & GitHub",
  icon: "🌿",
  color: "from-emerald-500 to-green-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Verify Git Installation",
      goal: "Check whether Git is properly installed.",
      commands: [
        "git --version",
      ],
      expected:
        "Git version should appear successfully.",
    },

    {
      title: "Exercise 2 — Initialize Your First Repository",
      goal: "Learn how to create a Git repository.",
      commands: [
        "mkdir git-practice",
        "cd git-practice",
        "git init",
        "git status",
      ],
      expected:
        "An empty Git repository should be initialized successfully.",
    },

    {
      title: "Exercise 3 — Make Your First Commit",
      goal: "Learn staging and committing workflow.",
      commands: [
        'echo "# My First Repo" > README.md',
        "git status",
        "git add README.md",
        'git commit -m "first commit"',
        "git log --oneline",
      ],
      expected:
        "Your first commit should appear in the commit history.",
    },

    {
      title: "Exercise 4 — Create and Switch Branches",
      goal: "Understand Git branching workflow.",
      commands: [
        "git checkout -b feature/navbar",
        "git branch",
        "git checkout main",
      ],
      expected:
        "New branch should be created and visible in branch list.",
    },

    {
      title: "Exercise 5 — Connect to GitHub",
      goal: "Learn how to connect local repositories to GitHub.",
      commands: [
        "git remote add origin <your-repository-url>",
        "git remote -v",
      ],
      expected:
        "GitHub repository should be configured as remote origin.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Build a Real Git Workflow",
      scenario:
        "You are working on a project and need to manage features using branches.",
      objectives: [
        "Create branches",
        "Commit changes",
        "Merge branches",
        "Understand branch workflow",
      ],
      tasks: [
        "Create a project folder",
        "Initialize Git repository",
        "Create README.md",
        "Commit initial version",
        "Create feature branch",
        "Modify README.md",
        "Commit changes on feature branch",
        "Merge feature branch into main",
      ],
      success:
        "Feature branch should merge successfully into main branch.",
    },

    {
      title: "Lab 2 — Push Code to GitHub",
      scenario:
        "You need to publish your local project on GitHub.",
      objectives: [
        "Create GitHub repository",
        "Connect local repo",
        "Push commits",
      ],
      tasks: [
        "Create a repository on GitHub",
        "Add remote origin",
        "Push code using git push",
        "Verify repository online",
      ],
      success:
        "Code should appear successfully on GitHub.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Commit Failed Due to Missing Identity",
      problem:
        "Git refuses to create commits because user identity is missing.",
      symptoms: [
        "Author identity unknown",
        "Please tell me who you are",
      ],
      investigationSteps: [
        "Run git config --global user.name",
        "Run git config --global user.email",
        "Check Git configuration",
      ],
      fix:
        "Configure Git identity using git config --global user.name and user.email.",
    },

    {
      title: "Troubleshooting 2 — Merge Conflict",
      problem:
        "Git cannot automatically merge two branches.",
      symptoms: [
        "Merge conflict messages appear",
        "Conflict markers visible inside files",
      ],
      investigationSteps: [
        "Run git status",
        "Open conflicted files",
        "Find conflict markers",
        "Manually resolve conflicts",
      ],
      fix:
        "Edit conflicted files manually, then add and commit the resolved version.",
    },

    {
      title: "Troubleshooting 3 — Remote Push Rejected",
      problem:
        "GitHub rejects push due to remote changes.",
      symptoms: [
        "Rejected non-fast-forward",
        "Updates were rejected",
      ],
      investigationSteps: [
        "Run git pull origin main",
        "Resolve any conflicts",
        "Try push again",
      ],
      fix:
        "Pull latest changes before pushing local commits.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Create a Portfolio Repository",
      scenario:
        "Create and upload your own project repository to GitHub.",
      tasks: [
        "Create a new folder",
        "Initialize Git",
        "Create README.md",
        "Commit files",
        "Create GitHub repository",
        "Push project online",
      ],
      success:
        "Your project should be visible on GitHub successfully.",
    },

    {
      title: "Practice Task 2 — Simulate Team Collaboration",
      scenario:
        "Practice feature branch workflow like real development teams.",
      tasks: [
        "Create feature branch",
        "Make changes",
        "Commit changes",
        "Switch back to main",
        "Merge feature branch",
      ],
      success:
        "Feature workflow should complete without errors.",
    },

    {
      title: "Practice Task 3 — Recover from Mistakes",
      scenario:
        "Practice undoing common Git mistakes safely.",
      tasks: [
        "Create a test file",
        "Commit the file",
        "Modify the file",
        "Use git restore",
        "Use git reset",
        "Observe repository state changes",
      ],
      success:
        "You should understand how Git restores and resets work.",
    },
  ],
}