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
        setDisplayed(prev => prev + lines[current][charIndex])
        setCharIndex(c => c + 1)
      }, 45)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayed("")
        setCharIndex(0)
        setCurrent(c => (c + 1) % lines.length)
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [charIndex, current])

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl px-6 py-4 font-mono text-sm text-emerald-400 max-w-xl mx-auto mb-10 text-left">
      <div className="flex gap-2 mb-3">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      <span>{displayed}</span>
      <span className="animate-pulse">▋</span>
    </div>
  )
}

function StatCounter({ target, label, color }: { target: number, label: string, color: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = Math.ceil(target / 40)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
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
  { id: "01", title: "Git & GitHub", icon: "🌿", status: "ready", desc: "Version control, branching, pull requests and collaboration workflows.", color: "from-emerald-500 to-green-400", topics: ["git init", "branching", "pull requests", "merge conflicts"] },
  { id: "02", title: "Docker", icon: "🐳", status: "ready", desc: "Containers, images, Dockerfiles and Docker Compose.", color: "from-blue-500 to-cyan-400", topics: ["containers", "images", "dockerfile", "compose"] },
  { id: "03", title: "Kubernetes", icon: "☸️", status: "ready", desc: "Pods, deployments, services and scaling applications.", color: "from-violet-500 to-purple-400", topics: ["pods", "deployments", "services", "scaling"] },
  { id: "04", title: "CI/CD", icon: "⚙️", status: "ready", desc: "GitHub Actions pipelines, automation and continuous delivery.", color: "from-orange-500 to-amber-400", topics: ["workflows", "jobs", "actions", "automation"] },
  { id: "05", title: "Security", icon: "🔒", status: "partial", desc: "SAST, DAST, Trivy scanning and secret detection.", color: "from-red-500 to-rose-400", topics: ["SAST", "trivy", "git-secrets", "DAST soon"] },
  { id: "06", title: "Terraform", icon: "🏗️", status: "ready", desc: "Infrastructure as Code, providers, variables and state.", color: "from-indigo-500 to-blue-400", topics: ["providers", "resources", "variables", "state"] },
]

const steps = [
  { num: "01", title: "Fork the repo", desc: "Start by forking DSO-Lab to your GitHub account", icon: "🍴" },
  { num: "02", title: "Read theory", desc: "Understand concepts before running any command", icon: "📖" },
  { num: "03", title: "Do exercises", desc: "Follow step-by-step guided practice tasks", icon: "🏋️" },
  { num: "04", title: "Earn badges", desc: "Solve challenges without hints to prove your skills", icon: "🏅" },
]

export default function Home() {
  const router = useRouter()
  const [activeModule, setActiveModule] = useState<string | null>(null)


  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DSO-Lab</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#modules" className="hover:text-emerald-400 transition duration-200">Modules</a>
          <a href="#how" className="hover:text-emerald-400 transition duration-200">How it works</a>
          <a href="#about" className="hover:text-emerald-400 transition duration-200">About</a>
          <a href="https://github.com/MohitAttri0001/dso-lab" className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1 rounded-full hover:bg-emerald-500/20 transition duration-200">
            ⭐ GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            🚀 Open Source · Free Forever · Built for Freshers
          </span>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Learn{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              DevSecOps
            </span>
            <br />by actually doing it
          </h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Hands-on modules covering Git, Docker, Kubernetes, CI/CD,
            Security and Terraform — built for freshers who learn by doing.
          </p>
          <TerminalText />
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#modules" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105">
              Start Learning →
            </a>
            <a href="https://github.com/MohitAttri0001/dso-lab" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-3 rounded-xl transition-all duration-200 hover:scale-105">
              View on GitHub
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
          <h2 className="text-4xl font-bold mb-4">📚 Learning Modules</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">Each module has theory, guided exercises and lab work. Work through them in order.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <div key={module.id}
              onClick={() => router.push(`/modules/${module.id}`)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {module.icon}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${module.status === "ready" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}>
                  {module.status === "ready" ? "✅ Ready" : "🔄 Partial"}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono mb-1">Module {module.id}</p>
              <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-400 transition duration-200">{module.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
              {activeModule === module.id && (
                <div className="mt-4 pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Topics covered</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map(t => (
                      <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-lg">{t}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">Theory · Exercises · Labs</span>
                <span className="text-xs text-emerald-400">{activeModule === module.id ? "▲ less" : "▼ more"}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-8 py-24 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">🚀 How it works</h2>
          <p className="text-slate-400 mb-16">Four simple steps to go from zero to DevSecOps ready</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, i) => (
              <div key={item.num} className="relative">
                
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                  {item.icon}
                </div>
                <p className="text-xs text-emerald-400 font-mono mb-1">Step {item.num}</p>
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
            modules, exercises and practical challenges — completely free.
          </p>
          <a href="https://github.com/MohitAttri0001" className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition duration-200 text-emerald-400 font-mono text-sm hover:scale-105">
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