import json
import os
from rich.panel import Panel
from rich.progress import Progress, BarColumn, TextColumn

PROGRESS_FILE = os.path.expanduser("~/.dso-lab-progress.json")

MODULES = ["01", "02", "03", "04", "05", "06"]
NAMES = {
    "01": "Git & GitHub",
    "02": "Docker",
    "03": "Kubernetes",
    "04": "CI/CD",
    "05": "Security",
    "06": "Terraform",
}

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {"completed": []}

def save_progress(data):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(data, f)

def show_progress(console):
    data = load_progress()
    completed = data["completed"]
    total = len(MODULES)
    done = len(completed)

    console.print(Panel("🏅 Your DSO-Lab Progress", style="bold green"))

    for mod_id in MODULES:
        status = "✅" if mod_id in completed else "⬜"
        console.print(f"  {status}  Module {mod_id} — {NAMES[mod_id]}")

    percent = int((done / total) * 100)
    console.print(f"\n[bold]Progress: {done}/{total} modules complete ({percent}%)[/bold]")

    if done == total:
        console.print("\n[bold green]🎉 Congratulations! You've completed all modules![/bold green]")
    else:
        next_mod = next((m for m in MODULES if m not in completed), None)
        if next_mod:
            console.print(f"\n[dim]Next up: Module {next_mod} — {NAMES[next_mod]}[/dim]")
            console.print(f"[dim]Run: dso-lab start {next_mod}[/dim]")

def mark_complete(console, module_id):
    if module_id not in MODULES:
        console.print(f"[bold red]❌ Module '{module_id}' not found.[/bold red]")
        return

    data = load_progress()
    if module_id in data["completed"]:
        console.print(f"[yellow]⚠️  Module {module_id} already marked as complete![/yellow]")
        return

    data["completed"].append(module_id)
    save_progress(data)
    console.print(f"[bold green]🏅 Module {module_id} — {NAMES[module_id]} marked as complete![/bold green]")
    console.print(f"[dim]Run 'dso-lab progress' to see your full progress.[/dim]")