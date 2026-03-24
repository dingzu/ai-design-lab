<template>
  <main class="page">
    <div class="hub-layout">

      <!-- LEFT SIDEBAR -->
      <aside class="hub-sidebar">
        <div class="sidebar-header">
          <RouterLink to="/" class="back-link text-3">← 首页</RouterLink>
          <div class="sidebar-title">研究汇总</div>
        </div>

        <nav class="article-nav">
          <div class="nav-section-label text-3">第一批研究</div>
          <button
            v-for="art in articles"
            :key="art.id"
            class="nav-item"
            :class="{ active: activeArticle === art.id }"
            @click="activeArticle = art.id"
          >
            <span class="nav-icon">{{ art.icon }}</span>
            <div class="nav-text">
              <div class="nav-title">{{ art.title }}</div>
              <div class="nav-meta text-3">{{ art.date }} · {{ art.readTime }}</div>
            </div>
          </button>
        </nav>

        <!-- TOC for active article -->
        <div class="toc-section" v-if="activeToc.length">
          <div class="nav-section-label text-3" style="margin-top:24px">本文目录</div>
          <nav class="toc-nav">
            <a
              v-for="item in activeToc"
              :key="item.id"
              :href="'#' + item.id"
              class="toc-item"
              :class="{ 'toc-sub': item.level === 2 }"
            >{{ item.label }}</a>
          </nav>
        </div>
      </aside>

      <!-- RIGHT CONTENT -->
      <div class="hub-content">
        <!-- article: openclaw-rendering -->
        <article v-if="activeArticle === 'openclaw-rendering'" class="article">

          <!-- Article header -->
          <header class="article-header">
            <div class="article-breadcrumb">
              <RouterLink to="/" class="text-3">首页</RouterLink>
              <span class="text-3"> / </span>
              <RouterLink to="/skill" class="text-3">SKILL 开发</RouterLink>
              <span class="text-3"> / </span>
              <span class="text-2">研究汇总</span>
            </div>
            <div class="article-badges">
              <span class="tag tag-blue">仓库分析报告</span>
              <span class="tag tag-green">7 大渲染类别</span>
            </div>
            <h1 class="article-title">OpenClaw 对话特殊渲染机制全览</h1>
            <p class="article-desc">对 openclaw/openclaw 仓库的全面分析——涵盖对话中所有的特殊结果渲染与额外处理机制</p>
            <div class="article-meta">
              <span class="meta-item">📦 Source: github.com/openclaw/openclaw</span>
              <span class="meta-item">📄 Docs: docs.openclaw.ai</span>
              <span class="meta-item">🔍 分析维度：7 大渲染类别</span>
            </div>
          </header>

          <!-- OVERVIEW -->
          <section id="overview" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#eef6f1">🗺️</div>
              <div>
                <h2>特殊渲染机制总览</h2>
                <p class="text-3">OpenClaw 在对话中支持 7 大类特殊结果渲染，从基础的 Markdown 格式化到全功能的可交互 UI 面板</p>
              </div>
            </div>
            <div class="r-card-grid">
              <div class="r-card" v-for="item in overviewItems" :key="item.title">
                <div class="r-card-title">{{ item.icon }} {{ item.title }}</div>
                <div class="r-card-body">{{ item.desc }}</div>
                <div class="r-card-tags">
                  <span class="tag tag-blue" v-for="t in item.tags" :key="t">{{ t }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- STREAMING -->
          <section id="streaming" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#ebf4ff">🌊</div>
              <div>
                <h2>流式渲染（Streaming）</h2>
                <p class="text-3">OpenClaw 有两套独立的流式层，覆盖"边写边发"和"预览实时更新"两种场景</p>
              </div>
            </div>

            <div class="info-box info-blue">
              <span class="ib-icon">ℹ️</span>
              <span>OpenClaw 今天<strong>没有真正的 token-delta 流式</strong>到渠道消息。两种流式都是消息级别（send + edits/appends），不是字符级别。</span>
            </div>

            <div class="wide-card">
              <h3>Layer 1：Block Streaming（渠道消息流式）</h3>
              <p class="text-2" style="margin-bottom:16px">当助手写作时，以"块"为单位把完成的内容推送为独立消息，而不是等到全部完成。</p>
              <div class="stream-diagram">
                <div class="stream-row" v-for="row in streamRows" :key="row.label">
                  <div class="stream-label">{{ row.label }}</div>
                  <div class="stream-desc text-2" v-html="row.desc"></div>
                </div>
              </div>
              <div class="mode-grid">
                <div class="mode-item" v-for="m in streamModes" :key="m.name">
                  <div class="mode-name">{{ m.name }}</div>
                  <div class="mode-desc text-3">{{ m.desc }}</div>
                </div>
              </div>
            </div>

            <div class="wide-card">
              <h3>Layer 2：Preview Streaming（预览流式）</h3>
              <p class="text-2" style="margin-bottom:12px">在生成过程中更新一条临时"预览消息"，支持 4 种模式：</p>
              <div class="r-table-wrap">
                <table class="r-table">
                  <thead><tr><th>模式</th><th>说明</th><th>Telegram</th><th>Discord</th><th>Slack</th></tr></thead>
                  <tbody>
                    <tr><td><code>off</code></td><td>禁用预览</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
                    <tr><td><code>partial</code></td><td>单条预览不断替换为最新文本</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
                    <tr><td><code>block</code></td><td>分块追加更新（draft chunking）</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
                    <tr><td><code>progress</code></td><td>生成中显示进度/状态，完成后再显示最终答案</td><td class="partial">→ partial</td><td class="partial">→ partial</td><td class="check">✓ (Slack 专属)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="info-box info-green" style="margin-top:12px">
                <span class="ib-icon">💡</span>
                <span>Slack 专属：<code>channels.slack.nativeStreaming</code> 可使用 Slack 原生 streaming API，实现真正的逐字符渲染效果。</span>
              </div>
            </div>

            <div class="wide-card">
              <h3>Reasoning 推理流式</h3>
              <p class="text-2">当 <code>/reasoning on</code> 时，推理内容会以 <strong>独立消息</strong>发送，前缀 <code>Reasoning:</code>。<br><code>/reasoning stream</code> 仅在 Telegram 上将推理写入 draft 预览。</p>
            </div>
          </section>

          <!-- CANVAS -->
          <section id="canvas" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f3ebff">🎨</div>
              <div>
                <h2>Canvas / A2UI 可视化面板</h2>
                <p class="text-3">Agent 控制的可视化工作区——OpenClaw 对话中最强大的特殊渲染能力</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">🏗️ 技术架构</div>
                <div class="r-card-body">
                  <ul>
                    <li>macOS 上使用 <strong>WKWebView</strong> 渲染</li>
                    <li>文件存储：<code>~/Library/Application Support/OpenClaw/canvas/&lt;session&gt;/</code></li>
                    <li>自定义 URL Scheme：<code>openclaw-canvas://&lt;session&gt;/&lt;path&gt;</code></li>
                    <li>无环回服务器，安全沙箱</li>
                  </ul>
                </div>
              </div>
              <div class="r-card">
                <div class="r-card-title">⚙️ 面板行为</div>
                <div class="r-card-body">
                  <ul>
                    <li>无边框、可调整大小，每个 session 记住位置/尺寸</li>
                    <li>文件变更时自动重载</li>
                    <li>同时只有一个面板可见</li>
                    <li>可在 Settings → Allow Canvas 中禁用</li>
                  </ul>
                </div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🤖 Agent API 命令</div>
                <div class="r-card-body">
                  通过 Gateway WebSocket 控制：
                  <ul style="margin-top:8px">
                    <li><code>present</code>：展示内容</li>
                    <li><code>navigate</code>：导航到 URL</li>
                    <li><code>eval</code>：执行 JavaScript</li>
                    <li><code>snapshot</code>：截图</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="wide-card">
              <h3>A2UI 声明式 UI 协议（v0.8）</h3>
              <p class="text-2" style="margin-bottom:16px">A2UI 允许 Agent 通过 JSONL 格式的消息来构建和更新 Canvas 中的 UI，无需直接写 HTML。</p>
              <div class="mode-grid">
                <div class="mode-item" v-for="m in a2uiMsgTypes" :key="m.name">
                  <div class="mode-name">{{ m.name }}</div>
                  <div class="mode-desc text-3">{{ m.desc }}</div>
                </div>
              </div>
              <div class="code-demo">
                <div class="code-col">
                  <div class="code-label text-3">A2UI JSONL 示例</div>
                  <pre class="r-code">{{ a2uiExample }}</pre>
                </div>
                <div class="code-col">
                  <div class="code-label text-3">CLI 推送命令</div>
                  <pre class="r-code">{{ cliExample }}</pre>
                  <div class="info-box info-warning" style="margin-top:8px">
                    <span class="ib-icon">⚠️</span>
                    <span><code>createSurface</code>（v0.9）尚未支持</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- MARKDOWN -->
          <section id="markdown" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef9f0">📝</div>
              <div>
                <h2>Markdown 跨渠道格式化</h2>
                <p class="text-3">统一中间表示（IR）→ 各渠道原生格式转换，确保格式在不同平台正确显示</p>
              </div>
            </div>
            <div class="wide-card">
              <h3>渲染流水线</h3>
              <div class="pipeline-row">
                <span class="pipeline-node pipeline-green">Markdown 源文本</span>
                <span class="pipeline-arrow text-3">→ markdownToIR()</span>
                <span class="pipeline-node pipeline-blue">统一 IR</span>
                <span class="pipeline-arrow text-3">→ renderMarkdownWithMarkers()</span>
                <span class="pipeline-node pipeline-purple">渠道格式</span>
              </div>
              <div class="r-table-wrap" style="margin-top:16px">
                <table class="r-table">
                  <thead><tr><th>渠道</th><th>输出格式</th><th>Bold</th><th>Code</th><th>Links</th><th>Spoiler</th><th>Table</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Slack</strong></td><td>mrkdwn</td><td><code>*text*</code></td><td><code>`code`</code></td><td><code>&lt;url|label&gt;</code></td><td class="cross">✗</td><td><span class="pill pill-gray">code block</span></td></tr>
                    <tr><td><strong>Telegram</strong></td><td>HTML</td><td><code>&lt;b&gt;</code></td><td><code>&lt;code&gt;</code></td><td><code>&lt;a href&gt;</code></td><td class="cross">✗</td><td><span class="pill pill-gray">code block</span></td></tr>
                    <tr><td><strong>Signal</strong></td><td>plain + ranges</td><td>range</td><td>range</td><td>label (url)</td><td class="check">✓ SPOILER range</td><td><span class="pill pill-gray">bullets</span></td></tr>
                    <tr><td><strong>Discord</strong></td><td>plain/markdown</td><td>—</td><td>—</td><td>—</td><td class="cross">✗</td><td><span class="pill pill-gray">code block</span></td></tr>
                    <tr><td><strong>WhatsApp</strong></td><td>plain text</td><td>—</td><td>—</td><td>—</td><td class="cross">✗</td><td><span class="pill pill-gray">bullets</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">📊 表格处理</div>
                <div class="r-card-body"><code>markdown.tables</code> 三种模式：<ul style="margin-top:8px"><li><code>code</code>：转为代码块（大多数渠道默认）</li><li><code>bullets</code>：每行转为 bullet（Signal/WhatsApp 默认）</li><li><code>off</code>：原样透传</li></ul></div>
              </div>
              <div class="r-card">
                <div class="r-card-title">✂️ 分块规则</div>
                <div class="r-card-body"><ul><li>代码围栏整块不分割</li><li>inline 样式不跨块分割，块内重新打开</li><li>list 前缀、blockquote 前缀包含在 IR text 中</li></ul></div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🔗 链接策略</div>
                <div class="r-card-body"><ul><li>Slack：<code>[label](url)</code> → <code>&lt;url|label&gt;</code></li><li>Telegram：<code>[label](url)</code> → HTML <code>&lt;a&gt;</code></li><li>Signal：label 和 url 不同时显示 <code>label (url)</code></li></ul></div>
              </div>
            </div>
          </section>

          <!-- MEDIA -->
          <section id="media" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef3e8">🖼️</div>
              <div>
                <h2>媒体内容渲染</h2>
                <p class="text-3">图片、音频、视频的全链路处理——从接收、理解到生成与发送</p>
              </div>
            </div>
            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">📸 图片支持</div>
                <div class="r-card-body"><ul><li>接收来自各渠道的图片附件</li><li>多模态模型视觉理解</li><li>Agent 可发送图片到渠道</li><li>Camera Capture（macOS/iOS 节点）</li><li>Canvas snapshot 截图</li></ul></div>
                <div class="r-card-tags"><span class="tag">nodes/images</span></div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🎙️ 音频 / 语音</div>
                <div class="r-card-body"><ul><li>接收语音消息，自动转文字（STT）</li><li>Talk Mode（持续语音会话）</li><li>Voice Wake（唤醒词检测）</li><li>TTS（文字转语音，<code>/tts</code> 命令控制）</li><li>Voice Overlay（macOS 浮层）</li><li>Voice Call Plugin</li></ul></div>
                <div class="r-card-tags"><span class="tag tag-orange">nodes/audio</span><span class="tag tag-orange">TTS</span></div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🎬 视频 / 媒体理解</div>
                <div class="r-card-body"><ul><li>视频文件接收与处理</li><li>多媒体理解（Media Understanding）</li><li>工具结果中的图片 payload 会被清理后再记录/发送</li></ul></div>
                <div class="r-card-tags"><span class="tag">nodes/media-understanding</span></div>
              </div>
              <div class="r-card">
                <div class="r-card-title">📍 位置信息</div>
                <div class="r-card-body"><ul><li>接收来自渠道的地理位置消息</li><li>Location Parsing（渠道位置解析）</li><li>Location Command（节点位置命令）</li></ul></div>
                <div class="r-card-tags"><span class="tag">channels/location</span></div>
              </div>
            </div>
            <div class="info-box info-green">
              <span class="ib-icon">💡</span>
              <span>Tool 执行结果中的图片 payload 会在写入 session transcript 前被<strong>自动清理大小</strong>，防止 context 膨胀。</span>
            </div>
          </section>

          <!-- REACTIONS -->
          <section id="reactions" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef9f0">😀</div>
              <div>
                <h2>Emoji 反应（Reactions）</h2>
                <p class="text-3">Agent 可通过 message tool 的 react action 给消息添加或删除 emoji 反应</p>
              </div>
            </div>
            <div class="code-demo">
              <div class="code-col">
                <div class="code-label text-3">React 工具调用示例</div>
                <pre class="r-code">{{ reactExample }}</pre>
              </div>
              <div class="code-col">
                <div class="r-table-wrap">
                  <table class="r-table">
                    <thead><tr><th>渠道</th><th>添加</th><th>清空全部</th><th>删除特定</th></tr></thead>
                    <tbody>
                      <tr v-for="r in reactionsTable" :key="r.channel">
                        <td>{{ r.channel }}</td>
                        <td :class="r.addClass">{{ r.add }}</td>
                        <td :class="r.clearClass">{{ r.clear }}</td>
                        <td :class="r.removeClass">{{ r.remove }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="info-box info-blue" style="margin-top:12px">
                  <span class="ib-icon">📱</span>
                  <span>Signal 的 <code>reactionNotifications</code> 可配：<code>off</code> / <code>own</code>（默认）/ <code>all</code></span>
                </div>
              </div>
            </div>
          </section>

          <!-- COMMANDS -->
          <section id="commands" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#e8f4ff">⌨️</div>
              <div>
                <h2>Slash 命令特殊渲染</h2>
                <p class="text-3">以 / 开头的命令触发系统级特殊渲染，不经过普通 agent 推理路径</p>
              </div>
            </div>
            <div class="info-box info-blue">
              <span class="ib-icon">🔑</span>
              <div><strong>两类机制：</strong><br><strong>Commands</strong>：独立的 /... 消息，触发特定系统操作<br><strong>Directives</strong>：<code>/think</code>、<code>/verbose</code>、<code>/reasoning</code> 等，在消息中被剥离，不让 model 看到，直接修改 session 设置</div>
            </div>
            <div class="cmd-list">
              <div class="cmd-item" v-for="cmd in slashCommands" :key="cmd.name">
                <span class="cmd-name">{{ cmd.name }}</span>
                <span class="cmd-desc text-2">{{ cmd.desc }}</span>
              </div>
            </div>
            <div class="info-box info-warning" style="margin-top:16px">
              <span class="ib-icon">⚠️</span>
              <span><code>NO_REPLY</code> 是一个特殊静默 token：当 agent 输出包含 NO_REPLY 时，该 payload 会被<strong>过滤掉</strong>，不发送任何消息给用户。</span>
            </div>
          </section>

          <!-- WEBCHAT -->
          <section id="webchat" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f0f4ff">💬</div>
              <div>
                <h2>WebChat 专属特性</h2>
                <p class="text-3">WebChat 通过 Gateway WebSocket 直连，具备独特的渲染行为</p>
              </div>
            </div>
            <div class="r-card-grid">
              <div class="r-card" v-for="wc in webchatCards" :key="wc.title">
                <div class="r-card-title">{{ wc.title }}</div>
                <div class="r-card-body">{{ wc.desc }}</div>
              </div>
            </div>
            <div class="wide-card" style="margin-top:14px">
              <h3>WebSocket 消息协议</h3>
              <div class="cmd-list">
                <div class="cmd-item" v-for="ws in wsProtocol" :key="ws.name">
                  <span class="cmd-name">{{ ws.name }}</span>
                  <span class="cmd-desc text-2">{{ ws.desc }}</span>
                </div>
              </div>
            </div>
          </section>

          <!-- ARCH -->
          <section id="arch" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef3e8">🏗️</div>
              <div>
                <h2>Agent Loop 渲染架构</h2>
                <p class="text-3">了解渲染行为的根本机制——agent loop 如何控制所有特殊输出</p>
              </div>
            </div>
            <div class="wide-card">
              <h3>Event Stream 三路输出</h3>
              <div class="stream-diagram">
                <div class="stream-row">
                  <div class="stream-label" style="color:var(--green)">lifecycle stream</div>
                  <div class="stream-desc text-2"><code>phase: "start" | "end" | "error"</code> — 控制 WebChat 的 final 消息时机</div>
                </div>
                <div class="stream-row">
                  <div class="stream-label" style="color:var(--blue)">assistant stream</div>
                  <div class="stream-desc text-2">来自 pi-agent-core 的增量文本 delta — WebChat 显示为 chat.delta</div>
                </div>
                <div class="stream-row">
                  <div class="stream-label" style="color:var(--purple)">tool stream</div>
                  <div class="stream-desc text-2">tool start/update/end 事件 — /verbose 开启时在渠道消息中内联显示</div>
                </div>
              </div>
              <h3 style="margin-top:20px">Plugin Hook 拦截点</h3>
              <div class="mode-grid">
                <div class="mode-item" v-for="h in pluginHooks" :key="h.name">
                  <div class="mode-name">{{ h.name }}</div>
                  <div class="mode-desc text-3">{{ h.desc }}</div>
                </div>
              </div>
            </div>
            <div class="wide-card">
              <h3>渠道级特殊格式处理汇总</h3>
              <div class="r-table-wrap">
                <table class="r-table">
                  <thead><tr><th>渠道</th><th>Block Streaming</th><th>Preview Streaming</th><th>Markdown Format</th><th>Reactions</th><th>特殊说明</th></tr></thead>
                  <tbody>
                    <tr v-for="ch in channelSummary" :key="ch.name">
                      <td><strong>{{ ch.name }}</strong></td>
                      <td v-html="ch.block"></td>
                      <td v-html="ch.preview"></td>
                      <td v-html="ch.md"></td>
                      <td v-html="ch.react"></td>
                      <td class="text-3" style="font-size:12px">{{ ch.note }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

        </article>

        <!-- article: agency-agents -->
        <article v-if="activeArticle === 'agency-agents'" class="article">

          <header class="article-header">
            <div class="article-breadcrumb">
              <RouterLink to="/" class="text-3">首页</RouterLink>
              <span class="text-3"> / </span>
              <span class="text-2">研究汇总</span>
            </div>
            <div class="article-badges">
              <span class="tag tag-blue">仓库分析报告</span>
              <span class="tag tag-green">12 部门</span>
              <span class="tag" style="background:#fef9f0;border-color:#f6d860;color:#b45309">Multi-Agent</span>
            </div>
            <h1 class="article-title">The Agency：147 个 AI 专家 Agent 体系全览</h1>
            <p class="article-desc">对 msitarzewski/agency-agents 的全面分析——涵盖 12 个部门、多工具集成体系与 Agent 设计哲学</p>
            <div class="article-meta">
              <span class="meta-item">📦 Source: github.com/msitarzewski/agency-agents</span>
              <span class="meta-item">🎭 147 个专家 Agent</span>
              <span class="meta-item">🔌 10+ 工具集成</span>
            </div>
          </header>

          <!-- OVERVIEW -->
          <section id="aa-overview" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f3ebff">🗺️</div>
              <div>
                <h2>项目概览</h2>
                <p class="text-3">从 Reddit 帖子起步，迭代数月，The Agency 已成为最具影响力的 AI Agent 角色库之一</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="item in aaOverviewCards" :key="item.title">
                <div class="r-card-title">{{ item.icon }} {{ item.title }}</div>
                <div class="r-card-body">{{ item.desc }}</div>
              </div>
            </div>

            <div class="info-box info-purple">
              <span class="ib-icon">💡</span>
              <div>
                <strong>核心理念：</strong>组建你的梦之队，只不过他们是 AI 专家——永不睡觉、永不抱怨、永远交付。与通用 Prompt 库不同，每个 Agent 都有<strong>个性、流程和可衡量的交付物</strong>。
              </div>
            </div>
          </section>

          <!-- DIVISIONS -->
          <section id="aa-divisions" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#ebf4ff">🏢</div>
              <div>
                <h2>12 个业务部门</h2>
                <p class="text-3">横跨工程、设计、营销、销售、测试等全职能线，覆盖企业软件团队的所有岗位</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="div in aaDivisions" :key="div.name">
                <div class="r-card-title">{{ div.icon }} {{ div.name }} <span class="tag" style="font-size:11px;margin-left:6px;background:#f3ebff;border-color:#d6bcfa;color:#7c3aed">{{ div.count }}</span></div>
                <div class="r-card-body">{{ div.desc }}</div>
                <div class="r-card-tags" style="margin-top:6px">
                  <span class="tag" style="background:#f8f7f4;font-size:11px" v-for="a in div.agents" :key="a">{{ a }}</span>
                </div>
              </div>
            </div>

            <div class="info-box" style="background:#fff7ed;border:1px solid #fdba74;margin-top:16px">
              <span class="ib-icon">🇨🇳</span>
              <div>Marketing 部门内置了小红书、微信公众号、抖音、快手、知乎、B站、百度 SEO、跨境电商、直播电商、私域运营等 <strong>10+ 中国平台专家 Agent</strong>，是目前最全面的中文市场 AI Agent 集合之一。</div>
            </div>
          </section>

          <!-- PHILOSOPHY -->
          <section id="aa-philosophy" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef9f0">📖</div>
              <div>
                <h2>Agent 设计哲学</h2>
                <p class="text-3">让 The Agency 区别于普通 Prompt 库的核心方法论</p>
              </div>
            </div>

            <div class="wide-card">
              <h3>Agent 文件标准结构</h3>
              <div class="r-card-grid">
                <div class="r-card" v-for="field in aaFileFields" :key="field.name">
                  <div class="r-card-title"><code>{{ field.name }}</code></div>
                  <div class="r-card-body">{{ field.desc }}</div>
                </div>
              </div>
            </div>

            <div class="wide-card" style="margin-top:14px">
              <h3>Agent 个性语录</h3>
              <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px">
                <div class="info-box info-purple" v-for="q in aaQuotes" :key="q.from" style="margin:0">
                  <span class="ib-icon">💬</span>
                  <div><em>「{{ q.text }}」</em><br><small style="color:var(--text3)">— {{ q.from }}</small></div>
                </div>
              </div>
            </div>
          </section>

          <!-- TOOLS -->
          <section id="aa-tools" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#ebf4ff">🔌</div>
              <div>
                <h2>多工具集成体系</h2>
                <p class="text-3">原生支持 Claude Code，通过自动化脚本一键适配 10 种主流 AI 编程工具</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="tool in aaTools" :key="tool.name">
                <div class="r-card-title">{{ tool.icon }} {{ tool.name }}</div>
                <div class="r-card-body">
                  <code>{{ tool.format }}</code> → <code>{{ tool.dest }}</code>
                </div>
              </div>
            </div>

            <div class="wide-card">
              <h3>快速安装命令</h3>
              <div class="code-demo">
                <div>
                  <div class="code-label">Step 1：生成集成文件</div>
                  <pre><code>./scripts/convert.sh
# 并行加速
./scripts/convert.sh --parallel</code></pre>
                </div>
                <div>
                  <div class="code-label">Step 2：交互式安装</div>
                  <pre><code>./scripts/install.sh
# 指定工具
./scripts/install.sh --tool cursor</code></pre>
                </div>
              </div>
            </div>

            <div class="info-box info-blue" style="margin-top:14px">
              <span class="ib-icon">🦞</span>
              <div>OpenClaw 专属：每个 Agent 生成 <code>SOUL.md</code> + <code>AGENTS.md</code> + <code>IDENTITY.md</code> 三件套，安装到 <code>~/.openclaw/agency-agents/</code></div>
            </div>
          </section>

          <!-- INSIGHTS -->
          <section id="aa-insights" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef3e8">🔮</div>
              <div>
                <h2>核心洞察与借鉴价值</h2>
                <p class="text-3">可直接应用于自有 Skill/Agent 体系的方法论提炼</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="ins in aaInsights" :key="ins.title">
                <div class="r-card-title">{{ ins.title }}</div>
                <div class="r-card-body">{{ ins.desc }}</div>
              </div>
            </div>
          </section>

        </article>

        <!-- article: infographic-types -->
        <article v-if="activeArticle === 'infographic-types'" class="article">

          <header class="article-header">
            <div class="article-breadcrumb">
              <RouterLink to="/" class="text-3">首页</RouterLink>
              <span class="text-3"> / </span>
              <span class="text-2">研究汇总</span>
            </div>
            <div class="article-badges">
              <span class="tag tag-blue">设计研究</span>
              <span class="tag tag-green">11 种类型</span>
              <span class="tag" style="background:#fef3e8;border-color:#fdba74;color:#b45309">信息可视化</span>
            </div>
            <h1 class="article-title">信息图分类研究：11 种主流类型全解析</h1>
            <p class="article-desc">基于 Piktochart、Visme、Canva 等专业平台的研究，系统梳理信息图的分类体系与设计原则</p>
            <div class="article-meta">
              <span class="meta-item">📊 研究来源: Piktochart, Visme, Canva</span>
              <span class="meta-item">📅 研究日期: 2026年3月</span>
              <span class="meta-item">🔍 11 种信息图类型</span>
            </div>
          </header>

          <!-- OVERVIEW -->
          <section id="inf-overview" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#eef6f1">📊</div>
              <div>
                <h2>概述</h2>
                <p class="text-3">信息图是将复杂信息通过视觉元素呈现的数据可视化形式，选择正确的类型至关重要</p>
              </div>
            </div>

            <div class="info-box info-green">
              <span class="ib-icon">💡</span>
              <span>研究表明，人们三天后对视觉信息的保留率高达 <strong>65%</strong>，而纯文本仅约 <strong>10%</strong>。</span>
            </div>

            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">📐 按结构分类</div>
                <div class="r-card-body">层级、时间轴、流程、流程图 —— 强调信息的组织方式与关系</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">📝 按内容分类</div>
                <div class="r-card-body">信息说明、数据可视化、对比、列表 —— 强调信息的表达形式</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🎯 按应用场景分类</div>
                <div class="r-card-body">地图、简历、交互式 —— 强调特定的使用情境</div>
              </div>
            </div>
          </section>

          <!-- STRUCTURE TYPES -->
          <section id="inf-structure" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#ebf4ff">📐</div>
              <div>
                <h2>按结构分类</h2>
                <p class="text-3">基于信息的组织方式与关系结构的 4 种核心类型</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="type in infographicTypes" :key="type.id">
                <div class="r-card-title">{{ type.icon }} {{ type.name }} <span class="text-3" style="font-size:11px">{{ type.en }}</span></div>
                <div class="r-card-body">{{ type.desc }}</div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">适用场景</div>
                  <div class="r-card-tags">
                    <span class="tag" style="font-size:11px;background:#f8f7f4" v-for="s in type.scenarios" :key="s">{{ s }}</span>
                  </div>
                </div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">最佳实践</div>
                  <ul style="font-size:12px;line-height:1.6;color:var(--text-2);padding-left:16px;margin:0">
                    <li v-for="tip in type.tips" :key="tip">{{ tip }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- CONTENT TYPES -->
          <section id="inf-content" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f3ebff">📝</div>
              <div>
                <h2>按内容分类</h2>
                <p class="text-3">基于信息表达形式与数据特征的 4 种核心类型</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="type in contentTypes" :key="type.id">
                <div class="r-card-title">{{ type.icon }} {{ type.name }} <span class="text-3" style="font-size:11px">{{ type.en }}</span></div>
                <div class="r-card-body">{{ type.desc }}</div>
                <div style="margin-top:12px" v-if="type.charts">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">常见图表</div>
                  <div class="r-card-tags">
                    <span class="tag tag-blue" style="font-size:11px" v-for="c in type.charts" :key="c">{{ c }}</span>
                  </div>
                </div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">适用场景</div>
                  <div class="r-card-tags">
                    <span class="tag" style="font-size:11px;background:#f8f7f4" v-for="s in type.scenarios" :key="s">{{ s }}</span>
                  </div>
                </div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">最佳实践</div>
                  <ul style="font-size:12px;line-height:1.6;color:var(--text-2);padding-left:16px;margin:0">
                    <li v-for="tip in type.tips" :key="tip">{{ tip }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- SCENARIO TYPES -->
          <section id="inf-scenario" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef9f0">🎯</div>
              <div>
                <h2>按应用场景分类</h2>
                <p class="text-3">针对特定使用情境的 3 种专业类型</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="type in scenarioTypes" :key="type.id">
                <div class="r-card-title">{{ type.icon }} {{ type.name }} <span class="text-3" style="font-size:11px">{{ type.en }}</span></div>
                <div class="r-card-body">{{ type.desc }}</div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">适用场景</div>
                  <div class="r-card-tags">
                    <span class="tag" style="font-size:11px;background:#f8f7f4" v-for="s in type.scenarios" :key="s">{{ s }}</span>
                  </div>
                </div>
                <div style="margin-top:12px">
                  <div class="text-3" style="font-size:11px;font-weight:600;margin-bottom:6px">最佳实践</div>
                  <ul style="font-size:12px;line-height:1.6;color:var(--text-2);padding-left:16px;margin:0">
                    <li v-for="tip in type.tips" :key="tip">{{ tip }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- DECISION TREE -->
          <section id="inf-decision" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#e8f4ff">🌲</div>
              <div>
                <h2>信息图选择决策树</h2>
                <p class="text-3">根据数据特征快速选择合适的信息图类型</p>
              </div>
            </div>

            <div class="wide-card">
              <h3>数据类型是什么？</h3>
              <div class="decision-tree">
                <div class="dt-row" v-for="(item, index) in decisionTree" :key="index">
                  <div class="dt-condition">{{ item.condition }}</div>
                  <div class="dt-arrow">→</div>
                  <div class="dt-result">{{ item.result }}</div>
                </div>
              </div>
            </div>
          </section>

          <!-- DESIGN PRINCIPLES -->
          <section id="inf-principles" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef3e8">🎨</div>
              <div>
                <h2>通用设计原则</h2>
                <p class="text-3">跨类型的信息图设计最佳实践</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="principle in designPrinciples" :key="principle.title">
                <div class="r-card-title">{{ principle.icon }} {{ principle.title }}</div>
                <ul style="font-size:13px;line-height:1.7;color:var(--text-2);padding-left:18px;margin:0">
                  <li v-for="point in principle.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- AI ERA -->
          <section id="inf-ai" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f0f4ff">🤖</div>
              <div>
                <h2>AI 时代的信息图生成</h2>
                <p class="text-3">AI 辅助信息图创作的优势与人工审核要点</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card" v-for="item in aiEraPoints" :key="item.title">
                <div class="r-card-title">{{ item.icon }} {{ item.title }}</div>
                <ul style="font-size:13px;line-height:1.7;color:var(--text-2);padding-left:18px;margin:0">
                  <li v-for="point in item.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>

            <div class="info-box info-blue" style="margin-top:20px">
              <span class="ib-icon">📌</span>
              <span><strong>本研究文档</strong>由 AI 助手整理生成，供 AI Design Lab 项目参考使用。信息图 Skill 开发可直接引用本文的分类体系与设计原则。</span>
            </div>

            <div class="wide-card" style="margin-top:20px">
              <h3>参考资源</h3>
              <div class="ref-list">
                <a v-for="ref in references" :key="ref.name" :href="ref.url" target="_blank" rel="noopener" class="ref-item">
                  <span class="ref-name">{{ ref.name }}</span>
                  <span class="ref-arrow">→</span>
                </a>
              </div>
            </div>
          </section>

        </article>

        <!-- article: bb-browser -->
        <article v-if="activeArticle === 'bb-browser'" class="article">

          <!-- Article header -->
          <header class="article-header">
            <div class="article-breadcrumb">
              <RouterLink to="/" class="text-3">首页</RouterLink>
              <span class="text-3"> / </span>
              <RouterLink to="/hub" class="text-3">研究汇总</RouterLink>
              <span class="text-3"> / </span>
              <span class="text-2">bb-browser</span>
            </div>
            <div class="article-badges">
              <span class="tag tag-green">Buildbarn</span>
              <span class="tag tag-blue">Remote Execution</span>
            </div>
            <h1 class="article-title">bb-browser：远程构建调试利器</h1>
            <p class="article-desc">可视化探索 Remote Execution API 的缓存与执行结果，为大规模分布式构建系统提供深度调试能力</p>
            <div class="article-meta">
              <span class="meta-item">📦 Source: github.com/buildbarn/bb-browser</span>
              <span class="meta-item">🔧 Tech: Go + gRPC + Docker</span>
              <span class="meta-item">🌐 Docs: buildbarn documentation</span>
            </div>
          </header>

          <!-- OVERVIEW -->
          <section id="bb-overview" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#eef6f1">🗺️</div>
              <div>
                <h2>概述</h2>
                <p class="text-3">bb-browser 是 Buildbarn 项目的 Web 可视化组件，用于调试远程构建系统</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">🔍 核心功能</div>
                <div class="r-card-body">可视化展示 Content Addressable Storage (CAS) 和 Action Cache (AC) 中的对象</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🐛 调试利器</div>
                <div class="r-card-body">查看失败构建的详细日志和结果，即使这些结果未被缓存</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🔗 自动链接</div>
                <div class="r-card-body">Worker 自动生成指向浏览器的调试链接，无需手动查找</div>
              </div>
            </div>

            <div class="info-box info-blue" style="margin-top:16px">
              <span class="ib-icon">💡</span>
              <div>
                <strong>使用场景：</strong>bb-browser 主要用于深入了解远程执行的工作原理，特别是在构建失败时进行调试。它兼容 Bazel、Buck2、BuildStream、Pants 等主流构建工具。
              </div>
            </div>
          </section>

          <!-- ARCHITECTURE -->
          <section id="bb-arch" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#ebf4ff">🏗️</div>
              <div>
                <h2>Buildbarn 生态系统架构</h2>
                <p class="text-3">bb-browser 是 Buildbarn 项目的一部分，提供 Remote Execution Protocol 的完整实现</p>
              </div>
            </div>

            <div class="wide-card">
              <div style="text-align:center;padding:20px;background:#fafbfc;border-radius:8px;border:1px solid var(--border)">
                <div style="margin-bottom:16px;padding:16px;background:white;border:2px solid #6366f1;border-radius:8px;display:inline-block">
                  <strong style="color:#6366f1">Build Clients</strong><br/>
                  <span style="font-size:12px;color:var(--text-3)">Bazel · Buck2 · BuildStream · Pants</span>
                </div>
                <div style="font-size:24px;margin:8px 0">↓</div>
                <div style="margin-bottom:16px;padding:16px;background:white;border:2px solid #10b981;border-radius:8px;display:inline-block">
                  <strong style="color:#10b981">bb-remote-execution</strong><br/>
                  <span style="font-size:12px;color:var(--text-3)">远程构建任务执行引擎</span>
                </div>
                <div style="font-size:24px;margin:8px 0">↓</div>
                <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap">
                  <div style="padding:16px;background:white;border:2px solid #f59e0b;border-radius:8px">
                    <strong style="color:#f59e0b">bb-storage</strong><br/>
                    <span style="font-size:12px;color:var(--text-3)">存储守护进程</span>
                  </div>
                  <div style="padding:16px;background:white;border:2px solid #8b5cf6;border-radius:8px">
                    <strong style="color:#8b5cf6">bb-browser</strong><br/>
                    <span style="font-size:12px;color:var(--text-3)">Web 可视化界面</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="r-card-grid" style="margin-top:20px">
              <div class="r-card">
                <div class="r-card-title">💾 bb-storage</div>
                <div class="r-card-body">存储守护进程，支持分片存储。可配置 S3、Redis、本地文件等多种后端。</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">⚙️ bb-remote-execution</div>
                <div class="r-card-body">远程执行引擎，基于 Docker 容器进行分布式构建任务调度。</div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🌐 bb-browser</div>
                <div class="r-card-body">Web 前端服务，展示 CAS/AC 内容和构建日志，提供调试界面。</div>
              </div>
            </div>
          </section>

          <!-- FEATURES -->
          <section id="bb-features" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f0f4ff">⚡</div>
              <div>
                <h2>核心功能</h2>
                <p class="text-3">bb-browser 的工作原理与独特设计</p>
              </div>
            </div>

            <div class="wide-card">
              <h3>Content Addressable Storage (CAS)</h3>
              <p style="font-size:13px;color:var(--text-2);line-height:1.6;margin-bottom:12px">存储构建过程中的所有输入和输出文件，基于内容的哈希索引（Digest），确保构建结果可追溯。</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <span class="pill pill-green">哈希索引</span>
                <span class="pill pill-green">去重存储</span>
                <span class="pill pill-green">内容寻址</span>
              </div>
            </div>

            <div class="wide-card">
              <h3>Action Cache (AC)</h3>
              <p style="font-size:13px;color:var(--text-2);line-height:1.6;margin-bottom:12px">缓存构建动作的结果，避免重复执行相同的构建任务，大幅提升构建速度。</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <span class="pill pill-blue">结果缓存</span>
                <span class="pill pill-blue">增量构建</span>
                <span class="pill pill-blue">分布式共享</span>
              </div>
            </div>

            <div class="wide-card">
              <h3>失败构建调试</h3>
              <p style="font-size:13px;color:var(--text-2);line-height:1.6;margin-bottom:12px">即使构建失败，Worker 也会将结果写入 CAS，bb-browser 可以展示这些失败结果的详细日志。</p>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <span class="pill pill-purple">失败追踪</span>
                <span class="pill pill-purple">日志可视化</span>
                <span class="pill pill-purple">根因分析</span>
              </div>
            </div>

            <div class="info-box info-green">
              <span class="ib-icon">✨</span>
              <div>
                <strong>自动链接生成：</strong>Buildbarn 的 Worker 会在 RPC 响应和日志中自动生成指向 bb-browser 的链接，用户可以直接点击链接查看构建详情，无需记住 Digest。
              </div>
            </div>
          </section>

          <!-- USE CASES -->
          <section id="bb-usecases" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fff4ed">🎯</div>
              <div>
                <h2>应用场景</h2>
                <p class="text-3">bb-browser 的典型使用场景</p>
              </div>
            </div>

            <div class="r-card-grid">
              <div class="r-card">
                <div class="r-card-title">🚀 远程缓存</div>
                <div class="r-card-body">
                  <ul>
                    <li>多人协作时共享构建缓存</li>
                    <li>加速 CI/CD 构建流程</li>
                    <li>避免重复编译相同代码</li>
                    <li>节省计算资源</li>
                  </ul>
                </div>
              </div>
              <div class="r-card">
                <div class="r-card-title">⚡ 远程执行</div>
                <div class="r-card-body">
                  <ul>
                    <li>将构建任务分布到多台机器</li>
                    <li>统一构建环境（使用容器镜像）</li>
                    <li>提升大型项目的构建速度</li>
                    <li>弹性扩展构建能力</li>
                  </ul>
                </div>
              </div>
              <div class="r-card">
                <div class="r-card-title">🔬 调试分析</div>
                <div class="r-card-body">
                  <ul>
                    <li>查看构建失败的详细日志</li>
                    <li>分析依赖关系和文件变化</li>
                    <li>审计构建过程的输入输出</li>
                    <li>追踪构建性能瓶颈</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- INTEGRATION -->
          <section id="bb-integration" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#f0fdf4">🔗</div>
              <div>
                <h2>工具集成</h2>
                <p class="text-3">与主流构建工具的集成方式</p>
              </div>
            </div>

            <div class="wide-card">
              <h3>🔷 Bazel</h3>
              <pre class="r-code">bazel build \
  --config=remote-ubuntu-22-04 \
  @abseil-hello//:hello_main

# 输出示例：
# INFO: 33 processes: 4 internal, 29 remote.
# INFO: Build completed successfully, 33 total actions</pre>
              <p style="font-size:12px;color:var(--text-3);margin-top:8px">使用 <code>--config</code> 参数配置远程执行环境和工具链</p>
            </div>

            <div class="wide-card">
              <h3>🦌 Buck2</h3>
              <p style="font-size:13px;color:var(--text-2);line-height:1.6">在 <code>platform/defs.bzl</code> 中定义平台属性，在 <code>.buckconfig</code> 中设置 RPC 端点。Buck2 仓库提供了完整的 Buildbarn 集成示例。</p>
            </div>

            <div class="wide-card">
              <h3>👖 Pants</h3>
              <pre class="r-code">[GLOBAL]
remote_cache_read = true
remote_cache_write = true
remote_store_address = "grpc://localhost:8980"
remote_execution_address = "grpc://localhost:8980"
remote_execution = true
remote_instance_name = "fuse"</pre>
              <p style="font-size:12px;color:var(--text-3);margin-top:8px">在 <code>pants.toml</code> 配置文件中设置远程执行参数</p>
            </div>
          </section>

          <!-- DEPLOYMENT -->
          <section id="bb-deployment" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef3f2">🚀</div>
              <div>
                <h2>快速部署</h2>
                <p class="text-3">使用 Docker Compose 一键启动 Buildbarn</p>
              </div>
            </div>

            <div class="wide-card">
              <h3>步骤 1：克隆仓库</h3>
              <pre class="r-code">git clone https://github.com/buildbarn/bb-deployments.git
cd bb-deployments/docker-compose</pre>
            </div>

            <div class="wide-card">
              <h3>步骤 2：启动服务</h3>
              <pre class="r-code">./run.sh</pre>
              <p style="font-size:12px;color:var(--text-3);margin-top:8px">⚠️ 首次启动可能看到连接错误（Worker 启动早于 Scheduler），等待几秒后会自动恢复</p>
            </div>

            <div class="wide-card">
              <h3>步骤 3：验证构建</h3>
              <pre class="r-code">bazel build --config=remote-ubuntu-22-04 @abseil-hello//:hello_main

# 清除缓存后重新构建，验证远程缓存效果
bazel clean
bazel build --config=remote-ubuntu-22-04 @abseil-hello//:hello_main</pre>
            </div>

            <div class="info-box info-blue" style="margin-top:16px">
              <span class="ib-icon">📦</span>
              <div>
                <strong>容器镜像：</strong><code>ghcr.io/buildbarn/bb-browser:20250820T143915Z-823deb2</code><br/>
                <span style="font-size:12px">最新版本（2025-08-20），支持多种存储后端（S3/Redis/本地）</span>
              </div>
            </div>
          </section>

          <!-- EVALUATION -->
          <section id="bb-eval" class="art-section">
            <div class="art-section-header">
              <div class="art-icon" style="background:#fef7ff">⚖️</div>
              <div>
                <h2>优势与局限</h2>
                <p class="text-3">综合评估 bb-browser 的技术优势与使用局限</p>
              </div>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
              <div class="wide-card" style="background:#ecfdf5;border-color:#a7f3d0">
                <h3>✅ 技术优势</h3>
                <ul style="font-size:13px;line-height:1.7;color:var(--text-2);margin:8px 0 0 0;padding-left:18px">
                  <li><strong>协议标准化</strong> - 实现 Google Remote Execution API</li>
                  <li><strong>灵活存储</strong> - 支持本地、S3、Redis 等多种后端</li>
                  <li><strong>容器化部署</strong> - 完整的 Docker/K8s 部署方案</li>
                  <li><strong>多工具支持</strong> - 兼容 Bazel、Buck2、Pants</li>
                  <li><strong>调试友好</strong> - 自动生成链接，保存失败结果</li>
                  <li><strong>开源社区</strong> - 活跃的 Slack 社区支持</li>
                </ul>
              </div>

              <div class="wide-card" style="background:#fffbeb;border-color:#fde68a">
                <h3>⚠️ 使用局限</h3>
                <ul style="font-size:13px;line-height:1.7;color:var(--text-2);margin:8px 0 0 0;padding-left:18px">
                  <li><strong>使用前提</strong> - 需要支持 Remote Execution API 的客户端</li>
                  <li><strong>访问限制</strong> - 必须知道 Digest 才能查看，无法随意浏览</li>
                  <li><strong>部署复杂</strong> - 完整部署需要多个组件协同</li>
                  <li><strong>配置难度</strong> - 配置文件使用 Jsonnet 格式</li>
                  <li><strong>学习曲线</strong> - 需要理解 CAS/AC 等概念</li>
                  <li><strong>规模适用性</strong> - 小型项目可能过于重量级</li>
                </ul>
              </div>
            </div>

            <div class="info-box info-warning">
              <span class="ib-icon">💡</span>
              <div>
                <strong>适用建议：</strong>bb-browser 最适合需要远程执行和共享缓存的大型团队和项目。对于单人开发的小型项目，或本地构建已经足够快的场景，可能过于复杂。
              </div>
            </div>

            <div class="wide-card" style="margin-top:20px">
              <h3>参考资源</h3>
              <div class="ref-list">
                <a href="https://github.com/buildbarn" target="_blank" rel="noopener" class="ref-item">
                  <span class="ref-name">📦 Buildbarn GitHub 组织</span>
                  <span class="ref-arrow">→</span>
                </a>
                <a href="https://github.com/buildbarn/bb-browser" target="_blank" rel="noopener" class="ref-item">
                  <span class="ref-name">🌐 bb-browser 仓库</span>
                  <span class="ref-arrow">→</span>
                </a>
                <a href="https://github.com/buildbarn/bb-deployments" target="_blank" rel="noopener" class="ref-item">
                  <span class="ref-name">🚀 部署示例仓库</span>
                  <span class="ref-arrow">→</span>
                </a>
                <a href="https://join.slack.com/t/buildteamworld/shared_invite/zt-3epswjmkj-bsCAPUtTmXEtlPcBl5C_lQ" target="_blank" rel="noopener" class="ref-item">
                  <span class="ref-name">💬 Buildbarn Slack 社区</span>
                  <span class="ref-arrow">→</span>
                </a>
              </div>
            </div>

            <div class="info-box info-blue" style="margin-top:20px">
              <span class="ib-icon">📌</span>
              <span><strong>本研究文档</strong>由 AI 助手整理生成，供 AI Design Lab 项目参考使用。研究日期：2026-03-24，研究人员：hiro @ R&D design</span>
            </div>
          </section>

        </article>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeArticle = ref('openclaw-rendering')

const articles = [
  {
    id: 'openclaw-rendering',
    icon: '🔍',
    title: 'OpenClaw 对话特殊渲染机制全览',
    date: '2026-03',
    readTime: '~10 min',
  },
  {
    id: 'agency-agents',
    icon: '🎭',
    title: 'The Agency：147 个 AI 专家 Agent 体系全览',
    date: '2026-03',
    readTime: '~8 min',
  },
  {
    id: 'infographic-types',
    icon: '📊',
    title: '信息图分类研究：11 种主流类型全解析',
    date: '2026-03',
    readTime: '~12 min',
  },
  {
    id: 'bb-browser',
    icon: '🔧',
    title: 'bb-browser：远程构建调试利器',
    date: '2026-03',
    readTime: '~8 min',
  },
]

const tocMap = {
  'agency-agents': [
    { id: 'aa-overview', label: '项目概览', level: 1 },
    { id: 'aa-divisions', label: '12 个业务部门', level: 1 },
    { id: 'aa-philosophy', label: 'Agent 设计哲学', level: 1 },
    { id: 'aa-tools', label: '多工具集成体系', level: 1 },
    { id: 'aa-insights', label: '核心洞察与借鉴价值', level: 1 },
  ],
  'openclaw-rendering': [
    { id: 'overview', label: '特殊渲染机制总览', level: 1 },
    { id: 'streaming', label: '流式渲染（Streaming）', level: 1 },
    { id: 'canvas', label: 'Canvas / A2UI 可视化面板', level: 1 },
    { id: 'markdown', label: 'Markdown 跨渠道格式化', level: 1 },
    { id: 'media', label: '媒体内容渲染', level: 1 },
    { id: 'reactions', label: 'Emoji 反应（Reactions）', level: 1 },
    { id: 'commands', label: 'Slash 命令特殊渲染', level: 1 },
    { id: 'webchat', label: 'WebChat 专属特性', level: 1 },
    { id: 'arch', label: 'Agent Loop 渲染架构', level: 1 },
  ],
  'infographic-types': [
    { id: 'inf-overview', label: '概述', level: 1 },
    { id: 'inf-structure', label: '按结构分类', level: 1 },
    { id: 'inf-content', label: '按内容分类', level: 1 },
    { id: 'inf-scenario', label: '按应用场景分类', level: 1 },
    { id: 'inf-decision', label: '选择决策树', level: 1 },
    { id: 'inf-principles', label: '通用设计原则', level: 1 },
    { id: 'inf-ai', label: 'AI 时代的信息图生成', level: 1 },
  ],
  'bb-browser': [
    { id: 'bb-overview', label: '概述', level: 1 },
    { id: 'bb-arch', label: 'Buildbarn 架构', level: 1 },
    { id: 'bb-features', label: '核心功能', level: 1 },
    { id: 'bb-usecases', label: '应用场景', level: 1 },
    { id: 'bb-integration', label: '工具集成', level: 1 },
    { id: 'bb-deployment', label: '快速部署', level: 1 },
    { id: 'bb-eval', label: '优势与局限', level: 1 },
  ],
}

const activeToc = computed(() => tocMap[activeArticle.value] || [])

const overviewItems = [
  { icon: '🌊', title: '流式渲染（Block Streaming）', desc: '助手输出在生成过程中以"块"为单位逐步推送，而非等全部完成后一次发送。支持 text_end / message_end 两种边界策略。', tags: ['Telegram', 'Discord', 'Slack'] },
  { icon: '🎨', title: 'Canvas / A2UI 可视化面板', desc: 'Agent 驱动的可视化工作区，基于 WKWebView，支持完整 HTML/CSS/JS，以及声明式 A2UI 组件协议（v0.8）。', tags: [] },
  { icon: '📝', title: 'Markdown 跨渠道格式化', desc: '统一的中间表示（IR），将 Markdown 转换为各渠道原生格式：Slack mrkdwn、Telegram HTML、Signal text-style ranges。', tags: [] },
  { icon: '🖼️', title: '媒体内容渲染', desc: '图片、音频、视频的接收与发送，包括语音转文字、TTS 语音合成、相机捕获、多模态理解等。', tags: [] },
  { icon: '😀', title: 'Emoji 反应（Reactions）', desc: 'Agent 可通过 message 工具给消息添加/删除 emoji 反应，不同渠道（Discord、Slack、Telegram 等）行为不同。', tags: [] },
  { icon: '⌨️', title: 'Slash 命令响应', desc: '/status、/think、/verbose 等命令会触发特殊的系统级渲染，这些不走普通 agent 回复路径。', tags: [] },
  { icon: '💬', title: 'WebChat 专属特性', desc: 'WebChat 原生 UI 支持增量 delta 消息、abort 后保留部分输出、chat.inject 直接注入内容、工具面板 catalog 等特殊显示。', tags: [] },
]

const streamRows = [
  { label: 'Model Output', desc: 'text_delta / events（来自 pi-agent-core）' },
  { label: 'EmbeddedBlockChunker', desc: '按 minChars/maxChars + breakPreference 分块；代码围栏内不分割' },
  { label: 'blockStreamingBreak', desc: '<code>text_end</code> → 边写边推送 &nbsp;|&nbsp; <code>message_end</code> → 消息完成后一次性推送' },
  { label: 'Coalesce（合并）', desc: '等待 idleMs 空隙后再发，减少"单行刷屏"；Signal/Slack/Discord 默认 minChars 1500' },
  { label: 'Human Delay', desc: '可配置 800-2500ms 随机停顿，模拟人类打字节奏（仅 block replies 生效）' },
]

const streamModes = [
  { name: 'on + text_end', desc: '边生成边发送\n最快速' },
  { name: 'on + message_end', desc: '等完成后\n一次性批量发' },
  { name: 'off', desc: '仅最终回复\n（默认）' },
]

const a2uiMsgTypes = [
  { name: 'beginRendering', desc: '开始渲染指定 surface，指定 root 组件' },
  { name: 'surfaceUpdate', desc: '更新 surface 中的组件树' },
  { name: 'dataModelUpdate', desc: '更新数据模型（绑定数据）' },
  { name: 'deleteSurface', desc: '删除/清空指定 surface' },
]

const a2uiExample = `{
  "surfaceUpdate": {
    "surfaceId": "main",
    "components": [
      {
        "id": "root",
        "component": {
          "Column": {
            "children": {
              "explicitList": ["title", "content"]
            }
          }
        }
      },
      {
        "id": "title",
        "component": {
          "Text": {
            "text": {
              "literalString": "Canvas Demo"
            },
            "usageHint": "h1"
          }
        }
      }
    ]
  }
}
{
  "beginRendering": {
    "surfaceId": "main",
    "root": "root"
  }
}`

const cliExample = `# 推送 A2UI 内容
openclaw nodes canvas a2ui push \\
  --node <id> \\
  --text "Hello from A2UI"

# present HTML
openclaw nodes canvas present \\
  --node <id> \\
  --url "file:///path/to/index.html"

# 执行 JS
openclaw nodes canvas eval \\
  --node <id> \\
  --script "document.title='Hi'"

# 截图
openclaw nodes canvas snapshot \\
  --node <id>`

const reactExample = `{
  "action": "react",
  "messageId": "msg-123",
  "emoji": "thumbsup"
}

// 删除反应：
{
  "action": "react",
  "messageId": "msg-123",
  "emoji": ""         // 清空全部
}

// 删除特定 emoji：
{
  "action": "react",
  "messageId": "msg-123",
  "emoji": "thumbsup",
  "remove": true
}`

const reactionsTable = [
  { channel: 'Discord', add: '✓', addClass: 'check', clear: '✓', clearClass: 'check', remove: '✓', removeClass: 'check' },
  { channel: 'Slack', add: '✓', addClass: 'check', clear: '✓', clearClass: 'check', remove: '✓', removeClass: 'check' },
  { channel: 'Telegram', add: '✓', addClass: 'check', clear: '✓', clearClass: 'check', remove: '需 non-empty emoji', removeClass: 'partial' },
  { channel: 'WhatsApp', add: '✓', addClass: 'check', clear: '✓', clearClass: 'check', remove: '内部映射', removeClass: 'partial' },
  { channel: 'Google Chat', add: '✓', addClass: 'check', clear: '✓', clearClass: 'check', remove: '✓', removeClass: 'check' },
  { channel: 'Signal', add: '✓', addClass: 'check', clear: '—', clearClass: 'cross', remove: '—', removeClass: 'cross' },
  { channel: 'Zalo Personal', add: '✓', addClass: 'check', clear: '需 non-empty', clearClass: 'cross', remove: '✓', removeClass: 'check' },
]

const slashCommands = [
  { name: '/status', desc: '显示当前状态，包括 provider 用量/配额、当前 model 信息' },
  { name: '/reasoning on|stream', desc: '开启后，推理内容以独立消息发送（前缀 "Reasoning:"）；stream = Telegram draft 预览' },
  { name: '/verbose on|full', desc: '在回复中内联显示 tool 摘要和详细工具调用输出' },
  { name: '/usage off|tokens|full|cost', desc: '在每次回复末尾追加 token 用量 / 费用信息' },
  { name: '/think <level>', desc: '设置推理深度（off/minimal/low/medium/high/xhigh），影响 model 思考时间和回复质量' },
  { name: '/btw <question>', desc: '侧边问题：以当前 session 为背景，运行一次无工具 one-shot call，结果作为 live side result，不写入 transcript' },
  { name: '/export-session', desc: '将当前 session 导出为完整 HTML 文件（含 system prompt）' },
  { name: '/context [detail]', desc: '显示 context 构成，detail 展示每个文件/工具/技能/system prompt 的 token 大小' },
  { name: '/tts <options>', desc: '控制 TTS：触发时助手回复被合成为语音并发送音频消息' },
  { name: '/compact', desc: '触发 session 压缩（compaction），会在对话中插入 compaction 事件流' },
  { name: '/approve allow-once|allow-always|deny', desc: '解决 exec 审批提示（工具执行前等待用户确认的特殊 UI 状态）' },
]

const webchatCards = [
  { title: '🔄 增量 Delta 消息', desc: '助手输出以 chat delta 增量消息流式推送到 UI；chat final 在 lifecycle end/error 时发出。这是 WebChat 独有的，渠道消息是 block replies，不是 delta。' },
  { title: '⏸️ Abort 保留部分输出', desc: '运行被 abort 时，已缓冲的 assistant 文本仍然持久化到 transcript，并打上 abort metadata 标记，用户依然能看到已生成的部分内容。' },
  { title: '💉 chat.inject 直接注入', desc: 'chat.inject 可直接向 transcript 追加一条 assistant note，并广播到 UI，不触发 agent run。' },
  { title: '🔧 工具面板 Catalog', desc: 'Control UI /agents 工具面板通过 tools.catalog 获取运行时工具目录，标注每个工具为 core 或 plugin:<id>。无法连接时回退内置静态列表。' },
]

const wsProtocol = [
  { name: 'chat.history', desc: '获取 session 历史，过大条目被替换为 [chat.history omitted: message too large]' },
  { name: 'chat.send', desc: '发送用户消息触发 agent run' },
  { name: 'chat.inject', desc: '直接注入 assistant note，广播到 UI，不触发 agent' },
  { name: 'tools.catalog', desc: '获取运行时工具目录（工具面板 UI 专用）' },
]

const pluginHooks = [
  { name: 'before_tool_call', desc: '工具调用前拦截参数' },
  { name: 'after_tool_call', desc: '工具调用后拦截结果' },
  { name: 'tool_result_persist', desc: '工具结果写入 transcript 前同步转换' },
  { name: 'message_sending', desc: '消息即将发出前拦截' },
  { name: 'before_prompt_build', desc: '注入 prependContext 等修改 prompt' },
  { name: 'agent_end', desc: '检查最终消息列表' },
]

const channelSummary = [
  { name: 'Telegram', block: '<span class="pill pill-gray">可选</span>', preview: '<span class="pill pill-blue">partial/block</span>', md: '<span class="pill pill-green">HTML</span>', react: '<span class="check">✓</span>', note: 'sendMessage + editMessageText；/reasoning stream 写 draft' },
  { name: 'Discord', block: '<span class="pill pill-gray">可选</span>', preview: '<span class="pill pill-blue">partial/block</span>', md: '<span class="pill pill-gray">plain</span>', react: '<span class="check">✓</span>', note: 'maxLinesPerMessage 默认 17；/vc 语音渠道命令' },
  { name: 'Slack', block: '<span class="pill pill-gray">可选</span>', preview: '<span class="pill pill-green">progress ✓</span>', md: '<span class="pill pill-green">mrkdwn</span>', react: '<span class="check">✓</span>', note: 'nativeStreaming；Block Kit buttons for commands' },
  { name: 'Signal', block: '<span class="pill pill-gray">可选</span>', preview: '<span class="cross">✗</span>', md: '<span class="pill pill-purple">ranges</span>', react: '<span class="check">✓</span>', note: 'Spoiler ranges；reactionNotifications 可配' },
  { name: 'WhatsApp', block: '<span class="pill pill-gray">可选</span>', preview: '<span class="cross">✗</span>', md: '<span class="pill pill-gray">plain</span>', react: '<span class="check">✓</span>', note: 'textChunkLimit' },
  { name: 'WebChat', block: '<span class="cross">✗</span>', preview: '<span class="cross">N/A</span>', md: '<span class="pill pill-gray">—</span>', react: '<span class="cross">✗</span>', note: 'chat.delta / chat.final；tools.catalog 面板' },
]

// ===== agency-agents 文章数据 =====
const aaOverviewCards = [
  { icon: '🎯', title: '专业化', desc: '每个 Agent 都是深度垂直的领域专家，而非泛用 Prompt 模板。Frontend Developer 不等于「帮我写代码」。' },
  { icon: '🧠', title: '个性驱动', desc: '独特的声音、沟通风格和处理方式。Evidence Collector 会主动「找 3-5 个问题并要求视觉证明」。' },
  { icon: '📋', title: '聚焦交付物', desc: '真实的代码、流程和可量化成果，而非模糊指导。每个 Agent 文件都包含可直接使用的代码示例。' },
  { icon: '✅', title: '生产就绪', desc: '经过实战检验的工作流和成功指标。含有明确的 Critical Rules，防止 Agent 行为漂移。' },
]

const aaDivisions = [
  { icon: '💻', name: 'Engineering', count: '23 agents', desc: '前端/后端/移动/AI/安全/DevOps 全栈工程团队', agents: ['Frontend Dev', 'Backend Architect', 'AI Engineer', 'Security Eng', 'SRE'] },
  { icon: '🎨', name: 'Design', count: '8 agents', desc: 'UI/UX/品牌/视觉叙事/趣味性注入的设计团队', agents: ['UI Designer', 'UX Researcher', 'Brand Guardian', 'Whimsy Injector'] },
  { icon: '📢', name: 'Marketing', count: '28 agents', desc: '涵盖全球 + 中国市场的完整营销矩阵（含微信/小红书/抖音/知乎/B站等）', agents: ['Growth Hacker', '小红书 Specialist', '抖音 Strategist', 'Reddit Builder'] },
  { icon: '💰', name: 'Paid Media', count: '7 agents', desc: '从 PPC 策略到程序化广告的付费媒体全链路', agents: ['PPC Strategist', 'Ad Creative', 'Paid Media Auditor'] },
  { icon: '💼', name: 'Sales', count: '8 agents', desc: '从线索挖掘到客户成功的全销售周期团队', agents: ['Outbound Strategist', 'Deal Strategist', 'Pipeline Analyst'] },
  { icon: '📊', name: 'Product', count: '5 agents', desc: '产品规划、用户研究、行为科学的产品团队', agents: ['Product Manager', 'Sprint Prioritizer', 'Behavioral Nudge'] },
  { icon: '🎬', name: 'Project Mgmt', count: '6 agents', desc: '项目编排、协调、运营、Jira 工作流管理', agents: ['Studio Producer', 'Project Shepherd', 'Senior PM'] },
  { icon: '🧪', name: 'Testing', count: '8 agents', desc: 'QA、性能测试、无障碍审计、工具评估', agents: ['Evidence Collector', 'Reality Checker', 'Accessibility Auditor'] },
  { icon: '🥽', name: 'Spatial Computing', count: '6 agents', desc: 'XR/AR/VR/Vision Pro/WebXR 空间计算团队', agents: ['XR Architect', 'visionOS Engineer', 'WebXR Dev'] },
  { icon: '🎮', name: 'Game Dev', count: '18 agents', desc: 'Unity/Unreal/Godot/Roblox/Blender 全引擎游戏开发', agents: ['Unity Architect', 'Unreal Eng', 'Godot Scripter'] },
  { icon: '🎯', name: 'Specialized', count: '30+ agents', desc: 'MCP Builder、区块链安全、自动化治理等特殊专家', agents: ['MCP Builder', 'Agents Orchestrator', 'Blockchain Auditor'] },
  { icon: '📚', name: 'Academic', count: '5 agents', desc: '世界观构建与叙事设计的学术专家团队', agents: ['Anthropologist', 'Historian', 'Narratologist'] },
]

const aaFileFields = [
  { name: 'Frontmatter', desc: 'name、description、color — 用于工具自动化集成时的元数据识别' },
  { name: 'Identity & Memory', desc: '角色定位、记忆机制、自我认知框架' },
  { name: 'Core Mission', desc: '一句话使命宣言 + 价值观声明' },
  { name: 'Critical Rules', desc: '领域专属的 Must / Must Not 约束列表' },
  { name: 'Technical Deliverables', desc: '带真实代码示例的可交付物清单' },
  { name: 'Workflow Process', desc: '分阶段 Step-by-Step 工作流' },
  { name: 'Success Metrics', desc: '量化的质量标准和完成判定条件' },
]

const aaQuotes = [
  { text: '我不只是测试你的代码——我默认要找出 3-5 个问题，而且每个问题都需要视觉证明。', from: 'Evidence Collector（Testing Division）' },
  { text: '你不是在 Reddit 上营销——你是在成为一个碰巧代表品牌的有价值社区成员。', from: 'Reddit Community Builder（Marketing Division）' },
  { text: '每一个趣味性元素都必须服务于功能或情感目的。设计的愉悦感要增强体验，而非干扰。', from: 'Whimsy Injector（Design Division）' },
]

const aaTools = [
  { icon: '🤖', name: 'Claude Code', format: '.md 原生', dest: '~/.claude/agents/' },
  { icon: '👁️', name: 'GitHub Copilot', format: '.md 原生', dest: '~/.github/agents/' },
  { icon: '💎', name: 'Cursor', format: '.mdc 转换', dest: '.cursor/rules/' },
  { icon: '🌊', name: 'Windsurf', format: '.windsurfrules', dest: '项目根目录' },
  { icon: '⚡', name: 'Aider', format: 'CONVENTIONS.md', dest: './CONVENTIONS.md' },
  { icon: '🔮', name: 'Gemini CLI', format: 'extension + SKILL.md', dest: '~/.gemini/extensions/' },
  { icon: '🦞', name: 'OpenClaw', format: 'SOUL.md + AGENTS.md + IDENTITY.md', dest: '~/.openclaw/agency-agents/' },
  { icon: '🐉', name: 'Qwen Code', format: '.md SubAgents', dest: '~/.qwen/agents/' },
]

const aaInsights = [
  { title: '🎭 角色 > 指令', desc: '让 AI 扮演一个「人格」比给它一堆指令更有效。Whimsy Injector 知道「每个趣味元素必须服务于目的」——这是价值观，不是规则列表。' },
  { title: '📏 Critical Rules 是护栏', desc: '每个 Agent 都有领域专属的 Critical Rules。Evidence Collector「必须要视觉证明」——这防止它在压力下妥协。护栏比通用约束更有效。' },
  { title: '🔌 格式标准化的价值', desc: '统一的 Frontmatter + 标准目录结构使得 convert.sh 可以一键转换到 10 种工具。设计时考虑「可迁移性」比事后适配省力。' },
  { title: '🌍 本地化即竞争力', desc: '深度覆盖中国市场（15+ 中国平台专家）是该仓库的核心差异化之一。已有社区维护的中文 Fork，用中文写本地 Agent 是正确方向。' },
  { title: '🤝 Multi-Agent 协同模式', desc: '8 Agent 并行工作于同一目标，生成跨职能产品蓝图。「专家团队」比「超级助手」在复杂任务上更可靠。' },
  { title: '💬 成功指标消除模糊性', desc: '明确定义「什么算成功」——让 Agent 和用户都知道何时任务真正完成。这是避免无休止迭代的关键机制。' },
]

// ===== infographic-types 文章数据 =====
const infographicTypes = [
  {
    id: 'hierarchical',
    icon: '🏛️',
    name: '层级信息图',
    en: 'Hierarchical Infographic',
    desc: '展示数据的层级关系、排名或重要性层级，通常从上到下或从中心向外排列。',
    forms: ['金字塔图', '树状图', '组织结构图'],
    scenarios: ['公司组织架构展示', '需求层次（如马斯洛需求层次）', '产品等级分类', '生物分类学'],
    tips: ['层级不超过5层，保持可读性', '使用对比色区分不同层级', '每层大小与重要性/数量成比例', '关键信息置于顶部或中心'],
  },
  {
    id: 'timeline',
    icon: '📅',
    name: '时间轴信息图',
    en: 'Timeline Infographic',
    desc: '按时间顺序展示事件、发展历史或里程碑的可视化形式。',
    forms: ['水平时间轴', '垂直时间轴', 'S形时间轴'],
    scenarios: ['历史发展脉络', '项目里程碑', '个人/公司成长历程', '事件规划'],
    tips: ['使用图标标注关键节点', '用线条连接时间点', '采用对比色和字体大小区分重要节点', '添加简短描述说明每个节点'],
  },
  {
    id: 'process',
    icon: '⚙️',
    name: '流程信息图',
    en: 'Process Infographic',
    desc: '将复杂流程分解为易于理解的步骤，展示过程或程序。',
    forms: ['线性流程', '循环流程', '分支流程'],
    scenarios: ['操作指南', '产品生产流程', '服务流程', '实验/试验阶段'],
    tips: ['为每个步骤分配不同颜色', '使用箭头、数字等方向性提示', '可采用S形布局节省空间', '步骤控制在5-7个以内'],
  },
  {
    id: 'flowchart',
    icon: '🔀',
    name: '流程图信息图',
    en: 'Flowchart Infographic',
    desc: '展示决策路径、工作流程或多分支过程的图表。',
    forms: ['决策树', '工作流程图', '泳道图'],
    scenarios: ['决策树', '工作流程优化', '问题诊断', '多场景可能性分析'],
    tips: ['通常从左到右、从上到下阅读', '使用标准流程图符号', '用箭头引导阅读路径', '保持分支逻辑清晰'],
  },
]

const contentTypes = [
  {
    id: 'informational',
    icon: '📋',
    name: '信息说明图',
    en: 'Informational Infographic',
    desc: '以视觉方式概述特定主题或概念，文字内容多于数据图表。',
    scenarios: ['概念解释', '主题概述', '新想法介绍', '技术概念普及'],
    tips: ['使用图标和描述性标题', '适当使用数字增强可读性', '限制配色方案在3-5种颜色', '保持段落简短'],
  },
  {
    id: 'data-viz',
    icon: '📊',
    name: '数据可视化信息图',
    en: 'Data Visualization Infographic',
    desc: '使用图表、图形等视觉元素传达统计数据和数字信息。',
    charts: ['柱状图/条形图', '饼图/环形图', '折线图', '散点图', '象形图'],
    scenarios: ['统计报告', '调研结果展示', '趋势分析', '业务数据汇报'],
    tips: ['选择适合数据类型的图表', '图表标签清晰明确', '通过颜色、图标聚焦关键数据', '找出数据背后的故事主题'],
  },
  {
    id: 'comparison',
    icon: '⚖️',
    name: '对比信息图',
    en: 'Comparison Infographic',
    desc: '并排展示两个或多个选项的相似点和差异点。',
    scenarios: ['产品对比', '方案优劣分析', '前后对比', '竞品分析'],
    tips: ['为不同主题分配特定颜色', '使用水平或垂直分割布局', '使用表格、边框分组相似内容', '清晰标注优劣势'],
  },
  {
    id: 'list',
    icon: '📝',
    name: '列表信息图',
    en: 'List Infographic',
    desc: '将信息以列表形式可视化呈现，替代传统文字列表。',
    scenarios: ['技巧/窍门分享', '要点总结', '待办事项', '资源清单'],
    tips: ['保持列表简洁', '使用边框、数字或色块分组', '用图标替代项目符号', '限制列表项数量（5-9项最佳）'],
  },
]

const scenarioTypes = [
  {
    id: 'map',
    icon: '🗺️',
    name: '地图信息图',
    en: 'Map Infographic',
    desc: '在地理背景下展示数据、趋势或统计信息。',
    scenarios: ['人口统计数据', '区域分布分析', '全球/本地趋势', '位置相关的故事'],
    tips: ['遵循地图颜色惯例（蓝色=水域，红色=重要区域）', '包含图例、比例尺、数据来源', '避免标签过度拥挤', '使用深色突出比较区域'],
  },
  {
    id: 'resume',
    icon: '👤',
    name: '简历信息图',
    en: 'Resume Infographic',
    desc: '将传统文字简历转化为视觉化的个人展示。',
    scenarios: ['求职应聘', '个人品牌展示', '自由职业者简介', '创意行业求职'],
    tips: ['配色、字体反映个人特质和行业', '使用时间轴、图表展示经历', '关键信息置于顶部', '保持专业性与创意平衡'],
  },
  {
    id: 'interactive',
    icon: '🎮',
    name: '交互式信息图',
    en: 'Interactive Infographic',
    desc: '结合动画、交互元素的信息图，用户可主动探索内容。',
    scenarios: ['复杂数据探索', '游戏化内容', '多层级信息展示', '用户参与度提升'],
    tips: ['明确交互目标和CTA', '保持交互简洁，不超时', '提供清晰的交互提示', '考虑移动端体验'],
  },
]

const designPrinciples = [
  {
    title: '视觉层次',
    icon: '👁️',
    points: ['重要信息使用更大字体/更醒目颜色', '建立清晰的阅读路径（F型或Z型）', '使用留白分隔不同信息块'],
  },
  {
    title: '配色原则',
    icon: '🎨',
    points: ['限制配色在3-5种', '使用品牌色或行业惯例色', '确保颜色对比度满足可读性'],
  },
  {
    title: '字体选择',
    icon: '🔤',
    points: ['标题与正文字体区分', '限制字体种类（2-3种）', '确保数字清晰可读'],
  },
  {
    title: '数据准确性',
    icon: '✅',
    points: ['标注数据来源', '使用合适的图表类型', '避免误导性可视化'],
  },
]

const decisionTree = [
  { condition: '有时间序列？', result: '→ 时间轴信息图' },
  { condition: '有步骤流程？', result: '→ 流程信息图 / 流程图' },
  { condition: '有层级关系？', result: '→ 层级信息图' },
  { condition: '有地理位置？', result: '→ 地图信息图' },
  { condition: '有对比需求？', result: '→ 对比信息图' },
  { condition: '有大量数据？', result: '→ 数据可视化信息图' },
  { condition: '有概念需要解释？', result: '→ 信息说明图 / 列表信息图' },
]

const aiEraPoints = [
  {
    title: 'AI 生成优势',
    icon: '🤖',
    points: ['快速生成多种风格方案', '自动匹配数据与图表类型', '智能配色与布局建议', '多语言自动适配'],
  },
  {
    title: '人工审核要点',
    icon: '👨‍💻',
    points: ['数据准确性验证', '品牌一致性检查', '文化适应性审查', '可访问性合规'],
  },
]

const references = [
  { name: 'Piktochart - Types of Infographics', url: 'https://piktochart.com/blog/types-of-infographics/' },
  { name: 'Visme - Infographic Design Guide', url: 'https://visme.co/blog/' },
  { name: 'Canva - Infographic Templates', url: 'https://www.canva.com/' },
  { name: 'Information is Beautiful', url: 'https://informationisbeautiful.net/' },
  { name: 'Cool Infographics', url: 'https://coolinfographics.com/' },
]
</script>

<style scoped>
.page {
  padding-top: var(--nav-h);
  min-height: 100vh;
}

/* LAYOUT */
.hub-layout {
  display: flex;
  align-items: flex-start;
  min-height: calc(100vh - var(--nav-h));
}

/* SIDEBAR */
.hub-sidebar {
  width: 240px;
  flex-shrink: 0;
  position: sticky;
  top: var(--nav-h);
  height: calc(100vh - var(--nav-h));
  overflow-y: auto;
  border-right: 1px solid var(--border);
  background: var(--bg-subtle);
  padding: 24px 0 40px;
}

.sidebar-header {
  padding: 0 16px 16px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}
.back-link { font-size: 12px; display: block; margin-bottom: 8px; transition: color 150ms; }
.back-link:hover { color: var(--text); }
.sidebar-title { font-size: 14px; font-weight: 700; }

.nav-section-label {
  font-size: 11px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0 16px;
  margin-bottom: 4px;
}

.article-nav { margin-bottom: 0; }

.nav-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  padding: 10px 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background 150ms;
  border-radius: 0;
}
.nav-item:hover { background: var(--bg-card); }
.nav-item.active { background: var(--bg-card); border-right: 2px solid var(--green); }
.nav-icon { font-size: 14px; flex-shrink: 0; padding-top: 1px; }
.nav-title { font-size: 13px; font-weight: 600; line-height: 1.4; }
.nav-meta { font-size: 11px; margin-top: 2px; }

.toc-section { padding: 0 0 16px; }
.toc-nav { display: flex; flex-direction: column; }
.toc-item {
  font-size: 12px;
  padding: 5px 16px;
  color: var(--text-2);
  transition: color 150ms, background 150ms;
  border-radius: 0;
}
.toc-item:hover { color: var(--text); background: var(--bg-card); }
.toc-sub { padding-left: 28px; }

/* CONTENT */
.hub-content {
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  padding: 40px 48px 80px;
}
.article {
  width: 100%;
  max-width: 820px;
}

/* ARTICLE HEADER */
.article-header {
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--border);
}
.article-breadcrumb { font-size: 13px; margin-bottom: 16px; display: flex; gap: 4px; align-items: center; }
.article-breadcrumb a:hover { color: var(--text); }
.article-badges { margin-bottom: 14px; display: flex; gap: 8px; flex-wrap: wrap; }
.article-title { font-size: 28px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 12px; line-height: 1.3; }
.article-desc { font-size: 15px; color: var(--text-2); line-height: 1.65; max-width: 640px; margin-bottom: 16px; }
.article-meta { display: flex; flex-wrap: wrap; gap: 16px; }
.meta-item { font-size: 13px; color: var(--text-3); }

/* ART SECTIONS */
.art-section { margin-bottom: 48px; }
.art-section-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 2px solid var(--border);
}
.art-icon {
  width: 40px; height: 40px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.art-section-header h2 { font-size: 20px; font-weight: 700; letter-spacing: -0.3px; margin-bottom: 4px; }

/* CARDS */
.r-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
  margin-bottom: 12px;
}
.r-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
  box-shadow: var(--shadow-sm);
}
.r-card-title { font-size: 13px; font-weight: 600; margin-bottom: 8px; }
.r-card-body { font-size: 13px; color: var(--text-2); line-height: 1.6; }
.r-card-body ul { padding-left: 16px; margin-top: 6px; }
.r-card-body li { margin: 3px 0; }
.r-card-tags { margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px; }

/* WIDE CARD */
.wide-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  margin-bottom: 12px;
  box-shadow: var(--shadow-sm);
}
.wide-card h3 { font-size: 14px; font-weight: 700; margin-bottom: 10px; }
.wide-card h3:first-child { margin-top: 0; }

/* INFO BOX */
.info-box {
  border-radius: var(--radius-md);
  padding: 12px 16px;
  margin: 12px 0;
  font-size: 13px;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.ib-icon { font-size: 16px; flex-shrink: 0; padding-top: 1px; }
.info-green { background: #ecfdf5; border: 1px solid #a7f3d0; }
.info-blue { background: #eff6ff; border: 1px solid #bfdbfe; }
.info-warning { background: #fffbeb; border: 1px solid #fde68a; }

/* STREAM DIAGRAM */
.stream-diagram { border: 1px solid var(--border); border-radius: var(--radius-md); overflow: hidden; margin: 12px 0; }
.stream-row { display: flex; align-items: center; gap: 12px; padding: 10px 14px; border-bottom: 1px dashed var(--border); }
.stream-row:last-child { border-bottom: none; }
.stream-label { width: 160px; font-size: 13px; font-weight: 600; flex-shrink: 0; }
.stream-desc { font-size: 13px; line-height: 1.5; flex: 1; }

/* MODE GRID */
.mode-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; margin: 12px 0; }
.mode-item { background: var(--bg-subtle); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 12px; text-align: center; }
.mode-name { font-family: var(--font-mono); font-size: 12px; font-weight: 700; color: var(--green); margin-bottom: 4px; }
.mode-desc { font-size: 12px; line-height: 1.45; }

/* TABLE */
.r-table-wrap { overflow-x: auto; border-radius: var(--radius-md); border: 1px solid var(--border); }
.r-table { width: 100%; border-collapse: collapse; font-size: 13px; background: var(--bg-card); }
.r-table th { background: var(--bg-subtle); padding: 10px 12px; text-align: left; font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--border); color: var(--text-2); }
.r-table td { padding: 10px 12px; border-bottom: 1px solid var(--border); vertical-align: top; }
.r-table tr:last-child td { border-bottom: none; }
.r-table tr:hover td { background: var(--bg-subtle); }
.check { color: #059669; font-weight: 700; }
.cross { color: #dc2626; }
.partial { color: #d97706; }

/* PIPELINE */
.pipeline-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin: 12px 0; }
.pipeline-node { font-size: 13px; font-weight: 600; padding: 6px 12px; border-radius: 6px; }
.pipeline-green { background: #ecfdf5; border: 1px solid #a7f3d0; color: #065f46; }
.pipeline-blue { background: #eff6ff; border: 1px solid #bfdbfe; color: #1d4ed8; }
.pipeline-purple { background: #f5f3ff; border: 1px solid #ddd6fe; color: #6d28d9; }
.pipeline-arrow { font-size: 12px; }

/* CODE */
.code-demo { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 12px 0; }
.code-label { font-size: 11px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px; }
.r-code { background: #1e1e2e; color: #cdd6f4; border-radius: var(--radius-md); padding: 14px 16px; font-size: 12px; font-family: var(--font-mono); line-height: 1.65; overflow-x: auto; white-space: pre; margin: 0; }
.r-code code { background: none; padding: 0; color: inherit; font-size: inherit; }

/* CMD LIST */
.cmd-list { display: flex; flex-direction: column; gap: 6px; }
.cmd-item { background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 9px 14px; display: flex; align-items: baseline; gap: 12px; font-size: 13px; }
.cmd-name { font-family: var(--font-mono); font-size: 12px; font-weight: 600; color: var(--green); background: #ecfdf5; padding: 2px 8px; border-radius: 4px; white-space: nowrap; flex-shrink: 0; }
.cmd-desc { color: var(--text-2); }

/* PILLS */
.pill { display: inline-block; font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 100px; }
.pill-green { background: #d1fae5; color: #065f46; }
.pill-blue { background: #dbeafe; color: #1e40af; }
.pill-purple { background: #ede9fe; color: #5b21b6; }
.pill-gray { background: #f1f5f9; color: #475569; }

/* tag-orange */
.tag-orange { background: #fff7ed; border-color: #fed7aa; color: #c2410c; }

code { font-family: var(--font-mono); font-size: 12px; background: var(--bg-subtle); padding: 1px 5px; border-radius: 3px; color: var(--orange); border: 1px solid var(--border); }

@media (max-width: 900px) {
  .hub-sidebar { width: 200px; }
  .hub-content { padding: 28px 24px 60px; }
}
@media (max-width: 680px) {
  .hub-layout { flex-direction: column; }
  .hub-sidebar { width: 100%; position: static; height: auto; border-right: none; border-bottom: 1px solid var(--border); padding: 16px 0; }
  .hub-content { padding: 24px 16px 60px; }
  .code-demo { grid-template-columns: 1fr; }
  .r-card-grid { grid-template-columns: 1fr; }
  .article { max-width: 100%; }
}
</style>
