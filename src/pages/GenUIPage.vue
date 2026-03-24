<template>
  <main class="page">

    <div class="page-topbar wrap">
      <RouterLink to="/" class="back label">← Work Overview</RouterLink>
      <span class="label">02 / GenUI</span>
    </div>

    <header class="page-header wrap">
      <div class="header-left">
        <span class="label" style="display:block; margin-bottom: var(--s-4)">Generative UI</span>
        <h1 class="page-title">Gen<br/>UI</h1>
      </div>
      <div class="header-right">
        <p class="page-desc">从 Prompt 到可用组件，探索 AI 生成界面的边界，重新定义设计到代码的生产路径。</p>
        <div class="header-meta">
          <div class="meta-row"><span class="label">Track</span><span class="meta-val">02</span></div>
          <div class="meta-row"><span class="label">Status</span><span class="meta-val status-wip">In Progress</span></div>
        </div>
      </div>
    </header>

    <section class="page-content wrap">
      <div class="content-header">
        <span class="label">Content</span>
      </div>
      <div class="empty-state">
        <span class="empty-dot"></span>
        <p class="label">内容建设中</p>
      </div>
    </section>

  </main>
</template>

<style scoped>
.page { padding-top: var(--nav-h); }

.page-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--c-border);
}

.back { transition: color 150ms; }
.back:hover { color: var(--c-text); }

.page-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--s-8);
  align-items: end;
  padding-top: var(--s-9);
  padding-bottom: var(--s-8);
  border-bottom: 1px solid var(--c-border);
}

.page-title {
  font-size: var(--t-4xl);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 0.95;
}

.header-right {
  display: flex;
  flex-direction: column;
  gap: var(--s-7);
  padding-bottom: 8px;
}

.page-desc {
  font-size: var(--t-md);
  color: var(--c-text-2);
  line-height: 1.65;
  max-width: 400px;
}

.header-meta {
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

.status-wip { color: var(--c-text-3); }

.page-content {
  padding-top: var(--s-7);
  padding-bottom: var(--s-10);
}

.content-header {
  padding-bottom: var(--s-5);
  border-bottom: 1px solid var(--c-border);
  margin-bottom: var(--s-8);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--s-4);
  padding: var(--s-10) 0;
  border: 1px dashed var(--c-border-2);
  border-radius: 4px;
}

.empty-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--c-border-2);
}

@media (max-width: 900px) {
  .page-header { grid-template-columns: 1fr; gap: var(--s-6); padding-top: var(--s-7); }
  .page-title { font-size: var(--t-3xl); }
}
</style>
