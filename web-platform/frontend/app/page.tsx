export default function Home() {
  const modules = [
    { id: "01", title: "Git & GitHub", icon: "🌿", status: "ready", desc: "Version control, branching, pull requests and collaboration workflows." },
    { id: "02", title: "Docker", icon: "🐳", status: "ready", desc: "Containers, images, Dockerfiles and Docker Compose." },
    { id: "03", title: "Kubernetes", icon: "☸️", status: "ready", desc: "Pods, deployments, services and scaling applications." },
    { id: "04", title: "CI/CD", icon: "⚙️", status: "ready", desc: "GitHub Actions pipelines, automation and continuous delivery." },
    { id: "05", title: "Security", icon: "🔒", status: "partial", desc: "SAST, DAST, Trivy scanning and secret detection." },
    { id: "06", title: "Terraform", icon: "🏗️", status: "ready", desc: "Infrastructure as Code, providers, variables and state." },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🛡️</span>
          <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">DSO-Lab</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#modules" className="hover:text-emerald-400 transition duration-200">Modules</a>
          <a href="#about" className="hover:text-emerald-400 transition duration-200">About</a>
          <a href="https://github.com/MohitAttri0001/dso-lab" className="hover:text-emerald-400 transition duration-200">GitHub</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
            Open Source Learning Platform
          </span>
          <h1 className="text-6xl font-extrabold mb-6 leading-tight">
            Learn{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              DevSecOps
            </span>
            <br />by doing
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            A hands-on platform for freshers to practice Git, Docker, Kubernetes,
            CI/CD, Security tools and Terraform — one step at a time.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#modules" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-bold px-8 py-3 rounded-xl transition duration-200 shadow-lg shadow-emerald-500/20">
              Start Learning →
            </a>
            <a href="https://github.com/MohitAttri0001/dso-lab" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-3 rounded-xl transition duration-200">
              ⭐ Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-slate-800 bg-slate-900/50 py-8">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-emerald-400">6</p>
            <p className="text-slate-400 text-sm mt-1">Modules</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">30+</p>
            <p className="text-slate-400 text-sm mt-1">Exercises</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-violet-400">15+</p>
            <p className="text-slate-400 text-sm mt-1">Challenges</p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="px-8 py-24 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">📚 Learning Modules</h2>
          <p className="text-slate-400 max-w-lg mx-auto">Each module has theory, guided exercises and challenges. Work through them in order for the best experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div key={module.id} className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-slate-800 group-hover:bg-slate-700 rounded-xl flex items-center justify-center text-2xl transition duration-300">
                  {module.icon}
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-semibold ${module.status === "ready" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}>
                  {module.status === "ready" ? "✅ Ready" : "🔄 Partial"}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono mb-1">Module {module.id}</p>
              <h3 className="font-bold text-lg mb-2 group-hover:text-emerald-400 transition duration-200">{module.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{module.desc}</p>
              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-xs text-slate-500">Theory · Exercises · Challenges</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-8 py-24 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">🚀 How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Fork the repo", desc: "Start by forking DSO-Lab to your GitHub account" },
              { step: "02", title: "Read theory", desc: "Understand the concept before touching any command" },
              { step: "03", title: "Do exercises", desc: "Follow step-by-step guided practice tasks" },
              { step: "04", title: "Tackle challenges", desc: "Solve real problems without hints to earn badges" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-black font-bold text-sm mx-auto mb-4">
                  {item.step}
                </div>
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
          <p className="text-slate-400 leading-relaxed mb-6">
            DSO-Lab is an open-source project built by Mohit Attri to help
            freshers get real hands-on DevSecOps experience through guided
            modules, exercises and practical challenges.
          </p>
          <a href="https://github.com/MohitAttri0001" className="inline-block bg-slate-800 hover:bg-slate-700 border border-slate-700 px-6 py-3 rounded-xl transition duration-200 text-emerald-400 font-mono text-sm">
            @MohitAttri0001
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center text-slate-600 py-8 text-sm">
        <p>DSO-Lab © 2026 — Built with ❤️ by Mohit Attri — MIT License</p>
      </footer>

    </main>
  )
}