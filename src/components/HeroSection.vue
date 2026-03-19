<template>
  <section class="hero">
    <!-- Background decorative elements -->
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
      <div class="grid-lines"></div>
    </div>

    <div class="hero-content container">
      <div class="hero-badge" v-show="visible">
        <span class="badge-dot"></span>
        <span>AI-Native Design Era</span>
      </div>

      <h1 class="hero-title" v-show="visible">
        <span class="title-line">设计的生产力</span>
        <span class="title-line title-accent">
          正在被 <em class="gradient-text">AI</em> 重新定义
        </span>
      </h1>

      <p class="hero-subtitle" v-show="visible">
        从灵感到交付，AI 正在改变设计师的每一个工作环节。<br/>
        这不是替代，而是一场前所未有的<strong>能力升维</strong>。
      </p>

      <div class="hero-stats" v-show="visible">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <span class="stat-number">{{ stat.number }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="hero-cta" v-show="visible">
        <a href="#manifesto" class="btn-primary">
          <span>探索新范式</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Floating design elements -->
    <div class="floating-elements">
      <div class="float-card float-card-1">
        <div class="card-icon">🎨</div>
        <span>Design Token</span>
      </div>
      <div class="float-card float-card-2">
        <div class="card-icon">⚡</div>
        <span>Auto Layout</span>
      </div>
      <div class="float-card float-card-3">
        <div class="card-icon">🧠</div>
        <span>AI Prompt</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

const stats = [
  { number: '10x', label: '效率提升' },
  { number: '85%', label: '重复工作自动化' },
  { number: '∞', label: '创意可能性' },
]

onMounted(() => {
  setTimeout(() => { visible.value = true }, 200)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: var(--space-4xl);
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  background: var(--gradient-mesh);
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: rgba(79, 70, 229, 0.08);
  top: -10%;
  right: -5%;
  animation: float 8s var(--ease-out) infinite;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: rgba(225, 29, 99, 0.06);
  bottom: -5%;
  left: -5%;
  animation: float 10s var(--ease-out) infinite reverse;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: rgba(245, 158, 11, 0.05);
  top: 40%;
  left: 30%;
  animation: float 12s var(--ease-out) infinite;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(26,26,46,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(26,26,46,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
}

/* Content */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xs) var(--space-md);
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.15);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-indigo);
  margin-bottom: var(--space-2xl);
  animation: fadeInUp 0.8s var(--ease-out) both;
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--accent-indigo);
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
}

.hero-title {
  font-family: var(--font-body);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: var(--space-xl);
  animation: fadeInUp 0.8s var(--ease-out) 0.15s both;
}

.title-line {
  display: block;
  font-size: var(--text-7xl);
  letter-spacing: -0.03em;
}

.title-accent {
  font-size: var(--text-5xl);
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: var(--space-sm);
}

.title-accent em {
  font-style: normal;
  font-weight: 900;
  font-size: var(--text-7xl);
}

.hero-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0 auto var(--space-3xl);
  line-height: 1.8;
  animation: fadeInUp 0.8s var(--ease-out) 0.3s both;
}

.hero-subtitle strong {
  color: var(--accent-indigo);
  font-weight: 700;
}

/* Stats */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-3xl);
  margin-bottom: var(--space-3xl);
  animation: fadeInUp 0.8s var(--ease-out) 0.45s both;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
}

.stat-number {
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 700;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--text-muted);
  font-weight: 500;
}

/* CTA */
.hero-cta {
  animation: fadeInUp 0.8s var(--ease-out) 0.6s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-2xl);
  background: var(--text-primary);
  color: var(--bg-primary);
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: var(--text-base);
  transition: all var(--duration-normal) var(--ease-out);
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-primary svg {
  transition: transform var(--duration-normal) var(--ease-out);
}

.btn-primary:hover svg {
  transform: translateY(3px);
}

/* Floating cards */
.floating-elements {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.float-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-sm) var(--space-md);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(26, 26, 46, 0.08);
  border-radius: var(--radius-md);
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--text-secondary);
  box-shadow: var(--shadow-md);
  animation: float 6s var(--ease-out) infinite;
}

.card-icon {
  font-size: var(--text-lg);
}

.float-card-1 {
  top: 25%;
  left: 8%;
  animation-delay: 0s;
}

.float-card-2 {
  top: 35%;
  right: 8%;
  animation-delay: 2s;
}

.float-card-3 {
  bottom: 20%;
  right: 15%;
  animation-delay: 4s;
}

@media (max-width: 768px) {
  .hero-stats {
    gap: var(--space-xl);
  }
  .floating-elements {
    display: none;
  }
  .hero-title .title-line {
    font-size: var(--text-5xl);
  }
  .title-accent {
    font-size: var(--text-3xl) !important;
  }
  .title-accent em {
    font-size: var(--text-5xl) !important;
  }
}
</style>
