<template>
  <section id="workflow" class="workflow">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">WORKFLOW</span>
        <h2 class="section-title">设计工作流的<span class="gradient-text">范式迁移</span></h2>
        <p class="section-desc">从线性流水线到 AI 增强的创意循环</p>
      </div>

      <div class="workflow-comparison">
        <!-- Old way -->
        <div class="workflow-col old">
          <div class="col-header">
            <span class="col-badge old-badge">BEFORE</span>
            <h3>传统设计流程</h3>
          </div>
          <div class="flow-steps">
            <div class="flow-step" v-for="(step, i) in oldFlow" :key="i">
              <div class="step-connector" v-if="i > 0"></div>
              <div class="step-node old-node">
                <span class="step-icon">{{ step.icon }}</span>
                <div class="step-info">
                  <span class="step-name">{{ step.name }}</span>
                  <span class="step-time">{{ step.time }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-total">
            <span class="total-label">总计</span>
            <span class="total-value old-value">2-4 周</span>
          </div>
        </div>

        <!-- Divider -->
        <div class="workflow-divider">
          <div class="divider-line"></div>
          <div class="divider-icon">⚡</div>
          <div class="divider-line"></div>
        </div>

        <!-- New way -->
        <div class="workflow-col new">
          <div class="col-header">
            <span class="col-badge new-badge">AFTER</span>
            <h3>AI 增强流程</h3>
          </div>
          <div class="flow-steps">
            <div class="flow-step" v-for="(step, i) in newFlow" :key="i">
              <div class="step-connector" v-if="i > 0"></div>
              <div class="step-node new-node">
                <span class="step-icon">{{ step.icon }}</span>
                <div class="step-info">
                  <span class="step-name">{{ step.name }}</span>
                  <span class="step-time">{{ step.time }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-total">
            <span class="total-label">总计</span>
            <span class="total-value new-value">1-3 天</span>
          </div>
        </div>
      </div>

      <!-- Key insight -->
      <div class="insight-banner">
        <div class="insight-icon">🎯</div>
        <div class="insight-text">
          <h4>核心洞察</h4>
          <p>AI 不是让设计师更快地做同样的事，而是让设计师有时间做<strong>更重要的事</strong>——理解用户、定义问题、把控品质。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const oldFlow = [
  { icon: '📋', name: '需求分析', time: '2-3 天' },
  { icon: '🔍', name: '竞品调研', time: '2-3 天' },
  { icon: '✏️', name: '方案设计', time: '3-5 天' },
  { icon: '🎨', name: '视觉设计', time: '3-5 天' },
  { icon: '📐', name: '标注切图', time: '1-2 天' },
  { icon: '🔄', name: '反复修改', time: '2-3 天' },
]

const newFlow = [
  { icon: '💬', name: 'AI 对话式需求', time: '2 小时' },
  { icon: '🤖', name: 'AI 生成方案', time: '30 分钟' },
  { icon: '🧑‍🎨', name: '设计师精调', time: '4 小时' },
  { icon: '⚡', name: 'AI 自动标注+代码', time: '即时' },
  { icon: '✅', name: 'AI 辅助测试', time: '1 小时' },
]
</script>

<style scoped>
.workflow {
  padding: var(--space-5xl) 0;
  background: var(--bg-dark);
  color: var(--text-light);
  position: relative;
  overflow: hidden;
}

.workflow::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(at 20% 50%, rgba(79, 70, 229, 0.15) 0%, transparent 50%),
    radial-gradient(at 80% 50%, rgba(225, 29, 99, 0.1) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
  position: relative;
  z-index: 1;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-cyan);
  margin-bottom: var(--space-lg);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid rgba(6, 182, 212, 0.3);
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
  color: rgba(240, 237, 232, 0.6);
}

/* Comparison */
.workflow-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--space-2xl);
  align-items: start;
  position: relative;
  z-index: 1;
  margin-bottom: var(--space-4xl);
}

.col-header {
  margin-bottom: var(--space-2xl);
}

.col-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.old-badge {
  background: rgba(154, 154, 176, 0.15);
  color: var(--text-muted);
}

.new-badge {
  background: rgba(79, 70, 229, 0.2);
  color: #818cf8;
}

.col-header h3 {
  font-size: var(--text-xl);
  font-weight: 700;
}

/* Steps */
.flow-steps {
  display: flex;
  flex-direction: column;
}

.flow-step {
  display: flex;
  flex-direction: column;
}

.step-connector {
  width: 2px;
  height: 16px;
  margin-left: 20px;
  background: rgba(240, 237, 232, 0.1);
}

.step-node {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
}

.old-node {
  background: rgba(154, 154, 176, 0.06);
  border: 1px solid rgba(154, 154, 176, 0.1);
}

.new-node {
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.15);
}

.new-node:hover {
  background: rgba(79, 70, 229, 0.12);
  transform: translateX(4px);
}

.step-icon {
  font-size: var(--text-xl);
  flex-shrink: 0;
}

.step-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.step-name {
  font-size: var(--text-sm);
  font-weight: 600;
}

.step-time {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: rgba(240, 237, 232, 0.4);
}

.new-node .step-time {
  color: #818cf8;
}

/* Divider */
.workflow-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding-top: 80px;
}

.divider-line {
  width: 2px;
  height: 80px;
  background: linear-gradient(to bottom, transparent, rgba(79, 70, 229, 0.3), transparent);
}

.divider-icon {
  font-size: var(--text-2xl);
  animation: pulse-glow 2s infinite;
}

/* Total */
.col-total {
  display: flex;
  align-items: baseline;
  gap: var(--space-md);
  margin-top: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid rgba(240, 237, 232, 0.1);
}

.total-label {
  font-size: var(--text-sm);
  color: rgba(240, 237, 232, 0.4);
}

.total-value {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  font-weight: 700;
}

.old-value {
  color: var(--text-muted);
}

.new-value {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Insight */
.insight-banner {
  display: flex;
  align-items: flex-start;
  gap: var(--space-xl);
  padding: var(--space-2xl);
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.15);
  border-radius: var(--radius-lg);
  position: relative;
  z-index: 1;
}

.insight-icon {
  font-size: var(--text-3xl);
  flex-shrink: 0;
}

.insight-text h4 {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
}

.insight-text p {
  font-size: var(--text-base);
  color: rgba(240, 237, 232, 0.7);
  line-height: 1.7;
}

.insight-text strong {
  color: #818cf8;
}

@media (max-width: 768px) {
  .workflow-comparison {
    grid-template-columns: 1fr;
    gap: var(--space-xl);
  }
  .workflow-divider {
    flex-direction: row;
    padding-top: 0;
  }
  .divider-line {
    width: 80px;
    height: 2px;
  }
  .insight-banner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
