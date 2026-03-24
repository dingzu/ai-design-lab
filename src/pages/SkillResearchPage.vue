<template>
  <main class="page">
    <div class="wrap">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <RouterLink to="/" class="text-3">首页</RouterLink>
        <span class="text-3"> / </span>
        <RouterLink to="/skill" class="text-3">SKILL 开发</RouterLink>
        <span class="text-3"> / </span>
        <span class="text-2">Skill 评测分析</span>
      </div>

      <!-- Header -->
      <header class="page-hero">
        <span class="tag tag-purple" style="margin-bottom:16px;display:inline-flex">🔬 第一批研究</span>
        <h1>Skill 评测<br/>分析报告</h1>
        <p class="text-2" style="font-size:16px;max-width:600px;line-height:1.7;margin-top:16px">
          研究顶级 Design Skill 的真实实现与设计哲学，按设计子类归整，提炼团队可复用的最佳实践。
        </p>
      </header>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-num">5</div>
          <div class="stat-label text-3">本批研究的 Skill</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">4</div>
          <div class="stat-label text-3">设计子类</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num text-green">进行中</div>
          <div class="stat-label text-3">研究状态</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num text-purple">第 1 批</div>
          <div class="stat-label text-3">研究批次</div>
        </div>
      </div>

      <!-- Research source -->
      <div class="source-banner">
        <div class="source-left">
          <span class="source-icon">📌</span>
          <div>
            <div class="source-title">参考来源</div>
            <div class="source-desc text-3">小红书文章：顶级 Design Skills — Anthropic Frontend、UI/UX Pro Max 等公开 Skill 的实测对比</div>
          </div>
        </div>
        <a
          href="https://git.corp.kuaishou.com/design/designskill/-/blob/master/research/best-practices.md"
          target="_blank"
          rel="noopener"
          class="source-link"
        >查看最佳实践文档 →</a>
      </div>

      <div class="section-divider"></div>

      <!-- How we research -->
      <section class="content-section">
        <h2 class="section-title">研究方法</h2>
        <div class="method-grid">
          <div class="method-step">
            <div class="ms-num text-purple">01</div>
            <div class="ms-name">来源定位</div>
            <div class="ms-desc text-3">找到参考文章提及的 Skill，定位原始仓库和 SKILL.md 文件</div>
          </div>
          <div class="method-step">
            <div class="ms-num text-purple">02</div>
            <div class="ms-name">实现分析</div>
            <div class="ms-desc text-3">逐条研究 Skill 的定位、触发时机、核心步骤、交付标准</div>
          </div>
          <div class="method-step">
            <div class="ms-num text-purple">03</div>
            <div class="ms-name">输出报告</div>
            <div class="ms-desc text-3">输出结构化分析报告：来源 + 核心洞察 + 可借鉴点</div>
          </div>
          <div class="method-step">
            <div class="ms-num text-purple">04</div>
            <div class="ms-name">更新最佳实践</div>
            <div class="ms-desc text-3">每次分析完成后更新 best-practices.md，保持持续进化</div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- Category tabs -->
      <section class="content-section">
        <div class="cat-header">
          <h2 class="section-title" style="margin-bottom:0">按设计子类分类</h2>
          <div class="cat-tabs">
            <button
              v-for="cat in categories"
              :key="cat.id"
              class="cat-tab"
              :class="{ active: activeCategory === cat.id }"
              @click="activeCategory = cat.id"
            >{{ cat.label }}</button>
          </div>
        </div>

        <!-- Skill cards -->
        <div class="skill-list">
          <div
            v-for="skill in filteredSkills"
            :key="skill.id"
            class="skill-card"
            :class="{ 'skill-done': skill.status === 'done' }"
          >
            <div class="sk-header">
              <div class="sk-left">
                <span class="sk-icon">{{ skill.icon }}</span>
                <div>
                  <div class="sk-name">{{ skill.name }}</div>
                  <div class="sk-en text-3">{{ skill.en }}</div>
                </div>
              </div>
              <div class="sk-right">
                <span class="tag" :class="catTagClass(skill.category)">{{ catLabel(skill.category) }}</span>
                <span class="tag" :class="statusTagClass(skill.status)">{{ statusLabel(skill.status) }}</span>
              </div>
            </div>

            <div class="sk-desc text-2">{{ skill.desc }}</div>

            <!-- Source -->
            <div class="sk-source">
              <span class="sk-source-label text-3">来源</span>
              <span class="sk-source-val">{{ skill.source }}</span>
            </div>

            <!-- Analysis (if done) -->
            <template v-if="skill.status === 'done' || skill.status === 'reviewing'">
              <div class="sk-divider"></div>
              <div class="sk-analysis">
                <div class="sk-analysis-title">分析摘要</div>
                <div class="sk-insights">
                  <div
                    v-for="(insight, i) in skill.insights"
                    :key="i"
                    class="sk-insight"
                  >
                    <span class="insight-dot" :style="{ background: insightColor(insight.type) }"></span>
                    <div>
                      <span class="insight-type" :style="{ color: insightColor(insight.type) }">{{ insight.type }}</span>
                      <span class="insight-text text-2">{{ insight.text }}</span>
                    </div>
                  </div>
                </div>
                <div v-if="skill.takeaway" class="sk-takeaway">
                  <span class="takeaway-icon">💡</span>
                  <span class="takeaway-text">{{ skill.takeaway }}</span>
                </div>
              </div>
            </template>

            <!-- Pending -->
            <template v-else>
              <div class="sk-pending">
                <span class="text-3">待研究 · 有线索欢迎贡献 →</span>
              </div>
            </template>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- Best practices summary -->
      <section class="content-section">
        <h2 class="section-title">当前最佳实践摘要</h2>
        <div class="bp-grid">
          <div class="bp-card" v-for="bp in bestPractices" :key="bp.title">
            <div class="bp-icon">{{ bp.icon }}</div>
            <div class="bp-title">{{ bp.title }}</div>
            <div class="bp-desc text-3">{{ bp.desc }}</div>
          </div>
        </div>
        <p class="bp-note text-3">
          📁 完整文档维护在
          <a href="https://git.corp.kuaishou.com/design/designskill/-/blob/master/research/best-practices.md" target="_blank" rel="noopener" class="text-purple">designskill 仓库 / research / best-practices.md</a>
          · 每批研究后更新
        </p>
      </section>

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: '全部' },
  { id: 'visual', label: '视觉界面' },
  { id: 'ux', label: 'UX 体验' },
  { id: 'content', label: '内容输出' },
  { id: 'system', label: '设计系统' },
]

const skills = [
  {
    id: 1,
    name: 'frontend-design',
    en: 'Frontend Design Skill',
    icon: '🎨',
    category: 'visual',
    status: 'done',
    source: 'Anthropic Claude / CodeFlicker 公开 Skill 库',
    desc: '生成具有高设计质量的生产级前端界面。覆盖网页组件、落地页、Dashboard、React/Vue 组件等场景，强调「避免 AI 审美通病」。',
    insights: [
      { type: '核心理念', text: '提交前先确定明确的美学方向（极简/极繁/复古未来/暗黑等），拒绝模糊意图' },
      { type: '差异点', text: '明确禁止 Inter、Arial、System Font 等通用字体，要求使用有辨识度的字体组合' },
      { type: '执行要求', text: '在写代码之前，必须回答：这个界面的「不可遗忘点」是什么？' },
      { type: '可借鉴', text: '设计问卷前置（Purpose / Tone / Constraints / Differentiation）的结构化思考流程' },
    ],
    takeaway: '每个 Skill 需要有明确的「反例禁止清单」，告诉 AI 不要做什么，比告诉它要做什么更有效',
  },
  {
    id: 2,
    name: 'ui-ux-pro-max',
    en: 'UI/UX Pro Max Skill',
    icon: '🧠',
    category: 'visual',
    status: 'done',
    source: 'Anthropic Claude / CodeFlicker 公开 Skill 库',
    desc: '综合 UI/UX 设计智能体，集成 50+ 风格、97 种配色方案、57 种字体搭配、99 条 UX 规范，支持 9 种技术栈。',
    insights: [
      { type: '核心理念', text: '「Database + Priority」设计：把规范按优先级分 Critical / High / Medium / Low，AI 先保证高优先级' },
      { type: '结构设计', text: '用表格+分类组织海量规范，每条规范有唯一 slug（如 color-contrast），方便 AI 精准引用' },
      { type: '差异点', text: '支持 shadcn/ui MCP 实时查询组件，将 Skill 与工具生态打通' },
      { type: '可借鉴', text: '「规范 + 优先级 + 速查表」三层结构，团队设计规范 Skill 可直接沿用此模式' },
    ],
    takeaway: '大型知识型 Skill 的关键在于组织结构，不是堆积内容，而是让 AI 能快速定位最相关的规则',
  },
  {
    id: 3,
    name: 'canvas-design',
    en: 'Canvas Design / Poster Skill',
    icon: '🖼️',
    category: 'content',
    status: 'done',
    source: 'Anthropic Claude / CodeFlicker 公开 Skill 库',
    desc: '生成 PNG/PDF 海报和静态视觉作品，核心是两步法：先生成「设计哲学宣言」，再用哲学指导视觉表达。',
    insights: [
      { type: '核心理念', text: '「哲学先行」：先命名一个艺术运动（如 Brutalist Joy），写其宣言，再用该宣言驱动视觉创作' },
      { type: '结构设计', text: '两步分离：Step 1 生成 .md 哲学文件，Step 2 基于哲学生成 .png/.pdf，防止 AI 跳过思考直接出图' },
      { type: '差异点', text: '明确要求「重复强调工匠精神」—— 在 Skill 中多次提醒 AI 要表现出「顶尖设计师的水准」' },
      { type: '可借鉴', text: '两步 Prompt 结构：第一步定义约束与风格，第二步在约束内自由表达，比直接给需求质量高很多' },
    ],
    takeaway: '创意类 Skill 可以引入「哲学/宣言」层作为创意锚点，避免 AI 输出趋于平均值',
  },
  {
    id: 4,
    name: 'web-design-guidelines',
    en: 'Web Design Guidelines Review',
    icon: '✅',
    category: 'ux',
    status: 'done',
    source: 'Vercel Labs / CodeFlicker 公开 Skill 库',
    desc: '对 UI 代码进行 Web Interface Guidelines 合规检查，动态拉取最新规范，输出 file:line 格式问题报告。',
    insights: [
      { type: '核心理念', text: '「规范外部化」：Skill 不内嵌规范，而是每次从远端 URL 实时拉取最新 Guidelines' },
      { type: '结构设计', text: '极简 Skill（仅 40 行），把复杂规范托管到外部，保持 Skill 本身轻量且永远是最新版' },
      { type: '差异点', text: '输出格式标准化为 file:line —— 让 AI 的检查结果可以直接被工具链消费' },
      { type: '可借鉴', text: '审查类 Skill 可以「规范外置 + 动态拉取」，避免 Skill 版本与规范版本脱节' },
    ],
    takeaway: '「规范外置」是一个非常值得推广的模式，尤其是对于频繁更新的标准类内容',
  },
  {
    id: 5,
    name: 'ux-journey-map',
    en: 'UX Journey Map Skill',
    icon: '🗺️',
    category: 'ux',
    status: 'reviewing',
    source: 'R&D Design Team / 内部 Skill',
    desc: '自动生成用户体验地图，支持 URL 自动检测模式，输出包含情感曲线、触点分析、多角色流程的可视化 HTML 地图。',
    insights: [
      { type: '核心理念', text: '「双模式入口」：URL 检测模式（智能推断数据）和手动填写模式，降低使用门槛' },
      { type: '差异点', text: 'AI 推断内容用 ✦ 虚线视觉区分，用户可以清晰识别哪些是推断、哪些是实测数据' },
      { type: '可借鉴', text: '「AI 推断内容标注」的诚信设计，后续研究类 Skill 可沿用此模式' },
    ],
    takeaway: '正在评审，分析报告将于近期更新到 best-practices.md',
  },
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return skills
  return skills.filter(s => s.category === activeCategory.value)
})

const catLabel = (cat) => {
  const map = { visual: '视觉界面', ux: 'UX 体验', content: '内容输出', system: '设计系统' }
  return map[cat] || cat
}

const catTagClass = (cat) => {
  const map = { visual: 'tag-blue', ux: 'tag-green', content: 'tag-orange', system: 'tag-gray' }
  return `tag ${map[cat] || 'tag-gray'}`
}

const statusLabel = (status) => {
  const map = { done: '✓ 已分析', reviewing: '⏳ 评审中', pending: '待研究' }
  return map[status] || status
}

const statusTagClass = (status) => {
  const map = { done: 'tag-green', reviewing: 'tag-purple', pending: 'tag-gray' }
  return `tag ${map[status] || 'tag-gray'}`
}

const insightColor = (type) => {
  const map = {
    '核心理念': '#7c3aed',
    '差异点': '#2563eb',
    '结构设计': '#059669',
    '执行要求': '#ea580c',
    '可借鉴': '#0891b2',
  }
  return map[type] || '#94a3b8'
}

const bestPractices = [
  {
    icon: '🚫',
    title: '反例禁止清单',
    desc: '明确列出「不要做什么」，比「要做什么」对 AI 约束更有效，尤其是视觉 Skill',
  },
  {
    icon: '📊',
    title: '规范优先级分层',
    desc: '大型知识 Skill 必须有 Critical / High / Medium 优先级，AI 先满足高优先级',
  },
  {
    icon: '🌐',
    title: '规范外置动态拉取',
    desc: '频繁更新的规范内容建议外部托管，Skill 通过 URL 拉取，保持同步',
  },
  {
    icon: '🎭',
    title: '哲学先行两步法',
    desc: '创意类 Skill：先用 Step 1 建立美学意图/约束，再用 Step 2 在边界内自由创作',
  },
  {
    icon: '🏷️',
    title: 'AI 推断内容标注',
    desc: '分析或推断得出的内容要与真实数据视觉区分，保持透明诚信',
  },
  {
    icon: '📐',
    title: '交付格式标准化',
    desc: '审查类 Skill 输出要面向工具链（file:line 格式），而非只面向人类阅读',
  },
]
</script>

<style scoped>
.page {
  padding-top: calc(var(--nav-h) + 40px);
  padding-bottom: 80px;
}

.breadcrumb {
  font-size: 13px;
  margin-bottom: 32px;
  display: flex;
  gap: 4px;
  align-items: center;
}
.breadcrumb a:hover { color: var(--text); }

.page-hero {
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

/* Stats bar */
.stats-bar {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 20px 24px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.stat-item { display: flex; flex-direction: column; gap: 3px; }
.stat-num { font-size: 18px; font-weight: 700; }
.stat-label { font-size: 12px; font-family: var(--font-mono); }
.stat-divider { width: 1px; height: 32px; background: var(--border); }

/* Source banner */
.source-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 20px;
  background: var(--purple-bg);
  border: 1px solid var(--purple-border);
  border-radius: var(--radius-md);
  margin-bottom: 48px;
  flex-wrap: wrap;
}
.source-left { display: flex; align-items: flex-start; gap: 10px; }
.source-icon { font-size: 16px; flex-shrink: 0; padding-top: 2px; }
.source-title { font-size: 13px; font-weight: 600; margin-bottom: 2px; color: var(--purple); }
.source-desc { font-size: 12px; line-height: 1.5; }
.source-link {
  font-size: 12px;
  font-weight: 600;
  color: var(--purple);
  white-space: nowrap;
  transition: opacity 150ms;
}
.source-link:hover { opacity: 0.7; }

.section-divider { height: 1px; background: var(--border); margin: 48px 0; }
.section-title { font-size: 18px; font-weight: 700; margin-bottom: 20px; }

/* Method grid */
.method-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.method-step {
  padding: 16px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.ms-num { font-family: var(--font-mono); font-size: 12px; font-weight: 700; margin-bottom: 6px; }
.ms-name { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
.ms-desc { font-size: 12px; line-height: 1.55; }

/* Category tabs */
.cat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}
.cat-tabs {
  display: flex;
  gap: 4px;
}
.cat-tab {
  font-size: 13px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--bg-card);
  color: var(--text-2);
  cursor: pointer;
  transition: all 150ms;
}
.cat-tab:hover { border-color: var(--border-2); color: var(--text); }
.cat-tab.active {
  background: var(--text);
  color: white;
  border-color: var(--text);
}

/* Skill list */
.skill-list { display: flex; flex-direction: column; gap: 14px; }

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}
.skill-done { border-color: var(--border); }

.sk-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.sk-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.sk-icon { font-size: 20px; flex-shrink: 0; padding-top: 2px; }
.sk-name { font-size: 15px; font-weight: 700; font-family: var(--font-mono); }
.sk-en { font-size: 12px; margin-top: 2px; }
.sk-right { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }

.sk-desc {
  font-size: 14px;
  line-height: 1.65;
  margin-bottom: 12px;
}

.sk-source {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  padding: 6px 10px;
  background: var(--bg-subtle);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}
.sk-source-label { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; }
.sk-source-val { font-weight: 500; }

.sk-divider { height: 1px; background: var(--border); margin: 16px 0; }

.sk-analysis {}
.sk-analysis-title {
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-3);
  margin-bottom: 12px;
}
.sk-insights { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; }
.sk-insight { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; }
.insight-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
.insight-type { font-weight: 700; margin-right: 6px; font-size: 12px; }
.insight-text { line-height: 1.55; }

.sk-takeaway {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 10px 14px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: var(--radius-md);
  font-size: 13px;
}
.takeaway-icon { flex-shrink: 0; }
.takeaway-text { line-height: 1.55; font-weight: 500; }

.sk-pending {
  padding: 10px 0 0;
  font-size: 13px;
}

/* Best practices */
.bp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 20px;
}
.bp-card {
  padding: 16px 18px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.bp-icon { font-size: 18px; margin-bottom: 8px; }
.bp-title { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
.bp-desc { font-size: 13px; line-height: 1.55; }

.bp-note {
  font-size: 13px;
  line-height: 1.6;
}
.bp-note a { text-decoration: underline; text-underline-offset: 2px; }
.bp-note a:hover { opacity: 0.8; }

@media (max-width: 768px) {
  .method-grid { grid-template-columns: 1fr 1fr; }
  .bp-grid { grid-template-columns: 1fr 1fr; }
  .stats-bar { gap: 16px; }
  .stat-divider { display: none; }
}
@media (max-width: 480px) {
  .method-grid { grid-template-columns: 1fr; }
  .bp-grid { grid-template-columns: 1fr; }
}
</style>
