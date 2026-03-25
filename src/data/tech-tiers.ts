// ═══════════════════════════════════════════════════
// 技术实现维度 Tech Implementation Tiers
// 按开发方式与工具链对图表实现路径分类
// ═══════════════════════════════════════════════════

export interface TechStack {
  id: string
  name: string
  nameEn: string
  desc: string
  complexity: 1 | 2 | 3  // 实现复杂度：1-低, 2-中, 3-高
  tools: string[]
  suitableCharts: string[]
  pros: string[]
  cons: string[]
}

export interface TechTier {
  id: string
  name: string
  nameEn: string
  number: string
  color: string
  purpose: string
  stacks: TechStack[]
}

export const techTiers: TechTier[] = [
  // ═══════════════════════════════════════════════════
  // Tier 1: 原生代码路径
  // ═══════════════════════════════════════════════════
  {
    id: 't1',
    name: '原生代码',
    nameEn: 'Native Code (SVG / Canvas / WebGL)',
    number: 'PATH 01',
    color: 'oklch(52% 0.20 240)',
    purpose: '直接操作浏览器底层渲染 API，最高灵活度，适合深度定制与超大数据量场景',
    stacks: [
      {
        id: 'svg',
        name: 'SVG',
        nameEn: 'Scalable Vector Graphics',
        desc: '基于 XML 的矢量图形标准，DOM 可操控，天然支持无限缩放与 CSS 动画。适合节点数 < 10,000 的精细图表。',
        complexity: 2,
        tools: ['原生 SVG', 'D3.js', 'Snap.svg', 'GSAP'],
        suitableCharts: ['柱状图', '折线图', '散点图', '力导向图', '桑基图', '树状图', '雷达图', '旭日图'],
        pros: ['无限矢量缩放', 'DOM 可访问性好', 'CSS/JS 动画自由', '调试工具友好'],
        cons: ['万级节点性能差', '学习曲线陡峭', '开发成本高']
      },
      {
        id: 'canvas',
        name: 'Canvas 2D',
        nameEn: 'HTML5 Canvas 2D Context',
        desc: '像素级光栅渲染，GPU 加速，大数据量下性能远优于 SVG。适合实时数据流、热力图、百万级散点等高密度场景。',
        complexity: 3,
        tools: ['Canvas API', 'Fabric.js', 'Konva.js', 'ZRender'],
        suitableCharts: ['热力图', '大规模散点', '密度图', '实时折线', '蜡烛图', '粒子动效'],
        pros: ['百万级数据流畅', '实时动画性能佳', '像素级控制'],
        cons: ['不可矢量缩放', '无 DOM，交互复杂', '可访问性差']
      },
      {
        id: 'webgl',
        name: 'WebGL / GPU',
        nameEn: 'WebGL / WebGPU',
        desc: 'GPU 着色器级渲染，亿级数据点可视化的唯一选择。适合 3D 地理可视化、实时大屏、科学可视化等极端场景。',
        complexity: 3,
        tools: ['Three.js', 'deck.gl', 'Luma.gl', 'Regl'],
        suitableCharts: ['3D 地图', '大屏可视化', '亿级散点', '实时流图', '体渲染', 'GIS 分析'],
        pros: ['极限数据量', '3D 原生支持', '实时 60fps'],
        cons: ['门槛极高', '调试困难', '移动端功耗大']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Tier 2: 可视化库路径
  // ═══════════════════════════════════════════════════
  {
    id: 't2',
    name: '可视化库',
    nameEn: 'Chart Library / Visualization Framework',
    number: 'PATH 02',
    color: 'oklch(50% 0.18 175)',
    purpose: '封装好的图表组件库，声明式配置驱动，工程师首选路径，平衡灵活度与开发效率',
    stacks: [
      {
        id: 'echarts',
        name: 'Apache ECharts',
        nameEn: '百度开源 · Apache 顶级项目',
        desc: '国内最广泛的前端图表库，JSON 配置驱动，内置 Canvas/SVG 双渲染，图型覆盖最全，中文文档完善，大屏场景首选。',
        complexity: 1,
        tools: ['echarts', 'echarts-gl', 'vue-echarts'],
        suitableCharts: ['全类型覆盖', '大屏组合', '地图', '3D图表', '关系图'],
        pros: ['图型最全面', '中文社区强', '大屏场景成熟', '免费开源'],
        cons: ['配置项极繁', '定制化成本高', '包体积较大']
      },
      {
        id: 'd3',
        name: 'D3.js',
        nameEn: 'Data-Driven Documents · Mike Bostock',
        desc: '可视化工具库而非图表库，提供数学映射、DOM 绑定等底层原语。任何图型皆可实现，是定制可视化的事实标准，但学习曲线最陡。',
        complexity: 3,
        tools: ['d3-scale', 'd3-shape', 'd3-force', 'Observable'],
        suitableCharts: ['任意定制图型', '力导向图', '桑基图', '弦图', '地理投影'],
        pros: ['无限定制自由', '数学映射强大', '生态极丰富'],
        cons: ['学习成本最高', '无开箱即用', 'React 集成繁']
      },
      {
        id: 'vega',
        name: 'Vega / Vega-Lite',
        nameEn: 'Grammar of Graphics · UW Interactive Data Lab',
        desc: '图形语法（Grammar of Graphics）实现，JSON schema 声明式规范，Vega-Lite 是其高层语法糖。LLM 生成可视化首选（结构化输出友好）。',
        complexity: 1,
        tools: ['vega-lite', 'altair(Python)', 'vegafusion'],
        suitableCharts: ['统计图表', '多视图联动', '探索分析', 'AI生成图表'],
        pros: ['AI生成友好', '声明式简洁', '多视图联动内置'],
        cons: ['图型覆盖有限', '定制化较难', '国内资料少']
      },
      {
        id: 'react-charts',
        name: 'React 生态图表库',
        nameEn: 'Recharts / Nivo / Victory / Tremor',
        desc: 'React 组件封装的图表库，声明式 JSX 组合，与 React 状态/生命周期深度集成，适合 SaaS 产品和数据仪表盘应用。',
        complexity: 1,
        tools: ['recharts', 'nivo', 'tremor', 'visx'],
        suitableCharts: ['折线/柱状/饼图', '组合图', '仪表盘组件', 'KPI卡片'],
        pros: ['React 集成无缝', 'TypeScript 友好', '开箱即用美观'],
        cons: ['绑定 React 生态', '复杂图型缺失', '性能中等']
      },
      {
        id: 'scientific-charts',
        name: '科学/商业图表库',
        nameEn: 'Plotly / Highcharts / Chart.js',
        desc: '注重开箱即用与交互体验，Plotly 覆盖科学图型（3D曲面/等高线），Highcharts 注重商业美观，Chart.js 轻量易上手。',
        complexity: 1,
        tools: ['plotly.js', 'highcharts', 'chart.js'],
        suitableCharts: ['统计图表全家桶', '3D曲面', '等高线', '金融图表'],
        pros: ['交互内置完善', '多语言 SDK', '企业支持好'],
        cons: ['Highcharts 商业收费', '定制灵活度中等']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Tier 3: BI & 无代码路径
  // ═══════════════════════════════════════════════════
  {
    id: 't3',
    name: 'BI & 无代码工具',
    nameEn: 'Business Intelligence / No-Code Platform',
    number: 'PATH 03',
    color: 'oklch(52% 0.18 55)',
    purpose: '拖拽配置驱动，数据分析师和业务人员首选，快速搭建数据看板，无需编写代码',
    stacks: [
      {
        id: 'enterprise-bi',
        name: '企业 BI 平台',
        nameEn: 'Tableau / Power BI / Qlik',
        desc: '拖拽式可视化分析平台，内置数十种图表类型，支持数据源直连、多表关联和分享发布。适合数据团队日常分析报告。',
        complexity: 1,
        tools: ['Tableau', 'Power BI', 'Qlik Sense'],
        suitableCharts: ['标准统计图表', '地理图', '热力图', '表格', 'KPI卡片'],
        pros: ['零代码快速出图', '数据源生态丰富', '企业权限管理'],
        cons: ['许可证费用高', '定制化受限', '嵌入集成复杂']
      },
      {
        id: 'china-bi',
        name: '国产 BI 平台',
        nameEn: '帆软 FineReport / 阿里 DataV / 腾讯 RayData',
        desc: '国产化替代方案，深度支持国内数据源（MaxCompute/TiDB），DataV 专注大屏可视化，FineReport 专注报表导出，私有化部署友好。',
        complexity: 1,
        tools: ['DataV', 'FineReport', 'Sugar BI', 'RayData'],
        suitableCharts: ['大屏可视化', '报表导出', '地理热力', '实时数据看板'],
        pros: ['国内数据源兼容', '私有化部署', '大屏模板丰富'],
        cons: ['国际化能力弱', '定制仍需代码']
      },
      {
        id: 'opensource-bi',
        name: '开源 BI / 监控',
        nameEn: 'Grafana / Metabase / Superset / Redash',
        desc: '开源免费，Grafana 专注时序监控，Metabase 适合业务人员自助查询，Superset 支持大数据源，均可自托管部署。',
        complexity: 2,
        tools: ['Grafana', 'Metabase', 'Superset', 'Redash'],
        suitableCharts: ['时序折线', '监控看板', 'SQL 自助分析', '告警图'],
        pros: ['完全免费', '自托管可控', '插件生态丰富'],
        cons: ['运维成本', '高级功能需企业版']
      },
      {
        id: 'spreadsheet',
        name: '电子表格工具',
        nameEn: 'Excel / Google Sheets / WPS 表格',
        desc: '最普及的数据可视化工具，零编程门槛，适合临时分析和小规模数据。内置图表向导，一键生成标准图表，离线可用。',
        complexity: 1,
        tools: ['Excel', 'Google Sheets', 'WPS'],
        suitableCharts: ['柱状/折线/饼图', '散点图', '组合图', '迷你图'],
        pros: ['零门槛最普及', '数据-图表联动', '离线无依赖'],
        cons: ['万行以上卡顿', '美观度有限', '无法程序化']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Tier 4: 设计工具路径
  // ═══════════════════════════════════════════════════
  {
    id: 't4',
    name: '设计工具',
    nameEn: 'Design Tool / Presentation Software',
    number: 'PATH 04',
    color: 'oklch(52% 0.17 330)',
    purpose: '视觉设计师和产品经理首选路径，所见即所得，输出可交付的静态/动效图表，适合概念框架图和信息图设计',
    stacks: [
      {
        id: 'ui-design',
        name: 'UI 设计工具',
        nameEn: 'Figma / Sketch / Adobe XD',
        desc: '矢量设计工具，通过手绘或插件生成图表，Figma Charts 插件可接入真实数据。适合产品原型中的数据可视化模块设计。',
        complexity: 1,
        tools: ['Figma', 'Charts 插件', 'Sketch'],
        suitableCharts: ['原型图表', '信息架构图', '概念框架', '品牌屋', '仪表盘原型'],
        pros: ['设计自由度极高', '团队协作实时', '组件库可复用'],
        cons: ['不可数据驱动', '动态交互受限', '输出需前端还原']
      },
      {
        id: 'presentation',
        name: '演示文稿工具',
        nameEn: 'PowerPoint / Keynote / Google Slides',
        desc: '商业汇报场景首选，内置图表向导，支持 Excel 数据导入和链接更新。PowerPoint SmartArt 可快速生成层级/流程/循环等框架图。',
        complexity: 1,
        tools: ['PowerPoint', 'Keynote', 'SmartArt'],
        suitableCharts: ['金字塔', '品牌屋', '流程图', '组织架构', '标准统计图'],
        pros: ['零门槛最普及', '框架图模板丰富', '汇报场景完美契合'],
        cons: ['仅静态输出', '大数据图表弱', '无 Web 嵌入']
      },
      {
        id: 'whiteboard',
        name: '在线白板工具',
        nameEn: 'Miro / FigJam / Lucidchart / Whimsical',
        desc: '协作型白板，内置流程图/思维导图/用户旅程图模板，适合团队共创和战略工作坊。Miro 内置数据图表功能，可轻量接入数据。',
        complexity: 1,
        tools: ['Miro', 'FigJam', 'Lucidchart'],
        suitableCharts: ['思维导图', '用户旅程', '服务蓝图', 'SWOT', '流程图'],
        pros: ['实时多人协作', '工作坊首选', '框架模板极丰富'],
        cons: ['数据绑定弱', '无 embed 输出']
      },
      {
        id: 'illustration',
        name: '专业插画工具',
        nameEn: 'Adobe Illustrator / Affinity Designer',
        desc: '专业矢量插画工具，适合制作出版级信息图（Infographic）和品牌视觉图表。精细排版控制，输出高质量 PDF/SVG。',
        complexity: 2,
        tools: ['Illustrator', 'Affinity Designer'],
        suitableCharts: ['信息图 Infographic', '品牌可视化', '数据新闻图', '出版级图表'],
        pros: ['出版级视觉质量', '排版精细控制', 'SVG 导出完美'],
        cons: ['无数据绑定', '学习成本高', '手工制作效率低']
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Tier 5: AI 生成路径
  // ═══════════════════════════════════════════════════
  {
    id: 't5',
    name: 'AI 生成 & 辅助',
    nameEn: 'AI-Generated / LLM-Assisted Visualization',
    number: 'PATH 05',
    color: 'oklch(50% 0.16 270)',
    purpose: '自然语言描述驱动图表生成，2024年后快速成熟，适合快速原型、探索分析和低代码场景',
    stacks: [
      {
        id: 'llm-code-gen',
        name: 'LLM 代码生成',
        nameEn: 'GPT / Claude → ECharts / Python / D3',
        desc: '用自然语言描述需求，LLM 生成 ECharts JSON 配置、Python matplotlib/seaborn 代码或 D3 代码，无需手写配置。快速原型首选。',
        complexity: 1,
        tools: ['GPT-4o', 'Claude', '→ ECharts', '→ Vega-Lite'],
        suitableCharts: ['所有标准图型', '定制图型', 'SVG信息图'],
        pros: ['自然语言驱动', '快速出原型', '迭代成本极低'],
        cons: ['复杂图型不稳定', '需要人工审核', '数据安全风险']
      },
      {
        id: 'text-to-chart',
        name: 'Text-to-Chart 产品',
        nameEn: 'Julius AI / ChartGPT / Rows / Vizly',
        desc: '专注于数据-图表 AI 转换的 SaaS 产品，上传 CSV/Excel 后用自然语言提问即可生成图表，无需任何代码，适合数据分析师快速探索。',
        complexity: 1,
        tools: ['Julius AI', 'Rows', 'Vizly', 'Noteable'],
        suitableCharts: ['统计图表', '趋势分析', '相关性图', '自动推荐'],
        pros: ['零门槛最快', '自动推荐最优图型', '数据洞察一体'],
        cons: ['定制化极弱', '数据上传隐私', '复杂图型缺失']
      },
      {
        id: 'ai-infographic',
        name: 'AI 信息图生成',
        nameEn: 'Napkin AI / Gamma / Beautiful.ai / Tome',
        desc: '从文本/大纲直接生成信息图、流程图、品牌框架图等概念可视化，Napkin AI 专注从段落提取关键框架，Gamma 生成完整演示文稿。',
        complexity: 1,
        tools: ['Napkin AI', 'Gamma', 'Beautiful.ai', 'Tome'],
        suitableCharts: ['信息图', '流程图', '思维导图', '概念框架', '品牌屋'],
        pros: ['文字→框架图极快', '品牌屋等非数值图', '演示一体输出'],
        cons: ['数据驱动图弱', '精细排版难', '样式不完全可控']
      },
      {
        id: 'python-ai',
        name: 'Python AI 分析栈',
        nameEn: 'Jupyter AI / PandasAI / Code Interpreter',
        desc: 'Jupyter Notebook 集成 AI，通过对话生成 pandas/matplotlib 代码并执行。ChatGPT Code Interpreter 和 Claude Artifacts 可零配置运行 Python 可视化。',
        complexity: 1,
        tools: ['Jupyter AI', 'PandasAI', 'ChatGPT Code Interpreter', 'Claude Artifacts'],
        suitableCharts: ['数据分析全流程', '探索性可视化', '统计图表'],
        pros: ['探索分析极快', 'Notebook 集成完美', '代码可复用'],
        cons: ['环境配置有门槛', '生成代码质量不稳定']
      }
    ]
  }
]
