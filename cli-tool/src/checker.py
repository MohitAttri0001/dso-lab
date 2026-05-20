import shutil
from rich.table import Table
from rich.panel import Panel

TOOLS = [
    ("git", "Git"),
    ("docker", "Docker"),
    ("kubectl", "Kubernetes CLI"),
    ("helm", "Helm"),
    ("kind", "kind"),
    ("terraform", "Terraform"),
    ("trivy", "Trivy"),
    ("semgrep", "Semgrep"),
    ("act", "act (GitHub Actions)"),
    ("k6", "k6"),
]

def check_tools(console):
    console.print(Panel("🔍 Checking your DevSecOps toolkit...", style="bold green"))

    table = Table(show_header=True, header_style="bold cyan")
    table.add_column("Tool", style="white", width=24)
    table.add_column("Status", width=16)
    table.add_column("Required for", style="dim")

    reasons = {
        "git": "Module 01 — Git & GitHub",
        "docker": "Module 02 — Docker",
        "kubectl": "Module 03 — Kubernetes",
        "helm": "Module 03 — Kubernetes",
        "kind": "Module 03 — Kubernetes",
        "terraform": "Module 06 — Terraform",
        "trivy": "Module 05 — Security",
        "semgrep": "Module 05 — Security",
        "act": "Module 04 — CI/CD",
        "k6": "Module 04 — CI/CD",
    }

    all_good = True
    for cmd, name in TOOLS:
        found = shutil.which(cmd) is not None
        if not found:
            all_good = False
        status = "✅ Installed" if found else "❌ Missing"
        table.add_row(name, status, reasons.get(cmd, ""))

    console.print(table)

    if all_good:
        console.print("\n[bold green]🎉 All tools installed! You're ready to start.[/bold green]")
    else:
        console.print("\n[bold yellow]⚠️  Some tools are missing. Install them before starting those modules.[/bold yellow]")