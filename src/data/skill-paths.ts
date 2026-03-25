// 信息可视化 - Skill 工程路径数据
// 5条 Skill 调用路径

export interface SkillFlowNode {
  name: string
  role: string
  highlight?: boolean
  color?: string
  bg?: string
  arrow?: string
}

export interface SkillUseCase {
  title: string
  desc: string
  tags: string[]
}

export interface SkillPath {
  id: string
  title: string
  subtitle: string
  desc: string
  badge: string
  color: string
  bgColor: string
  badgeBg: string
  borderColor: string
  flow: SkillFlowNode[]
  useCases: SkillUseCase[]
}

// TODO: 待从HTML提取完整数据
export const skillPaths: SkillPath[] = [
  {
    id: '01',
    title: '快速生成模式',
    subtitle: 'visual-creator 直接调用',
    desc: '单次生成，追求速度。适合需求明确、无严格质量要求的场景',
    badge: '适合：原型展示 / 快速验证',
    color: 'oklch(45% 0.14 150)',
    bgColor: 'oklch(95% 0.03 150)',
    badgeBg: 'oklch(90% 0.05 150)',
    borderColor: 'oklch(78% 0.08 150)',
    flow: [
      { name: '用户需求', role: '数据 + 意图' },
      { name: 'visual-creator', role: '生成图表', highlight: true, color: 'oklch(45% 0.14 150)', bg: 'oklch(93% 0.04 150)' },
      { name: '图表交付', role: 'SVG / HTML' }
    ],
    useCases: [
      {
        title: '原型验证',
        desc: '快速生成概念展示图，验证可行性',
        tags: ['速度优先', '单次生成']
      }
    ]
  }
]

export const skillDecisions = [
  {
    label: '快速生成',
    color: 'oklch(70% 0.12 150)',
    text: '需求明确 + 无质量压力<br>→ <strong>SK1: visual-creator</strong>'
  }
]
