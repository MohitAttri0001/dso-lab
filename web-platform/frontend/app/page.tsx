"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

function TerminalText() {
  const lines = [
    "$ git clone git@github.com:MohitAttri0001/dso-lab.git",
    "$ docker build -t my-app .",
    "$ kubectl apply -f deployment.yml",
    "$ terraform apply",
    "$ trivy image my-app",
  ]

  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < lines[current].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => prev + lines[current][charIndex])
        setCharIndex((c) => c + 1)
      }, 45)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      setDisplayed("")
      setCharIndex(0)
      setCurrent((c) => (c + 1) % lines.length)
    }, 2000)

    return () => clearTimeout(t)
  }, [charIndex, current, lines])

  return (
    <div className="bg-slate-950/90 border border-emerald-500/20 rounded-2xl px-6 py-4 font-mono text-sm text-emerald-400 max-w-xl mx-auto mb-10 text-left shadow-2xl shadow-emerald-500/10">
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <span>{displayed}</span>
      <span className="animate-pulse">▋</span>
    </div>
  )
}

function StatCounter({
  target,
  label,
  color,
}: {
  target: number
  label: string
  color: string
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 40)

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 40)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <p className={`text-4xl font-extrabold ${color}`}>{count}+</p>
      <p className="text-slate-400 text-sm mt-1">{label}</p>
    </div>
  )
}

const modules = [
  {
    id: "01",
    title: "Git & GitHub",
    icon: "🌿",
    desc: "Version control, branching, pull requests and collaboration workflows.",
    color: "from-emerald-500 to-green-400",
    topics: ["git init", "branching", "pull requests", "merge conflicts"],
  },
  {
    id: "02",
    title: "Docker",
    icon: "🐳",
    desc: "Containers, images, Dockerfiles and Docker Compose.",
    color: "from-blue-500 to-cyan-400",
    topics: ["containers", "images", "dockerfile", "compose"],
  },
  {
    id: "03",
    title: "Kubernetes",
    icon: "☸️",
    desc: "Pods, deployments, services and scaling applications.",
    color: "from-violet-500 to-purple-400",
    topics: ["pods", "deployments", "services", "scaling"],
  },
  {
    id: "04",
    title: "CI/CD",
    icon: "⚙️",
    desc: "GitHub Actions pipelines, automation and continuous delivery.",
    color: "from-orange-500 to-amber-400",
    topics: ["workflows", "jobs", "actions", "automation"],
  },
  {
    id: "05",
    title: "Security",
    icon: "🔒",
    desc: "SAST, DAST, Trivy scanning and secret detection.",
    color: "from-red-500 to-rose-400",
    topics: ["SAST", "trivy", "git-secrets", "DAST soon"],
  },
  {
    id: "06",
    title: "Terraform",
    icon: "🏗️",
    desc: "Infrastructure as Code, providers, variables and state.",
    color: "from-indigo-500 to-blue-400",
    topics: ["providers", "resources", "variables", "state"],
  },
]

const steps = [
  {
    num: "01",
    title: "Read theory",
    desc: "Understand the core concept before touching commands.",
    icon: "📖",
  },
  {
    num: "02",
    title: "Practice exercises",
    desc: "Build confidence with guided beginner-friendly tasks.",
    icon: "🏋️",
  },
  {
    num: "03",
    title: "Complete labs",
    desc: "Apply the skill in practical DevSecOps-style workflows.",
    icon: "🧪",
  },
  {
    num: "04",
    title: "Build confidence",
    desc: "Move from learning commands to understanding real usage.",
    icon: "🏅",
  },
]

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            DSO-Lab
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-slate-400 items-center">
          <a href="#modules" className="hover:text-emerald-400 transition">
            Modules
          </a>
          <a href="#how" className="hover:text-emerald-400 transition">
            How it works
          </a>
          <a href="#about" className="hover:text-emerald-400 transition">
            About
          </a>
          <a
            href="https://github.com/MohitAttri0001/dso-lab"
            className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full hover:bg-emerald-500/20 transition"
          >
            ⭐ GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/25 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            🛡️ Cybersecurity Learning Platform for Freshers
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Learn Cybersecurity
            <br />
            through{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Theory, Exercise & Lab
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            DSO Labs helps beginners learn DevSecOps step by step with
            structured modules, practical exercises, guided labs, and real-world
            security workflows.
          </p>

          <TerminalText />

          <div className="flex gap-4 justify-center flex-wrap mt-8">
            <a
              href="#modules"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
            >
              Start Learning →
            </a>

            <a
              href="https://github.com/MohitAttri0001/dso-lab"
              className="bg-slate-800/80 hover:bg-slate-700 border border-slate-700 px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105"
            >
              Open Source Repo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/30 py-12">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-8">
          <StatCounter target={6} label="Modules" color="text-emerald-400" />
          <StatCounter target={30} label="Exercises" color="text-cyan-400" />
          <StatCounter target={15} label="Labs" color="text-violet-400" />
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-400 text-sm font-mono mb-3">
            / learning-path
          </p>
          <h2 className="text-4xl font-bold mb-4">📚 Core Modules</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Each module follows a simple beginner-friendly flow: learn the
            concept, practice with exercises, then apply it inside labs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => router.push(`/modules/${module.id}`)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/50 hover:shadow-[0_0_45px_rgba(16,185,129,0.18)]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 blur-xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_35%)]" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1`}
                  >
                    {module.icon}
                  </div>

                  <span className="text-xs font-mono text-slate-500 border border-slate-800 rounded-full px-3 py-1 group-hover:text-emerald-300 group-hover:border-emerald-400/30 transition">
                    Module {module.id}
                  </span>
                </div>

                <h3 className="font-bold text-xl mb-3 group-hover:text-emerald-300 transition">
                  {module.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed min-h-[64px]">
                  {module.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {module.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-[11px] text-slate-400 bg-slate-950/70 border border-slate-800 rounded-full px-3 py-1 group-hover:border-slate-700 transition"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Theory · Exercise · Lab
                  </span>
                  <span className="text-xs text-emerald-400 transition-transform duration-300 group-hover:translate-x-1">
                    Open module →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how"
        className="px-8 py-24 bg-slate-900/30 border-y border-slate-800"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-emerald-400 text-sm font-mono mb-3">
            / beginner-flow
          </p>
          <h2 className="text-4xl font-bold mb-4">🚀 How it works</h2>
          <p className="text-slate-400 mb-16">
            A clear path from basic understanding to practical DevSecOps
            confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item) => (
              <div key={item.num} className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                  {item.icon}
                </div>
                <p className="text-xs text-emerald-400 font-mono mb-1">
                  Step {item.num}
                </p>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">👨‍💻 About</h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            DSO-Lab is an open-source project built by Mohit Attri to help
            freshers get real hands-on DevSecOps experience through guided
            modules, exercises, and practical labs — completely free.
          </p>
          <a
            href="https://github.com/MohitAttri0001"
            className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition duration-200 text-emerald-400 font-mono text-sm hover:scale-105"
          >
            @MohitAttri0001
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-600 text-sm">
        <p>🛡️ DSO-Lab © 2026 — Built with ❤️ by Mohit Attri — MIT License</p>
      </footer>
    </main>
  )
}