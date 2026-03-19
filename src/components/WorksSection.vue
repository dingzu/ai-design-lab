<template>
  <section id="works" class="works">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">TEAM WORKS</span>
        <h2 class="section-title">用 AI 做出来的<span class="gradient-text">作品</span></h2>
        <p class="section-desc">不是概念，是真实落地的产品与设计</p>
      </div>

      <div class="works-grid">
        <div
          class="work-card"
          v-for="(work, i) in works"
          :key="i"
          :class="work.featured ? 'featured' : ''"
        >
          <div class="work-cover" :style="{ background: work.gradient }">
            <div class="work-cover-inner">
              <span class="work-emoji">{{ work.emoji }}</span>
              <div class="cover-decoration"></div>
            </div>
            <span class="work-type-badge">{{ work.type }}</span>
          </div>
          <div class="work-body">
            <div class="work-meta">
              <span class="work-team">{{ work.team }}</span>
              <span class="work-dot">·</span>
              <span class="work-time">{{ work.time }}</span>
            </div>
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-desc">{{ work.desc }}</p>
            <div class="work-ai-stack">
              <span class="ai-label">AI 用了</span>
              <span class="ai-tool" v-for="tool in work.aiTools" :key="tool">{{ tool }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Contribution CTA -->
      <div class="contribute-banner">
        <div class="contribute-left">
          <h4>你也有 AI 辅助的作品？</h4>
          <p>把你的案例提交给我们，一起展示 AI 时代设计师的真实生产力</p>
        </div>
        <a href="mailto:hello@ai-design-lab.com" class="contribute-btn">
          提交作品
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const works = [
  {
    emoji: '🏠',
    type: 'Product Design',
    team: '小红书设计团队',
    time: '2024 Q3',
    title: '租房决策助手 · AI 界面重设计',
    desc: '用 Midjourney 探索 30+ 种视觉风格，Figma AI 完成响应式布局，整体设计周期从 3 周压缩至 4 天。',
    aiTools: ['Midjourney', 'Figma AI', 'v0.dev'],
    gradient: 'linear-gradient(135deg, #f59e0b22, #ef444422)',
    featured: true,
  },
  {
    emoji: '📊',
    type: 'Data Visualization',
    team: '独立设计师 @Yihan',
    time: '2024 Q4',
    title: 'AI 行业数据看板',
    desc: '从数据清洗到图表设计，全程 AI 辅助。用 Claude 生成数据洞察文案，用 Cursor 直接出可交互图表代码。',
    aiTools: ['Claude', 'Cursor', 'Recharts'],
    gradient: 'linear-gradient(135deg, #4f46e522, #06b6d422)',
    featured: false,
  },
  {
    emoji: '🎬',
    type: 'Motion Design',
    team: '字节设计中心',
    time: '2025 Q1',
    title: '产品发布会主视觉动效',
    desc: '3 分钟的发布会开场动画，AI 生成素材 + 人工精调节奏。Runway 生成 80% 的画面，后期合成减少 60% 时间。',
    aiTools: ['Runway', 'Midjourney', 'After Effects'],
    gradient: 'linear-gradient(135deg, #7c3aed22, #e11d6322)',
    featured: false,
  },
  {
    emoji: '🛒',
    type: 'E-commerce Design',
    team: '淘宝内容设计组',
    time: '2025 Q1',
    title: '双十一主会场视觉方案',
    desc: '500+ 张 Banner 通过 ComfyUI 工作流批量生成，设计师只需把控整体风格和质量。效率提升超过 10 倍。',
    aiTools: ['ComfyUI', 'Stable Diffusion', 'Batch Gen'],
    gradient: 'linear-gradient(135deg, #f59e0b22, #4f46e522)',
    featured: false,
  },
  {
    emoji: '📱',
    type: 'App Design',
    team: '独立创业团队',
    time: '2025 Q2',
    title: '冥想 App · 从 0 到上线',
    desc: '2 人团队，1 个月内完成从品牌定义、UI 设计到前端开发的全流程。设计转代码用 v0，品牌视觉用 Midjourney。',
    aiTools: ['v0.dev', 'Midjourney', 'Figma'],
    gradient: 'linear-gradient(135deg, #05966922, #06b6d422)',
    featured: false,
  },
  {
    emoji: '🏢',
    type: 'Brand Design',
    team: '设计顾问 @Lex',
    time: '2025 Q2',
    title: 'SaaS 品牌视觉系统',
    desc: '从竞品调研到品牌手册，AI 加速了每个环节。用 Claude 辅助品牌策略，用 Midjourney 探索视觉语言，交付时间减半。',
    aiTools: ['Claude', 'Midjourney', 'Adobe'],
    gradient: 'linear-gradient(135deg, #1a1a2e22, #4f46e522)',
    featured: false,
  },
]
</script>

<style scoped>
.works {
  padding: var(--space-5xl) 0;
  background: var(--bg-primary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-indigo);
  margin-bottom: var(--space-lg);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: var(--radius-sm);
}

.section-title {
  font-size: var(--text-4xl);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: var(--space-md);
}

.section-desc {
  font-size: var(--text-lg);
  color: var(--text-secondary);
}

/* Grid */
.works-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.work-card.featured {
  grid-column: span 1;
}

.work-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(26, 26, 46, 0.06);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.work-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-xl);
  border-color: transparent;
}

/* Cover */
.work-cover {
  position: relative;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.work-cover-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.work-emoji {
  font-size: 56px;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.1));
  transition: transform var(--duration-normal) var(--ease-spring);
}

.work-card:hover .work-emoji {
  transform: scale(1.15) translateY(-4px);
}

.cover-decoration {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  right: -20px;
  bottom: -20px;
}

.work-type-badge {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 3px 10px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
}

/* Body */
.work-body {
  padding: var(--space-xl);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.work-meta {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-sm);
}

.work-team {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--accent-indigo);
}

.work-dot {
  color: var(--text-muted);
  font-size: var(--text-xs);
}

.work-time {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
}

.work-title {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
  line-height: 1.4;
}

.work-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
  flex-grow: 1;
}

/* AI Stack */
.work-ai-stack {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-xs);
  padding-top: var(--space-md);
  border-top: 1px solid rgba(26, 26, 46, 0.06);
}

.ai-label {
  font-size: var(--text-xs);
  color: var(--text-muted);
  font-weight: 500;
  margin-right: var(--space-xs);
}

.ai-tool {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  background: rgba(79, 70, 229, 0.06);
  color: var(--accent-indigo);
  border-radius: var(--radius-full);
  border: 1px solid rgba(79, 70, 229, 0.1);
}

/* Contribute banner */
.contribute-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2xl) var(--space-3xl);
  background: var(--bg-secondary);
  border-radius: var(--radius-xl);
  border: 1px solid rgba(26, 26, 46, 0.06);
}

.contribute-left h4 {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-xs);
}

.contribute-left p {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.contribute-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-2xl);
  background: var(--text-primary);
  color: var(--bg-primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--text-sm);
  white-space: nowrap;
  transition: all var(--duration-normal) var(--ease-out);
  flex-shrink: 0;
}

.contribute-btn:hover {
  transform: translateX(3px);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 1024px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: 1fr;
  }
  .contribute-banner {
    flex-direction: column;
    gap: var(--space-xl);
    text-align: center;
    padding: var(--space-xl);
  }
}
</style>
