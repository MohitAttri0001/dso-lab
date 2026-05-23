export type TheorySection = {
  heading: string
  content: string
}

export type Exercise = {
  title: string
  goal?: string
  commands: string[]
  expected: string
}

export type Lab = {
  title: string
  scenario: string
  objectives: string[]
  tasks: string[]
  success: string
}

export type TroubleshootingTask = {
  title: string
  problem: string
  symptoms: string[]
  investigationSteps: string[]
  fix: string
}

export type PracticeTask = {
  title: string
  scenario: string
  tasks: string[]
  success: string
}

export type ModuleData = {
  id: string
  title: string
  icon: string
  color: string

  theory: TheorySection[]
  exercises: Exercise[]
  labs: Lab[]
  troubleshooting: TroubleshootingTask[]
  practiceTasks: PracticeTask[]
}