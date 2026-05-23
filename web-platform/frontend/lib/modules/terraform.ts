import { ModuleData } from "./types"

export const terraformModule: ModuleData = {
  id: "06",
  title: "Terraform",
  icon: "🏗️",
  color: "from-indigo-500 to-blue-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Verify Terraform Installation",
      goal: "Check whether Terraform is installed properly.",
      commands: [
        "terraform version",
      ],
      expected:
        "Terraform version information should appear successfully.",
    },

    {
      title: "Exercise 2 — Initialize Your First Terraform Project",
      goal: "Understand Terraform project initialization.",
      commands: [
        "mkdir ~/terraform-practice",
        "cd ~/terraform-practice",
        "terraform init",
      ],
      expected:
        "Terraform should initialize the working directory successfully.",
    },

    {
      title: "Exercise 3 — Preview Infrastructure Changes",
      goal: "Learn how Terraform plans infrastructure changes safely.",
      commands: [
        "terraform plan",
      ],
      expected:
        "Terraform should display planned infrastructure changes.",
    },

    {
      title: "Exercise 4 — Apply Infrastructure",
      goal: "Learn how Terraform creates infrastructure resources.",
      commands: [
        "terraform apply",
      ],
      expected:
        "Terraform should create infrastructure resources successfully.",
    },

    {
      title: "Exercise 5 — Use Variables",
      goal: "Understand reusable Terraform configurations.",
      commands: [
        'terraform apply -var="container_name=custom-app"',
      ],
      expected:
        "Terraform should create resources using custom variable values.",
    },

    {
      title: "Exercise 6 — Destroy Infrastructure",
      goal: "Learn safe infrastructure cleanup.",
      commands: [
        "terraform destroy",
      ],
      expected:
        "Terraform should remove created infrastructure resources.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Deploy Docker Container Using Terraform",
      scenario:
        "You need to manage Docker infrastructure using Infrastructure as Code.",
      objectives: [
        "Create Terraform configuration",
        "Initialize Terraform",
        "Deploy infrastructure",
        "Destroy infrastructure safely",
      ],
      tasks: [
        "Create main.tf file",
        "Configure Docker provider",
        "Define nginx container resource",
        "Run terraform init",
        "Run terraform apply",
        "Verify nginx container is running",
      ],
      success:
        "Nginx container should be created and managed using Terraform.",
    },

    {
      title: "Lab 2 — Use Terraform Variables",
      scenario:
        "Your infrastructure configuration should be reusable and configurable.",
      objectives: [
        "Understand Terraform variables",
        "Parameterize infrastructure",
        "Reuse configurations",
      ],
      tasks: [
        "Create variables.tf",
        "Define container_name variable",
        "Reference variable in resource",
        "Apply infrastructure using custom variable",
      ],
      success:
        "Infrastructure should deploy successfully using variable input values.",
    },

    {
      title: "Lab 3 — Understand Terraform State",
      scenario:
        "Terraform tracks infrastructure using state files.",
      objectives: [
        "Understand Terraform state",
        "Inspect state information",
        "Track infrastructure resources",
      ],
      tasks: [
        "Run terraform apply",
        "Locate terraform.tfstate",
        "Run terraform state list",
        "Inspect tracked resources",
      ],
      success:
        "You should understand how Terraform tracks infrastructure state.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Terraform Init Fails",
      problem:
        "Terraform cannot initialize providers or backend.",
      symptoms: [
        "Provider download errors",
        "Initialization failed",
        "Backend errors",
      ],
      investigationSteps: [
        "Verify internet connectivity",
        "Check provider configuration",
        "Inspect Terraform version compatibility",
      ],
      fix:
        "Ensure provider configuration and internet access are correct.",
    },

    {
      title: "Troubleshooting 2 — Terraform Apply Fails",
      problem:
        "Terraform cannot create infrastructure resources.",
      symptoms: [
        "Apply operation aborted",
        "Provider authentication issues",
        "Resource creation failure",
      ],
      investigationSteps: [
        "Inspect Terraform logs",
        "Validate provider credentials",
        "Run terraform validate",
      ],
      fix:
        "Correct invalid configurations, credentials, or provider settings.",
    },

    {
      title: "Troubleshooting 3 — Terraform State Drift",
      problem:
        "Infrastructure changes were made manually outside Terraform.",
      symptoms: [
        "Unexpected terraform plan changes",
        "Infrastructure mismatch",
      ],
      investigationSteps: [
        "Run terraform plan",
        "Inspect infrastructure changes",
        "Compare Terraform state with real infrastructure",
      ],
      fix:
        "Reconcile infrastructure changes using terraform apply or terraform import.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Build Infrastructure Using Terraform",
      scenario:
        "Practice complete Terraform workflow from initialization to cleanup.",
      tasks: [
        "Create Terraform project",
        "Write Terraform configuration",
        "Run terraform init",
        "Run terraform plan",
        "Run terraform apply",
        "Destroy infrastructure",
      ],
      success:
        "You should understand the complete Terraform lifecycle.",
    },

    {
      title: "Practice Task 2 — Customize Infrastructure with Variables",
      scenario:
        "Deploy reusable infrastructure using custom variables.",
      tasks: [
        "Create variables.tf",
        "Define variables",
        "Pass custom variable values",
        "Verify infrastructure changes",
      ],
      success:
        "Infrastructure should adapt dynamically based on variable inputs.",
    },

    {
      title: "Practice Task 3 — Investigate Terraform State",
      scenario:
        "Inspect and understand how Terraform tracks infrastructure resources.",
      tasks: [
        "Deploy infrastructure",
        "Inspect terraform.tfstate",
        "Run terraform state list",
        "Observe tracked resources",
      ],
      success:
        "You should understand Terraform state management fundamentals.",
    },
  ],
}