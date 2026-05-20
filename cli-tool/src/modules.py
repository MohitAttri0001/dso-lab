from rich.table import Table
from rich.panel import Panel

MODULES = [
    {"id": "01", "title": "Git & GitHub",   "icon": "🌿", "status": "ready",   "desc": "Version control, branching, PRs and workflows."},
    {"id": "02", "title": "Docker",          "icon": "🐳", "status": "ready",   "desc": "Containers, images, Dockerfile and Compose."},
    {"id": "03", "title": "Kubernetes",      "icon": "☸️",  "status": "ready",   "desc": "Pods, deployments, services and scaling."},
    {"id": "04", "title": "CI/CD",           "icon": "⚙️",  "status": "ready",   "desc": "GitHub Actions, pipelines and automation."},
    {"id": "05", "title": "Security",        "icon": "🔒", "status": "partial", "desc": "SAST, Trivy, git-secrets. DAST coming soon."},
    {"id": "06", "title": "Terraform",       "icon": "🏗️",  "status": "ready",   "desc": "IaC, providers, variables and state."},
]

def list_modules(console):
    console.print(Panel("📚 DSO-Lab — Learning Modules", style="bold green"))

    table = Table(show_header=True, header_style="bold cyan")
    table.add_column("ID",     width=6)
    table.add_column("Module", width=20)
    table.add_column("Status", width=14)
    table.add_column("Description", style="dim")

    for m in MODULES:
        status = "[green]✅ Ready[/green]" if m["status"] == "ready" else "[yellow]🔄 Partial[/yellow]"
        table.add_row(m["id"], f"{m['icon']}  {m['title']}", status, m["desc"])

    console.print(table)
    console.print("\n[dim]Run [bold]dso-lab start <id>[/bold] to begin a module. Example: dso-lab start 01[/dim]")

def start_module(console, module_id):
    module = next((m for m in MODULES if m["id"] == module_id), None)

    if not module:
        console.print(f"[bold red]❌ Module '{module_id}' not found. Run 'dso-lab modules' to see available modules.[/bold red]")
        return

    console.print(Panel(
        f"{module['icon']}  Module {module['id']} — {module['title']}\n\n"
        f"{module['desc']}\n\n"
        f"[bold]Steps:[/bold]\n"
        f"  1. Read theory:     modules/{module_id}-{module['title'].lower().replace(' ','').replace('&','')}/theory/README.md\n"
        f"  2. Do exercises:    modules/{module_id}-{module['title'].lower().replace(' ','').replace('&','')}/exercises/README.md\n"
        f"  3. Try challenges:  modules/{module_id}-{module['title'].lower().replace(' ','').replace('&','')}/challenges/README.md\n\n"
        f"[dim]When done, run: dso-lab complete {module_id}[/dim]",
        title=f"Starting Module {module_id}",
        style="bold green"
    ))