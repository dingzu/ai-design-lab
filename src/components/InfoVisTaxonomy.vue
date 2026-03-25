<template>
  <div class="infovis-taxonomy">
    <!-- Hero -->
    <div class="hero">
      <div class="hero-inner">
        <h1>信息可视化图表分类体系</h1>
        <p>语义维度 × 技术实现维度 × Skill 工程路径 × 质量评测维度</p>
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
          <div class="hero-stat">
            <strong>11</strong>
            <span>评测标准</span>
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
          <button 
            class="dim-btn dim-btn-eval" 
            :class="{ active: activeDimension === 'eval' }"
            @click="switchDimension('eval')"
          >
            🎯 质量评测
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
      <!-- 质量评测维度 -->
      <div v-show="activeDimension === 'eval'" class="view-eval">
        <p class="eval-intro">
          质量评测维度 — 11 种图表类型，每类提供 L1→L5 分级标准，含 SVG 示例图、评分准则与差异对比
        </p>

        <!-- Nav tags -->
        <div class="eval-tag-nav">
          <a
            v-for="chart in evalCharts.filter(c => c.id !== 'ev-std')"
            :key="chart.id"
            :href="'#vue-' + chart.id"
            class="eval-tag-link"
          >{{ chart.icon }} {{ chart.title.split('·')[0].trim() }}</a>
        </div>

        <!-- Chart sections -->
        <div
          v-for="chart in evalCharts"
          :key="chart.id"
          :id="'vue-' + chart.id"
          class="eval-section"
        >
          <!-- Universal standards (no levels) -->
          <template v-if="chart.levels.length === 0">
            <div class="eval-section-hdr">
              <div class="eval-icon">{{ chart.icon }}</div>
              <div>
                <div class="eval-title">{{ chart.title }}</div>
                <div class="eval-desc">{{ chart.desc }}</div>
              </div>
            </div>
            <div class="eval-std-note">请参阅原始评测标准文档</div>
          </template>

          <!-- Chart with levels -->
          <template v-else>
            <div class="eval-section-hdr">
              <div class="eval-icon">{{ chart.icon }}</div>
              <div>
                <div class="eval-title">{{ chart.title }}</div>
                <div class="eval-desc">{{ chart.desc }}</div>
              </div>
            </div>
            <div class="level-ladder">
              <div
                v-for="lv in chart.levels"
                :key="lv.lv"
                class="level-card"
                :class="lv.lv"
              >
                <div class="lc-top">
                  <span class="lc-badge" :class="lv.lv">{{ lv.lv.toUpperCase() }}</span>
                  <span class="lc-score">{{ lv.score }}</span>
                </div>
                <div class="lc-preview" v-html="lv.svg"></div>
                <div class="lc-body">
                  <div class="lc-title">{{ lv.title }}</div>
                  <ul class="lc-criteria">
                    <li v-for="c in lv.criteria" :key="c">{{ c }}</li>
                  </ul>
                  <div class="lc-delta">{{ lv.delta }}</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="infovis-footer">
      信息可视化图表分类体系 · 语义维度 × 技术实现维度 × Skill 工程路径 × 质量评测维度 · 持续更新中
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

const evalCharts = [
  {
    id: 'ev-bar',
    icon: `📊`,
    title: `柱状图 · Bar Chart`,
    desc: `最常用的比较类图表 — 从原始数据到品牌级输出的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始可用`, criteria: [`无标题、无坐标轴标签`, `单色填充，无数值标注`, `无网格线，无图例`, `柱间距随意，视觉混乱`], delta: `问题：受众不知道看什么，数据无法自述`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 无网格线，无标注，原始柱子 -->
            <rect x="15" y="70" width="22" height="52" fill="#6b7280"/>
            <rect x="45" y="40" width="22" height="82" fill="#6b7280"/>
            <rect x="75" y="55" width="22" height="67" fill="#6b7280"/>
            <rect x="105" y="28" width="22" height="94" fill="#6b7280"/>
            <rect x="135" y="48" width="22" height="74" fill="#6b7280"/>
            <line x1="8" y1="122" x2="165" y2="122" stroke="#9ca3af" stroke-width="1"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有标题和坐标轴`, `统一配色（单色系）`, `基础网格线`, `无数值标注，无趋势说明`], delta: `比 L1 多：坐标轴 + 标题 + 统一色彩`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 有坐标轴，有基础网格 -->
            <line x1="24" y1="10" x2="24" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="24" y1="112" x2="155" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <!-- grid -->
            <line x1="24" y1="85" x2="155" y2="85" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="24" y1="58" x2="155" y2="58" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="24" y1="31" x2="155" y2="31" stroke="#e5e7eb" stroke-width="0.8"/>
            <!-- 柱子 -->
            <rect x="30" y="72" width="18" height="40" fill="#3b82f6"/>
            <rect x="56" y="45" width="18" height="67" fill="#3b82f6"/>
            <rect x="82" y="58" width="18" height="54" fill="#3b82f6"/>
            <rect x="108" y="32" width="18" height="80" fill="#3b82f6"/>
            <rect x="134" y="50" width="18" height="62" fill="#3b82f6"/>
            <!-- y轴标签 -->
            <text x="20" y="89" text-anchor="end" font-size="7" fill="#9ca3af">50</text>
            <text x="20" y="62" text-anchor="end" font-size="7" fill="#9ca3af">100</text>
            <text x="20" y="35" text-anchor="end" font-size="7" fill="#9ca3af">150</text>
            <!-- 标题 -->
            <text x="90" y="8" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">销售数据</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`数值直接标注在柱顶`, `最大值高亮区分`, `圆角柱，视觉轻量`, `x轴分类标签完整`], delta: `比 L2 多：数值标注 + 关键值高亮 + 圆角`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="24" y1="10" x2="24" y2="112" stroke="#d1d5db" stroke-width="1"/>
            <line x1="24" y1="112" x2="155" y2="112" stroke="#d1d5db" stroke-width="1"/>
            <line x1="24" y1="85" x2="155" y2="85" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="24" y1="58" x2="155" y2="58" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="24" y1="31" x2="155" y2="31" stroke="#f3f4f6" stroke-width="1"/>
            <!-- 高亮最大值 -->
            <rect x="30" y="72" width="18" height="40" fill="#93c5fd" rx="2"/>
            <rect x="56" y="45" width="18" height="67" fill="#93c5fd" rx="2"/>
            <rect x="82" y="58" width="18" height="54" fill="#93c5fd" rx="2"/>
            <rect x="108" y="30" width="18" height="82" fill="#2563eb" rx="2"/><!-- 最大值高亮 -->
            <rect x="134" y="50" width="18" height="62" fill="#93c5fd" rx="2"/>
            <!-- 数值标注 -->
            <text x="39" y="69" text-anchor="middle" font-size="7" fill="#6b7280">82</text>
            <text x="65" y="42" text-anchor="middle" font-size="7" fill="#6b7280">138</text>
            <text x="91" y="55" text-anchor="middle" font-size="7" fill="#6b7280">110</text>
            <text x="117" y="27" text-anchor="middle" font-size="7" fill="#2563eb" font-weight="700">164</text>
            <text x="143" y="47" text-anchor="middle" font-size="7" fill="#6b7280">124</text>
            <!-- x轴标签 -->
            <text x="39" y="121" text-anchor="middle" font-size="7" fill="#9ca3af">Q1</text>
            <text x="65" y="121" text-anchor="middle" font-size="7" fill="#9ca3af">Q2</text>
            <text x="91" y="121" text-anchor="middle" font-size="7" fill="#9ca3af">Q3</text>
            <text x="117" y="121" text-anchor="middle" font-size="7" fill="#9ca3af">Q4</text>
            <text x="143" y="121" text-anchor="middle" font-size="7" fill="#9ca3af">Q5</text>
            <text x="90" y="8" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">季度销售额（万元）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`渐变色增加立体感`, `关键值用强调色+箭头`, `副标题直接传递洞察`, `x轴关键项同步高亮`], delta: `比 L3 多：渐变 + 洞察副标题 + 强调色系统`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="barGrad4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#1d4ed8"/>
              </linearGradient>
              <linearGradient id="barGradHi4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#d97706"/>
              </linearGradient>
            </defs>
            <!-- 细网格 -->
            <line x1="28" y1="90" x2="155" y2="90" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="28" y1="68" x2="155" y2="68" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="28" y1="46" x2="155" y2="46" stroke="#f3f4f6" stroke-width="1"/>
            <line x1="28" y1="24" x2="155" y2="24" stroke="#f3f4f6" stroke-width="1"/>
            <!-- 底线 -->
            <line x1="28" y1="112" x2="155" y2="112" stroke="#e5e7eb" stroke-width="1"/>
            <!-- 柱子 -->
            <rect x="32" y="78" width="16" height="34" fill="url(#barGrad4)" rx="3"/>
            <rect x="56" y="52" width="16" height="60" fill="url(#barGrad4)" rx="3"/>
            <rect x="80" y="64" width="16" height="48" fill="url(#barGrad4)" rx="3"/>
            <rect x="104" y="28" width="16" height="84" fill="url(#barGradHi4)" rx="3"/>
            <rect x="128" y="55" width="16" height="57" fill="url(#barGrad4)" rx="3"/>
            <!-- 数值标注 -->
            <text x="40" y="74" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">82</text>
            <text x="64" y="48" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">138</text>
            <text x="88" y="60" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">110</text>
            <text x="112" y="24" text-anchor="middle" font-size="7.5" fill="#d97706" font-weight="700">164↑</text>
            <text x="136" y="51" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">124</text>
            <!-- x轴 -->
            <text x="40" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Q1</text>
            <text x="64" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Q2</text>
            <text x="88" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Q3</text>
            <text x="112" y="122" text-anchor="middle" font-size="7" fill="#d97706" font-weight="600">Q4★</text>
            <text x="136" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Q5</text>
            <!-- 标题+副标题 -->
            <text x="90" y="9" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">季度销售额</text>
            <text x="90" y="19" text-anchor="middle" font-size="7" fill="#6b7280">Q4 创历史新高，环比增长 +33%</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`目标参考线提供对比锚点`, `Callout 气泡精确标注关键值`, `趋势虚线暗示增长路径`, `发光滤镜强化视觉焦点`, `标题+副标题完整叙事`], delta: `比 L4 多：目标线 + Callout + 趋势线 + 发光特效`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="barGrad5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6366f1"/>
                <stop offset="100%" stop-color="#4338ca"/>
              </linearGradient>
              <linearGradient id="barGradHi5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#f59e0b"/>
                <stop offset="100%" stop-color="#d97706"/>
              </linearGradient>
              <filter id="glow5">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- 极细网格 -->
            <line x1="28" y1="92" x2="152" y2="92" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="28" y1="72" x2="152" y2="72" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="28" y1="52" x2="152" y2="52" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="28" y1="32" x2="152" y2="32" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="28" y1="110" x2="152" y2="110" stroke="#e5e7eb" stroke-width="0.8"/>
            <!-- 目标线 -->
            <line x1="28" y1="44" x2="152" y2="44" stroke="#6366f1" stroke-width="1" stroke-dasharray="4,3" opacity="0.5"/>
            <text x="153" y="47" font-size="6.5" fill="#6366f1" opacity="0.7">目标</text>
            <!-- 柱子 -->
            <rect x="32" y="80" width="15" height="30" fill="url(#barGrad5)" rx="3" opacity="0.85"/>
            <rect x="55" y="55" width="15" height="55" fill="url(#barGrad5)" rx="3" opacity="0.85"/>
            <rect x="78" y="66" width="15" height="44" fill="url(#barGrad5)" rx="3" opacity="0.85"/>
            <rect x="101" y="26" width="15" height="84" fill="url(#barGradHi5)" rx="3" filter="url(#glow5)"/>
            <rect x="124" y="57" width="15" height="53" fill="url(#barGrad5)" rx="3" opacity="0.85"/>
            <!-- 趋势箭头连线 -->
            <polyline points="39,79 62,54 85,65 108,25" stroke="#6366f1" stroke-width="1" fill="none" stroke-dasharray="2,2" opacity="0.45"/>
            <!-- 数值 -->
            <text x="39" y="77" text-anchor="middle" font-size="7" fill="#4338ca" font-weight="700">82</text>
            <text x="62" y="52" text-anchor="middle" font-size="7" fill="#4338ca" font-weight="700">138</text>
            <text x="85" y="63" text-anchor="middle" font-size="7" fill="#4338ca" font-weight="700">110</text>
            <!-- Q4 callout -->
            <rect x="93" y="13" width="32" height="12" fill="#fef3c7" rx="3" stroke="#f59e0b" stroke-width="0.8"/>
            <text x="109" y="22" text-anchor="middle" font-size="7" fill="#d97706" font-weight="700">164 +33%</text>
            <line x1="109" y1="25" x2="109" y2="26" stroke="#f59e0b" stroke-width="0.8"/>
            <text x="132" y="54" text-anchor="middle" font-size="7" fill="#4338ca" font-weight="700">124</text>
            <!-- x轴 -->
            <text x="39" y="120" text-anchor="middle" font-size="7" fill="#9ca3af">Q1</text>
            <text x="62" y="120" text-anchor="middle" font-size="7" fill="#9ca3af">Q2</text>
            <text x="85" y="120" text-anchor="middle" font-size="7" fill="#9ca3af">Q3</text>
            <text x="108" y="120" text-anchor="middle" font-size="7.5" fill="#d97706" font-weight="700">Q4</text>
            <text x="132" y="120" text-anchor="middle" font-size="7" fill="#9ca3af">Q5</text>
            <!-- 标题组 -->
            <text x="85" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">季度销售额</text>
            <text x="85" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">Q4 创历史峰值，连续两季超目标线</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-line',
    icon: `📈`,
    title: `折线图 · Line Chart`,
    desc: `趋势类图表标杆 — 时序数据从原始连线到叙事级输出的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始连线`, criteria: [`无标题、无坐标轴`, `单色细线，无数据点`, `无时间标注`], delta: `问题：看不出时间范围和数值范围`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <polyline points="15,95 40,65 65,80 90,40 115,55 140,30" stroke="#6b7280" stroke-width="1.5" fill="none"/>
            <line x1="10" y1="110" x2="150" y2="110" stroke="#9ca3af" stroke-width="1"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有坐标轴和时间标签`, `统一配色折线`, `无数据点标记`], delta: `比 L1 多：坐标轴 + 时间轴 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="10" x2="22" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="31" x2="152" y2="31" stroke="#e5e7eb" stroke-width="0.8"/>
            <polyline points="32,95 57,72 82,82 107,48 132,60" stroke="#3b82f6" stroke-width="2" fill="none"/>
            <text x="32" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Jan</text>
            <text x="57" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Feb</text>
            <text x="82" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Mar</text>
            <text x="107" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Apr</text>
            <text x="132" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">May</text>
            <text x="87" y="8" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">月度趋势</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`数据点可见，数值标注`, `面积填充增强趋势感`, `最高点高亮强调`], delta: `比 L2 多：数据点 + 面积填充 + 数值标注`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="10" x2="22" y2="112" stroke="#d1d5db" stroke-width="0.8"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#d1d5db" stroke-width="0.8"/>
            <line x1="22" y1="82" x2="152" y2="82" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="52" x2="152" y2="52" stroke="#f3f4f6" stroke-width="0.8"/>
            <!-- 面积填充 -->
            <path d="M32,95 L57,72 L82,82 L107,48 L132,60 L132,112 L32,112 Z" fill="#93c5fd" opacity="0.25"/>
            <polyline points="32,95 57,72 82,82 107,48 132,60" stroke="#2563eb" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
            <!-- 数据点 -->
            <circle cx="32" cy="95" r="3.5" fill="white" stroke="#2563eb" stroke-width="1.5"/>
            <circle cx="57" cy="72" r="3.5" fill="white" stroke="#2563eb" stroke-width="1.5"/>
            <circle cx="82" cy="82" r="3.5" fill="white" stroke="#2563eb" stroke-width="1.5"/>
            <circle cx="107" cy="48" r="3.5" fill="white" stroke="#2563eb" stroke-width="1.5"/>
            <circle cx="132" cy="60" r="3.5" fill="white" stroke="#2563eb" stroke-width="1.5"/>
            <!-- 数值 -->
            <text x="32" y="91" text-anchor="middle" font-size="7" fill="#374151">320</text>
            <text x="57" y="68" text-anchor="middle" font-size="7" fill="#374151">485</text>
            <text x="82" y="78" text-anchor="middle" font-size="7" fill="#374151">410</text>
            <text x="107" y="44" text-anchor="middle" font-size="7" fill="#1d4ed8" font-weight="700">630</text>
            <text x="132" y="56" text-anchor="middle" font-size="7" fill="#374151">560</text>
            <text x="32" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Jan</text>
            <text x="57" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Feb</text>
            <text x="82" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Mar</text>
            <text x="107" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Apr</text>
            <text x="132" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">May</text>
            <text x="87" y="8" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">月度用户量（万人）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`平滑贝塞尔曲线`, `峰值 Callout 标注`, `渐变面积填充`, `副标题传递核心洞察`], delta: `比 L3 多：平滑曲线 + Callout + 洞察副标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineArea4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6366f1" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <line x1="22" y1="82" x2="152" y2="82" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="55" x2="152" y2="55" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="28" x2="152" y2="28" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#e5e7eb" stroke-width="0.8"/>
            <!-- 面积 -->
            <path d="M32,93 L57,70 L82,80 L107,44 L132,58 L132,112 L32,112 Z" fill="url(#lineArea4)"/>
            <!-- 平滑曲线 -->
            <path d="M32,93 C44,80 50,72 57,70 C64,68 75,82 82,80 C89,78 100,46 107,44 C114,42 125,60 132,58" stroke="#6366f1" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
            <!-- 数据点 -->
            <circle cx="32" cy="93" r="3" fill="#6366f1"/>
            <circle cx="57" cy="70" r="3" fill="#6366f1"/>
            <circle cx="82" cy="80" r="3" fill="#6366f1"/>
            <circle cx="107" cy="44" r="5" fill="#f59e0b" stroke="white" stroke-width="1.5"/>
            <circle cx="132" cy="58" r="3" fill="#6366f1"/>
            <!-- callout -->
            <rect x="93" y="30" width="30" height="13" fill="#fef3c7" rx="3" stroke="#f59e0b" stroke-width="0.8"/>
            <text x="108" y="39.5" text-anchor="middle" font-size="7" fill="#d97706" font-weight="700">最高峰 630</text>
            <line x1="107" y1="43" x2="107" y2="44" stroke="#f59e0b" stroke-width="0.8"/>
            <text x="32" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Jan</text>
            <text x="57" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Feb</text>
            <text x="82" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">Mar</text>
            <text x="107" y="122" text-anchor="middle" font-size="7" fill="#d97706" font-weight="600">Apr</text>
            <text x="132" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">May</text>
            <text x="87" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">月度用户量</text>
            <text x="87" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">4月达峰，同比增长 +97%</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`同比对比线（去年数据）`, `目标区间背景高亮`, `峰值发光 + Callout`, `YoY 增幅直接标注`, `完整数据叙事`], delta: `比 L4 多：对比线 + 目标区间 + YoY 标注`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineArea5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
              </linearGradient>
              <filter id="glowLine">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- 区间背景 -->
            <rect x="96" y="10" width="48" height="100" fill="#fef9ff" rx="2" opacity="0.5"/>
            <text x="120" y="116" text-anchor="middle" font-size="6" fill="#a78bfa">目标区间</text>
            <!-- 网格 -->
            <line x1="22" y1="80" x2="152" y2="80" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="52" x2="152" y2="52" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="24" x2="152" y2="24" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="108" x2="152" y2="108" stroke="#e5e7eb" stroke-width="0.8"/>
            <!-- 面积 -->
            <path d="M32,92 C44,78 50,70 57,68 C64,66 75,78 82,76 C89,74 100,42 107,40 C114,38 125,56 132,54 L132,108 L32,108 Z" fill="url(#lineArea5)"/>
            <!-- 主线（发光） -->
            <path d="M32,92 C44,78 50,70 57,68 C64,66 75,78 82,76 C89,74 100,42 107,40 C114,38 125,56 132,54" stroke="#8b5cf6" stroke-width="2.5" fill="none" stroke-linecap="round" filter="url(#glowLine)"/>
            <!-- 比较线（虚线） -->
            <path d="M32,100 C44,92 57,88 82,84 C100,80 120,75 132,72" stroke="#d1d5db" stroke-width="1.5" fill="none" stroke-dasharray="3,3" stroke-linecap="round"/>
            <text x="135" y="70" font-size="6" fill="#9ca3af">去年</text>
            <!-- 数据点 -->
            <circle cx="32" cy="92" r="2.5" fill="#8b5cf6"/>
            <circle cx="57" cy="68" r="2.5" fill="#8b5cf6"/>
            <circle cx="82" cy="76" r="2.5" fill="#8b5cf6"/>
            <circle cx="107" cy="40" r="5" fill="#f59e0b" stroke="white" stroke-width="1.5" filter="url(#glowLine)"/>
            <circle cx="132" cy="54" r="2.5" fill="#8b5cf6"/>
            <!-- callout -->
            <rect x="91" y="25" width="36" height="14" fill="#fef3c7" rx="3" stroke="#f59e0b" stroke-width="1"/>
            <text x="109" y="35" text-anchor="middle" font-size="7.5" fill="#d97706" font-weight="700">↑ 630  YoY+97%</text>
            <line x1="107" y1="39" x2="107" y2="40" stroke="#f59e0b" stroke-width="1"/>
            <!-- x轴 -->
            <text x="32" y="118" text-anchor="middle" font-size="7" fill="#9ca3af">Jan</text>
            <text x="57" y="118" text-anchor="middle" font-size="7" fill="#9ca3af">Feb</text>
            <text x="82" y="118" text-anchor="middle" font-size="7" fill="#9ca3af">Mar</text>
            <text x="107" y="118" text-anchor="middle" font-size="7.5" fill="#d97706" font-weight="600">Apr</text>
            <text x="132" y="118" text-anchor="middle" font-size="7" fill="#9ca3af">May</text>
            <!-- 标题 -->
            <text x="72" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">月度用户量</text>
            <text x="72" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">与去年同期对比 · 目标区间高亮</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-pie',
    icon: `🥧`,
    title: `饼图 · Pie / Donut Chart`,
    desc: `构成类图表代表 — 占比展示从割裂到清晰传达的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始切割`, criteria: [`无标签、无数值`, `灰度配色无区分度`, `无图例说明`], delta: `问题：无法辨识各部分代表什么`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 简单4等份饼，无标注 -->
            <path d="M80,65 L80,20 A45,45 0 0,1 125,65 Z" fill="#6b7280"/>
            <path d="M80,65 L125,65 A45,45 0 0,1 80,110 Z" fill="#9ca3af"/>
            <path d="M80,65 L80,110 A45,45 0 0,1 35,65 Z" fill="#374151"/>
            <path d="M80,65 L35,65 A45,45 0 0,1 80,20 Z" fill="#d1d5db"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有颜色区分和图例`, `有标题`, `无百分比数值`], delta: `比 L1 多：配色 + 图例 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <path d="M80,65 L80,22 A43,43 0 0,1 123,65 Z" fill="#3b82f6"/>
            <path d="M80,65 L123,65 A43,43 0 0,1 63.5,104 Z" fill="#60a5fa"/>
            <path d="M80,65 L63.5,104 A43,43 0 0,1 37,65 Z" fill="#93c5fd"/>
            <path d="M80,65 L37,65 A43,43 0 0,1 80,22 Z" fill="#bfdbfe"/>
            <!-- 图例 -->
            <rect x="12" y="110" width="7" height="7" fill="#3b82f6" rx="1"/>
            <text x="22" y="117" font-size="7" fill="#6b7280">A类</text>
            <rect x="48" y="110" width="7" height="7" fill="#60a5fa" rx="1"/>
            <text x="58" y="117" font-size="7" fill="#6b7280">B类</text>
            <rect x="84" y="110" width="7" height="7" fill="#93c5fd" rx="1"/>
            <text x="94" y="117" font-size="7" fill="#6b7280">C类</text>
            <rect x="120" y="110" width="7" height="7" fill="#bfdbfe" rx="1"/>
            <text x="130" y="117" font-size="7" fill="#6b7280">D类</text>
            <text x="80" y="10" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">占比分布</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`环形图（Donut）减少填充感`, `中心显示汇总数据`, `各区块直接标注百分比`], delta: `比 L2 多：环形 + 中心汇总 + 百分比`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 环形图 + 百分比标注 -->
            <path d="M80,62 L80,22 A40,40 0 0,1 118,62 Z" fill="#3b82f6"/>
            <path d="M80,62 L118,62 A40,40 0 0,1 65,98 Z" fill="#10b981"/>
            <path d="M80,62 L65,98 A40,40 0 0,1 43,42 Z" fill="#f59e0b"/>
            <path d="M80,62 L43,42 A40,40 0 0,1 80,22 Z" fill="#8b5cf6"/>
            <!-- 中心挖空 -->
            <circle cx="80" cy="62" r="20" fill="white"/>
            <!-- 中心文字 -->
            <text x="80" y="60" text-anchor="middle" font-size="11" fill="#111827" font-weight="700">100%</text>
            <text x="80" y="70" text-anchor="middle" font-size="7" fill="#9ca3af">总计</text>
            <!-- 标注线 -->
            <text x="106" y="30" font-size="7.5" fill="#3b82f6" font-weight="600">40%</text>
            <text x="112" y="80" font-size="7.5" fill="#10b981" font-weight="600">28%</text>
            <text x="28" y="90" font-size="7.5" fill="#f59e0b" font-weight="600">20%</text>
            <text x="33" y="38" font-size="7.5" fill="#8b5cf6" font-weight="600">12%</text>
            <text x="80" y="8" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">用户来源占比</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`最大扇区突出偏移`, `阴影强化视觉焦点`, `中心显示最大值项`, `引导线标注分类名+值`], delta: `比 L3 多：扇区突出 + 引导线 + 阴影`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 突出最大扇区 + 引导线标注 -->
            <!-- 最大扇区偏移 -->
            <path d="M83,58 L83,17 A42,42 0 0,1 123,60 Z" fill="#3b82f6" filter="drop-shadow(0 3px 6px rgba(59,130,246,0.4))"/>
            <path d="M80,62 L120,64 A40,40 0 0,1 64,100 Z" fill="#10b981"/>
            <path d="M80,62 L64,100 A40,40 0 0,1 41,44 Z" fill="#f59e0b"/>
            <path d="M80,62 L41,44 A40,40 0 0,1 83,17 Z" fill="#8b5cf6"/>
            <!-- 中心挖空 -->
            <circle cx="80" cy="62" r="20" fill="white"/>
            <text x="80" y="60" text-anchor="middle" font-size="9" fill="#3b82f6" font-weight="700">40%</text>
            <text x="80" y="70" text-anchor="middle" font-size="6.5" fill="#9ca3af">最大来源</text>
            <!-- 引导线标注 -->
            <line x1="107" y1="32" x2="118" y2="22" stroke="#3b82f6" stroke-width="0.8"/>
            <text x="120" y="20" font-size="7" fill="#3b82f6" font-weight="700">直接 40%</text>
            <line x1="110" y1="80" x2="128" y2="88" stroke="#10b981" stroke-width="0.8"/>
            <text x="130" y="87" font-size="7" fill="#10b981" font-weight="700">搜索 28%</text>
            <text x="14" y="88" font-size="7" fill="#f59e0b" font-weight="700">推荐 20%</text>
            <text x="22" y="40" font-size="7" fill="#8b5cf6" font-weight="700">社媒 12%</text>
            <text x="80" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">用户来源占比</text>
            <text x="80" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">直接访问占主导</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`中心显示主项 + 环比变化`, `发光效果突出最大扇区`, `气泡式引导线精细标注`, `完整洞察副标题`], delta: `比 L4 多：气泡引导线 + 环比变化 + 发光`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glowPie">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <!-- 最大扇区偏移+发光 -->
            <path d="M84,57 L84,16 A42,42 0 0,1 124,59 Z" fill="#3b82f6" filter="url(#glowPie)"/>
            <path d="M80,62 L121,64 A40,40 0 0,1 64,100 Z" fill="#10b981"/>
            <path d="M80,62 L64,100 A40,40 0 0,1 41,45 Z" fill="#f59e0b"/>
            <path d="M80,62 L41,45 A40,40 0 0,1 84,16 Z" fill="#8b5cf6"/>
            <!-- 中心挖空 -->
            <circle cx="80" cy="62" r="22" fill="white"/>
            <text x="80" y="59" text-anchor="middle" font-size="10" fill="#3b82f6" font-weight="800">40%</text>
            <text x="80" y="68" text-anchor="middle" font-size="6" fill="#3b82f6" font-weight="600">直接访问</text>
            <text x="80" y="75" text-anchor="middle" font-size="5.5" fill="#9ca3af">↑+5.2% vs 上期</text>
            <!-- 精细引导线 -->
            <line x1="109" y1="30" x2="125" y2="18" stroke="#3b82f6" stroke-width="0.8" stroke-dasharray="2,2"/>
            <rect x="126" y="13" width="28" height="12" fill="#eff6ff" rx="2" stroke="#3b82f6" stroke-width="0.5"/>
            <text x="140" y="21.5" text-anchor="middle" font-size="6.5" fill="#1d4ed8" font-weight="700">直接 40%</text>

            <line x1="112" y1="80" x2="128" y2="90" stroke="#10b981" stroke-width="0.8" stroke-dasharray="2,2"/>
            <rect x="128" y="85" width="28" height="12" fill="#ecfdf5" rx="2" stroke="#10b981" stroke-width="0.5"/>
            <text x="142" y="93.5" text-anchor="middle" font-size="6.5" fill="#065f46" font-weight="700">搜索 28%</text>

            <text x="12" y="90" font-size="6.5" fill="#d97706" font-weight="700">推荐 20%</text>
            <text x="18" y="40" font-size="6.5" fill="#7c3aed" font-weight="700">社媒 12%</text>

            <text x="72" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">用户来源占比</text>
            <text x="72" y="16" text-anchor="middle" font-size="6" fill="#6b7280">直接访问创近6期新高</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-scatter',
    icon: `🔵`,
    title: `散点图 · Scatter Plot`,
    desc: `分布/相关性图表 — 数据点从无序堆叠到洞察显现的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始散点`, criteria: [`无轴线无标签`, `全部相同大小和颜色`, `看不出任何规律`], delta: `问题：不知道X/Y轴是什么含义`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="90" r="3" fill="#6b7280"/><circle cx="50" cy="70" r="3" fill="#6b7280"/>
            <circle cx="65" cy="85" r="3" fill="#6b7280"/><circle cx="80" cy="55" r="3" fill="#6b7280"/>
            <circle cx="95" cy="65" r="3" fill="#6b7280"/><circle cx="110" cy="40" r="3" fill="#6b7280"/>
            <circle cx="125" cy="50" r="3" fill="#6b7280"/><circle cx="40" cy="100" r="3" fill="#6b7280"/>
            <circle cx="70" cy="45" r="3" fill="#6b7280"/><circle cx="100" cy="75" r="3" fill="#6b7280"/>
            <line x1="10" y1="115" x2="148" y2="115" stroke="#9ca3af" stroke-width="1"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有坐标轴和轴标签`, `统一颜色和大小`, `无趋势线`], delta: `比 L1 多：坐标轴 + 轴标签 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="10" x2="22" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <circle cx="38" cy="95" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="55" cy="78" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="68" cy="88" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="82" cy="62" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="96" cy="72" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="110" cy="48" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="45" cy="105" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <circle cx="75" cy="52" r="3.5" fill="#3b82f6" opacity="0.7"/>
            <text x="87" y="8" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">价格 vs 销量</text>
            <text x="87" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">价格（元）</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`趋势线显示相关方向`, `相关系数 r 值标注`, `颜色区分不同分组`], delta: `比 L2 多：趋势线 + r值 + 分组颜色`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="10" x2="22" y2="112" stroke="#d1d5db" stroke-width="1"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#d1d5db" stroke-width="1"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="32" y1="105" x2="140" y2="42" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>
            <circle cx="38" cy="98" r="4" fill="#3b82f6" opacity="0.75"/>
            <circle cx="55" cy="82" r="4" fill="#3b82f6" opacity="0.75"/>
            <circle cx="68" cy="90" r="4" fill="#10b981" opacity="0.75"/>
            <circle cx="82" cy="65" r="4" fill="#3b82f6" opacity="0.75"/>
            <circle cx="96" cy="74" r="4" fill="#10b981" opacity="0.75"/>
            <circle cx="110" cy="50" r="4" fill="#10b981" opacity="0.75"/>
            <circle cx="45" cy="105" r="4" fill="#f59e0b" opacity="0.75"/>
            <circle cx="75" cy="55" r="4" fill="#3b82f6" opacity="0.75"/>
            <text x="87" y="8" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">价格 vs 销量</text>
            <text x="145" y="38" font-size="7" fill="#6366f1">r=−0.78</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`气泡大小编码第三维度`, `置信区间阴影`, `离群点自动标红`], delta: `比 L3 多：气泡大小 + 置信区间 + 离群点`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="112" x2="152" y2="112" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#f3f4f6" stroke-width="0.8"/>
            <path d="M30,108 C60,96 100,68 142,40 L142,50 C100,78 60,104 30,116 Z" fill="#6366f1" opacity="0.08"/>
            <line x1="30" y1="108" x2="142" y2="44" stroke="#6366f1" stroke-width="1.5" opacity="0.7"/>
            <circle cx="38" cy="98" r="5" fill="#3b82f6" opacity="0.6"/>
            <circle cx="55" cy="80" r="7" fill="#3b82f6" opacity="0.6"/>
            <circle cx="70" cy="88" r="4" fill="#10b981" opacity="0.6"/>
            <circle cx="84" cy="64" r="9" fill="#3b82f6" opacity="0.6"/>
            <circle cx="98" cy="72" r="5" fill="#10b981" opacity="0.6"/>
            <circle cx="112" cy="48" r="6" fill="#f59e0b" opacity="0.7"/>
            <circle cx="45" cy="32" r="5.5" fill="#ef4444" opacity="0.8"/>
            <text x="54" y="30" font-size="6.5" fill="#ef4444" font-weight="600">异常点</text>
            <text x="87" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">价格-销量关系</text>
            <text x="87" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">气泡大小=库存量，红点=异常</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`四象限分区 + 区间命名`, `机会区域颜色高亮`, `异常点气泡行动指引`, `发光突出关键数据集群`], delta: `比 L4 多：四象限 + 行动指引 + 机会区高亮`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="glowDot"><feGaussianBlur stdDeviation="2.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <line x1="87" y1="15" x2="87" y2="112" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="22" y1="63" x2="152" y2="63" stroke="#e5e7eb" stroke-width="1" stroke-dasharray="3,3"/>
            <text x="56" y="20" text-anchor="middle" font-size="6" fill="#d1d5db">低价低量</text>
            <text x="120" y="20" text-anchor="middle" font-size="6" fill="#10b981" font-weight="600">低价高量</text>
            <text x="56" y="108" text-anchor="middle" font-size="6" fill="#6b7280">高价低量</text>
            <text x="120" y="108" text-anchor="middle" font-size="6" fill="#f59e0b" font-weight="600">高价高量</text>
            <path d="M30,106 C60,94 100,66 142,38 L142,50 C100,76 60,102 30,116 Z" fill="#6366f1" opacity="0.07"/>
            <line x1="30" y1="106" x2="142" y2="42" stroke="#6366f1" stroke-width="1.2" opacity="0.6"/>
            <circle cx="38" cy="96" r="4.5" fill="#6b7280" opacity="0.55"/>
            <circle cx="55" cy="78" r="6" fill="#6b7280" opacity="0.55"/>
            <circle cx="68" cy="86" r="4" fill="#6b7280" opacity="0.55"/>
            <circle cx="98" cy="48" r="7" fill="#10b981" opacity="0.75" filter="url(#glowDot)"/>
            <circle cx="115" cy="40" r="5" fill="#10b981" opacity="0.75"/>
            <circle cx="44" cy="30" r="5" fill="#ef4444" opacity="0.85" filter="url(#glowDot)"/>
            <rect x="50" y="22" width="32" height="12" fill="#fef2f2" rx="2" stroke="#ef4444" stroke-width="0.7"/>
            <text x="66" y="30.5" text-anchor="middle" font-size="6" fill="#b91c1c" font-weight="700">异常：检查库存</text>
            <text x="148" y="38" text-anchor="end" font-size="7" fill="#6366f1" font-weight="600">r=−0.78</text>
            <text x="82" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">价格-销量关系</text>
            <text x="82" y="16" text-anchor="middle" font-size="6" fill="#6b7280">四象限 · 气泡=库存 · 绿区=机会区域</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-area',
    icon: `🏔️`,
    title: `面积图 · Area Chart`,
    desc: `趋势+量感双表达 — 从粗糙填充到多系列叠加叙事的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始填充`, criteria: [`灰色填充，无边框线`, `无坐标轴和标注`, `无法判断数值范围`], delta: `问题：只有形状，无任何信息传递`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,100 L35,75 L60,85 L85,55 L110,65 L135,40 L135,110 L10,110 Z" fill="#9ca3af" opacity="0.6"/>
            <line x1="10" y1="110" x2="148" y2="110" stroke="#6b7280" stroke-width="1"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有坐标轴和填充`, `统一蓝色系`, `无数据点和数值`], delta: `比 L1 多：坐标轴 + 描边线 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="22" y1="10" x2="22" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#9ca3af" stroke-width="1.2"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#e5e7eb" stroke-width="0.8"/>
            <path d="M22,100 L47,78 L72,88 L97,62 L122,72 L147,50 L147,112 L22,112 Z" fill="#3b82f6" opacity="0.4"/>
            <polyline points="22,100 47,78 72,88 97,62 122,72 147,50" stroke="#3b82f6" stroke-width="2" fill="none"/>
            <text x="85" y="8" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">月度流量</text>
            <text x="85" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">月份</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`渐变填充增强量感`, `数据点可见，峰值高亮`, `分类轴标签完整`], delta: `比 L2 多：渐变填充 + 数据点 + 峰值标注`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="areaGrad3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05"/>
              </linearGradient>
            </defs>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="88" x2="152" y2="88" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="64" x2="152" y2="64" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="40" x2="152" y2="40" stroke="#f3f4f6" stroke-width="0.8"/>
            <path d="M22,100 L47,76 L72,86 L97,58 L122,70 L147,46 L147,112 L22,112 Z" fill="url(#areaGrad3)"/>
            <polyline points="22,100 47,76 72,86 97,58 122,70 147,46" stroke="#2563eb" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
            <circle cx="22" cy="100" r="3" fill="#2563eb"/>
            <circle cx="47" cy="76" r="3" fill="#2563eb"/>
            <circle cx="72" cy="86" r="3" fill="#2563eb"/>
            <circle cx="97" cy="58" r="4.5" fill="#1d4ed8"/>
            <circle cx="122" cy="70" r="3" fill="#2563eb"/>
            <circle cx="147" cy="46" r="3" fill="#2563eb"/>
            <text x="97" y="54" text-anchor="middle" font-size="7" fill="#1d4ed8" font-weight="700">峰值</text>
            <text x="22" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">1月</text>
            <text x="72" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">3月</text>
            <text x="122" y="122" text-anchor="middle" font-size="7" fill="#9ca3af">5月</text>
            <text x="85" y="8" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">月度活跃用户（万）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`多系列对比（叠加/分层）`, `图例内嵌，颜色系统化`, `双维度同框对比`], delta: `比 L3 多：多系列 + 图例 + 来源对比`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="areaA4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6366f1" stop-opacity="0.45"/>
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
              </linearGradient>
              <linearGradient id="areaB4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#f3f4f6" stroke-width="0.8"/>
            <!-- 系列B -->
            <path d="M22,105 L57,90 L92,95 L127,75 L152,82 L152,112 L22,112 Z" fill="url(#areaB4)"/>
            <polyline points="22,105 57,90 92,95 127,75 152,82" stroke="#10b981" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
            <!-- 系列A -->
            <path d="M22,98 L57,74 L92,84 L127,54 L152,66 L152,112 L22,112 Z" fill="url(#areaA4)"/>
            <polyline points="22,98 57,74 92,84 127,54 152,66" stroke="#6366f1" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
            <!-- 图例 -->
            <rect x="28" y="18" width="8" height="4" fill="#6366f1" rx="1"/>
            <text x="38" y="22" font-size="7" fill="#374151">自然流量</text>
            <rect x="80" y="18" width="8" height="4" fill="#10b981" rx="1"/>
            <text x="90" y="22" font-size="7" fill="#374151">付费流量</text>
            <text x="85" y="10" text-anchor="middle" font-size="7.5" fill="#111827" font-weight="700">流量来源趋势对比</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`事件标注区间（活动期背景）`, `峰值 Callout 精确定位`, `多系列发光强调主线`, `YoY 涨幅直接标注`], delta: `比 L4 多：事件标注 + Callout + 涨幅 + 发光`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="areaA5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#6366f1" stop-opacity="0.5"/>
                <stop offset="100%" stop-color="#6366f1" stop-opacity="0.02"/>
              </linearGradient>
              <linearGradient id="areaB5" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#10b981" stop-opacity="0.38"/>
                <stop offset="100%" stop-color="#10b981" stop-opacity="0.02"/>
              </linearGradient>
              <filter id="gArea"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <!-- 事件标注背景 -->
            <rect x="110" y="14" width="36" height="98" fill="#fef9ff" rx="3" opacity="0.5"/>
            <text x="128" y="120" text-anchor="middle" font-size="5.5" fill="#a78bfa">活动期</text>
            <line x1="22" y1="112" x2="152" y2="112" stroke="#e5e7eb" stroke-width="0.8"/>
            <line x1="22" y1="85" x2="152" y2="85" stroke="#f3f4f6" stroke-width="0.8"/>
            <line x1="22" y1="58" x2="152" y2="58" stroke="#f3f4f6" stroke-width="0.8"/>
            <path d="M22,105 L57,90 L92,95 L127,70 L152,78 L152,112 L22,112 Z" fill="url(#areaB5)"/>
            <polyline points="22,105 57,90 92,95 127,70 152,78" stroke="#10b981" stroke-width="1.8" fill="none" stroke-linejoin="round"/>
            <path d="M22,96 L57,72 L92,82 L127,48 L152,62 L152,112 L22,112 Z" fill="url(#areaA5)"/>
            <polyline points="22,96 57,72 92,82 127,48 152,62" stroke="#6366f1" stroke-width="2.5" fill="none" stroke-linejoin="round" filter="url(#gArea)"/>
            <!-- 峰值 callout -->
            <circle cx="127" cy="48" r="4.5" fill="#f59e0b" stroke="white" stroke-width="1.5"/>
            <rect x="104" y="33" width="30" height="13" fill="#fef3c7" rx="3" stroke="#f59e0b" stroke-width="0.8"/>
            <text x="119" y="42" text-anchor="middle" font-size="6.5" fill="#d97706" font-weight="700">↑ +68%</text>
            <!-- 图例+标题 -->
            <rect x="26" y="16" width="7" height="4" fill="#6366f1" rx="1"/>
            <text x="35" y="20.5" font-size="6.5" fill="#374151">自然</text>
            <rect x="70" y="16" width="7" height="4" fill="#10b981" rx="1"/>
            <text x="79" y="20.5" font-size="6.5" fill="#374151">付费</text>
            <text x="78" y="8" text-anchor="middle" font-size="8.5" fill="#111827" font-weight="700">流量来源趋势</text>
            <text x="78" y="15.5" text-anchor="middle" font-size="6" fill="#6b7280">活动期流量飙升 +68%</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-heatmap',
    icon: `🌡️`,
    title: `热力图 · Heatmap`,
    desc: `二维矩阵分布图 — 从色块堆叠到模式洞察可视化的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始色块`, criteria: [`灰度色板，无语义`, `无行列标签`, `无数值标注`], delta: `问题：无法知道行列代表什么`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 7x5 随机灰度色块 -->
            <rect x="12" y="20" width="16" height="14" fill="#d1d5db"/><rect x="30" y="20" width="16" height="14" fill="#9ca3af"/>
            <rect x="48" y="20" width="16" height="14" fill="#6b7280"/><rect x="66" y="20" width="16" height="14" fill="#d1d5db"/>
            <rect x="84" y="20" width="16" height="14" fill="#374151"/><rect x="102" y="20" width="16" height="14" fill="#9ca3af"/>
            <rect x="120" y="20" width="16" height="14" fill="#6b7280"/><rect x="138" y="20" width="16" height="14" fill="#d1d5db"/>
            <rect x="12" y="36" width="16" height="14" fill="#6b7280"/><rect x="30" y="36" width="16" height="14" fill="#374151"/>
            <rect x="48" y="36" width="16" height="14" fill="#9ca3af"/><rect x="66" y="36" width="16" height="14" fill="#6b7280"/>
            <rect x="84" y="36" width="16" height="14" fill="#d1d5db"/><rect x="102" y="36" width="16" height="14" fill="#374151"/>
            <rect x="120" y="36" width="16" height="14" fill="#9ca3af"/><rect x="138" y="36" width="16" height="14" fill="#6b7280"/>
            <rect x="12" y="52" width="16" height="14" fill="#9ca3af"/><rect x="30" y="52" width="16" height="14" fill="#d1d5db"/>
            <rect x="48" y="52" width="16" height="14" fill="#374151"/><rect x="66" y="52" width="16" height="14" fill="#9ca3af"/>
            <rect x="84" y="52" width="16" height="14" fill="#6b7280"/><rect x="102" y="52" width="16" height="14" fill="#d1d5db"/>
            <rect x="120" y="52" width="16" height="14" fill="#374151"/><rect x="138" y="52" width="16" height="14" fill="#9ca3af"/>
            <rect x="12" y="68" width="16" height="14" fill="#374151"/><rect x="30" y="68" width="16" height="14" fill="#6b7280"/>
            <rect x="48" y="68" width="16" height="14" fill="#d1d5db"/><rect x="66" y="68" width="16" height="14" fill="#374151"/>
            <rect x="84" y="68" width="16" height="14" fill="#9ca3af"/><rect x="102" y="68" width="16" height="14" fill="#6b7280"/>
            <rect x="120" y="68" width="16" height="14" fill="#d1d5db"/><rect x="138" y="68" width="16" height="14" fill="#374151"/>
            <rect x="12" y="84" width="16" height="14" fill="#d1d5db"/><rect x="30" y="84" width="16" height="14" fill="#9ca3af"/>
            <rect x="48" y="84" width="16" height="14" fill="#6b7280"/><rect x="66" y="84" width="16" height="14" fill="#d1d5db"/>
            <rect x="84" y="84" width="16" height="14" fill="#374151"/><rect x="102" y="84" width="16" height="14" fill="#9ca3af"/>
            <rect x="120" y="84" width="16" height="14" fill="#6b7280"/><rect x="138" y="84" width="16" height="14" fill="#d1d5db"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`有行列标签（时间/星期）`, `统一蓝色深浅编码`, `无数值，无图例`], delta: `比 L1 多：轴标签 + 配色系统 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 带轴标签 5x5 蓝色系 -->
            <text x="30" y="16" text-anchor="middle" font-size="6" fill="#6b7280">Mon</text>
            <text x="50" y="16" text-anchor="middle" font-size="6" fill="#6b7280">Tue</text>
            <text x="70" y="16" text-anchor="middle" font-size="6" fill="#6b7280">Wed</text>
            <text x="90" y="16" text-anchor="middle" font-size="6" fill="#6b7280">Thu</text>
            <text x="110" y="16" text-anchor="middle" font-size="6" fill="#6b7280">Fri</text>
            <text x="10" y="28" text-anchor="end" font-size="6" fill="#6b7280">0h</text>
            <text x="10" y="44" text-anchor="end" font-size="6" fill="#6b7280">6h</text>
            <text x="10" y="60" text-anchor="end" font-size="6" fill="#6b7280">12h</text>
            <text x="10" y="76" text-anchor="end" font-size="6" fill="#6b7280">18h</text>
            <text x="10" y="92" text-anchor="end" font-size="6" fill="#6b7280">24h</text>
            <!-- 色块 -->
            <rect x="14" y="20" width="18" height="14" fill="#bfdbfe" rx="1"/><rect x="34" y="20" width="18" height="14" fill="#93c5fd" rx="1"/>
            <rect x="54" y="20" width="18" height="14" fill="#60a5fa" rx="1"/><rect x="74" y="20" width="18" height="14" fill="#bfdbfe" rx="1"/>
            <rect x="94" y="20" width="18" height="14" fill="#3b82f6" rx="1"/>
            <rect x="14" y="36" width="18" height="14" fill="#93c5fd" rx="1"/><rect x="34" y="36" width="18" height="14" fill="#1d4ed8" rx="1"/>
            <rect x="54" y="36" width="18" height="14" fill="#60a5fa" rx="1"/><rect x="74" y="36" width="18" height="14" fill="#93c5fd" rx="1"/>
            <rect x="94" y="36" width="18" height="14" fill="#bfdbfe" rx="1"/>
            <rect x="14" y="52" width="18" height="14" fill="#3b82f6" rx="1"/><rect x="34" y="52" width="18" height="14" fill="#93c5fd" rx="1"/>
            <rect x="54" y="52" width="18" height="14" fill="#1d4ed8" rx="1"/><rect x="74" y="52" width="18" height="14" fill="#3b82f6" rx="1"/>
            <rect x="94" y="52" width="18" height="14" fill="#60a5fa" rx="1"/>
            <rect x="14" y="68" width="18" height="14" fill="#60a5fa" rx="1"/><rect x="34" y="68" width="18" height="14" fill="#3b82f6" rx="1"/>
            <rect x="54" y="68" width="18" height="14" fill="#93c5fd" rx="1"/><rect x="74" y="68" width="18" height="14" fill="#bfdbfe" rx="1"/>
            <rect x="94" y="68" width="18" height="14" fill="#1d4ed8" rx="1"/>
            <text x="80" y="10" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">访问热力分布</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`单元格内嵌数值`, `图例色阶说明`, `高值深色，低值浅色`], delta: `比 L2 多：数值标注 + 图例 + 圆角优化`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <text x="30" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Mon</text>
            <text x="50" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Tue</text>
            <text x="70" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Wed</text>
            <text x="90" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Thu</text>
            <text x="110" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Fri</text>
            <text x="12" y="25" text-anchor="end" font-size="5.5" fill="#6b7280">0h</text>
            <text x="12" y="40" text-anchor="end" font-size="5.5" fill="#6b7280">6h</text>
            <text x="12" y="55" text-anchor="end" font-size="5.5" fill="#6b7280">12h</text>
            <text x="12" y="70" text-anchor="end" font-size="5.5" fill="#6b7280">18h</text>
            <!-- 带数值色块 -->
            <rect x="15" y="18" width="17" height="13" fill="#dbeafe" rx="2"/><text x="23" y="27" text-anchor="middle" font-size="5.5" fill="#1e40af">12</text>
            <rect x="34" y="18" width="17" height="13" fill="#93c5fd" rx="2"/><text x="42" y="27" text-anchor="middle" font-size="5.5" fill="#1e3a8a">38</text>
            <rect x="53" y="18" width="17" height="13" fill="#60a5fa" rx="2"/><text x="61" y="27" text-anchor="middle" font-size="5.5" fill="white">55</text>
            <rect x="72" y="18" width="17" height="13" fill="#dbeafe" rx="2"/><text x="80" y="27" text-anchor="middle" font-size="5.5" fill="#1e40af">18</text>
            <rect x="91" y="18" width="17" height="13" fill="#2563eb" rx="2"/><text x="99" y="27" text-anchor="middle" font-size="5.5" fill="white">82</text>
            <rect x="15" y="33" width="17" height="13" fill="#93c5fd" rx="2"/><text x="23" y="42" text-anchor="middle" font-size="5.5" fill="white">40</text>
            <rect x="34" y="33" width="17" height="13" fill="#1d4ed8" rx="2"/><text x="42" y="42" text-anchor="middle" font-size="5.5" fill="white">95</text>
            <rect x="53" y="33" width="17" height="13" fill="#60a5fa" rx="2"/><text x="61" y="42" text-anchor="middle" font-size="5.5" fill="white">62</text>
            <rect x="72" y="33" width="17" height="13" fill="#93c5fd" rx="2"/><text x="80" y="42" text-anchor="middle" font-size="5.5" fill="white">44</text>
            <rect x="91" y="33" width="17" height="13" fill="#dbeafe" rx="2"/><text x="99" y="42" text-anchor="middle" font-size="5.5" fill="#1e40af">22</text>
            <rect x="15" y="48" width="17" height="13" fill="#2563eb" rx="2"/><text x="23" y="57" text-anchor="middle" font-size="5.5" fill="white">88</text>
            <rect x="34" y="48" width="17" height="13" fill="#60a5fa" rx="2"/><text x="42" y="57" text-anchor="middle" font-size="5.5" fill="white">60</text>
            <rect x="53" y="48" width="17" height="13" fill="#1d4ed8" rx="2"/><text x="61" y="57" text-anchor="middle" font-size="5.5" fill="white">98</text>
            <rect x="72" y="48" width="17" height="13" fill="#2563eb" rx="2"/><text x="80" y="57" text-anchor="middle" font-size="5.5" fill="white">85</text>
            <rect x="91" y="48" width="17" height="13" fill="#60a5fa" rx="2"/><text x="99" y="57" text-anchor="middle" font-size="5.5" fill="white">58</text>
            <rect x="15" y="63" width="17" height="13" fill="#60a5fa" rx="2"/><text x="23" y="72" text-anchor="middle" font-size="5.5" fill="white">52</text>
            <rect x="34" y="63" width="17" height="13" fill="#2563eb" rx="2"/><text x="42" y="72" text-anchor="middle" font-size="5.5" fill="white">78</text>
            <rect x="53" y="63" width="17" height="13" fill="#93c5fd" rx="2"/><text x="61" y="72" text-anchor="middle" font-size="5.5" fill="white">42</text>
            <rect x="72" y="63" width="17" height="13" fill="#dbeafe" rx="2"/><text x="80" y="72" text-anchor="middle" font-size="5.5" fill="#1e40af">15</text>
            <rect x="91" y="63" width="17" height="13" fill="#1d4ed8" rx="2"/><text x="99" y="72" text-anchor="middle" font-size="5.5" fill="white">92</text>
            <!-- 图例 -->
            <rect x="15" y="84" width="10" height="5" fill="#dbeafe" rx="1"/>
            <rect x="27" y="84" width="10" height="5" fill="#93c5fd" rx="1"/>
            <rect x="39" y="84" width="10" height="5" fill="#60a5fa" rx="1"/>
            <rect x="51" y="84" width="10" height="5" fill="#2563eb" rx="1"/>
            <rect x="63" y="84" width="10" height="5" fill="#1d4ed8" rx="1"/>
            <text x="14" y="97" font-size="6" fill="#9ca3af">低</text>
            <text x="73" y="97" font-size="6" fill="#9ca3af">高</text>
            <text x="80" y="8" text-anchor="middle" font-size="7.5" fill="#1f2937" font-weight="700">每日访问热力（次/时）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`冷暖色系强化峰谷对比`, `最高值单元格标注「峰」`, `副标题解释色阶含义`], delta: `比 L3 多：冷暖色系 + 峰值标记 + 语义说明`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <text x="30" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Mon</text>
            <text x="50" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Tue</text>
            <text x="70" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Wed</text>
            <text x="90" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Thu</text>
            <text x="110" y="14" text-anchor="middle" font-size="5.5" fill="#6b7280">Fri</text>
            <!-- 用橙红渐变表示高值 -->
            <rect x="15" y="18" width="17" height="13" fill="#fef3c7" rx="2"/>
            <rect x="34" y="18" width="17" height="13" fill="#fde68a" rx="2"/>
            <rect x="53" y="18" width="17" height="13" fill="#f59e0b" rx="2"/>
            <rect x="72" y="18" width="17" height="13" fill="#fef3c7" rx="2"/>
            <rect x="91" y="18" width="17" height="13" fill="#f97316" rx="2"/>
            <rect x="15" y="33" width="17" height="13" fill="#fde68a" rx="2"/>
            <rect x="34" y="33" width="17" height="13" fill="#dc2626" rx="2"/><text x="42" y="42.5" text-anchor="middle" font-size="5.5" fill="white" font-weight="700">峰</text>
            <rect x="53" y="33" width="17" height="13" fill="#f59e0b" rx="2"/>
            <rect x="72" y="33" width="17" height="13" fill="#fde68a" rx="2"/>
            <rect x="91" y="33" width="17" height="13" fill="#fef3c7" rx="2"/>
            <rect x="15" y="48" width="17" height="13" fill="#f97316" rx="2"/>
            <rect x="34" y="48" width="17" height="13" fill="#f59e0b" rx="2"/>
            <rect x="53" y="48" width="17" height="13" fill="#dc2626" rx="2"/><text x="61" y="57.5" text-anchor="middle" font-size="5.5" fill="white" font-weight="700">峰</text>
            <rect x="72" y="48" width="17" height="13" fill="#f97316" rx="2"/>
            <rect x="91" y="48" width="17" height="13" fill="#f59e0b" rx="2"/>
            <rect x="15" y="63" width="17" height="13" fill="#f59e0b" rx="2"/>
            <rect x="34" y="63" width="17" height="13" fill="#f97316" rx="2"/>
            <rect x="53" y="63" width="17" height="13" fill="#fde68a" rx="2"/>
            <rect x="72" y="63" width="17" height="13" fill="#fef3c7" rx="2"/>
            <rect x="91" y="63" width="17" height="13" fill="#dc2626" rx="2"/><text x="99" y="72.5" text-anchor="middle" font-size="5.5" fill="white" font-weight="700">峰</text>
            <!-- 图例 + 标题 -->
            <text x="85" y="8" text-anchor="middle" font-size="7.5" fill="#111827" font-weight="700">高峰时段热力分布</text>
            <text x="85" y="95" text-anchor="middle" font-size="6" fill="#6b7280">红色=访问峰值，黄色=次高，白色=低谷</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`双峰发光强调关键时段`, `行动建议气泡（重点投放）`, `副标题直接给出策略洞察`, `完整色阶图例`], delta: `比 L4 多：发光双峰 + 行动标注 + 策略副标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="gHeat"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <text x="85" y="8" text-anchor="middle" font-size="7.5" fill="#111827" font-weight="700">运营峰值时段热力图</text>
            <text x="85" y="15" text-anchor="middle" font-size="6" fill="#6b7280">周二 6h 和周三 12h 为双峰，建议重点投放</text>
            <text x="30" y="24" text-anchor="middle" font-size="5.5" fill="#6b7280">Mon</text>
            <text x="50" y="24" text-anchor="middle" font-size="5.5" fill="#6b7280">Tue</text>
            <text x="70" y="24" text-anchor="middle" font-size="5.5" fill="#6b7280">Wed</text>
            <text x="90" y="24" text-anchor="middle" font-size="5.5" fill="#6b7280">Thu</text>
            <text x="110" y="24" text-anchor="middle" font-size="5.5" fill="#6b7280">Fri</text>
            <text x="12" y="34" text-anchor="end" font-size="5.5" fill="#6b7280">0h</text>
            <text x="12" y="49" text-anchor="end" font-size="5.5" fill="#6b7280">6h</text>
            <text x="12" y="64" text-anchor="end" font-size="5.5" fill="#6b7280">12h</text>
            <text x="12" y="79" text-anchor="end" font-size="5.5" fill="#6b7280">18h</text>
            <!-- 色块 -->
            <rect x="15" y="27" width="16" height="13" fill="#fef3c7" rx="2"/>
            <rect x="33" y="27" width="16" height="13" fill="#fde68a" rx="2"/>
            <rect x="51" y="27" width="16" height="13" fill="#f59e0b" rx="2"/>
            <rect x="69" y="27" width="16" height="13" fill="#fef3c7" rx="2"/>
            <rect x="87" y="27" width="16" height="13" fill="#f97316" rx="2"/>
            <rect x="15" y="42" width="16" height="13" fill="#fde68a" rx="2"/>
            <!-- 双峰高亮发光 -->
            <rect x="33" y="42" width="16" height="13" fill="#dc2626" rx="2" filter="url(#gHeat)"/>
            <rect x="51" y="42" width="16" height="13" fill="#f59e0b" rx="2"/>
            <rect x="69" y="42" width="16" height="13" fill="#fde68a" rx="2"/>
            <rect x="87" y="42" width="16" height="13" fill="#fef3c7" rx="2"/>
            <rect x="15" y="57" width="16" height="13" fill="#f97316" rx="2"/>
            <rect x="33" y="57" width="16" height="13" fill="#f59e0b" rx="2"/>
            <rect x="51" y="57" width="16" height="13" fill="#dc2626" rx="2" filter="url(#gHeat)"/>
            <rect x="69" y="57" width="16" height="13" fill="#f97316" rx="2"/>
            <rect x="87" y="57" width="16" height="13" fill="#f59e0b" rx="2"/>
            <rect x="15" y="72" width="16" height="13" fill="#f59e0b" rx="2"/>
            <rect x="33" y="72" width="16" height="13" fill="#f97316" rx="2"/>
            <rect x="51" y="72" width="16" height="13" fill="#fde68a" rx="2"/>
            <rect x="69" y="72" width="16" height="13" fill="#fef3c7" rx="2"/>
            <rect x="87" y="72" width="16" height="13" fill="#f97316" rx="2"/>
            <!-- 峰值标注 -->
            <text x="41" y="50.5" text-anchor="middle" font-size="5" fill="white" font-weight="700">100</text>
            <text x="59" y="65.5" text-anchor="middle" font-size="5" fill="white" font-weight="700">98</text>
            <!-- 行动建议 -->
            <rect x="106" y="42" width="48" height="13" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.7"/>
            <text x="130" y="50.5" text-anchor="middle" font-size="5.5" fill="#b91c1c" font-weight="700">重点投放时段</text>
            <line x1="105" y1="48" x2="106" y2="48" stroke="#fca5a5" stroke-width="0.8"/>
            <rect x="106" y="57" width="48" height="13" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.7"/>
            <text x="130" y="65.5" text-anchor="middle" font-size="5.5" fill="#b91c1c" font-weight="700">重点投放时段</text>
            <!-- 色阶图例 -->
            <rect x="15" y="91" width="8" height="6" fill="#fef3c7" rx="1"/>
            <rect x="25" y="91" width="8" height="6" fill="#fde68a" rx="1"/>
            <rect x="35" y="91" width="8" height="6" fill="#f59e0b" rx="1"/>
            <rect x="45" y="91" width="8" height="6" fill="#f97316" rx="1"/>
            <rect x="55" y="91" width="8" height="6" fill="#dc2626" rx="1"/>
            <text x="14" y="104" font-size="5.5" fill="#9ca3af">低</text>
            <text x="63" y="104" font-size="5.5" fill="#9ca3af">高</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-sankey',
    icon: `🌊`,
    title: `桑基图 · Sankey Diagram`,
    desc: `流动与转化类图表 — 从原始线段到路径故事的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始线段`, criteria: [`等宽连线，无流量比例`, `无节点标签`, `无颜色区分`], delta: `问题：看不出任何量的差异`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 原始：等宽直线，无标注 -->
            <line x1="20" y1="40" x2="80" y2="40" stroke="#6b7280" stroke-width="8"/>
            <line x1="20" y1="70" x2="80" y2="70" stroke="#6b7280" stroke-width="8"/>
            <line x1="20" y1="100" x2="80" y2="100" stroke="#6b7280" stroke-width="8"/>
            <line x1="80" y1="55" x2="140" y2="55" stroke="#9ca3af" stroke-width="8"/>
            <line x1="80" y1="85" x2="140" y2="85" stroke="#9ca3af" stroke-width="8"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`流量宽度按比例`, `有节点标签`, `单色系，无百分比`], delta: `比 L1 多：比例宽度 + 节点标签`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 按流量宽度不等 -->
            <rect x="14" y="28" width="8" height="30" fill="#3b82f6" rx="2"/>
            <rect x="14" y="65" width="8" height="18" fill="#3b82f6" rx="2"/>
            <rect x="14" y="88" width="8" height="12" fill="#3b82f6" rx="2"/>
            <path d="M22,28 Q52,28 52,35 L52,58 Q52,65 82,65" fill="none" stroke="#3b82f6" stroke-width="20" opacity="0.3"/>
            <path d="M22,65 Q52,65 52,72 L52,78 Q52,85 82,82" fill="none" stroke="#3b82f6" stroke-width="10" opacity="0.3"/>
            <path d="M22,88 Q52,88 52,90 L52,92 Q52,94 82,94" fill="none" stroke="#3b82f6" stroke-width="6" opacity="0.3"/>
            <rect x="82" y="56" width="8" height="22" fill="#60a5fa" rx="2"/>
            <rect x="82" y="82" width="8" height="16" fill="#93c5fd" rx="2"/>
            <text x="8" y="47" text-anchor="end" font-size="6" fill="#6b7280">A</text>
            <text x="8" y="77" text-anchor="end" font-size="6" fill="#6b7280">B</text>
            <text x="8" y="97" text-anchor="end" font-size="6" fill="#6b7280">C</text>
            <text x="94" y="70" font-size="6" fill="#6b7280">X</text>
            <text x="94" y="92" font-size="6" fill="#6b7280">Y</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`颜色按来源继承`, `流量百分比标注`, `节点+流标签完整`], delta: `比 L2 多：颜色继承 + 百分比 + 完整标签`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 来源节点 -->
            <rect x="10" y="20" width="10" height="35" fill="#6366f1" rx="2"/>
            <rect x="10" y="60" width="10" height="22" fill="#10b981" rx="2"/>
            <rect x="10" y="86" width="10" height="14" fill="#f59e0b" rx="2"/>
            <!-- 流（按颜色继承） -->
            <path d="M20,20 Q55,20 55,28 L55,50 Q55,55 80,55" fill="#6366f1" opacity="0.3" stroke="none"/>
            <path d="M20,60 Q55,60 55,65 L55,78 Q55,82 80,80" fill="#10b981" opacity="0.3" stroke="none"/>
            <path d="M20,86 Q55,86 55,88 L55,92 Q55,94 80,92" fill="#f59e0b" opacity="0.3" stroke="none"/>
            <!-- 目标节点 -->
            <rect x="80" y="48" width="10" height="22" fill="#6366f1" rx="2"/>
            <rect x="80" y="74" width="10" height="22" fill="#10b981" rx="2"/>
            <!-- 标签 -->
            <text x="8" y="41" text-anchor="end" font-size="6.5" fill="#4f46e5">直播</text>
            <text x="8" y="73" text-anchor="end" font-size="6.5" fill="#059669">搜索</text>
            <text x="8" y="96" text-anchor="end" font-size="6.5" fill="#d97706">推荐</text>
            <text x="92" y="61" font-size="6.5" fill="#374151">加购</text>
            <text x="92" y="87" font-size="6.5" fill="#374151">浏览</text>
            <!-- 百分比 -->
            <text x="15" y="16" font-size="6" fill="#6366f1" font-weight="600">52%</text>
            <text x="15" y="57" font-size="6" fill="#10b981" font-weight="600">32%</text>
            <text x="15" y="83" font-size="6" fill="#f59e0b" font-weight="600">16%</text>
            <text x="75" y="8" text-anchor="middle" font-size="7.5" fill="#1f2937" font-weight="700">流量来源 → 用户行为</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`多层级（来源→行为→结果）`, `颜色贯穿全路径`, `洞察副标题`], delta: `比 L3 多：三层路径 + 洞察结论 + 颜色贯穿`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 三层桑基 -->
            <rect x="8" y="18" width="9" height="32" fill="#6366f1" rx="2"/>
            <rect x="8" y="54" width="9" height="20" fill="#10b981" rx="2"/>
            <rect x="8" y="78" width="9" height="13" fill="#f59e0b" rx="2"/>
            <!-- 中间层 -->
            <path d="M17,18 Q45,18 45,25 L45,44 Q45,50 66,50" fill="#6366f1" opacity="0.28" stroke="none"/>
            <path d="M17,54 Q45,54 45,58 L45,70 Q45,76 66,74" fill="#10b981" opacity="0.28" stroke="none"/>
            <path d="M17,78 Q45,78 45,80 L45,85 Q45,88 66,87" fill="#f59e0b" opacity="0.28" stroke="none"/>
            <rect x="66" y="44" width="9" height="20" fill="#6366f1" rx="2"/>
            <rect x="66" y="68" width="9" height="24" fill="#ec4899" rx="2"/>
            <!-- 终点层 -->
            <path d="M75,44 Q102,44 102,50 L102,58 Q102,62 118,62" fill="#6366f1" opacity="0.28"/>
            <path d="M75,68 Q102,68 102,72 L102,78 Q102,80 118,80" fill="#ec4899" opacity="0.28"/>
            <rect x="118" y="58" width="9" height="14" fill="#6366f1" rx="2"/>
            <rect x="118" y="75" width="9" height="20" fill="#ec4899" rx="2"/>
            <!-- 标签 -->
            <text x="5" y="37" text-anchor="end" font-size="6" fill="#4f46e5">直播</text>
            <text x="5" y="66" text-anchor="end" font-size="6" fill="#059669">搜索</text>
            <text x="5" y="87" text-anchor="end" font-size="6" fill="#d97706">推荐</text>
            <text x="76" y="42" font-size="5.5" fill="#4f46e5">加购</text>
            <text x="76" y="65" font-size="5.5" fill="#be185d">收藏</text>
            <text x="129" y="67" font-size="5.5" fill="#374151">下单</text>
            <text x="129" y="82" font-size="5.5" fill="#374151">流失</text>
            <!-- 标题+转化率 -->
            <text x="70" y="8" text-anchor="middle" font-size="7.5" fill="#111827" font-weight="700">用户购买转化漏斗</text>
            <text x="70" y="15" text-anchor="middle" font-size="6" fill="#6b7280">直播来源转化率最高 → 重点运营</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`最优路径发光高亮`, `流失节点精准标注`, `各层转化率标注`, `其余路径灰化降噪`], delta: `比 L4 多：路径发光 + 流失标注 + 降噪灰化`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="gSank"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <!-- 高亮最优路径 -->
            <rect x="8" y="18" width="9" height="32" fill="#6366f1" rx="2" filter="url(#gSank)"/>
            <rect x="8" y="54" width="9" height="20" fill="#10b981" rx="2"/>
            <rect x="8" y="78" width="9" height="13" fill="#f59e0b" rx="2"/>
            <!-- 最优路径高亮（直播→加购→下单） -->
            <path d="M17,18 Q45,18 45,25 L45,44 Q45,50 66,50" fill="#6366f1" opacity="0.45" stroke="none"/>
            <path d="M17,54 Q45,54 45,58 L45,70 Q45,76 66,74" fill="#10b981" opacity="0.22" stroke="none"/>
            <path d="M17,78 Q45,78 45,80 L45,85 Q45,88 66,87" fill="#f59e0b" opacity="0.22" stroke="none"/>
            <rect x="66" y="44" width="9" height="20" fill="#6366f1" rx="2" filter="url(#gSank)"/>
            <rect x="66" y="68" width="9" height="24" fill="#ec4899" rx="2" opacity="0.5"/>
            <path d="M75,44 Q102,44 102,50 L102,58 Q102,62 118,62" fill="#6366f1" opacity="0.45"/>
            <path d="M75,68 Q102,68 102,72 L102,78 Q102,80 118,80" fill="#ec4899" opacity="0.2"/>
            <rect x="118" y="58" width="9" height="14" fill="#6366f1" rx="2" filter="url(#gSank)"/>
            <rect x="118" y="75" width="9" height="20" fill="#ec4899" rx="2" opacity="0.5"/>
            <!-- 最优路径标注 -->
            <rect x="26" y="28" width="28" height="11" fill="#eef2ff" rx="2" stroke="#6366f1" stroke-width="0.7"/>
            <text x="40" y="35.5" text-anchor="middle" font-size="5.5" fill="#4f46e5" font-weight="700">最优转化路径</text>
            <!-- 流失标注 -->
            <rect x="110" y="90" width="28" height="11" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.7"/>
            <text x="124" y="97.5" text-anchor="middle" font-size="5.5" fill="#b91c1c" font-weight="700">流失 38%</text>
            <!-- 转化率 -->
            <text x="120" y="55" font-size="5.5" fill="#4f46e5" font-weight="700">↑28%</text>
            <text x="5" y="37" text-anchor="end" font-size="5.5" fill="#4f46e5">直播</text>
            <text x="5" y="66" text-anchor="end" font-size="5.5" fill="#059669">搜索</text>
            <text x="5" y="87" text-anchor="end" font-size="5.5" fill="#d97706">推荐</text>
            <text x="70" y="8" text-anchor="middle" font-size="7.5" fill="#111827" font-weight="700">用户购买转化漏斗</text>
            <text x="70" y="15" text-anchor="middle" font-size="5.5" fill="#6b7280">高亮最优路径 · 标注流失节点 · 行动可见</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-map',
    icon: `🗺️`,
    title: `地图 · Choropleth / GeoMap`,
    desc: `地理空间可视化 — 从原始轮廓到地理叙事的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始轮廓`, criteria: [`单色填充，无数据绑定`, `无标注、无图例`, `纯地理边界图`], delta: `问题：和空白地图无区别`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 简单轮廓，无色差 -->
            <path d="M30,30 L50,25 L80,28 L110,24 L130,30 L135,55 L120,80 L100,95 L70,98 L45,90 L25,70 Z" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.2"/>
            <path d="M55,40 L75,38 L85,50 L78,65 L60,68 L48,55 Z" fill="#d1d5db" stroke="#9ca3af" stroke-width="0.8"/>
            <path d="M88,42 L108,40 L118,55 L110,70 L95,72 L84,60 Z" fill="#d1d5db" stroke="#9ca3af" stroke-width="0.8"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`颜色深浅编码数值`, `有图例说明`, `无具体数值标注`], delta: `比 L1 多：色彩编码 + 图例`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 颜色填充不同区域 -->
            <path d="M30,30 L50,25 L80,28 L110,24 L130,30 L135,55 L120,80 L100,95 L70,98 L45,90 L25,70 Z" fill="#bfdbfe" stroke="white" stroke-width="1"/>
            <path d="M55,40 L75,38 L85,50 L78,65 L60,68 L48,55 Z" fill="#3b82f6" stroke="white" stroke-width="1"/>
            <path d="M88,42 L108,40 L118,55 L110,70 L95,72 L84,60 Z" fill="#60a5fa" stroke="white" stroke-width="1"/>
            <path d="M45,60 L55,58 L60,68 L50,72 L40,68 Z" fill="#93c5fd" stroke="white" stroke-width="0.8"/>
            <!-- 图例 -->
            <rect x="12" y="100" width="8" height="6" fill="#bfdbfe" rx="1"/><text x="22" y="106" font-size="6" fill="#6b7280">低</text>
            <rect x="50" y="100" width="8" height="6" fill="#60a5fa" rx="1"/><text x="60" y="106" font-size="6" fill="#6b7280">中</text>
            <rect x="88" y="100" width="8" height="6" fill="#3b82f6" rx="1"/><text x="98" y="106" font-size="6" fill="#6b7280">高</text>
            <text x="80" y="12" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">区域分布</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`区域内嵌数值标签`, `连续色阶（非分级）`, `色阶图例带数值范围`], delta: `比 L2 多：数值标签 + 连续色阶`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <path d="M30,30 L50,25 L80,28 L110,24 L130,30 L135,55 L120,80 L100,95 L70,98 L45,90 L25,70 Z" fill="#bfdbfe" stroke="white" stroke-width="1"/>
            <path d="M55,40 L75,38 L85,50 L78,65 L60,68 L48,55 Z" fill="#1d4ed8" stroke="white" stroke-width="1"/>
            <path d="M88,42 L108,40 L118,55 L110,70 L95,72 L84,60 Z" fill="#60a5fa" stroke="white" stroke-width="1"/>
            <path d="M45,60 L55,58 L60,68 L50,72 L40,68 Z" fill="#93c5fd" stroke="white" stroke-width="0.8"/>
            <!-- 数值标签 -->
            <text x="68" y="55" text-anchor="middle" font-size="8" fill="white" font-weight="700">2.8k</text>
            <text x="101" y="58" text-anchor="middle" font-size="7" fill="white">1.4k</text>
            <text x="48" y="67" text-anchor="middle" font-size="6" fill="#1e3a8a">0.9k</text>
            <text x="83" y="85" text-anchor="middle" font-size="6" fill="#374151">0.6k</text>
            <!-- 色阶 -->
            <rect x="12" y="105" width="60" height="6" fill="url(#mapGrad3)" rx="2"/>
            <defs><linearGradient id="mapGrad3" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#bfdbfe"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient></defs>
            <text x="12" y="117" font-size="6" fill="#9ca3af">0</text>
            <text x="70" y="117" font-size="6" fill="#9ca3af" text-anchor="end">3k</text>
            <text x="80" y="10" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">各区销售额（万元）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`最优区域阴影高亮`, `排名 + 数值双重标注`, `Callout 引导线指向`], delta: `比 L3 多：排名标注 + 阴影 + Callout`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs><linearGradient id="mapG4" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#eff6ff"/><stop offset="100%" stop-color="#1d4ed8"/></linearGradient></defs>
            <!-- 地图带高亮 -->
            <path d="M30,30 L50,25 L80,28 L110,24 L130,30 L135,55 L120,80 L100,95 L70,98 L45,90 L25,70 Z" fill="#dbeafe" stroke="white" stroke-width="1"/>
            <!-- 最高亮 -->
            <path d="M55,40 L75,38 L85,50 L78,65 L60,68 L48,55 Z" fill="#1d4ed8" stroke="white" stroke-width="1.5" filter="drop-shadow(0 2px 4px rgba(29,78,216,0.4))"/>
            <path d="M88,42 L108,40 L118,55 L110,70 L95,72 L84,60 Z" fill="#60a5fa" stroke="white" stroke-width="1"/>
            <path d="M45,60 L55,58 L60,68 L50,72 L40,68 Z" fill="#93c5fd" stroke="white" stroke-width="0.8"/>
            <!-- 数值 + 排名 -->
            <text x="68" y="52" text-anchor="middle" font-size="7.5" fill="white" font-weight="800">#1</text>
            <text x="68" y="61" text-anchor="middle" font-size="6.5" fill="#bfdbfe">2,810</text>
            <text x="101" y="57" text-anchor="middle" font-size="7" fill="white">#2</text>
            <text x="101" y="65" text-anchor="middle" font-size="6" fill="#e0f2fe">1,440</text>
            <!-- Callout -->
            <rect x="108" y="20" width="40" height="16" fill="#eef2ff" rx="3" stroke="#6366f1" stroke-width="0.8"/>
            <text x="128" y="30.5" text-anchor="middle" font-size="6.5" fill="#4f46e5" font-weight="700">北区：TOP 销售</text>
            <line x1="77" y1="38" x2="108" y2="28" stroke="#6366f1" stroke-width="0.8" stroke-dasharray="2,2"/>
            <!-- 色阶 -->
            <rect x="12" y="105" width="60" height="6" fill="url(#mapG4)" rx="2"/>
            <text x="12" y="116" font-size="6" fill="#9ca3af">低</text>
            <text x="70" y="116" font-size="6" fill="#9ca3af" text-anchor="end">高</text>
            <text x="80" y="9" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">各区销售额排名</text>
            <text x="80" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">北区持续领跑，环比+18%</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`气泡叠加编码增长率`, `预警区域红点标注`, `发光强化最优区域`, `双编码（色+泡）完整叙事`], delta: `比 L4 多：气泡编码 + 预警标注 + 发光 + 双编码`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="mapG5" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#eff6ff"/><stop offset="100%" stop-color="#1e3a8a"/></linearGradient>
              <filter id="gMap"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <path d="M30,30 L50,25 L80,28 L110,24 L130,30 L135,55 L120,80 L100,95 L70,98 L45,90 L25,70 Z" fill="#dbeafe" stroke="white" stroke-width="0.8"/>
            <path d="M55,40 L75,38 L85,50 L78,65 L60,68 L48,55 Z" fill="#1e3a8a" stroke="white" stroke-width="1.5" filter="url(#gMap)"/>
            <path d="M88,42 L108,40 L118,55 L110,70 L95,72 L84,60 Z" fill="#3b82f6" stroke="white" stroke-width="1"/>
            <path d="M45,60 L55,58 L60,68 L50,72 L40,68 Z" fill="#93c5fd" stroke="white" stroke-width="0.8"/>
            <!-- 气泡大小编码增长率 -->
            <circle cx="68" cy="54" r="9" fill="#f59e0b" opacity="0.75"/>
            <text x="68" y="57" text-anchor="middle" font-size="6" fill="white" font-weight="700">+18%</text>
            <circle cx="101" cy="57" r="5" fill="#f59e0b" opacity="0.6"/>
            <text x="101" cy="59" text-anchor="middle" font-size="5" fill="white">+6%</text>
            <!-- 预警区域 -->
            <circle cx="50" cy="66" r="5" fill="#ef4444" opacity="0.7"/>
            <text x="50" y="69" text-anchor="middle" font-size="5" fill="white">−2%</text>
            <rect x="9" y="84" width="32" height="11" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.7"/>
            <text x="25" y="91.5" text-anchor="middle" font-size="5.5" fill="#b91c1c" font-weight="700">西区：下滑预警</text>
            <line x1="41" y1="70" x2="41" y2="84" stroke="#fca5a5" stroke-width="0.8" stroke-dasharray="2,2"/>
            <!-- 标题 + 说明 -->
            <text x="80" y="9" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">区域销售热力地图</text>
            <text x="80" y="16" text-anchor="middle" font-size="5.5" fill="#6b7280">气泡=环比增长率 · 红=预警区域</text>
            <!-- 色阶 -->
            <rect x="10" y="105" width="55" height="5" fill="url(#mapG5)" rx="2"/>
            <text x="10" y="115" font-size="5.5" fill="#9ca3af">低</text>
            <text x="64" y="115" font-size="5.5" fill="#9ca3af" text-anchor="end">高</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-tree',
    icon: `🌳`,
    title: `树图 · Treemap / Hierarchy`,
    desc: `层级结构类图表 — 从嵌套色块到交互式层级导航的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始色块`, criteria: [`无标签、无颜色语义`, `大小随意无比例`, `无法识别层级关系`], delta: `问题：看不出任何分类和数量关系`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 无标签随机填充色块 -->
            <rect x="10" y="15" width="70" height="55" fill="#9ca3af"/>
            <rect x="82" y="15" width="68" height="30" fill="#6b7280"/>
            <rect x="82" y="47" width="35" height="23" fill="#4b5563"/>
            <rect x="119" y="47" width="31" height="23" fill="#374151"/>
            <rect x="10" y="72" width="40" height="43" fill="#6b7280"/>
            <rect x="52" y="72" width="28" height="20" fill="#9ca3af"/>
            <rect x="52" y="94" width="28" height="21" fill="#d1d5db"/>
            <rect x="82" y="72" width="68" height="43" fill="#4b5563"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`按比例分配面积`, `有分类标签`, `蓝色深浅区分层级`], delta: `比 L1 多：面积比例 + 标签 + 层级颜色`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="90" height="60" fill="#3b82f6" rx="2"/>
            <rect x="100" y="12" width="52" height="35" fill="#60a5fa" rx="2"/>
            <rect x="100" y="49" width="25" height="23" fill="#93c5fd" rx="2"/>
            <rect x="127" y="49" width="25" height="23" fill="#bfdbfe" rx="2"/>
            <rect x="8" y="74" width="45" height="44" fill="#60a5fa" rx="2"/>
            <rect x="55" y="74" width="43" height="44" fill="#93c5fd" rx="2"/>
            <rect x="100" y="74" width="52" height="44" fill="#bfdbfe" rx="2"/>
            <!-- 标签 -->
            <text x="53" y="44" text-anchor="middle" font-size="9" fill="white" font-weight="700">A类</text>
            <text x="126" y="32" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">B类</text>
            <text x="30" y="98" text-anchor="middle" font-size="7.5" fill="white">C类</text>
            <text x="76" y="98" text-anchor="middle" font-size="7.5" fill="#374151">D类</text>
            <text x="126" y="98" text-anchor="middle" font-size="7.5" fill="#374151">E类</text>
            <text x="84" y="8" text-anchor="middle" font-size="7.5" fill="#374151" font-weight="600">产品类目分布</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`颜色区分不同类目`, `类目名+金额双标注`, `面积精确反映占比`], delta: `比 L2 多：多色分类 + 金额标注 + 精确比例`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 多颜色分类 -->
            <rect x="8" y="14" width="88" height="58" fill="#6366f1" rx="2"/>
            <rect x="98" y="14" width="54" height="34" fill="#10b981" rx="2"/>
            <rect x="98" y="50" width="26" height="22" fill="#f59e0b" rx="2"/>
            <rect x="126" y="50" width="26" height="22" fill="#f59e0b" rx="2" opacity="0.7"/>
            <rect x="8" y="74" width="44" height="44" fill="#10b981" rx="2" opacity="0.7"/>
            <rect x="54" y="74" width="42" height="44" fill="#ec4899" rx="2"/>
            <rect x="98" y="74" width="54" height="44" fill="#6366f1" rx="2" opacity="0.5"/>
            <!-- 标签+数值 -->
            <text x="52" y="40" text-anchor="middle" font-size="8.5" fill="white" font-weight="700">电子</text>
            <text x="52" y="52" text-anchor="middle" font-size="7" fill="#c7d2fe">¥280万</text>
            <text x="125" y="33" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">服饰</text>
            <text x="125" y="43" text-anchor="middle" font-size="6.5" fill="#d1fae5">¥165万</text>
            <text x="30" y="97" text-anchor="middle" font-size="7" fill="white">食品</text>
            <text x="75" y="94" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">美妆</text>
            <text x="75" y="104" text-anchor="middle" font-size="6" fill="#fce7f3">¥120万</text>
            <text x="125" y="97" text-anchor="middle" font-size="7" fill="#e0e7ff">其他</text>
            <text x="84" y="9" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">产品类目销售额（万元）</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`最大类目阴影强调`, `占比 + 环比同框`, `颜色语义化（暖=增长）`], delta: `比 L3 多：阴影强调 + 占比 + 环比`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 最大模块高亮 -->
            <rect x="8" y="14" width="88" height="58" fill="#6366f1" rx="3" filter="drop-shadow(0 3px 6px rgba(99,102,241,0.35))"/>
            <!-- 环比箭头 -->
            <rect x="98" y="14" width="54" height="34" fill="#10b981" rx="3"/>
            <rect x="98" y="50" width="26" height="22" fill="#f59e0b" rx="2"/>
            <rect x="126" y="50" width="26" height="22" fill="#f59e0b" rx="2" opacity="0.6"/>
            <rect x="8" y="74" width="44" height="44" fill="#10b981" rx="3" opacity="0.7"/>
            <rect x="54" y="74" width="42" height="44" fill="#ec4899" rx="3"/>
            <rect x="98" y="74" width="54" height="44" fill="#6366f1" rx="3" opacity="0.45"/>
            <!-- 标签+占比+环比 -->
            <text x="52" y="38" text-anchor="middle" font-size="9" fill="white" font-weight="700">电子</text>
            <text x="52" y="49" text-anchor="middle" font-size="7.5" fill="#c7d2fe">38.5%</text>
            <text x="52" y="60" text-anchor="middle" font-size="7" fill="#a5f3fc">↑+12%</text>
            <text x="125" y="32" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">服饰 22.6%</text>
            <text x="75" y="94" text-anchor="middle" font-size="7.5" fill="white" font-weight="600">美妆</text>
            <text x="75" y="104" text-anchor="middle" font-size="6.5" fill="#fce7f3">16.4% ↑+5%</text>
            <!-- 标题 -->
            <text x="84" y="9" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">类目占比 · 电子最强</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`层级面包屑导航`, `二级下钻内嵌展示`, `发光强化最大类目`, `TOP 标签 + 环比完整叙事`], delta: `比 L4 多：面包屑 + 下钻内嵌 + 发光`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="gTree"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <!-- 层级面包屑 -->
            <rect x="8" y="6" width="144" height="10" fill="#f8fafc" rx="2" stroke="#e5e7eb" stroke-width="0.7"/>
            <text x="14" y="13" font-size="6" fill="#6366f1">全部</text>
            <text x="34" y="13" font-size="6" fill="#9ca3af">›</text>
            <text x="40" y="13" font-size="6" fill="#374151">电子</text>
            <text x="60" y="13" font-size="6" fill="#9ca3af">›</text>
            <text x="66" y="13" font-size="6" fill="#6b7280" font-style="italic">手机</text>
            <!-- 主体 -->
            <rect x="8" y="18" width="88" height="58" fill="#6366f1" rx="3" filter="url(#gTree)"/>
            <rect x="98" y="18" width="54" height="34" fill="#10b981" rx="3"/>
            <rect x="98" y="54" width="26" height="22" fill="#f59e0b" rx="2"/>
            <rect x="126" y="54" width="26" height="22" fill="#f59e0b" rx="2" opacity="0.55"/>
            <rect x="8" y="78" width="44" height="44" fill="#10b981" rx="3" opacity="0.7"/>
            <rect x="54" y="78" width="42" height="44" fill="#ec4899" rx="3"/>
            <rect x="98" y="78" width="54" height="44" fill="#6366f1" rx="3" opacity="0.4"/>
            <!-- 电子子类 内嵌 -->
            <rect x="10" y="20" width="42" height="26" fill="#4f46e5" rx="2" opacity="0.7"/>
            <text x="31" y="35" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">手机</text>
            <text x="31" y="43" text-anchor="middle" font-size="5.5" fill="#c7d2fe">¥160万</text>
            <rect x="54" y="20" width="40" height="26" fill="#818cf8" rx="2" opacity="0.7"/>
            <text x="74" y="35" text-anchor="middle" font-size="6" fill="white">电脑</text>
            <text x="74" y="43" text-anchor="middle" font-size="5.5" fill="#e0e7ff">¥120万</text>
            <!-- 标签 -->
            <text x="52" y="58" text-anchor="middle" font-size="7" fill="#c7d2fe" font-weight="600">38.5% ↑12%</text>
            <text x="125" y="38" text-anchor="middle" font-size="6.5" fill="white" font-weight="600">服饰 22.6%</text>
            <text x="75" y="100" text-anchor="middle" font-size="7" fill="white">美妆 16.4%</text>
            <!-- Callout -->
            <rect x="80" y="19" width="14" height="9" fill="#fef3c7" rx="2" stroke="#f59e0b" stroke-width="0.7"/>
            <text x="87" y="25.5" text-anchor="middle" font-size="5" fill="#d97706" font-weight="700">TOP</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-network',
    icon: `🕸️`,
    title: `网络关系图 · Network Graph`,
    desc: `关联与拓扑类图表 — 从无序点线到关键节点洞察的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始点线`, criteria: [`节点全等大，无权重`, `边全等粗，无方向`, `无标签，无颜色区分`], delta: `问题：无法识别关键节点和关系强度`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 无序点线，全部相同 -->
            <line x1="30" y1="40" x2="80" y2="60" stroke="#9ca3af" stroke-width="1"/>
            <line x1="30" y1="40" x2="60" y2="100" stroke="#9ca3af" stroke-width="1"/>
            <line x1="80" y1="60" x2="130" y2="45" stroke="#9ca3af" stroke-width="1"/>
            <line x1="80" y1="60" x2="110" y2="95" stroke="#9ca3af" stroke-width="1"/>
            <line x1="60" y1="100" x2="110" y2="95" stroke="#9ca3af" stroke-width="1"/>
            <line x1="130" y1="45" x2="110" y2="95" stroke="#9ca3af" stroke-width="1"/>
            <circle cx="30" cy="40" r="5" fill="#6b7280"/>
            <circle cx="80" cy="60" r="5" fill="#6b7280"/>
            <circle cx="60" cy="100" r="5" fill="#6b7280"/>
            <circle cx="130" cy="45" r="5" fill="#6b7280"/>
            <circle cx="110" cy="95" r="5" fill="#6b7280"/>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`节点大小按重要性`, `边粗细反映关系强度`, `关键节点有标签`], delta: `比 L1 多：节点大小 + 边粗细 + 核心标签`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="40" x2="80" y2="58" stroke="#93c5fd" stroke-width="1.5"/>
            <line x1="30" y1="40" x2="60" y2="98" stroke="#93c5fd" stroke-width="1"/>
            <line x1="80" y1="58" x2="130" y2="42" stroke="#93c5fd" stroke-width="2"/>
            <line x1="80" y1="58" x2="110" y2="92" stroke="#93c5fd" stroke-width="1.5"/>
            <line x1="60" y1="98" x2="110" y2="92" stroke="#93c5fd" stroke-width="1"/>
            <circle cx="30" cy="40" r="5" fill="#3b82f6"/>
            <circle cx="80" cy="58" r="8" fill="#1d4ed8"/>
            <circle cx="60" cy="98" r="4" fill="#3b82f6"/>
            <circle cx="130" cy="42" r="6" fill="#2563eb"/>
            <circle cx="110" cy="92" r="5" fill="#3b82f6"/>
            <text x="80" y="61" text-anchor="middle" font-size="6" fill="white">核心</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`颜色区分节点类型`, `Hub 节点视觉突出`, `图例说明分组`], delta: `比 L2 多：颜色分组 + Hub强调 + 图例`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 分组颜色 -->
            <line x1="30" y1="38" x2="80" y2="56" stroke="#c4b5fd" stroke-width="2"/>
            <line x1="30" y1="38" x2="55" y2="95" stroke="#a5b4fc" stroke-width="1.5"/>
            <line x1="80" y1="56" x2="132" y2="40" stroke="#6ee7b7" stroke-width="2.5"/>
            <line x1="80" y1="56" x2="112" y2="90" stroke="#fca5a5" stroke-width="1.5"/>
            <line x1="55" y1="95" x2="112" y2="90" stroke="#fde68a" stroke-width="1"/>
            <line x1="132" y1="40" x2="112" y2="90" stroke="#6ee7b7" stroke-width="1.5"/>
            <!-- 节点 -->
            <circle cx="80" cy="56" r="10" fill="#6366f1"/>
            <text x="80" y="59" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">Hub</text>
            <circle cx="30" cy="38" r="6" fill="#8b5cf6"/>
            <text x="30" y="41" text-anchor="middle" font-size="5.5" fill="white">A</text>
            <circle cx="132" cy="40" r="7" fill="#10b981"/>
            <text x="132" y="43" text-anchor="middle" font-size="5.5" fill="white">B</text>
            <circle cx="55" cy="95" r="5" fill="#8b5cf6"/>
            <text x="55" y="98" text-anchor="middle" font-size="5.5" fill="white">C</text>
            <circle cx="112" cy="90" r="6" fill="#ef4444"/>
            <text x="112" y="93" text-anchor="middle" font-size="5.5" fill="white">D</text>
            <!-- 图例 -->
            <circle cx="16" cy="112" r="4" fill="#6366f1"/><text x="22" y="115" font-size="6" fill="#374151">核心</text>
            <circle cx="55" cy="112" r="4" fill="#8b5cf6"/><text x="61" y="115" font-size="6" fill="#374151">A组</text>
            <circle cx="90" cy="112" r="4" fill="#10b981"/><text x="96" y="115" font-size="6" fill="#374151">B组</text>
            <text x="80" y="8" text-anchor="middle" font-size="7.5" fill="#1f2937" font-weight="700">产品关联网络</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`中心度数值标注`, `最强关联路径高亮`, `阴影强化关键节点`], delta: `比 L3 多：中心度 + 路径高亮 + 阴影`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 关键路径高亮 -->
            <line x1="30" y1="38" x2="80" y2="55" stroke="#c4b5fd" stroke-width="1.5" opacity="0.6"/>
            <line x1="80" y1="55" x2="132" y2="38" stroke="#6ee7b7" stroke-width="3" opacity="0.8"/>
            <line x1="132" y1="38" x2="112" y2="88" stroke="#6ee7b7" stroke-width="2" opacity="0.8"/>
            <line x1="30" y1="38" x2="55" y2="92" stroke="#a5b4fc" stroke-width="1" opacity="0.5"/>
            <line x1="55" y1="92" x2="112" y2="88" stroke="#fde68a" stroke-width="1" opacity="0.5"/>
            <!-- 节点 -->
            <circle cx="80" cy="55" r="12" fill="#6366f1" filter="drop-shadow(0 2px 6px rgba(99,102,241,0.5))"/>
            <text x="80" y="58" text-anchor="middle" font-size="7" fill="white" font-weight="700">Hub</text>
            <circle cx="30" cy="38" r="7" fill="#8b5cf6"/>
            <text x="30" y="41" text-anchor="middle" font-size="5.5" fill="white">A</text>
            <circle cx="132" cy="38" r="9" fill="#10b981" filter="drop-shadow(0 2px 4px rgba(16,185,129,0.4))"/>
            <text x="132" y="41" text-anchor="middle" font-size="6" fill="white" font-weight="700">B</text>
            <circle cx="55" cy="92" r="5" fill="#8b5cf6"/>
            <text x="55" y="95" text-anchor="middle" font-size="5.5" fill="white">C</text>
            <circle cx="112" cy="88" r="7" fill="#ef4444"/>
            <text x="112" y="91" text-anchor="middle" font-size="5.5" fill="white">D</text>
            <!-- 中心度标注 -->
            <text x="80" y="41" text-anchor="middle" font-size="6" fill="#a5b4fc">度=4</text>
            <!-- 关键路径标注 -->
            <text x="106" y="30" text-anchor="middle" font-size="6" fill="#10b981" font-weight="600">最强关联</text>
            <text x="80" y="9" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">产品关联强度网络</text>
            <text x="80" y="17" text-anchor="middle" font-size="6.5" fill="#6b7280">Hub-B 路径关联最强，可联合推荐</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`PageRank 中心度标注`, `次要边灰化降噪`, `孤立风险节点预警`, `推荐对气泡标注`], delta: `比 L4 多：PageRank + 降噪 + 风险预警 + 推荐标注`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs><filter id="gNet"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
            <!-- 次要边灰化 -->
            <line x1="30" y1="38" x2="55" y2="92" stroke="#e5e7eb" stroke-width="1"/>
            <line x1="55" y1="92" x2="112" y2="88" stroke="#e5e7eb" stroke-width="1"/>
            <!-- 关键路径高亮 -->
            <line x1="30" y1="38" x2="80" y2="53" stroke="#a5b4fc" stroke-width="2"/>
            <line x1="80" y1="53" x2="132" y2="36" stroke="#6ee7b7" stroke-width="3.5" opacity="0.9"/>
            <line x1="132" y1="36" x2="112" y2="86" stroke="#6ee7b7" stroke-width="2.5" opacity="0.85"/>
            <!-- 节点 -->
            <circle cx="80" cy="53" r="13" fill="#6366f1" filter="url(#gNet)"/>
            <text x="80" y="57" text-anchor="middle" font-size="7" fill="white" font-weight="700">Hub</text>
            <circle cx="132" cy="36" r="10" fill="#10b981" filter="url(#gNet)"/>
            <text x="132" y="40" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">B</text>
            <circle cx="30" cy="38" r="6" fill="#8b5cf6"/>
            <text x="30" y="41" text-anchor="middle" font-size="5.5" fill="white">A</text>
            <circle cx="55" cy="92" r="5" fill="#d1d5db"/>
            <text x="55" y="95" text-anchor="middle" font-size="5.5" fill="#6b7280">C</text>
            <circle cx="112" cy="86" r="8" fill="#ef4444"/>
            <text x="112" y="89" text-anchor="middle" font-size="6" fill="white">D</text>
            <!-- 预警标注 -->
            <rect x="118" y="76" width="34" height="12" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.8"/>
            <text x="135" y="84.5" text-anchor="middle" font-size="5.5" fill="#b91c1c" font-weight="700">孤立风险节点</text>
            <!-- 最优推荐标注 -->
            <rect x="94" y="18" width="40" height="12" fill="#ecfdf5" rx="2" stroke="#6ee7b7" stroke-width="0.8"/>
            <text x="114" y="26.5" text-anchor="middle" font-size="5.5" fill="#065f46" font-weight="700">联合推荐对</text>
            <line x1="110" y1="30" x2="118" y2="36" stroke="#6ee7b7" stroke-width="0.8" stroke-dasharray="2,2"/>
            <!-- 中心度 -->
            <text x="80" y="37" text-anchor="middle" font-size="6" fill="#c7d2fe">PageRank=0.42</text>
            <text x="80" y="8" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">关联网络 · 推荐路径分析</text>
            <text x="80" y="15" text-anchor="middle" font-size="5.5" fill="#6b7280">发光=核心节点 · 绿线=推荐对 · 红=风险</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-wordcloud',
    icon: `💬`,
    title: `词云 · Word Cloud / Text Viz`,
    desc: `文本信息类图表 — 从随机堆字到情感+频率双维叙事的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始堆字`, criteria: [`灰色单色，无频率区分`, `位置随意，无布局逻辑`, `大小不反映权重`], delta: `问题：词与词之间无任何差异化`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <text x="35" y="35" font-size="12" fill="#6b7280">质量</text>
            <text x="80" y="50" font-size="8" fill="#9ca3af">服务</text>
            <text x="20" y="65" font-size="10" fill="#6b7280">价格</text>
            <text x="95" y="72" font-size="9" fill="#9ca3af">体验</text>
            <text x="50" y="85" font-size="8" fill="#6b7280">物流</text>
            <text x="110" y="40" font-size="7" fill="#9ca3af">包装</text>
            <text x="30" y="100" font-size="9" fill="#6b7280">态度</text>
            <text x="90" y="95" font-size="7" fill="#9ca3af">速度</text>
            <text x="120" y="85" font-size="8" fill="#6b7280">推荐</text>
            <text x="60" y="55" font-size="7" fill="#9ca3af">好评</text>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`字号按词频排比`, `统一蓝色系`, `居中布局，有标题`], delta: `比 L1 多：字号比例 + 统一配色 + 标题`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 大小按频率 -->
            <text x="50" y="45" font-size="18" fill="#3b82f6" font-weight="700" text-anchor="middle">质量</text>
            <text x="110" y="38" font-size="13" fill="#3b82f6" text-anchor="middle">服务</text>
            <text x="30" y="75" font-size="12" fill="#3b82f6" text-anchor="middle">价格</text>
            <text x="95" y="68" font-size="11" fill="#3b82f6" text-anchor="middle">体验</text>
            <text x="130" y="60" font-size="9" fill="#3b82f6" text-anchor="middle">物流</text>
            <text x="55" y="95" font-size="9" fill="#60a5fa" text-anchor="middle">包装</text>
            <text x="115" y="90" font-size="8" fill="#93c5fd" text-anchor="middle">速度</text>
            <text x="30" y="105" font-size="8" fill="#60a5fa" text-anchor="middle">推荐</text>
            <text x="80" y="112" font-size="7" fill="#93c5fd" text-anchor="middle">好评</text>
            <text x="80" y="10" text-anchor="middle" font-size="8" fill="#374151" font-weight="600">用户评价关键词</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`颜色区分正/负/中性情感`, `情感图例清晰`, `负面词可见，有诊断价值`], delta: `比 L2 多：情感着色 + 图例 + 负面词可见`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 正负情感颜色区分 -->
            <text x="55" y="48" font-size="18" fill="#3b82f6" font-weight="700" text-anchor="middle">质量</text>
            <text x="115" y="40" font-size="13" fill="#10b981" text-anchor="middle">服务</text>
            <text x="28" y="75" font-size="12" fill="#f59e0b" text-anchor="middle">价格</text>
            <text x="100" y="68" font-size="11" fill="#3b82f6" text-anchor="middle">体验</text>
            <text x="138" y="60" font-size="9" fill="#10b981" text-anchor="middle">物流</text>
            <text x="55" y="95" font-size="9" fill="#ef4444" text-anchor="middle">等待</text>
            <text x="120" y="90" font-size="9" fill="#ef4444" text-anchor="middle">延误</text>
            <text x="28" y="105" font-size="8" fill="#10b981" text-anchor="middle">推荐</text>
            <text x="82" y="112" font-size="7" fill="#3b82f6" text-anchor="middle">满意</text>
            <!-- 情感图例 -->
            <circle cx="14" cy="120" r="3" fill="#10b981"/>
            <text x="20" y="123" font-size="6" fill="#374151">正面</text>
            <circle cx="55" cy="120" r="3" fill="#ef4444"/>
            <text x="61" y="123" font-size="6" fill="#374151">负面</text>
            <circle cx="92" cy="120" r="3" fill="#f59e0b"/>
            <text x="98" y="123" font-size="6" fill="#374151">中性</text>
            <text x="80" y="9" text-anchor="middle" font-size="8" fill="#1f2937" font-weight="700">评价关键词 · 情感着色</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`词频数字标注在词旁`, `负面词加框突出预警`, `底部汇总负面占比`], delta: `比 L3 多：词频数字 + 负面框 + 比例汇总`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <!-- 情感分组 + 频次数字 -->
            <text x="55" y="44" font-size="17" fill="#3b82f6" font-weight="700" text-anchor="middle">质量</text>
            <text x="55" y="52" text-anchor="middle" font-size="6" fill="#93c5fd">×328</text>
            <text x="115" y="38" font-size="13" fill="#10b981" text-anchor="middle">服务</text>
            <text x="115" y="46" text-anchor="middle" font-size="6" fill="#6ee7b7">×214</text>
            <text x="28" y="72" font-size="12" fill="#f59e0b" text-anchor="middle">价格</text>
            <text x="100" y="65" font-size="11" fill="#3b82f6" text-anchor="middle">体验</text>
            <text x="138" y="57" font-size="9" fill="#10b981" text-anchor="middle">物流</text>
            <!-- 负面词突出框 -->
            <rect x="35" y="80" width="30" height="14" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.8"/>
            <text x="50" y="90" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="700">等待</text>
            <rect x="102" y="78" width="30" height="14" fill="#fef2f2" rx="2" stroke="#fca5a5" stroke-width="0.8"/>
            <text x="117" y="88" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="700">延误</text>
            <text x="28" y="105" font-size="8" fill="#10b981" text-anchor="middle">推荐</text>
            <text x="82" y="110" font-size="7" fill="#3b82f6" text-anchor="middle">满意</text>
            <!-- 负面统计 -->
            <text x="80" y="120" text-anchor="middle" font-size="6.5" fill="#ef4444" font-weight="600">⚠ 负面词占比 18% · 物流是主因</text>
            <text x="80" y="9" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">评价词云 · 频次+情感双标注</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`正负分区背景区隔`, `关键词发光 + 同比趋势`, `行动建议横幅`, `Top3 词频摘要栏`], delta: `比 L4 多：分区背景 + 趋势 + 行动建议 + 摘要栏`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="gWord"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <!-- 分区背景 -->
            <rect x="8" y="12" width="70" height="80" fill="#eff6ff" rx="4" opacity="0.6"/>
            <rect x="80" y="12" width="72" height="80" fill="#fef2f2" rx="4" opacity="0.6"/>
            <text x="43" y="20" text-anchor="middle" font-size="6" fill="#2563eb" font-weight="600">正面区</text>
            <text x="116" y="20" text-anchor="middle" font-size="6" fill="#dc2626" font-weight="600">负面区</text>
            <!-- 正面高频词 发光 -->
            <text x="40" y="46" font-size="17" fill="#1d4ed8" font-weight="800" text-anchor="middle" filter="url(#gWord)">质量</text>
            <text x="40" y="55" text-anchor="middle" font-size="5.5" fill="#93c5fd">328次 ↑+12%</text>
            <text x="40" y="70" font-size="11" fill="#10b981" text-anchor="middle">服务</text>
            <text x="40" y="79" text-anchor="middle" font-size="5" fill="#6ee7b7">214次</text>
            <!-- 负面词 发光 -->
            <text x="112" y="42" font-size="14" fill="#dc2626" font-weight="700" text-anchor="middle" filter="url(#gWord)">延误</text>
            <text x="112" y="51" text-anchor="middle" font-size="5.5" fill="#fca5a5">186次 ↑+34%</text>
            <text x="112" y="66" font-size="11" fill="#f59e0b" text-anchor="middle">等待</text>
            <text x="112" y="75" text-anchor="middle" font-size="5" fill="#fde68a">142次</text>
            <!-- 行动建议 -->
            <rect x="8" y="96" width="144" height="14" fill="#fef2f2" rx="3" stroke="#fca5a5" stroke-width="0.8"/>
            <text x="80" y="105.5" text-anchor="middle" font-size="6.5" fill="#b91c1c" font-weight="700">⚠ 负面词「延误」同比激增 +34%，建议优先排查物流链路</text>
            <!-- 趋势小图 -->
            <rect x="8" y="114" width="144" height="12" fill="#f8fafc" rx="2" stroke="#e5e7eb" stroke-width="0.7"/>
            <text x="14" y="122" font-size="6" fill="#374151" font-weight="600">本月 Top3：</text>
            <text x="56" y="122" font-size="6" fill="#1d4ed8">质量 (328)</text>
            <text x="100" y="122" font-size="6" fill="#dc2626">延误 (186)</text>
            <text x="138" y="122" font-size="6" fill="#10b981" text-anchor="end">服务 (214)</text>
            <text x="80" y="8" text-anchor="middle" font-size="8" fill="#111827" font-weight="700">评价词云 · 情感分区 · 行动指引</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-table',
    icon: `📋`,
    title: `数据表格 · Data Table`,
    desc: `最常用的信息载体 — 从原始 Excel 到可交互决策面板的五级演进`,
    levels: [
      { lv: 'lv1', score: `0–4.9分`, title: `原始表格`, criteria: [`无样式，全细线边框`, `无排序、无高亮`, `数字无格式化`], delta: `问题：全部信息等权重，眼睛找不到重点`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="140" height="100" fill="none" stroke="#9ca3af" stroke-width="1"/>
            <line x1="10" y1="30" x2="150" y2="30" stroke="#9ca3af" stroke-width="0.8"/>
            <line x1="10" y1="45" x2="150" y2="45" stroke="#9ca3af" stroke-width="0.8"/>
            <line x1="10" y1="60" x2="150" y2="60" stroke="#9ca3af" stroke-width="0.8"/>
            <line x1="10" y1="75" x2="150" y2="75" stroke="#9ca3af" stroke-width="0.8"/>
            <line x1="55" y1="15" x2="55" y2="115" stroke="#9ca3af" stroke-width="0.8"/>
            <line x1="100" y1="15" x2="100" y2="115" stroke="#9ca3af" stroke-width="0.8"/>
            <text x="30" y="25" text-anchor="middle" font-size="7" fill="#374151">品类</text>
            <text x="75" y="25" text-anchor="middle" font-size="7" fill="#374151">销量</text>
            <text x="122" y="25" text-anchor="middle" font-size="7" fill="#374151">金额</text>
            <text x="30" y="40" text-anchor="middle" font-size="7" fill="#6b7280">A</text>
            <text x="75" y="40" text-anchor="middle" font-size="7" fill="#6b7280">1240</text>
            <text x="122" y="40" text-anchor="middle" font-size="7" fill="#6b7280">38200</text>
            <text x="30" y="55" text-anchor="middle" font-size="7" fill="#6b7280">B</text>
            <text x="75" y="55" text-anchor="middle" font-size="7" fill="#6b7280">892</text>
            <text x="122" y="55" text-anchor="middle" font-size="7" fill="#6b7280">26500</text>
            <text x="30" y="70" text-anchor="middle" font-size="7" fill="#6b7280">C</text>
            <text x="75" y="70" text-anchor="middle" font-size="7" fill="#6b7280">2105</text>
            <text x="122" y="70" text-anchor="middle" font-size="7" fill="#6b7280">59200</text>
          </svg>` },
      { lv: 'lv2', score: `5.0–6.9分`, title: `基础规范`, criteria: [`表头深色背景区分`, `斑马纹交替行`, `千分位数字格式化`], delta: `比 L1 多：表头样式 + 斑马纹 + 数字格式`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="140" height="15" fill="#3b82f6" rx="2"/>
            <text x="30" y="25" text-anchor="middle" font-size="7" fill="white" font-weight="600">品类</text>
            <text x="82" y="25" text-anchor="middle" font-size="7" fill="white" font-weight="600">销量</text>
            <text x="130" y="25" text-anchor="middle" font-size="7" fill="white" font-weight="600">金额</text>
            <rect x="10" y="30" width="140" height="14" fill="#f8fafc"/>
            <rect x="10" y="44" width="140" height="14" fill="white"/>
            <rect x="10" y="58" width="140" height="14" fill="#f8fafc"/>
            <rect x="10" y="72" width="140" height="14" fill="white"/>
            <text x="30" y="40" text-anchor="middle" font-size="7" fill="#374151">A</text>
            <text x="82" y="40" text-anchor="middle" font-size="7" fill="#374151">1,240</text>
            <text x="130" y="40" text-anchor="middle" font-size="7" fill="#374151">38,200</text>
            <text x="30" y="54" text-anchor="middle" font-size="7" fill="#374151">B</text>
            <text x="82" y="54" text-anchor="middle" font-size="7" fill="#374151">892</text>
            <text x="130" y="54" text-anchor="middle" font-size="7" fill="#374151">26,500</text>
            <text x="30" y="68" text-anchor="middle" font-size="7" fill="#374151">C</text>
            <text x="82" y="68" text-anchor="middle" font-size="7" fill="#374151">2,105</text>
            <text x="130" y="68" text-anchor="middle" font-size="7" fill="#374151">59,200</text>
            <text x="30" y="82" text-anchor="middle" font-size="7" fill="#374151">D</text>
            <text x="82" y="82" text-anchor="middle" font-size="7" fill="#374151">430</text>
            <text x="130" y="82" text-anchor="middle" font-size="7" fill="#374151">14,100</text>
          </svg>` },
      { lv: 'lv3', score: `7.0–8.4分`, title: `专业整洁`, criteria: [`按关键列排序（销量降序）`, `占比列内嵌迷你 bar`, `首行高亮强调最大值`], delta: `比 L2 多：排序 + 迷你bar + 关键行高亮`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="15" width="140" height="15" fill="#1e40af" rx="2"/>
            <text x="28" y="25" text-anchor="middle" font-size="6.5" fill="white" font-weight="600">品类</text>
            <text x="72" y="25" text-anchor="middle" font-size="6.5" fill="white" font-weight="600">销量</text>
            <text x="116" y="25" text-anchor="middle" font-size="6.5" fill="white" font-weight="600">金额</text>
            <text x="148" y="25" text-anchor="middle" font-size="6.5" fill="white" font-weight="600">占比</text>
            <rect x="10" y="30" width="140" height="14" fill="#eff6ff"/>
            <text x="28" y="40" text-anchor="middle" font-size="7" fill="#1e40af" font-weight="700">C</text>
            <text x="72" y="40" text-anchor="middle" font-size="7" fill="#374151" font-weight="600">2,105</text>
            <text x="116" y="40" text-anchor="middle" font-size="7" fill="#374151">59,200</text>
            <rect x="138" y="32" width="10" height="6" fill="#3b82f6" rx="1" opacity="0.85"/>
            <rect x="10" y="44" width="140" height="14" fill="white"/>
            <text x="28" y="54" text-anchor="middle" font-size="7" fill="#374151">A</text>
            <text x="72" y="54" text-anchor="middle" font-size="7" fill="#374151">1,240</text>
            <text x="116" y="54" text-anchor="middle" font-size="7" fill="#374151">38,200</text>
            <rect x="138" y="46" width="6" height="6" fill="#3b82f6" rx="1" opacity="0.6"/>
            <rect x="10" y="58" width="140" height="14" fill="#eff6ff"/>
            <text x="28" y="68" text-anchor="middle" font-size="7" fill="#374151">B</text>
            <text x="72" y="68" text-anchor="middle" font-size="7" fill="#374151">892</text>
            <text x="116" y="68" text-anchor="middle" font-size="7" fill="#374151">26,500</text>
            <rect x="138" y="60" width="4" height="6" fill="#3b82f6" rx="1" opacity="0.5"/>
            <rect x="10" y="72" width="140" height="14" fill="white"/>
            <text x="28" y="82" text-anchor="middle" font-size="7" fill="#9ca3af">D</text>
            <text x="72" y="82" text-anchor="middle" font-size="7" fill="#9ca3af">430</text>
            <text x="116" y="82" text-anchor="middle" font-size="7" fill="#9ca3af">14,100</text>
            <rect x="138" y="74" width="2" height="6" fill="#3b82f6" rx="1" opacity="0.35"/>
            <text x="72" y="12" text-anchor="middle" font-size="6" fill="#9ca3af">已按销量排序 ↓</text>
          </svg>` },
      { lv: 'lv4', score: `8.5–9.5分`, title: `设计精良`, criteria: [`环比列颜色编码方向`, `状态标签（达标/观察/风险/预警）`, `合计行深色背景`], delta: `比 L3 多：状态标签 + 环比列 + 合计行`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="14" width="140" height="15" fill="#1e40af" rx="2"/>
            <text x="26" y="24" text-anchor="middle" font-size="6" fill="white" font-weight="700">品类</text>
            <text x="58" y="24" text-anchor="middle" font-size="6" fill="white" font-weight="700">销量</text>
            <text x="92" y="24" text-anchor="middle" font-size="6" fill="white" font-weight="700">金额</text>
            <text x="120" y="24" text-anchor="middle" font-size="6" fill="white" font-weight="700">环比</text>
            <text x="148" y="24" text-anchor="middle" font-size="6" fill="white" font-weight="700">状态</text>
            <rect x="10" y="29" width="140" height="13" fill="#eff6ff"/>
            <text x="26" y="38" text-anchor="middle" font-size="6.5" fill="#1e40af" font-weight="700">C★</text>
            <text x="58" y="38" text-anchor="middle" font-size="6.5" fill="#1e40af" font-weight="700">2,105</text>
            <text x="92" y="38" text-anchor="middle" font-size="6.5" fill="#1e40af" font-weight="700">59,200</text>
            <text x="120" y="38" text-anchor="middle" font-size="6.5" fill="#10b981" font-weight="700">+12%</text>
            <rect x="138" y="31" width="14" height="10" fill="#dcfce7" rx="2"/>
            <text x="145" y="38.5" text-anchor="middle" font-size="5.5" fill="#166534" font-weight="700">达标</text>
            <rect x="10" y="42" width="140" height="13" fill="white"/>
            <text x="26" y="51" text-anchor="middle" font-size="6.5" fill="#374151">A</text>
            <text x="58" y="51" text-anchor="middle" font-size="6.5" fill="#374151">1,240</text>
            <text x="92" y="51" text-anchor="middle" font-size="6.5" fill="#374151">38,200</text>
            <text x="120" y="51" text-anchor="middle" font-size="6.5" fill="#6b7280">+3%</text>
            <rect x="138" y="44" width="14" height="10" fill="#fef9c3" rx="2"/>
            <text x="145" y="51.5" text-anchor="middle" font-size="5.5" fill="#854d0e" font-weight="700">观察</text>
            <rect x="10" y="55" width="140" height="13" fill="#eff6ff"/>
            <text x="26" y="64" text-anchor="middle" font-size="6.5" fill="#374151">B</text>
            <text x="58" y="64" text-anchor="middle" font-size="6.5" fill="#374151">892</text>
            <text x="92" y="64" text-anchor="middle" font-size="6.5" fill="#374151">26,500</text>
            <text x="120" y="64" text-anchor="middle" font-size="6.5" fill="#6b7280">-1%</text>
            <rect x="138" y="57" width="14" height="10" fill="#fef2f2" rx="2"/>
            <text x="145" y="64.5" text-anchor="middle" font-size="5.5" fill="#991b1b" font-weight="700">风险</text>
            <rect x="10" y="68" width="140" height="13" fill="white"/>
            <text x="26" y="77" text-anchor="middle" font-size="6.5" fill="#9ca3af">D</text>
            <text x="58" y="77" text-anchor="middle" font-size="6.5" fill="#9ca3af">430</text>
            <text x="92" y="77" text-anchor="middle" font-size="6.5" fill="#9ca3af">14,100</text>
            <text x="120" y="77" text-anchor="middle" font-size="6.5" fill="#ef4444">-8%</text>
            <rect x="138" y="70" width="14" height="10" fill="#fef2f2" rx="2"/>
            <text x="145" y="77.5" text-anchor="middle" font-size="5.5" fill="#991b1b" font-weight="700">预警</text>
            <rect x="10" y="81" width="140" height="13" fill="#1e3a5f"/>
            <text x="26" y="90" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">合计</text>
            <text x="58" y="90" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">4,667</text>
            <text x="92" y="90" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">138,000</text>
            <text x="120" y="90" text-anchor="middle" font-size="6.5" fill="#86efac">+5.2%</text>
          </svg>` },
      { lv: 'lv5', score: `9.6–10分`, title: `顶级品质`, criteria: [`深色看板风格（暗色主题）`, `左侧彩色状态边框`, `进度条可视化完成率`, `数字+图形双重编码`], delta: `比 L4 多：深色主题 + 进度条 + 左侧状态线`, svg: `<svg viewBox="0 0 160 130" xmlns="http://www.w3.org/2000/svg">
            <text x="14" y="14" font-size="8" fill="#f1f5f9" font-weight="700">品类销售看板</text>
            <text x="148" y="14" text-anchor="end" font-size="6" fill="#475569">更新: 今日</text>
            <rect x="10" y="18" width="140" height="12" fill="#0f172a" rx="2"/>
            <text x="24" y="27" text-anchor="middle" font-size="5.5" fill="#94a3b8" font-weight="600">品类</text>
            <text x="52" y="27" text-anchor="middle" font-size="5.5" fill="#94a3b8" font-weight="600">销量</text>
            <text x="82" y="27" text-anchor="middle" font-size="5.5" fill="#94a3b8" font-weight="600">进度</text>
            <text x="112" y="27" text-anchor="middle" font-size="5.5" fill="#94a3b8" font-weight="600">环比</text>
            <text x="141" y="27" text-anchor="middle" font-size="5.5" fill="#94a3b8" font-weight="600">状态</text>
            <rect x="10" y="30" width="140" height="13" fill="#172554"/>
            <rect x="10" y="30" width="2" height="13" fill="#3b82f6"/>
            <text x="24" y="39.5" text-anchor="middle" font-size="6.5" fill="#93c5fd" font-weight="700">C</text>
            <text x="52" y="39.5" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">2,105</text>
            <rect x="64" y="33" width="34" height="7" fill="#3b82f6" rx="2" opacity="0.9"/>
            <text x="81" y="39" text-anchor="middle" font-size="5" fill="white">100%</text>
            <text x="112" y="39.5" text-anchor="middle" font-size="6.5" fill="#34d399" font-weight="700">+12%</text>
            <rect x="132" y="32" width="16" height="10" fill="#064e3b" rx="2"/>
            <text x="140" y="39.5" text-anchor="middle" font-size="5.5" fill="#34d399" font-weight="700">达标</text>
            <rect x="10" y="43" width="140" height="13" fill="#0f172a"/>
            <rect x="10" y="43" width="2" height="13" fill="#6366f1"/>
            <text x="24" y="52.5" text-anchor="middle" font-size="6.5" fill="#94a3b8">A</text>
            <text x="52" y="52.5" text-anchor="middle" font-size="6.5" fill="#e2e8f0">1,240</text>
            <rect x="64" y="46" width="34" height="7" fill="#1e293b" rx="2"/>
            <rect x="64" y="46" width="21" height="7" fill="#6366f1" rx="2" opacity="0.8"/>
            <text x="112" y="52.5" text-anchor="middle" font-size="6.5" fill="#86efac">+3%</text>
            <rect x="132" y="45" width="16" height="10" fill="#422006" rx="2"/>
            <text x="140" y="52.5" text-anchor="middle" font-size="5.5" fill="#fbbf24" font-weight="700">观察</text>
            <rect x="10" y="56" width="140" height="13" fill="#0f172a"/>
            <rect x="10" y="56" width="2" height="13" fill="#6b7280"/>
            <text x="24" y="65.5" text-anchor="middle" font-size="6.5" fill="#94a3b8">B</text>
            <text x="52" y="65.5" text-anchor="middle" font-size="6.5" fill="#e2e8f0">892</text>
            <rect x="64" y="59" width="34" height="7" fill="#1e293b" rx="2"/>
            <rect x="64" y="59" width="14" height="7" fill="#6b7280" rx="2" opacity="0.7"/>
            <text x="112" y="65.5" text-anchor="middle" font-size="6.5" fill="#fca5a5">-1%</text>
            <rect x="132" y="58" width="16" height="10" fill="#7f1d1d" rx="2"/>
            <text x="140" y="65.5" text-anchor="middle" font-size="5.5" fill="#fca5a5" font-weight="700">风险</text>
            <rect x="10" y="69" width="140" height="13" fill="#0f172a"/>
            <rect x="10" y="69" width="2" height="13" fill="#ef4444"/>
            <text x="24" y="78.5" text-anchor="middle" font-size="6.5" fill="#94a3b8">D</text>
            <text x="52" y="78.5" text-anchor="middle" font-size="6.5" fill="#e2e8f0">430</text>
            <rect x="64" y="72" width="34" height="7" fill="#1e293b" rx="2"/>
            <rect x="64" y="72" width="7" height="7" fill="#ef4444" rx="2" opacity="0.7"/>
            <text x="112" y="78.5" text-anchor="middle" font-size="6.5" fill="#f87171" font-weight="700">-8%</text>
            <rect x="132" y="71" width="16" height="10" fill="#7f1d1d" rx="2"/>
            <text x="140" y="78.5" text-anchor="middle" font-size="5.5" fill="#f87171" font-weight="700">预警</text>
            <rect x="10" y="82" width="140" height="13" fill="#1e3a5f"/>
            <text x="24" y="91.5" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">合计</text>
            <text x="52" y="91.5" text-anchor="middle" font-size="6.5" fill="white" font-weight="700">4,667</text>
            <rect x="64" y="85" width="34" height="7" fill="#1e40af" rx="2"/>
            <rect x="64" y="85" width="28" height="7" fill="#60a5fa" rx="2"/>
            <text x="112" y="91.5" text-anchor="middle" font-size="6.5" fill="#86efac" font-weight="700">+5.2%</text>
          </svg>` },
    ],
  },
  {
    id: 'ev-std',
    icon: `📐`,
    title: `通用评测标准 · Universal Criteria`,
    desc: `五维评测标准在所有图表类型上的 L1 → L5 映射`,
    levels: [
    ],
  },
]

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

/* ── Quality Eval Dimension ── */
.dim-btn-eval {
  background: oklch(98% 0.01 55);
  border-color: oklch(80% 0.08 55);
  color: oklch(45% 0.12 55);
}
.dim-btn-eval.active {
  background: oklch(55% 0.18 55);
  border-color: oklch(55% 0.18 55);
  color: white;
}
.eval-intro {
  font-size: 14px;
  color: oklch(50% 0.02 260);
  margin-bottom: 24px;
  padding: 14px 18px;
  background: oklch(98% 0.01 55);
  border-left: 3px solid oklch(55% 0.18 55);
  border-radius: 6px;
}
.eval-tag-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 40px;
}
.eval-tag-link {
  padding: 6px 14px;
  background: white;
  border: 1px solid oklch(88% 0.015 260);
  border-radius: 20px;
  font-size: 12px;
  color: oklch(40% 0.02 260);
  text-decoration: none;
  transition: all 0.2s;
}
.eval-tag-link:hover {
  background: oklch(95% 0.03 260);
  border-color: oklch(65% 0.12 260);
  color: oklch(35% 0.12 260);
}
.eval-section {
  margin-bottom: 72px;
  scroll-margin-top: 80px;
}
.eval-section-hdr {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 2px solid oklch(92% 0.015 260);
}
.eval-icon {
  width: 52px;
  height: 52px;
  background: oklch(95% 0.02 260);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  flex-shrink: 0;
}
.eval-title {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 4px;
}
.eval-desc {
  font-size: 13px;
  color: oklch(50% 0.02 260);
  line-height: 1.6;
}
.eval-std-note {
  padding: 16px;
  background: oklch(96% 0.01 260);
  border-radius: 8px;
  font-size: 13px;
  color: oklch(55% 0.02 260);
  font-style: italic;
}
/* Level Ladder */
.level-ladder {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 1100px) {
  .level-ladder { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 700px) {
  .level-ladder { grid-template-columns: 1fr 1fr; }
}
.level-card {
  background: white;
  border: 1.5px solid oklch(88% 0.015 260);
  border-radius: 14px;
  overflow: hidden;
  transition: box-shadow 0.2s;
}
.level-card:hover {
  box-shadow: 0 6px 20px oklch(0% 0 0 / 0.07);
}
.level-card.lv5 {
  border-color: oklch(70% 0.12 55);
}
.lc-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: oklch(97% 0.01 260);
  border-bottom: 1px solid oklch(92% 0.01 260);
}
.lc-badge {
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
}
.lc-badge.lv1 { background: #f3f4f6; color: #6b7280; }
.lc-badge.lv2 { background: #dbeafe; color: #1d4ed8; }
.lc-badge.lv3 { background: #dcfce7; color: #15803d; }
.lc-badge.lv4 { background: #fef9c3; color: #a16207; }
.lc-badge.lv5 { background: oklch(92% 0.08 55); color: oklch(42% 0.18 55); }
.lc-score {
  font-size: 10px;
  color: oklch(55% 0.02 260);
}
.lc-preview {
  background: oklch(97% 0.01 260);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 150px;
  overflow: hidden;
}
.lc-preview :deep(svg) {
  width: 100%;
  height: 100%;
  max-height: 130px;
}
.lc-body {
  padding: 12px 14px;
}
.lc-title {
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 8px;
}
.lc-criteria {
  list-style: none;
  padding: 0;
  margin: 0 0 8px;
}
.lc-criteria li {
  font-size: 11px;
  color: oklch(45% 0.02 260);
  padding: 2px 0;
  padding-left: 12px;
  position: relative;
  line-height: 1.5;
}
.lc-criteria li::before {
  content: '·';
  position: absolute;
  left: 0;
  color: oklch(65% 0.04 260);
}
.lc-delta {
  font-size: 11px;
  color: oklch(50% 0.1 260);
  padding: 6px 8px;
  background: oklch(96% 0.01 260);
  border-radius: 5px;
  line-height: 1.5;
}

</style>
