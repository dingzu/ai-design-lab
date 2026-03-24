<template>
  <main class="page">
    <div class="wrap">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <RouterLink to="/" class="text-3">首页</RouterLink>
        <span class="text-3"> / </span>
        <span class="text-2">GenUI</span>
      </div>

      <!-- Header -->
      <header class="page-hero">
        <span class="tag tag-blue" style="margin-bottom:16px;display:inline-flex">02 · Generative UI</span>
        <h1>GenUI</h1>
        <p class="text-2" style="font-size:16px;max-width:560px;line-height:1.7;margin-top:16px">
          从 Prompt 到可用组件，探索 AI 生成界面的边界，重新定义设计到代码的生产路径。
        </p>
      </header>

      <!-- Stats bar -->
      <div class="stats-bar">
        <div class="stat-item">
          <div class="stat-num text-blue">探索中</div>
          <div class="stat-label text-3">状态</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">02</div>
          <div class="stat-label text-3">工作线编号</div>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <div class="stat-num">2025</div>
          <div class="stat-label text-3">启动年份</div>
        </div>
      </div>

      <div class="section-divider"></div>

      <!-- A2UI RESEARCH SECTION -->
      <section class="content-section">
        <div class="section-header">
          <div>
            <h2 class="section-title">A2UI 协议深度研究</h2>
            <p class="text-3" style="font-size:13px;margin-top:4px">来源：a2ui.org · Google · Apache 2.0 · v0.8 Stable</p>
          </div>
          <a href="https://a2ui.org" target="_blank" class="tag tag-blue" style="display:inline-flex;align-items:center;gap:4px;font-size:12px">a2ui.org ↗</a>
        </div>

        <!-- (1) A2UI 是什么 -->
        <div class="res-block">
          <div class="res-block-header">
            <div class="res-icon" style="background:#eff6ff">🧩</div>
            <div>
              <h3 class="res-block-title">A2UI 是什么</h3>
              <p class="text-3" style="font-size:13px">Agent-to-UI：AI Agent 向客户端发送「声明式 UI 描述」的开放协议</p>
            </div>
          </div>

          <div class="highlight-box">
            <div class="hb-icon">💡</div>
            <div>
              A2UI 解决的核心问题：<strong>AI Agent 如何在跨信任边界的场景下，安全地向客户端传递富交互界面？</strong><br>
              答案是：不发 HTML，不发代码，发一份「组件蓝图」——客户端用自己的原生组件来渲染。
            </div>
          </div>

          <div class="card-grid-2">
            <div class="res-card" v-for="item in whatItems" :key="item.title">
              <div class="rc-title">{{ item.icon }} {{ item.title }}</div>
              <div class="rc-body text-2">{{ item.desc }}</div>
            </div>
          </div>

          <!-- 版本信息 -->
          <div class="version-row">
            <div class="version-badge v-stable">
              <span class="vb-dot"></span>
              <span class="vb-name">v0.8</span>
              <span class="vb-status text-3">Stable</span>
            </div>
            <div class="version-badge v-draft">
              <span class="vb-dot" style="background:#f59e0b"></span>
              <span class="vb-name">v0.9</span>
              <span class="vb-status text-3">Draft · 新增 createSurface + 客户端函数 + 自定义 catalog</span>
            </div>
          </div>
        </div>

        <!-- (2) 设计模式 -->
        <div class="res-block">
          <div class="res-block-header">
            <div class="res-icon" style="background:#f5f3ff">🏗️</div>
            <div>
              <h3 class="res-block-title">设计模式</h3>
              <p class="text-3" style="font-size:13px">A2UI 核心架构决策与消息类型体系</p>
            </div>
          </div>

          <!-- 三大原则 -->
          <div class="principles-grid">
            <div class="principle-card" v-for="p in principles" :key="p.name">
              <div class="pc-icon">{{ p.icon }}</div>
              <div class="pc-name">{{ p.name }}</div>
              <div class="pc-desc text-3">{{ p.desc }}</div>
            </div>
          </div>

          <!-- 核心消息类型 -->
          <div class="sub-title">核心消息类型（v0.8）</div>
          <div class="msg-list">
            <div class="msg-item" v-for="m in msgTypes" :key="m.name">
              <code class="msg-name">{{ m.name }}</code>
              <div class="msg-desc text-2">{{ m.desc }}</div>
            </div>
          </div>

          <!-- 数据结构示例 -->
          <div class="sub-title" style="margin-top:20px">数据结构样例（邻接表模型）</div>
          <div class="code-block">
            <div class="cb-label">JSON · surfaceUpdate 消息</div>
            <pre><code>{{ jsonExample }}</code></pre>
          </div>
          <div class="info-note">
            <span>📌</span>
            <span>A2UI 使用<strong>邻接表模型（Adjacency List）</strong>表示组件树：每个组件是一个 flat 对象，通过 children ID 引用子节点，而非嵌套结构。这对 LLM 增量生成更友好。</span>
          </div>
        </div>

        <!-- (3) 一张图帮助理解 -->
        <div class="res-block">
          <div class="res-block-header">
            <div class="res-icon" style="background:#ecfdf5">🗺️</div>
            <div>
              <h3 class="res-block-title">一张图帮助理解</h3>
              <p class="text-3" style="font-size:13px">A2UI 端到端数据流：从 Agent 到用户界面的完整链路</p>
            </div>
          </div>

          <!-- 流程图 SVG -->
          <div class="flow-diagram">
            <!-- 步骤节点 -->
            <div class="flow-row">
              <div class="flow-node fn-user">
                <div class="fn-icon">👤</div>
                <div class="fn-label">User</div>
                <div class="fn-sublabel text-3">发送消息</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-node fn-agent">
                <div class="fn-icon">🤖</div>
                <div class="fn-label">Agent</div>
                <div class="fn-sublabel text-3">生成 A2UI 消息</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-node fn-transport">
                <div class="fn-icon">🔌</div>
                <div class="fn-label">Transport</div>
                <div class="fn-sublabel text-3">A2A / AG UI / REST</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-node fn-renderer">
                <div class="fn-icon">🎨</div>
                <div class="fn-label">Renderer</div>
                <div class="fn-sublabel text-3">映射到原生组件</div>
              </div>
              <div class="flow-arrow">→</div>
              <div class="flow-node fn-ui">
                <div class="fn-icon">📱</div>
                <div class="fn-label">UI</div>
                <div class="fn-sublabel text-3">原生渲染</div>
              </div>
            </div>

            <!-- 分层说明 -->
            <div class="flow-layers">
              <div class="layer-row">
                <div class="layer-badge lb-purple">Agent 层</div>
                <div class="layer-desc text-3">LLM 输出声明式 JSON，描述组件树结构和数据模型，不含任何可执行代码</div>
              </div>
              <div class="layer-row">
                <div class="layer-badge lb-blue">协议层</div>
                <div class="layer-desc text-3">Surface / Component / DataModel / Action 四类消息，以流式 JSONL 传输</div>
              </div>
              <div class="layer-row">
                <div class="layer-badge lb-green">客户端层</div>
                <div class="layer-desc text-3">Renderer 负责将抽象组件 ID 映射到框架原生 Widget，完全控制样式和安全</div>
              </div>
            </div>

            <!-- 关键特性标注 -->
            <div class="flow-keys">
              <div class="fk-item" v-for="k in flowKeys" :key="k.label">
                <span class="fk-dot" :style="{ background: k.color }"></span>
                <span class="fk-text text-2">{{ k.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- (4) 竞品方案对比 -->
        <div class="res-block">
          <div class="res-block-header">
            <div class="res-icon" style="background:#fff7ed">⚖️</div>
            <div>
              <h3 class="res-block-title">竞品方案对比</h3>
              <p class="text-3" style="font-size:13px">Agentic UI 生态的 4 种主流方案，各解决不同层面的问题</p>
            </div>
          </div>

          <!-- 对比卡片 -->
          <div class="compare-grid">
            <div
              class="compare-card"
              v-for="c in competitors"
              :key="c.name"
              :class="{ 'cc-highlight': c.isA2UI }"
            >
              <div class="cc-header">
                <span class="cc-icon">{{ c.icon }}</span>
                <div>
                  <div class="cc-name">{{ c.name }}</div>
                  <div class="cc-by text-3">{{ c.by }}</div>
                </div>
                <span v-if="c.isA2UI" class="cc-badge">本文主角</span>
              </div>
              <div class="cc-approach text-2">{{ c.approach }}</div>
              <div class="cc-pros">
                <div class="cp-row" v-for="pro in c.pros" :key="pro">
                  <span class="cp-dot cp-green">✓</span>
                  <span class="text-2" style="font-size:13px">{{ pro }}</span>
                </div>
              </div>
              <div class="cc-cons">
                <div class="cp-row" v-for="con in c.cons" :key="con">
                  <span class="cp-dot cp-red">✗</span>
                  <span class="text-2" style="font-size:13px">{{ con }}</span>
                </div>
              </div>
              <div class="cc-usecase">
                <span class="cc-uc-label text-3">适用：</span>
                <span class="text-2" style="font-size:12px">{{ c.usecase }}</span>
              </div>
            </div>
          </div>

          <!-- 总结表格 -->
          <div class="sub-title" style="margin-top:24px">维度横向对比</div>
          <div class="compare-table-wrap">
            <table class="compare-table">
              <thead>
                <tr>
                  <th>维度</th>
                  <th v-for="c in competitors" :key="c.name">{{ c.name }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="dim in dimensions" :key="dim.key">
                  <td class="dim-label">{{ dim.label }}</td>
                  <td v-for="c in competitors" :key="c.name" v-html="dim.values[c.name]"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="info-note" style="margin-top:16px">
            <span>🔍</span>
            <span><strong>Google 官方定位：</strong>A2UI 不替代 Vercel AI SDK / AG UI 等框架，它是一个专门解决「跨信任边界、跨平台、声明式 UI 传递」的协议层，与上述框架互补使用。</span>
          </div>
        </div>

      </section>

    </div>
  </main>
</template>

<script setup>
const whatItems = [
  { icon: '🔒', title: '安全优先（Secure by Design）', desc: '声明式数据格式，非可执行代码。Agent 只能请求 catalog 中预批准的组件，防止 UI 注入攻击。' },
  { icon: '🤖', title: 'LLM 友好（LLM-Friendly）', desc: '扁平 JSON 流式结构，LLM 可以增量构建 UI，无需一次性输出完整 JSON。' },
  { icon: '🔌', title: '框架无关（Framework-Agnostic）', desc: '同一份 Agent 响应可在 Angular、Flutter、React、原生移动端渲染，客户端决定样式实现。' },
  { icon: '⚡', title: '渐进式渲染（Progressive Rendering）', desc: '流式推送 UI 更新，用户实时看到界面构建过程，无需等待完整响应。' },
]

const principles = [
  { icon: '🛡️', name: 'Security First', desc: 'Agent 只能使用客户端 catalog 中的白名单组件，杜绝 UI 注入风险' },
  { icon: '📋', name: 'Declarative', desc: 'UI spec 是数据描述，不是代码，Agent 和客户端的职责彻底解耦' },
  { icon: '🏠', name: 'Client Owns Rendering', desc: '客户端保留完全的样式控制权，Agent 生成的 UI 天然融入宿主 App 风格' },
  { icon: '🔄', name: 'Incremental Updates', desc: '支持增量修改 UI，不必重新发送完整树——对话式 UI 的核心能力' },
  { icon: '🌐', name: 'Transport Agnostic', desc: '可通过 A2A、AG UI、未来 REST 等多种传输协议传递消息' },
  { icon: '📦', name: 'Adjacency List Model', desc: '扁平化组件树结构，每个节点独立存在，通过 ID 引用子节点，LLM 生成效率更高' },
]

const msgTypes = [
  { name: 'beginRendering', desc: '开始渲染指定 surface，指定 root 组件 ID' },
  { name: 'surfaceUpdate', desc: '向 surface 推送一批组件更新（新增 / 修改）' },
  { name: 'dataModelUpdate', desc: '更新数据模型，与组件通过数据绑定自动同步' },
  { name: 'deleteSurface', desc: '删除/清空指定 surface 及其所有组件' },
  { name: 'createSurface', desc: '(v0.9 Draft) 动态创建新 surface' },
]

const jsonExample = `{
  "surfaceUpdate": {
    "surfaceId": "booking",
    "components": [
      {
        "id": "form",
        "component": {
          "Column": {
            "children": { "explicitList": ["date-picker", "time-picker", "submit"] }
          }
        }
      },
      {
        "id": "date-picker",
        "component": {
          "DatePicker": {
            "label": { "literalString": "选择日期" },
            "boundValue": { "dataPath": "reservation.date" }
          }
        }
      }
    ]
  }
}`

const flowKeys = [
  { label: '流式 JSONL 传输，逐条推送组件', color: '#2563eb' },
  { label: '客户端 Catalog 白名单过滤', color: '#059669' },
  { label: '数据绑定（Data Binding）自动同步', color: '#7c3aed' },
  { label: '多 Surface 并行渲染', color: '#ea580c' },
]

const competitors = [
  {
    name: 'A2UI',
    icon: '🎯',
    by: 'Google · Apache 2.0 · v0.8',
    isA2UI: true,
    approach: '声明式 UI 协议层：Agent 发「组件蓝图」，客户端用原生 Widget 渲染',
    pros: ['原生样式继承，视觉一致', '跨信任边界安全', '多框架兼容（Flutter/Angular/Lit/React）', '支持多 Agent 协作场景（A2A）'],
    cons: ['需要客户端实现 Renderer', 'catalog 维护成本', '生态早期，v0.8 仍在演进'],
    usecase: '跨平台企业 Agent、多 Agent 网格、需要原生 UI 体验的场景',
  },
  {
    name: 'Vercel AI SDK',
    icon: '⬛',
    by: 'Vercel · MIT',
    isA2UI: false,
    approach: 'React Server Components + streamUI，Agent 直接生成 JSX/React 组件树',
    pros: ['React 生态无缝集成', '流式渲染体验极佳', '开发者体验一流'],
    cons: ['绑定 React 生态', '跨平台能力弱', '代码生成存在安全隐患'],
    usecase: 'Next.js Web 应用、React 全栈 GenUI 产品',
  },
  {
    name: 'MCP Apps',
    icon: '🔧',
    by: 'Anthropic / OpenAI',
    isA2UI: false,
    approach: 'UI as a Resource：通过 ui:// URI 返回 HTML，在 sandbox iframe 中渲染',
    pros: ['简单直接，无需额外 Renderer', '可返回完整交互 HTML', '与 MCP 生态集成'],
    cons: ['iframe 隔离，样式难以统一', '安全边界依赖沙箱', '性能较重'],
    usecase: 'MCP 工具返回简单展示界面、Claude 生态内应用',
  },
  {
    name: 'AG UI',
    icon: '🔗',
    by: 'CopilotKit · MIT',
    isA2UI: false,
    approach: '连接 Agentic Backend 和 Frontend 的全栈状态管理协议，支持 A2UI 作为 UI 格式',
    pros: ['完整的状态同步机制', '与 A2UI + A2A 都兼容', '实时协作 Agent 状态'],
    cons: ['更偏向框架层而非纯协议', '复杂度较高', '需学习额外抽象'],
    usecase: '构建完整 Agentic 应用（含状态管理 + UI 渲染）',
  },
]

const dimensions = [
  {
    key: 'approach',
    label: '渲染方式',
    values: {
      'A2UI': '<span class="dim-tag dt-green">原生组件</span>',
      'Vercel AI SDK': '<span class="dim-tag dt-blue">JSX/React</span>',
      'MCP Apps': '<span class="dim-tag dt-orange">iframe HTML</span>',
      'AG UI': '<span class="dim-tag dt-purple">协议框架</span>',
    },
  },
  {
    key: 'security',
    label: '安全模型',
    values: {
      'A2UI': '✅ Catalog 白名单',
      'Vercel AI SDK': '⚠️ 代码执行风险',
      'MCP Apps': '✅ 沙箱隔离',
      'AG UI': '✅ 依赖传输层',
    },
  },
  {
    key: 'platform',
    label: '跨平台',
    values: {
      'A2UI': '✅ Web/Flutter/Native',
      'Vercel AI SDK': '❌ 仅 Web',
      'MCP Apps': '⚠️ 依赖 iframe',
      'AG UI': '⚠️ 主要 Web',
    },
  },
  {
    key: 'style',
    label: '样式控制',
    values: {
      'A2UI': '✅ 客户端完全掌控',
      'Vercel AI SDK': '✅ React 组件样式',
      'MCP Apps': '❌ 隔离难统一',
      'AG UI': '✅ 宿主 App 控制',
    },
  },
  {
    key: 'streaming',
    label: '流式渲染',
    values: {
      'A2UI': '✅ JSONL 增量流',
      'Vercel AI SDK': '✅ 原生流式',
      'MCP Apps': '⚠️ 需额外支持',
      'AG UI': '✅ 实时状态同步',
    },
  },
  {
    key: 'multiagent',
    label: '多 Agent',
    values: {
      'A2UI': '✅ 专为 A2A 设计',
      'Vercel AI SDK': '❌ 单 Agent',
      'MCP Apps': '⚠️ 有限支持',
      'AG UI': '✅ 支持协作',
    },
  },
]
</script>

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
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.stats-bar {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 48px;
}
.stat-item { display: flex; flex-direction: column; gap: 4px; }
.stat-num { font-size: 20px; font-weight: 700; }
.stat-label { font-size: 12px; font-family: var(--font-mono); }
.stat-divider { width: 1px; height: 36px; background: var(--border); }

.section-divider { height: 1px; background: var(--border); margin: 48px 0; }

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  gap: 16px;
}
.section-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
}

/* RESEARCH BLOCKS */
.res-block {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--border);
}
.res-block:last-child { border-bottom: none; margin-bottom: 0; }

.res-block-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
}
.res-icon {
  width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px; flex-shrink: 0;
}
.res-block-title { font-size: 17px; font-weight: 700; margin-bottom: 2px; }

/* HIGHLIGHT BOX */
.highlight-box {
  background: var(--blue-bg);
  border: 1px solid var(--blue-border);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: var(--text-2);
}
.hb-icon { font-size: 16px; flex-shrink: 0; padding-top: 1px; }

/* CARD GRID */
.card-grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}
.res-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
}
.rc-title { font-size: 13px; font-weight: 600; margin-bottom: 8px; }
.rc-body { font-size: 13px; line-height: 1.6; }

/* VERSION ROW */
.version-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 12px; }
.version-badge {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 5px 12px; border-radius: 100px; font-size: 12px;
  border: 1px solid var(--border);
}
.v-stable { background: var(--green-bg); border-color: var(--green-border); }
.v-draft { background: #fffbeb; border-color: #fde68a; }
.vb-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; }
.vb-name { font-weight: 700; }
.vb-status { font-size: 11px; }

/* PRINCIPLES GRID */
.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
}
.principle-card {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px;
}
.pc-icon { font-size: 18px; margin-bottom: 6px; }
.pc-name { font-size: 13px; font-weight: 700; color: var(--purple); margin-bottom: 4px; }
.pc-desc { font-size: 12px; line-height: 1.5; }

/* SUB TITLE */
.sub-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  font-family: var(--font-mono);
  margin-bottom: 10px;
}

/* MSG LIST */
.msg-list { display: flex; flex-direction: column; gap: 6px; }
.msg-item {
  display: flex; align-items: center; gap: 12px;
  background: var(--bg-subtle); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 10px 14px;
}
.msg-name {
  font-family: var(--font-mono); font-size: 12px; font-weight: 600;
  color: var(--purple); background: var(--purple-bg);
  padding: 2px 8px; border-radius: 4px; white-space: nowrap; flex-shrink: 0;
}
.msg-desc { font-size: 13px; }

/* CODE BLOCK */
.code-block {
  background: #1e1e2e;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 12px;
}
.cb-label {
  background: #2d2d3f; color: #888; font-size: 11px; font-family: var(--font-mono);
  padding: 7px 14px; letter-spacing: 0.03em;
}
.code-block pre {
  padding: 16px; margin: 0; overflow-x: auto;
  font-family: var(--font-mono); font-size: 12px; line-height: 1.7;
  color: #cdd6f4;
}
.code-block code { background: none; color: inherit; font-size: inherit; }

/* INFO NOTE */
.info-note {
  background: var(--bg-subtle); border: 1px solid var(--border);
  border-radius: var(--radius-sm); padding: 10px 14px;
  font-size: 13px; line-height: 1.5; color: var(--text-2);
  display: flex; gap: 8px; align-items: flex-start;
}

/* FLOW DIAGRAM */
.flow-diagram {
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px 24px;
}
.flow-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.flow-node {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  background: var(--bg-card); border: 1.5px solid var(--border);
  border-radius: var(--radius-md); padding: 14px 18px; min-width: 90px;
  text-align: center;
}
.fn-user { border-color: var(--blue-border); background: var(--blue-bg); }
.fn-agent { border-color: var(--purple-border); background: var(--purple-bg); }
.fn-transport { border-color: var(--border); }
.fn-renderer { border-color: var(--green-border); background: var(--green-bg); }
.fn-ui { border-color: var(--blue-border); background: var(--blue-bg); }
.fn-icon { font-size: 22px; }
.fn-label { font-size: 13px; font-weight: 700; }
.fn-sublabel { font-size: 10px; }
.flow-arrow { font-size: 18px; color: var(--text-3); }

.flow-layers { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
.layer-row { display: flex; align-items: flex-start; gap: 12px; }
.layer-badge {
  font-size: 11px; font-weight: 700; padding: 3px 10px;
  border-radius: 100px; white-space: nowrap; flex-shrink: 0;
}
.lb-purple { background: var(--purple-bg); color: var(--purple); border: 1px solid var(--purple-border); }
.lb-blue { background: var(--blue-bg); color: var(--blue); border: 1px solid var(--blue-border); }
.lb-green { background: var(--green-bg); color: var(--green); border: 1px solid var(--green-border); }
.layer-desc { font-size: 12px; line-height: 1.5; }

.flow-keys { display: flex; flex-wrap: wrap; gap: 12px; }
.fk-item { display: flex; align-items: center; gap: 6px; }
.fk-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.fk-text { font-size: 12px; }

/* COMPARE GRID */
.compare-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin-bottom: 16px;
}
.compare-card {
  background: var(--bg-subtle); border: 1px solid var(--border);
  border-radius: var(--radius-md); padding: 18px;
  transition: box-shadow 0.15s;
}
.compare-card:hover { box-shadow: var(--shadow-md); }
.cc-highlight {
  background: var(--purple-bg) !important;
  border-color: var(--purple-border) !important;
}
.cc-header {
  display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;
}
.cc-icon { font-size: 20px; flex-shrink: 0; }
.cc-name { font-size: 14px; font-weight: 700; }
.cc-by { font-size: 11px; }
.cc-badge {
  margin-left: auto; font-size: 10px; font-weight: 700; flex-shrink: 0;
  background: var(--purple); color: white; padding: 2px 7px; border-radius: 100px;
}
.cc-approach {
  font-size: 13px; line-height: 1.5; margin-bottom: 12px;
  padding-bottom: 10px; border-bottom: 1px solid var(--border);
}
.cc-pros, .cc-cons { display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px; }
.cp-row { display: flex; gap: 6px; align-items: flex-start; }
.cp-dot { font-size: 11px; font-weight: 700; flex-shrink: 0; padding-top: 1px; }
.cp-green { color: var(--green); }
.cp-red { color: var(--red); }
.cc-usecase { font-size: 12px; border-top: 1px solid var(--border); padding-top: 8px; }
.cc-uc-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; }

/* COMPARE TABLE */
.compare-table-wrap { overflow-x: auto; }
.compare-table {
  width: 100%; border-collapse: collapse;
  background: var(--bg-card); border: 1px solid var(--border);
  border-radius: var(--radius-md); overflow: hidden; font-size: 13px;
}
.compare-table th {
  background: var(--bg-subtle); padding: 10px 14px; text-align: left;
  font-size: 12px; font-weight: 600; color: var(--text-2);
  border-bottom: 1px solid var(--border);
}
.compare-table td { padding: 9px 14px; border-bottom: 1px solid var(--border); vertical-align: middle; }
.compare-table tr:last-child td { border-bottom: none; }
.compare-table tr:hover td { background: var(--bg-subtle); }
.dim-label { font-weight: 600; font-size: 12px; white-space: nowrap; }
.dim-tag {
  font-size: 11px; font-weight: 600; padding: 2px 7px; border-radius: 4px;
  display: inline-block;
}
.dt-green { background: var(--green-bg); color: var(--green); }
.dt-blue { background: var(--blue-bg); color: var(--blue); }
.dt-orange { background: #fff7ed; color: var(--orange); }
.dt-purple { background: var(--purple-bg); color: var(--purple); }

/* TAG */
.tag { font-size: 12px; font-weight: 500; padding: 3px 10px; border-radius: 6px; }
.tag-blue { background: var(--blue-bg); color: var(--blue); border: 1px solid var(--blue-border); }
.text-blue { color: var(--blue); }

@media (max-width: 640px) {
  .stats-bar { flex-wrap: wrap; gap: 16px; }
  .stat-divider { display: none; }
  .flow-row { gap: 6px; }
  .flow-arrow { display: none; }
  .compare-grid { grid-template-columns: 1fr; }
  .card-grid-2 { grid-template-columns: 1fr 1fr; }
  .principles-grid { grid-template-columns: 1fr 1fr; }
  .section-header { flex-direction: column; align-items: flex-start; }
}
</style>
