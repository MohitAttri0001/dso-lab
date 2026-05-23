"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

import { gitModule } from "@/lib/modules/git"
import { dockerModule } from "@/lib/modules/docker"
import { kubernetesModule } from "@/lib/modules/kubernetes"
import { cicdModule } from "@/lib/modules/cicd"
import { securityModule } from "@/lib/modules/security"
import { terraformModule } from "@/lib/modules/terraform"
import { ModuleData } from "@/lib/modules/types"

const modulesData: Record<string, ModuleData> = {
  "01": gitModule,
  "02": dockerModule,
  "03": kubernetesModule,
  "04": cicdModule,
  "05": securityModule,
  "06": terraformModule,
}

type Tab =
  | "theory"
  | "exercises"
  | "labs"
  | "troubleshooting"
  | "practiceTasks"


function CodeBlock({
  language,
  value,
}: {
  language: string
  value: string
}) {
  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="relative group my-6 rounded-xl overflow-hidden border border-slate-700 bg-slate-950">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <span className="text-xs font-mono text-slate-400">
          {language || "command"}
        </span>

        <button
          onClick={copyCode}
          className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-md transition"
        >
          {copied ? "✅ copied" : "copy"}
        </button>
      </div>

      <SyntaxHighlighter
        language={language || "bash"}
        style={oneDark}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "0.875rem",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  )
}


export default function ModulePage() {
  const params = useParams()
  const router = useRouter()

  const id = params.id as string
  const module = modulesData[id as keyof typeof modulesData]

  const [tab, setTab] = useState<Tab>("theory")
  const [completed, setCompleted] = useState<string[]>([])
  const [checkedSteps, setCheckedSteps] = useState<Record<string, boolean>>({})
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem("dso-lab-progress")
    if (saved) setCompleted(JSON.parse(saved))

    const savedSteps = localStorage.getItem(`dso-lab-steps-${id}`)
    if (savedSteps) setCheckedSteps(JSON.parse(savedSteps))
  }, [id])

  useEffect(() => {
  async function loadMarkdown() {
    try {
      const moduleMap: Record<string, string> = {
        "01": "git",
        "02": "docker",
        "03": "kubernetes",
        "04": "cicd",
        "05": "security",
        "06": "terraform",
      }

      const moduleName = moduleMap[id]

      if (!moduleName) return

      const response = await fetch(`/content/${moduleName}/theory.md`)
      const text = await response.text()

      setMarkdown(text)
    } catch (error) {
      console.error("Failed to load markdown:", error)
    }
  }

  loadMarkdown()
}, [id])

  if (!module) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">😕</p>
          <h1 className="text-2xl font-bold mb-2">Module not found</h1>

          <button
            onClick={() => router.push("/")}
            className="text-emerald-400 hover:underline"
          >
            ← Back to home
          </button>
        </div>
      </div>
    )
  }

  const isCompleted = completed.includes(id)

  const markComplete = () => {
    const updated = isCompleted
      ? completed.filter(c => c !== id)
      : [...completed, id]

    setCompleted(updated)

    localStorage.setItem(
      "dso-lab-progress",
      JSON.stringify(updated)
    )
  }

  const toggleStep = (key: string) => {
    const updated = {
      ...checkedSteps,
      [key]: !checkedSteps[key],
    }

    setCheckedSteps(updated)

    localStorage.setItem(
      `dso-lab-steps-${id}`,
      JSON.stringify(updated)
    )
  }

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd)

    setCopiedCmd(cmd)

    setTimeout(() => {
      setCopiedCmd(null)
    }, 2000)
  }

  const totalSteps =
  (module.exercises?.length || 0) +
  (module.labs?.length || 0) +
  (module.troubleshooting?.length || 0) +
  (module.practiceTasks?.length || 0)

  const doneSteps =
    Object.values(checkedSteps).filter(Boolean).length

  const progressPct =
    totalSteps > 0
      ? Math.round((doneSteps / totalSteps) * 100)
      : 0

  const tabs: Tab[] = [
    "theory",
    "exercises",
    "labs",
    "troubleshooting",
    "practiceTasks",
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition"
        >
          <span>←</span>

          <span className="text-lg">🛡️</span>

          <span className="font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            DSO-Lab
          </span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500">
            {progressPct}% complete
          </span>

          <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <button
            onClick={() => setTerminalOpen(!terminalOpen)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              terminalOpen
                ? "bg-violet-500/20 border-violet-500/40 text-violet-400"
                : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
            }`}
          >
            {terminalOpen
              ? "⌨️ Hide Guide"
              : "⌨️ How to Practice"}
          </button>

          <button
            onClick={markComplete}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isCompleted
                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                : "bg-slate-800 border-slate-700 text-slate-300 hover:border-emerald-500/50"
            }`}
          >
            {isCompleted
              ? "✅ Completed"
              : "Mark Complete"}
          </button>
        </div>
      </nav>

      {/* Practice guide */}
      {terminalOpen && (
        <div className="fixed top-14 right-0 w-80 h-screen bg-slate-900 border-l border-slate-800 z-40 overflow-y-auto">
          <div className="p-5">
            <h3 className="font-bold text-emerald-400 mb-1">
              ⌨️ How to Practice
            </h3>

            <p className="text-xs text-slate-400 mb-4">
              Follow these steps to practice alongside the module
            </p>

            <div className="space-y-4">

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs font-bold text-white mb-2">
                  Step 1 — Open your terminal
                </p>

                <p className="text-xs text-slate-400 mb-2">
                  Open VS Code and press:
                </p>

                <div className="flex gap-2">
                  <kbd className="bg-slate-700 text-white text-xs px-2 py-1 rounded">
                    Ctrl
                  </kbd>

                  <span className="text-slate-500 text-xs mt-1">
                    +
                  </span>

                  <kbd className="bg-slate-700 text-white text-xs px-2 py-1 rounded">
                    `
                  </kbd>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs font-bold text-white mb-2">
                  Step 2 — Copy commands
                </p>

                <p className="text-xs text-slate-400">
                  Hover any command and click copy
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs font-bold text-white mb-2">
                  Step 3 — Paste and run
                </p>

                <p className="text-xs text-slate-400">
                  Paste into your WSL terminal
                </p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-xs font-bold text-white mb-2">
                  Step 4 — Verify output
                </p>

                <p className="text-xs text-slate-400">
                  Compare your output with expected results
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div
        className={`pt-20 pb-6 px-8 transition-all duration-300 ${
          terminalOpen ? "mr-80" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto">

          <div className="flex items-center gap-4 mb-5">
            <div
              className={`w-14 h-14 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}
            >
              {module.icon}
            </div>

            <div>
              <p className="text-xs text-slate-500 font-mono mb-0.5">
                Module {module.id}
              </p>

              <h1 className="text-2xl font-bold">
                {module.title}
              </h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            {tabs.map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  tab === t
                    ? "bg-emerald-500 text-black font-bold"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {t === "theory"
                  ? "📖 Theory"
                  : t === "exercises"
                  ? "</> Exercises"
                  : t === "labs"
                  ? "🧪 Labs"
                  : t === "troubleshooting"
                  ? "🛠️ Troubleshooting"
                  : "✅ Practice Tasks"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex-1 px-8 pb-24 transition-all duration-300 ${
          terminalOpen ? "mr-80" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-4">

          {/* Theory */}
          {tab === "theory" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-extrabold text-emerald-400 mb-6 border-b border-slate-700 pb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold text-cyan-400 mt-10 mb-4">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-slate-300 leading-7 mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="space-y-2 mb-6 ml-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="flex gap-2 text-slate-300">
                      <span className="text-emerald-400">▸</span>
                      <span>{children}</span>
                    </li>
                  ),
                  hr: () => (
                    <hr className="border-slate-700 my-8" />
                  ),
                  code(props) {
                    const { children } = props

                    const codeString = String(children).replace(/\n$/, "")

                    const [copied, setCopied] = useState(false)

                    const handleCopy = async () => {
                      await navigator.clipboard.writeText(codeString)

                      setCopied(true)

                      setTimeout(() => {
                        setCopied(false)
                      }, 2000)
                    }

                    return (
                      <span className="relative group inline-flex items-center gap-2 bg-slate-950 border border-slate-700 text-emerald-400 px-3 py-1.5 rounded-md font-mono text-sm">
                        <code>{children}</code>

                        <button
                          onClick={handleCopy}
                          className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-white text-xs transition"
                          title="Copy"
                        >
                          {copied ? "✓" : "⧉"}
                        </button>
                      </span>
                    )
                  },
                  pre: ({ children }) => (
                    <pre className="bg-slate-950 border border-slate-700 rounded-xl p-4 overflow-x-auto mb-6">
                      {children}
                    </pre>
                  ),
                  strong: ({ children }) => (
                    <strong className="text-white font-bold">
                      {children}
                    </strong>
                  ),
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          )}

          {/* Exercises */}
          {tab === "exercises" && (
            <>
              {module.exercises.map((ex, i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-base">
                      {ex.title}
                    </h2>

                    <button
                      onClick={() => toggleStep(`ex-${i}`)}
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${
                        checkedSteps[`ex-${i}`]
                          ? "bg-emerald-500 border-emerald-500 text-black"
                          : "border-slate-600"
                      }`}
                    >
                      ✓
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    {ex.commands.map((cmd, j) => (
                      <div
                        key={j}
                        className="group flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 font-mono text-sm"
                      >
                        <span className="text-emerald-400">
                          $ <span className="text-slate-200">{cmd}</span>
                        </span>

                        <button
                          onClick={() => copyCommand(cmd)}
                          className="text-xs text-slate-500 hover:text-white"
                        >
                          {copiedCmd === cmd
                            ? "✅ copied!"
                            : "copy"}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-800 rounded-xl px-4 py-3">
                    <p className="text-xs text-slate-500 mb-1">
                      Expected result
                    </p>

                    <p className="text-sm text-slate-300">
                      {ex.expected}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}

          {/* Labs */}
        {tab === "labs" && (
          <>
            {(module.labs || []).map((lab, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4"></div>
                <h2 className="font-bold text-lg text-cyan-400 mb-2">{lab.title}</h2>
                <button
                    onClick={() => toggleStep(`lab-${i}`)}
                    className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${
                      checkedSteps[`lab-${i}`]
                        ? "bg-cyan-500 border-cyan-500 text-black"
                        : "border-slate-600"
                    }`}
                  >
                    ✓
                  </button>

                <p className="text-slate-400 text-sm mb-4">{lab.scenario}</p>

                <p className="text-xs text-slate-500 uppercase mb-2">Objectives</p>
                <ul className="space-y-2 mb-4">
                  {lab.objectives.map((obj, j) => (
                    <li key={j} className="text-slate-300 text-sm">▸ {obj}</li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 uppercase mb-2">Tasks</p>
                <ul className="space-y-2 mb-4">
                  {lab.tasks.map((task, j) => (
                    <li key={j} className="text-slate-300 text-sm">✅ {task}</li>
                  ))}
                </ul>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-4 py-3">
                  <p className="text-xs text-emerald-400 font-semibold mb-1">Success Criteria</p>
                  <p className="text-sm text-slate-300">{lab.success}</p>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Troubleshooting */}
        {tab === "troubleshooting" && (
          <>
            {(module.troubleshooting || []).map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4"></div>
                <h2 className="font-bold text-lg text-amber-400 mb-2">{item.title}</h2>
                <button
                      onClick={() => toggleStep(`tr-${i}`)}
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${
                        checkedSteps[`tr-${i}`]
                          ? "bg-amber-500 border-amber-500 text-black"
                          : "border-slate-600"
                      }`}
                    >
                      ✓
                    </button>

                <p className="text-slate-300 text-sm mb-4">{item.problem}</p>

                <p className="text-xs text-slate-500 uppercase mb-2">Symptoms</p>
                <ul className="space-y-2 mb-4">
                  {item.symptoms.map((symptom, j) => (
                    <li key={j} className="text-slate-300 text-sm">⚠️ {symptom}</li>
                  ))}
                </ul>

                <p className="text-xs text-slate-500 uppercase mb-2">Investigation Steps</p>
                <ul className="space-y-2 mb-4">
                  {item.investigationSteps.map((step, j) => (
                    <li key={j} className="text-slate-300 text-sm">🔎 {step}</li>
                  ))}
                </ul>

                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl px-4 py-3">
                  <p className="text-xs text-emerald-400 font-semibold mb-1">Fix</p>
                  <p className="text-sm text-slate-300">{item.fix}</p>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Practice Tasks */}
        {tab === "practiceTasks" && (
          <>
            {(module.practiceTasks || []).map((task, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4"></div>
                <h2 className="font-bold text-lg text-emerald-400 mb-2">{task.title}</h2>
                <button
                  onClick={() => toggleStep(`pt-${i}`)}
                  className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center text-sm font-bold ${
                    checkedSteps[`pt-${i}`]
                      ? "bg-emerald-500 border-emerald-500 text-black"
                      : "border-slate-600"
                  }`}
                >
                  ✓
                </button>


                <p className="text-slate-400 text-sm mb-4">{task.scenario}</p>

                <p className="text-xs text-slate-500 uppercase mb-2">Tasks</p>
                <ul className="space-y-2 mb-4">
                  {task.tasks.map((t, j) => (
                    <li key={j} className="text-slate-300 text-sm">✅ {t}</li>
                  ))}
                </ul>

                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl px-4 py-3">
                  <p className="text-xs text-cyan-400 font-semibold mb-1">Expected Outcome</p>
                  <p className="text-sm text-slate-300">{task.success}</p>
                </div>
              </div>
            ))}
          </>
        )}

        </div>
      </div>
    </main>
  )
}