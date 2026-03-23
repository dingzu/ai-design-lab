# 变异策略指南 (Mutation Guide)

当 Diff 评分 < 8.0 时，根据失分维度选择对应的变异策略。

---

## 变异优先级规则

1. **图表类型错误** → 优先级 P0，必须修复
2. **核心洞察不可见** → 优先级 P0，必须修复
3. **认知摩擦力高** → 优先级 P1，强烈建议
4. **必要元素缺失** → 优先级 P1，强烈建议
5. **布局优化** → 优先级 P2，可选改进

---

## 按失分维度的变异策略

### M1 — 图表类型替换

**触发条件**: A1 < 2 分（类型不匹配）

```
策略: 根据 viewer_intent 替换图表类型
步骤:
  1. 确认正确图表类型（参考 chart-types.md 映射表）
  2. 保留原始数据处理逻辑
  3. 替换渲染组件
  4. 调整数据映射（x/y轴、颜色编码等）

代码模板:
  // 原始: <RadarChart data={data} />
  // 变异后（对比场景）:
  const render = (data) => {
    return <BarChart
      data={data}
      x="category"
      y="value"
      sortBy="value"
      direction="horizontal"
    />;
  }
```

---

### M2 — 预警/强调视觉注入

**触发条件**: viewer_intent 含预警/异常，但 B3 < 2 分

```
策略: 注入条件色彩编码 + 阈值参考线
步骤:
  1. 从 config 中提取阈值条件
  2. 过滤出预警数据点
  3. 应用高对比度颜色主题
  4. 添加阈值参考线

代码模板:
  const ALERT_THRESHOLD = 3.5;
  
  const alerts = data.filter(d => d.score < ALERT_THRESHOLD);
  const normal = data.filter(d => d.score >= ALERT_THRESHOLD);
  
  const colorScale = d => d.score < ALERT_THRESHOLD
    ? '#e3434c'   // 预警红
    : '#4a9a5c';  // 正常绿
  
  return (
    <BarChart data={data} color={colorScale}>
      <ReferenceLine y={ALERT_THRESHOLD} stroke="#ff6b6b"
        label="预警阈值" strokeDasharray="4 2" />
    </BarChart>
  );
```

---

### M3 — 噪声清除

**触发条件**: friction_score > 0.6，noise_sources 包含背景噪声

```
策略: 移除装饰性元素，提升数据墨水比

CSS/样式变异:
  // 清除背景网格线
  .recharts-cartesian-grid-horizontal line,
  .recharts-cartesian-grid-vertical line {
    display: none;  // 或设置 opacity: 0.1
  }
  
  // 移除图表背景
  .recharts-surface { background: transparent; }

配置变异:
  <CartesianGrid
    horizontal={false}    // 关闭水平网格
    vertical={false}      // 关闭垂直网格
  />
  
  // 如需网格，使用极简风格
  <CartesianGrid strokeDasharray="2 8" stroke="#e8e8e8" opacity={0.3} />
```

---

### M4 — 色彩对比度提升

**触发条件**: friction 中 contrast_ratio < 4.5（WCAG AA）

```
策略: 替换为高对比度调色板

对比色板推荐（可访问性优先）:
  const palette = {
    // 深色背景用
    dark: {
      primary: '#58a6ff',   // 主要数据系列
      alert:   '#f85149',   // 预警
      success: '#3fb950',   // 正向
      warning: '#e3843c',   // 警告
      neutral: '#8b949e',   // 次要信息
    },
    // 浅色背景用
    light: {
      primary: '#0969da',
      alert:   '#cf222e',
      success: '#1a7f37',
      warning: '#9a6700',
      neutral: '#6e7781',
    }
  };

色盲友好替代:
  // 不要仅用红/绿区分
  // 同时使用形状+颜色双重编码
  <Scatter shape="circle"  fill="#0969da" />  // 正常
  <Scatter shape="triangle" fill="#cf222e" />  // 预警
```

---

### M5 — 标题与标注完善

**触发条件**: A2 因缺少标题/轴标签 扣分

```
策略: 注入描述性标题 + 上下文信息

标题公式:
  "[核心洞察] — [时间范围/数据源]"
  示例: "电商部门 Q4 评分低于预警线 3.5 的有 8 个维度"

轴标签模板:
  <XAxis dataKey="category" label={{ value: "业务维度", position: "insideBottom" }} />
  <YAxis label={{ value: "满意度评分 (1-5)", angle: -90, position: "insideLeft" }} />

副标题/注释:
  <text x={margin.left} y={20} fill="#6e7781" fontSize={12}>
    数据范围: 2024 Q4 | 来源: 用户调研系统
  </text>
```

---

### M6 — 图例优化

**触发条件**: B1 因图例混乱导致 5秒规则失败

```
策略: 直接标注 替代 外置图例

// 不推荐: 外置图例 + 看颜色找对应
<Legend />

// 推荐: 直接在数据点旁标注
<LabelList dataKey="category" position="insideEnd" fill="#fff" />

// 对于折线图，在线末端直接标注
lines.forEach(line => {
  const lastPoint = line.data[line.data.length - 1];
  addDirectLabel(lastPoint, line.name);
});
```

---

### M7 — 数据降噪/聚合

**触发条件**: 数据点过多，图表视觉拥挤

```
策略一: 分组聚合
  // 类别超过12个 → 合并小类为"其他"
  const grouped = groupSmallCategories(data, {
    threshold: 0.03,  // 占比 < 3% 合并
    otherLabel: '其他'
  });

策略二: 交互式下钻
  // 顶层展示聚合数据，点击展开明细
  const [drillDown, setDrillDown] = useState(null);

策略三: 时间数据降采样
  // 日数据过多 → 聚合为周/月
  const resampled = resampleTimeSeries(data, 'week');
```

---

### M8 — 布局重构（Dashboard）

**触发条件**: Dashboard 类型，层级不清晰

```
策略: 应用信息层级布局

黄金布局原则:
  ┌─────────────────────────────────┐
  │  KPI Cards (最重要指标, 顶部)     │
  ├─────────────┬───────────────────┤
  │ Primary Chart│  Secondary Chart  │
  │  (主要趋势)  │   (对比/分布)     │
  ├──────┬──────┴──────┬────────────┤
  │Detail│  Detail      │  Detail    │
  │Table │  Chart       │  Chart     │
  └──────┴─────────────┴────────────┘

实现指南:
  - KPI 卡片：使用大字号数值 + 变化方向箭头
  - 主图占据 60% 以上视觉空间
  - 颜色调色板全局统一
  - 所有时间轴使用相同时间范围
```

---

## 变异后验证清单

执行变异后，重新检查以下项目：

- [ ] 图表类型是否与意图匹配
- [ ] 核心洞察是否在 5 秒内可见
- [ ] 是否移除了所有装饰性噪声
- [ ] 色彩对比度是否满足 WCAG AA（4.5:1）
- [ ] 所有轴/标题/标注是否齐全
- [ ] 是否测试了色盲友好性
- [ ] 数据量是否在推荐范围内

重新执行评测矩阵，目标分数 ≥ 8.0。
