<template>
  <main class="bb-browser-page">
    <div class="wrap">

      <!-- Hero Section -->
      <header class="hero">
        <p class="hero-eyebrow">技术调研 · 2026</p>
        <h1 class="hero-title">bb-browser<br/>远程构建调试利器</h1>
        <p class="hero-desc">可视化探索 Remote Execution API 的缓存与执行结果，为大规模分布式构建系统提供深度调试能力</p>
        <div class="hero-badges">
          <span class="badge badge-green">Go + gRPC</span>
          <span class="badge badge-blue">Remote Execution</span>
          <span class="badge badge-purple">Docker</span>
        </div>
      </header>

      <!-- Quick Info Cards -->
      <div class="info-grid">
        <div class="info-card" style="border-left: 3px solid var(--green)">
          <div class="info-icon">🔍</div>
          <div class="info-title">核心功能</div>
          <div class="info-desc text-2">可视化展示 CAS/AC 缓存内容</div>
        </div>
        <div class="info-card" style="border-left: 3px solid var(--blue)">
          <div class="info-icon">🐛</div>
          <div class="info-title">调试利器</div>
          <div class="info-desc text-2">查看失败构建的详细日志</div>
        </div>
        <div class="info-card" style="border-left: 3px solid var(--purple)">
          <div class="info-icon">🔗</div>
          <div class="info-title">自动链接</div>
          <div class="info-desc text-2">Worker 自动生成调试链接</div>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Architecture Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-green">01 · 技术架构</span>
          <h2 class="section-title">Buildbarn 生态系统</h2>
          <p class="section-intro text-2">bb-browser 是 Buildbarn 项目的 Web 可视化组件，提供了 Remote Execution Protocol 的完整实现</p>
        </div>

        <div class="architecture-diagram">
          <div class="arch-layer">
            <div class="arch-box arch-client">
              <div class="arch-label">Build Clients</div>
              <div class="arch-items text-2">Bazel · Buck2 · BuildStream · Pants</div>
            </div>
          </div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer">
            <div class="arch-box arch-execution">
              <div class="arch-label">bb-remote-execution</div>
              <div class="arch-items text-2">远程构建任务执行引擎</div>
            </div>
          </div>
          <div class="arch-arrow">↓</div>
          <div class="arch-layer arch-row">
            <div class="arch-box arch-storage">
              <div class="arch-label">bb-storage</div>
              <div class="arch-items text-2">存储守护进程</div>
            </div>
            <div class="arch-box arch-browser">
              <div class="arch-label">bb-browser</div>
              <div class="arch-items text-2">Web 可视化界面</div>
            </div>
          </div>
        </div>

        <div class="feature-grid">
          <div class="card">
            <div class="fc-icon">💾</div>
            <div class="fc-title">bb-storage</div>
            <div class="fc-desc text-2">分片存储守护进程，支持 S3/Redis/本地存储</div>
          </div>
          <div class="card">
            <div class="fc-icon">⚙️</div>
            <div class="fc-title">bb-remote-execution</div>
            <div class="fc-desc text-2">远程执行引擎，基于 Docker 容器分布式构建</div>
          </div>
          <div class="card">
            <div class="fc-icon">🌐</div>
            <div class="fc-title">bb-browser</div>
            <div class="fc-desc text-2">Web 前端，展示 CAS/AC 内容和构建日志</div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Core Features Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-blue">02 · 核心特性</span>
          <h2 class="section-title">工作原理与优势</h2>
        </div>

        <div class="features-list">
          <div class="feature-item">
            <div class="fi-number">01</div>
            <div class="fi-content">
              <div class="fi-title">Content Addressable Storage (CAS)</div>
              <p class="fi-desc text-2">存储构建过程中的所有输入和输出文件，基于内容哈希索引（Digest），确保构建结果可追溯</p>
              <div class="fi-tags">
                <span class="mini-tag">哈希索引</span>
                <span class="mini-tag">去重存储</span>
                <span class="mini-tag">内容寻址</span>
              </div>
            </div>
          </div>

          <div class="feature-item">
            <div class="fi-number">02</div>
            <div class="fi-content">
              <div class="fi-title">Action Cache (AC)</div>
              <p class="fi-desc text-2">缓存构建动作的结果，避免重复执行相同的构建任务，大幅提升构建速度</p>
              <div class="fi-tags">
                <span class="mini-tag">结果缓存</span>
                <span class="mini-tag">增量构建</span>
                <span class="mini-tag">分布式共享</span>
              </div>
            </div>
          </div>

          <div class="feature-item">
            <div class="fi-number">03</div>
            <div class="fi-content">
              <div class="fi-title">失败构建调试</div>
              <p class="fi-desc text-2">即使构建失败，Worker 也会将结果写入 CAS，bb-browser 可以展示这些失败结果的详细日志</p>
              <div class="fi-tags">
                <span class="mini-tag">失败追踪</span>
                <span class="mini-tag">日志可视化</span>
                <span class="mini-tag">根因分析</span>
              </div>
            </div>
          </div>

          <div class="feature-item">
            <div class="fi-number">04</div>
            <div class="fi-content">
              <div class="fi-title">自动链接生成</div>
              <p class="fi-desc text-2">Buildbarn 的 Worker 会在 RPC 响应和日志中自动生成指向 bb-browser 的链接，一键跳转到调试界面</p>
              <div class="fi-tags">
                <span class="mini-tag">自动关联</span>
                <span class="mini-tag">快速定位</span>
                <span class="mini-tag">深度集成</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Use Cases Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-purple">03 · 应用场景</span>
          <h2 class="section-title">典型使用场景</h2>
        </div>

        <div class="use-cases-grid">
          <div class="use-case-card card">
            <div class="uc-icon">🚀</div>
            <div class="uc-title">远程缓存</div>
            <p class="uc-desc text-2">团队共享构建缓存，避免重复编译相同代码，加速 CI/CD 流程</p>
            <div class="uc-benefits">
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">多人协作加速</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">CI/CD 优化</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">节省计算资源</span>
              </div>
            </div>
          </div>

          <div class="use-case-card card">
            <div class="uc-icon">⚡</div>
            <div class="uc-title">远程执行</div>
            <p class="uc-desc text-2">将构建任务分布到多台机器，统一构建环境，提升大型项目构建速度</p>
            <div class="uc-benefits">
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">分布式构建</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">环境一致性</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">弹性扩展</span>
              </div>
            </div>
          </div>

          <div class="use-case-card card">
            <div class="uc-icon">🔬</div>
            <div class="uc-title">调试分析</div>
            <p class="uc-desc text-2">查看构建失败的详细日志，分析依赖关系和文件变化，审计构建过程</p>
            <div class="uc-benefits">
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">失败根因分析</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">依赖关系追踪</span>
              </div>
              <div class="uc-benefit">
                <span class="uc-check">✓</span>
                <span class="text-2">构建审计</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Integration Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-green">04 · 工具集成</span>
          <h2 class="section-title">主流构建工具支持</h2>
        </div>

        <div class="integration-grid">
          <div class="integration-card card">
            <div class="int-header">
              <div class="int-logo">🔷</div>
              <div class="int-name">Bazel</div>
            </div>
            <div class="int-code">
              <pre><code>bazel build \
  --config=remote-ubuntu-22-04 \
  @abseil-hello//:hello_main</code></pre>
            </div>
            <p class="int-note text-2">使用 <code>--config</code> 参数配置远程执行</p>
          </div>

          <div class="integration-card card">
            <div class="int-header">
              <div class="int-logo">🦌</div>
              <div class="int-name">Buck2</div>
            </div>
            <div class="int-desc text-2">
              在 <code>platform/defs.bzl</code> 定义平台属性，<code>.buckconfig</code> 设置 RPC 端点
            </div>
          </div>

          <div class="integration-card card">
            <div class="int-header">
              <div class="int-logo">👖</div>
              <div class="int-name">Pants</div>
            </div>
            <div class="int-code">
              <pre><code>[GLOBAL]
remote_cache_read = true
remote_execution = true
remote_store_address = "grpc://localhost:8980"</code></pre>
            </div>
            <p class="int-note text-2">在 <code>pants.toml</code> 中配置</p>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Deployment Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-blue">05 · 快速部署</span>
          <h2 class="section-title">Docker Compose 一键启动</h2>
        </div>

        <div class="deployment-steps">
          <div class="step-card card">
            <div class="step-num">STEP 1</div>
            <div class="step-title">克隆仓库</div>
            <div class="step-code">
              <pre><code>git clone https://github.com/buildbarn/bb-deployments.git
cd bb-deployments/docker-compose</code></pre>
            </div>
          </div>

          <div class="step-card card">
            <div class="step-num">STEP 2</div>
            <div class="step-title">启动服务</div>
            <div class="step-code">
              <pre><code>./run.sh</code></pre>
            </div>
            <p class="step-note text-2">首次启动可能看到连接错误，等待几秒后会自动恢复</p>
          </div>

          <div class="step-card card">
            <div class="step-num">STEP 3</div>
            <div class="step-title">验证构建</div>
            <div class="step-code">
              <pre><code>bazel build --config=remote-ubuntu-22-04 @abseil-hello//:hello_main
# 输出: INFO: 33 processes: 4 internal, 29 remote.</code></pre>
            </div>
          </div>
        </div>

        <div class="deployment-info card">
          <div class="di-title">📦 容器镜像</div>
          <div class="di-version">
            <code>ghcr.io/buildbarn/bb-browser:20250820T143915Z-823deb2</code>
          </div>
          <p class="di-note text-2">最新版本（2025-08-20），支持多种存储后端</p>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Pros & Cons Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-purple">06 · 评估总结</span>
          <h2 class="section-title">优势与局限</h2>
        </div>

        <div class="eval-grid">
          <div class="eval-card eval-pros card">
            <div class="eval-header">
              <div class="eval-icon">✅</div>
              <div class="eval-title">技术优势</div>
            </div>
            <div class="eval-list">
              <div class="eval-item">
                <div class="eval-label">协议标准化</div>
                <div class="eval-desc text-2">实现 Google Remote Execution API</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">灵活存储</div>
                <div class="eval-desc text-2">支持本地、S3、Redis 等多种后端</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">容器化部署</div>
                <div class="eval-desc text-2">完整的 Docker/K8s 部署方案</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">多工具支持</div>
                <div class="eval-desc text-2">兼容 Bazel、Buck2、Pants</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">调试友好</div>
                <div class="eval-desc text-2">自动生成链接，保存失败结果</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">开源社区</div>
                <div class="eval-desc text-2">活跃的 Slack 社区支持</div>
              </div>
            </div>
          </div>

          <div class="eval-card eval-cons card">
            <div class="eval-header">
              <div class="eval-icon">⚠️</div>
              <div class="eval-title">使用局限</div>
            </div>
            <div class="eval-list">
              <div class="eval-item">
                <div class="eval-label">使用前提</div>
                <div class="eval-desc text-2">需要支持 Remote Execution API 的客户端</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">访问限制</div>
                <div class="eval-desc text-2">必须知道 Digest 才能查看，无法随意浏览</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">部署复杂</div>
                <div class="eval-desc text-2">完整部署需要多个组件协同</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">配置难度</div>
                <div class="eval-desc text-2">配置文件使用 Jsonnet 格式</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">学习曲线</div>
                <div class="eval-desc text-2">需要理解 CAS/AC 等概念</div>
              </div>
              <div class="eval-item">
                <div class="eval-label">规模适用性</div>
                <div class="eval-desc text-2">小型项目可能过于重量级</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="divider"></div>

      <!-- Resources Section -->
      <section class="section">
        <div class="section-header">
          <span class="tag tag-green">07 · 参考资源</span>
          <h2 class="section-title">官方资源与社区</h2>
        </div>

        <div class="resources-grid">
          <a href="https://github.com/buildbarn" target="_blank" class="resource-link card">
            <div class="rl-icon">📦</div>
            <div class="rl-title">GitHub 组织</div>
            <div class="rl-desc text-2">github.com/buildbarn</div>
          </a>
          <a href="https://github.com/buildbarn/bb-browser" target="_blank" class="resource-link card">
            <div class="rl-icon">🌐</div>
            <div class="rl-title">bb-browser 仓库</div>
            <div class="rl-desc text-2">Web 前端源码</div>
          </a>
          <a href="https://github.com/buildbarn/bb-deployments" target="_blank" class="resource-link card">
            <div class="rl-icon">🚀</div>
            <div class="rl-title">部署示例</div>
            <div class="rl-desc text-2">Docker/K8s 配置</div>
          </a>
          <a href="https://join.slack.com/t/buildteamworld/shared_invite/zt-3epswjmkj-bsCAPUtTmXEtlPcBl5C_lQ" target="_blank" class="resource-link card">
            <div class="rl-icon">💬</div>
            <div class="rl-title">Slack 社区</div>
            <div class="rl-desc text-2">#buildbarn 频道</div>
          </a>
        </div>
      </section>

      <!-- Footer -->
      <footer class="page-footer">
        <div class="footer-info">
          <p class="text-2">研究日期：2026-03-24</p>
          <p class="text-2">研究人员：hiro @ R&D design</p>
        </div>
      </footer>

    </div>
  </main>
</template>

<script setup>
// No reactive state needed for this static page
</script>

<style scoped>
/* ========== Layout ========== */
.bb-browser-page { padding-top: calc(var(--nav-h) + 40px); padding-bottom: 80px; }
.wrap { max-width: 920px; margin: 0 auto; padding: 0 20px; }

/* ========== Hero ========== */
.hero { text-align: center; padding: 40px 0 50px; }
.hero-eyebrow { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-3); margin-bottom: 12px; }
.hero-title { font-size: 48px; font-weight: 800; line-height: 1.15; letter-spacing: -0.03em; margin-bottom: 20px; }
.hero-desc { font-size: 17px; line-height: 1.6; color: var(--text-2); max-width: 680px; margin: 0 auto 24px; }
.hero-badges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.badge { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 4px; }
.badge-green { background: var(--green-bg); color: var(--green); }
.badge-blue { background: var(--blue-bg); color: var(--blue); }
.badge-purple { background: var(--purple-bg); color: var(--purple); }

/* ========== Info Cards ========== */
.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 40px; }
.info-card { padding: 20px; border-radius: var(--radius); background: var(--bg); }
.info-icon { font-size: 28px; margin-bottom: 8px; }
.info-title { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
.info-desc { font-size: 13px; }

/* ========== Section ========== */
.section { margin-bottom: 60px; }
.section-header { margin-bottom: 40px; }
.section-title { font-size: 32px; font-weight: 800; margin-top: 12px; margin-bottom: 12px; }
.section-intro { font-size: 16px; line-height: 1.6; max-width: 720px; }

/* ========== Tags ========== */
.tag { display: inline-block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; padding: 4px 10px; border-radius: 4px; }
.tag-green { background: var(--green-bg); color: var(--green); }
.tag-blue { background: var(--blue-bg); color: var(--blue); }
.tag-purple { background: var(--purple-bg); color: var(--purple); }

/* ========== Architecture Diagram ========== */
.architecture-diagram { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 40px; margin-bottom: 32px; }
.arch-layer { display: flex; justify-content: center; gap: 16px; margin-bottom: 16px; }
.arch-layer.arch-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.arch-arrow { text-align: center; font-size: 24px; color: var(--text-3); margin: 8px 0; }
.arch-box { padding: 20px; border-radius: var(--radius-sm); border: 2px solid var(--border); text-align: center; }
.arch-client { background: linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(99, 102, 241, 0.02)); border-color: rgba(99, 102, 241, 0.3); }
.arch-execution { background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.02)); border-color: rgba(16, 185, 129, 0.3); }
.arch-storage { background: linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(245, 158, 11, 0.02)); border-color: rgba(245, 158, 11, 0.3); }
.arch-browser { background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(139, 92, 246, 0.02)); border-color: rgba(139, 92, 246, 0.3); }
.arch-label { font-size: 14px; font-weight: 700; margin-bottom: 6px; }
.arch-items { font-size: 12px; color: var(--text-3); }

/* ========== Feature Grid ========== */
.feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; }
.card { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px; transition: border-color 150ms, transform 150ms; }
.card:hover { border-color: var(--text-3); transform: translateY(-2px); }
.fc-icon { font-size: 32px; margin-bottom: 12px; }
.fc-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; }
.fc-desc { font-size: 14px; line-height: 1.5; }

/* ========== Features List ========== */
.features-list { display: flex; flex-direction: column; gap: 24px; }
.feature-item { display: flex; gap: 20px; padding: 24px; background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); }
.fi-number { flex-shrink: 0; width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800; background: var(--blue-bg); color: var(--blue); border-radius: 50%; }
.fi-content { flex: 1; }
.fi-title { font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.fi-desc { margin-bottom: 12px; line-height: 1.6; }
.fi-tags { display: flex; gap: 6px; flex-wrap: wrap; }
.mini-tag { font-size: 11px; font-weight: 600; padding: 3px 8px; background: var(--bg-subtle); color: var(--text-2); border-radius: 4px; }

/* ========== Use Cases ========== */
.use-cases-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
.use-case-card { padding: 28px; }
.uc-icon { font-size: 40px; margin-bottom: 16px; }
.uc-title { font-size: 20px; font-weight: 700; margin-bottom: 12px; }
.uc-desc { margin-bottom: 20px; line-height: 1.6; }
.uc-benefits { display: flex; flex-direction: column; gap: 8px; }
.uc-benefit { display: flex; align-items: center; gap: 8px; }
.uc-check { font-size: 16px; color: var(--green); }

/* ========== Integration ========== */
.integration-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.integration-card { padding: 24px; }
.int-header { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
.int-logo { font-size: 32px; }
.int-name { font-size: 18px; font-weight: 700; }
.int-code { background: #f8f9fa; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 12px; overflow-x: auto; }
.int-code pre { margin: 0; }
.int-code code { font-family: 'SF Mono', 'Monaco', monospace; font-size: 12px; line-height: 1.6; color: var(--text); }
.int-desc { line-height: 1.5; }
.int-desc code { font-family: 'SF Mono', 'Monaco', monospace; font-size: 12px; background: var(--bg-subtle); padding: 2px 6px; border-radius: 3px; }
.int-note { margin-top: 8px; font-size: 13px; }
.int-note code { font-family: 'SF Mono', 'Monaco', monospace; font-size: 11px; background: var(--bg-subtle); padding: 2px 6px; border-radius: 3px; }

/* ========== Deployment ========== */
.deployment-steps { display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px; }
.step-card { padding: 24px; }
.step-num { display: inline-block; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; padding: 4px 10px; background: var(--green-bg); color: var(--green); border-radius: 4px; margin-bottom: 12px; }
.step-title { font-size: 18px; font-weight: 700; margin-bottom: 12px; }
.step-code { background: #f8f9fa; border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 16px; margin-bottom: 8px; overflow-x: auto; }
.step-code pre { margin: 0; }
.step-code code { font-family: 'SF Mono', 'Monaco', monospace; font-size: 12px; line-height: 1.6; color: var(--text); }
.step-note { font-size: 13px; }
.deployment-info { padding: 24px; background: var(--blue-bg); border-color: var(--blue); }
.di-title { font-size: 16px; font-weight: 700; margin-bottom: 12px; }
.di-version { margin-bottom: 12px; }
.di-version code { font-family: 'SF Mono', 'Monaco', monospace; font-size: 13px; background: rgba(255,255,255,0.8); padding: 6px 12px; border-radius: 4px; display: inline-block; }
.di-note { font-size: 13px; }

/* ========== Evaluation ========== */
.eval-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.eval-card { padding: 28px; }
.eval-pros { background: rgba(16, 185, 129, 0.03); border-color: rgba(16, 185, 129, 0.2); }
.eval-cons { background: rgba(245, 158, 11, 0.03); border-color: rgba(245, 158, 11, 0.2); }
.eval-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
.eval-icon { font-size: 28px; }
.eval-title { font-size: 18px; font-weight: 700; }
.eval-list { display: flex; flex-direction: column; gap: 16px; }
.eval-item { padding-left: 20px; border-left: 3px solid var(--border); }
.eval-label { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.eval-desc { font-size: 13px; }

/* ========== Resources ========== */
.resources-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; }
.resource-link { padding: 20px; text-decoration: none; color: inherit; display: block; cursor: pointer; }
.resource-link:hover { border-color: var(--blue); }
.rl-icon { font-size: 32px; margin-bottom: 12px; }
.rl-title { font-size: 15px; font-weight: 700; margin-bottom: 6px; }
.rl-desc { font-size: 13px; color: var(--text-3); }

/* ========== Footer ========== */
.page-footer { margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--border); text-align: center; }
.footer-info { display: flex; flex-direction: column; gap: 4px; }

/* ========== Divider ========== */
.divider { height: 1px; background: var(--border); margin: 48px 0; }

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero-title { font-size: 36px; }
  .section-title { font-size: 28px; }
  .eval-grid { grid-template-columns: 1fr; }
  .arch-layer.arch-row { grid-template-columns: 1fr; }
  .feature-item { flex-direction: column; }
  .fi-number { margin-bottom: 12px; }
}
</style>
