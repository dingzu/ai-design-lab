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

      <!-- Stats + repo link bar -->
      <div class="info-bar">
        <div class="info-stats">
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
        <a
          href="https://git.corp.kuaishou.com/design/designskill"
          target="_blank"
          rel="noopener"
          class="repo-btn"
        >
          <span class="repo-icon">⎇</span>
          <span>designskill 仓库</span>
          <span class="repo-arrow">↗</span>
        </a>
      </div>

      <div class="section-divider"></div>

      <!-- 项目定位 -->
      <section class="content-section">
        <h2 class="section-title">项目定位</h2>
        <div class="goal-grid">
          <div class="goal-card">
            <div class="goal-label text-3">核心目标</div>
            <div class="goal-val">提升团队 Agent Skill 的整体设计质量与复用率</div>
          </div>
          <div class="goal-card">
            <div class="goal-label text-3">主要受众</div>
            <div class="goal-val">设计师、产品经理、开发同学、AI 助手的 Owner</div>
          </div>
          <div class="goal-card">
            <div class="goal-label text-3">协作模式</div>
            <div class="goal-val">提案 → 评审 → 沉淀 → 发布</div>
          </div>
          <div class="goal-card">
            <div class="goal-label text-3">维护归属</div>
            <div class="goal-val">【质量与研发效能部】设计团队</div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- 工作流 -->
      <section class="content-section">
        <h2 class="section-title">工作流</h2>
        <div class="workflow-row">
          <div class="wf-step">
            <div class="wf-num">01</div>
            <div class="wf-name">提案</div>
            <div class="wf-desc text-3">proposals/ 目录提交新 Skill 提案</div>
          </div>
          <div class="wf-arrow">→</div>
          <div class="wf-step">
            <div class="wf-num">02</div>
            <div class="wf-name">评审</div>
            <div class="wf-desc text-3">MR 评审 · 设计讨论 · 修改迭代</div>
          </div>
          <div class="wf-arrow">→</div>
          <div class="wf-step">
            <div class="wf-num">03</div>
            <div class="wf-name">沉淀</div>
            <div class="wf-desc text-3">评审通过后入库 skills/ 目录</div>
          </div>
          <div class="wf-arrow">→</div>
          <div class="wf-step">
            <div class="wf-num">04</div>
            <div class="wf-name">发布</div>
            <div class="wf-desc text-3">同步安装到 ~/.codeflicker/skills/</div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- Skill 规范 -->
      <section class="content-section">
        <h2 class="section-title">核心规范</h2>
        <p class="section-desc text-2">每个 Skill 必须包含以下要素，详见仓库 <code>standards/skill-spec.md</code></p>
        <div class="spec-grid">
          <div class="spec-card">
            <div class="spec-icon">📄</div>
            <div class="spec-name">SKILL.md</div>
            <div class="spec-desc text-3">Skill 主指令文件，包含定位、触发时机、核心步骤、交付物</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">🏷️</div>
            <div class="spec-name">description</div>
            <div class="spec-desc text-3">50-200字，含至少 3 个中英文触发词，决定 AI 是否正确调用</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">⚡</div>
            <div class="spec-name">触发词</div>
            <div class="spec-desc text-3">至少 3 个明确的中英文触发词，覆盖核心使用场景</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">📦</div>
            <div class="spec-name">交付物定义</div>
            <div class="spec-desc text-3">明确输出格式（HTML/Markdown/文件）和验收标准</div>
          </div>
        </div>

        <!-- Quality levels -->
        <div class="quality-table">
          <div class="qt-header">
            <span>质量评级</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-3">⭐⭐⭐ 优秀</span>
            <span class="qt-desc text-2">触发精准、交付物清晰、有真实使用案例</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-2">⭐⭐ 合格</span>
            <span class="qt-desc text-2">满足基本规范，触发词完整</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-1">⭐ 待改进</span>
            <span class="qt-desc text-2">描述不清、触发词少、无交付物定义</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-0">❌ 不合格</span>
            <span class="qt-desc text-2">不符合基本结构规范，退回修改</span>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- Skill 库 -->
      <section class="content-section">
        <div class="skills-header">
          <h2 class="section-title" style="margin-bottom:0">Skill 库</h2>
          <a
            href="https://git.corp.kuaishou.com/design/designskill/-/tree/main/skills"
            target="_blank"
            rel="noopener"
            class="view-all-link text-green"
          >查看全部 →</a>
        </div>
        <!-- Research entry -->
        <RouterLink to="/skill/research" class="research-card">
          <div class="rc-left">
            <div class="rc-icon">🔬</div>
            <div>
              <div class="rc-title">Skill 评测分析</div>
              <div class="rc-desc text-3">研究顶级 Design Skill 真实实现，按设计子类分类，持续更新最佳实践</div>
            </div>
          </div>
          <div class="rc-meta">
            <span class="tag tag-purple">第一批研究中</span>
            <span class="rc-arrow">→</span>
          </div>
        </RouterLink>

        <!-- Hub entry -->
        <RouterLink to="/hub" class="research-card" style="margin-top:10px">
          <div class="rc-left">
            <div class="rc-icon">📚</div>
            <div>
              <div class="rc-title">研究汇总</div>
              <div class="rc-desc text-3">OpenClaw 对话特殊渲染机制全览等深度研究报告，左侧目录 + 右侧详细内容</div>
            </div>
          </div>
          <div class="rc-meta">
            <span class="tag tag-blue">1 篇文章</span>
            <span class="rc-arrow">→</span>
          </div>
        </RouterLink>

        <div class="empty-state" style="margin-top:14px">
          <div class="cs-icon">🌱</div>
          <div class="cs-title">第一批 Skill 建设中</div>
          <div class="cs-desc text-3">欢迎提交你的第一个 Skill 提案到 designskill 仓库</div>
          <a
            href="https://git.corp.kuaishou.com/design/designskill/-/tree/main/proposals"
            target="_blank"
            rel="noopener"
            class="submit-btn"
          >提交提案 ↗</a>
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
  margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}

/* Info bar */
.info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 24px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.info-stats {
  display: flex;
  align-items: center;
  gap: 28px;
}

.stat-item { display: flex; flex-direction: column; gap: 3px; }
.stat-num { font-size: 18px; font-weight: 700; }
.stat-label { font-size: 12px; font-family: var(--font-mono); }
.stat-divider { width: 1px; height: 32px; background: var(--border); }

/* Repo button */
.repo-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  transition: border-color 150ms, box-shadow 150ms;
  white-space: nowrap;
}
.repo-btn:hover {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(5,150,105,0.08);
}
.repo-icon { font-size: 15px; }
.repo-arrow { color: var(--text-3); font-size: 12px; }

.section-divider { height: 1px; background: var(--border); margin: 48px 0; }

.section-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-desc {
  font-size: 13px;
  margin-bottom: 20px;
  line-height: 1.6;
}
.section-desc code {
  font-family: var(--font-mono);
  font-size: 12px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 1px 6px;
  border-radius: 4px;
}

/* Goal grid */
.goal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.goal-card {
  padding: 16px 20px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.goal-label {
  font-size: 11px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}
.goal-val { font-size: 14px; font-weight: 500; line-height: 1.5; }

/* Workflow */
.workflow-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}
.wf-step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  padding: 16px 18px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  flex: 1;
}
.wf-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--green);
  font-weight: 700;
  letter-spacing: 0.05em;
}
.wf-name { font-size: 15px; font-weight: 700; }
.wf-desc { font-size: 12px; line-height: 1.5; margin-top: 2px; }
.wf-arrow {
  font-size: 16px;
  color: var(--text-3);
  padding-top: 22px;
  flex-shrink: 0;
}

/* Spec grid */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}
.spec-card {
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.spec-icon { font-size: 18px; margin-bottom: 8px; }
.spec-name { font-size: 13px; font-weight: 600; margin-bottom: 6px; }
.spec-desc { font-size: 12px; line-height: 1.55; }

/* Quality table */
.quality-table {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.qt-header {
  padding: 10px 16px;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.qt-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--border);
}
.qt-row:last-child { border-bottom: none; }
.qt-level {
  font-size: 13px;
  font-weight: 600;
  min-width: 100px;
  flex-shrink: 0;
}
.qt-desc { font-size: 13px; }

/* Skills header */
.skills-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.view-all-link {
  font-size: 13px;
  font-weight: 600;
  transition: opacity 150ms;
}
.view-all-link:hover { opacity: 0.7; }

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 56px 24px;
  border: 1.5px dashed var(--border-2);
  border-radius: var(--radius-lg);
  text-align: center;
  background: var(--bg-subtle);
}
.cs-icon { font-size: 28px; }
.cs-title { font-size: 15px; font-weight: 600; }
.cs-desc { font-size: 13px; line-height: 1.5; max-width: 320px; }

/* Research card */
.research-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 150ms, border-color 150ms;
  cursor: pointer;
}
.research-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--purple);
}
.rc-left {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.rc-icon { font-size: 20px; flex-shrink: 0; padding-top: 2px; }
.rc-title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.rc-desc { font-size: 13px; line-height: 1.5; }
.rc-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.rc-arrow { font-size: 16px; color: var(--text-3); }

.submit-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: var(--green);
  color: white;
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  transition: opacity 150ms;
}
.submit-btn:hover { opacity: 0.88; }

@media (max-width: 640px) {
  .info-bar { flex-direction: column; align-items: flex-start; }
  .goal-grid { grid-template-columns: 1fr; }
  .spec-grid { grid-template-columns: 1fr 1fr; }
  .workflow-row { flex-direction: column; }
  .wf-arrow { display: none; }
}
@media (max-width: 480px) {
  .spec-grid { grid-template-columns: 1fr; }
}
</style>
