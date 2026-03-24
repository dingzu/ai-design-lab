# 设计类 Skill 分类研究

> **研究目标**：对现有的设计类 Skill 进行系统化分类，建立清晰的能力边界和调用规则，为后续 Skill 开发提供参考框架。

## 一、设计 Skill 全景图

```
设计类 Skill 体系
├── 静态视觉设计
│   ├── ai-image-generator (通用图像生成)
│   ├── canvas-design (艺术海报/PDF)
│   └── algorithmic-art (算法艺术/p5.js)
│
├── 界面设计与开发
│   ├── frontend-design (前端界面设计)
│   ├── ui-ux-pro-max (UI/UX 设计智能)
│   ├── web-design-guidelines (Web 界面指南)
│   └── web-artifacts-builder (复杂 Web Artifacts)
│
├── 演示文稿设计
│   ├── pptx (PowerPoint 文件操作)
│   ├── work-report-ppt (商务/工作汇报风格)
│   └── artistic-ppt (艺术/创意风格)
│
├── 主题与风格系统
│   ├── theme-factory (主题工厂)
│   ├── zelda-style (塞尔达风格)
│   └── brand-guidelines (品牌指南/Anthropic)
│
├── 用户体验研究
│   ├── ux-journey-map (用户体验地图)
│   └── web-design-guidelines (Web 设计最佳实践)
│
└── 专项设计能力
    ├── pixel-action-game (像素游戏设计)
    ├── slack-gif-creator (Slack GIF 动画)
    └── product-thinking (产品思维/内置能力)
```

---

## 二、核心分类维度

### 2.1 按输出介质分类

| 分类 | Skills | 输出格式 | 典型场景 |
|------|--------|----------|----------|
| **图像类** | ai-image-generator, canvas-design, algorithmic-art | PNG, PDF, SVG | 架构图、信息图、海报、艺术作品 |
| **代码类** | frontend-design, ui-ux-pro-max, web-artifacts-builder | HTML/CSS/JS, React, Vue | 网页、组件、应用界面 |
| **文档类** | pptx, work-report-ppt, artistic-ppt, docx | PPTX, DOCX | 演示文稿、报告、文档 |
| **规范类** | web-design-guidelines, brand-guidelines | Markdown, 审查反馈 | 设计审查、规范检查 |

### 2.2 按设计复杂度分类

| 复杂度 | Skills | 特点 |
|--------|--------|------|
| **低复杂度** | theme-factory, brand-guidelines | 应用预设主题、颜色、字体 |
| **中复杂度** | frontend-design, work-report-ppt | 基于模板/规范的定制化设计 |
| **高复杂度** | canvas-design, ui-ux-pro-max | 从 0 到 1 的创意设计，需要设计哲学 |
| **超高复杂度** | web-artifacts-builder, artistic-ppt | 多组件、多技术栈、AI 生成+精确排版 |

### 2.3 按设计风格分类

| 风格类型 | Skills | 适用场景 |
|----------|--------|----------|
| **商务/专业风格** | work-report-ppt, web-design-guidelines | 工作汇报、团队分享、企业文档 |
| **艺术/创意风格** | artistic-ppt, canvas-design, algorithmic-art | 纪念册、相册、艺术作品、创意项目 |
| **主题化风格** | zelda-style, brand-guidelines | 特定 IP 风格、品牌一致性 |
| **现代互联网风格** | frontend-design, ui-ux-pro-max | Landing Page, Dashboard, SaaS 产品 |

---

## 三、能力边界与调用规则

### 3.1 图像生成类

#### ai-image-generator（通用图像生成器）
- **核心能力**：文生图 + 图生图，支持多种设计风格
- **适用场景**：
  - ✅ 架构图、流程图、对比图、信息图
  - ✅ 技术文档配图、商业演示背景
  - ✅ 基于现有图片的风格转换
- **技术栈**：Python + FLUX.1-dev 模型（可配置其他模型）
- **输出格式**：PNG (1024x1024, 1920x1080, 自定义)
- **调用触发词**：
  - "生成图片", "做一张架构图", "流程图", "信息图"
  - "图生图", "以图生图", "修改这张图"

#### canvas-design（艺术海报设计）
- **核心能力**：从设计哲学到视觉表达的完整流程
- **适用场景**：
  - ✅ 艺术海报、概念设计、品牌视觉
  - ✅ 需要"设计师级"精致输出的场景
- **输出格式**：PDF, PNG
- **两阶段流程**：
  1. 创建设计哲学（.md 文件）
  2. 基于哲学生成视觉作品
- **调用触发词**：
  - "创建海报", "做一张艺术作品", "poster", "art piece"

#### algorithmic-art（算法艺术）
- **核心能力**：使用 p5.js 创建可交互的算法艺术
- **适用场景**：
  - ✅ 生成艺术、粒子系统、Flow Fields
  - ✅ 需要参数化调整的艺术作品
- **输出格式**：HTML (含 p5.js 代码)
- **特点**：支持 seeded randomness 和交互式参数探索

---

### 3.2 界面设计与开发类

#### frontend-design（前端界面设计）
- **核心能力**：创建独特的、生产级前端界面
- **设计理念**：
  - 避免通用 AI 美学（拒绝 Inter/Roboto、紫色渐变）
  - 选择 BOLD 的审美方向（极简/最大化/复古等）
  - 强调排版、色彩、动效、空间构图
- **适用场景**：
  - ✅ Landing Page, Dashboard, React/Vue 组件
  - ✅ 需要视觉冲击力和记忆点的界面
- **技术栈**：HTML/CSS/JS, React, Vue
- **调用触发词**：
  - "创建网页", "设计组件", "beautify UI", "landing page"

#### ui-ux-pro-max（UI/UX 设计智能）
- **核心能力**：
  - 50+ 设计风格（Glassmorphism, Brutalism, Neumorphism...）
  - 97 种配色方案、57 种字体配对
  - 99 条 UX 指南（可访问性、交互、性能）
  - 25 种图表类型
- **适用场景**：
  - ✅ 设计审查、规范检查
  - ✅ 选择配色/字体/风格
  - ✅ 实现特定设计风格（如 Glassmorphism）
- **技术栈**：React, Next.js, Vue, Svelte, SwiftUI, React Native, Flutter
- **集成**：shadcn/ui MCP（组件搜索和示例）
- **调用触发词**：
  - "选择配色", "glassmorphism", "设计审查", "accessibility check"

#### web-design-guidelines（Web 界面指南）
- **核心能力**：审查 UI 代码的可访问性、UX 最佳实践
- **适用场景**：
  - ✅ 代码审查、设计合规检查
- **调用触发词**：
  - "review my UI", "check accessibility", "audit design"

#### web-artifacts-builder（复杂 Web Artifacts）
- **核心能力**：创建多组件、复杂状态管理的 Web 应用
- **技术栈**：React + Tailwind CSS + shadcn/ui
- **适用场景**：
  - ✅ 需要路由、状态管理的复杂应用
  - ✅ 预装 40+ shadcn/ui 组件
- **流程**：
  1. `init-artifact.sh` 初始化
  2. 开发代码
  3. `bundle-artifact.sh` 打包成单文件 HTML
- **调用触发词**：
  - "创建复杂应用", "多页面应用", "shadcn/ui 应用"

---

### 3.3 演示文稿设计类

#### pptx（PowerPoint 文件操作）
- **核心能力**：读取、编辑、创建 .pptx 文件的底层能力
- **适用场景**：
  - ✅ 文件操作、内容提取、模板处理
  - ✅ 被 work-report-ppt 和 artistic-ppt 调用
- **调用触发词**：
  - "打开 pptx", "提取文本", "编辑幻灯片"

#### work-report-ppt（商务/工作汇报风格）
- **核心能力**：生成企业级、结构化的商务演示文稿
- **设计规范**：
  - 暖色渐变背景（#F5F5F7 → #FFE8D6）
  - 现代排版（苹方/思源黑体）
  - 数据图表、结构化布局
- **适用场景**：
  - ✅ 工作汇报、研发分享、全员会、季度总结
- **调用触发词**：
  - "工作汇报PPT", "团队分享", "技术分享PPT", "work report"

#### artistic-ppt（艺术/创意风格）
- **核心能力**：AI 生成背景图 + PptxGenJS 精确排版
- **设计理念**：
  - AI 生成 4K 场景背景
  - 手写字体、宝丽来照片、干花装饰
  - 自然散落排版、倾斜元素
- **适用场景**：
  - ✅ 家庭纪念册、旅行相册、生日祝福、成长记录
- **预设风格**：
  - `watercolor-scrapbook`, `retro-film`, `minimalist-art`, `fairy-tale`
- **依赖**：ai-image-generator (生成背景图)
- **调用触发词**：
  - "纪念册PPT", "相册PPT", "手账风格", "artistic presentation"

---

### 3.4 主题与风格系统

#### theme-factory（主题工厂）
- **核心能力**：为 Artifacts 应用预设主题（10 种）
- **适用场景**：
  - ✅ 快速为幻灯片/文档/网页应用主题
- **调用触发词**：
  - "应用主题", "换个风格", "apply theme"

#### zelda-style（塞尔达风格）
- **核心能力**：提供《塞尔达：旷野之息》风格的 CSS 变量和组件模板
- **适用场景**：
  - ✅ 创建塞尔达风格网页、角色面板
- **设计元素**：
  - 水彩背景、希卡之石面板、心形容器、耐力轮
- **调用触发词**：
  - "塞尔达风格", "Zelda style", "旷野之息风格"

#### brand-guidelines（品牌指南）
- **核心能力**：应用 Anthropic 官方品牌色和排版
- **适用场景**：
  - ✅ Anthropic 相关项目的品牌一致性
- **调用触发词**：
  - "Anthropic 品牌", "brand colors", "company design standards"

---

### 3.5 用户体验研究类

#### ux-journey-map（用户体验地图）
- **核心能力**：生成用户体验地图 HTML 可视化
- **支持模式**：
  - URL 自动检测模式（输入网址自动推断）
  - 手动填写模式
- **输出内容**：
  - 多角色多流程并排展示
  - 触点、情感曲线、AI 推断标注（✦ 虚线）
- **调用触发词**：
  - "用户体验地图", "Journey Map", "分析这个页面的用户体验"

---

### 3.6 专项设计能力

#### pixel-action-game（像素游戏设计）
- **核心能力**：创建像素艺术动作游戏（纯 HTML/CSS/JS）
- **包含**：
  - 关卡/Boss 设计、8-bit 音频合成
  - CRT 效果、像素渲染、位图字体
- **调用触发词**：
  - "像素游戏", "pixel game", "shooting game", "retro game"

#### slack-gif-creator（Slack GIF 动画）
- **核心能力**：创建符合 Slack 约束的 GIF 动画
- **技术细节**：
  - 文件大小 < 10MB
  - 尺寸优化、帧率控制
- **调用触发词**：
  - "做一个 Slack GIF", "animated GIF for Slack"

#### product-thinking（产品思维）
- **核心能力**：内置能力，自动应用于所有交付任务
- **设计理念**：
  - 顺用户的意，而非按我的来
  - 所有交付物都是"产品"
- **无需显式调用**

---

## 四、调用决策树

### 4.1 图像类需求

```
用户说："帮我做一张图"
    │
    ├─ 需要技术架构/流程/信息图？
    │   → ai-image-generator (通用、快速)
    │
    ├─ 需要艺术级海报/视觉作品？
    │   → canvas-design (设计哲学驱动)
    │
    └─ 需要算法艺术/可交互？
        → algorithmic-art (p5.js)
```

### 4.2 界面设计需求

```
用户说："做一个网页/组件"
    │
    ├─ 需要独特视觉风格、避免 AI 感？
    │   → frontend-design (BOLD 审美)
    │
    ├─ 需要应用特定设计风格（Glassmorphism）？
    │   → ui-ux-pro-max (50+ 风格库)
    │
    ├─ 需要复杂多组件应用（shadcn/ui）？
    │   → web-artifacts-builder
    │
    └─ 需要设计审查/合规检查？
        → web-design-guidelines
```

### 4.3 演示文稿需求

```
用户说："做一个 PPT"
    │
    ├─ 工作汇报/团队分享/数据报告？
    │   → work-report-ppt (商务风格)
    │
    ├─ 纪念册/相册/手账/创意？
    │   → artistic-ppt (艺术风格)
    │
    └─ 只是文件操作（打开/提取/编辑）？
        → pptx (底层能力)
```

---

## 五、Skills 之间的依赖关系

```
artistic-ppt
    └─ 依赖: ai-image-generator (生成背景图)
    └─ 依赖: pptx (文件操作)

web-artifacts-builder
    └─ 依赖: shadcn/ui (组件库)
    └─ 依赖: Tailwind CSS, React

ui-ux-pro-max
    └─ 集成: shadcn/ui MCP (组件搜索)

ux-journey-map
    └─ 可选依赖: browser_agent (URL 自动检测模式)
```

---

## 六、设计 Skill 开发规范

### 6.1 命名规范

| 模式 | 示例 | 说明 |
|------|------|------|
| **功能-介质** | `frontend-design`, `canvas-design` | 明确功能和输出介质 |
| **风格-类型** | `artistic-ppt`, `work-report-ppt` | 风格前缀 + 类型 |
| **专项-能力** | `pixel-action-game`, `slack-gif-creator` | 专项领域的专用能力 |

### 6.2 Description 规范

**必须包含**：
1. 触发词（中英文）
2. 核心能力描述
3. 典型使用场景
4. 与类似 Skill 的区别

**示例**（artistic-ppt）：
```yaml
description: "This skill should be used when the user asks to create an 
artistic, creative, or visually rich presentation that goes beyond standard 
corporate style. Trigger words include: '艺术风格PPT', '纪念册PPT', 
'创意PPT', '手账风格', '相册PPT'. For corporate/business presentations, 
use work-report-ppt instead."
```

### 6.3 分类标签建议

为每个 Skill 添加分类标签（在 metadata 中）：

```yaml
---
name: frontend-design
category: "界面设计与开发"
output_format: "HTML/CSS/JS, React, Vue"
complexity: "中复杂度"
style: "现代互联网风格"
---
```

---

## 七、待优化方向

### 7.1 能力空白

| 场景 | 现状 | 建议 |
|------|------|------|
| **移动端设计** | 缺少专门的 Mobile UI Skill | 考虑创建 `mobile-design` Skill |
| **图标设计** | 依赖 ai-image-generator | 考虑创建 `icon-designer` Skill |
| **动效设计** | 分散在各 Skill 中 | 考虑创建 `motion-design` Skill |
| **3D 设计** | 完全空白 | 未来方向：Three.js/Blender 集成 |

### 7.2 重复能力整合

| 重复点 | 涉及 Skills | 建议 |
|--------|-------------|------|
| **品牌色系统** | brand-guidelines, theme-factory | 统一为 `brand-system` |
| **Web 设计规范** | web-design-guidelines, ui-ux-pro-max | 合并审查能力 |

### 7.3 文档完善

**需要补充**：
- [ ] 每个 Skill 添加实际案例（Example 目录）
- [ ] 创建 Skill 调用流程图（Mermaid 图表）
- [ ] 建立 Skill 测试用例库
- [ ] 添加"何时不使用"指南

---

## 八、总结

### 核心发现

1. **分层清晰**：
   - 底层能力层（pptx, 文件操作）
   - 中间能力层（frontend-design, ai-image-generator）
   - 高级场景层（artistic-ppt, ui-ux-pro-max）

2. **风格分化**：
   - 商务 vs 艺术（work-report-ppt vs artistic-ppt）
   - 通用 vs 专项（frontend-design vs zelda-style）

3. **技术栈多样**：
   - Python (AI 图像生成)
   - JavaScript/React/Vue (前端界面)
   - PptxGenJS (演示文稿)
   - p5.js (算法艺术)

### 使用建议

**对于 Skill 开发者**：
- 明确 Skill 边界，避免功能重叠
- 在 description 中清晰说明"何时用"和"何时不用"
- 建立 Skill 间的依赖关系文档

**对于 AI Agent**：
- 根据用户需求的关键词匹配合适的 Skill
- 商务场景优先用商务 Skill，艺术场景优先用艺术 Skill
- 复杂需求考虑组合多个 Skills

**对于最终用户**：
- 使用明确的触发词（如"工作汇报PPT" vs "纪念册PPT"）
- 说明期望的输出格式（PNG, HTML, PPTX）
- 提供风格偏好（商务/艺术/极简/复古）

---

## 附录：完整 Skill 清单

### 设计类 Skills (24个)

| Skill | 分类 | 输出格式 | 复杂度 |
|-------|------|----------|--------|
| ai-image-generator | 静态视觉 | PNG | 中 |
| canvas-design | 静态视觉 | PDF, PNG | 高 |
| algorithmic-art | 静态视觉 | HTML | 高 |
| frontend-design | 界面设计 | HTML/CSS/JS | 中 |
| ui-ux-pro-max | 界面设计 | 多技术栈 | 高 |
| web-design-guidelines | 界面设计 | 审查反馈 | 低 |
| web-artifacts-builder | 界面设计 | HTML | 超高 |
| pptx | 演示文稿 | PPTX | 低 |
| work-report-ppt | 演示文稿 | PPTX | 中 |
| artistic-ppt | 演示文稿 | PPTX | 超高 |
| theme-factory | 主题系统 | CSS/主题 | 低 |
| zelda-style | 主题系统 | CSS/HTML | 低 |
| brand-guidelines | 主题系统 | CSS/主题 | 低 |
| ux-journey-map | 用户体验 | HTML | 中 |
| pixel-action-game | 专项能力 | HTML | 高 |
| slack-gif-creator | 专项能力 | GIF | 中 |
| product-thinking | 专项能力 | 内置能力 | - |
| docx | 文档设计 | DOCX | 低 |
| pdf | 文档设计 | PDF | 低 |
| xlsx | 文档设计 | XLSX | 低 |
| personal-homepage-template | 界面设计 | HTML | 中 |
| remotion-best-practices | 视频设计 | React/视频 | 高 |
| web-dev-workflow | 开发流程 | 流程规范 | - |
| webapp-testing | 测试工具 | 测试报告 | - |

---

**最后更新时间**：2026-03-24  
**维护者**：一寒 (hiro)
