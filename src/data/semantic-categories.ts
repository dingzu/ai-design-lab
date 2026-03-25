// 信息可视化 - 语义维度分类数据
// 10大类别，60+图表类型

export interface ChartData {
  id: string
  name: string
  nameEn: string
  use: string
  tag: string
  svgCode: string
}

export interface Subcategory {
  id: string
  name: string
  charts: ChartData[]
}

export interface SemanticCategory {
  id: string
  name: string
  nameEn: string
  icon: string
  color: string
  purpose: string
  subcategories: Subcategory[]
}

export const semanticCategories: SemanticCategory[] = [
  // ═══════════════════════════════════════════════════
  // Category 01: 比较 Comparison
  // ═══════════════════════════════════════════════════
  {
    id: 'compare',
    name: '比较',
    nameEn: 'Comparison',
    icon: '📊',
    color: 'oklch(58% 0.19 25)',
    purpose: '不同对象、类别或时期之间的量级对比。核心问题：谁更大？差多少？排名如何？',
    subcategories: [
      {
        id: 'basic-compare',
        name: '基础比较',
        charts: [
          {
            id: 'bar-chart',
            name: '柱状图',
            nameEn: 'Bar Chart',
            use: '分类维度间的量级对比，分类数 ≤ 10',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="80" width="18" height="32" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="38" y="55" width="18" height="57" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="64" y="35" width="18" height="77" fill="oklch(58% 0.19 25)" opacity="0.85" rx="2"/>
          <rect x="90" y="60" width="18" height="52" fill="oklch(58% 0.19 25)" opacity="0.7" rx="2"/>
          <rect x="116" y="44" width="18" height="68" fill="oklch(58% 0.19 25)" opacity="0.55" rx="2"/>
          <line x1="8" y1="114" x2="148" y2="114" stroke="oklch(75% 0.02 260)" stroke-width="1.5"/>
          <line x1="8" y1="114" x2="8" y2="20" stroke="oklch(75% 0.02 260)" stroke-width="1.5"/>
          <line x1="8" y1="87" x2="148" y2="87" stroke="oklch(88% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
          <line x1="8" y1="60" x2="148" y2="60" stroke="oklch(88% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
          <line x1="8" y1="33" x2="148" y2="33" stroke="oklch(88% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
        </svg>`
          },
          {
            id: 'horizontal-bar',
            name: '条形图',
            nameEn: 'Horizontal Bar',
            use: '标签文字较长时的分类对比',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="36" y="14" width="90" height="14" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="36" y="34" width="64" height="14" fill="oklch(58% 0.19 25)" opacity="0.85" rx="2"/>
          <rect x="36" y="54" width="108" height="14" fill="oklch(58% 0.19 25)" opacity="0.7" rx="2"/>
          <rect x="36" y="74" width="48" height="14" fill="oklch(58% 0.19 25)" opacity="0.55" rx="2"/>
          <rect x="36" y="94" width="76" height="14" fill="oklch(58% 0.19 25)" opacity="0.4" rx="2"/>
          <line x1="34" y1="8" x2="34" y2="114" stroke="oklch(75% 0.02 260)" stroke-width="1.5"/>
          <rect x="4" y="15" width="26" height="6" fill="oklch(85% 0.01 260)" rx="2"/>
          <rect x="4" y="35" width="26" height="6" fill="oklch(85% 0.01 260)" rx="2"/>
          <rect x="4" y="55" width="26" height="6" fill="oklch(85% 0.01 260)" rx="2"/>
          <rect x="4" y="75" width="26" height="6" fill="oklch(85% 0.01 260)" rx="2"/>
          <rect x="4" y="95" width="26" height="6" fill="oklch(85% 0.01 260)" rx="2"/>
        </svg>`
          },
          {
            id: 'grouped-bar',
            name: '分组柱状图',
            nameEn: 'Grouped Bar',
            use: '多系列同类别并排对比',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="60" width="13" height="52" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="27" y="75" width="13" height="37" fill="oklch(72% 0.14 25)" rx="2"/>
          <rect x="52" y="40" width="13" height="72" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="67" y="55" width="13" height="57" fill="oklch(72% 0.14 25)" rx="2"/>
          <rect x="92" y="50" width="13" height="62" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="107" y="68" width="13" height="44" fill="oklch(72% 0.14 25)" rx="2"/>
          <rect x="132" y="45" width="13" height="67" fill="oklch(58% 0.19 25)" rx="2"/>
          <rect x="147" y="65" width="13" height="47" fill="oklch(72% 0.14 25)" rx="2"/>
          <line x1="8" y1="114" x2="164" y2="114" stroke="oklch(75% 0.02 260)" stroke-width="1.5"/>
          <line x1="8" y1="114" x2="8" y2="20" stroke="oklch(75% 0.02 260)" stroke-width="1.5"/>
          <rect x="10" y="10" width="8" height="6" fill="oklch(58% 0.19 25)" rx="1"/>
          <rect x="10" y="20" width="8" height="6" fill="oklch(72% 0.14 25)" rx="1"/>
          <rect x="22" y="11" width="20" height="4" fill="oklch(82% 0.02 260)" rx="1"/>
          <rect x="22" y="21" width="20" height="4" fill="oklch(82% 0.02 260)" rx="1"/>
        </svg>`
          },
          {
            id: 'radar',
            name: '雷达图',
            nameEn: 'Radar / Spider',
            use: '多维度综合评分对比，维度数 3–8',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,60)">
            <polygon points="0,-44 41.6,-21.2 41.6,21.2 0,44 -41.6,21.2 -41.6,-21.2"
              fill="none" stroke="oklch(85% 0.02 260)" stroke-width="0.8"/>
            <polygon points="0,-28 26.5,-13.5 26.5,13.5 0,28 -26.5,13.5 -26.5,-13.5"
              fill="none" stroke="oklch(85% 0.02 260)" stroke-width="0.8"/>
            <polygon points="0,-12 11.3,-5.8 11.3,5.8 0,12 -11.3,5.8 -11.3,-5.8"
              fill="none" stroke="oklch(85% 0.02 260)" stroke-width="0.8"/>
            <line x1="0" y1="-44" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <line x1="41.6" y1="-21.2" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <line x1="41.6" y1="21.2" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <line x1="0" y1="44" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <line x1="-41.6" y1="21.2" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <line x1="-41.6" y1="-21.2" x2="0" y2="0" stroke="oklch(82% 0.02 260)" stroke-width="0.8"/>
            <polygon points="0,-36 32,-15 22,18 -5,38 -35,16 -28,-30"
              fill="oklch(58% 0.19 25 / 0.25)" stroke="oklch(58% 0.19 25)" stroke-width="1.8"/>
            <polygon points="0,-20 20,-10 36,20 -10,28 -28,10 -20,-18"
              fill="oklch(58% 0.18 200 / 0.2)" stroke="oklch(58% 0.18 200)" stroke-width="1.5" stroke-dasharray="3,2"/>
          </g>
        </svg>`
          },
          {
            id: 'heatmap-matrix',
            name: '热力矩阵',
            nameEn: 'Heatmap Matrix',
            use: '两维分类交叉对比，颜色编码量级',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,14)">
            <rect x="0" y="0" width="22" height="22" rx="2" fill="oklch(92% 0.04 25)"/>
            <rect x="24" y="0" width="22" height="22" rx="2" fill="oklch(78% 0.10 25)"/>
            <rect x="48" y="0" width="22" height="22" rx="2" fill="oklch(58% 0.19 25)"/>
            <rect x="72" y="0" width="22" height="22" rx="2" fill="oklch(72% 0.13 25)"/>
            <rect x="96" y="0" width="22" height="22" rx="2" fill="oklch(50% 0.20 25)"/>
            <rect x="0" y="24" width="22" height="22" rx="2" fill="oklch(68% 0.15 25)"/>
            <rect x="24" y="24" width="22" height="22" rx="2" fill="oklch(92% 0.04 25)"/>
            <rect x="48" y="24" width="22" height="22" rx="2" fill="oklch(85% 0.07 25)"/>
            <rect x="72" y="24" width="22" height="22" rx="2" fill="oklch(58% 0.19 25)"/>
            <rect x="96" y="24" width="22" height="22" rx="2" fill="oklch(78% 0.10 25)"/>
            <rect x="0" y="48" width="22" height="22" rx="2" fill="oklch(50% 0.20 25)"/>
            <rect x="24" y="48" width="22" height="22" rx="2" fill="oklch(68% 0.15 25)"/>
            <rect x="48" y="48" width="22" height="22" rx="2" fill="oklch(92% 0.04 25)"/>
            <rect x="72" y="48" width="22" height="22" rx="2" fill="oklch(85% 0.07 25)"/>
            <rect x="96" y="48" width="22" height="22" rx="2" fill="oklch(72% 0.13 25)"/>
            <rect x="0" y="72" width="22" height="22" rx="2" fill="oklch(82% 0.08 25)"/>
            <rect x="24" y="72" width="22" height="22" rx="2" fill="oklch(58% 0.19 25)"/>
            <rect x="48" y="72" width="22" height="22" rx="2" fill="oklch(72% 0.13 25)"/>
            <rect x="72" y="72" width="22" height="22" rx="2" fill="oklch(92% 0.04 25)"/>
            <rect x="96" y="72" width="22" height="22" rx="2" fill="oklch(68% 0.15 25)"/>
          </g>
        </svg>`
          },
          {
            id: 'bullet-chart',
            name: '子弹图',
            nameEn: 'Bullet Chart',
            use: '目标值 vs 实际值，KPI达成',
            tag: '专用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <text x="8" y="24" font-size="9" fill="oklch(55% 0.02 260)" font-family="Inter">销售额</text>
          <rect x="8" y="28" width="144" height="14" rx="2" fill="oklch(91% 0.02 260)"/>
          <rect x="8" y="28" width="96" height="14" rx="2" fill="oklch(80% 0.05 260)"/>
          <rect x="8" y="28" width="72" height="14" rx="2" fill="oklch(58% 0.19 25)"/>
          <line x1="92" y1="24" x2="92" y2="46" stroke="oklch(30% 0.02 260)" stroke-width="2.5"/>
          <text x="8" y="60" font-size="9" fill="oklch(55% 0.02 260)" font-family="Inter">增长率</text>
          <rect x="8" y="64" width="144" height="14" rx="2" fill="oklch(91% 0.02 260)"/>
          <rect x="8" y="64" width="110" height="14" rx="2" fill="oklch(80% 0.05 260)"/>
          <rect x="8" y="64" width="128" height="14" rx="2" fill="oklch(58% 0.19 25)"/>
          <line x1="112" y1="60" x2="112" y2="82" stroke="oklch(30% 0.02 260)" stroke-width="2.5"/>
          <text x="8" y="96" font-size="9" fill="oklch(55% 0.02 260)" font-family="Inter">满意度</text>
          <rect x="8" y="100" width="144" height="14" rx="2" fill="oklch(91% 0.02 260)"/>
          <rect x="8" y="100" width="80" height="14" rx="2" fill="oklch(80% 0.05 260)"/>
          <rect x="8" y="100" width="60" height="14" rx="2" fill="oklch(58% 0.19 25)"/>
          <line x1="86" y1="96" x2="86" y2="118" stroke="oklch(30% 0.02 260)" stroke-width="2.5"/>
        </svg>`
          },
          {
            id: 'dumbbell',
            name: '哑铃图',
            nameEn: 'Dumbbell Chart',
            use: '前后两个时间点的变化对比',
            tag: '专用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(32,0)">
            <line x1="20" y1="24" x2="90" y2="24" stroke="oklch(82% 0.04 260)" stroke-width="2"/>
            <circle cx="20" cy="24" r="7" fill="oklch(58% 0.18 200)"/>
            <circle cx="90" cy="24" r="7" fill="oklch(58% 0.19 25)"/>
            <line x1="30" y1="48" x2="75" y2="48" stroke="oklch(82% 0.04 260)" stroke-width="2"/>
            <circle cx="30" cy="48" r="7" fill="oklch(58% 0.18 200)"/>
            <circle cx="75" cy="48" r="7" fill="oklch(58% 0.19 25)"/>
            <line x1="10" y1="72" x2="80" y2="72" stroke="oklch(82% 0.04 260)" stroke-width="2"/>
            <circle cx="10" cy="72" r="7" fill="oklch(58% 0.18 200)"/>
            <circle cx="80" cy="72" r="7" fill="oklch(58% 0.19 25)"/>
            <line x1="40" y1="96" x2="100" y2="96" stroke="oklch(82% 0.04 260)" stroke-width="2"/>
            <circle cx="40" cy="96" r="7" fill="oklch(58% 0.18 200)"/>
            <circle cx="100" cy="96" r="7" fill="oklch(58% 0.19 25)"/>
          </g>
          <circle cx="10" cy="8" r="4" fill="oklch(58% 0.18 200)"/>
          <text x="16" y="11" font-size="8" fill="oklch(55% 0.02 260)" font-family="Inter">前</text>
          <circle cx="32" cy="8" r="4" fill="oklch(58% 0.19 25)"/>
          <text x="38" y="11" font-size="8" fill="oklch(55% 0.02 260)" font-family="Inter">后</text>
        </svg>`
          },
          {
            id: 'slope',
            name: '斜率图',
            nameEn: 'Slope Chart',
            use: '两个时间点间的排名/量级变化',
            tag: '专用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="32" y1="108" x2="32" y2="10" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="128" y1="108" x2="128" y2="10" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <text x="28" y="118" font-size="9" fill="oklch(60% 0.02 260)" font-family="Inter" text-anchor="middle">2022</text>
          <text x="132" y="118" font-size="9" fill="oklch(60% 0.02 260)" font-family="Inter" text-anchor="middle">2024</text>
          <line x1="32" y1="78" x2="128" y2="28" stroke="oklch(58% 0.19 25)" stroke-width="2.5"/>
          <circle cx="32" cy="78" r="5" fill="oklch(58% 0.19 25)"/>
          <circle cx="128" cy="28" r="5" fill="oklch(58% 0.19 25)"/>
          <line x1="32" y1="48" x2="128" y2="88" stroke="oklch(58% 0.18 200)" stroke-width="2.5"/>
          <circle cx="32" cy="48" r="5" fill="oklch(58% 0.18 200)"/>
          <circle cx="128" cy="88" r="5" fill="oklch(58% 0.18 200)"/>
          <line x1="32" y1="62" x2="128" y2="52" stroke="oklch(55% 0.16 150)" stroke-width="2.5"/>
          <circle cx="32" cy="62" r="5" fill="oklch(55% 0.16 150)"/>
          <circle cx="128" cy="52" r="5" fill="oklch(55% 0.16 150)"/>
        </svg>`
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Category 02: 趋势 Trend
  // ═══════════════════════════════════════════════════
  {
    id: 'trend',
    name: '趋势',
    nameEn: 'Trend',
    icon: '📈',
    color: 'oklch(58% 0.18 200)',
    purpose: '数据随时间或序列的变化规律。核心问题：如何变化的？上升还是下降？何时拐点？',
    subcategories: [
      {
        id: 'basic-trend',
        name: '基础趋势',
        charts: [
          {
            id: 'line-chart',
            name: '折线图',
            nameEn: 'Line Chart',
            use: '连续时序数据，展示趋势走向',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="82" x2="152" y2="82" stroke="oklch(90% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
          <line x1="12" y1="56" x2="152" y2="56" stroke="oklch(90% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
          <line x1="12" y1="30" x2="152" y2="30" stroke="oklch(90% 0.01 260)" stroke-width="0.8" stroke-dasharray="3,3"/>
          <polyline points="12,88 40,72 68,60 96,42 124,50 152,28"
            fill="none" stroke="oklch(58% 0.18 200)" stroke-width="2.5" stroke-linejoin="round"/>
          <circle cx="12" cy="88" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="40" cy="72" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="68" cy="60" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="96" cy="42" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="124" cy="50" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="152" cy="28" r="3.5" fill="oklch(58% 0.18 200)"/>
        </svg>`
          },
          {
            id: 'area-chart',
            name: '面积图',
            nameEn: 'Area Chart',
            use: '趋势+量级感知，填充传递体量感',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="oklch(58% 0.18 200)" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="oklch(58% 0.18 200)" stop-opacity="0.04"/>
            </linearGradient>
          </defs>
          <path d="M12,108 L12,88 L40,72 L68,60 L96,42 L124,50 L152,28 L152,108 Z"
            fill="url(#areaGrad)"/>
          <polyline points="12,88 40,72 68,60 96,42 124,50 152,28"
            fill="none" stroke="oklch(58% 0.18 200)" stroke-width="2.5" stroke-linejoin="round"/>
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
        </svg>`
          },
          {
            id: 'stacked-area',
            name: '堆叠面积图',
            nameEn: 'Stacked Area',
            use: '多系列趋势叠加，构成+变化双重信息',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,108 L40,108 L68,108 L96,108 L124,108 L152,108 L152,88 L124,85 L96,90 L68,92 L40,95 L12,98 Z"
            fill="oklch(55% 0.16 150 / 0.85)"/>
          <path d="M12,98 L40,95 L68,92 L96,90 L124,85 L152,88 L152,68 L124,62 L96,70 L68,68 L40,72 L12,76 Z"
            fill="oklch(58% 0.18 200 / 0.85)"/>
          <path d="M12,76 L40,72 L68,68 L96,70 L124,62 L152,68 L152,44 L124,40 L96,48 L68,44 L40,50 L12,56 Z"
            fill="oklch(58% 0.19 25 / 0.85)"/>
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
        </svg>`
          },
          {
            id: 'step-chart',
            name: '阶梯图',
            nameEn: 'Step Chart',
            use: '离散状态跳变，如政策/定价调整',
            tag: '专用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <polyline points="12,88 35,88 35,68 58,68 58,50 81,50 81,62 104,62 104,38 127,38 127,58 152,58"
            fill="none" stroke="oklch(58% 0.18 200)" stroke-width="2.5" stroke-linejoin="miter"/>
          <circle cx="12" cy="88" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="35" cy="68" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="58" cy="50" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="81" cy="62" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="104" cy="38" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="127" cy="58" r="3.5" fill="oklch(58% 0.18 200)"/>
          <circle cx="152" cy="58" r="3.5" fill="oklch(58% 0.18 200)"/>
        </svg>`
          },
          {
            id: 'candlestick',
            name: '蜡烛图',
            nameEn: 'Candlestick',
            use: '金融OHLC，开盘/收盘/最高/最低',
            tag: '专用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="24" y1="40" x2="24" y2="75" stroke="oklch(52% 0.18 150)" stroke-width="1.5"/>
          <rect x="18" y="50" width="12" height="18" rx="1" fill="oklch(52% 0.18 150)"/>
          <line x1="48" y1="45" x2="48" y2="82" stroke="oklch(58% 0.19 25)" stroke-width="1.5"/>
          <rect x="42" y="52" width="12" height="22" rx="1" fill="oklch(58% 0.19 25)"/>
          <line x1="72" y1="32" x2="72" y2="70" stroke="oklch(52% 0.18 150)" stroke-width="1.5"/>
          <rect x="66" y="40" width="12" height="20" rx="1" fill="oklch(52% 0.18 150)"/>
          <line x1="96" y1="28" x2="96" y2="62" stroke="oklch(52% 0.18 150)" stroke-width="1.5"/>
          <rect x="90" y="34" width="12" height="18" rx="1" fill="oklch(52% 0.18 150)"/>
          <line x1="120" y1="34" x2="120" y2="78" stroke="oklch(58% 0.19 25)" stroke-width="1.5"/>
          <rect x="114" y="44" width="12" height="26" rx="1" fill="oklch(58% 0.19 25)"/>
          <line x1="144" y1="25" x2="144" y2="60" stroke="oklch(52% 0.18 150)" stroke-width="1.5"/>
          <rect x="138" y="30" width="12" height="20" rx="1" fill="oklch(52% 0.18 150)"/>
        </svg>`
          },
          {
            id: 'gantt-chart',
            name: '甘特图',
            nameEn: 'Gantt Chart',
            use: '项目时间进度规划与任务排期',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="40" y1="108" x2="155" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <rect x="4" y="20" width="32" height="8" rx="2" fill="oklch(88% 0.02 260)"/>
          <rect x="4" y="36" width="32" height="8" rx="2" fill="oklch(88% 0.02 260)"/>
          <rect x="4" y="52" width="32" height="8" rx="2" fill="oklch(88% 0.02 260)"/>
          <rect x="4" y="68" width="32" height="8" rx="2" fill="oklch(88% 0.02 260)"/>
          <rect x="4" y="84" width="32" height="8" rx="2" fill="oklch(88% 0.02 260)"/>
          <rect x="40" y="18" width="55" height="12" rx="3" fill="oklch(58% 0.18 200)"/>
          <rect x="65" y="34" width="68" height="12" rx="3" fill="oklch(58% 0.19 25)"/>
          <rect x="50" y="50" width="42" height="12" rx="3" fill="oklch(55% 0.16 150)"/>
          <rect x="100" y="66" width="50" height="12" rx="3" fill="oklch(56% 0.18 290)"/>
          <rect x="78" y="82" width="65" height="12" rx="3" fill="oklch(58% 0.17 55)"/>
          <line x1="112" y1="12" x2="112" y2="108" stroke="oklch(55% 0.20 240)" stroke-width="1.5" stroke-dasharray="4,3"/>
        </svg>`
          },
          {
            id: 'stream-graph',
            name: '流图',
            nameEn: 'Stream Graph',
            use: '多系列随时间流动，强调波动与体量',
            tag: '视觉型',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="oklch(58% 0.19 25 / 0.9)"/>
              <stop offset="100%" stop-color="oklch(58% 0.19 25 / 0.6)"/>
            </linearGradient>
            <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="oklch(58% 0.18 200 / 0.9)"/>
              <stop offset="100%" stop-color="oklch(58% 0.18 200 / 0.6)"/>
            </linearGradient>
            <linearGradient id="sg3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="oklch(55% 0.16 150 / 0.9)"/>
              <stop offset="100%" stop-color="oklch(55% 0.16 150 / 0.6)"/>
            </linearGradient>
          </defs>
          <path d="M12,44 C52,36 108,28 152,20 C152,42 108,52 52,56 Z"
            fill="url(#sg1)"/>
          <path d="M12,68 C52,58 108,54 152,44 C152,68 108,74 52,78 Z"
            fill="url(#sg2)"/>
          <path d="M12,88 C52,82 108,80 152,72 C152,96 108,98 52,100 Z"
            fill="url(#sg3)"/>
          <line x1="12" y1="110" x2="152" y2="110" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
        </svg>`
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Category 03: 构成 Composition
  // ═══════════════════════════════════════════════════
  {
    id: 'compose',
    name: '构成',
    nameEn: 'Composition',
    icon: '🥧',
    color: 'oklch(55% 0.16 150)',
    purpose: '整体与部分的比例关系。核心问题：占多少比例？哪部分最大？如何累积到总量？',
    subcategories: [
      {
        id: 'basic-composition',
        name: '基础构成',
        charts: [
          {
            id: 'pie-chart',
            name: '饼图',
            nameEn: 'Pie Chart',
            use: '简单占比，分类数 ≤ 5',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,60)">
            <path d="M0,0 L0,-50 A50,50 0 0,1 43.3,25 Z" fill="oklch(58% 0.19 25)"/>
            <path d="M0,0 L43.3,25 A50,50 0 0,1 -12.9,48.3 Z" fill="oklch(72% 0.14 25)"/>
            <path d="M0,0 L-12.9,48.3 A50,50 0 0,1 -47.6,-15.4 Z" fill="oklch(85% 0.08 25)"/>
            <path d="M0,0 L-47.6,-15.4 A50,50 0 0,1 0,-50 Z" fill="oklch(92% 0.04 25)"/>
          </g>
          <rect x="10" y="8" width="8" height="6" fill="oklch(58% 0.19 25)" rx="1"/>
          <text x="22" y="14" font-size="8" fill="oklch(50% 0.02 260)" font-family="Inter">38%</text>
          <rect x="50" y="8" width="8" height="6" fill="oklch(72% 0.14 25)" rx="1"/>
          <text x="62" y="14" font-size="8" fill="oklch(50% 0.02 260)" font-family="Inter">25%</text>
          <rect x="90" y="8" width="8" height="6" fill="oklch(85% 0.08 25)" rx="1"/>
          <text x="102" y="14" font-size="8" fill="oklch(50% 0.02 260)" font-family="Inter">20%</text>
          <rect x="130" y="8" width="8" height="6" fill="oklch(92% 0.04 25)" rx="1"/>
          <text x="142" y="14" font-size="8" fill="oklch(50% 0.02 260)" font-family="Inter">17%</text>
        </svg>`
          },
          {
            id: 'donut-chart',
            name: '环图',
            nameEn: 'Donut Chart',
            use: '占比+中心数值展示，比饼图更优雅',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,60)">
            <path d="M0,0 L0,-50 A50,50 0 0,1 43.3,25 Z" fill="oklch(55% 0.16 150)"/>
            <path d="M0,0 L43.3,25 A50,50 0 0,1 -12.9,48.3 Z" fill="oklch(70% 0.12 150)"/>
            <path d="M0,0 L-12.9,48.3 A50,50 0 0,1 -47.6,-15.4 Z" fill="oklch(82% 0.07 150)"/>
            <path d="M0,0 L-47.6,-15.4 A50,50 0 0,1 0,-50 Z" fill="oklch(90% 0.04 150)"/>
            <circle cx="0" cy="0" r="28" fill="oklch(95% 0.01 260)"/>
            <text x="0" y="4" font-size="11" font-weight="600" font-family="Inter"
              fill="oklch(30% 0.02 260)" text-anchor="middle">38%</text>
          </g>
        </svg>`
          },
          {
            id: 'sunburst',
            name: '旭日图',
            nameEn: 'Sunburst',
            use: '多层级构成，由内向外展开层级',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(80,60)">
            <path d="M0,-50 A50,50 0 0,1 43.3,25 L25.98,15 A30,30 0 0,0 0,-30 Z" fill="oklch(58% 0.19 25)"/>
            <path d="M43.3,25 A50,50 0 0,1 0,50 L0,30 A30,30 0 0,0 25.98,15 Z" fill="oklch(68% 0.15 25)"/>
            <path d="M0,50 A50,50 0 0,1 -43.3,25 L-25.98,15 A30,30 0 0,0 0,30 Z" fill="oklch(55% 0.18 55)"/>
            <path d="M-43.3,25 A50,50 0 0,1 -43.3,-25 L-25.98,-15 A30,30 0 0,0 -25.98,15 Z" fill="oklch(65% 0.14 55)"/>
            <path d="M-43.3,-25 A50,50 0 0,1 0,-50 L0,-30 A30,30 0 0,0 -25.98,-15 Z" fill="oklch(72% 0.11 55)"/>
            <path d="M0,-30 A30,30 0 0,1 25.98,15 L15,8.66 A17,17 0 0,0 0,-17 Z" fill="oklch(55% 0.16 150)"/>
            <path d="M25.98,15 A30,30 0 0,1 -25.98,15 L-15,8.66 A17,17 0 0,0 15,8.66 Z" fill="oklch(65% 0.13 150)"/>
            <path d="M-25.98,15 A30,30 0 0,1 0,-30 L0,-17 A17,17 0 0,0 -15,8.66 Z" fill="oklch(75% 0.10 150)"/>
            <circle cx="0" cy="0" r="14" fill="oklch(95% 0.01 260)"/>
          </g>
        </svg>`
          },
          {
            id: 'treemap',
            name: '矩形树图',
            nameEn: 'Treemap',
            use: '层级面积构成，高效利用空间',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="80" height="70" rx="2" fill="oklch(55% 0.16 150)"/>
          <rect x="88" y="4" width="68" height="42" rx="2" fill="oklch(58% 0.19 25)"/>
          <rect x="88" y="50" width="40" height="24" rx="2" fill="oklch(58% 0.18 200)"/>
          <rect x="132" y="50" width="24" height="24" rx="2" fill="oklch(56% 0.18 290)"/>
          <rect x="4" y="78" width="50" height="38" rx="2" fill="oklch(58% 0.17 55)"/>
          <rect x="58" y="78" width="36" height="38" rx="2" fill="oklch(68% 0.12 55)"/>
          <rect x="98" y="78" width="58" height="38" rx="2" fill="oklch(52% 0.18 175)"/>
          <text x="44" y="42" font-size="9" fill="white" font-family="Inter" text-anchor="middle" font-weight="600">38%</text>
          <text x="122" y="27" font-size="9" fill="white" font-family="Inter" text-anchor="middle" font-weight="600">25%</text>
        </svg>`
          },
          {
            id: 'waterfall',
            name: '瀑布图',
            nameEn: 'Waterfall Chart',
            use: '增减累计，财务分析常用',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="8" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="8" y1="108" x2="8" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <rect x="14" y="58" width="18" height="50" rx="2" fill="oklch(55% 0.20 240)"/>
          <rect x="38" y="44" width="18" height="14" rx="2" fill="oklch(52% 0.18 150)"/>
          <line x1="38" y1="58" x2="56" y2="58" stroke="oklch(80% 0.03 260)" stroke-width="1" stroke-dasharray="3,2"/>
          <rect x="62" y="58" width="18" height="20" rx="2" fill="oklch(58% 0.19 25)"/>
          <line x1="62" y1="78" x2="80" y2="78" stroke="oklch(80% 0.03 260)" stroke-width="1" stroke-dasharray="3,2"/>
          <rect x="86" y="42" width="18" height="36" rx="2" fill="oklch(52% 0.18 150)"/>
          <line x1="86" y1="78" x2="104" y2="78" stroke="oklch(80% 0.03 260)" stroke-width="1" stroke-dasharray="3,2"/>
          <rect x="110" y="42" width="18" height="66" rx="2" fill="oklch(55% 0.20 240)"/>
          <line x1="56" y1="44" x2="62" y2="44" stroke="oklch(80% 0.03 260)" stroke-width="1" stroke-dasharray="3,2"/>
          <line x1="104" y1="42" x2="110" y2="42" stroke="oklch(80% 0.03 260)" stroke-width="1" stroke-dasharray="3,2"/>
        </svg>`
          },
          {
            id: 'stacked-bar',
            name: '堆叠柱状图',
            nameEn: 'Stacked Bar',
            use: '多系列构成对比，总量+分项双重信息',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <rect x="18" y="74" width="20" height="34" rx="0" fill="oklch(90% 0.04 150)"/>
          <rect x="18" y="52" width="20" height="22" rx="0" fill="oklch(68% 0.12 150)"/>
          <rect x="18" y="32" width="20" height="20" rx="0" fill="oklch(55% 0.16 150)"/>
          <rect x="48" y="68" width="20" height="40" rx="0" fill="oklch(90% 0.04 150)"/>
          <rect x="48" y="42" width="20" height="26" rx="0" fill="oklch(68% 0.12 150)"/>
          <rect x="48" y="20" width="20" height="22" rx="0" fill="oklch(55% 0.16 150)"/>
          <rect x="78" y="78" width="20" height="30" rx="0" fill="oklch(90% 0.04 150)"/>
          <rect x="78" y="56" width="20" height="22" rx="0" fill="oklch(68% 0.12 150)"/>
          <rect x="78" y="38" width="20" height="18" rx="0" fill="oklch(55% 0.16 150)"/>
          <rect x="108" y="72" width="20" height="36" rx="0" fill="oklch(90% 0.04 150)"/>
          <rect x="108" y="50" width="20" height="22" rx="0" fill="oklch(68% 0.12 150)"/>
          <rect x="108" y="28" width="20" height="22" rx="0" fill="oklch(55% 0.16 150)"/>
        </svg>`
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Category 04: 分布 Distribution
  // ═══════════════════════════════════════════════════
  {
    id: 'dist',
    name: '分布',
    nameEn: 'Distribution',
    icon: '📉',
    color: 'oklch(56% 0.18 290)',
    purpose: '数据的分散程度与集中趋势。核心问题：数据集中在哪里？异常值在哪？形状是什么？',
    subcategories: [
      {
        id: 'basic-distribution',
        name: '基础分布',
        charts: [
          {
            id: 'histogram',
            name: '直方图',
            nameEn: 'Histogram',
            use: '连续数值的频率分布，查看形状',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="10" y1="108" x2="10" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <rect x="14" y="98" width="18" height="10" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="33" y="84" width="18" height="24" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="52" y="62" width="18" height="46" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="71" y="38" width="18" height="70" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="90" y="52" width="18" height="56" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="109" y="76" width="18" height="32" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <rect x="128" y="96" width="18" height="12" fill="oklch(56% 0.18 290)" rx="1 1 0 0"/>
          <path d="M14,98 C28,98 30,50 80,30 C128,10 140,92 148,96"
            fill="none" stroke="oklch(38% 0.14 290)" stroke-width="2" stroke-dasharray="4,3"/>
        </svg>`
          },
          {
            id: 'box-plot',
            name: '箱线图',
            nameEn: 'Box Plot',
            use: '五数概况+异常值，多组分布对比',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="34" y1="22" x2="34" y2="96" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="22" y1="22" x2="46" y2="22" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="22" y1="96" x2="46" y2="96" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <rect x="16" y="42" width="36" height="36" fill="oklch(56% 0.18 290 / 0.2)" stroke="oklch(56% 0.18 290)" stroke-width="2" rx="1"/>
          <line x1="16" y1="60" x2="52" y2="60" stroke="oklch(38% 0.14 290)" stroke-width="2.5"/>
          <line x1="80" y1="28" x2="80" y2="98" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="68" y1="28" x2="92" y2="28" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="68" y1="98" x2="92" y2="98" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <rect x="62" y="48" width="36" height="32" fill="oklch(56% 0.18 290 / 0.2)" stroke="oklch(56% 0.18 290)" stroke-width="2" rx="1"/>
          <line x1="62" y1="66" x2="98" y2="66" stroke="oklch(38% 0.14 290)" stroke-width="2.5"/>
          <line x1="126" y1="18" x2="126" y2="92" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="114" y1="18" x2="138" y2="18" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="114" y1="92" x2="138" y2="92" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <rect x="108" y="38" width="36" height="40" fill="oklch(56% 0.18 290 / 0.2)" stroke="oklch(56% 0.18 290)" stroke-width="2" rx="1"/>
          <line x1="108" y1="54" x2="144" y2="54" stroke="oklch(38% 0.14 290)" stroke-width="2.5"/>
          <circle cx="34" cy="106" r="3" fill="none" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
        </svg>`
          },
          {
            id: 'violin-plot',
            name: '小提琴图',
            nameEn: 'Violin Plot',
            use: '分布形状+密度，比箱线图信息更丰富',
            tag: '进阶',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M34,10 C46,10 52,35 52,60 C52,85 46,110 34,110 C22,110 16,85 16,60 C16,35 22,10 34,10 Z"
            fill="oklch(56% 0.18 290 / 0.3)" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <line x1="34" y1="35" x2="34" y2="85" stroke="oklch(38% 0.14 290)" stroke-width="1.5"/>
          <rect x="28" y="48" width="12" height="24" fill="oklch(38% 0.14 290 / 0.5)" rx="1"/>
          <line x1="28" y1="60" x2="40" y2="60" stroke="white" stroke-width="2"/>
          <path d="M80,15 C94,15 98,38 98,60 C98,82 94,105 80,105 C66,105 62,82 62,60 C62,38 66,15 80,15 Z"
            fill="oklch(58% 0.18 200 / 0.3)" stroke="oklch(58% 0.18 200)" stroke-width="1.5"/>
          <line x1="80" y1="38" x2="80" y2="82" stroke="oklch(40% 0.14 200)" stroke-width="1.5"/>
          <rect x="74" y="50" width="12" height="20" fill="oklch(40% 0.14 200 / 0.5)" rx="1"/>
          <line x1="74" y1="60" x2="86" y2="60" stroke="white" stroke-width="2"/>
          <path d="M126,20 C134,20 138,42 138,60 C138,78 134,100 126,100 C118,100 114,78 114,60 C114,42 118,20 126,20 Z"
            fill="oklch(55% 0.16 150 / 0.3)" stroke="oklch(55% 0.16 150)" stroke-width="1.5"/>
          <line x1="126" y1="40" x2="126" y2="80" stroke="oklch(38% 0.12 150)" stroke-width="1.5"/>
          <rect x="120" y="52" width="12" height="16" fill="oklch(38% 0.12 150 / 0.5)" rx="1"/>
          <line x1="120" y1="60" x2="132" y2="60" stroke="white" stroke-width="2"/>
        </svg>`
          },
          {
            id: 'scatter-plot',
            name: '散点图',
            nameEn: 'Scatter Plot',
            use: '二维数据点分布，发现相关性',
            tag: '高频',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="16" y1="100" x2="150" y2="24" stroke="oklch(70% 0.08 290)" stroke-width="1.5" stroke-dasharray="5,3" opacity="0.7"/>
          <circle cx="28" cy="88" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="42" cy="82" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="55" cy="74" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="62" cy="68" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="76" cy="72" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="85" cy="56" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="95" cy="48" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="108" cy="44" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="118" cy="38" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="130" cy="34" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="142" cy="28" r="4" fill="oklch(56% 0.18 290 / 0.75)"/>
          <circle cx="50" cy="30" r="4" fill="oklch(58% 0.19 25 / 0.85)"/>
        </svg>`
          },
          {
            id: 'bubble-chart',
            name: '气泡图',
            nameEn: 'Bubble Chart',
            use: '三维数据，第三维用气泡大小编码',
            tag: '常用',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <circle cx="38" cy="82" r="14" fill="oklch(56% 0.18 290 / 0.5)" stroke="oklch(56% 0.18 290)" stroke-width="1.5"/>
          <circle cx="72" cy="62" r="22" fill="oklch(58% 0.19 25 / 0.45)" stroke="oklch(58% 0.19 25)" stroke-width="1.5"/>
          <circle cx="110" cy="44" r="10" fill="oklch(55% 0.16 150 / 0.5)" stroke="oklch(55% 0.16 150)" stroke-width="1.5"/>
          <circle cx="136" cy="70" r="16" fill="oklch(58% 0.18 200 / 0.45)" stroke="oklch(58% 0.18 200)" stroke-width="1.5"/>
          <circle cx="52" cy="36" r="8" fill="oklch(58% 0.17 55 / 0.5)" stroke="oklch(58% 0.17 55)" stroke-width="1.5"/>
        </svg>`
          },
          {
            id: 'beeswarm',
            name: '蜂群图',
            nameEn: 'Beeswarm',
            use: '一维全数据点，不重叠展示密度',
            tag: '进阶',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="80" y1="12" x2="80" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <circle cx="80" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="80" cy="52" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="80" cy="72" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="89" cy="60" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="89" cy="68" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="71" cy="58" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="71" cy="68" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="98" cy="58" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="62" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="98" cy="68" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="62" cy="54" r="4" fill="oklch(56% 0.18 290 / 0.8)"/>
          <circle cx="44" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.6)"/>
          <circle cx="116" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.6)"/>
          <circle cx="30" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.4)"/>
          <circle cx="130" cy="62" r="4" fill="oklch(56% 0.18 290 / 0.4)"/>
          <text x="14" y="116" font-size="8" fill="oklch(60% 0.02 260)" font-family="Inter">低</text>
          <text x="146" y="116" font-size="8" fill="oklch(60% 0.02 260)" font-family="Inter">高</text>
        </svg>`
          },
          {
            id: 'density-plot',
            name: '密度图',
            nameEn: 'KDE Density Plot',
            use: '连续概率密度估计，平滑分布形状',
            tag: '进阶',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="kdeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="oklch(56% 0.18 290)" stop-opacity="0.5"/>
              <stop offset="100%" stop-color="oklch(56% 0.18 290)" stop-opacity="0.05"/>
            </linearGradient>
          </defs>
          <line x1="10" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="10" y1="108" x2="10" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <path d="M10,105 C22,105 28,95 36,80 C44,65 50,38 62,28 C74,18 78,24 82,24 C86,24 90,28 96,40 C102,52 108,78 118,88 C128,98 134,106 152,108 L152,108 L10,108 Z"
            fill="url(#kdeGrad)"/>
          <path d="M10,105 C22,105 28,95 36,80 C44,65 50,38 62,28 C74,18 78,24 82,24 C86,24 90,28 96,40 C102,52 108,78 118,88 C128,98 134,106 152,108"
            fill="none" stroke="oklch(56% 0.18 290)" stroke-width="2.5" stroke-linejoin="round"/>
        </svg>`
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // Category 05: 关系 Relationship
  // ═══════════════════════════════════════════════════
  {
    id: 'relation',
    name: '关系',
    nameEn: 'Relationship',
    icon: '🔗',
    color: 'oklch(55% 0.20 240)',
    purpose: '变量间的关联、相关、依赖关系。核心问题：X变化时Y如何变？变量间有多强的相关？',
    subcategories: [
      {
        id: 'basic-relationship',
        name: '基础关系',
        charts: [
          {
            id: 'scatterplot-matrix',
            name: '散点矩阵',
            nameEn: 'Scatterplot Matrix',
            use: '多变量两两相关性全面探索',
            tag: '分析型',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(8,8)">
            <rect x="0" y="0" width="44" height="34" rx="2" fill="oklch(93% 0.03 240)"/>
            <text x="22" y="20" font-size="9" font-family="Inter" fill="oklch(55% 0.20 240)" text-anchor="middle" font-weight="600">A</text>
            <g><circle cx="70" cy="8" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="62" cy="14" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="76" cy="22" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="68" cy="28" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="48" y="0" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <g><circle cx="118" cy="10" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="112" cy="20" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="126" cy="26" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="120" cy="16" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="96" y="0" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <g><circle cx="22" cy="50" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="30" cy="56" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="14" cy="64" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="36" cy="66" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="0" y="38" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <rect x="48" y="38" width="44" height="34" rx="2" fill="oklch(93% 0.03 240)"/>
            <text x="70" y="58" font-size="9" font-family="Inter" fill="oklch(55% 0.20 240)" text-anchor="middle" font-weight="600">B</text>
            <g><circle cx="118" cy="46" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="108" cy="58" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="126" cy="62" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="112" cy="52" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="96" y="38" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <g><circle cx="18" cy="90" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="28" cy="98" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="36" cy="94" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="10" cy="102" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="0" y="76" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <g><circle cx="66" cy="86" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="78" cy="94" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="60" cy="100" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><circle cx="72" cy="106" r="2.5" fill="oklch(55% 0.20 240 / 0.6)"/><rect x="48" y="76" width="44" height="34" rx="2" fill="none" stroke="oklch(88% 0.03 260)" stroke-width="1"/></g>
            <rect x="96" y="76" width="44" height="34" rx="2" fill="oklch(93% 0.03 240)"/>
            <text x="118" y="96" font-size="9" font-family="Inter" fill="oklch(55% 0.20 240)" text-anchor="middle" font-weight="600">C</text>
          </g>
        </svg>`
          },
          {
            id: 'correlation-matrix',
            name: '相关矩阵',
            nameEn: 'Correlation Matrix',
            use: '变量间相关系数热力图，颜色编码强弱',
            tag: '分析型',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(20,10)">
            <rect x="0" y="0" width="22" height="22" rx="1" fill="oklch(52% 0.20 240)"/>
            <rect x="24" y="0" width="22" height="22" rx="1" fill="oklch(72% 0.12 240)"/>
            <rect x="48" y="0" width="22" height="22" rx="1" fill="oklch(88% 0.04 240)"/>
            <rect x="72" y="0" width="22" height="22" rx="1" fill="oklch(68% 0.12 25)"/>
            <rect x="96" y="0" width="22" height="22" rx="1" fill="oklch(58% 0.18 25)"/>
            <rect x="0" y="24" width="22" height="22" rx="1" fill="oklch(72% 0.12 240)"/>
            <rect x="24" y="24" width="22" height="22" rx="1" fill="oklch(52% 0.20 240)"/>
            <rect x="48" y="24" width="22" height="22" rx="1" fill="oklch(80% 0.07 240)"/>
            <rect x="72" y="24" width="22" height="22" rx="1" fill="oklch(88% 0.04 260)"/>
            <rect x="96" y="24" width="22" height="22" rx="1" fill="oklch(72% 0.12 25)"/>
            <rect x="0" y="48" width="22" height="22" rx="1" fill="oklch(88% 0.04 240)"/>
            <rect x="24" y="48" width="22" height="22" rx="1" fill="oklch(80% 0.07 240)"/>
            <rect x="48" y="48" width="22" height="22" rx="1" fill="oklch(52% 0.20 240)"/>
            <rect x="72" y="48" width="22" height="22" rx="1" fill="oklch(78% 0.09 240)"/>
            <rect x="96" y="48" width="22" height="22" rx="1" fill="oklch(92% 0.03 260)"/>
            <rect x="0" y="72" width="22" height="22" rx="1" fill="oklch(68% 0.12 25)"/>
            <rect x="24" y="72" width="22" height="22" rx="1" fill="oklch(88% 0.04 260)"/>
            <rect x="48" y="72" width="22" height="22" rx="1" fill="oklch(78% 0.09 240)"/>
            <rect x="72" y="72" width="22" height="22" rx="1" fill="oklch(52% 0.20 240)"/>
            <rect x="96" y="72" width="22" height="22" rx="1" fill="oklch(65% 0.15 240)"/>
          </g>
        </svg>`
          },
          {
            id: 'parallel-coordinates',
            name: '平行坐标图',
            nameEn: 'Parallel Coordinates',
            use: '高维数据多变量关系，发现聚类模式',
            tag: '分析型',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="20" y1="14" x2="20" y2="106" stroke="oklch(70% 0.03 260)" stroke-width="2"/>
          <line x1="56" y1="14" x2="56" y2="106" stroke="oklch(70% 0.03 260)" stroke-width="2"/>
          <line x1="92" y1="14" x2="92" y2="106" stroke="oklch(70% 0.03 260)" stroke-width="2"/>
          <line x1="128" y1="14" x2="128" y2="106" stroke="oklch(70% 0.03 260)" stroke-width="2"/>
          <polyline points="20,30 56,50 92,38 128,28" fill="none" stroke="oklch(58% 0.19 25 / 0.8)" stroke-width="2"/>
          <polyline points="20,55 56,35 92,70 128,55" fill="none" stroke="oklch(58% 0.18 200 / 0.8)" stroke-width="2"/>
          <polyline points="20,80 56,72 92,52 128,82" fill="none" stroke="oklch(55% 0.16 150 / 0.8)" stroke-width="2"/>
          <polyline points="20,68 56,88 92,80 128,42" fill="none" stroke="oklch(56% 0.18 290 / 0.6)" stroke-width="2"/>
          <text x="20" y="112" font-size="8" fill="oklch(60% 0.02 260)" text-anchor="middle" font-family="Inter">A</text>
          <text x="56" y="112" font-size="8" fill="oklch(60% 0.02 260)" text-anchor="middle" font-family="Inter">B</text>
          <text x="92" y="112" font-size="8" fill="oklch(60% 0.02 260)" text-anchor="middle" font-family="Inter">C</text>
          <text x="128" y="112" font-size="8" fill="oklch(60% 0.02 260)" text-anchor="middle" font-family="Inter">D</text>
        </svg>`
          },
          {
            id: 'connected-scatter',
            name: '连接散点图',
            nameEn: 'Connected Scatter',
            use: '时序路径追踪，两变量随时间演变',
            tag: '进阶',
            svgCode: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="108" x2="152" y2="108" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <line x1="12" y1="108" x2="12" y2="16" stroke="oklch(78% 0.02 260)" stroke-width="1.5"/>
          <path d="M30,90 C45,80 55,55 70,46 C85,37 95,50 110,38 C120,30 130,42 145,28"
            fill="none" stroke="oklch(55% 0.20 240)" stroke-width="2" marker-mid="url(#arrow)"/>
          <circle cx="30" cy="90" r="5" fill="oklch(55% 0.20 240)"/>
          <circle cx="70" cy="46" r="5" fill="oklch(55% 0.20 240)"/>
          <circle cx="110" cy="38" r="5" fill="oklch(55% 0.20 240)"/>
          <circle cx="145" cy="28" r="5" fill="oklch(58% 0.19 25)"/>
          <text x="30" y="104" font-size="7" fill="oklch(55% 0.02 260)" text-anchor="middle" font-family="Inter">'20</text>
          <text x="70" y="60" font-size="7" fill="oklch(55% 0.02 260)" text-anchor="middle" font-family="Inter">'21</text>
          <text x="110" y="52" font-size="7" fill="oklch(55% 0.02 260)" text-anchor="middle" font-family="Inter">'22</text>
          <text x="145" y="42" font-size="7" fill="oklch(55% 0.02 260)" text-anchor="middle" font-family="Inter">'23</text>
        </svg>`
          }
        ]
      }
    ]
  }
]
