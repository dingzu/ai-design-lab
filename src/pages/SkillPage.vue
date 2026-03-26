<template>
  <main class="page">
    <div class="wrap">

      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <RouterLink to="/" class="text-3">首页</RouterLink>
        <span class="text-3"> / </span>
        <span class="text-2">SKILL 开发</span>
      </div>

      <!-- Header -->
      <header class="page-hero">
        <span class="tag tag-green" style="margin-bottom:16px;display:inline-flex">01 · SKILL Development</span>
        <h1>设计 Skill<br/>开发体系</h1>
        <p class="text-2" style="font-size:16px;max-width:560px;line-height:1.7;margin-top:16px">
          将团队知识与最佳实践封装为结构化 Skill，让 AI 助手具备专业设计能力，实现从经验到产能的系统性转化。
        </p>
      </header>

      <!-- Stats + repo link bar -->
      <div class="info-bar">
        <div class="info-stats">
          <div class="stat-item">
            <div class="stat-num text-green">进行中</div>
            <div class="stat-label text-3">状态</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-num">01</div>
            <div class="stat-label text-3">工作线编号</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-num">2025</div>
            <div class="stat-label text-3">启动年份</div>
          </div>
        </div>
        <a
          href="https://git.corp.kuaishou.com/design/designskill"
          target="_blank"
          rel="noopener"
          class="repo-btn"
        >
          <span class="repo-icon">⎇</span>
          <span>designskill 仓库</span>
          <span class="repo-arrow">↗</span>
        </a>
      </div>

      <div class="section-divider"></div>

      <!-- Skill 规范 -->
      <section class="content-section">
        <h2 class="section-title">核心规范</h2>
        <p class="section-desc text-2">每个 Skill 必须包含以下要素，详见仓库 <code>standards/skill-spec.md</code></p>
        <div class="spec-grid">
          <div class="spec-card">
            <div class="spec-icon">📄</div>
            <div class="spec-name">SKILL.md</div>
            <div class="spec-desc text-3">Skill 主指令文件，包含定位、触发时机、核心步骤、交付物</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">🏷️</div>
            <div class="spec-name">description</div>
            <div class="spec-desc text-3">50-200字，含至少 3 个中英文触发词，决定 AI 是否正确调用</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">⚡</div>
            <div class="spec-name">触发词</div>
            <div class="spec-desc text-3">至少 3 个明确的中英文触发词，覆盖核心使用场景</div>
          </div>
          <div class="spec-card">
            <div class="spec-icon">📦</div>
            <div class="spec-name">交付物定义</div>
            <div class="spec-desc text-3">明确输出格式（HTML/Markdown/文件）和验收标准</div>
          </div>
        </div>

        <!-- Quality levels -->
        <div class="quality-table">
          <div class="qt-header">
            <span>质量评级</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-3">⭐⭐⭐ 优秀</span>
            <span class="qt-desc text-2">触发精准、交付物清晰、有真实使用案例</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-2">⭐⭐ 合格</span>
            <span class="qt-desc text-2">满足基本规范，触发词完整</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-1">⭐ 待改进</span>
            <span class="qt-desc text-2">描述不清、触发词少、无交付物定义</span>
          </div>
          <div class="qt-row">
            <span class="qt-level level-0">❌ 不合格</span>
            <span class="qt-desc text-2">不符合基本结构规范，退回修改</span>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- 设计 Skill 分类体系 -->
      <section class="content-section">
        <h2 class="section-title">设计 Skill 分层架构</h2>
        <p class="section-desc text-2">
          类比软件架构设计，将 Skills 划分为意图层、路由层、编排层、原子层，建立清晰的调用关系
        </p>

        <!-- 架构可视化 -->
        <div class="arch-viz">
          <div class="arch-header">
            <span class="arch-title">Skill 调用链路示例</span>
            <div class="arch-legend">
              <span class="legend-item"><span class="legend-dot dot-intent"></span>意图层</span>
              <span class="legend-item"><span class="legend-dot dot-router"></span>路由层</span>
              <span class="legend-item"><span class="legend-dot dot-orch"></span>编排层</span>
              <span class="legend-item"><span class="legend-dot dot-atomic"></span>原子层</span>
            </div>
          </div>

          <div class="arch-layers">
            <!-- 意图层 -->
            <div class="arch-layer layer-intent">
              <div class="layer-label">
                <span class="layer-icon">💬</span>
                <span class="layer-name">意图层</span>
                <span class="layer-desc">用户原始需求</span>
              </div>
              <div class="layer-nodes">
                <div class="arch-node node-intent">
                  <div class="node-text">"做一个 PPT"</div>
                </div>
                <div class="arch-node node-intent">
                  <div class="node-text">"生成一张图"</div>
                </div>
                <div class="arch-node node-intent">
                  <div class="node-text">"创建信息图"</div>
                </div>
              </div>
            </div>

            <!-- 路由层 -->
            <div class="arch-layer layer-router">
              <div class="layer-label">
                <span class="layer-icon">🔀</span>
                <span class="layer-name">路由层</span>
                <span class="layer-desc">意图识别与分流</span>
              </div>
              <div class="layer-nodes">
                <div class="arch-node node-router" @click="selectNode('router-ppt')">
                  <div class="node-header">
                    <span class="node-type">PPT 需求路由</span>
                  </div>
                  <div class="node-routes">
                    <div class="route-item">工作汇报 → work-report-ppt</div>
                    <div class="route-item">艺术创意 → artistic-ppt</div>
                    <div class="route-item">文件操作 → pptx</div>
                  </div>
                </div>
                <div class="arch-node node-router" @click="selectNode('router-image')">
                  <div class="node-header">
                    <span class="node-type">图像需求路由</span>
                  </div>
                  <div class="node-routes">
                    <div class="route-item">技术架构图 → ai-image-generator</div>
                    <div class="route-item">艺术海报 → canvas-design</div>
                    <div class="route-item">信息图 → 编排层处理</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 编排层 -->
            <div class="arch-layer layer-orch">
              <div class="layer-label">
                <span class="layer-icon">🎭</span>
                <span class="layer-name">编排层</span>
                <span class="layer-desc">组合原子能力</span>
              </div>
              <div class="layer-nodes">
                <div class="arch-node node-orch clickable" @click="selectSkill('artistic-ppt')">
                  <div class="node-icon">📊</div>
                  <div class="node-name">artistic-ppt</div>
                  <div class="node-meta">艺术风格PPT</div>
                  <div class="node-deps">
                    <span class="dep-badge">→ pptx</span>
                    <span class="dep-badge">→ ai-image-generator</span>
                  </div>
                </div>
                <div class="arch-node node-orch clickable" @click="selectSkill('work-report-ppt')">
                  <div class="node-icon">📊</div>
                  <div class="node-name">work-report-ppt</div>
                  <div class="node-meta">商务汇报PPT</div>
                  <div class="node-deps">
                    <span class="dep-badge">→ pptx</span>
                  </div>
                </div>
                <div class="arch-node node-orch clickable" @click="selectSkill('infographic')">
                  <div class="node-icon">📈</div>
                  <div class="node-name">ks-design-infographic</div>
                  <div class="node-meta">信息图生成</div>
                  <div class="node-deps">
                    <span class="dep-badge">→ ai-image-generator</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 原子层 -->
            <div class="arch-layer layer-atomic">
              <div class="layer-label">
                <span class="layer-icon">⚛️</span>
                <span class="layer-name">原子层</span>
                <span class="layer-desc">不可再分的基础能力</span>
              </div>
              <div class="layer-nodes">
                <div class="arch-node node-atomic clickable" @click="selectSkill('pptx')">
                  <div class="node-icon">📄</div>
                  <div class="node-name">pptx / keynote</div>
                  <div class="node-meta">PPTX 文件操作</div>
                  <div class="node-tech">PptxGenJS</div>
                </div>
                <div class="arch-node node-atomic clickable" @click="selectSkill('ai-image-generator')">
                  <div class="node-icon">🎨</div>
                  <div class="node-name">ai-image-generator</div>
                  <div class="node-meta">AI 图像生成</div>
                  <div class="node-tech">FLUX.1-dev</div>
                </div>
                <div class="arch-node node-atomic clickable" @click="selectSkill('ppt-style-manager')">
                  <div class="node-icon">🎨</div>
                  <div class="node-name">ppt-style-manager</div>
                  <div class="node-meta">PPT 风格管理</div>
                  <div class="node-tech">风格配置</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skill 详情面板 -->
        <div v-if="selectedSkillId" class="skill-detail-panel">
          <div class="panel-header">
            <div class="panel-title">
              <span class="panel-icon">{{ skillDetails[selectedSkillId].icon }}</span>
              <span class="panel-name">{{ skillDetails[selectedSkillId].name }}</span>
              <span :class="['panel-badge', 'badge-' + skillDetails[selectedSkillId].layer]">
                {{ skillDetails[selectedSkillId].layerName }}
              </span>
            </div>
            <button class="panel-close" @click="selectedSkillId = null">✕</button>
          </div>
          <div class="panel-body">
            <div class="panel-section">
              <div class="section-label">场景</div>
              <div class="section-value">{{ skillDetails[selectedSkillId].scenario }}</div>
            </div>
            <div class="panel-section">
              <div class="section-label">触发词</div>
              <div class="section-value">
                <span v-for="(word, idx) in skillDetails[selectedSkillId].triggers" :key="idx" class="trigger-word">
                  {{ word }}
                </span>
              </div>
            </div>
            <div class="panel-section" v-if="skillDetails[selectedSkillId].dependencies.length > 0">
              <div class="section-label">调用关系</div>
              <div class="section-value">
                <div v-for="(dep, idx) in skillDetails[selectedSkillId].dependencies" :key="idx" class="dep-item">
                  <span class="dep-arrow">→</span>
                  <span class="dep-name">{{ dep.name }}</span>
                  <span class="dep-desc">{{ dep.desc }}</span>
                </div>
              </div>
            </div>
            <div class="panel-section" v-if="skillDetails[selectedSkillId].tech">
              <div class="section-label">底层技术</div>
              <div class="section-value">
                <code>{{ skillDetails[selectedSkillId].tech }}</code>
              </div>
            </div>
          </div>
        </div>

        <!-- 分类全景图 -->
        <div class="taxonomy-overview">
          <div class="taxonomy-header">
            <span class="taxonomy-title">7 大分类 · 24 个 Skills</span>
            <span class="taxonomy-badge">v1.0</span>
          </div>
          
          <div class="taxonomy-grid">
            <!-- 静态视觉设计 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">🎨</span>
                <span class="tax-name">静态视觉设计</span>
                <span class="tax-count">3</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">ai-image-generator</span>
                  <span class="skill-badge badge-medium">中</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">canvas-design</span>
                  <span class="skill-badge badge-high">高</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">algorithmic-art</span>
                  <span class="skill-badge badge-high">高</span>
                </div>
              </div>
            </div>

            <!-- 界面设计与开发 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">💻</span>
                <span class="tax-name">界面设计与开发</span>
                <span class="tax-count">4</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">frontend-design</span>
                  <span class="skill-badge badge-medium">中</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">ui-ux-pro-max</span>
                  <span class="skill-badge badge-high">高</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">web-design-guidelines</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">web-artifacts-builder</span>
                  <span class="skill-badge badge-ultra">超高</span>
                </div>
              </div>
            </div>

            <!-- 演示文稿设计 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">📊</span>
                <span class="tax-name">演示文稿设计</span>
                <span class="tax-count">3</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">pptx</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">work-report-ppt</span>
                  <span class="skill-badge badge-medium">中</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">artistic-ppt</span>
                  <span class="skill-badge badge-ultra">超高</span>
                </div>
              </div>
            </div>

            <!-- 主题与风格系统 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">🎭</span>
                <span class="tax-name">主题与风格系统</span>
                <span class="tax-count">3</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">theme-factory</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">zelda-style</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">brand-guidelines</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
              </div>
            </div>

            <!-- 用户体验研究 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">🔍</span>
                <span class="tax-name">用户体验研究</span>
                <span class="tax-count">2</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">ux-journey-map</span>
                  <span class="skill-badge badge-medium">中</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">web-design-guidelines</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
              </div>
            </div>

            <!-- 专项设计能力 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">⚡</span>
                <span class="tax-name">专项设计能力</span>
                <span class="tax-count">3</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">pixel-action-game</span>
                  <span class="skill-badge badge-high">高</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">slack-gif-creator</span>
                  <span class="skill-badge badge-medium">中</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">product-thinking</span>
                  <span class="skill-badge badge-internal">内置</span>
                </div>
              </div>
            </div>

            <!-- 文档设计 -->
            <div class="tax-category">
              <div class="tax-cat-header">
                <span class="tax-icon">📄</span>
                <span class="tax-name">文档设计</span>
                <span class="tax-count">6</span>
              </div>
              <div class="tax-skills">
                <div class="tax-skill">
                  <span class="skill-name">docx</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">pdf</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill">
                  <span class="skill-name">xlsx</span>
                  <span class="skill-badge badge-low">低</span>
                </div>
                <div class="tax-skill text-3" style="font-size:11px">+ 3 个其他...</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 三大调用决策树 -->
        <div class="decision-trees">
          <h3 class="dt-title">调用决策树</h3>
          <div class="dt-grid">
            <!-- 图像类决策树 -->
            <div class="dt-card">
              <div class="dt-header">
                <span class="dt-icon">🖼️</span>
                <span class="dt-name">图像类需求</span>
              </div>
              <div class="dt-flow">
                <div class="dt-node dt-root">用户说："帮我做一张图"</div>
                <div class="dt-branches">
                  <div class="dt-branch">
                    <div class="dt-condition">技术架构/流程图？</div>
                    <div class="dt-result result-green">→ ai-image-generator</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">艺术级海报/作品？</div>
                    <div class="dt-result result-purple">→ canvas-design</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">算法艺术/可交互？</div>
                    <div class="dt-result result-blue">→ algorithmic-art</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 界面类决策树 -->
            <div class="dt-card">
              <div class="dt-header">
                <span class="dt-icon">💻</span>
                <span class="dt-name">界面设计需求</span>
              </div>
              <div class="dt-flow">
                <div class="dt-node dt-root">用户说："做一个网页/组件"</div>
                <div class="dt-branches">
                  <div class="dt-branch">
                    <div class="dt-condition">独特视觉、避免 AI 感？</div>
                    <div class="dt-result result-green">→ frontend-design</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">特定风格（Glassmorphism）？</div>
                    <div class="dt-result result-purple">→ ui-ux-pro-max</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">复杂应用（shadcn/ui）？</div>
                    <div class="dt-result result-blue">→ web-artifacts-builder</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- PPT类决策树 -->
            <div class="dt-card">
              <div class="dt-header">
                <span class="dt-icon">📊</span>
                <span class="dt-name">演示文稿需求</span>
              </div>
              <div class="dt-flow">
                <div class="dt-node dt-root">用户说："做一个 PPT"</div>
                <div class="dt-branches">
                  <div class="dt-branch">
                    <div class="dt-condition">工作汇报/数据报告？</div>
                    <div class="dt-result result-green">→ work-report-ppt</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">纪念册/相册/手账？</div>
                    <div class="dt-result result-purple">→ artistic-ppt</div>
                  </div>
                  <div class="dt-branch">
                    <div class="dt-condition">文件操作（打开/编辑）？</div>
                    <div class="dt-result result-blue">→ pptx</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 核心维度对比 -->
        <div class="dimensions-section">
          <h3 class="dim-title">核心分类维度</h3>
          <div class="dimensions-grid">
            <div class="dim-card">
              <div class="dim-header">
                <span class="dim-icon">📦</span>
                <span class="dim-label">按输出介质</span>
              </div>
              <div class="dim-tags">
                <span class="dim-tag">图像类 (PNG/PDF)</span>
                <span class="dim-tag">代码类 (HTML/React)</span>
                <span class="dim-tag">文档类 (PPTX/DOCX)</span>
                <span class="dim-tag">规范类 (审查反馈)</span>
              </div>
            </div>

            <div class="dim-card">
              <div class="dim-header">
                <span class="dim-icon">📈</span>
                <span class="dim-label">按设计复杂度</span>
              </div>
              <div class="dim-tags">
                <span class="dim-tag tag-low">低复杂度 (应用主题)</span>
                <span class="dim-tag tag-medium">中复杂度 (定制设计)</span>
                <span class="dim-tag tag-high">高复杂度 (创意设计)</span>
                <span class="dim-tag tag-ultra">超高复杂度 (多技术栈)</span>
              </div>
            </div>

            <div class="dim-card">
              <div class="dim-header">
                <span class="dim-icon">🎨</span>
                <span class="dim-label">按设计风格</span>
              </div>
              <div class="dim-tags">
                <span class="dim-tag">商务/专业风格</span>
                <span class="dim-tag">艺术/创意风格</span>
                <span class="dim-tag">主题化风格</span>
                <span class="dim-tag">现代互联网风格</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="section-divider"></div>

      <!-- Skill 库 -->
      <section class="content-section">
        <div class="skills-header">
          <h2 class="section-title" style="margin-bottom:0">Skill 库</h2>
          <a
            href="https://git.corp.kuaishou.com/design/designskill/-/tree/main/skills"
            target="_blank"
            rel="noopener"
            class="view-all-link text-green"
          >查看全部 →</a>
        </div>
        <!-- Research entry -->
        <RouterLink to="/skill/research" class="research-card">
          <div class="rc-left">
            <div class="rc-icon">🔬</div>
            <div>
              <div class="rc-title">Skill 评测分析</div>
              <div class="rc-desc text-3">研究顶级 Design Skill 真实实现，按设计子类分类，持续更新最佳实践</div>
            </div>
          </div>
          <div class="rc-meta">
            <span class="tag tag-purple">第一批研究中</span>
            <span class="rc-arrow">→</span>
          </div>
        </RouterLink>

        <!-- Hub entry -->
        <RouterLink to="/hub" class="research-card" style="margin-top:10px">
          <div class="rc-left">
            <div class="rc-icon">📚</div>
            <div>
              <div class="rc-title">研究汇总</div>
              <div class="rc-desc text-3">OpenClaw 对话特殊渲染机制全览等深度研究报告，左侧目录 + 右侧详细内容</div>
            </div>
          </div>
          <div class="rc-meta">
            <span class="tag tag-blue">4 篇文章</span>
            <span class="rc-arrow">→</span>
          </div>
        </RouterLink>

        <!-- Design Skills Report direct link -->
        <RouterLink to="/hub/design-skills-report" class="research-card" style="margin-top:10px;border-color:rgba(108,143,255,0.3)">
          <div class="rc-left">
            <div class="rc-icon">🎨</div>
            <div>
              <div class="rc-title">业内最佳设计类 Skill 评测报告</div>
              <div class="rc-desc text-3">6 款精选技能 · S/A/B 三级评定 · 选型指南 · 含外链完整报告</div>
            </div>
          </div>
          <div class="rc-meta">
            <span class="tag tag-purple">设计研究</span>
            <span class="tag tag-green">NEW</span>
            <span class="rc-arrow">→</span>
          </div>
        </RouterLink>

        <div class="empty-state" style="margin-top:14px">
          <div class="cs-icon">🌱</div>
          <div class="cs-title">第一批 Skill 建设中</div>
          <div class="cs-desc text-3">欢迎提交你的第一个 Skill 提案到 designskill 仓库</div>
          <a
            href="https://git.corp.kuaishou.com/design/designskill/-/tree/main/proposals"
            target="_blank"
            rel="noopener"
            class="submit-btn"
          >提交提案 ↗</a>
        </div>
      </section>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const selectedSkillId = ref(null)

const skillDetails = {
  'artistic-ppt': {
    icon: '📊',
    name: 'artistic-ppt',
    layer: 'orch',
    layerName: '编排层',
    scenario: '家庭纪念册、旅行相册、生日祝福、成长记录等艺术创意场景',
    triggers: ['艺术风格PPT', '纪念册PPT', '相册PPT', '手账风格', 'artistic presentation'],
    dependencies: [
      { name: 'ai-image-generator', desc: '生成 4K 艺术背景图' },
      { name: 'pptx', desc: 'PPTX 文件操作' }
    ],
    tech: 'PptxGenJS + FLUX.1-dev'
  },
  'work-report-ppt': {
    icon: '📊',
    name: 'work-report-ppt',
    layer: 'orch',
    layerName: '编排层',
    scenario: '工作汇报、团队分享、技术分享、季度总结等商务场景',
    triggers: ['工作汇报PPT', '团队分享', '技术分享PPT', 'work report'],
    dependencies: [
      { name: 'pptx', desc: 'PPTX 文件操作' }
    ],
    tech: 'PptxGenJS'
  },
  'infographic': {
    icon: '📈',
    name: 'ks-design-infographic',
    layer: 'orch',
    layerName: '编排层',
    scenario: '生成专业信息图（21 布局 × 20 风格）',
    triggers: ['infographic', '信息图', '可视化', '高密度信息大图'],
    dependencies: [
      { name: 'ai-image-generator', desc: '生成图片' }
    ],
    tech: 'FLUX.1-dev'
  },
  'pptx': {
    icon: '📄',
    name: 'pptx / keynote',
    layer: 'atomic',
    layerName: '原子层',
    scenario: '读写 PPTX 文件、支持增删改查、样式、图片、图表、动画、母版、主题、转换',
    triggers: ['pptx', 'keynote'],
    dependencies: [],
    tech: 'PptxGenJS (底层工具)'
  },
  'ai-image-generator': {
    icon: '🎨',
    name: 'ai-image-generator',
    layer: 'atomic',
    layerName: '原子层',
    scenario: 'AI生图/图生图，支持架构图、流程图、信息图、艺术作品',
    triggers: ['生成图片', 'AI生图', '图生图', 'image generation', '以图生成'],
    dependencies: [],
    tech: 'FLUX.1-dev / SiliconFlow API'
  },
  'ppt-style-manager': {
    icon: '🎨',
    name: 'ppt-style-manager',
    layer: 'atomic',
    layerName: '原子层',
    scenario: '幻灯片风格管理与复用：预设配置、应用、导出/导入、一键切换',
    triggers: ['幻灯片风格', '切换风格', '应用风格', '风格配置'],
    dependencies: [],
    tech: '风格配置引擎'
  }
}

function selectSkill(skillId) {
  selectedSkillId.value = skillId
}

function selectNode(nodeId) {
  console.log('Node selected:', nodeId)
}
</script>

<style scoped>
.page {
  padding-top: calc(var(--nav-h) + 40px);
  padding-bottom: 80px;
  background: linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%);
}

.content-section {
  background: white;
  padding: 40px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.content-section:nth-child(even) {
  background: linear-gradient(135deg, #FAFBFC 0%, #F8FAFC 100%);
}

.breadcrumb {
  font-size: 13px;
  margin-bottom: 24px;
  display: flex;
  gap: 4px;
  align-items: center;
}
.breadcrumb a:hover { color: var(--text); }

.page-hero {
  margin-bottom: 40px;
  padding: 40px;
  background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F0FDFA 100%);
  border-radius: var(--radius-xl);
  border: 1px solid #BAE6FD;
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}
.page-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3B82F6, #06B6D4, #10B981);
}

/* Info bar */
.info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 24px;
  background: linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  margin-bottom: 24px;
  flex-wrap: wrap;
  box-shadow: var(--shadow-sm);
}

.info-stats {
  display: flex;
  align-items: center;
  gap: 28px;
}

.stat-item { display: flex; flex-direction: column; gap: 3px; }
.stat-num { font-size: 18px; font-weight: 700; }
.stat-label { font-size: 12px; font-family: var(--font-mono); }
.stat-divider { width: 1px; height: 32px; background: var(--border); }

/* Repo button */
.repo-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-2);
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  transition: border-color 150ms, box-shadow 150ms;
  white-space: nowrap;
}
.repo-btn:hover {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(5,150,105,0.08);
}
.repo-icon { font-size: 15px; }
.repo-arrow { color: var(--text-3); font-size: 12px; }

.section-divider { 
  height: 0; 
  margin: 40px 0;
  border: none;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.section-desc {
  font-size: 13px;
  margin-bottom: 20px;
  line-height: 1.6;
}
.section-desc code {
  font-family: var(--font-mono);
  font-size: 12px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  padding: 1px 6px;
  border-radius: 4px;
}

/* Goal grid */
.goal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.goal-card {
  padding: 16px 20px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}
.goal-label {
  font-size: 11px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}
.goal-val { font-size: 14px; font-weight: 500; line-height: 1.5; }

/* Workflow */
.workflow-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
}
.wf-step {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  padding: 16px 18px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  flex: 1;
}
.wf-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--green);
  font-weight: 700;
  letter-spacing: 0.05em;
}
.wf-name { font-size: 15px; font-weight: 700; }
.wf-desc { font-size: 12px; line-height: 1.5; margin-top: 2px; }
.wf-arrow {
  font-size: 16px;
  color: var(--text-3);
  padding-top: 22px;
  flex-shrink: 0;
}

/* Spec grid */
.spec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}
.spec-card {
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.spec-icon { font-size: 18px; margin-bottom: 8px; }
.spec-name { font-size: 13px; font-weight: 600; margin-bottom: 6px; }
.spec-desc { font-size: 12px; line-height: 1.55; }

/* Quality table */
.quality-table {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.qt-header {
  padding: 10px 16px;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
  font-size: 12px;
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.qt-row {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--border);
}
.qt-row:last-child { border-bottom: none; }
.qt-level {
  font-size: 13px;
  font-weight: 600;
  min-width: 100px;
  flex-shrink: 0;
}
.qt-desc { font-size: 13px; }

/* Skills header */
.skills-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.view-all-link {
  font-size: 13px;
  font-weight: 600;
  transition: opacity 150ms;
}
.view-all-link:hover { opacity: 0.7; }

/* Empty state */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 56px 24px;
  border: 1.5px dashed var(--border-2);
  border-radius: var(--radius-lg);
  text-align: center;
  background: var(--bg-subtle);
}
.cs-icon { font-size: 28px; }
.cs-title { font-size: 15px; font-weight: 600; }
.cs-desc { font-size: 13px; line-height: 1.5; max-width: 320px; }

/* Research card */
.research-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 150ms, border-color 150ms;
  cursor: pointer;
}
.research-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--purple);
}
.rc-left {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.rc-icon { font-size: 20px; flex-shrink: 0; padding-top: 2px; }
.rc-title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
.rc-desc { font-size: 13px; line-height: 1.5; }
.rc-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.rc-arrow { font-size: 16px; color: var(--text-3); }

.submit-btn {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 20px;
  background: var(--green);
  color: white;
  border-radius: var(--radius-md);
  font-size: 13px;
  font-weight: 600;
  transition: opacity 150ms;
}
.submit-btn:hover { opacity: 0.88; }

/* Taxonomy overview */
.taxonomy-overview {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.taxonomy-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #E0E7FF 100%);
  border-bottom: 1px solid var(--border);
}
.taxonomy-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}
.taxonomy-badge {
  font-size: 11px;
  font-family: var(--font-mono);
  color: #0369A1;
  background: white;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid #BAE6FD;
  font-weight: 600;
}

.taxonomy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border);
}
.tax-category {
  background: var(--bg-card);
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.tax-category::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #3B82F6, #8B5CF6);
}
.tax-category:nth-child(1)::before { background: linear-gradient(90deg, #F59E0B, #F97316); }
.tax-category:nth-child(2)::before { background: linear-gradient(90deg, #10B981, #14B8A6); }
.tax-category:nth-child(3)::before { background: linear-gradient(90deg, #EC4899, #F43F5E); }
.tax-category:nth-child(4)::before { background: linear-gradient(90deg, #8B5CF6, #A855F7); }
.tax-category:nth-child(5)::before { background: linear-gradient(90deg, #06B6D4, #0EA5E9); }
.tax-category:nth-child(6)::before { background: linear-gradient(90deg, #EF4444, #F97316); }
.tax-category:nth-child(7)::before { background: linear-gradient(90deg, #6366F1, #8B5CF6); }

.tax-cat-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.tax-icon { font-size: 16px; }
.tax-name { font-size: 13px; font-weight: 600; flex: 1; }
.tax-count {
  font-size: 11px;
  font-family: var(--font-mono);
  background: linear-gradient(135deg, #F0F9FF, #E0F2FE);
  padding: 3px 9px;
  border-radius: 12px;
  color: #0369A1;
  font-weight: 600;
  border: 1px solid #BAE6FD;
}

.tax-skills {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.tax-skill {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 6px 10px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 12px;
  transition: border-color 150ms;
}
.tax-skill:hover { border-color: var(--green); }
.skill-name {
  font-family: var(--font-mono);
  font-size: 11px;
  flex: 1;
}
.skill-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.badge-low { 
  background: linear-gradient(135deg, #DBEAFE, #BFDBFE); 
  color: #1E40AF;
  border: 1px solid #93C5FD;
}
.badge-medium { 
  background: linear-gradient(135deg, #FEF3C7, #FDE68A); 
  color: #92400E;
  border: 1px solid #FCD34D;
}
.badge-high { 
  background: linear-gradient(135deg, #FCE7F3, #FBCFE8); 
  color: #9F1239;
  border: 1px solid #F9A8D4;
}
.badge-ultra { 
  background: linear-gradient(135deg, #EDE9FE, #DDD6FE); 
  color: #6B21A8;
  border: 1px solid #C4B5FD;
}
.badge-internal { 
  background: linear-gradient(135deg, #F9FAFB, #F3F4F6); 
  color: var(--text-3); 
  border: 1px solid var(--border); 
}

/* Decision trees */
.decision-trees {
  margin-top: 32px;
}
.dt-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 20px;
}
.dt-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.dt-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  position: relative;
}
.dt-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #10B981, #14B8A6);
}
.dt-card:nth-child(2)::before {
  background: linear-gradient(90deg, #8B5CF6, #A855F7);
}
.dt-card:nth-child(3)::before {
  background: linear-gradient(90deg, #EC4899, #F43F5E);
}
.dt-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%);
  border-bottom: 1px solid var(--border);
}
.dt-card:nth-child(2) .dt-header {
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%);
}
.dt-card:nth-child(3) .dt-header {
  background: linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%);
}
.dt-icon { font-size: 16px; }
.dt-name { font-size: 13px; font-weight: 600; }

.dt-flow {
  padding: 16px;
}
.dt-node {
  font-size: 12px;
  font-weight: 500;
  padding: 8px 12px;
  background: var(--bg-subtle);
  border-radius: 6px;
  margin-bottom: 12px;
  text-align: center;
}
.dt-root {
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  border: 1px solid #93C5FD;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.08);
}

.dt-branches {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.dt-branch {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dt-condition {
  font-size: 11px;
  color: var(--text-2);
  padding-left: 12px;
  position: relative;
}
.dt-condition::before {
  content: '↳';
  position: absolute;
  left: 0;
  color: var(--text-3);
}
.dt-result {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  padding: 6px 10px;
  border-radius: 5px;
  margin-left: 12px;
  border: 1px solid;
}
.result-green { 
  background: linear-gradient(135deg, #D1FAE5, #A7F3D0); 
  color: #065F46;
  border-color: #6EE7B7;
}
.result-purple { 
  background: linear-gradient(135deg, #F3E8FF, #E9D5FF); 
  color: #6B21A8;
  border-color: #C4B5FD;
}
.result-blue { 
  background: linear-gradient(135deg, #DBEAFE, #BFDBFE); 
  color: #1E40AF;
  border-color: #93C5FD;
}

/* Dimensions */
.dimensions-section {
  margin-top: 32px;
}
.dim-title {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
}
.dimensions-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.dim-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
  position: relative;
  overflow: hidden;
}
.dim-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #F59E0B, #F97316);
}
.dim-card:nth-child(2)::before {
  background: linear-gradient(90deg, #10B981, #14B8A6);
}
.dim-card:nth-child(3)::before {
  background: linear-gradient(90deg, #8B5CF6, #A855F7);
}
.dim-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.dim-icon { font-size: 16px; }
.dim-label { font-size: 13px; font-weight: 600; }

.dim-tags {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.dim-tag {
  font-size: 11px;
  padding: 6px 10px;
  background: var(--bg-subtle);
  border: 1px solid var(--border);
  border-radius: 5px;
  color: var(--text-2);
  border-left-width: 3px;
}
.dim-tag.tag-low { 
  border-left-color: #3B82F6;
  background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
}
.dim-tag.tag-medium { 
  border-left-color: #F59E0B;
  background: linear-gradient(135deg, #FFFBEB, #FEF3C7);
}
.dim-tag.tag-high { 
  border-left-color: #EC4899;
  background: linear-gradient(135deg, #FDF2F8, #FCE7F3);
}
.dim-tag.tag-ultra { 
  border-left-color: #8B5CF6;
  background: linear-gradient(135deg, #FAF5FF, #F3E8FF);
}

/* Architecture Visualization */
.arch-viz {
  background: white;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 32px;
}
.arch-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: linear-gradient(135deg, #FAFBFC 0%, #F5F7FA 100%);
  border-bottom: 1px solid var(--border);
}
.arch-title {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
}
.arch-legend {
  display: flex;
  gap: 16px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--text-2);
}
.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid;
}
.dot-intent { background: #FEF3C7; border-color: #F59E0B; }
.dot-router { background: #DBEAFE; border-color: #3B82F6; }
.dot-orch { background: #F3E8FF; border-color: #A855F7; }
.dot-atomic { background: #FEE2E2; border-color: #EF4444; }

.arch-layers {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.arch-layer {
  position: relative;
}
.layer-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--border);
}
.layer-icon { font-size: 18px; }
.layer-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
}
.layer-desc {
  font-size: 11px;
  color: var(--text-3);
  margin-left: auto;
  font-family: var(--font-mono);
}

.layer-nodes {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Nodes */
.arch-node {
  background: white;
  border: 2px solid;
  border-radius: var(--radius-md);
  padding: 12px 16px;
  min-width: 180px;
  transition: all 200ms;
  position: relative;
}

.node-intent {
  border-color: #FCD34D;
  background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%);
}
.node-intent .node-text {
  font-size: 13px;
  font-weight: 600;
  color: #92400E;
  text-align: center;
}

.node-router {
  border-color: #93C5FD;
  background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
  flex: 1;
  cursor: pointer;
}
.node-router:hover {
  border-color: #3B82F6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}
.node-router .node-header {
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #BFDBFE;
}
.node-router .node-type {
  font-size: 13px;
  font-weight: 700;
  color: #1E40AF;
}
.node-router .node-routes {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.route-item {
  font-size: 11px;
  color: #475569;
  padding: 3px 0;
}

.node-orch {
  border-color: #C4B5FD;
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%);
}
.node-orch.clickable {
  cursor: pointer;
}
.node-orch.clickable:hover {
  border-color: #A855F7;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.15);
  transform: translateY(-2px);
}

.node-atomic {
  border-color: #FECACA;
  background: linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%);
}
.node-atomic.clickable {
  cursor: pointer;
}
.node-atomic.clickable:hover {
  border-color: #EF4444;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15);
  transform: translateY(-2px);
}

.node-icon {
  font-size: 20px;
  margin-bottom: 6px;
}
.node-name {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.node-meta {
  font-size: 11px;
  color: var(--text-2);
  margin-bottom: 8px;
}
.node-deps {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}
.dep-badge {
  font-size: 10px;
  font-family: var(--font-mono);
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--text-2);
}
.node-tech {
  font-size: 10px;
  font-family: var(--font-mono);
  color: var(--text-3);
  margin-top: 6px;
  padding-top: 6px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

/* Skill Detail Panel */
.skill-detail-panel {
  background: white;
  border: 2px solid var(--purple);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: 24px;
  animation: slideDown 200ms ease-out;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%);
  border-bottom: 1px solid var(--border);
}
.panel-title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.panel-icon { font-size: 22px; }
.panel-name {
  font-family: var(--font-mono);
  font-size: 15px;
  font-weight: 700;
}
.panel-badge {
  font-size: 10px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.badge-orch {
  background: linear-gradient(135deg, #F3E8FF, #E9D5FF);
  color: #6B21A8;
  border: 1px solid #C4B5FD;
}
.badge-atomic {
  background: linear-gradient(135deg, #FEE2E2, #FECACA);
  color: #991B1B;
  border: 1px solid #FCA5A5;
}
.panel-close {
  background: none;
  border: none;
  font-size: 18px;
  color: var(--text-3);
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 150ms;
}
.panel-close:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text);
}

.panel-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.panel-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.section-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-3);
}
.section-value {
  font-size: 13px;
  color: var(--text);
  line-height: 1.6;
}
.section-value code {
  font-family: var(--font-mono);
  font-size: 12px;
  background: var(--bg-subtle);
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid var(--border);
}
.trigger-word {
  display: inline-block;
  font-size: 11px;
  font-family: var(--font-mono);
  background: var(--bg-subtle);
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--border);
  margin-right: 6px;
  margin-bottom: 6px;
}
.dep-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--bg-subtle);
  border-radius: 6px;
  border: 1px solid var(--border);
  font-size: 12px;
}
.dep-arrow {
  color: var(--purple);
  font-weight: 700;
}
.dep-name {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--text);
}
.dep-desc {
  color: var(--text-2);
  margin-left: auto;
}

@media (max-width: 640px) {
  .info-bar { flex-direction: column; align-items: flex-start; }
  .goal-grid { grid-template-columns: 1fr; }
  .spec-grid { grid-template-columns: 1fr 1fr; }
  .workflow-row { flex-direction: column; }
  .wf-arrow { display: none; }
  .taxonomy-grid { grid-template-columns: 1fr; }
  .dt-grid { grid-template-columns: 1fr; }
  .dimensions-grid { grid-template-columns: 1fr; }
  .layer-nodes { flex-direction: column; }
  .arch-node { min-width: 100%; }
  .arch-legend { flex-direction: column; gap: 8px; }
}
@media (max-width: 480px) {
  .spec-grid { grid-template-columns: 1fr; }
}
</style>
