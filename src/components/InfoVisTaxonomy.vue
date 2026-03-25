<template>
  <div class="infovis-taxonomy">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-inner">
        <h1>信息可视化图表分类体系</h1>
        <p>语义维度 × 技术实现维度 × Skill 工程路径</p>
        <div class="hero-meta">
          <div class="hero-stat">
            <strong>10</strong>
            <span>语义类别</span>
          </div>
          <div class="hero-stat">
            <strong>21</strong>
            <span>技术实现</span>
          </div>
          <div class="hero-stat">
            <strong>5</strong>
            <span>Skill 路径</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav -->
    <nav class="nav">
      <div class="nav-inner">
        <div class="dim-switcher">
          <button 
            class="dim-btn" 
            :class="{ active: activeDimension === 'semantic' }"
            @click="switchDimension('semantic')"
          >
            语义维度
          </button>
          <button 
            class="dim-btn" 
            :class="{ active: activeDimension === 'tech' }"
            @click="switchDimension('tech')"
          >
            技术实现
          </button>
          <button 
            class="dim-btn" 
            :class="{ active: activeDimension === 'skill' }"
            @click="switchDimension('skill')"
          >
            Skill 路径
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- 语义维度视图 -->
      <div v-show="activeDimension === 'semantic'" class="view-semantic">
        <div v-for="category in semanticCategories" :key="category.id" class="category">
          <div class="category-header">
            <div class="category-icon" :style="{ background: category.color + '20', color: category.color }">
              {{ category.icon }}
            </div>
            <div>
              <h2 class="category-title">{{ category.name }}</h2>
              <div class="category-meta">
                <span class="category-en">{{ category.nameEn }}</span>
                <span class="category-purpose">{{ category.purpose }}</span>
              </div>
            </div>
          </div>

          <div v-for="sub in category.subcategories" :key="sub.id" class="subcategory">
            <div class="subcat-title">{{ sub.name }}</div>
            <div class="chart-grid">
              <div v-for="chart in sub.charts" :key="chart.id" class="chart-card">
                <div class="chart-preview" v-html="chart.svgCode"></div>
                <div class="chart-info">
                  <div class="chart-name">{{ chart.name }}</div>
                  <div class="chart-name-en">{{ chart.nameEn }}</div>
                  <div class="chart-use">{{ chart.use }}</div>
                  <div class="chart-tag" :style="{ background: category.color + '20', color: category.color }">
                    {{ chart.tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技术实现维度 -->
      <div v-show="activeDimension === 'tech'" class="view-tech">
        <p class="tech-intro">
          从技术实现角度重新组织 — 21 种图表按实现难度、技术栈、计算复杂度分为 5 层
        </p>
        
        <div v-for="tier in techTiers" :key="tier.id" class="tech-tier">
          <div class="tier-header">
            <div class="tier-badge" :style="{ background: tier.color, color: 'white' }">
              {{ tier.level }}
            </div>
            <div>
              <div class="tier-title">{{ tier.name }}</div>
              <div class="tier-desc">{{ tier.desc }}</div>
            </div>
          </div>
          
          <div class="tech-chart-list">
            <div v-for="chart in tier.charts" :key="chart.id" class="tech-chart-card">
              <div class="tcc-name">{{ chart.name }}</div>
              <div class="tcc-tags">
                <span class="tcc-tag" v-for="tag in chart.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skill 路径维度 -->
      <div v-show="activeDimension === 'skill'" class="view-skill">
        <p class="skill-intro">
          Skill 工程路径 — 针对不同质量需求与工作流场景，提供 5 条标准调用路径
        </p>

        <div v-for="path in skillPaths" :key="path.id" class="skill-path">
          <div class="skill-path-header" :style="{ background: path.bgColor, borderLeftColor: path.color }">
            <div style="flex:1">
              <div class="skill-path-label" :style="{ color: path.color }">
                SKILL PATH {{ path.id }}
              </div>
              <div class="skill-path-title">
                {{ path.title }}
                <span class="skill-path-subtitle">{{ path.subtitle }}</span>
              </div>
              <div class="skill-path-desc">{{ path.desc }}</div>
            </div>
            <div class="skill-path-badge" :style="{ background: path.badgeBg, color: path.color, borderColor: path.borderColor }">
              {{ path.badge }}
            </div>
          </div>

          <div class="skill-flow">
            <div v-for="(node, idx) in path.flow" :key="idx" class="sf-node-container">
              <div 
                class="sf-node" 
                :class="{ 'sf-highlight': node.highlight }"
                :style="node.highlight ? { '--sf-color': node.color, '--sf-bg': node.bg } : {}"
              >
                <div class="sf-node-name">{{ node.name }}</div>
                <div class="sf-node-role">{{ node.role }}</div>
              </div>
              <div v-if="idx < path.flow.length - 1" class="sf-arrow">{{ node.arrow || '→' }}</div>
            </div>
          </div>

          <div class="skill-use-cases">
            <div v-for="useCase in path.useCases" :key="useCase.title" class="suc-card">
              <div class="suc-chart-type">{{ useCase.title }}</div>
              <div class="suc-desc">{{ useCase.desc }}</div>
              <div class="suc-tags">
                <span class="suc-tag" v-for="tag in useCase.tags" :key="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 决策树 -->
        <div class="skill-decision-tree">
          <div class="decision-title">
            <span style="font-size:20px">🎯</span> Skill 路径选择决策树
          </div>
          <div class="decision-grid">
            <div v-for="decision in skillDecisions" :key="decision.label" class="decision-card">
              <div class="decision-label" :style="{ color: decision.color }">{{ decision.label }}</div>
              <div class="decision-text" v-html="decision.text"></div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="infovis-footer">
      信息可视化图表分类体系 · 语义维度 × 技术实现维度 × Skill 工程路径 · 持续更新中
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { semanticCategories } from '../data/semantic-categories'
import { techTiers } from '../data/tech-tiers'
import { skillPaths, skillDecisions } from '../data/skill-paths'

const activeDimension = ref('semantic')

function switchDimension(dim) {
  activeDimension.value = dim
}
</script>

<style scoped>
.infovis-taxonomy {
  font-family: 'Inter', 'Noto Sans SC', sans-serif;
  background: oklch(97% 0.008 260);
  color: oklch(22% 0.02 260);
}

/* Hero */
.hero {
  background: oklch(18% 0.04 260);
  padding: 64px 48px 56px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 70% 50%,
    oklch(45% 0.12 260 / 0.3) 0%, transparent 70%);
}
.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}
.hero h1 {
  font-family: 'Noto Serif SC', serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  color: oklch(96% 0.01 260);
  letter-spacing: -0.5px;
  line-height: 1.25;
}
.hero p {
  margin-top: 12px;
  font-size: 15px;
  color: oklch(72% 0.03 260);
  font-weight: 300;
}
.hero-meta {
  display: flex;
  gap: 24px;
  margin-top: 28px;
  flex-wrap: wrap;
}
.hero-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.hero-stat strong {
  font-size: 28px;
  font-weight: 600;
  color: oklch(92% 0.06 260);
}
.hero-stat span {
  font-size: 12px;
  color: oklch(60% 0.04 260);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Nav */
.nav {
  background: white;
  border-bottom: 1px solid oklch(88% 0.015 260);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 48px;
}
.dim-switcher {
  display: flex;
  gap: 8px;
}
.dim-btn {
  padding: 8px 20px;
  border: 1px solid oklch(88% 0.015 260);
  background: white;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: oklch(50% 0.02 260);
  cursor: pointer;
  transition: all 0.2s;
}
.dim-btn:hover {
  background: oklch(95% 0.01 260);
}
.dim-btn.active {
  background: oklch(52% 0.18 260);
  color: white;
  border-color: oklch(52% 0.18 260);
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 48px 64px;
}

/* Category */
.category {
  margin-bottom: 48px;
}
.category-header {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  align-items: flex-start;
}
.category-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
}
.category-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}
.category-meta {
  display: flex;
  gap: 12px;
  font-size: 13px;
  color: oklch(50% 0.02 260);
}
.category-en {
  font-weight: 500;
}

/* Subcategory */
.subcategory {
  margin-bottom: 36px;
}
.subcat-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: oklch(68% 0.015 260);
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.subcat-title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: oklch(88% 0.015 260);
}

/* Chart Grid */
.chart-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
.chart-card {
  background: white;
  border: 1px solid oklch(88% 0.015 260);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s;
}
.chart-card:hover {
  box-shadow: 0 8px 24px oklch(0% 0 0 / 0.08);
  transform: translateY(-2px);
}
.chart-preview {
  width: 100%;
  height: 140px;
  background: oklch(95% 0.01 260);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}
.chart-info {
  padding: 12px 14px;
  border-top: 1px solid oklch(88% 0.015 260);
}
.chart-name {
  font-size: 13px;
  font-weight: 600;
}
.chart-name-en {
  font-size: 11px;
  color: oklch(68% 0.015 260);
  margin-top: 2px;
}
.chart-use {
  font-size: 11px;
  color: oklch(50% 0.02 260);
  margin-top: 6px;
  line-height: 1.5;
}
.chart-tag {
  display: inline-flex;
  margin-top: 8px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 500;
}

/* Tech View */
.tech-intro, .skill-intro {
  font-size: 14px;
  color: oklch(50% 0.02 260);
  margin-bottom: 32px;
  padding: 16px;
  background: oklch(95% 0.01 260);
  border-radius: 8px;
}

.tech-tier {
  margin-bottom: 40px;
}
.tier-header {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: flex-start;
}
.tier-badge {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.tier-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
}
.tier-desc {
  font-size: 13px;
  color: oklch(50% 0.02 260);
}
.tech-chart-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}
.tech-chart-card {
  background: white;
  border: 1px solid oklch(88% 0.015 260);
  border-radius: 8px;
  padding: 14px;
}
.tcc-name {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}
.tcc-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.tcc-tag {
  font-size: 10px;
  padding: 2px 6px;
  background: oklch(95% 0.01 260);
  border-radius: 3px;
  color: oklch(50% 0.02 260);
}

/* Skill Path */
.skill-path {
  margin-bottom: 32px;
}
.skill-path-header {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid;
  margin-bottom: 20px;
}
.skill-path-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.skill-path-title {
  font-family: 'Noto Serif SC', serif;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}
.skill-path-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: oklch(68% 0.015 260);
}
.skill-path-desc {
  font-size: 13px;
  color: oklch(50% 0.02 260);
  margin-top: 5px;
}
.skill-path-badge {
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  align-self: flex-start;
  border: 1px solid;
}

/* Skill Flow */
.skill-flow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.sf-node-container {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sf-node {
  background: white;
  border: 1px solid oklch(88% 0.015 260);
  border-radius: 8px;
  padding: 12px 16px;
  min-width: 120px;
}
.sf-node.sf-highlight {
  background: var(--sf-bg);
  border-color: var(--sf-color);
}
.sf-node-name {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 2px;
}
.sf-node-role {
  font-size: 11px;
  color: oklch(50% 0.02 260);
}
.sf-arrow {
  color: oklch(68% 0.015 260);
  font-size: 13px;
}

/* Use Cases */
.skill-use-cases {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.suc-card {
  background: white;
  border: 1px solid oklch(88% 0.015 260);
  border-radius: 8px;
  padding: 14px;
}
.suc-chart-type {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
}
.suc-desc {
  font-size: 12px;
  color: oklch(50% 0.02 260);
  line-height: 1.5;
  margin-bottom: 8px;
}
.suc-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.suc-tag {
  font-size: 10px;
  padding: 2px 6px;
  background: oklch(95% 0.01 260);
  border-radius: 3px;
}

/* Decision Tree */
.skill-decision-tree {
  background: oklch(18% 0.04 260);
  border-radius: 16px;
  padding: 28px 32px;
  margin-top: 32px;
}
.decision-title {
  font-size: 14px;
  font-weight: 700;
  color: oklch(90% 0.04 260);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.decision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.decision-card {
  background: oklch(28% 0.04 260);
  border-radius: 8px;
  padding: 14px;
}
.decision-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.decision-text {
  font-size: 12px;
  color: oklch(70% 0.03 260);
  line-height: 1.7;
}
.decision-text strong {
  color: oklch(80% 0.06 260);
}

/* Footer */
.infovis-footer {
  background: oklch(18% 0.04 260);
  padding: 32px 48px;
  text-align: center;
  font-size: 13px;
  color: oklch(55% 0.03 260);
}
</style>
