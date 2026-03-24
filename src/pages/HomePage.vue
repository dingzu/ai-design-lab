<template>
  <main class="home">
    <div class="wrap">

      <!-- Hero -->
      <header class="hero">
        <p class="hero-eyebrow">v1.0 · 2025–2026</p>
        <h1 class="hero-title">R&amp;D design 的<br/>工作全景</h1>
        <p class="hero-desc">研发设计团队两条核心工作线——设计 Skill 体系建设，与 AI 驱动的界面生成能力探索</p>
      </header>

      <!-- Overview cards -->
      <div class="overview-grid">
        <div class="overview-card" style="border-top: 3px solid var(--green)">
          <div class="ov-icon">⚡</div>
          <div class="ov-label text-3">SKILL 开发</div>
          <div class="ov-stat text-green">进行中</div>
          <div class="ov-desc text-2">设计技能的结构化沉淀与复用体系</div>
        </div>
        <div class="overview-card" style="border-top: 3px solid var(--blue)">
          <div class="ov-icon">🧩</div>
          <div class="ov-label text-3">GenUI</div>
          <div class="ov-stat text-blue">探索中</div>
          <div class="ov-desc text-2">AI 驱动的界面生成实践</div>
        </div>
        <div class="overview-card" style="border-top: 3px solid var(--purple)">
          <div class="ov-icon">🗓️</div>
          <div class="ov-label text-3">周期</div>
          <div class="ov-stat text-purple">2025—2026</div>
          <div class="ov-desc text-2">持续建设与迭代</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Module 1 -->
      <section class="module-section">
        <div class="module-header">
          <span class="tag tag-green">01 · SKILL 开发</span>
          <h2 class="module-title">设计 Skill 开发体系</h2>
          <p class="module-intro text-2">将团队最佳实践封装为结构化 Skill，驱动 AI 助手完成专业级设计任务，实现从经验到产能的系统性转化。</p>
        </div>

        <div class="feature-grid">
          <div class="card feature-card">
            <div class="fc-icon">🧠</div>
            <div class="fc-title">知识结构化</div>
            <div class="fc-desc text-2">将设计师的隐性经验显式化为可复用的 Skill 模块</div>
          </div>
          <div class="card feature-card">
            <div class="fc-icon">⚡</div>
            <div class="fc-title">AI 能力注入</div>
            <div class="fc-desc text-2">让 AI 具备专业设计判断力，而非只是文字生成器</div>
          </div>
          <div class="card feature-card">
            <div class="fc-icon">🔄</div>
            <div class="fc-title">持续进化</div>
            <div class="fc-desc text-2">Skill 随实践迭代，团队知识库持续增厚</div>
          </div>
        </div>

        <RouterLink to="/skill" class="module-cta">
          查看 SKILL 开发详情 →
        </RouterLink>
      </section>

      <div class="divider"></div>

      <!-- Module 2 -->
      <section class="module-section">
        <div class="module-header">
          <span class="tag tag-blue">02 · GenUI</span>
          <h2 class="module-title">AI 界面生成探索</h2>
          <p class="module-intro text-2">从 Prompt 到可用组件，探索 AI 生成界面的边界，重新定义设计到代码的生产路径。</p>
        </div>

        <div class="feature-grid">
          <div class="card feature-card">
            <div class="fc-icon">✍️</div>
            <div class="fc-title">Prompt 工程</div>
            <div class="fc-desc text-2">建立高质量 UI 生成的 Prompt 模式库</div>
          </div>
          <div class="card feature-card">
            <div class="fc-icon">🖼️</div>
            <div class="fc-title">组件生成</div>
            <div class="fc-desc text-2">从描述直接输出可用的前端组件代码</div>
          </div>
          <div class="card feature-card">
            <div class="fc-icon">📐</div>
            <div class="fc-title">规范对齐</div>
            <div class="fc-desc text-2">AI 生成结果自动对齐设计系统规范</div>
          </div>
        </div>

        <RouterLink to="/genui" class="module-cta module-cta-blue">
          查看 GenUI 详情 →
        </RouterLink>
      </section>

    </div>
  </main>
</template>

<style scoped>
.home {
  padding-top: calc(var(--nav-h) + 48px);
  padding-bottom: 80px;
}

/* Hero */
.hero {
  padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 48px;
}
.hero-eyebrow {
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 16px;
  font-family: var(--font-mono);
}
.hero-title {
  margin-bottom: 16px;
  color: var(--text);
}
.hero-desc {
  font-size: 16px;
  color: var(--text-2);
  max-width: 560px;
  line-height: 1.7;
}

/* Overview grid */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}
.overview-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}
.ov-icon { font-size: 24px; margin-bottom: 12px; }
.ov-label { font-size: 12px; font-family: var(--font-mono); margin-bottom: 4px; }
.ov-stat { font-size: 20px; font-weight: 700; margin-bottom: 8px; }
.ov-desc { font-size: 13px; line-height: 1.5; }

.divider {
  height: 1px;
  background: var(--border);
  margin: 48px 0;
}

/* Module section */
.module-section {}

.module-header {
  margin-bottom: 28px;
}
.module-header .tag { margin-bottom: 14px; }
.module-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
}
.module-intro {
  font-size: 15px;
  max-width: 600px;
  line-height: 1.7;
}

/* Feature grid */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-bottom: 24px;
}
.feature-card { transition: box-shadow 150ms, transform 150ms; }
.feature-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }

.fc-icon { font-size: 20px; margin-bottom: 10px; }
.fc-title { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
.fc-desc { font-size: 13px; line-height: 1.55; }

/* CTA */
.module-cta {
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--green);
  transition: opacity 150ms;
}
.module-cta:hover { opacity: 0.7; }
.module-cta-blue { color: var(--blue); }

@media (max-width: 640px) {
  .overview-grid,
  .feature-grid { grid-template-columns: 1fr; }
}
</style>
