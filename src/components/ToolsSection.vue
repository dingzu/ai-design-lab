<template>
  <section id="tools" class="tools">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">TOOLS</span>
        <h2 class="section-title">设计师的 <span class="gradient-text">AI 工具箱</span></h2>
        <p class="section-desc">精选正在改变行业的 AI 设计工具</p>
      </div>

      <div class="tools-grid">
        <div 
          class="tool-card" 
          v-for="(tool, i) in tools" 
          :key="i"
          :style="{ '--card-accent': tool.color }"
        >
          <div class="tool-header">
            <span class="tool-icon">{{ tool.icon }}</span>
            <span class="tool-category">{{ tool.category }}</span>
          </div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-desc">{{ tool.desc }}</p>
          <div class="tool-footer">
            <span class="tool-feature" v-for="f in tool.features" :key="f">{{ f }}</span>
          </div>
        </div>
      </div>

      <!-- Closing statement -->
      <div class="closing">
        <div class="closing-line"></div>
        <p class="closing-text">
          工具只是手段。<br/>
          真正的竞争力，是<strong class="gradient-text">设计思维 × AI 能力</strong>的乘积。
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const tools = [
  {
    icon: '🎨',
    name: 'Midjourney',
    category: '视觉生成',
    desc: '用自然语言生成高质量概念图和视觉方案，设计灵感的无限发生器。',
    features: ['概念探索', '风格参考', '素材生成'],
    color: '#4f46e5',
  },
  {
    icon: '🖥️',
    name: 'v0.dev',
    category: '设计转代码',
    desc: 'Vercel 出品的 AI UI 生成器，用对话生成可用的 React 组件和页面。',
    features: ['UI 生成', 'React 代码', '即时预览'],
    color: '#000000',
  },
  {
    icon: '⚡',
    name: 'Cursor',
    category: 'AI 编程',
    desc: 'AI 原生代码编辑器。设计师也能用自然语言构建完整的前端项目。',
    features: ['代码生成', '智能补全', '自然语言'],
    color: '#7c3aed',
  },
  {
    icon: '🧊',
    name: 'Figma AI',
    category: '智能设计',
    desc: 'Figma 内置 AI 功能：自动布局建议、智能重命名、设计建议。',
    features: ['自动布局', '智能搜索', '设计建议'],
    color: '#e11d63',
  },
  {
    icon: '🎬',
    name: 'Runway',
    category: '视频生成',
    desc: 'AI 视频生成与编辑平台，文字/图片生成视频，运动画笔控制动态。',
    features: ['文生视频', '动态控制', '风格迁移'],
    color: '#059669',
  },
  {
    icon: '🔮',
    name: 'ComfyUI',
    category: '工作流编排',
    desc: '可视化 AI 图像生成工作流，节点式编排让复杂生成流程可复用。',
    features: ['节点编排', '批量生成', '工作流复用'],
    color: '#f59e0b',
  },
  {
    icon: '📝',
    name: 'Claude',
    category: 'AI 思维伙伴',
    desc: '深度思考能力最强的 AI 助手，适合需求分析、方案推导、文档撰写。',
    features: ['需求分析', '文案生成', '逻辑推理'],
    color: '#d97706',
  },
  {
    icon: '🎯',
    name: 'Galileo AI',
    category: 'UI 生成',
    desc: '用自然语言直接生成高保真 UI 设计，支持设计系统和组件库。',
    features: ['高保真 UI', '设计系统', '快速原型'],
    color: '#06b6d4',
  },
]
</script>

<style scoped>
.tools {
  padding: var(--space-5xl) 0;
  background: var(--bg-secondary);
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
}

/* Grid */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-4xl);
}

.tool-card {
  padding: var(--space-xl);
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(26, 26, 46, 0.06);
  transition: all var(--duration-normal) var(--ease-out);
  display: flex;
  flex-direction: column;
}

.tool-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: color-mix(in srgb, var(--card-accent) 20%, transparent);
}

.tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.tool-icon {
  font-size: var(--text-2xl);
}

.tool-category {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--card-accent);
  padding: 2px 8px;
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--card-accent) 8%, transparent);
}

.tool-name {
  font-size: var(--text-lg);
  font-weight: 700;
  margin-bottom: var(--space-sm);
  letter-spacing: -0.01em;
}

.tool-desc {
  font-size: var(--text-sm);
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  flex-grow: 1;
}

.tool-footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

.tool-feature {
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
}

/* Closing */
.closing {
  text-align: center;
}

.closing-line {
  width: 60px;
  height: 2px;
  background: var(--gradient-primary);
  margin: 0 auto var(--space-2xl);
  border-radius: 1px;
}

.closing-text {
  font-size: var(--text-2xl);
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: -0.01em;
}

.closing-text strong {
  font-weight: 900;
}

@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
