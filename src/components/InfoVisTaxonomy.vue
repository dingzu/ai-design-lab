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

  <!-- 维度说明 -->
  <div style="background: oklch(96% 0.01 260); border: 1px solid var(--border); border-radius: 12px; padding: 20px 24px; margin-bottom: 40px; display: flex; gap: 20px; align-items: flex-start;">
    <div style="font-size: 28px; flex-shrink: 0;">⚙️</div>
    <div>
      <div style="font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">技术实现路径维度 · How to Build</div>
      <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.7;">
        按<strong>开发方式与工具链</strong>对图表实现路径分类。不同路径在<em>灵活度、学习成本、定制能力、部署效率</em>上存在显著差异。选路径前先回答：<br>
        <span style="color: oklch(50% 0.15 240); font-weight: 500;">谁来做？</span>（工程师/设计师/分析师）&nbsp;·&nbsp;
        <span style="color: oklch(50% 0.15 150); font-weight: 500;">多复杂？</span>（标准图 vs 高度定制）&nbsp;·&nbsp;
        <span style="color: oklch(50% 0.15 25); font-weight: 500;">多实时？</span>（静态 vs 动态数据）
      </div>
    </div>
  </div>

  <!-- ── T1: 原生代码路径 ── -->
  <div class="tech-path" id="t1">
    <div class="tech-path-header" style="background: oklch(95% 0.03 240); border-left-color: oklch(52% 0.20 240);">
      <div style="flex: 1">
        <div class="tech-path-number" style="color: oklch(52% 0.20 240)">PATH 01</div>
        <div class="tech-path-title" style="color: oklch(25% 0.04 260)">
          原生代码
          <span class="tech-path-title-en">Native Code (SVG / Canvas / WebGL)</span>
        </div>
        <div class="tech-path-desc">直接操作浏览器底层渲染 API，最高灵活度，适合深度定制与超大数据量场景</div>
      </div>
      <div class="tech-path-count" style="background: oklch(88% 0.08 240); color: oklch(38% 0.16 240); border: 1px solid oklch(78% 0.10 240)">
        3 种技术栈
      </div>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name">
            <span style="font-size:18px">📐</span> SVG
            <div class="complexity-dot" title="实现复杂度：中">
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(85% 0.03 260)"></div>
            </div>
          </div>
          <div class="tech-card-name-en">Scalable Vector Graphics</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">基于 XML 的矢量图形标准，DOM 可操控，天然支持无限缩放与 CSS 动画。适合节点数 &lt; 10,000 的精细图表。</div>
          <div class="tech-stack-row">
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">原生 SVG</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">D3.js</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Snap.svg</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">GSAP</span>
          </div>
          <div class="tech-chart-types">
            <div class="tech-chart-types-label">适合图型</div>
            <div class="tech-chart-tags">
              <span class="tct">柱状图</span><span class="tct">折线图</span><span class="tct">散点图</span>
              <span class="tct">力导向图</span><span class="tct">桑基图</span><span class="tct">树状图</span>
              <span class="tct">雷达图</span><span class="tct">旭日图</span>
            </div>
          </div>
          <div class="tech-pros-cons">
            <div class="pros-col"><strong>优势</strong><li>无限矢量缩放</li><li>DOM 可访问性好</li><li>CSS/JS 动画自由</li><li>调试工具友好</li></div>
            <div class="cons-col"><strong>局限</strong><li>万级节点性能差</li><li>学习曲线陡峭</li><li>开发成本高</li></div>
          </div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name">
            <span style="font-size:18px">🎨</span> Canvas 2D
            <div class="complexity-dot" title="实现复杂度：中高">
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
            </div>
          </div>
          <div class="tech-card-name-en">HTML5 Canvas 2D Context</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">像素级光栅渲染，GPU 加速，大数据量下性能远优于 SVG。适合实时数据流、热力图、百万级散点等高密度场景。</div>
          <div class="tech-stack-row">
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Canvas API</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Fabric.js</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Konva.js</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">ZRender</span>
          </div>
          <div class="tech-chart-types">
            <div class="tech-chart-types-label">适合图型</div>
            <div class="tech-chart-tags">
              <span class="tct">热力图</span><span class="tct">大规模散点</span><span class="tct">密度图</span>
              <span class="tct">实时折线</span><span class="tct">蜡烛图</span><span class="tct">粒子动效</span>
            </div>
          </div>
          <div class="tech-pros-cons">
            <div class="pros-col"><strong>优势</strong><li>百万级数据流畅</li><li>实时动画性能佳</li><li>像素级控制</li></div>
            <div class="cons-col"><strong>局限</strong><li>不可矢量缩放</li><li>无 DOM，交互复杂</li><li>可访问性差</li></div>
          </div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name">
            <span style="font-size:18px">⚡</span> WebGL / GPU
            <div class="complexity-dot" title="实现复杂度：高">
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
              <div class="cd" style="background:oklch(52% 0.20 240)"></div>
            </div>
          </div>
          <div class="tech-card-name-en">WebGL / WebGPU</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">GPU 着色器级渲染，亿级数据点可视化的唯一选择。适合 3D 地理可视化、实时大屏、科学可视化等极端场景。</div>
          <div class="tech-stack-row">
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Three.js</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">deck.gl</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Luma.gl</span>
            <span class="ts-pill" style="background:oklch(92% 0.04 240);border-color:oklch(78% 0.08 240);color:oklch(38% 0.14 240)">Regl</span>
          </div>
          <div class="tech-chart-types">
            <div class="tech-chart-types-label">适合图型</div>
            <div class="tech-chart-tags">
              <span class="tct">3D 地图</span><span class="tct">大屏可视化</span><span class="tct">亿级散点</span>
              <span class="tct">实时流图</span><span class="tct">体渲染</span><span class="tct">GIS 分析</span>
            </div>
          </div>
          <div class="tech-pros-cons">
            <div class="pros-col"><strong>优势</strong><li>极限数据量</li><li>3D 原生支持</li><li>实时 60fps</li></div>
            <div class="cons-col"><strong>局限</strong><li>门槛极高</li><li>调试困难</li><li>移动端功耗大</li></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── T2: 可视化库路径 ── -->
  <div class="tech-path" id="t2">
    <div class="tech-path-header" style="background: oklch(95% 0.03 175); border-left-color: oklch(50% 0.18 175);">
      <div style="flex: 1">
        <div class="tech-path-number" style="color: oklch(50% 0.18 175)">PATH 02</div>
        <div class="tech-path-title" style="color: oklch(25% 0.04 260)">
          可视化库
          <span class="tech-path-title-en">Chart Library / Visualization Framework</span>
        </div>
        <div class="tech-path-desc">封装好的图表组件库，声明式配置驱动，工程师首选路径，平衡灵活度与开发效率</div>
      </div>
      <div class="tech-path-count" style="background: oklch(88% 0.07 175); color: oklch(36% 0.15 175); border: 1px solid oklch(76% 0.09 175)">
        5 个主流库
      </div>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name"><span style="font-size:18px">🔴</span> Apache ECharts<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div>
          <div class="tech-card-name-en">百度开源 · Apache 顶级项目</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">国内最广泛的前端图表库，JSON 配置驱动，内置 Canvas/SVG 双渲染，图型覆盖最全，中文文档完善，大屏场景首选。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">echarts</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">echarts-gl</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">vue-echarts</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">全类型覆盖</span><span class="tct">大屏组合</span><span class="tct">地图</span><span class="tct">3D图表</span><span class="tct">关系图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>图型最全面</li><li>中文社区强</li><li>大屏场景成熟</li><li>免费开源</li></div><div class="cons-col"><strong>局限</strong><li>配置项极繁</li><li>定制化成本高</li><li>包体积较大</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name"><span style="font-size:18px">🟠</span> D3.js<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(50% 0.18 175)"></div></div></div>
          <div class="tech-card-name-en">Data-Driven Documents · Mike Bostock</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">可视化工具库而非图表库，提供数学映射、DOM 绑定等底层原语。任何图型皆可实现，是定制可视化的事实标准，但学习曲线最陡。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">d3-scale</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">d3-shape</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">d3-force</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">Observable</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">任意定制图型</span><span class="tct">力导向图</span><span class="tct">桑基图</span><span class="tct">弦图</span><span class="tct">地理投影</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>无限定制自由</li><li>数学映射强大</li><li>生态极丰富</li></div><div class="cons-col"><strong>局限</strong><li>学习成本最高</li><li>无开箱即用</li><li>React 集成繁</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name"><span style="font-size:18px">🟡</span> Vega / Vega-Lite<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div>
          <div class="tech-card-name-en">Grammar of Graphics · UW Interactive Data Lab</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">图形语法（Grammar of Graphics）实现，JSON schema 声明式规范，Vega-Lite 是其高层语法糖。LLM 生成可视化首选（结构化输出友好）。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">vega-lite</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">altair(Python)</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">vegafusion</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">统计图表</span><span class="tct">多视图联动</span><span class="tct">探索分析</span><span class="tct">AI生成图表</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>AI生成友好</li><li>声明式简洁</li><li>多视图联动内置</li></div><div class="cons-col"><strong>局限</strong><li>图型覆盖有限</li><li>定制化较难</li><li>国内资料少</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name"><span style="font-size:18px">⚛️</span> React 生态图表库<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div>
          <div class="tech-card-name-en">Recharts / Nivo / Victory / Tremor</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">React 组件封装的图表库，声明式 JSX 组合，与 React 状态/生命周期深度集成，适合 SaaS 产品和数据仪表盘应用。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">recharts</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">nivo</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">tremor</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">visx</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">折线/柱状/饼图</span><span class="tct">组合图</span><span class="tct">仪表盘组件</span><span class="tct">KPI卡片</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>React 集成无缝</li><li>TypeScript 友好</li><li>开箱即用美观</li></div><div class="cons-col"><strong>局限</strong><li>绑定 React 生态</li><li>复杂图型缺失</li><li>性能中等</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header">
          <div class="tech-card-name"><span style="font-size:18px">📊</span> 科学/商业图表库<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.18 175)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div>
          <div class="tech-card-name-en">Plotly / Highcharts / Chart.js</div>
        </div>
        <div class="tech-card-body">
          <div class="tech-card-desc">注重开箱即用与交互体验，Plotly 覆盖科学图型（3D曲面/等高线），Highcharts 注重商业美观，Chart.js 轻量易上手。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">plotly.js</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">highcharts</span><span class="ts-pill" style="background:oklch(92% 0.04 175);border-color:oklch(76% 0.08 175);color:oklch(36% 0.12 175)">chart.js</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">统计图表全家桶</span><span class="tct">3D曲面</span><span class="tct">等高线</span><span class="tct">金融图表</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>交互内置完善</li><li>多语言 SDK</li><li>企业支持好</li></div><div class="cons-col"><strong>局限</strong><li>Highcharts 商业收费</li><li>定制灵活度中等</li></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── T3: BI & 无代码路径 ── -->
  <div class="tech-path" id="t3">
    <div class="tech-path-header" style="background: oklch(95% 0.03 55); border-left-color: oklch(52% 0.18 55);">
      <div style="flex: 1">
        <div class="tech-path-number" style="color: oklch(52% 0.18 55)">PATH 03</div>
        <div class="tech-path-title" style="color: oklch(25% 0.04 260)">BI &amp; 无代码工具<span class="tech-path-title-en">Business Intelligence / No-Code Platform</span></div>
        <div class="tech-path-desc">拖拽配置驱动，数据分析师和业务人员首选，快速搭建数据看板，无需编写代码</div>
      </div>
      <div class="tech-path-count" style="background: oklch(90% 0.06 55); color: oklch(36% 0.14 55); border: 1px solid oklch(78% 0.09 55)">4 类工具</div>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">📈</span> 企业 BI 平台<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.18 55)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Tableau / Power BI / Qlik</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">拖拽式可视化分析平台，内置数十种图表类型，支持数据源直连、多表关联和分享发布。适合数据团队日常分析报告。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Tableau</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Power BI</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Qlik Sense</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">覆盖图型</div><div class="tech-chart-tags"><span class="tct">标准统计图表</span><span class="tct">地理图</span><span class="tct">热力图</span><span class="tct">表格</span><span class="tct">KPI卡片</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>零代码快速出图</li><li>数据源生态丰富</li><li>企业权限管理</li></div><div class="cons-col"><strong>局限</strong><li>许可证费用高</li><li>定制化受限</li><li>嵌入集成复杂</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🇨🇳</span> 国产 BI 平台<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.18 55)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">帆软 FineReport / 阿里 DataV / 腾讯 RayData</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">国产化替代方案，深度支持国内数据源（MaxCompute/TiDB），DataV 专注大屏可视化，FineReport 专注报表导出，私有化部署友好。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">DataV</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">FineReport</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Sugar BI</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">RayData</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项场景</div><div class="tech-chart-tags"><span class="tct">大屏可视化</span><span class="tct">报表导出</span><span class="tct">地理热力</span><span class="tct">实时数据看板</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>国内数据源兼容</li><li>私有化部署</li><li>大屏模板丰富</li></div><div class="cons-col"><strong>局限</strong><li>国际化能力弱</li><li>定制仍需代码</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🔓</span> 开源 BI / 监控<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.18 55)"></div><div class="cd" style="background:oklch(52% 0.18 55)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Grafana / Metabase / Superset / Redash</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">开源免费，Grafana 专注时序监控，Metabase 适合业务人员自助查询，Superset 支持大数据源，均可自托管部署。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Grafana</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Metabase</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Superset</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Redash</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项场景</div><div class="tech-chart-tags"><span class="tct">时序折线</span><span class="tct">监控看板</span><span class="tct">SQL 自助分析</span><span class="tct">告警图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>完全免费</li><li>自托管可控</li><li>插件生态丰富</li></div><div class="cons-col"><strong>局限</strong><li>运维成本</li><li>高级功能需企业版</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">📋</span> 电子表格工具<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.18 55)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Excel / Google Sheets / WPS 表格</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">最普及的数据可视化工具，零编程门槛，适合临时分析和小规模数据。内置图表向导，一键生成标准图表，离线可用。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Excel</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">Google Sheets</span><span class="ts-pill" style="background:oklch(92% 0.04 55);border-color:oklch(78% 0.08 55);color:oklch(36% 0.12 55)">WPS</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">覆盖图型</div><div class="tech-chart-tags"><span class="tct">柱状/折线/饼图</span><span class="tct">散点图</span><span class="tct">组合图</span><span class="tct">迷你图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>零门槛最普及</li><li>数据-图表联动</li><li>离线无依赖</li></div><div class="cons-col"><strong>局限</strong><li>万行以上卡顿</li><li>美观度有限</li><li>无法程序化</li></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── T4: 设计工具路径 ── -->
  <div class="tech-path" id="t4">
    <div class="tech-path-header" style="background: oklch(95% 0.03 330); border-left-color: oklch(52% 0.17 330);">
      <div style="flex: 1">
        <div class="tech-path-number" style="color: oklch(52% 0.17 330)">PATH 04</div>
        <div class="tech-path-title" style="color: oklch(25% 0.04 260)">设计工具<span class="tech-path-title-en">Design Tool / Presentation Software</span></div>
        <div class="tech-path-desc">视觉设计师和产品经理首选路径，所见即所得，输出可交付的静态/动效图表，适合概念框架图和信息图设计</div>
      </div>
      <div class="tech-path-count" style="background: oklch(90% 0.05 330); color: oklch(36% 0.13 330); border: 1px solid oklch(78% 0.08 330)">4 类工具</div>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🎨</span> UI 设计工具<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.17 330)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Figma / Sketch / Adobe XD</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">矢量设计工具，通过手绘或插件生成图表，Figma Charts 插件可接入真实数据。适合产品原型中的数据可视化模块设计。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Figma</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Charts 插件</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Sketch</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">原型图表</span><span class="tct">信息架构图</span><span class="tct">概念框架</span><span class="tct">品牌屋</span><span class="tct">仪表盘原型</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>设计自由度极高</li><li>团队协作实时</li><li>组件库可复用</li></div><div class="cons-col"><strong>局限</strong><li>不可数据驱动</li><li>动态交互受限</li><li>输出需前端还原</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">📑</span> 演示文稿工具<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.17 330)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">PowerPoint / Keynote / Google Slides</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">商业汇报场景首选，内置图表向导，支持 Excel 数据导入和链接更新。PowerPoint SmartArt 可快速生成层级/流程/循环等框架图。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">PowerPoint</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Keynote</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">SmartArt</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">金字塔</span><span class="tct">品牌屋</span><span class="tct">流程图</span><span class="tct">组织架构</span><span class="tct">标准统计图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>零门槛最普及</li><li>框架图模板丰富</li><li>汇报场景完美契合</li></div><div class="cons-col"><strong>局限</strong><li>仅静态输出</li><li>大数据图表弱</li><li>无 Web 嵌入</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🗒️</span> 在线白板工具<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.17 330)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Miro / FigJam / Lucidchart / Whimsical</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">协作型白板，内置流程图/思维导图/用户旅程图模板，适合团队共创和战略工作坊。Miro 内置数据图表功能，可轻量接入数据。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Miro</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">FigJam</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Lucidchart</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">思维导图</span><span class="tct">用户旅程</span><span class="tct">服务蓝图</span><span class="tct">SWOT</span><span class="tct">流程图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>实时多人协作</li><li>工作坊首选</li><li>框架模板极丰富</li></div><div class="cons-col"><strong>局限</strong><li>数据绑定弱</li><li>无 embed 输出</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">✏️</span> 专业插画工具<div class="complexity-dot"><div class="cd" style="background:oklch(52% 0.17 330)"></div><div class="cd" style="background:oklch(52% 0.17 330)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Adobe Illustrator / Affinity Designer</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">专业矢量插画工具，适合制作出版级信息图（Infographic）和品牌视觉图表。精细排版控制，输出高质量 PDF/SVG。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Illustrator</span><span class="ts-pill" style="background:oklch(92% 0.04 330);border-color:oklch(78% 0.08 330);color:oklch(36% 0.12 330)">Affinity Designer</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">信息图 Infographic</span><span class="tct">品牌可视化</span><span class="tct">数据新闻图</span><span class="tct">出版级图表</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>出版级视觉质量</li><li>排版精细控制</li><li>SVG 导出完美</li></div><div class="cons-col"><strong>局限</strong><li>无数据绑定</li><li>学习成本高</li><li>手工制作效率低</li></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ── T5: AI 生成路径 ── -->
  <div class="tech-path" id="t5">
    <div class="tech-path-header" style="background: oklch(95% 0.03 270); border-left-color: oklch(50% 0.16 270);">
      <div style="flex: 1">
        <div class="tech-path-number" style="color: oklch(50% 0.16 270)">PATH 05</div>
        <div class="tech-path-title" style="color: oklch(25% 0.04 260)">AI 生成 &amp; 辅助<span class="tech-path-title-en">AI-Generated / LLM-Assisted Visualization</span></div>
        <div class="tech-path-desc">自然语言描述驱动图表生成，2024年后快速成熟，适合快速原型、探索分析和低代码场景</div>
      </div>
      <div class="tech-path-count" style="background: oklch(90% 0.05 270); color: oklch(35% 0.13 270); border: 1px solid oklch(78% 0.08 270)">4 类方向</div>
    </div>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🤖</span> LLM 代码生成<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.16 270)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">GPT / Claude → ECharts / Python / D3</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">用自然语言描述需求，LLM 生成 ECharts JSON 配置、Python matplotlib/seaborn 代码或 D3 代码，无需手写配置。快速原型首选。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">GPT-4o</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Claude</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">→ ECharts</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">→ Vega-Lite</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">覆盖图型</div><div class="tech-chart-tags"><span class="tct">所有标准图型</span><span class="tct">定制图型</span><span class="tct">SVG信息图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>自然语言驱动</li><li>快速出原型</li><li>迭代成本极低</li></div><div class="cons-col"><strong>局限</strong><li>复杂图型不稳定</li><li>需要人工审核</li><li>数据安全风险</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">✨</span> Text-to-Chart 产品<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.16 270)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Julius AI / ChartGPT / Rows / Vizly</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">专注于数据-图表 AI 转换的 SaaS 产品，上传 CSV/Excel 后用自然语言提问即可生成图表，无需任何代码，适合数据分析师快速探索。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Julius AI</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Rows</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Vizly</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Noteable</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">覆盖图型</div><div class="tech-chart-tags"><span class="tct">统计图表</span><span class="tct">趋势分析</span><span class="tct">相关性图</span><span class="tct">自动推荐</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>零门槛最快</li><li>自动推荐最优图型</li><li>数据洞察一体</li></div><div class="cons-col"><strong>局限</strong><li>定制化极弱</li><li>数据上传隐私</li><li>复杂图型缺失</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🖼️</span> AI 信息图生成<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.16 270)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Napkin AI / Gamma / Beautiful.ai / Tome</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">从文本/大纲直接生成信息图、流程图、品牌框架图等概念可视化，Napkin AI 专注从段落提取关键框架，Gamma 生成完整演示文稿。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Napkin AI</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Gamma</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Beautiful.ai</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">Tome</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">信息图</span><span class="tct">流程图</span><span class="tct">思维导图</span><span class="tct">概念框架</span><span class="tct">品牌屋</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>文字→框架图极快</li><li>品牌屋等非数值图</li><li>演示一体输出</li></div><div class="cons-col"><strong>局限</strong><li>数据驱动图弱</li><li>精细排版难</li><li>样式不完全可控</li></div></div>
        </div>
      </div>
      <div class="tech-card">
        <div class="tech-card-header"><div class="tech-card-name"><span style="font-size:18px">🐍</span> Python AI 分析栈<div class="complexity-dot"><div class="cd" style="background:oklch(50% 0.16 270)"></div><div class="cd" style="background:oklch(50% 0.16 270)"></div><div class="cd" style="background:oklch(85% 0.03 260)"></div></div></div><div class="tech-card-name-en">Pandas + Matplotlib / Seaborn / Plotly / Altair</div></div>
        <div class="tech-card-body">
          <div class="tech-card-desc">数据科学黄金路径，Jupyter Notebook 内联图表，LLM 辅助生成分析代码，Plotly/Altair 支持交互输出。适合数据分析师全流程工作。</div>
          <div class="tech-stack-row"><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">matplotlib</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">seaborn</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">plotly</span><span class="ts-pill" style="background:oklch(92% 0.04 270);border-color:oklch(78% 0.08 270);color:oklch(35% 0.12 270)">altair</span></div>
          <div class="tech-chart-types"><div class="tech-chart-types-label">强项图型</div><div class="tech-chart-tags"><span class="tct">统计分布</span><span class="tct">相关矩阵</span><span class="tct">箱线/小提琴</span><span class="tct">地理图</span><span class="tct">3D图</span></div></div>
          <div class="tech-pros-cons"><div class="pros-col"><strong>优势</strong><li>数据处理与可视化一体</li><li>科学图型全覆盖</li><li>LLM 辅助效率高</li></div><div class="cons-col"><strong>局限</strong><li>需 Python 基础</li><li>Web 嵌入需额外工作</li></div></div>
        </div>
      </div>
    </div>
  </div>

  <!-- 路径选择决策矩阵 -->
  <div style="background: oklch(20% 0.04 260); border-radius: 16px; padding: 28px 32px; margin-top: 8px;">
    <div style="font-size: 14px; font-weight: 700; color: oklch(90% 0.04 260); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
      <span style="font-size:20px">🧭</span> 路径选择决策矩阵
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
      <div style="background: oklch(28% 0.04 260); border-radius: 8px; padding: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: oklch(55% 0.20 240); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">前端工程师</div>
        <div style="font-size: 12px; color: oklch(75% 0.03 260); line-height: 1.7;">标准图表 → <strong style="color:oklch(82% 0.06 260)">可视化库</strong><br>高度定制 → <strong style="color:oklch(82% 0.06 260)">D3 / 原生 SVG</strong><br>大数据量 → <strong style="color:oklch(82% 0.06 260)">Canvas / WebGL</strong></div>
      </div>
      <div style="background: oklch(28% 0.04 260); border-radius: 8px; padding: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: oklch(52% 0.18 175); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">数据分析师</div>
        <div style="font-size: 12px; color: oklch(75% 0.03 260); line-height: 1.7;">快速探索 → <strong style="color:oklch(82% 0.06 260)">Python / Jupyter</strong><br>日常报告 → <strong style="color:oklch(82% 0.06 260)">BI 平台</strong><br>AI辅助 → <strong style="color:oklch(82% 0.06 260)">Text-to-Chart</strong></div>
      </div>
      <div style="background: oklch(28% 0.04 260); border-radius: 8px; padding: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: oklch(52% 0.17 330); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">设计师 / PM</div>
        <div style="font-size: 12px; color: oklch(75% 0.03 260); line-height: 1.7;">品牌框架图 → <strong style="color:oklch(82% 0.06 260)">Figma / PPT</strong><br>工作坊 → <strong style="color:oklch(82% 0.06 260)">Miro / FigJam</strong><br>快速信息图 → <strong style="color:oklch(82% 0.06 260)">Napkin AI / Gamma</strong></div>
      </div>
      <div style="background: oklch(28% 0.04 260); border-radius: 8px; padding: 14px;">
        <div style="font-size: 11px; font-weight: 700; color: oklch(52% 0.18 55); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">业务人员</div>
        <div style="font-size: 12px; color: oklch(75% 0.03 260); line-height: 1.7;">日常汇报 → <strong style="color:oklch(82% 0.06 260)">Excel / PPT</strong><br>自助分析 → <strong style="color:oklch(82% 0.06 260)">Tableau / Metabase</strong><br>AI辅助 → <strong style="color:oklch(82% 0.06 260)">Julius AI</strong></div>
      </div>
    </div>
  </div>

      </div>

      <!-- Skill 路径维度 -->
      <div v-show="activeDimension === 'skill'" class="view-skill">

  <!-- 维度说明 -->
  <div style="background: oklch(15% 0.06 270); border: 1px solid oklch(30% 0.08 270); border-radius: 12px; padding: 20px 24px; margin-bottom: 40px; display: flex; gap: 20px; align-items: flex-start;">
    <div style="font-size: 28px; flex-shrink: 0;">🧩</div>
    <div>
      <div style="font-size: 13px; font-weight: 700; color: oklch(90% 0.06 270); margin-bottom: 8px;">Skill 工程化路径维度 · How to Skill</div>
      <div style="font-size: 13px; color: oklch(70% 0.05 270); line-height: 1.8;">
        基于本 Skill 体系对图表生成任务的工程化封装方式。核心 Skill 包括：
        <span class="skill-badge" style="background:oklch(22% 0.06 150);border-color:oklch(45% 0.14 150);color:oklch(75% 0.10 150);margin:0 3px">visual-creator</span>
        <span class="skill-badge" style="background:oklch(22% 0.06 240);border-color:oklch(45% 0.14 240);color:oklch(75% 0.10 240);margin:0 3px">infovis-evaluator</span>
        <span class="skill-badge" style="background:oklch(22% 0.06 330);border-color:oklch(45% 0.14 330);color:oklch(75% 0.10 330);margin:0 3px">infovis-autoevo</span>
        <span class="skill-badge" style="background:oklch(22% 0.06 55);border-color:oklch(45% 0.12 55);color:oklch(75% 0.10 55);margin:0 3px">design-evaluator</span><br>
        <span style="color:oklch(60% 0.04 270);font-size:12px;">按任务复杂度选路径：单次生成 → 生成+评测 → 自进化闭环。越靠后质量越高，代价越大。</span>
      </div>
    </div>
  </div>

  <!-- SK1: 单点生成 -->
  <div class="skill-path" id="sk1">
    <div class="skill-path-header" style="background: oklch(95% 0.04 150); border-left-color: oklch(52% 0.16 150);">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:oklch(52% 0.16 150);margin-bottom:4px">SKILL PATH 01</div>
        <div style="font-family:'Noto Serif SC',serif;font-size:20px;font-weight:700;color:oklch(22% 0.02 260);display:flex;align-items:center;gap:10px">
          单点生成
          <span style="font-family:'Inter',sans-serif;font-size:13px;font-weight:400;color:var(--text-muted)">visual-creator 直调</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:5px">最轻量路径，一次 Skill 调用直接输出图表。适合需求明确、质量要求不高的快速生成场景</div>
      </div>
      <div style="background:oklch(88% 0.06 150);color:oklch(36% 0.14 150);border:1px solid oklch(76% 0.09 150);font-size:11px;padding:4px 10px;border-radius:99px;white-space:nowrap;font-weight:500;align-self:flex-start">适合：快速原型 / 一次性需求</div>
    </div>
    <div class="skill-flow">
      <div class="sf-node"><div class="sf-node-name">用户意图</div><div class="sf-node-role">文字描述 / 数据</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node sf-highlight" style="--sf-color:oklch(45% 0.14 150);--sf-bg:oklch(93% 0.04 150)"><div class="sf-node-name">visual-creator</div><div class="sf-node-role">意图路由 + 生成器</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node"><div class="sf-node-name">输出图表</div><div class="sf-node-role">SVG / PNG / HTML</div></div>
    </div>
    <div style="font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text-muted);margin-bottom:12px">适用图型 × 触发示例</div>
    <div class="skill-use-cases">
      <div class="suc-card"><div class="suc-chart-type">数据可视化图型</div><div class="suc-desc">柱状图、折线图、饼图、散点图等标准统计图。输入数据 + 意图描述即可。</div><div class="suc-tags"><span class="suc-tag">visual-creator</span><span class="suc-tag">type:data_viz</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">概念框架图</div><div class="suc-desc">品牌屋、金字塔、2×2矩阵等非数值框架。输入文字概念即可生成结构图。</div><div class="suc-tags"><span class="suc-tag">visual-creator</span><span class="suc-tag">type:concept</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">流程图 / 时间轴</div><div class="suc-desc">流程步骤、里程碑、用户旅程。输入事件列表或步骤描述。</div><div class="suc-tags"><span class="suc-tag">visual-creator</span><span class="suc-tag">type:flowchart</span><span class="suc-tag">type:timeline</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">PPT 信息图</div><div class="suc-desc">演讲汇报用结构化信息图，自动选择布局和色彩方案。</div><div class="suc-tags"><span class="suc-tag">visual-creator</span><span class="suc-tag">type:ppt_infographic</span></div></div>
    </div>
  </div>

  <!-- SK2: 生成+评测 -->
  <div class="skill-path" id="sk2">
    <div class="skill-path-header" style="background: oklch(95% 0.04 240); border-left-color: oklch(50% 0.18 240);">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:oklch(50% 0.18 240);margin-bottom:4px">SKILL PATH 02</div>
        <div style="font-family:'Noto Serif SC',serif;font-size:20px;font-weight:700;color:oklch(22% 0.02 260);display:flex;align-items:center;gap:10px">
          生成 + 评测
          <span style="font-family:'Inter',sans-serif;font-size:13px;font-weight:400;color:var(--text-muted)">visual-creator → infovis-evaluator</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:5px">生成后立即进行三维质量评测，输出结构化评分报告。适合有质量要求的交付物</div>
      </div>
      <div style="background:oklch(88% 0.07 240);color:oklch(35% 0.15 240);border:1px solid oklch(76% 0.10 240);font-size:11px;padding:4px 10px;border-radius:99px;white-space:nowrap;font-weight:500;align-self:flex-start">适合：有审查要求 / 汇报用图</div>
    </div>
    <div class="skill-flow">
      <div class="sf-node"><div class="sf-node-name">意图 + 数据</div><div class="sf-node-role">viewer_intent / audience</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node sf-highlight" style="--sf-color:oklch(45% 0.14 150);--sf-bg:oklch(93% 0.04 150)"><div class="sf-node-name">visual-creator</div><div class="sf-node-role">生成可视化产物</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node sf-highlight" style="--sf-color:oklch(42% 0.16 240);--sf-bg:oklch(93% 0.04 240)"><div class="sf-node-name">infovis-evaluator</div><div class="sf-node-role">三维评测矩阵</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node"><div class="sf-node-name">评分报告</div><div class="sf-node-role">得分 + 变异建议</div></div>
    </div>
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:14px 16px;margin-bottom:16px;font-size:12px;color:var(--text-secondary);line-height:1.8">
      <strong style="color:var(--text-primary);font-size:13px">infovis-evaluator 三维评测矩阵</strong><br>
      <span style="color:oklch(50% 0.16 240)">■</span> <strong>信息路由</strong>（LLM）：图表类型是否匹配数据意图？Expected Topology 对齐度<br>
      <span style="color:oklch(52% 0.16 150)">■</span> <strong>盲测解码</strong>（VLM）：无上下文能否提取核心洞察？Perceived Topology 匹配度<br>
      <span style="color:oklch(55% 0.17 55)">■</span> <strong>认知摩擦力</strong>：视觉噪音和复杂度，Friction Score（越低越好）
    </div>
    <div class="skill-use-cases">
      <div class="suc-card"><div class="suc-chart-type">高管汇报图表</div><div class="suc-desc">对非技术决策者受众做图，需确保核心洞察无需解读即可传达。</div><div class="suc-tags"><span class="suc-tag">audience:非技术决策者</span><span class="suc-tag">盲测解码</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">分布/关系类图</div><div class="suc-desc">散点图、箱线图等容易被误读的图型，评测信息路由匹配度。</div><div class="suc-tags"><span class="suc-tag">信息路由评测</span><span class="suc-tag">拓扑验证</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">复杂仪表盘</div><div class="suc-desc">多图组合看板，重点评测认知摩擦力，识别视觉噪音来源。</div><div class="suc-tags"><span class="suc-tag">认知摩擦力</span><span class="suc-tag">Friction Score</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">图型适配性验证</div><div class="suc-desc">给定数据后怀疑图型选择是否合适，让评测器验证 Expected Topology。</div><div class="suc-tags"><span class="suc-tag">Expected Topology</span><span class="suc-tag">图型路由</span></div></div>
    </div>
  </div>

  <!-- SK3: 自进化闭环 -->
  <div class="skill-path" id="sk3">
    <div class="skill-path-header" style="background: oklch(95% 0.04 330); border-left-color: oklch(50% 0.16 330);">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:oklch(50% 0.16 330);margin-bottom:4px">SKILL PATH 03</div>
        <div style="font-family:'Noto Serif SC',serif;font-size:20px;font-weight:700;color:oklch(22% 0.02 260);display:flex;align-items:center;gap:10px">
          自进化闭环
          <span style="font-family:'Inter',sans-serif;font-size:13px;font-weight:400;color:var(--text-muted)">infovis-autoevo · 生成→评测→变异→再生成</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:5px">全自动迭代优化直至得分 ≥ 9.6 分，无需人工介入。适合高质量交付和批量验证</div>
      </div>
      <div style="background:oklch(88% 0.06 330);color:oklch(36% 0.13 330);border:1px solid oklch(76% 0.08 330);font-size:11px;padding:4px 10px;border-radius:99px;white-space:nowrap;font-weight:500;align-self:flex-start">适合：高质量交付 / 批量质量门控</div>
    </div>
    <div style="background:oklch(18% 0.04 260);border-radius:12px;padding:20px 24px;margin-bottom:20px;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:oklch(55% 0.05 260);margin-bottom:14px">infovis-autoevo 完整流水线</div>
      <div style="display:flex;align-items:center;gap:0;flex-wrap:wrap;">
        <div style="background:oklch(28% 0.05 270);border:1.5px solid oklch(50% 0.14 270);border-radius:8px;padding:10px 14px;min-width:110px;"><div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 270)">INPUT</div><div style="font-size:10px;color:oklch(58% 0.06 260);margin-top:2px">数据 + 意图 + 受众</div></div>
        <div style="font-size:18px;color:oklch(50% 0.04 260);padding:0 8px">→</div>
        <div style="background:oklch(28% 0.05 150);border:1.5px solid oklch(50% 0.14 150);border-radius:8px;padding:10px 14px;min-width:120px;"><div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 150)">visual-creator</div><div style="font-size:10px;color:oklch(58% 0.06 260);margin-top:2px">PHASE 1: 生成</div></div>
        <div style="font-size:18px;color:oklch(50% 0.04 260);padding:0 8px">→</div>
        <div style="background:oklch(28% 0.05 240);border:1.5px solid oklch(50% 0.14 240);border-radius:8px;padding:10px 14px;min-width:132px;"><div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 240)">infovis-evaluator</div><div style="font-size:10px;color:oklch(58% 0.06 260);margin-top:2px">PHASE 2: 三维评测</div></div>
        <div style="font-size:18px;color:oklch(50% 0.04 260);padding:0 8px">→</div>
        <div style="background:oklch(28% 0.05 55);border:1.5px solid oklch(50% 0.14 55);border-radius:8px;padding:10px 14px;min-width:110px;"><div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 55)">Mutator</div><div style="font-size:10px;color:oklch(58% 0.06 260);margin-top:2px">PHASE 3: 变异</div></div>
        <div style="font-size:18px;color:oklch(50% 0.04 260);padding:0 8px">↻</div>
        <div style="background:oklch(28% 0.05 330);border:1.5px solid oklch(50% 0.14 330);border-radius:8px;padding:10px 14px;min-width:100px;"><div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 330)">PASS ≥9.6</div><div style="font-size:10px;color:oklch(58% 0.06 260);margin-top:2px">最终产物</div></div>
      </div>
      <div style="margin-top:12px;font-size:11px;color:oklch(55% 0.05 260);">最大迭代轮次：5 次 &nbsp;·&nbsp; 通过阈值：9.6 分（固定）&nbsp;·&nbsp; 每轮差异：自动写入 mutation_history 驱动下一轮</div>
    </div>
    <div class="skill-use-cases">
      <div class="suc-card"><div class="suc-chart-type">高质量品牌可视化</div><div class="suc-desc">品牌汇报用图，要求高管一眼读懂、认知摩擦极低，需反复迭代。</div><div class="suc-tags"><span class="suc-tag">自进化</span><span class="suc-tag">≥9.6分</span><span class="suc-tag">品牌框架图</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">批量 case 质量验证</div><div class="suc-desc">多个可视化 case 统一通过质量闸门，确保全部达标才交付。</div><div class="suc-tags"><span class="suc-tag">批量验证</span><span class="suc-tag">质量闸</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">Skill 自身优化</div><div class="suc-desc">用评测结论反哺 visual-creator 的生成指令，让 Skill 自我进化提升基线。</div><div class="suc-tags"><span class="suc-tag">Skill 进化</span><span class="suc-tag">mutation_history</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">复杂网络/层级图</div><div class="suc-desc">力导向图、桑基图等认知负担高的图型，自动迭代至认知摩擦力达标。</div><div class="suc-tags"><span class="suc-tag">认知摩擦</span><span class="suc-tag">自动迭代</span></div></div>
    </div>
  </div>

  <!-- SK4: 上层路由 (design-evaluator) -->
  <div class="skill-path" id="sk4">
    <div class="skill-path-header" style="background: oklch(95% 0.04 55); border-left-color: oklch(50% 0.16 55);">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:oklch(50% 0.16 55);margin-bottom:4px">SKILL PATH 04</div>
        <div style="font-family:'Noto Serif SC',serif;font-size:20px;font-weight:700;color:oklch(22% 0.02 260);display:flex;align-items:center;gap:10px">
          上层路由评测
          <span style="font-family:'Inter',sans-serif;font-size:13px;font-weight:400;color:var(--text-muted)">design-evaluator 统一入口</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:5px">图表嵌套在 PPT / 报告 / 信息图中时，由 design-evaluator 识别类型后自动派发给 infovis-evaluator 子评测</div>
      </div>
      <div style="background:oklch(90% 0.05 55);color:oklch(35% 0.12 55);border:1px solid oklch(78% 0.08 55);font-size:11px;padding:4px 10px;border-radius:99px;white-space:nowrap;font-weight:500;align-self:flex-start">适合：图文混排 / 整体评测</div>
    </div>
    <div style="background:var(--surface-2);border:1px solid var(--border);border-radius:10px;padding:16px 20px;margin-bottom:16px;">
      <div style="font-size:11px;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.06em;margin-bottom:12px">design-evaluator 二层架构</div>
      <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:start;">
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px;">
          <div style="font-size:11px;font-weight:700;color:oklch(50% 0.16 55);margin-bottom:8px">Layer 1 · 共同维度</div>
          <div style="font-size:11px;color:var(--text-secondary);line-height:1.8">D1 可读性 &amp; 信息层级<br>D2 受众对齐<br>D3 认知负担<br>D4 视觉一致性</div>
        </div>
        <div style="font-size:20px;color:var(--text-muted);align-self:center">→</div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:12px;">
          <div style="font-size:11px;font-weight:700;color:oklch(50% 0.16 55);margin-bottom:8px">Layer 2 · 类型路由</div>
          <div style="font-size:11px;color:var(--text-secondary);line-height:1.8">图表 → <strong style="color:oklch(45% 0.14 240)">infovis-evaluator</strong><br>PPT → PPT rules<br>报告 → Report rules<br>信息图 → Infographic rules</div>
        </div>
      </div>
    </div>
    <div class="skill-use-cases">
      <div class="suc-card"><div class="suc-chart-type">PPT 中的图表评测</div><div class="suc-desc">PPT 里有图表，用 design-evaluator 整体评测，自动对图表部分调用 infovis-evaluator。</div><div class="suc-tags"><span class="suc-tag">设计产物</span><span class="suc-tag">自动派发</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">品牌汇报文件</div><div class="suc-desc">含品牌屋、金字塔等框架图的品牌报告，整体评测后对每个可视化元素给出改进建议。</div><div class="suc-tags"><span class="suc-tag">品牌框架图</span><span class="suc-tag">整体评测</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">信息图质量审查</div><div class="suc-desc">多图混排的信息图，识别其中图表类型子元素并分别评测。</div><div class="suc-tags"><span class="suc-tag">Infographic</span><span class="suc-tag">子评测器</span></div></div>
    </div>
  </div>

  <!-- SK5: 质量门控 -->
  <div class="skill-path" id="sk5">
    <div class="skill-path-header" style="background: oklch(95% 0.03 270); border-left-color: oklch(48% 0.16 270);">
      <div style="flex:1">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:oklch(48% 0.16 270);margin-bottom:4px">SKILL PATH 05</div>
        <div style="font-family:'Noto Serif SC',serif;font-size:20px;font-weight:700;color:oklch(22% 0.02 260);display:flex;align-items:center;gap:10px">
          质量门控模式
          <span style="font-family:'Inter',sans-serif;font-size:13px;font-weight:400;color:var(--text-muted)">infovis-evaluator 独立评审</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:5px">不生成，只评测。对已有图表（截图/代码/URL）直接运行三维评测，输出 PASS/FAIL 和变异建议</div>
      </div>
      <div style="background:oklch(90% 0.05 270);color:oklch(35% 0.13 270);border:1px solid oklch(78% 0.08 270);font-size:11px;padding:4px 10px;border-radius:99px;white-space:nowrap;font-weight:500;align-self:flex-start">适合：审查已有图表 / CI 集成</div>
    </div>
    <div class="skill-flow">
      <div class="sf-node"><div class="sf-node-name">已有图表</div><div class="sf-node-role">截图 / 代码 / URL</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node sf-highlight" style="--sf-color:oklch(42% 0.16 240);--sf-bg:oklch(93% 0.04 240)"><div class="sf-node-name">infovis-evaluator</div><div class="sf-node-role">三维矩阵评测</div></div>
      <div class="sf-arrow">→</div>
      <div class="sf-node"><div class="sf-node-name">PASS / FAIL</div><div class="sf-node-role">得分 + 变异建议</div></div>
      <div class="sf-arrow">→ 若需修复 →</div>
      <div class="sf-node sf-highlight" style="--sf-color:oklch(45% 0.14 330);--sf-bg:oklch(93% 0.04 330)"><div class="sf-node-name">infovis-autoevo</div><div class="sf-node-role">自动修复迭代</div></div>
    </div>
    <div class="skill-use-cases">
      <div class="suc-card"><div class="suc-chart-type">交付前质量闸</div><div class="suc-desc">图表发布前的最终检查，PASS 才允许交付，FAIL 则自动触发 infovis-autoevo 修复。</div><div class="suc-tags"><span class="suc-tag">质量门控</span><span class="suc-tag">PASS/FAIL</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">外部图表审查</div><div class="suc-desc">对他人制作的图表截图进行快速质量诊断，找出认知摩擦点。</div><div class="suc-tags"><span class="suc-tag">独立评测</span><span class="suc-tag">VLM盲测</span></div></div>
      <div class="suc-card"><div class="suc-chart-type">图型适配审查</div><div class="suc-desc">质疑某图型选择是否合适，输入数据意图让评测器做信息路由验证。</div><div class="suc-tags"><span class="suc-tag">信息路由</span><span class="suc-tag">图型匹配</span></div></div>
    </div>
  </div>

  <!-- Skill 路径选择决策表 -->
  <div style="background: oklch(18% 0.04 260); border-radius: 16px; padding: 28px 32px; margin-top: 8px;">
    <div style="font-size: 14px; font-weight: 700; color: oklch(90% 0.04 260); margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
      <span style="font-size:20px">🎯</span> Skill 路径选择决策树
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px;">
      <div style="background:oklch(28% 0.04 260);border-radius:8px;padding:14px;"><div style="font-size:11px;font-weight:700;color:oklch(70% 0.12 150);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">快速生成</div><div style="font-size:12px;color:oklch(70% 0.03 260);line-height:1.7">需求明确 + 无质量压力<br>→ <strong style="color:oklch(80% 0.06 260)">SK1: visual-creator</strong></div></div>
      <div style="background:oklch(28% 0.04 260);border-radius:8px;padding:14px;"><div style="font-size:11px;font-weight:700;color:oklch(70% 0.12 240);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">生成+验收</div><div style="font-size:12px;color:oklch(70% 0.03 260);line-height:1.7">有交付质量要求<br>→ <strong style="color:oklch(80% 0.06 260)">SK2: creator→evaluator</strong></div></div>
      <div style="background:oklch(28% 0.04 260);border-radius:8px;padding:14px;"><div style="font-size:11px;font-weight:700;color:oklch(70% 0.12 330);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">极致质量</div><div style="font-size:12px;color:oklch(70% 0.03 260);line-height:1.7">需达 9.6 分 + 可迭代<br>→ <strong style="color:oklch(80% 0.06 260)">SK3: infovis-autoevo</strong></div></div>
      <div style="background:oklch(28% 0.04 260);border-radius:8px;padding:14px;"><div style="font-size:11px;font-weight:700;color:oklch(70% 0.12 55);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">整体文件</div><div style="font-size:12px;color:oklch(70% 0.03 260);line-height:1.7">图表在 PPT/报告中<br>→ <strong style="color:oklch(80% 0.06 260)">SK4: design-evaluator</strong></div></div>
      <div style="background:oklch(28% 0.04 260);border-radius:8px;padding:14px;"><div style="font-size:11px;font-weight:700;color:oklch(70% 0.12 270);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">只评不改</div><div style="font-size:12px;color:oklch(70% 0.03 260);line-height:1.7">审查已有图表<br>→ <strong style="color:oklch(80% 0.06 260)">SK5: 质量门控</strong></div></div>
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
            <!-- 五维评测标准完整表格 -->
            <div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:20px 24px;overflow-x:auto;margin-bottom:24px;">
              <div style="display:grid;grid-template-columns:140px repeat(5,1fr);gap:0;min-width:700px;">
                <!-- header row -->
                <div style="padding:10px 8px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);border-bottom:2px solid var(--border);">维度</div>
                <div style="padding:10px 8px;font-weight:700;color:oklch(52% 0.05 260);border-bottom:2px solid var(--border);font-size:12px;">L1 原始可用</div>
                <div style="padding:10px 8px;font-weight:700;color:oklch(45% 0.12 220);border-bottom:2px solid var(--border);font-size:12px;">L2 基础规范</div>
                <div style="padding:10px 8px;font-weight:700;color:oklch(42% 0.15 270);border-bottom:2px solid var(--border);font-size:12px;">L3 专业整洁</div>
                <div style="padding:10px 8px;font-weight:700;color:oklch(38% 0.17 230);border-bottom:2px solid var(--border);font-size:12px;">L4 设计精良</div>
                <div style="padding:10px 8px;font-weight:700;color:oklch(32% 0.18 255);border-bottom:2px solid var(--border);font-size:12px;">L5 顶级品质</div>
                <!-- row 1 -->
                <div style="padding:10px 8px;font-size:12px;font-weight:600;color:var(--text-secondary);border-bottom:1px solid var(--border);">📦 数据完整性</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">仅有原始数据，无单位无来源</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">有标题，数字千分位格式化</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">关键值标注，数据源注明</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">环比/同比变化标注，趋势说明</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">完整数据叙事，含对比基准线</div>
                <!-- row 2 -->
                <div style="padding:10px 8px;font-size:12px;font-weight:600;color:var(--text-secondary);border-bottom:1px solid var(--border);">🎨 视觉规范</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">默认色/灰色，无设计意图</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">统一配色，有坐标轴</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">色彩系统化，关键值高亮</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">渐变/主题色，视觉引导清晰</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">品牌级配色，发光/特效精准</div>
                <!-- row 3 -->
                <div style="padding:10px 8px;font-size:12px;font-weight:600;color:var(--text-secondary);border-bottom:1px solid var(--border);">📐 信息层级</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">无层级，全部信息等权重</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">有标题/轴标签，基础层级</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">标题+数值+分类，三层清晰</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">标题+副标题+数据，洞察前置</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">叙事完整，一眼命中核心结论</div>
                <!-- row 4 -->
                <div style="padding:10px 8px;font-size:12px;font-weight:600;color:var(--text-secondary);border-bottom:1px solid var(--border);">🧠 认知摩擦</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">极高，需逐个阅读理解</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">中等，需思考才能得出结论</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">低，分钟内得出结论</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">很低，秒级理解主要信息</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);border-bottom:1px solid var(--border);">零摩擦，盲测可100%解码</div>
                <!-- row 5 -->
                <div style="padding:10px 8px;font-size:12px;font-weight:600;color:var(--text-secondary);">✨ 设计精度</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);">无对齐，间距随意</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);">基础对齐，间距统一</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);">像素对齐，比例精确</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);">圆角/阴影精细，细节考究</div>
                <div style="padding:10px 8px;font-size:11px;color:var(--text-secondary);">品牌出版级，每个像素有意图</div>
              </div>
            </div>

            <!-- infovis-evaluator 三维对应关系 -->
            <div style="background:oklch(22% 0.05 260);border-radius:12px;padding:20px 24px;">
              <div style="font-size:12px;font-weight:700;color:oklch(88% 0.06 255);margin-bottom:14px">与 infovis-evaluator 三维矩阵的对应关系</div>
              <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
                <div style="background:oklch(28% 0.06 240);border-radius:8px;padding:12px;border:1px solid oklch(42% 0.12 240);">
                  <div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 240);margin-bottom:6px">信息路由维度</div>
                  <div style="font-size:11px;color:oklch(68% 0.04 260);line-height:1.7">图表类型是否匹配数据意图？<br>L1-L2: 类型可能误用<br>L3+: 类型与数据精准对齐<br>L5: Expected Topology 完全匹配</div>
                </div>
                <div style="background:oklch(28% 0.06 150);border-radius:8px;padding:12px;border:1px solid oklch(42% 0.12 150);">
                  <div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 150);margin-bottom:6px">盲测解码维度</div>
                  <div style="font-size:11px;color:oklch(68% 0.04 260);line-height:1.7">无上下文能否提取核心洞察？<br>L1-L2: 盲测失败率 &gt;70%<br>L3: 盲测基本可解读<br>L5: 盲测 100% 解码</div>
                </div>
                <div style="background:oklch(28% 0.06 55);border-radius:8px;padding:12px;border:1px solid oklch(42% 0.12 55);">
                  <div style="font-size:11px;font-weight:700;color:oklch(72% 0.12 55);margin-bottom:6px">认知摩擦力维度</div>
                  <div style="font-size:11px;color:oklch(68% 0.04 260);line-height:1.7">视觉噪音 Friction Score<br>L1: Friction &gt; 8 (极高)<br>L3: Friction ≈ 4 (合格)<br>L5: Friction &lt; 1 (极低)</div>
                </div>
              </div>
              <div style="margin-top:12px;font-size:11px;color:oklch(55% 0.06 260)">
                infovis-autoevo 通过阈值 ≥ 9.6 分，对应本评级体系的 <strong style="color:oklch(72% 0.12 255)">L5 标准</strong>
              </div>
            </div>
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

/* ── Tech Path ── */
.tech-path { margin-bottom: 56px; scroll-margin-top: 64px; }
.tech-path-header {
  display: flex; align-items: flex-start; gap: 16px;
  margin-bottom: 28px; padding: 20px 24px; border-radius: 12px; border-left: 4px solid;
}
.tech-path-number { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 4px; }
.tech-path-title { font-family: 'Noto Serif SC', serif; font-size: 20px; font-weight: 700; display: flex; align-items: center; gap: 10px; }
.tech-path-title-en { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: oklch(55% 0.02 260); }
.tech-path-desc { font-size: 13px; color: oklch(50% 0.02 260); margin-top: 5px; max-width: 560px; }
.tech-path-count { margin-left: auto; font-size: 11px; padding: 4px 10px; border-radius: 99px; white-space: nowrap; align-self: flex-start; font-weight: 500; }
.tech-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; }
.tech-card { background: var(--surface, #fff); border: 1px solid var(--border, #e5e7eb); border-radius: 12px; overflow: hidden; transition: box-shadow 0.2s, transform 0.2s; }
.tech-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.08); transform: translateY(-2px); }
.tech-card-header { padding: 16px 16px 12px; border-bottom: 1px solid var(--border, #e5e7eb); background: var(--surface-2, #f9fafb); }
.tech-card-name { font-size: 14px; font-weight: 600; color: var(--text-primary, #111); display: flex; align-items: center; gap: 8px; }
.tech-card-name-en { font-size: 11px; color: oklch(55% 0.02 260); margin-top: 2px; }
.tech-card-body { padding: 14px 16px; }
.tech-card-desc { font-size: 12px; color: oklch(50% 0.02 260); line-height: 1.6; margin-bottom: 10px; }
.tech-stack-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.ts-pill { padding: 3px 9px; border-radius: 99px; font-size: 11px; font-weight: 500; border: 1px solid; font-family: 'Inter', monospace; letter-spacing: 0.02em; }
.tech-pros-cons { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border, #e5e7eb); }
.pros-col, .cons-col { font-size: 11px; }
.pros-col strong { color: oklch(48% 0.15 150); font-size: 10px; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
.cons-col strong { color: oklch(50% 0.15 25); font-size: 10px; display: block; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
.pros-col li, .cons-col li { color: oklch(50% 0.02 260); list-style: none; padding-left: 0; line-height: 1.7; }
.pros-col li::before { content: '✓ '; color: oklch(52% 0.15 150); font-weight: 600; }
.cons-col li::before { content: '✗ '; color: oklch(52% 0.15 25); font-weight: 600; }
.tech-chart-types { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border, #e5e7eb); }
.tech-chart-types-label { font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: oklch(55% 0.02 260); margin-bottom: 6px; }
.tech-chart-tags { display: flex; flex-wrap: wrap; gap: 4px; }
.tct { font-size: 10px; padding: 2px 7px; border-radius: 4px; background: var(--surface-2, #f9fafb); border: 1px solid var(--border, #e5e7eb); color: oklch(50% 0.02 260); }
.complexity-dot { display: inline-flex; gap: 3px; align-items: center; margin-left: auto; }
.cd { width: 6px; height: 6px; border-radius: 50%; }

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
