---
name: infovis-autoevo
description: InfoVis 元技能自进化引擎。将 visual-creator（可视化生成）和 infovis-evaluator（质量评测）串联成自进化流水线。当用户需要「生成并自动评测可视化」「自动优化图表直到达标」「验证可视化case」「评测驱动的可视化迭代」「运行可视化质量闸」「自动进化可视化skill」时触发。输入可视化case，自动执行：生成 → 评测 → 差异计算 → 变异反哺 → 再生成，循环迭代直到评测得分 ≥ 9.6 分方可通过。适用于大批量可视化质量保障、skill自我优化、可视化基准测试等场景。也可由 design-evaluator 在检测到 InfoVis 类型 + 自进化请求时自动调用。
version: 1.1.0
parent_skill: design-evaluator
---

# InfoVis 元技能自进化引擎 (infovis-autoevo)

将 **visual-creator** 和 **infovis-evaluator** 两个技能串联成自进化流水线，通过评测结论驱动生成器持续进化，直至评测得分 ≥ **9.6 分**。

---

## 系统架构

```
[输入层_INPUT]
  原始数据负载 (Payload) + 意图配置 (Config)
         ↓
[生成层_PIPELINE]
  Meta_Router → Generator_Skill → Visual_Output (二进制/DOM/SVG)
         ↓
[评测层_MATRIX]
  信息路由技能 (LLM) ──┐
  盲测解码技能 (VLM)  ──┼→ 拓扑差异计算引擎 → PASS / FAIL
  认知摩擦力技能      ──┘
         ↓ FAIL (分数 < 9.6)
[进化层_MUTATION]
  Mutator_Skill → 差异报告 → 自动重写生成器指令 / Prompt
         ↓
  [返回生成层，开始下一轮迭代]
         ↓ PASS (分数 ≥ 9.6)
  输出最终可视化产物 + 完整迭代报告
```

---

## 触发条件

当用户：
- 提供一组可视化 case（数据 + 意图），要求自动生成并打到质量标准
- 说"自动优化这个图表直到合格"
- 要求批量验证多个可视化 case
- 想让可视化生成技能通过自进化提升质量
- 运行"可视化质量闸门"校验

---

## 完整执行流程

### PHASE 0: 初始化

解析输入 case，构建执行上下文：

```json
{
  "session_id": "evo-{timestamp}",
  "case_id": "case-{n}",
  "data_payload": { ... },        // 原始数据
  "viewer_intent": "...",         // 可视化意图
  "audience": "...",              // 目标受众
  "pass_threshold": 9.6,          // 通过阈值（固定）
  "max_iterations": 5,            // 最大迭代次数（防止死循环）
  "current_iteration": 0,
  "evolution_log": [],            // 每轮迭代记录
  "generator_context": {          // 传给 visual-creator 的上下文（随迭代累积）
    "mutation_history": [],
    "known_failures": [],
    "design_constraints": []
  }
}
```

---

### PHASE 1: 生成阶段 (Generator_Skill)

调用 **visual-creator** 技能，将以下信息作为输入：

```
输入给 visual-creator:
  - data_payload: {原始数据}
  - viewer_intent: {意图}
  - audience: {受众}
  - mutation_context: {上一轮的变异建议，首次为空}
  - design_constraints: {累积的设计约束，首次为空}
```

**重要**：从第 2 轮迭代起，必须在 Prompt 中附加：
```
[自进化约束 - 本轮第{N}次迭代]
上一版失分原因:
{上轮评测报告中的 mutation_suggestions 列表}

已知问题（请避免）:
{known_failures 列表}

本轮必须满足的设计约束:
{design_constraints 列表}
```

生成器输出：`visual_output`（图表代码 / SVG / 描述）

---

### PHASE 2: 评测阶段 (Evaluator_Matrix)

调用 **infovis-evaluator** 技能，对 `visual_output` 执行三维评测：

#### 2.1 信息路由技能 (Skill A)
- 输入：`viewer_intent` + `data_payload`
- 输出：Expected Topology JSON
- 验证：声明图表类型是否匹配期望

#### 2.2 盲测解码技能 (Skill B)
- 输入：仅 `visual_output`（不传 intent）
- 输出：Perceived Topology + readability_score

#### 2.3 认知摩擦力分析 (Skill C)
- 输入：`visual_output`
- 输出：friction_score + noise_sources

#### 2.4 综合评分计算

| 维度 | 权重 | 计算 |
|------|------|------|
| 图表类型匹配 | 20% | expected vs perceived type match |
| 核心洞察可读性 | 35% | core_insight_found × readability_score |
| 必要元素覆盖率 | 25% | found_elements / required_elements |
| 认知摩擦力惩罚 | 20% | 1 - friction_score |

```
综合分 = Σ(维度得分 × 权重) × 10   // 满分 10 分
```

**注意**：本流水线的通过阈值为 **9.6 分**（高于 infovis-evaluator 默认的 8.0 分标准）

---

### PHASE 3: 判定与分叉

```
if score >= 9.6:
    → 进入 PHASE 5（输出最终结果）
elif current_iteration >= max_iterations:
    → 进入 PHASE 5（输出失败报告，附最高分版本）
else:
    → 进入 PHASE 4（变异进化）
```

---

### PHASE 4: 变异进化 (Mutator_Skill)

**这是自进化的核心**：将评测差异报告转化为生成器的改进指令。

#### 4.1 差异计算 (Diff Engine)

比较 Expected Topology vs Perceived Topology：
```json
{
  "topology_diff": {
    "chart_type_mismatch": true/false,
    "missing_elements": [...],
    "friction_violations": [...],
    "readability_gaps": [...]
  },
  "score_breakdown": {
    "type_match_score": x.x,
    "readability_score": x.x,
    "coverage_score": x.x,
    "friction_penalty": x.x,
    "total": x.x
  }
}
```

#### 4.2 生成变异补丁 (Mutation Patch)

根据差异，生成针对 visual-creator 的具体修正指令：

```
🔧 变异补丁 #{N} (本轮失分 -{score_loss})

[图表类型修复]
  当前: {perceived_type}
  目标: {expected_type}
  指令: "使用 {expected_type} 替代 {perceived_type}，因为数据意图是 {viewer_intent}"

[核心洞察强化]
  缺失洞察: {missing_insight}
  指令: "突出显示 {key_data_point}，使用高对比色或标注"

[摩擦力减噪]
  噪声源: {noise_sources}
  指令: "移除 {element}，简化视觉层次"

[元素补全]
  缺失元素: {missing_elements}
  指令: "添加 {element} 到图表中"
```

#### 4.3 更新进化上下文

```python
# 将本轮信息写入累积上下文
evolution_log.append({
  "iteration": current_iteration,
  "score": score,
  "mutation_patches": patches,
  "visual_snapshot": visual_output  # 保留当前版本快照
})

known_failures.extend(topology_diff.friction_violations)
design_constraints.extend(generate_constraints(mutation_patches))
current_iteration += 1
```

→ **返回 PHASE 1，开始下一轮迭代**

---

### PHASE 5: 输出最终结果

#### 5.1 成功通过（score ≥ 9.6）

```markdown
## ✅ 自进化完成 — 评测通过

**最终得分**: {score} / 10.0
**迭代轮数**: {n} 轮
**Session ID**: {session_id}

### 最终可视化产物
{visual_output}

### 迭代进化轨迹
| 轮次 | 得分 | 主要改进 |
|------|------|---------|
| 第1轮 | {score_1} | 初始版本 |
| 第2轮 | {score_2} | {key_mutation_2} |
| ...  | ...  | ... |
| 第N轮 | {final_score} ✅ | 达标 |

### 技能进化总结
本次迭代发现的系统性问题:
{accumulated_insights}
```

#### 5.2 达到最大迭代次数（未通过）

```markdown
## ❌ 迭代结束 — 未达标

**最高得分**: {best_score} / 10.0（第{best_iter}轮）
**目标得分**: 9.6 / 10.0
**差距**: {gap}

### 分析：阻塞进化的根本原因
{root_cause_analysis}

### 最优版本（第{best_iter}轮）
{best_visual_output}

### 建议人工介入点
{manual_intervention_suggestions}
```

---

## 批量 Case 验证模式

当用户提供多个 case 时，对每个 case 串行执行完整流水线：

```
Case 1: [数据A + 意图A] → 运行流水线 → PASS (第2轮, 9.7分)
Case 2: [数据B + 意图B] → 运行流水线 → PASS (第3轮, 9.8分)
Case 3: [数据C + 意图C] → 运行流水线 → FAIL (5轮后最高9.3分)
...
```

最终输出批量验证报告：

```markdown
## 批量验证报告

| Case | 数据/意图 | 最终得分 | 迭代轮数 | 状态 |
|------|-----------|---------|---------|------|
| #1   | {摘要}    | 9.7     | 2       | ✅ PASS |
| #2   | {摘要}    | 9.8     | 3       | ✅ PASS |
| #3   | {摘要}    | 9.3     | 5       | ❌ FAIL |

**通过率**: {pass_count}/{total} ({pass_rate}%)
**平均迭代轮数**: {avg_iter}
**系统性失分维度**: {common_failure_dimensions}
```

---

## 进化洞察反哺机制

每次迭代结束后，将关键洞察结构化存储，用于指导下一次生成：

### 积累维度

1. **类型陷阱** (`type_traps`): 某种意图下容易误选的图表类型
2. **洞察盲区** (`insight_blind_spots`): 生成器易忽略的核心信息点
3. **摩擦常见源** (`common_friction_sources`): 反复出现的噪声元素
4. **元素缺失模式** (`missing_element_patterns`): 高频缺失的必要视觉元素

### 使用方式

```
[注入进化洞察到下一轮生成]
已知类型陷阱: {type_traps}
已知洞察盲区: {insight_blind_spots}
已知摩擦源: {common_friction_sources}
已知元素缺失: {missing_element_patterns}
```

---

## 参考文件

- **`references/pipeline-protocol.md`** — 详细流水线协议与状态机定义
- **`references/mutation-feedback.md`** — 变异反馈规则与补丁格式
- **`examples/case-library.md`** — 标准验证用例库（含数据、意图、期望输出）
