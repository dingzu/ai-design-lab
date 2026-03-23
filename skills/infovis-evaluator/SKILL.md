---
name: infovis-evaluator
description: Evaluate the quality of information visualizations (charts, dashboards, infographics) using a three-skill matrix: semantic routing (does the chart type match the data intent?), blind visual decoding (can a viewer extract the core insight without context?), and cognitive friction analysis (how much visual noise and complexity exists?). Use this skill whenever the user wants to assess, critique, audit, score, or improve any data visualization — including bar charts, line charts, radar charts, scatter plots, heatmaps, treemaps, dashboards, and custom infographics. Also triggers when users ask "is this chart clear?", "why doesn't this visualization work?", "evaluate this dashboard", "what's wrong with my chart?", or share a visual file/URL/code and ask for feedback. The skill outputs a structured evaluation report with topology diff scores, dimension-level grades, and concrete mutation suggestions. Can also be invoked as a sub-evaluator by the design-evaluator skill for chart/visualization sections within PPT or reports.
version: 1.1.0
parent_skill: design-evaluator
---

# InfoVis 评测技能 (infovis-evaluator)

> **子技能说明**: 本技能可被 `design-evaluator` 作为子评测器调用。当被上层调用时，仅执行 STEP 1–3（不输出完整报告），将评分结果返回给 `design-evaluator` 汇总。

用三维交叉评测矩阵对任意信息可视化进行质量评估，输出结构化报告和改进建议。

## 何时启动本技能

当用户：
- 分享图表代码/截图/URL 并询问质量
- 要求评测、审计、打分某个数据可视化
- 问"这个图表为什么不好理解"、"帮我看看这个 dashboard"
- 提供数据 + 意图，要求判断当前可视化是否合适
- 想改进某个已有图表

---

## 评测流程总览

```
[输入] 数据 / 视觉产物 / 意图
   ↓
[STEP 1] 意图解析 — 推导期望拓扑 (Expected Topology)
   ↓
[STEP 2] 三维评测矩阵
   ├── 技能 A: 信息路由 (LLM)     → Expected Topology JSON
   ├── 技能 B: 盲测解码 (VLM/描述) → Perceived Topology JSON
   └── 技能 C: 认知摩擦力          → Friction Score
   ↓
[STEP 3] 拓扑差异计算 (Diff Engine)
   → 维度评分 + 综合分 + PASS/FAIL
   ↓
[STEP 4] 变异建议 (Mutation Suggestions)
   → 具体代码补丁 / 设计修改指令
```

---

## STEP 1: 意图解析

首先从用户输入中提取或推断以下信息。缺失时主动询问用户。

| 字段 | 说明 | 示例 |
|------|------|------|
| `data_payload` | 数据结构或字段描述 | `{部门, 评分, 时间}` |
| `viewer_intent` | 核心展示意图 | `"高管汇报"` / `"趋势分析"` / `"异常预警"` |
| `audience` | 目标受众 | `"非技术决策者"` / `"数据分析师"` |
| `chart_code_or_image` | 可视化产物（代码/截图/描述） | JSX / SVG / PNG URL |

然后根据 `viewer_intent` × `data_payload` 推导 **Expected Topology**：

```json
{
  "chart_type": "BarChart",           // 期望图表类型
  "core_insight": "评分 < 3.5 预警",   // 核心洞察
  "required_elements": [              // 必须包含的视觉元素
    "alert_color_encoding",
    "threshold_line",
    "value_labels"
  ],
  "hierarchy": "flat",               // 数据层级
  "emphasis": ["outlier", "alert"]   // 强调重点
}
```

> 图表类型选择参考：`references/chart-types.md`

---

## STEP 2: 三维评测矩阵

对每个维度逐一执行，结果存入评分对象。

### 技能 A — 信息路由技能 (Semantic Router)

**角色**: 从数据意图推导结构性期望，作为"标准答案"。

执行步骤：
1. 解析 `viewer_intent` → 语义向量
2. 匹配图表类型库（见 `references/chart-types.md`）
3. 推导 `required_elements` 列表
4. 验证 `chart_code_or_image` 的声明类型是否匹配

输出：
```json
{
  "expected_topology": { ... },
  "declared_chart_type": "RadarChart",
  "type_match": false
}
```

---

### 技能 B — 盲测解码技能 (Blind Decoder)

**角色**: 模拟"第一次看到这个图"的观察者，不使用任何上下文。

执行步骤：
1. 仅看图表代码/描述，**不参考** Expected Topology
2. 描述你感知到的图表类型和主要视觉元素
3. 尝试提取核心洞察：用户能否在 5 秒内读出主要信息？
4. 记录感知拓扑 (Perceived Topology)

关键问题：
- 图表类型是否一眼可辨？
- 最重要的数据点是否被视觉强调？
- 是否存在让人困惑的视觉元素？

输出：
```json
{
  "perceived_topology": {
    "chart_type": "RadarChart",
    "core_insight_found": false,
    "insight_description": "未找到明确预警信息"
  },
  "readability_score": 0.2,
  "confusion_elements": ["background_lines", "no_threshold"]
}
```

---

### 技能 C — 认知摩擦力分析 (Friction Analyzer)

**角色**: 量化视觉负担，识别噪声源。

执行步骤：
1. 扫描视觉元素数量（图例、标注、网格线等）
2. 评估色彩对比度（高对比 vs. 低对比）
3. 检测背景干扰（装饰性元素、过密网格线）
4. 计算信息密度（数据墨水比 data-ink ratio）

评分指标（各 0–1）：

| 指标 | 计算方式 | 权重 |
|------|---------|------|
| `noise_score` | 装饰元素数 / 总元素数 | 30% |
| `contrast_score` | 1 - (前景色/背景色对比度归一化) | 25% |
| `density_score` | 元素数 / 有效视口面积 | 25% |
| `hierarchy_clarity` | 视觉层次分明度主观评分 | 20% |

综合摩擦力：`friction = weighted_avg(scores)`
- `< 0.3`: 低 (良好)
- `0.3–0.6`: 中 (可接受)
- `> 0.6`: 高 (需改进)

输出：
```json
{
  "friction_level": "高",
  "friction_score": 0.71,
  "noise_sources": ["background_grid_lines: 17", "legend_overload"],
  "contrast_ratio": 1.8
}
```

> 详细评分规则参考：`references/eval-dimensions.md`

---

## STEP 3: 拓扑差异计算 (Diff Engine)

汇聚三个技能的输出，计算综合分数。

### 评分矩阵

| 维度 | 权重 | 计算方式 |
|------|------|---------|
| 图表类型匹配 | 20% | `expected.chart_type == perceived.chart_type` |
| 核心洞察可读性 | 35% | `core_insight_found` × readability_score |
| 必要元素覆盖率 | 25% | `found_elements / required_elements` |
| 认知摩擦力惩罚 | 20% | `1 - friction_score` |

```
total_score = Σ(维度得分 × 权重) × 10   // 满分 10 分
```

### 判定规则

| 分数 | 结果 | 行动 |
|------|------|------|
| ≥ 8.0 | ✅ PASS | 输出优化建议（可选） |
| 6.0–7.9 | ⚠️ WARN | 输出改进建议 |
| < 6.0 | ❌ FAIL | 触发变异建议，提供补丁代码 |

---

## STEP 4: 变异建议 (Mutation Guide)

**当评分 < 8.0 时，提供具体的改进指令。**

格式要求：
1. 每条建议对应一个具体的失分维度
2. 提供可直接执行的代码片段或设计指令
3. 说明修改后预期的分数提升

示例模板：
```
🔧 修复 #1: 图表类型错误 (−2.0 分)
  当前: RadarChart
  建议: BarChart（数据对比意图更匹配）
  代码: return <BarChart data={data} highlight={alerts} />;

🔧 修复 #2: 缺失预警强调 (−3.5 分)
  添加: data.filter(d => d.score < 3.5) → highlight
  添加: applyAlertTheme(alerts, 'high_contrast')
  
🔧 修复 #3: 背景噪声 (−1.4 分)
  移除: 17 条背景网格线
  调用: disableBackgroundNoise()
```

> 各类图表的变异策略参考：`references/mutation-guide.md`

---

## 输出格式

使用 `assets/report-template.md` 中的模板输出评测报告。

报告包含：
1. **评测摘要**（一段话总结）
2. **三维评分表**（A/B/C 技能得分）
3. **拓扑 Diff 明细**（期望 vs 感知对比）
4. **综合分数** + PASS/WARN/FAIL 状态
5. **变异建议列表**（按优先级排序）

---

## 不同可视化类型的处理

本技能支持以下可视化类型，各类型有不同的期望拓扑规则：

- **对比类**: BarChart, ColumnChart, BulletChart
- **趋势类**: LineChart, AreaChart, StreamGraph
- **比例类**: PieChart, DonutChart, TreeMap, Waffle
- **分布类**: Histogram, BoxPlot, ViolinPlot, HeatMap
- **关系类**: ScatterPlot, BubbleChart, NetworkGraph
- **多维类**: RadarChart, ParallelCoordinates
- **仪表盘**: Dashboard (多图组合)
- **叙事类**: 信息图 (Infographic)

> 各类型的期望拓扑规则见 `references/chart-types.md`

---

## 快速评测模式

如果用户只想要快速反馈（不需要完整报告），可以简化为：

1. 识别图表类型
2. 给出最关键的 1-3 个问题
3. 每个问题附一条具体改进建议

询问用户："需要完整评测报告，还是快速反馈？"
