# 图表类型 × 期望拓扑规则

不同可视化类型对应不同的"正确结构"。当用户的图表类型与意图不匹配时，应在 Diff 阶段扣分并在变异建议中推荐正确类型。

---

## 意图 → 图表类型映射

| 核心意图 | 优先推荐类型 | 次选类型 | 不推荐 |
|---------|------------|---------|--------|
| **比较** 多个类别的量级 | BarChart / ColumnChart | BulletChart | PieChart (>5类) |
| **趋势** 随时间变化 | LineChart | AreaChart | BarChart |
| **占比** / 构成 | DonutChart | TreeMap | 3D PieChart |
| **分布** 形态 | Histogram / BoxPlot | ViolinPlot | LineChart |
| **相关性** 两变量 | ScatterPlot | BubbleChart | BarChart |
| **多维对比** | RadarChart | ParallelCoords | 多个PieChart |
| **层级/嵌套** | TreeMap | SunburstChart | BarChart |
| **地理** 空间分布 | ChoroplethMap | BubbleMap | BarChart |
| **异常/预警** 聚焦 | BarChart+高亮 | BulletChart | RadarChart |
| **流量/转化** 漏斗 | FunnelChart | SankeyChart | PieChart |
| **综合仪表盘** | Dashboard (组合) | - | 单图 |

---

## 各类图表期望拓扑规则

### BarChart / ColumnChart（对比类）

```json
{
  "chart_type": "BarChart",
  "required_elements": [
    "category_axis",
    "value_axis",
    "value_labels",
    "consistent_color_scheme"
  ],
  "optional_elements": [
    "baseline_reference_line",
    "sort_order",
    "alert_color_encoding"
  ],
  "anti_patterns": [
    "3D_bars",
    "dual_y_axis_without_justification",
    "too_many_categories_without_scroll",
    "truncated_y_axis"
  ],
  "core_insight_must_be": "最高/最低/差异 一眼可见",
  "max_categories_recommended": 12
}
```

**预警场景加分项**：
- 低于阈值的 bar 使用红色/橙色编码
- 添加阈值参考线 (`threshold_line`)
- 数值标注直接显示在 bar 上

---

### LineChart / AreaChart（趋势类）

```json
{
  "chart_type": "LineChart",
  "required_elements": [
    "time_axis_x",
    "value_axis_y",
    "trend_line",
    "clear_data_markers"
  ],
  "optional_elements": [
    "confidence_band",
    "annotation_for_key_events",
    "trend_direction_indicator"
  ],
  "anti_patterns": [
    "too_many_lines_without_highlight",
    "missing_zero_baseline",
    "spaghetti_chart"
  ],
  "core_insight_must_be": "趋势方向 + 关键转折点 清晰可见",
  "max_series_recommended": 5
}
```

---

### PieChart / DonutChart（占比类）

```json
{
  "chart_type": "DonutChart",
  "required_elements": [
    "percentage_labels",
    "legend_or_direct_labels",
    "color_differentiation"
  ],
  "anti_patterns": [
    "more_than_7_slices",
    "3D_pie",
    "exploding_multiple_slices",
    "missing_percentage_labels"
  ],
  "core_insight_must_be": "最大占比 / 各部分关系 直观清晰",
  "max_slices_recommended": 6
}
```

---

### Heatmap（分布/矩阵类）

```json
{
  "chart_type": "HeatMap",
  "required_elements": [
    "color_scale_legend",
    "row_labels",
    "column_labels",
    "value_cells"
  ],
  "optional_elements": [
    "cell_value_text",
    "clustering_sort"
  ],
  "anti_patterns": [
    "missing_color_legend",
    "too_many_gradient_steps",
    "non_sequential_color_for_sequential_data"
  ],
  "core_insight_must_be": "高值/低值区域 色彩直观可分",
  "color_scale_rule": "发散数据用发散色阶，顺序数据用顺序色阶"
}
```

---

### ScatterPlot / BubbleChart（关系类）

```json
{
  "chart_type": "ScatterPlot",
  "required_elements": [
    "x_axis_label",
    "y_axis_label",
    "data_point_markers"
  ],
  "optional_elements": [
    "regression_line",
    "quadrant_division",
    "color_encoding_third_dimension",
    "size_encoding_fourth_dimension"
  ],
  "anti_patterns": [
    "overplotting_without_transparency",
    "missing_axis_labels",
    "inconsistent_bubble_size_scale"
  ],
  "core_insight_must_be": "相关趋势 / 集群 / 异常点 可识别"
}
```

---

### RadarChart（多维对比）

```json
{
  "chart_type": "RadarChart",
  "required_elements": [
    "dimension_axes",
    "value_polygon",
    "axis_labels",
    "scale_rings"
  ],
  "optional_elements": [
    "reference_polygon_baseline",
    "fill_opacity_for_multiple_entities"
  ],
  "anti_patterns": [
    "too_many_dimensions",
    "inconsistent_axis_scales",
    "missing_scale_rings",
    "using_for_single_entity_trend"
  ],
  "core_insight_must_be": "多维度强弱对比 整体形状可读",
  "max_dimensions_recommended": 8,
  "best_use_case": "对比两个或多个实体的多维度表现"
}
```

> ⚠️ RadarChart **不适合**展示时间趋势或预警聚焦场景，这类意图应使用 BarChart。

---

### TreeMap（层级/占比类）

```json
{
  "chart_type": "TreeMap",
  "required_elements": [
    "size_encoding_value",
    "category_labels",
    "color_differentiation_by_group"
  ],
  "anti_patterns": [
    "too_small_leaf_nodes",
    "missing_value_labels",
    "using_for_time_series"
  ],
  "core_insight_must_be": "最大/最小类别 面积差异直观"
}
```

---

### Dashboard（仪表盘）

```json
{
  "chart_type": "Dashboard",
  "required_elements": [
    "kpi_summary_cards",
    "primary_trend_chart",
    "filter_controls",
    "clear_hierarchy"
  ],
  "layout_rules": {
    "visual_hierarchy": "最重要指标 → 左上 / 顶部",
    "grid_alignment": "对齐网格，避免随意摆放",
    "whitespace": "保留足够呼吸空间"
  },
  "anti_patterns": [
    "too_many_chart_types_competing",
    "inconsistent_color_palette",
    "missing_titles_and_context",
    "chart_junk_decoration"
  ],
  "core_insight_must_be": "30秒内找到最关键指标"
}
```

---

## 图表选择决策树

```
数据是否有时间维度?
  ├─ 是 → 趋势类 (LineChart / AreaChart)
  └─ 否 → 数据是否需要比较?
           ├─ 比较类别量级 → BarChart
           ├─ 比较占比构成 → DonutChart / TreeMap
           ├─ 比较多维度 → RadarChart
           └─ 探索相关性 → ScatterPlot
```
