import click
from rich.console import Console
from rich.panel import Panel
from rich import print as rprint
from src.checker import check_tools
from src.modules import list_modules, start_module
from src.progress import show_progress, mark_complete

console = Console()

@click.group()
def cli():
    """🛡️  DSO-Lab CLI — Learn DevSecOps by doing"""
    pass

@cli.command()
def check():
    """Check if all required tools are installed"""
    check_tools(console)

@cli.command()
def modules():
    """List all available learning modules"""
    list_modules(console)

@cli.command()
@click.argument("module_id")
def start(module_id):
    """Start a specific module """
    start_module(console, module_id)

@cli.command()
def progress():
    """Show your completed modules"""
    show_progress(console)

@cli.command()
@click.argument("module_id")
def complete(module_id):
    """Mark a module as complete """
    mark_complete(console, module_id)

if __name__ == "__main__":
    cli()