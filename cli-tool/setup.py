from setuptools import setup, find_packages

setup(
    name="dso-lab",
    version="1.0.0",
    packages=find_packages(),
    install_requires=["click", "rich"],
    entry_points={
        "console_scripts": [
            "dso-lab=src.main:cli",
        ],
    },
)
