<template>
  <main class="page">
    <div class="page-header container">
      <RouterLink to="/" class="back-link">← 返回全景</RouterLink>
      <div class="page-meta">
        <span class="page-index">02</span>
        <span class="page-tag">GenUI</span>
      </div>
      <h1 class="page-title">Gen<br/>UI</h1>
      <p class="page-desc">AI 驱动的界面生成探索。从 Prompt 工程到组件输出，重新定义设计到代码的生产路径。</p>
    </div>

    <div class="page-content container">
      <div class="placeholder-grid">
        <div class="placeholder-card" v-for="n in 3" :key="n">
          <div class="placeholder-top">
            <div class="placeholder-dot"></div>
            <span class="placeholder-label">Coming soon</span>
          </div>
          <div class="placeholder-bar w-60"></div>
          <div class="placeholder-bar w-80"></div>
          <div class="placeholder-bar w-40"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding-top: 100px;
}

.page-header {
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-3xl);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}

.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: var(--space-2xl);
  transition: color var(--duration-fast);
}
.back-link:hover { color: var(--text-primary); }

.page-meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.page-index {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--text-muted);
  font-weight: 700;
}

.page-tag {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 3px 12px;
  border: 1px solid rgba(0,0,0,0.12);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
}

.page-title {
  font-size: var(--text-7xl);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: var(--space-xl);
}

.page-desc {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
}

.page-content {
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-5xl);
}

.placeholder-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.placeholder-card {
  padding: var(--space-2xl);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: var(--radius-lg);
  background: #fafafa;
}

.placeholder-top {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.placeholder-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #e5e5e5;
}

.placeholder-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
}

.placeholder-bar {
  height: 10px;
  background: #ebebeb;
  border-radius: 4px;
  margin-bottom: var(--space-sm);
}
.w-60 { width: 60%; }
.w-80 { width: 80%; }
.w-40 { width: 40%; }

@media (max-width: 768px) {
  .page-title { font-size: var(--text-5xl); }
  .placeholder-grid { grid-template-columns: 1fr; }
}
</style>
