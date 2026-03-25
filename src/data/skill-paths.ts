// ═══════════════════════════════════════════════════
// Skill 工程化路径维度 Skill Engineering Paths
// 基于本 Skill 体系对图表生成任务的工程化封装方式
// ═══════════════════════════════════════════════════

export interface SkillNode {
  name: string
  role: string
  highlight?: boolean
  color?: string
  bgColor?: string
}

export interface SkillUseCase {
  chartType: string
  desc: string
  tags: string[]
}

export interface SkillPath {
  id: string
  name: string
  nameEn: string
  number: string
  color: string
  purpose: string
  suitableFor: string
  flow: SkillNode[]
  description?: string
  useCases: SkillUseCase[]
}

export const skillPaths: SkillPath[] = [
  // ═══════════════════════════════════════════════════
  // SK1: 单点生成
  // ═══════════════════════════════════════════════════
  {
    id: 'sk1',
    name: '单点生成',
    nameEn: 'visual-creator 直调',
    number: 'SKILL PATH 01',
    color: 'oklch(52% 0.16 150)',
    purpose: '最轻量路径，一次 Skill 调用直接输出图表。适合需求明确、质量要求不高的快速生成场景',
    suitableFor: '适合：快速原型 / 一次性需求',
    flow: [
      { name: '用户意图', role: '文字描述 / 数据' },
      { name: '→', role: '' },
      { name: 'visual-creator', role: '意图路由 + 生成器', highlight: true, color: 'oklch(45% 0.14 150)', bgColor: 'oklch(93% 0.04 150)' },
      { name: '→', role: '' },
      { name: '输出图表', role: 'SVG / PNG / HTML' }
    ],
    useCases: [
      {
        chartType: '数据可视化图型',
        desc: '柱状图、折线图、饼图、散点图等标准统计图。输入数据 + 意图描述即可。',
        tags: ['visual-creator', 'type:data_viz']
      },
      {
        chartType: '概念框架图',
        desc: '品牌屋、金字塔、2×2矩阵等非数值框架。输入文字概念即可生成结构图。',
        tags: ['visual-creator', 'type:concept']
      },
      {
        chartType: '流程图 / 时间轴',
        desc: '流程步骤、里程碑、用户旅程。输入事件列表或步骤描述。',
        tags: ['visual-creator', 'type:flowchart', 'type:timeline']
      },
      {
        chartType: 'PPT 信息图',
        desc: '演讲汇报用结构化信息图，自动选择布局和色彩方案。',
        tags: ['visual-creator', 'type:ppt_infographic']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // SK2: 生成+评测
  // ═══════════════════════════════════════════════════
  {
    id: 'sk2',
    name: '生成 + 评测',
    nameEn: 'visual-creator → infovis-evaluator',
    number: 'SKILL PATH 02',
    color: 'oklch(50% 0.18 240)',
    purpose: '生成后立即进行三维质量评测，输出结构化评分报告。适合有质量要求的交付物',
    suitableFor: '适合：有审查要求 / 汇报用图',
    flow: [
      { name: '意图 + 数据', role: 'viewer_intent / audience' },
      { name: '→', role: '' },
      { name: 'visual-creator', role: '生成可视化产物', highlight: true, color: 'oklch(45% 0.14 150)', bgColor: 'oklch(93% 0.04 150)' },
      { name: '→', role: '' },
      { name: 'infovis-evaluator', role: '三维评测矩阵', highlight: true, color: 'oklch(42% 0.16 240)', bgColor: 'oklch(93% 0.04 240)' },
      { name: '→', role: '' },
      { name: '评分报告', role: '得分 + 变异建议' }
    ],
    description: `infovis-evaluator 三维评测矩阵：
■ 信息路由（LLM）：图表类型是否匹配数据意图？Expected Topology 对齐度
■ 盲测解码（VLM）：无上下文能否提取核心洞察？Perceived Topology 匹配度
■ 认知摩擦力：视觉噪音和复杂度，Friction Score（越低越好）`,
    useCases: [
      {
        chartType: '高管汇报图表',
        desc: '对非技术决策者受众做图，需确保核心洞察无需解读即可传达。',
        tags: ['audience:非技术决策者', '盲测解码']
      },
      {
        chartType: '分布/关系类图',
        desc: '散点图、箱线图等容易被误读的图型，评测信息路由匹配度。',
        tags: ['信息路由评测', '拓扑验证']
      },
      {
        chartType: '复杂仪表盘',
        desc: '多图组合看板，重点评测认知摩擦力，识别视觉噪音来源。',
        tags: ['认知摩擦力', 'Friction Score']
      },
      {
        chartType: '图型适配性验证',
        desc: '给定数据后怀疑图型选择是否合适，让评测器验证 Expected Topology。',
        tags: ['Expected Topology', '图型路由']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // SK3: 自进化闭环
  // ═══════════════════════════════════════════════════
  {
    id: 'sk3',
    name: '自进化闭环',
    nameEn: 'infovis-autoevo · 生成→评测→变异→再生成',
    number: 'SKILL PATH 03',
    color: 'oklch(50% 0.16 330)',
    purpose: '全自动迭代优化直至得分 ≥ 9.6 分，无需人工介入。适合高质量交付和批量验证',
    suitableFor: '适合：高质量交付 / 批量质量门控',
    flow: [
      { name: 'INPUT', role: '数据 + 意图 + 受众', highlight: true, color: 'oklch(72% 0.12 270)', bgColor: 'oklch(28% 0.05 270)' },
      { name: '→', role: '' },
      { name: 'visual-creator', role: 'PHASE 1: 生成', highlight: true, color: 'oklch(72% 0.12 150)', bgColor: 'oklch(28% 0.05 150)' },
      { name: '→', role: '' },
      { name: 'infovis-evaluator', role: 'PHASE 2: 三维评测', highlight: true, color: 'oklch(72% 0.12 240)', bgColor: 'oklch(28% 0.05 240)' },
      { name: '→', role: '' },
      { name: 'Mutator', role: 'PHASE 3: 变异', highlight: true, color: 'oklch(72% 0.12 55)', bgColor: 'oklch(28% 0.05 55)' },
      { name: '↻', role: '' },
      { name: 'PASS ≥9.6', role: '最终产物', highlight: true, color: 'oklch(72% 0.12 330)', bgColor: 'oklch(28% 0.05 330)' }
    ],
    description: 'infovis-autoevo 完整流水线：最大迭代轮次 5 次 · 通过阈值 9.6 分（固定）· 每轮差异：自动写入 mutation_history 驱动下一轮',
    useCases: [
      {
        chartType: '高质量品牌可视化',
        desc: '品牌汇报用图，要求高管一眼读懂、认知摩擦极低，需反复迭代。',
        tags: ['自进化', '≥9.6分', '品牌框架图']
      },
      {
        chartType: '批量 case 质量验证',
        desc: '多个可视化 case 统一通过质量闸门，确保全部达标才交付。',
        tags: ['批量验证', '质量闸']
      },
      {
        chartType: 'Skill 自身优化',
        desc: '用评测结论反哺 visual-creator 的生成指令，让 Skill 自我进化提升基线。',
        tags: ['Skill 进化', 'mutation_history']
      },
      {
        chartType: '复杂网络/层级图',
        desc: '力导向图、桑基图等认知负担高的图型，自动迭代至认知摩擦力达标。',
        tags: ['认知摩擦', '自动迭代']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // SK4: 上层路由评测
  // ═══════════════════════════════════════════════════
  {
    id: 'sk4',
    name: '上层路由评测',
    nameEn: 'design-evaluator 统一入口',
    number: 'SKILL PATH 04',
    color: 'oklch(50% 0.16 55)',
    purpose: '图表嵌套在 PPT / 报告 / 信息图中时，由 design-evaluator 识别类型后自动派发给 infovis-evaluator 子评测',
    suitableFor: '适合：图文混排 / 整体评测',
    description: `design-evaluator 二层架构：

Layer 1 · 共同维度
- D1 可读性 & 信息层级
- D2 受众对齐
- D3 认知负担
- D4 视觉一致性

Layer 2 · 类型路由
- 图表 → infovis-evaluator
- PPT → PPT rules
- 报告 → Report rules
- 信息图 → Infographic rules`,
    useCases: [
      {
        chartType: 'PPT 中的图表评测',
        desc: 'PPT 里有图表，用 design-evaluator 整体评测，自动对图表部分调用 infovis-evaluator。',
        tags: ['设计产物', '自动派发']
      },
      {
        chartType: '品牌汇报文件',
        desc: '含品牌屋、金字塔等框架图的品牌报告，整体评测后对每个可视化元素给出改进建议。',
        tags: ['品牌框架图', '整体评测']
      },
      {
        chartType: '信息图质量审查',
        desc: '多图混排的信息图，识别其中图表类型子元素并分别评测。',
        tags: ['Infographic', '子评测器']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // SK5: 质量门控模式
  // ═══════════════════════════════════════════════════
  {
    id: 'sk5',
    name: '质量门控模式',
    nameEn: 'infovis-evaluator 独立评审',
    number: 'SKILL PATH 05',
    color: 'oklch(48% 0.16 270)',
    purpose: '不生成，只评测。对已有图表（截图/代码/URL）直接运行三维评测，输出 PASS/FAIL 和变异建议',
    suitableFor: '适合：审查已有图表 / CI 集成',
    flow: [
      { name: '已有图表', role: '截图 / 代码 / URL' },
      { name: '→', role: '' },
      { name: 'infovis-evaluator', role: '三维矩阵评测', highlight: true, color: 'oklch(42% 0.16 240)', bgColor: 'oklch(93% 0.04 240)' },
      { name: '→', role: '' },
      { name: 'PASS / FAIL', role: '得分 + 变异建议' },
      { name: '→ 若需修复 →', role: '' },
      { name: 'infovis-autoevo', role: '自动修复迭代', highlight: true, color: 'oklch(45% 0.14 330)', bgColor: 'oklch(93% 0.04 330)' }
    ],
    useCases: [
      {
        chartType: '交付前质量闸',
        desc: '图表发布前的最终检查，PASS 才允许交付，FAIL 则自动触发 infovis-autoevo 修复。',
        tags: ['质量门控', 'PASS/FAIL']
      },
      {
        chartType: '外部图表审查',
        desc: '对他人制作的图表截图进行快速质量诊断，找出认知摩擦点。',
        tags: ['独立评测', 'VLM盲测']
      },
      {
        chartType: '图型适配审查',
        desc: '质疑某图型选择是否合适，输入数据意图让评测器做信息路由验证。',
        tags: ['信息路由', '图型匹配']
      }
    ]
  }
]

// ═══════════════════════════════════════════════════
// Skill 路径选择决策建议
// ═══════════════════════════════════════════════════
export const skillDecisions = [
  {
    question: '是否有现成图表需要评测？',
    ifYes: '选择 SK5 质量门控模式',
    ifNo: '继续下一步'
  },
  {
    question: '图表是否在 PPT/报告/信息图中？',
    ifYes: '选择 SK4 上层路由评测',
    ifNo: '继续下一步'
  },
  {
    question: '是否需要高质量（≥9.6分）交付？',
    ifYes: '选择 SK3 自进化闭环',
    ifNo: '继续下一步'
  },
  {
    question: '是否有质量审查要求？',
    ifYes: '选择 SK2 生成+评测',
    ifNo: '选择 SK1 单点生成'
  }
]
