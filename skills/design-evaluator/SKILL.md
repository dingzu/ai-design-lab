---
name: design-evaluator
description: Universal design quality evaluator for any communication artifact — including data visualizations (charts, dashboards), presentations (PPT/Keynote/slides), reports (design reports, research reports, business documents), and infographics. Use this skill when the user wants to evaluate, critique, score, audit, or improve ANY visual or document artifact. Triggers on phrases like "evaluate this", "what's wrong with my PPT", "critique this slide deck", "score this dashboard", "is this report clear", "help me improve this design", "review this presentation", "check this visualization", "evaluate my poster", "critique my infographic", "评测这张截图", "帮我看看这张图", "这个设计怎么样", "screenshot review", "图片设计评测". Also triggers when users share a design image (screenshot, PNG, JPG) with any feedback-seeking phrasing — even without explicit evaluation keywords. Also triggers when users say "auto-improve this until it passes", "keep iterating until it's good", "自动优化直到合格", "帮我迭代优化", "自进化", "反复改直到达标". The skill identifies content type, runs shared communication-quality dimensions (readability, visual hierarchy, audience alignment, cognitive load), dispatches to type-specific sub-evaluators, and — when requested — runs a self-evolution loop: Evaluate → Diff → Mutate → Re-evaluate, iterating until the score reaches the pass threshold or max iterations are hit. For InfoVis self-evolution, delegates to the infovis-autoevo skill.
version: 2.0.0
---

# 通用设计评测技能 (design-evaluator)

评测任意视觉传达产物的质量。通过**共同维度层**+**类型特化子评测器**的二层架构，支持图表、PPT、报告、信息图等所有内容类型。

---

## 架构总览

```
[输入] 任意设计产物
   ↓
[Layer 0] 内容类型识别 & 意图解析
   ↓
[Layer 1] 共同维度评测 (4项, 适用所有类型)
   ├── D1: 可读性 & 信息层级
   ├── D2: 受众对齐
   ├── D3: 认知负担
   └── D4: 视觉一致性
   ↓
[Layer 2] 类型特化子评测器 (按内容类型派发)
   ├── infovis-evaluator  → 图表/仪表盘/信息图
   ├── [PPT rules]        → 演示文稿
   ├── [report rules]     → 文档/报告
   └── [poster rules]     → 海报/展板
   ↓
[Layer 3] 评分合并 & 变异建议
   → 综合报告输出
```

详细类型路由规则见 `references/content-routing.md`

---

## Layer 0: 内容类型识别

收到用户输入后，首先判断内容类型。

### 识别信号

| 用户输入特征 | 推断类型 |
|------------|---------|
| 包含 .pptx / .key / "幻灯片" / "slide" / "演讲" | PPT |
| 包含图表代码(JSX/echarts/d3) / "dashboard" / "chart" | InfoVis |
| 包含 .pdf / "报告" / "文档" / 多段落文字排版 | Report |
| 包含 "海报" / "poster" / "展板" / 单页大版面 | Poster |
| 包含 "信息图" / "infographic" / 混合图文排版 | Infographic |

**无法判断时**：直接询问用户：
> "我看到你分享了一个设计产物。请问它是：
> A) 数据图表/仪表盘  B) PPT演示文稿  C) 报告/文档  D) 海报/信息图"

### 意图信息收集

无论何种类型，都需要确认以下信息（缺失时询问用户）：

```yaml
content_type:     # 上方识别结果
viewer_intent:    # "说服高管" / "数据汇报" / "教学培训" / "品牌宣传" 等
audience:         # "技术团队" / "非技术决策者" / "公众" / "学术同行"
context:          # "线下演讲" / "异步阅读" / "打印分发" / "线上展示"
artifact:         # 具体内容（代码/截图/文字描述/文件URL）
```

---

## Layer 1: 共同评测维度

这四个维度对所有内容类型通用，先执行。

### D1 — 可读性 & 信息层级 (0–10分)

**核心问题**：内容是否有清晰的阅读路径？最重要的信息是否最突出？

评分项：
- **主标题/核心观点清晰度** (0–3): 主要信息能否在3秒内被识别
- **视觉层级完整性** (0–4): 是否有明显的一级/二级/三级信息区分（字号、粗细、颜色、位置）
- **阅读流引导** (0–3): 内容是否有自然的视线引导路径（Z型/F型/居中聚焦等）

常见扣分点：
- 所有文本字号相同，没有层次感
- 最重要的结论被埋在正文中间
- 视觉重量均匀分布，没有焦点
- 缺少标题或标题信息量不足

---

### D2 — 受众对齐 (0–10分)

**核心问题**：设计语言是否匹配目标受众的认知水平和期望？

评分项：
- **专业术语密度适配** (0–3): 术语密度是否与受众专业背景匹配
- **信息颗粒度适配** (0–3): 细节层次是否符合受众决策需求
- **视觉风格适配** (0–4): 设计风格是否符合场景（正式/轻松，严谨/创意）

| 受众类型 | 期望风格 | 信息颗粒度 |
|---------|---------|----------|
| 高管/决策者 | 简洁、结论前置、配色专业 | 结论+关键数据，省略过程 |
| 技术团队 | 精确、含细节、可接受密度高 | 方法论+完整数据 |
| 公众/非专业 | 直观、视觉化、低术语密度 | 故事化，避免专业符号 |
| 学术同行 | 严谨、引用规范、数据完整 | 完整方法、置信区间等 |

---

### D3 — 认知负担 (0–10分)

**核心问题**：用户需要消耗多少认知资源才能提取信息？

评分项（参考 infovis-evaluator 的摩擦力分析，拓展为通用版）：

- **视觉密度** (0–3): 单屏信息量是否合适
- **干扰元素** (0–3): 纯装饰性元素、不必要的动效、背景图案
- **一致性** (0–4): 颜色、字体、图标风格是否全程统一

摩擦力快速判断：
```
高认知负担信号：
  ✗ 一页超过 5 个独立信息点
  ✗ 超过 3 种字体
  ✗ 超过 5 种主要颜色（不含灰阶）
  ✗ 混用多种图标风格
  ✗ 背景图案影响文字可读性
  ✗ 动效超过功能需要（PPT场景）
```

---

### D4 — 视觉一致性 (0–10分)

**核心问题**：整体设计是否有统一的设计语言？

评分项：
- **调色板一致性** (0–3): 颜色使用是否遵循一套系统
- **排版一致性** (0–3): 字体组合、间距规则是否统一
- **组件/图标一致性** (0–4): 重复出现的元素是否保持相同风格

**共同维度综合分 = (D1×0.3 + D2×0.2 + D3×0.3 + D4×0.2)**

---

## Layer 2: 类型特化子评测器

根据 Layer 0 识别的内容类型，调用对应的专项规则。

### 📊 数据可视化 → infovis-evaluator

调用 `infovis-evaluator` skill 的完整流程：
- 技能A（信息路由）: 图表类型匹配 + 期望拓扑
- 技能B（盲测解码）: 5秒可读性 + 感知拓扑
- 技能C（认知摩擦力）: 噪声/对比度/密度

特化分数权重：
```
InfoVis最终分 = Layer1共同分 × 0.40 + infovis-evaluator专项分 × 0.60
```

---

### 📑 PPT / 演示文稿 → PPT 专项规则

详细规则见 `references/ppt-evaluator.md`，核心维度：

**P1 — 叙事结构 (0–10)**
- 是否有清晰的故事弧：情境→冲突→解决方案→行动号召
- 开场是否建立了受众关心的问题
- 结尾是否有明确的 Next Step

**P2 — 单页原则遵守度 (0–10)**
- 每张 slide 是否只有一个核心观点
- 标题是否是"观点句"而非"主题词"
- 正文是否支撑标题观点而非独立展开

**P3 — 演讲/阅读双模式适配 (0–10)**
- 内容是否在无演讲者时仍可独立理解（文档型PPT）
- 或者是否足够精简，配合演讲者口述（演讲型PPT）
- 是否在两者之间尴尬地妥协（常见问题）

特化分数权重：
```
PPT最终分 = Layer1共同分 × 0.35 + PPT专项分(P1+P2+P3均值) × 0.65
```

---

### 📄 报告/文档 → Report 专项规则

详细规则见 `references/report-evaluator.md`，核心维度：

**R1 — 摘要质量 (0–10)**
- 执行摘要/摘要段是否包含：背景+发现+建议
- 能否仅读摘要获得完整决策信息

**R2 — 结构导航 (0–10)**
- 目录/大纲是否清晰
- 标题体系是否遵循层级逻辑
- 长文档是否有章节过渡语

**R3 — 数据呈现质量 (0–10)**
- 数据是否以图表而非纯数字呈现
- 图表是否有独立可读的标题（不依赖正文）
- 数字是否有单位和上下文

特化分数权重：
```
Report最终分 = Layer1共同分 × 0.40 + Report专项分(R1+R2+R3均值) × 0.60
```

---

### 🖼️ 海报/信息图 → Poster 专项规则

详细规则见 `references/poster-evaluator.md`（待建），核心维度：

**O1 — 瞬时吸引力 (0–10)**
- 3米外能否识别主题
- 主视觉是否足够强烈和独特

**O2 — 信息提取路径 (0–10)**
- 是否有引导眼球的视觉流
- 核心信息点数量是否 ≤ 5

**O3 — 品牌/主题一致性 (0–10)**
- 色彩和字体是否与主题或品牌一致

特化分数权重：
```
Poster最终分 = Layer1共同分 × 0.35 + Poster专项分(O1+O2+O3均值) × 0.65
```

---

### 🎨 信息图 → Infographic 专项规则

信息图兼具数据传达（InfoVis特征）和视觉叙事（Poster特征），调用混合模式。

**I1 — 信息架构清晰度 (0–10)**
- 内容是否按逻辑分区（流程/对比/层次/关系）
- 各分区边界是否清晰，读者能否快速定位感兴趣的区块

**I2 — 数据/内容视觉化程度 (0–10)**
- 数据是否以图形而非纯文字呈现
- 图形编码是否准确（大小/颜色/位置对应正确变量）

**I3 — 叙事连贯性 (0–10)**
- 是否有阅读顺序引导（箭头/编号/视觉流）
- 整体是否讲述了一个完整故事而非信息堆砌

特化分数权重：
```
Infographic最终分 = Layer1共同分 × 0.40 + Infographic专项分(I1+I2+I3均值) × 0.60
```

> 注：若信息图以纯数据可视化为主（无明显叙事结构），可直接路由到 InfoVis 分支（调用 infovis-evaluator）。

---

## Layer 3: 评分合并 & 报告输出

### 综合评分

```
综合分 = Layer1共同分(0–10) × 共同权重
       + Layer2专项分(0–10) × 专项权重

(权重见各类型定义，共同:专项 约为 35~40% : 60~65%)
```

### 状态判定

| 综合分 | 状态 | 建议行动 |
|-------|------|---------|
| ≥ 8.5 | ✅ 优秀 | 可直接使用，记录最佳实践 |
| 7.0–8.4 | ✅ PASS | 可使用，建议轻微优化 |
| 5.0–6.9 | ⚠️ WARN | 需修复核心问题后使用 |
| < 5.0 | ❌ FAIL | 需要重要重构 |

### 变异建议优先级

- **P0 (必须)**: 任一维度分 < 4.0
- **P1 (强烈建议)**: 任一维度分 4.0–6.0
- **P2 (可选优化)**: 所有维度分 > 6.0 时的锦上添花

---

## 快速调用说明

### 完整模式（默认）
用户说"评测这个PPT" → 执行完整 Layer 0-3 流程，输出结构化评测报告

### 快速模式
用户说"快速看一下" / "随便说说" / "quick check" → 进入快速模式

**快速模式执行规范**：
- **跳过**：不询问 viewer_intent / audience（除非已知）
- **跳过**：不执行 Layer 2 专项子维度，仅用 Layer 1 共同维度（D1-D4）快速扫描
- **跳过**：不输出分数和权重计算过程
- **输出格式**（固定，不可扩展）：
  ```
  总体印象: {一句话概括，≤20字}

  Top 3 问题:
  1. [{维度}] {具体问题描述}
  2. [{维度}] {具体问题描述}
  3. [{维度}] {具体问题描述}

  最快修复: {优先做哪一项，一句话}
  ```

**默认选择**：若用户未指定，执行完整模式。

---

## Layer 4: 自进化引擎 (Auto-Evolution)

当用户说"帮我迭代优化"、"自动改到合格"、"反复优化直到达标"时，在 Layer 3 评测完成后激活此层。

### 自进化 vs 单次评测

| 模式 | 触发 | 行为 |
|------|------|------|
| **单次评测** | "评测这个" | 执行 Layer0-3，输出报告 + 建议 |
| **自进化** | "优化到达标" / "自动迭代" | 循环执行：评测 → Diff → 变异 → 再评测 |

### 类型路由

**InfoVis (图表/仪表盘)**：
→ 转交 `infovis-autoevo` skill 执行完整自进化（专化版，阈值 9.6）

**PPT / 报告 / 海报**：
→ 在本 skill 内执行通用自进化循环（见下方），阈值 **8.5 分**

### 通用自进化循环 (非 InfoVis 类型)

完整协议见 `references/autoevo-protocol.md`，核心循环：

```
PHASE 0: 初始化进化上下文
  session_id, pass_threshold=8.5, max_iterations=4
  known_failures=[], design_constraints=[], evolution_log=[]

LOOP (最多 max_iterations 次):
  PHASE 1: 调用 Layer1+Layer2 执行评测 → score
  
  PHASE 2: 判定
    score >= 8.5  → BREAK → 输出成功报告
    iter >= max   → BREAK → 输出失败报告(附最优版本)
  
  PHASE 3: Diff 差异计算
    对比每个维度的 expected vs actual
    生成 diff_report = { missing, violated, score_breakdown }
  
  PHASE 4: 变异补丁生成
    根据 diff_report 生成 mutation_patches (P0优先)
    注入已知失败模式 known_failures，避免重复错误
    输出具体改进指令（可操作的文字/代码建议）
  
  PHASE 5: 更新进化上下文
    evolution_log.append(本轮记录)
    known_failures.extend(本轮违规项)
    design_constraints.extend(本轮新约束)
    iter += 1
  
  → 将 mutation_patches 附加到下一轮输入，重复循环
```

### 进化上下文结构

```json
{
  "session_id": "evo-{type}-{timestamp}",
  "content_type": "PPT | Report | Poster",
  "pass_threshold": 8.5,
  "max_iterations": 4,
  "current_iteration": 0,
  "best_score": 0,
  "best_iteration": 0,
  "evolution_log": [
    {
      "iteration": 1,
      "score": 6.2,
      "dimension_scores": { "D1": 5, "D2": 7, "P1": 5, "P2": 6 },
      "mutation_patches": ["...", "..."],
      "artifact_snapshot": "第1轮内容摘要"
    }
  ],
  "known_failures": [],
  "design_constraints": [],
  "accumulated_insights": {
    "common_weak_dims": [],
    "effective_mutations": []
  }
}
```

### 变异补丁格式 (通用版)

```
🔧 变异补丁 #N — 本轮第{iter}次 (总失分 -{loss})

[维度: {dim_name}] P{priority} ❌ 当前分: {score}
  问题: {specific_problem}
  根因: {why_it_fails}
  修复指令: {actionable_instruction}
  验证方式: {how_to_check_it_worked}

[已知失败模式(勿重蹈)]
  {known_failures_list}
```

### 迭代报告输出

**成功**（score ≥ 8.5）：
```
✅ 自进化完成 — 第{N}轮达标
最终分: {score}/10  |  迭代轮数: {N}  |  类型: {content_type}

迭代进化轨迹:
  第1轮: {score_1} → 主要问题: {issue_1}
  第2轮: {score_2} → 修复了: {fix_2}
  第N轮: {final_score} ✅

最终版本改进内容:
{final_artifact_delta}
```

**失败**（达到最大迭代次数）：
```
❌ 迭代结束 — 未达标
最高分: {best_score}/10（第{best_iter}轮）  |  目标: 8.5
阻塞原因: {root_cause}

建议人工介入:
{manual_intervention_points}
```

### 进化洞察积累

每轮结束后累积以下洞察，用于后续轮次的生成约束：

| 洞察维度 | 说明 | 用途 |
|---------|------|------|
| `weak_dimensions` | 反复低分的维度 | 重点强化方向 |
| `failed_mutations` | 上一轮补丁未生效的改动 | 避免无效重复 |
| `effective_mutations` | 有效提升分数的改动 | 在其他场景复用 |
| `structural_blockers` | 导致无法达标的根本原因 | 触发人工介入建议 |

---

## 参考文件

- **`references/content-routing.md`** — 类型识别决策树 + 调用协议
- **`references/ppt-evaluator.md`** — PPT专项：叙事结构/单页原则/模式适配
- **`references/report-evaluator.md`** — Report专项：摘要质量/结构导航/数据呈现
- **`references/autoevo-protocol.md`** — 通用自进化完整状态机协议
