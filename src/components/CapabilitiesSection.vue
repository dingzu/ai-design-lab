<template>
  <section id="capabilities" class="capabilities">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">CAPABILITIES</span>
        <h2 class="section-title">AI 赋能设计的<span class="gradient-text">六大维度</span></h2>
        <p class="section-desc">从概念到交付，AI 正在重塑设计全链路的每一个节点</p>
      </div>

      <div class="cap-grid">
        <div 
          class="cap-card" 
          v-for="(cap, i) in capabilities" 
          :key="i"
          :class="[`cap-${i + 1}`]"
        >
          <div class="cap-visual">
            <span class="cap-emoji">{{ cap.emoji }}</span>
            <div class="cap-number">{{ String(i + 1).padStart(2, '0') }}</div>
          </div>
          <h3 class="cap-title">{{ cap.title }}</h3>
          <p class="cap-desc">{{ cap.desc }}</p>
          <div class="cap-tags">
            <span class="tag" v-for="tag in cap.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = [
  {
    emoji: '💡',
    title: '灵感激发',
    desc: '用自然语言描述想法，AI 在秒级生成视觉方案。Moodboard 从手动拼凑变为智能生成。',
    tags: ['Midjourney', 'DALL·E', 'Mood AI'],
  },
  {
    emoji: '✏️',
    title: '智能设计',
    desc: '自动生成布局、配色、字体搭配。设计系统的维护和扩展从人力密集变为 AI 驱动。',
    tags: ['Figma AI', 'Galileo', 'Design Tokens'],
  },
  {
    emoji: '🖼️',
    title: '视觉生产',
    desc: '批量生成产品图、Banner、社交媒体素材。一个提示词，N 种尺寸和风格变体。',
    tags: ['ComfyUI', 'Stable Diffusion', 'Batch Gen'],
  },
  {
    emoji: '🔄',
    title: '设计转代码',
    desc: '设计稿直接生成可用的前端代码。设计师的产出不再停留在图片层面。',
    tags: ['v0.dev', 'Cursor', 'Locofy'],
  },
  {
    emoji: '🧪',
    title: '智能测试',
    desc: 'AI 自动进行可用性分析、对比测试、无障碍检查，让每个设计决策都有数据支撑。',
    tags: ['A/B Testing', 'Accessibility', 'Heuristics'],
  },
  {
    emoji: '📦',
    title: '资产管理',
    desc: '自动标注、切图、归档。设计资产的组织和检索从人工目录变为语义搜索。',
    tags: ['Auto Specs', 'Smart Tags', 'Semantic Search'],
  },
]
</script>

<style scoped>
.capabilities {
  padding: var(--space-5xl) 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-4xl);
}

.section-tag {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-indigo);
  margin-bottom: var(--space-lg);
  padding: var(--space-xs) var(--space-md);
  border: 1px solid rgba(79, 70, 229, 0.2);
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
  color: var(--text-secondary);
  max-width: 480px;
  margin: 0 auto;
}

/* Grid */
.cap-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.cap-card {
  position: relative;
  padding: var(--space-2xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(26, 26, 46, 0.06);
  transition: all var(--duration-normal) var(--ease-out);
  overflow: hidden;
}

.cap-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.cap-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.cap-card:hover::before {
  opacity: 1;
}

.cap-visual {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-xl);
}

.cap-emoji {
  font-size: var(--text-3xl);
  line-height: 1;
}

.cap-number {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  color: var(--text-muted);
  opacity: 0.15;
  line-height: 1;
}

.cap-title {
  font-size: var(--text-xl);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.cap-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.cap-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  letter-spacing: 0.02em;
}

/* Color accents per card */
.cap-1:hover { border-color: rgba(79, 70, 229, 0.2); }
.cap-2:hover { border-color: rgba(124, 58, 237, 0.2); }
.cap-3:hover { border-color: rgba(225, 29, 99, 0.2); }
.cap-4:hover { border-color: rgba(6, 182, 212, 0.2); }
.cap-5:hover { border-color: rgba(5, 150, 105, 0.2); }
.cap-6:hover { border-color: rgba(245, 158, 11, 0.2); }

@media (max-width: 1024px) {
  .cap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
