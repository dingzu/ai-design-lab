# 验证用例库 (Case Library)

标准化验证 Case 集合，用于测试自进化流水线的收敛能力。

---

## Case 格式说明

每个 Case 包含：
- **输入**: `data_payload` + `viewer_intent` + `audience`
- **期望拓扑**: 正确答案（Expected Topology）
- **常见错误方向**: 生成器容易犯的错误（用于验证修复能力）
- **通过标准**: 达到 9.6 分需要的关键元素

---

## Case #1: 电商部门评分预警

```json
{
  "case_id": "case-001",
  "name": "电商部门评分低于阈值预警",
  "data_payload": {
    "departments": ["电商", "物流", "客服", "运营", "技术"],
    "scores": [2.8, 4.1, 3.2, 4.7, 3.9],
    "threshold": 3.5,
    "period": "2024-Q1"
  },
  "viewer_intent": "高管汇报 - 预警聚焦",
  "audience": "非技术决策者",
  "expected_topology": {
    "chart_type": "BarChart",
    "core_insight": "电商(2.8)和客服(3.2)低于预警线3.5",
    "required_elements": [
      "threshold_line_at_3.5",
      "alert_color_encoding_below_threshold",
      "value_labels_on_bars",
      "department_labels"
    ],
    "emphasis": ["outlier_low", "alert"]
  },
  "common_mistakes": [
    "使用 RadarChart（无法清晰呈现阈值比较）",
    "使用 PieChart（无法表达连续数值和阈值）",
    "缺失预警线",
    "所有柱子同色（无法区分预警状态）"
  ],
  "pass_requirements": [
    "图表类型为 BarChart 或 ColumnChart",
    "存在明确的 3.5 阈值线",
    "低于阈值的部门使用警告色（红/橙）高亮",
    "所有数值直接标注在柱子上",
    "视觉上5秒内可识别预警部门"
  ]
}
```

---

## Case #2: 销售额月度趋势

```json
{
  "case_id": "case-002",
  "name": "销售额月度趋势与目标达成",
  "data_payload": {
    "months": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    "actual_sales": [1200, 980, 1450, 1680, 1320, 1890],
    "target_sales": [1300, 1300, 1400, 1600, 1500, 1800],
    "unit": "万元"
  },
  "viewer_intent": "趋势分析 - 目标达成率追踪",
  "audience": "销售管理层",
  "expected_topology": {
    "chart_type": "LineChart",
    "core_insight": "整体上升趋势，6月超额完成目标",
    "required_elements": [
      "dual_line_actual_vs_target",
      "fill_area_between_lines",
      "value_labels_at_data_points",
      "month_axis_labels",
      "legend_actual_vs_target",
      "final_value_annotation"
    ],
    "emphasis": ["trend_up", "goal_achievement"]
  },
  "common_mistakes": [
    "使用 BarChart（趋势感不足）",
    "只显示实际值，缺失目标线",
    "无面积填充（目标差距不直观）",
    "X轴无时间标注"
  ],
  "pass_requirements": [
    "图表类型为 LineChart 或 AreaChart",
    "同时显示实际值和目标线",
    "6月超额完成有视觉强调",
    "趋势方向清晰",
    "图例清晰区分两条线"
  ]
}
```

---

## Case #3: 产品满意度多维对比

```json
{
  "case_id": "case-003",
  "name": "产品A/B/C 六维度满意度对比",
  "data_payload": {
    "products": ["Product A", "Product B", "Product C"],
    "dimensions": ["易用性", "性能", "价格", "外观", "售后", "可靠性"],
    "scores": {
      "Product A": [8.5, 7.2, 6.1, 8.8, 7.5, 8.1],
      "Product B": [6.3, 9.1, 8.4, 7.2, 6.8, 8.9],
      "Product C": [7.8, 7.5, 9.2, 7.9, 8.3, 7.6]
    }
  },
  "viewer_intent": "多维属性竞品对比",
  "audience": "产品经理",
  "expected_topology": {
    "chart_type": "RadarChart",
    "core_insight": "A 在外观/易用性领先，B 在性能/可靠性领先，C 价格最优",
    "required_elements": [
      "three_series_overlaid",
      "dimension_labels_on_axes",
      "value_scale_0_to_10",
      "distinct_colors_per_product",
      "legend",
      "fill_area_per_product"
    ],
    "emphasis": ["per_dimension_leader"]
  },
  "common_mistakes": [
    "使用 BarChart（无法同时展示多产品多维度）",
    "使用 PieChart（完全不合适）",
    "维度标签缺失",
    "三个产品颜色相近难以区分"
  ],
  "pass_requirements": [
    "图表类型为 RadarChart",
    "三个产品同时叠加显示",
    "每个维度都有清晰标签",
    "填充透明度使重叠区域可见",
    "图例清晰标注产品名称"
  ]
}
```

---

## Case #4: 用户漏斗转化分析

```json
{
  "case_id": "case-004",
  "name": "电商用户转化漏斗",
  "data_payload": {
    "stages": ["访问", "浏览商品", "加入购物车", "下单", "支付完成"],
    "users": [10000, 6500, 2800, 1200, 980],
    "conversion_rates": [null, "65%", "43%", "43%", "82%"]
  },
  "viewer_intent": "转化漏斗分析 - 找出流失最大环节",
  "audience": "运营分析师",
  "expected_topology": {
    "chart_type": "FunnelChart",
    "core_insight": "浏览→购物车转化率最低(43%)，是最大流失环节",
    "required_elements": [
      "funnel_shape_visualization",
      "stage_labels",
      "user_count_labels",
      "conversion_rate_labels_between_stages",
      "highlight_biggest_drop"
    ],
    "emphasis": ["bottleneck_stage"]
  },
  "common_mistakes": [
    "使用 LineChart（无法表达漏斗概念）",
    "使用 BarChart（丢失漏斗视觉隐喻）",
    "缺少各阶段转化率标注",
    "未高亮最大流失环节"
  ],
  "pass_requirements": [
    "图表类型为 FunnelChart 或带梯形视觉的 BarChart",
    "各阶段标注转化率",
    "最大流失环节（浏览→购物车）有视觉高亮",
    "用户数量标注清晰"
  ]
}
```

---

## Case #5: 区域销售分布热力图

```json
{
  "case_id": "case-005",
  "name": "全国销售额区域热力分布",
  "data_payload": {
    "regions": {
      "华北": 4520,
      "华东": 8930,
      "华南": 7640,
      "华中": 3210,
      "西南": 2890,
      "西北": 1560,
      "东北": 2340
    },
    "unit": "万元",
    "period": "2024年"
  },
  "viewer_intent": "地域分布 - 识别强势和薄弱区域",
  "audience": "战略规划部门",
  "expected_topology": {
    "chart_type": "ChoroplethMap 或 HeatMap",
    "core_insight": "华东最强(8930万)，西北最弱(1560万)，需重点投入西部",
    "required_elements": [
      "color_gradient_encoding",
      "region_labels",
      "value_annotations",
      "color_legend_scale",
      "max_min_highlight"
    ],
    "emphasis": ["geographic_pattern", "extreme_values"]
  },
  "common_mistakes": [
    "使用 PieChart（无法传达地理空间信息）",
    "使用 LineChart（无地域概念）",
    "颜色渐变不直观（所有区域颜色相近）",
    "缺少数值标注"
  ],
  "pass_requirements": [
    "图表类型体现地域分布（Map 或 HeatMap）",
    "颜色深浅清晰编码销售额高低",
    "最高和最低区域有明确标注",
    "颜色图例完整"
  ]
}
```

---

## Case #6: PPT三栏信息图

```json
{
  "case_id": "case-006",
  "name": "产品核心优势三栏信息图",
  "data_payload": {
    "title": "产品三大核心优势",
    "points": [
      {
        "icon": "rocket",
        "title": "高性能",
        "description": "响应速度提升 3 倍，支持百万级并发"
      },
      {
        "icon": "money",
        "title": "低成本",
        "description": "相比同类产品降低 40% 运营成本"
      },
      {
        "icon": "puzzle",
        "title": "易部署",
        "description": "5 分钟完成部署，零代码配置"
      }
    ]
  },
  "viewer_intent": "PPT汇报 - 并列展示三个优势",
  "audience": "C 级高管",
  "expected_topology": {
    "chart_type": "InfoGraphic_3Column",
    "core_insight": "三个优势并列、同等重要，各有核心数据支撑",
    "required_elements": [
      "three_equal_columns",
      "icon_per_column",
      "title_per_column",
      "key_metric_highlight",
      "consistent_color_theme",
      "adequate_whitespace"
    ],
    "emphasis": ["parallel_structure", "key_numbers"]
  },
  "common_mistakes": [
    "使用条形图（不适合文字型并列优势）",
    "列布局不均等（视觉失衡）",
    "关键数字未高亮（3倍、40%、5分钟）",
    "背景色太重（文字可读性差）"
  ],
  "pass_requirements": [
    "三栏等宽布局",
    "每栏包含图标、标题、关键数字、描述",
    "关键数字（3倍/40%/5分钟）视觉突出",
    "整体风格专业适合高管汇报"
  ]
}
```

---

## 使用方式

### 单 Case 验证

```
[用户输入]
使用 Case #1 的数据验证可视化自进化流水线

[流水线执行]
data_payload = case-001.data_payload
viewer_intent = case-001.viewer_intent
→ 运行 PHASE 0-5
→ 目标: 评测分数 ≥ 9.6
```

### 全量 Case 回归测试

```
[用户输入]
运行所有 Case 进行批量验证

[批量执行]
for case in [case-001 to case-006]:
    run_pipeline(case)
    record_result(case_id, final_score, iterations, status)

输出批量报告
```

### 自定义 Case

用户可以按以下格式提供自定义 Case：

```json
{
  "case_id": "custom-001",
  "name": "自定义 Case 描述",
  "data_payload": { ... },
  "viewer_intent": "可视化意图",
  "audience": "目标受众"
}
```

`expected_topology` 和 `pass_requirements` 由流水线的 STEP 1（意图解析）自动推导，无需手动提供。
