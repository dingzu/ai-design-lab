<template>
  <main class="articles-page">
    <div class="wrap">

      <!-- Header -->
      <header class="page-header">
        <div class="header-eyebrow">
          <span class="tag tag-orange">精选文章</span>
        </div>
        <h1 class="page-title">设计洞察文章</h1>
        <p class="page-desc text-2">来自团队内部分享与行业研究的精选摘要，涵盖 AI 工具、设计方法论与行业趋势</p>
      </header>

      <!-- Article grid -->
      <div class="article-grid">
        <RouterLink
          v-for="article in articles"
          :key="article.id"
          :to="`/articles/${article.id}`"
          class="article-card"
        >
          <!-- Hero：嵌入文章原版 SVG，等比缩放 -->
          <div class="card-hero">
            <svg
              :viewBox="article.svgViewBox"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              class="card-hero-svg"
              aria-hidden="true"
              v-html="article.svgContent"
            />
            <div class="card-hero-tags">
              <span
                v-for="tag in article.tags"
                :key="tag"
                class="card-tag"
                :style="{ color: article.tagColor }"
              >{{ tag }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="card-body">
            <h3 class="card-title">{{ article.title }}</h3>
            <p class="card-desc text-2">{{ article.desc }}</p>
            <div class="card-footer">
              <span class="card-type text-3">{{ article.type }}</span>
              <span class="card-arrow text-3">阅读 →</span>
            </div>
          </div>
        </RouterLink>
      </div>

    </div>
  </main>
</template>

<script setup>
// ─── 文章 1：hue=28 暖橙，AI 时代产品与组织 ───────────────────────────────
const svg1 = `<defs>
  <linearGradient id="a1bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(28,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(28,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(28,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a1gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(28,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(28,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a1fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(28,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a1fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(28,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(28,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a1fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(28,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(28,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a1bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a1gA)"/>
<g opacity="0.55">
  <line x1="113" y1="14" x2="113" y2="76" stroke="hsl(28,30%,74%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="69" y="14" width="88" height="13" rx="3.5" fill="hsl(28,45%,90%)" stroke="hsl(28,36%,74%)" stroke-width="0.7" filter="url(#a1fs)"/>
  <text x="113" y="24" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(28,50%,28%)" font-family="-apple-system,PingFang SC,sans-serif">L1 单步执行</text>
  <line x1="113" y1="27" x2="113" y2="37" stroke="hsl(28,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="37" width="88" height="13" rx="3.5" fill="hsl(28,42%,83%)" stroke="hsl(28,34%,68%)" stroke-width="0.7" filter="url(#a1fs)"/>
  <text x="113" y="47" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(28,48%,22%)" font-family="-apple-system,PingFang SC,sans-serif">L3 工具调用</text>
  <line x1="113" y1="50" x2="113" y2="60" stroke="hsl(28,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="60" width="88" height="13" rx="3.5" fill="hsl(28,40%,76%)" stroke="hsl(28,32%,62%)" stroke-width="0.7" filter="url(#a1fs)"/>
  <text x="113" y="70" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(28,46%,16%)" font-family="-apple-system,PingFang SC,sans-serif">L5 自主决策</text>
  <text x="113" y="86" text-anchor="middle" font-size="6.5" fill="hsl(28,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">Agent 演进路径</text>
</g>
<g transform="translate(265,14)" filter="url(#a1fs)">
  <rect width="74" height="38" rx="5" fill="#ffffff" fill-opacity="0.90"/>
  <text x="37" y="13" text-anchor="middle" font-size="10" fill="hsl(28,40%,74%)">✦</text>
  <text x="37" y="25" text-anchor="middle" font-size="8" fill="hsl(28,30%,36%)" font-family="-apple-system,PingFang SC,sans-serif" font-weight="600">设计师</text>
  <rect x="8" y="30" width="22" height="3" rx="1.5" fill="hsl(28,40%,84%)"/>
  <rect x="36" y="30" width="30" height="3" rx="1.5" fill="hsl(28,30%,89%)"/>
</g>
<text x="340" y="60" text-anchor="middle" font-size="11" fill="hsl(28,36%,62%)">⇄</text>
<rect x="303" y="52" width="74" height="14" rx="7" fill="hsl(28,48%,50%)" fill-opacity="0.10"/>
<text x="340" y="62" text-anchor="middle" font-size="7" fill="hsl(28,50%,34%)" font-family="-apple-system,PingFang SC,sans-serif" font-weight="700">AI 协作层</text>
<g transform="translate(341,14)" filter="url(#a1fs)">
  <rect width="74" height="38" rx="5" fill="hsl(28,20%,24%)" fill-opacity="0.88"/>
  <text x="37" y="13" text-anchor="middle" font-size="9" fill="hsl(28,35%,72%)">⌨</text>
  <text x="37" y="25" text-anchor="middle" font-size="8" fill="hsl(28,25%,84%)" font-family="-apple-system,PingFang SC,sans-serif" font-weight="600">工程师</text>
  <rect x="8" y="30" width="22" height="3" rx="1.5" fill="hsl(28,28%,46%)"/>
  <rect x="36" y="30" width="30" height="3" rx="1.5" fill="hsl(28,22%,38%)"/>
</g>
<text x="340" y="76" text-anchor="middle" font-size="6.5" fill="hsl(28,22%,58%)" font-family="-apple-system,PingFang SC,sans-serif">专业边界消融</text>
<g opacity="0.55">
  <rect x="517" y="14" width="100" height="30" rx="5" fill="hsl(28,20%,96%)" stroke="hsl(28,25%,82%)" stroke-width="0.7"/>
  <text x="527" y="25" font-size="6.5" fill="hsl(28,20%,54%)" font-family="-apple-system,PingFang SC,sans-serif">传统：固定界面</text>
  <rect x="524" y="28" width="22" height="9" rx="2" fill="hsl(28,35%,86%)" stroke="hsl(28,25%,78%)" stroke-width="0.5"/>
  <rect x="552" y="28" width="22" height="9" rx="2" fill="hsl(28,35%,86%)" stroke="hsl(28,25%,78%)" stroke-width="0.5"/>
  <rect x="580" y="28" width="32" height="9" rx="2" fill="hsl(28,30%,80%)" stroke="hsl(28,25%,72%)" stroke-width="0.5"/>
  <text x="567" y="54" text-anchor="middle" font-size="9" fill="hsl(28,25%,65%)">↓</text>
  <rect x="517" y="58" width="100" height="30" rx="5" fill="hsl(28,45%,93%)" stroke="hsl(28,35%,76%)" stroke-width="0.7"/>
  <text x="527" y="69" font-size="6.5" fill="hsl(28,45%,36%)" font-family="-apple-system,PingFang SC,sans-serif" font-weight="600">AI：自适应容器</text>
  <rect x="524" y="72" width="34" height="10" rx="2" fill="hsl(28,50%,88%)" stroke="hsl(28,42%,70%)" stroke-width="0.5" stroke-dasharray="2,2"/>
  <rect x="564" y="72" width="16" height="10" rx="2" fill="hsl(28,50%,88%)" stroke="hsl(28,42%,70%)" stroke-width="0.5" stroke-dasharray="2,2"/>
  <rect x="586" y="72" width="24" height="10" rx="2" fill="hsl(28,50%,88%)" stroke="hsl(28,42%,70%)" stroke-width="0.5" stroke-dasharray="2,2"/>
  <text x="567" y="100" text-anchor="middle" font-size="6.5" fill="hsl(28,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">产品形态演进</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a1fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a1fR)"/>`

// ─── 文章 2：hue=175 青绿，AI 重塑设计 ────────────────────────────────────
const svg2 = `<defs>
  <linearGradient id="a2bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(175,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(175,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(175,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a2gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(175,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(175,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a2fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(175,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a2fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(175,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(175,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a2fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(175,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(175,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a2bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a2gA)"/>
<g opacity="0.55">
  <line x1="113" y1="14" x2="113" y2="76" stroke="hsl(175,30%,74%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="69" y="14" width="88" height="13" rx="3.5" fill="hsl(175,46%,91%)" stroke="hsl(175,34%,73%)" stroke-width="0.7" filter="url(#a2fs)"/>
  <text x="113" y="24" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(175,50%,28%)" font-family="-apple-system,PingFang SC,sans-serif">S1 在线办公</text>
  <line x1="113" y1="27" x2="113" y2="37" stroke="hsl(175,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="37" width="88" height="13" rx="3.5" fill="hsl(175,42%,80%)" stroke="hsl(175,30%,62%)" stroke-width="0.7" filter="url(#a2fs)"/>
  <text x="113" y="47" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(175,46%,20%)" font-family="-apple-system,PingFang SC,sans-serif">S3 辅助决策</text>
  <line x1="113" y1="50" x2="113" y2="60" stroke="hsl(175,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="60" width="88" height="13" rx="3.5" fill="hsl(175,38%,68%)" stroke="hsl(175,26%,50%)" stroke-width="0.7" filter="url(#a2fs)"/>
  <text x="113" y="70" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(175,42%,12%)" font-family="-apple-system,PingFang SC,sans-serif">S5 全自动化</text>
  <text x="113" y="86" text-anchor="middle" font-size="6.5" fill="hsl(175,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">智能化升级阶梯</text>
</g>
<g filter="url(#a2fs)" transform="translate(299,14)">
  <rect width="82" height="16" rx="4" fill="#ffffff" fill-opacity="0.90"/>
  <text x="41" y="11" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(175,42%,26%)" font-family="-apple-system,PingFang SC,sans-serif">① 场景调研</text>
</g>
<text x="340" y="37" text-anchor="middle" font-size="9" fill="hsl(175,30%,58%)">↓</text>
<g filter="url(#a2fs)" transform="translate(299,40)">
  <rect width="82" height="16" rx="4" fill="#ffffff" fill-opacity="0.90"/>
  <text x="41" y="11" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(175,42%,26%)" font-family="-apple-system,PingFang SC,sans-serif">② 场景评估</text>
</g>
<text x="340" y="63" text-anchor="middle" font-size="9" fill="hsl(175,30%,58%)">↓</text>
<g filter="url(#a2fs)" transform="translate(299,66)">
  <rect width="82" height="16" rx="4" fill="hsl(175,44%,84%)" fill-opacity="0.92"/>
  <text x="41" y="11" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(175,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">③ 场景构建</text>
</g>
<text x="340" y="89" text-anchor="middle" font-size="9" fill="hsl(175,30%,58%)">↓</text>
<g filter="url(#a2fs)" transform="translate(299,91)">
  <rect width="82" height="9" rx="4" fill="hsl(175,40%,72%)" fill-opacity="0.92"/>
  <text x="41" y="7.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(175,44%,16%)" font-family="-apple-system,PingFang SC,sans-serif">④ 设计演示</text>
</g>
<g opacity="0.55">
  <rect x="517" y="14" width="100" height="12" rx="3.5" fill="hsl(175,45%,90%)" stroke="hsl(175,32%,72%)" stroke-width="0.6"/>
  <text x="567" y="23" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(175,42%,26%)" font-family="-apple-system,PingFang SC,sans-serif">业务梳理 Agent</text>
  <text x="567" y="33" text-anchor="middle" font-size="8" fill="hsl(175,30%,58%)">↓</text>
  <rect x="517" y="36" width="100" height="12" rx="3.5" fill="hsl(175,41%,80%)" stroke="hsl(175,28%,62%)" stroke-width="0.6"/>
  <text x="567" y="45" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(175,42%,18%)" font-family="-apple-system,PingFang SC,sans-serif">技术方案 Agent</text>
  <text x="567" y="55" text-anchor="middle" font-size="8" fill="hsl(175,30%,58%)">↓</text>
  <rect x="517" y="58" width="100" height="12" rx="3.5" fill="hsl(175,37%,68%)" stroke="hsl(175,24%,50%)" stroke-width="0.6"/>
  <text x="567" y="67" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(175,42%,10%)" font-family="-apple-system,PingFang SC,sans-serif">脚本生成 Agent</text>
  <text x="567" y="82" text-anchor="middle" font-size="6.5" fill="hsl(175,22%,58%)" font-family="-apple-system,PingFang SC,sans-serif">Agent 协同链</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a2fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a2fR)"/>`

// ─── 文章 3：hue=210 冷蓝，Token 设计 ─────────────────────────────────────
const svg3 = `<defs>
  <linearGradient id="a3bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(210,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(210,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(210,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a3gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(210,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(210,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a3fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(210,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a3fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(210,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(210,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a3fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(210,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(210,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a3bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a3gA)"/>
<g opacity="0.55">
  <line x1="113" y1="14" x2="113" y2="76" stroke="hsl(210,30%,74%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="69" y="14" width="88" height="14" rx="3.5" fill="hsl(210,45%,90%)" stroke="hsl(210,36%,74%)" stroke-width="0.7" filter="url(#a3fs)"/>
  <text x="113" y="24.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(210,50%,28%)" font-family="-apple-system,PingFang SC,sans-serif">Lv1 基础色板 Token</text>
  <line x1="113" y1="28" x2="113" y2="38" stroke="hsl(210,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="38" width="88" height="14" rx="3.5" fill="hsl(210,42%,82%)" stroke="hsl(210,34%,68%)" stroke-width="0.7" filter="url(#a3fs)"/>
  <text x="113" y="48.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(210,48%,22%)" font-family="-apple-system,PingFang SC,sans-serif">Lv2 语义化 Token</text>
  <line x1="113" y1="52" x2="113" y2="62" stroke="hsl(210,30%,74%)" stroke-width="0.8"/>
  <rect x="69" y="62" width="88" height="14" rx="3.5" fill="hsl(210,40%,74%)" stroke="hsl(210,32%,62%)" stroke-width="0.7" filter="url(#a3fs)"/>
  <text x="113" y="72.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(210,46%,16%)" font-family="-apple-system,PingFang SC,sans-serif">Lv3 组件 Token</text>
  <text x="113" y="86" text-anchor="middle" font-size="6.5" fill="hsl(210,22%,62%)" font-family="-apple-system,PingFang SC,sans-serif">Token 三级结构</text>
</g>
<rect x="264" y="14" width="72" height="40" rx="5" fill="#ffffff" fill-opacity="0.90" filter="url(#a3fs)"/>
<rect x="273" y="22" width="26" height="4" rx="2" fill="hsl(210,18%,24%)"/>
<rect x="273" y="30" width="44" height="3" rx="1.5" fill="hsl(210,14%,72%)"/>
<rect x="273" y="37" width="34" height="3" rx="1.5" fill="hsl(210,14%,82%)"/>
<text x="300" y="61" text-anchor="middle" font-size="6.5" fill="hsl(210,22%,56%)" font-family="-apple-system,PingFang SC,sans-serif">Light</text>
<text x="340" y="37" text-anchor="middle" font-size="11" fill="hsl(210,36%,62%)">⇆</text>
<rect x="344" y="14" width="72" height="40" rx="5" fill="hsl(210,20%,24%)" fill-opacity="0.90" filter="url(#a3fs)"/>
<rect x="353" y="22" width="26" height="4" rx="2" fill="hsl(210,25%,86%)"/>
<rect x="353" y="30" width="44" height="3" rx="1.5" fill="hsl(210,18%,50%)"/>
<rect x="353" y="37" width="34" height="3" rx="1.5" fill="hsl(210,16%,40%)"/>
<text x="380" y="61" text-anchor="middle" font-size="6.5" fill="hsl(210,22%,56%)" font-family="-apple-system,PingFang SC,sans-serif">Dark</text>
<text x="340" y="76" text-anchor="middle" font-size="6.5" fill="hsl(210,22%,58%)" font-family="-apple-system,PingFang SC,sans-serif">语义 Token 驱动主题切换</text>
<g opacity="0.55">
  <rect x="517" y="14" width="100" height="14" rx="4" fill="hsl(210,44%,86%)" stroke="hsl(210,34%,70%)" stroke-width="0.7" filter="url(#a3fs)"/>
  <text x="567" y="24.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(210,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">Design System</text>
  <text x="567" y="36" text-anchor="middle" font-size="9" fill="hsl(210,32%,64%)">⇅</text>
  <rect x="517" y="38" width="100" height="14" rx="4" fill="hsl(210,42%,80%)" stroke="hsl(210,32%,64%)" stroke-width="0.7" filter="url(#a3fs)"/>
  <text x="567" y="48.5" text-anchor="middle" font-size="7" font-weight="700" fill="hsl(210,46%,18%)" font-family="-apple-system,PingFang SC,sans-serif">AI 工具层</text>
  <rect x="517" y="58" width="44" height="11" rx="2.5" fill="#ffffff" fill-opacity="0.76"/>
  <text x="539" y="66.5" text-anchor="middle" font-size="6" fill="hsl(210,40%,30%)" font-family="-apple-system,PingFang SC,sans-serif">智能生成</text>
  <rect x="573" y="58" width="44" height="11" rx="2.5" fill="#ffffff" fill-opacity="0.76"/>
  <text x="595" y="66.5" text-anchor="middle" font-size="6" fill="hsl(210,40%,30%)" font-family="-apple-system,PingFang SC,sans-serif">质量保障</text>
  <text x="567" y="82" text-anchor="middle" font-size="6.5" fill="hsl(210,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">AI × Design System</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a3fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a3fR)"/>`

// ─── 文章 4：hue=270 紫调，知识库与运营 ───────────────────────────────────
const svg4 = `<defs>
  <linearGradient id="a4bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(270,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(270,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(270,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a4gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(270,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(270,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a4fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(270,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a4fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(270,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(270,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a4fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(270,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(270,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a4bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a4gA)"/>
<g opacity="0.55">
  <line x1="113" y1="12" x2="113" y2="84" stroke="hsl(270,28%,72%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="69" y="12" width="88" height="13" rx="3.5" fill="hsl(270,44%,90%)" stroke="hsl(270,32%,73%)" stroke-width="0.7" filter="url(#a4fs)"/>
  <text x="113" y="22" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(270,48%,28%)" font-family="-apple-system,PingFang SC,sans-serif">身份层</text>
  <line x1="113" y1="25" x2="113" y2="35" stroke="hsl(270,28%,72%)" stroke-width="0.8"/>
  <rect x="69" y="35" width="88" height="13" rx="3.5" fill="hsl(270,40%,82%)" stroke="hsl(270,28%,64%)" stroke-width="0.7" filter="url(#a4fs)"/>
  <text x="113" y="45" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(270,44%,22%)" font-family="-apple-system,PingFang SC,sans-serif">资产层</text>
  <line x1="113" y1="48" x2="113" y2="58" stroke="hsl(270,28%,72%)" stroke-width="0.8"/>
  <rect x="69" y="58" width="88" height="13" rx="3.5" fill="hsl(270,36%,74%)" stroke="hsl(270,24%,56%)" stroke-width="0.7" filter="url(#a4fs)"/>
  <text x="113" y="68" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(270,40%,16%)" font-family="-apple-system,PingFang SC,sans-serif">状态层</text>
  <line x1="113" y1="71" x2="113" y2="81" stroke="hsl(270,28%,72%)" stroke-width="0.8"/>
  <rect x="69" y="81" width="88" height="13" rx="3.5" fill="hsl(270,32%,66%)" stroke="hsl(270,20%,48%)" stroke-width="0.7" filter="url(#a4fs)"/>
  <text x="113" y="91" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(270,36%,10%)" font-family="-apple-system,PingFang SC,sans-serif">SOP 层</text>
  <text x="113" y="104" text-anchor="middle" font-size="6.5" fill="hsl(270,20%,60%)" font-family="-apple-system,PingFang SC,sans-serif">知识库四层架构</text>
</g>
<g filter="url(#a4fs)">
  <rect x="291" y="12" width="98" height="38" rx="6" fill="#ffffff" fill-opacity="0.92"/>
  <text x="340" y="26" text-anchor="middle" font-size="8.5" font-weight="700" fill="hsl(270,40%,28%)" font-family="-apple-system,PingFang SC,sans-serif">skill()</text>
  <text x="340" y="38" text-anchor="middle" font-size="6.5" fill="hsl(270,24%,52%)" font-family="-apple-system,PingFang SC,sans-serif">定义做什么</text>
</g>
<text x="340" y="60" text-anchor="middle" font-size="10" fill="hsl(270,30%,58%)">⇣</text>
<g filter="url(#a4fs)">
  <rect x="291" y="63" width="98" height="38" rx="6" fill="hsl(270,30%,22%)" fill-opacity="0.88"/>
  <text x="340" y="77" text-anchor="middle" font-size="8.5" font-weight="700" fill="hsl(270,28%,86%)" font-family="-apple-system,PingFang SC,sans-serif">知识库</text>
  <text x="340" y="89" text-anchor="middle" font-size="6.5" fill="hsl(270,20%,68%)" font-family="-apple-system,PingFang SC,sans-serif">定义像不像</text>
</g>
<g opacity="0.55">
  <rect x="517" y="12" width="100" height="12" rx="3.5" fill="hsl(270,44%,90%)" stroke="hsl(270,30%,72%)" stroke-width="0.6"/>
  <text x="567" y="21" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(270,42%,28%)" font-family="-apple-system,PingFang SC,sans-serif">第一关 · 信任</text>
  <text x="567" y="31" text-anchor="middle" font-size="8" fill="hsl(270,28%,58%)">↓</text>
  <rect x="517" y="33" width="100" height="12" rx="3.5" fill="hsl(270,40%,80%)" stroke="hsl(270,26%,62%)" stroke-width="0.6"/>
  <text x="567" y="42" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(270,42%,20%)" font-family="-apple-system,PingFang SC,sans-serif">第二关 · 关联</text>
  <text x="567" y="52" text-anchor="middle" font-size="8" fill="hsl(270,28%,58%)">↓</text>
  <rect x="517" y="54" width="100" height="12" rx="3.5" fill="hsl(270,36%,68%)" stroke="hsl(270,22%,50%)" stroke-width="0.6"/>
  <text x="567" y="63" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(270,40%,12%)" font-family="-apple-system,PingFang SC,sans-serif">第三关 · 价值</text>
  <text x="567" y="82" text-anchor="middle" font-size="6.5" fill="hsl(270,20%,60%)" font-family="-apple-system,PingFang SC,sans-serif">运营三关漏斗</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a4fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a4fR)"/>`

// ─── 文章 5：hue=175 青绿，阿里云 UES 体验度量 ─────────────────────────────
const svg5 = `<defs>
  <linearGradient id="a5bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(175,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(175,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(175,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a5gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(175,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(175,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a5fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(175,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a5fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(175,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(175,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a5fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(175,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(175,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a5bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a5gA)"/>
<g opacity="0.55">
  <line x1="113" y1="12" x2="113" y2="90" stroke="hsl(175,30%,72%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="66" y="12" width="94" height="13" rx="3.5" fill="hsl(175,46%,90%)" stroke="hsl(175,34%,73%)" stroke-width="0.7" filter="url(#a5fs)"/>
  <text x="113" y="22" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(175,50%,28%)" font-family="-apple-system,PingFang SC,sans-serif">易用性 Ease of Use</text>
  <line x1="113" y1="25" x2="113" y2="35" stroke="hsl(175,30%,72%)" stroke-width="0.8"/>
  <rect x="66" y="35" width="94" height="13" rx="3.5" fill="hsl(175,42%,82%)" stroke="hsl(175,30%,64%)" stroke-width="0.7" filter="url(#a5fs)"/>
  <text x="113" y="45" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(175,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">一致性 Consistency</text>
  <line x1="113" y1="48" x2="113" y2="58" stroke="hsl(175,30%,72%)" stroke-width="0.8"/>
  <rect x="66" y="58" width="94" height="13" rx="3.5" fill="hsl(175,38%,74%)" stroke="hsl(175,26%,56%)" stroke-width="0.7" filter="url(#a5fs)"/>
  <text x="113" y="68" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(175,44%,16%)" font-family="-apple-system,PingFang SC,sans-serif">任务效率 Task</text>
  <text x="113" y="84" text-anchor="middle" font-size="6" fill="hsl(175,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">UES 五维度指标</text>
</g>
<g filter="url(#a5fs)" transform="translate(296,12)">
  <rect width="88" height="28" rx="5" fill="#ffffff" fill-opacity="0.92"/>
  <text x="44" y="13" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(175,42%,28%)" font-family="-apple-system,PingFang SC,sans-serif">用户反馈</text>
  <text x="44" y="24" text-anchor="middle" font-size="6.5" fill="hsl(175,28%,50%)" font-family="-apple-system,PingFang SC,sans-serif">2000+ 条语料</text>
</g>
<text x="340" y="48" text-anchor="middle" font-size="9" fill="hsl(175,36%,58%)">↓</text>
<g filter="url(#a5fs)" transform="translate(296,52)">
  <rect width="88" height="20" rx="4" fill="hsl(175,44%,84%)" fill-opacity="0.92"/>
  <text x="44" y="14" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(175,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">AI 智能分类</text>
</g>
<text x="340" y="80" text-anchor="middle" font-size="9" fill="hsl(175,36%,58%)">↓</text>
<g filter="url(#a5fs)" transform="translate(296,84)">
  <rect width="88" height="12" rx="3.5" fill="hsl(175,40%,72%)" fill-opacity="0.92"/>
  <text x="44" y="9.5" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(175,44%,14%)" font-family="-apple-system,PingFang SC,sans-serif">指标权重 → 体验优化</text>
</g>
<g opacity="0.55">
  <rect x="517" y="12" width="100" height="12" rx="3.5" fill="hsl(175,44%,88%)" stroke="hsl(175,30%,70%)" stroke-width="0.6"/>
  <text x="567" y="21" text-anchor="middle" font-size="6" font-weight="600" fill="hsl(175,44%,26%)" font-family="-apple-system,PingFang SC,sans-serif">指标文献 RAG</text>
  <text x="567" y="31" text-anchor="middle" font-size="8" fill="hsl(175,30%,58%)">↓</text>
  <rect x="517" y="33" width="100" height="12" rx="3.5" fill="hsl(175,40%,78%)" stroke="hsl(175,26%,60%)" stroke-width="0.6"/>
  <text x="567" y="42" text-anchor="middle" font-size="6" font-weight="600" fill="hsl(175,42%,18%)" font-family="-apple-system,PingFang SC,sans-serif">NLP 聚类分析</text>
  <text x="567" y="52" text-anchor="middle" font-size="8" fill="hsl(175,30%,58%)">↓</text>
  <rect x="517" y="54" width="100" height="12" rx="3.5" fill="hsl(175,36%,66%)" stroke="hsl(175,22%,48%)" stroke-width="0.6"/>
  <text x="567" y="63" text-anchor="middle" font-size="6" font-weight="600" fill="hsl(175,42%,10%)" font-family="-apple-system,PingFang SC,sans-serif">商业关联验证</text>
  <text x="567" y="80" text-anchor="middle" font-size="6" fill="hsl(175,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">指标自动进化体系</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a5fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a5fR)"/>`

// ─── 文章 6：hue=340 玫瑰粉，情绪体验设计 ──────────────────────────────────
const svg6 = `<defs>
  <linearGradient id="a6bg" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%"   stop-color="hsl(340,42%,87%)"/>
    <stop offset="50%"  stop-color="hsl(340,28%,91%)"/>
    <stop offset="100%" stop-color="hsl(340,16%,94%)"/>
  </linearGradient>
  <radialGradient id="a6gA" cx="50%" cy="30%" r="55%">
    <stop offset="0%"  stop-color="hsl(340,52%,70%)" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="hsl(340,52%,70%)" stop-opacity="0"/>
  </radialGradient>
  <filter id="a6fs"><feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="hsl(340,30%,48%)" flood-opacity="0.14"/></filter>
  <linearGradient id="a6fL" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(340,36%,89%)" stop-opacity="1"/>
    <stop offset="100%" stop-color="hsl(340,36%,89%)" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a6fR" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%"   stop-color="hsl(340,30%,92%)" stop-opacity="0"/>
    <stop offset="100%" stop-color="hsl(340,30%,92%)" stop-opacity="1"/>
  </linearGradient>
</defs>
<rect width="680" height="220" fill="url(#a6bg)"/>
<ellipse cx="340" cy="50" rx="320" ry="130" fill="url(#a6gA)"/>
<g opacity="0.55">
  <line x1="113" y1="12" x2="113" y2="90" stroke="hsl(340,30%,72%)" stroke-width="0.8" stroke-dasharray="2,2.5"/>
  <rect x="66" y="12" width="94" height="13" rx="3.5" fill="hsl(340,46%,90%)" stroke="hsl(340,34%,73%)" stroke-width="0.7" filter="url(#a6fs)"/>
  <text x="113" y="22" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(340,50%,28%)" font-family="-apple-system,PingFang SC,sans-serif">行为（怒删 APP）</text>
  <line x1="113" y1="25" x2="113" y2="35" stroke="hsl(340,30%,72%)" stroke-width="0.8"/>
  <rect x="66" y="35" width="94" height="13" rx="3.5" fill="hsl(340,42%,82%)" stroke="hsl(340,30%,64%)" stroke-width="0.7" filter="url(#a6fs)"/>
  <text x="113" y="45" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(340,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">情绪（愤怒 / 焦虑）</text>
  <line x1="113" y1="48" x2="113" y2="58" stroke="hsl(340,30%,72%)" stroke-width="0.8"/>
  <rect x="66" y="58" width="94" height="13" rx="3.5" fill="hsl(340,38%,74%)" stroke="hsl(340,26%,56%)" stroke-width="0.7" filter="url(#a6fs)"/>
  <text x="113" y="68" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(340,44%,16%)" font-family="-apple-system,PingFang SC,sans-serif">期待（应当流畅）</text>
  <line x1="113" y1="71" x2="113" y2="81" stroke="hsl(340,30%,72%)" stroke-width="0.8"/>
  <rect x="66" y="81" width="94" height="12" rx="3.5" fill="hsl(340,34%,65%)" stroke="hsl(340,22%,48%)" stroke-width="0.7" filter="url(#a6fs)"/>
  <text x="113" y="90.5" text-anchor="middle" font-size="6" font-weight="700" fill="hsl(340,40%,10%)" font-family="-apple-system,PingFang SC,sans-serif">需求（效率 / 安全）</text>
  <text x="113" y="104" text-anchor="middle" font-size="6" fill="hsl(340,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">冰山情绪模型</text>
</g>
<g filter="url(#a6fs)" transform="translate(296,10)">
  <rect width="88" height="26" rx="5" fill="#ffffff" fill-opacity="0.92"/>
  <text x="44" y="13" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(340,42%,28%)" font-family="-apple-system,PingFang SC,sans-serif">身体感受</text>
  <text x="44" y="24" text-anchor="middle" font-size="6.5" fill="hsl(340,28%,50%)" font-family="-apple-system,PingFang SC,sans-serif">视觉氛围 · 色温 · 动效</text>
</g>
<text x="340" y="44" text-anchor="middle" font-size="9" fill="hsl(340,36%,58%)">↓</text>
<g filter="url(#a6fs)" transform="translate(296,48)">
  <rect width="88" height="26" rx="5" fill="hsl(340,44%,84%)" fill-opacity="0.92"/>
  <text x="44" y="13" text-anchor="middle" font-size="7.5" font-weight="700" fill="hsl(340,46%,22%)" font-family="-apple-system,PingFang SC,sans-serif">认知评估</text>
  <text x="44" y="24" text-anchor="middle" font-size="6.5" fill="hsl(340,28%,38%)" font-family="-apple-system,PingFang SC,sans-serif">信息架构 · 文案语调</text>
</g>
<text x="340" y="82" text-anchor="middle" font-size="9" fill="hsl(340,36%,58%)">↓</text>
<g filter="url(#a6fs)" transform="translate(296,86)">
  <rect width="88" height="14" rx="3.5" fill="hsl(340,40%,72%)" fill-opacity="0.92"/>
  <text x="44" y="10.5" text-anchor="middle" font-size="6.5" font-weight="700" fill="hsl(340,44%,14%)" font-family="-apple-system,PingFang SC,sans-serif">情绪出口 · 释放渠道</text>
</g>
<g opacity="0.55">
  <rect x="517" y="12" width="100" height="12" rx="3.5" fill="hsl(340,44%,88%)" stroke="hsl(340,30%,70%)" stroke-width="0.6"/>
  <text x="567" y="21" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(340,44%,26%)" font-family="-apple-system,PingFang SC,sans-serif">安心 ↔ 焦虑</text>
  <text x="567" y="30" text-anchor="middle" font-size="7" fill="hsl(340,30%,60%)">·</text>
  <rect x="517" y="33" width="100" height="12" rx="3.5" fill="hsl(340,40%,80%)" stroke="hsl(340,26%,62%)" stroke-width="0.6"/>
  <text x="567" y="42" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(340,42%,18%)" font-family="-apple-system,PingFang SC,sans-serif">惊喜 ↔ 愤怒</text>
  <text x="567" y="52" text-anchor="middle" font-size="7" fill="hsl(340,30%,60%)">·</text>
  <rect x="517" y="54" width="100" height="12" rx="3.5" fill="hsl(340,36%,70%)" stroke="hsl(340,22%,52%)" stroke-width="0.6"/>
  <text x="567" y="63" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(340,42%,10%)" font-family="-apple-system,PingFang SC,sans-serif">满足 ↔ 挫败</text>
  <text x="567" y="73" text-anchor="middle" font-size="7" fill="hsl(340,30%,60%)">·</text>
  <rect x="517" y="75" width="100" height="12" rx="3.5" fill="hsl(340,32%,60%)" stroke="hsl(340,18%,44%)" stroke-width="0.6"/>
  <text x="567" y="84" text-anchor="middle" font-size="6.5" font-weight="600" fill="hsl(340,38%,8%)" font-family="-apple-system,PingFang SC,sans-serif">愉悦 ↔ 失落</text>
  <text x="567" y="100" text-anchor="middle" font-size="6" fill="hsl(340,22%,60%)" font-family="-apple-system,PingFang SC,sans-serif">情绪对设计框架</text>
</g>
<rect x="0" y="0" width="50" height="110" fill="url(#a6fL)"/>
<rect x="630" y="0" width="50" height="110" fill="url(#a6fR)"/>`

const articles = [
  {
    id: 1,
    title: 'AI 时代的产品与组织',
    desc: 'AI 正在全面重构产品形态、角色边界与组织方式——能否将独有知识转化为商业价值，是企业和个人在 AI 时代的核心命题。',
    tags: ['行业洞察', '组织变革'],
    type: '行业洞察',
    tagColor: 'hsl(28,45%,28%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg1,
  },
  {
    id: 2,
    title: 'AI 重塑设计：设计工作的智能化演进实践',
    desc: '从单步执行到全自动化，设计团队如何通过 AI 构建五阶智能化升级路径，以及四步咨询流程与多 Agent 协同链的落地实践。',
    tags: ['设计实践', 'AI 方法论'],
    type: '设计实践',
    tagColor: 'hsl(175,45%,26%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg2,
  },
  {
    id: 3,
    title: '设计工程化与 AI 时代 Token 设计',
    desc: '工程化仍是基础，Token 驱动的设计系统是拥抱 AI 的必要前提。AI 时代下，Token 命名需兼顾「机器可读性」与「人类可理解性」。',
    tags: ['技术/系统', 'Token 设计', '设计工程化'],
    type: '技术/系统',
    tagColor: 'hsl(210,45%,28%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg3,
  },
  {
    id: 4,
    title: 'AI 知识库构建与内容运营方法论',
    desc: '知识库是你大脑的 API 接口。通过身份层、资产层、状态层、SOP 四层结构，让 AI 真正了解你；运营的本质是筛选，让对的人找到你。',
    tags: ['方法论', 'AI 工具', '内容运营'],
    type: '方法论',
    tagColor: 'hsl(270,45%,28%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg4,
  },
  {
    id: 5,
    title: '阿里云 UES：AI 驱动的体验度量',
    desc: '体验度量的本质是将主观感受转化为可驱动决策的数据。阿里云 UES 五年覆盖 113 款产品，借助 AI 实现指标自动进化与虚拟角色替代真人测评。',
    tags: ['体验度量', 'AI 实践'],
    type: '体验度量',
    tagColor: 'hsl(175,45%,26%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg5,
  },
  {
    id: 6,
    title: 'AI 时代下，设计中的情绪体验',
    desc: '用户更容易被打动，也更容易失望。从冰山模型到三大设计切入点，再到五组情绪对策略，设计师需从功能导向转向情绪导向，成为真正的问题解决者。',
    tags: ['情绪体验', '设计实践'],
    type: '情绪体验',
    tagColor: 'hsl(340,45%,30%)',
    svgViewBox: '100 0 480 110',
    svgContent: svg6,
  },
]
</script>

<style scoped>
.articles-page {
  padding-top: calc(var(--nav-h) + 60px);
  padding-bottom: 100px;
  min-height: 100vh;
}

/* ── Header ── */
.page-header { margin-bottom: 48px; }
.header-eyebrow { margin-bottom: 14px; }
.page-title {
  font-size: 36px; font-weight: 800;
  letter-spacing: -0.02em; margin-bottom: 12px; line-height: 1.2;
}
.page-desc { font-size: 16px; line-height: 1.7; }

/* ── Grid ── */
.article-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* ── Card ── */
.article-card {
  display: flex; flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 180ms ease, box-shadow 180ms ease;
  cursor: pointer;
}
.article-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

/* ── Hero with SVG ── */
.card-hero {
  position: relative;
  height: 160px;
  overflow: hidden;
}
.card-hero-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.card-hero-tags {
  position: absolute;
  bottom: 14px; left: 14px;
  display: flex; gap: 6px; flex-wrap: wrap;
}
.card-tag {
  font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
  background: rgba(255,255,255,0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 3px 10px; border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.65);
}

/* ── Card body ── */
.card-body {
  padding: 20px 22px 18px;
  display: flex; flex-direction: column; flex: 1;
}
.card-title {
  font-size: 16px; font-weight: 700;
  line-height: 1.45; margin-bottom: 8px; color: var(--text);
}
.card-desc {
  font-size: 13.5px; line-height: 1.7; flex: 1; margin-bottom: 16px;
}
.card-footer {
  display: flex; align-items: center; justify-content: space-between;
}
.card-type { font-size: 12px; font-weight: 600; letter-spacing: 0.04em; }
.card-arrow { font-size: 13px; transition: transform 150ms; }
.article-card:hover .card-arrow { transform: translateX(3px); }

/* ── Responsive ── */
@media (max-width: 768px) {
  .article-grid { grid-template-columns: 1fr; }
  .page-title { font-size: 28px; }
}
</style>
