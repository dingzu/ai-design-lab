<template>
  <main class="page">
    <div class="wrap">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <RouterLink to="/" class="text-3">首页</RouterLink>
        <span class="text-3"> / </span>
        <span class="text-2">GenUI</span>
      </div>

      <!-- Header -->
      <header class="page-hero">
        <span class="tag tag-blue" style="margin-bottom:16px;display:inline-flex">02 · Generative UI</span>
        <h1>GenUI</h1>
        <p class="text-2" style="font-size:16px;max-width:560px;line-height:1.7;margin-top:16px">
          从 Prompt 到可用组件，探索 AI 生成界面的边界，重新定义设计到代码的生产路径。
        </p>
      </header>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-num text-blue">探索中</div>
          <div class="stat-label text-3">状态</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">02</div>
          <div class="stat-label text-3">工作线编号</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">2025</div>
          <div class="stat-label text-3">启动年份</div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- Content area -->
      <section class="content-section">
        <h2 class="section-title">内容规划</h2>
        <div class="coming-soon">
          <div class="cs-icon">🧩</div>
          <div class="cs-title">内容建设中</div>
          <div class="cs-desc text-3">正在整理 GenUI 实验案例、Prompt 模式库与组件生成规范，敬请期待</div>
        </div>
      </section>

    </div>
  </main>
</template>

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
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.stats-bar {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 48px;
}
.stat-item { display: flex; flex-direction: column; gap: 4px; }
.stat-num { font-size: 20px; font-weight: 700; }
.stat-label { font-size: 12px; font-family: var(--font-mono); }
.stat-divider { width: 1px; height: 36px; background: var(--border); }

.section-divider { height: 1px; background: var(--border); margin: 48px 0; }

.section-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 64px 24px;
  border: 1.5px dashed var(--border-2);
  border-radius: var(--radius-lg);
  text-align: center;
  background: var(--bg-subtle);
}
.cs-icon { font-size: 28px; }
.cs-title { font-size: 15px; font-weight: 600; }
.cs-desc { font-size: 13px; line-height: 1.5; max-width: 320px; }

@media (max-width: 640px) {
  .stats-bar { flex-wrap: wrap; gap: 16px; }
  .stat-divider { display: none; }
}
</style>
