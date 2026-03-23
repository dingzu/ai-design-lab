# 内容类型路由规则

## 路由决策树

```
用户提交设计产物
       │
       ▼
  包含图表代码/dashboard/chart类关键词?
  ├─ 是 → [InfoVis] → 调用 infovis-evaluator 全流程
  └─ 否 ↓
  
  包含 .pptx/.key/幻灯片/slide/演讲/ppt 关键词?
  ├─ 是 → [PPT] → Layer1 + PPT专项规则
  └─ 否 ↓
  
  包含报告/文档/PDF/研究/分析报告关键词?
  ├─ 是 → [Report] → Layer1 + Report专项规则
  └─ 否 ↓
  
  包含海报/poster/展板/banner关键词?
  ├─ 是 → [Poster] → Layer1 + Poster专项规则
  └─ 否 ↓
  
  包含信息图/infographic/图文/排版关键词?
  ├─ 是 → [Infographic] → Layer1 + infovis-evaluator(infographic模式)
  └─ 否 → 询问用户确认类型
```

---

## 各类型调用协议

### InfoVis 调用

触发条件：
- 用户分享图表相关代码（JSX、ECharts配置、D3、Vega等）
- 用户描述数据图表、仪表盘、数据看板
- 关键词：chart、graph、dashboard、可视化、图表、折线图、柱状图、散点图等

子技能调用：
```
→ 完整执行 infovis-evaluator skill
  ├── 技能A: 信息路由
  ├── 技能B: 盲测解码
  └── 技能C: 认知摩擦力
→ 合并分数: Layer1×40% + infovis专项×60%
```

---

### PPT 调用

触发条件：
- 用户提及 .pptx / .key / Google Slides
- 描述演示文稿内容、幻灯片结构
- 关键词：幻灯片、slide、演讲、演示、PPT、Keynote、汇报

子规则调用：
```
→ 执行 Layer1 共同维度 (D1+D2+D3+D4)
→ 执行 PPT专项维度 (references/ppt-evaluator.md)
  ├── P1: 叙事结构
  ├── P2: 单页原则
  └── P3: 演讲/阅读模式适配
→ 合并分数: Layer1×35% + PPT专项×65%
```

**PPT评测需要用户提供的信息**：
- 幻灯片内容（截图/文字描述/文件路径）
- 演讲场景：线下演讲 or 异步阅读 or 两者兼用
- 目标受众：高管/技术团队/客户/公众

---

### Report 调用

触发条件：
- 用户提及文档、报告、PDF、研究报告
- 描述多页长文档内容
- 关键词：报告、文档、白皮书、研究、分析、调研

子规则调用：
```
→ 执行 Layer1 共同维度
→ 执行 Report专项维度
  ├── R1: 摘要质量
  ├── R2: 结构导航
  └── R3: 数据呈现质量
→ 合并分数: Layer1×40% + Report专项×60%
```

---

### Poster 调用

触发条件：
- 关键词：海报、poster、展板、banner、宣传物料、活动物料

子规则调用：
```
→ 执行 Layer1 共同维度
→ 执行 Poster专项维度
  ├── O1: 瞬时吸引力（3米测试）
  ├── O2: 信息提取路径
  └── O3: 品牌/主题一致性
→ 合并分数: Layer1×35% + Poster专项×65%
```

---

## 歧义处理规则

### 案例1：混合类型
用户提交的是"包含大量图表的PPT汇报"
→ 识别为 **PPT**，但在 Layer2 中对图表页额外调用 infovis-evaluator 的图表评测规则，单独给出图表质量评分

### 案例2：信息图 vs 海报
- 以数据/知识传达为主 → Infographic（走 infovis-evaluator infographic 分支）
- 以品牌/活动宣传为主 → Poster

### 案例3：仅提供截图无上下文
→ 先执行视觉层面的 D1+D3+D4（不需要意图信息）
→ 询问 viewer_intent 和 audience 后补充 D2 和专项评测

### 案例4：用户主动指定类型
用户说"帮我评测这个PPT" → 直接走 PPT 路由，无需二次确认

---

## 子技能依赖声明

| 子技能/规则集 | 来源 | 状态 |
|------------|------|------|
| infovis-evaluator | `~/.codeflicker/skills/infovis-evaluator/` | ✅ 已安装 |
| PPT 专项规则 | `references/ppt-evaluator.md` | ✅ 内置 |
| Report 专项规则 | `references/report-evaluator.md` | ✅ 内置 |
| Poster 专项规则 | SKILL.md Layer2 Poster节 | ✅ 内置 |
| Infographic 专项规则 | SKILL.md Layer2 Infographic节 | ✅ 内置 |
