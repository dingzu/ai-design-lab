<template>
  <section id="manifesto" class="manifesto">
    <div class="container">
      <div class="manifesto-grid">
        <div class="manifesto-left">
          <span class="section-tag">MANIFESTO</span>
          <h2 class="manifesto-title">
            设计师不会被取代，<br/>
            但<span class="gradient-text">不用 AI 的</span>设计师会。
          </h2>
        </div>
        <div class="manifesto-right">
          <div class="manifesto-item" v-for="(item, i) in items" :key="i">
            <div class="item-index">{{ String(i + 1).padStart(2, '0') }}</div>
            <div class="item-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    title: '创意不再从零开始',
    desc: 'AI 可以在几秒内生成数十个方向，设计师的角色从 "生产者" 升级为 "策展人"。'
  },
  {
    title: '重复劳动正在消亡',
    desc: '切图、标注、适配、改尺寸——这些消耗创造力的工作，AI 可以瞬间完成。'
  },
  {
    title: '个人即团队',
    desc: '一个懂 AI 的设计师，生产力等于过去一整个设计团队。'
  },
  {
    title: '交付物不再是终点',
    desc: 'AI 让设计产出可以直接生成代码、动效、甚至可交互原型。设计与开发的边界正在模糊。'
  },
]
</script>

<style scoped>
.manifesto {
  padding: var(--space-5xl) 0;
  background: var(--bg-secondary);
  position: relative;
}

.manifesto::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(79,70,229,0.2), transparent);
}

.manifesto-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-indigo);
  margin-bottom: var(--space-xl);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: var(--radius-sm);
}

.manifesto-title {
  font-size: var(--text-4xl);
  font-weight: 900;
  line-height: 1.3;
  letter-spacing: -0.02em;
  position: sticky;
  top: 120px;
}

.manifesto-right {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.manifesto-item {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(26, 26, 46, 0.06);
  transition: all var(--duration-normal) var(--ease-out);
}

.manifesto-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(79, 70, 229, 0.12);
}

.item-index {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-muted);
  opacity: 0.4;
  line-height: 1;
  flex-shrink: 0;
}

.item-content h3 {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.item-content p {
  font-size: var(--text-base);
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .manifesto-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }
  .manifesto-title {
    position: static;
    font-size: var(--text-3xl);
  }
}
</style>
