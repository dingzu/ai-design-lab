// 信息可视化 - 技术实现维度数据
// 5层技术实现路径

export interface TechChart {
  id: string
  name: string
  tags: string[]
  complexity: 'low' | 'medium' | 'high'
}

export interface TechTier {
  id: number
  level: string
  name: string
  desc: string
  color: string
  charts: TechChart[]
}

// TODO: 待从HTML提取完整数据
export const techTiers: TechTier[] = [
  {
    id: 1,
    level: 'Tier 1',
    name: '基础图表层',
    desc: '原生 SVG/Canvas，无需外部库',
    color: 'oklch(52% 0.18 150)',
    charts: [
      { id: 'bar', name: '柱状图', tags: ['SVG', '10行代码'], complexity: 'low' }
    ]
  }
]
