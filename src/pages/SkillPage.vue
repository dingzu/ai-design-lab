<template>
  <main class="page">
    <div class="wrap">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <RouterLink to="/" class="text-3">首页</RouterLink>
        <span class="text-3"> / </span>
        <span class="text-2">SKILL 开发</span>
      </div>

      <!-- Header -->
      <header class="page-hero">
        <span class="tag tag-green" style="margin-bottom:16px;display:inline-flex">01 · SKILL Development</span>
        <h1>设计 Skill<br/>开发体系</h1>
        <p class="text-2" style="font-size:16px;max-width:560px;line-height:1.7;margin-top:16px">
          将团队知识与最佳实践封装为结构化 Skill，让 AI 助手具备专业设计能力，实现从经验到产能的系统性转化。
        </p>
      </header>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-num text-green">进行中</div>
          <div class="stat-label text-3">状态</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">01</div>
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
          <div class="cs-icon">🔨</div>
          <div class="cs-title">内容建设中</div>
          <div class="cs-desc text-3">正在整理 Skill 设计规范、案例库与开发实践，敬请期待</div>
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

/* Stats bar */
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

/* Coming soon */
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
