# 通用自进化协议 (Auto-Evolution Protocol)

本文件定义 `design-evaluator` 内置自进化引擎的完整状态机协议，适用于 PPT、报告、海报等非 InfoVis 类型。InfoVis 类型请见 `infovis-autoevo` skill。

---

## 状态机定义

```
┌─────────────────────────────────────────────────────────┐
│                    INIT                                  │
│  构建进化上下文 (session_id, threshold, max_iter)         │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  EVALUATE                                │
│  Layer1(D1~D4) + Layer2(类型专项) → score               │
└───────────────┬───────────────────┬─────────────────────┘
                │                   │
         score ≥ 8.5          iter ≥ max_iter
                │                   │
                ▼                   ▼
           SUCCESS              EXHAUSTED
        输出成功报告           输出失败报告
                                附最优版本
                │
         score < 8.5
         iter < max_iter
                │
                ▼
┌─────────────────────────────────────────────────────────┐
│                    DIFF                                  │
│  对比每维度期望 vs 实际 → diff_report                    │
│  识别 P0/P1/P2 级失分项                                  │
└───────────────────────┬─────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│                   MUTATE                                 │
│  生成变异补丁 → 注入 known_failures → 输出改进指令       │
│  更新 evolution_log, design_constraints                  │
└───────────────────────┬─────────────────────────────────┘
                        │
                        └──→ 返回 EVALUATE (下一轮)
```

---

## 各阶段详细规范

### INIT 阶段

```json
{
  "session_id": "evo-{content_type}-{YYYYMMDD-HHmmss}",
  "content_type": "PPT | Report | Poster | Infographic",
  "viewer_intent": "{从用户输入解析}",
  "audience": "{从用户输入解析}",
  "pass_threshold": 8.5,
  "max_iterations": 4,
  "current_iteration": 0,
  "best_score": 0,
  "best_iteration": 0,
  "best_snapshot": null,
  "evolution_log": [],
  "known_failures": [],
  "design_constraints": [],
  "accumulated_insights": {
    "weak_dimensions": [],
    "failed_mutations": [],
    "effective_mutations": [],
    "structural_blockers": []
  }
}
```

---

### EVALUATE 阶段

执行完整的 Layer1 + Layer2 评测：

1. **Layer1 共同维度** (D1~D4)
   - 必须每轮重新执行，不可复用上一轮评分
   - 注意：评测的是**当前轮次的产物**，需根据上一轮变异补丁更新后的内容

2. **Layer2 类型专项**
   - PPT: P1(叙事结构) + P2(单页原则) + P3(模式适配)
   - Report: R1(摘要) + R2(导航) + R3(数据呈现)
   - Poster: O1(吸引力) + O2(信息路径) + O3(一致性)

3. **计分**：按各类型权重合并 → 得出本轮 `score`

4. **记录到 evolution_log**：
   ```json
   {
     "iteration": 1,
     "score": 6.2,
     "dimension_scores": {
       "D1": 5.0, "D2": 7.0, "D3": 6.0, "D4": 8.0,
       "P1": 5.0, "P2": 6.0, "P3": 7.0
     },
     "artifact_snapshot": "{本轮内容摘要/关键段落}"
   }
   ```

5. **更新 best 记录**：
   ```python
   if score > best_score:
       best_score = score
       best_iteration = current_iteration
       best_snapshot = current_artifact
   ```

---

### DIFF 阶段

对每个低分维度（< 7.0）执行差异分析：

```
DIFF 规则:
  For each dimension in [D1, D2, D3, D4, P1/R1/O1, P2/R2/O2, P3/R3/O3]:
    if score < 4.0  → severity = P0 (必须修复)
    if score < 7.0  → severity = P1 (强烈建议)
    if score >= 7.0 → severity = P2 (可选优化)
    
    生成 diff_item:
      - dimension: 维度名
      - severity: P0/P1/P2
      - current_score: 当前分
      - expected_score: 目标分（≥7.5）
      - gap: expected - current
      - root_cause: 为什么这个维度低分（具体问题描述）
      - missing_elements: 缺少哪些要素
      - violated_rules: 违反了哪些规则
```

**核心诊断问题（按类型）**：

PPT 场景：
- D1低: 是否缺少观点句标题？是否无视觉焦点？
- P1低: 是否缺失冲突/解决方案/行动号召？
- P2低: 是否有文字墙？是否有多个核心点竞争？
- P3低: 内容密度是否与演讲场景不匹配？

Report 场景：
- D1低: 是否缺少执行摘要？层级是否混乱？
- R1低: 摘要是否只描述问题但无结论/建议？
- R2低: 是否缺少目录？标题是否无层级？
- R3低: 是否用数字替代了图表？图表是否无独立标题？

---

### MUTATE 阶段

根据 DIFF 结果生成变异补丁，**按 P0 → P1 → P2 优先级处理**。

#### 补丁生成规则

1. **每个补丁必须包含**：
   - 具体问题（不是泛泛而谈）
   - 可操作的修复指令（能直接执行）
   - 验证方式（怎么知道修好了）

2. **注入 known_failures 约束**：
   每个补丁末尾附加：
   ```
   ⚠️ 历史失效模式（请避免）:
   {known_failures 中相关条目}
   ```

3. **更新进化上下文**：
   ```python
   # 将本轮违规加入 known_failures
   for item in diff_report:
       if item.severity == P0:
           known_failures.append({
               "iteration": current_iteration,
               "dimension": item.dimension,
               "violation": item.violated_rules,
               "avoided_by": item.mutation_patch  // 本轮补丁，用于标记是否有效
           })
   
   # 将新约束加入 design_constraints
   design_constraints.extend(generate_constraints(mutation_patches))
   
   # 更新 accumulated_insights
   weak_dims = [dim for dim in dimensions if consistently_low(dim)]
   ```

#### PPT 类型常用变异补丁库

| 触发条件 | 补丁指令 |
|---------|---------|
| P1低 - 缺少冲突 | "在第2-3页插入问题陈述：当前[现状]，但[存在问题]，因此[需要...]" |
| P1低 - 缺少行动 | "最后一页替换为行动页：□ [决策项A] □ [行动项B] □ [负责人C]在[日期D]前完成" |
| P2低 - 文字墙 | "当前页超过5个bullet → 保留最重要1-2项，其余移至备注或附录" |
| P2低 - 主题词标题 | "将标题从'[名词]'改为观点句：'[动词/结论] + [关键数据/影响]'" |
| D1低 - 无视觉焦点 | "选取本页最重要数据，字号扩大150%或添加色块背景强调" |
| D3低 - 颜色混乱 | "统一使用2种主色+1种强调色，移除其余装饰色彩" |

#### Report 类型常用变异补丁库

| 触发条件 | 补丁指令 |
|---------|---------|
| R1低 - 摘要无结论 | "摘要末尾添加：'综上，我们建议[具体行动]，预期达成[量化目标]'" |
| R2低 - 无目录 | "在第1页后插入目录，层级不超过2级，每章标题需是观点句" |
| R2低 - 标题无观点 | "将标题从'[名词]'改为观点句：'[动词/结论] + [关键数据/影响]'" |
| R3低 - 纯数字 | "将表格中的核心指标替换为迷你图表（sparkline）或条形对比" |
| R3低 - 图表无标题 | "为每张图表添加结论句标题：'[直接运用图表展示的结论]（[时间范围]）'" |
| R1低 - 结论后置 | "每章开头添加结论先行句：'本节核心结论：[结论]。以下是支撑数据...'" |

#### Poster 类型常用变异补丁库

| 触发条件 | 补丁指令 |
|---------|---------|
| O1低 - 主视觉弱 | "将主标题字号扩大至其他内容的 3-4 倍，或为主标题添加大尺寸迾罩图" |
| O1低 - 3米不可识 | "测试：将海报缩至 10%大小查看主题是否可识，不可识则需加大主视觉元素" |
| O2低 - 无视觉引导 | "添加视觉流引导元素：箭头/编号/色彩渐变/线条，确保眼球自然路径为上→核心信息→行动入口" |
| O2低 - 信息点过多 | "将信息点压缩至 ≤ 5 个，次要信息移至误内页或二维码链接" |
| O3低 - 色彩杂乱 | "统一使用1个主色+1个辅色+白色背景，移除其他装饰颜色" |
| O3低 - 字体不一致 | "整题统一到 2 种字体：标题字体 + 正文字体，移除其他装饰性字体" |

---

### SUCCESS 输出

```markdown
## ✅ 自进化完成

**类型**: {content_type}  
**最终分**: {final_score}/10  
**迭代轮数**: {N}轮  
**Session**: {session_id}

### 迭代进化轨迹

| 轮次 | 得分 | 最低维度 | 本轮主要修复 |
|------|------|---------|------------|
{evolution_log_table}

### 核心改进汇总

{P0变异补丁 → 已修复列表}

### 进化洞察（可复用）

本次迭代总结的规律性问题:
{accumulated_insights.effective_mutations}
```

---

### EXHAUSTED 输出（未达标）

```markdown
## ❌ 迭代结束 — 未达标

**最高分**: {best_score}/10（第{best_iter}轮）  
**目标**: 8.5/10  
**差距**: {8.5 - best_score}

### 阻塞根因分析

{structural_blockers 列表}

原因分类:
- 结构性问题（需要重新设计，不是微调能解决）: {structural_issues}
- 信息缺失（需要补充内容）: {missing_content}
- 技术约束（当前条件无法满足）: {tech_constraints}

### 最优版本（第{best_iter}轮 {best_score}分）

{best_snapshot}

### 建议人工介入点

{manual_intervention_suggestions}
```

---

## 与 infovis-autoevo 的协作关系

当 `design-evaluator` 检测到内容类型为 **InfoVis** 时：

```
设计产物类型 = InfoVis (图表/仪表盘/信息图)
  AND 用户要求自进化
  ↓
转交给 infovis-autoevo skill:
  - 阈值: 9.6（更高标准）
  - 专化的三维评测矩阵（信息路由/盲测解码/认知摩擦力）
  - 与 visual-creator 集成
  - 最大迭代次数: 5
```

`design-evaluator` 自身的自进化（本文件定义）只处理 PPT/Report/Poster/Infographic，不与 visual-creator 集成，因为这些类型不自动生成内容，而是提供改进指令让用户执行。
