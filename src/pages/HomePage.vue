<template>
  <main class="home">

    <!-- Top bar: team info -->
    <div class="home-topbar wrap">
      <span class="label">R&amp;D Design · Work Overview</span>
      <span class="label">2025 — 2026</span>
    </div>

    <!-- Hero -->
    <section class="home-hero wrap">
      <h1 class="hero-heading">工作<br/>全景</h1>
      <div class="hero-aside">
        <p class="hero-desc">研发设计团队的两条核心工作线。设计 Skill 体系建设，与 AI 驱动界面生成能力探索。</p>
        <div class="hero-meta">
          <div class="meta-row">
            <span class="label">Team</span>
            <span class="meta-val">R&amp;D Design</span>
          </div>
          <div class="meta-row">
            <span class="label">Tracks</span>
            <span class="meta-val">2</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Module list -->
    <section class="modules">
      <RouterLink to="/skill" class="module-row wrap">
        <div class="module-left">
          <span class="module-num label">01</span>
          <div class="module-name-group">
            <span class="module-en">SKILL Development</span>
            <h2 class="module-zh">SKILL 开发</h2>
          </div>
        </div>
        <div class="module-mid">
          <p>将团队最佳实践封装为结构化 Skill，驱动 AI 助手完成专业级设计任务，实现从经验到产能的系统性转化。</p>
        </div>
        <div class="module-right">
          <span class="module-tags">
            <span>Skill Design</span><span>Best Practices</span><span>AI Workflow</span>
          </span>
          <span class="module-arrow">↗</span>
        </div>
      </RouterLink>

      <RouterLink to="/genui" class="module-row wrap">
        <div class="module-left">
          <span class="module-num label">02</span>
          <div class="module-name-group">
            <span class="module-en">Generative UI</span>
            <h2 class="module-zh">GenUI</h2>
          </div>
        </div>
        <div class="module-mid">
          <p>从 Prompt 到可用组件，探索 AI 生成界面的边界，重新定义从概念到交付的设计路径。</p>
        </div>
        <div class="module-right">
          <span class="module-tags">
            <span>Generative UI</span><span>Prompt Design</span><span>Component Gen</span>
          </span>
          <span class="module-arrow">↗</span>
        </div>
      </RouterLink>
    </section>

  </main>
</template>

<style scoped>
.home {
  padding-top: var(--nav-h);
}

/* Topbar */
.home-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--c-border);
}

/* Hero */
.home-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  gap: var(--s-8);
  padding-top: var(--s-9);
  padding-bottom: var(--s-8);
  border-bottom: 1px solid var(--c-border);
}

.hero-heading {
  font-size: var(--t-4xl);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.hero-aside {
  display: flex;
  flex-direction: column;
  gap: var(--s-7);
  padding-bottom: 8px;
}

.hero-desc {
  font-size: var(--t-md);
  color: var(--c-text-2);
  line-height: 1.65;
  max-width: 400px;
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: var(--s-3);
}

.meta-row {
  display: flex;
  align-items: baseline;
  gap: var(--s-5);
}

.meta-val {
  font-family: var(--font-mono);
  font-size: var(--t-sm);
  color: var(--c-text);
}

/* Module rows */
.modules {
  border-bottom: 1px solid var(--c-border);
}

.module-row {
  display: grid;
  grid-template-columns: 260px 1fr auto;
  align-items: center;
  gap: var(--s-8);
  padding: var(--s-7) 0;
  border-bottom: 1px solid var(--c-border);
  cursor: pointer;
  transition: background 150ms;
}

.module-row:last-child { border-bottom: none; }

.module-row:hover { background: var(--c-bg-2); }

/* Left col */
.module-left {
  display: flex;
  align-items: flex-start;
  gap: var(--s-5);
}

.module-num {
  padding-top: 6px;
  flex-shrink: 0;
}

.module-name-group {
  display: flex;
  flex-direction: column;
  gap: var(--s-1);
}

.module-en {
  font-family: var(--font-mono);
  font-size: var(--t-xs);
  color: var(--c-text-3);
  letter-spacing: 0.05em;
}

.module-zh {
  font-size: var(--t-2xl);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.0;
}

/* Mid col */
.module-mid p {
  font-size: var(--t-sm);
  color: var(--c-text-2);
  line-height: 1.7;
  max-width: 420px;
}

/* Right col */
.module-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--s-5);
}

.module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--s-2);
  justify-content: flex-end;
}

.module-tags span {
  font-family: var(--font-mono);
  font-size: var(--t-xs);
  padding: 3px 10px;
  border: 1px solid var(--c-border-2);
  border-radius: 2px;
  color: var(--c-text-3);
  white-space: nowrap;
}

.module-row:hover .module-tags span {
  border-color: var(--c-text-3);
  color: var(--c-text-2);
}

.module-arrow {
  font-size: var(--t-lg);
  color: var(--c-text-3);
  transition: transform 200ms, color 150ms;
  line-height: 1;
}

.module-row:hover .module-arrow {
  transform: translate(3px, -3px);
  color: var(--c-text);
}

@media (max-width: 900px) {
  .home-hero { grid-template-columns: 1fr; gap: var(--s-6); padding-top: var(--s-7); }
  .hero-heading { font-size: var(--t-3xl); }
  .module-row { grid-template-columns: 1fr; gap: var(--s-4); padding: var(--s-6) 0; }
  .module-right { align-items: flex-start; }
  .module-tags { justify-content: flex-start; }
}
</style>
