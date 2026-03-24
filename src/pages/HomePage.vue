<template>
  <main class="home">
    <!-- Header -->
    <section class="home-header container">
      <p class="home-label">Work Overview</p>
      <h1 class="home-title">R&amp;D design<br/><span class="home-subtitle">工作全景</span></h1>
      <p class="home-desc">研发设计团队的两条核心工作线——设计 Skill 体系建设与 AI 驱动的界面生成能力探索。</p>
    </section>

    <!-- Two modules -->
    <section class="modules container">
      <RouterLink to="/skill" class="module-card module-skill">
        <div class="module-top">
          <span class="module-index">01</span>
          <span class="module-arrow">↗</span>
        </div>
        <div class="module-body">
          <h2 class="module-title">SKILL<br/>开发</h2>
          <p class="module-desc">设计技能的结构化沉淀与复用体系。将团队最佳实践封装为可调用的 Skill，驱动 AI 助手完成专业级设计任务。</p>
        </div>
        <div class="module-footer">
          <div class="module-tags">
            <span>Skill Design</span>
            <span>Best Practices</span>
            <span>AI Workflow</span>
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/genui" class="module-card module-genui">
        <div class="module-top">
          <span class="module-index">02</span>
          <span class="module-arrow">↗</span>
        </div>
        <div class="module-body">
          <h2 class="module-title">Gen<br/>UI</h2>
          <p class="module-desc">用 AI 生成界面的探索与实践。从 Prompt 到可用组件，探索设计生产力的边界，重新定义从概念到交付的路径。</p>
        </div>
        <div class="module-footer">
          <div class="module-tags">
            <span>Generative UI</span>
            <span>Prompt Design</span>
            <span>Component Gen</span>
          </div>
        </div>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding-top: 100px;
}

/* Header */
.home-header {
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-3xl);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.home-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: var(--space-xl);
}

.home-title {
  font-size: var(--text-7xl);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: var(--space-xl);
}

.home-subtitle {
  color: var(--text-muted);
  font-weight: 300;
}

.home-desc {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

/* Modules */
.modules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.module-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-3xl) var(--space-2xl);
  border-right: 1px solid rgba(0,0,0,0.06);
  min-height: 480px;
  transition: background var(--duration-normal) var(--ease-out);
  cursor: pointer;
}

.module-card:last-child {
  border-right: none;
}

.module-card:hover {
  background: #fafafa;
}

.module-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-4xl);
}

.module-index {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.module-arrow {
  font-size: var(--text-xl);
  color: var(--text-muted);
  transition: transform var(--duration-normal) var(--ease-out);
}

.module-card:hover .module-arrow {
  transform: translate(4px, -4px);
  color: var(--text-primary);
}

.module-body {
  flex-grow: 1;
}

.module-title {
  font-size: var(--text-6xl);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.0;
  margin-bottom: var(--space-xl);
}

.module-desc {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.75;
  max-width: 380px;
}

.module-footer {
  margin-top: var(--space-2xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(0,0,0,0.06);
}

.module-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.module-tags span {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 4px 12px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: var(--radius-full);
  color: var(--text-muted);
}

.module-card:hover .module-tags span {
  border-color: rgba(0,0,0,0.2);
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .home-title { font-size: var(--text-5xl); }
  .modules { grid-template-columns: 1fr; }
  .module-card { border-right: none; border-bottom: 1px solid rgba(0,0,0,0.06); }
  .module-title { font-size: var(--text-4xl); }
}
</style>
