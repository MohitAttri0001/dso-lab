import { ModuleData } from "./types"

export const kubernetesModule: ModuleData = {
  id: "03",
  title: "Kubernetes",
  icon: "☸️",
  color: "from-violet-500 to-purple-400",

  theory: [],

  exercises: [
    {
      title: "Exercise 1 — Verify Kubernetes Tools",
      goal: "Check whether kubectl and kind are installed properly.",
      commands: [
        "kubectl version --client",
        "kind version",
      ],
      expected: "kubectl and kind versions should appear without errors.",
    },

    {
      title: "Exercise 2 — Create a Local Kubernetes Cluster",
      goal: "Learn how to create a local Kubernetes cluster using kind.",
      commands: [
        "kind create cluster --name dso-lab",
        "kubectl cluster-info",
        "kubectl get nodes",
      ],
      expected: "One Kubernetes node should appear with Ready status.",
    },

    {
      title: "Exercise 3 — Deploy Your First Pod",
      goal: "Understand how Kubernetes runs containers inside pods.",
      commands: [
        "kubectl run nginx-pod --image=nginx",
        "kubectl get pods",
        "kubectl describe pod nginx-pod",
      ],
      expected: "nginx-pod should be created and move to Running state.",
    },

    {
      title: "Exercise 4 — Create a Deployment",
      goal: "Learn how deployments manage application replicas.",
      commands: [
        "kubectl create deployment nginx-deploy --image=nginx",
        "kubectl get deployments",
        "kubectl get pods",
      ],
      expected: "A deployment and its managed pod should be visible.",
    },

    {
      title: "Exercise 5 — Scale a Deployment",
      goal: "Learn how Kubernetes scales applications.",
      commands: [
        "kubectl scale deployment nginx-deploy --replicas=3",
        "kubectl get pods",
      ],
      expected: "Three nginx pods should be running.",
    },

    {
      title: "Exercise 6 — Clean Up Cluster",
      goal: "Learn safe cleanup of Kubernetes resources.",
      commands: [
        "kubectl delete deployment nginx-deploy",
        "kubectl delete pod nginx-pod",
        "kind delete cluster --name dso-lab",
      ],
      expected: "Deployment, pod, and local cluster should be removed.",
    },
  ],

  labs: [
    {
      title: "Lab 1 — Deploy a Web Application",
      scenario:
        "You need to deploy a simple web application on Kubernetes using a Deployment.",
      objectives: [
        "Create a Kubernetes Deployment",
        "Run multiple replicas",
        "Verify pod health",
        "Understand desired state",
      ],
      tasks: [
        "Create a kind cluster",
        "Create an nginx deployment",
        "Scale deployment to 3 replicas",
        "Verify all pods are running",
        "Describe the deployment",
      ],
      success:
        "Kubernetes should maintain 3 running nginx pods successfully.",
    },

    {
      title: "Lab 2 — Expose Application Using Service",
      scenario:
        "Your application is running inside pods and needs to be accessible through a Kubernetes Service.",
      objectives: [
        "Understand Services",
        "Expose deployments",
        "Test application access",
      ],
      tasks: [
        "Create nginx deployment",
        "Expose deployment using NodePort service",
        "List services",
        "Describe service",
        "Test access using port-forward or NodePort",
      ],
      success:
        "Application should be reachable through Kubernetes service.",
    },

    {
      title: "Lab 3 — Use ConfigMap",
      scenario:
        "Your application needs configuration that should not be hardcoded inside the container image.",
      objectives: [
        "Create ConfigMap",
        "Understand externalized configuration",
        "Attach configuration to workloads",
      ],
      tasks: [
        "Create a ConfigMap",
        "View ConfigMap data",
        "Attach ConfigMap as environment variable",
        "Verify configuration inside pod",
      ],
      success:
        "Configuration should be available inside the running pod.",
    },
  ],

  troubleshooting: [
    {
      title: "Troubleshooting 1 — Pod Stuck in Pending",
      problem:
        "A pod is created but never starts running.",
      symptoms: [
        "Pod status shows Pending",
        "No container starts",
        "Application is unavailable",
      ],
      investigationSteps: [
        "Run kubectl get pods",
        "Run kubectl describe pod <pod-name>",
        "Check events section",
        "Check node resource availability",
      ],
      fix:
        "Resolve scheduling issues such as insufficient CPU, memory, or node problems.",
    },

    {
      title: "Troubleshooting 2 — CrashLoopBackOff",
      problem:
        "A pod starts but keeps crashing repeatedly.",
      symptoms: [
        "Pod status shows CrashLoopBackOff",
        "Container restarts continuously",
        "Application never becomes stable",
      ],
      investigationSteps: [
        "Run kubectl get pods",
        "Check logs using kubectl logs <pod-name>",
        "Describe pod events",
        "Verify container command and image",
      ],
      fix:
        "Fix application startup errors, wrong commands, missing environment variables, or bad container images.",
    },

    {
      title: "Troubleshooting 3 — ImagePullBackOff",
      problem:
        "Kubernetes cannot download the container image.",
      symptoms: [
        "Pod status shows ImagePullBackOff",
        "Pod never starts",
        "Events mention image pull failure",
      ],
      investigationSteps: [
        "Check image name",
        "Check image tag",
        "Check registry access",
        "Run kubectl describe pod <pod-name>",
      ],
      fix:
        "Use a valid image name/tag or configure image pull secrets for private registries.",
    },
  ],

  practiceTasks: [
    {
      title: "Practice Task 1 — Create and Scale Deployment",
      scenario:
        "Practice creating and scaling a Kubernetes deployment like a junior DevOps engineer.",
      tasks: [
        "Create a kind cluster",
        "Deploy nginx using kubectl create deployment",
        "Scale deployment to 3 replicas",
        "Verify pods",
        "Delete deployment",
      ],
      success:
        "You should be able to deploy, scale, verify, and clean up a Kubernetes workload.",
    },

    {
      title: "Practice Task 2 — Debug a Broken Pod",
      scenario:
        "A pod is not running properly and you need to investigate it.",
      tasks: [
        "Create a pod using an incorrect image name",
        "Observe ImagePullBackOff",
        "Use kubectl describe pod",
        "Fix the image name",
        "Verify pod runs successfully",
      ],
      success:
        "You should understand how to debug image pull issues.",
    },

    {
      title: "Practice Task 3 — Expose and Test an Application",
      scenario:
        "Expose a Kubernetes deployment and verify access.",
      tasks: [
        "Create nginx deployment",
        "Expose it using a service",
        "Use kubectl get svc",
        "Use kubectl port-forward",
        "Test using curl",
      ],
      success:
        "You should successfully access the application running inside Kubernetes.",
    },
  ],
}