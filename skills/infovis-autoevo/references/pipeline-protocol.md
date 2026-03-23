# 流水线协议与状态机定义

## 状态机定义

```
States:
  INIT          → 初始化，解析 Case 输入
  GENERATING    → 调用 visual-creator 生成可视化
  EVALUATING    → 调用 infovis-evaluator 三维评测
  DIFFING       → 拓扑差异计算
  MUTATING      → 生成变异补丁，更新进化上下文
  PASS          → 终态：评测通过 (score ≥ 9.6)
  FAIL_TIMEOUT  → 终态：超过最大迭代次数

Transitions:
  INIT → GENERATING
  GENERATING → EVALUATING
  EVALUATING → DIFFING
  DIFFING → PASS          (if score >= 9.6)
  DIFFING → FAIL_TIMEOUT  (if current_iter >= max_iter)
  DIFFING → MUTATING      (otherwise)
  MUTATING → GENERATING   (loop back)
```

## 进化上下文 Schema

```typescript
interface EvolutionContext {
  session_id: string;                  // 唯一会话标识
  case_id: string;                     // 当前 case 标识
  data_payload: object;                // 原始数据
  viewer_intent: string;               // 可视化意图
  audience: string;                    // 目标受众
  
  // 控制参数
  pass_threshold: 9.6;                 // 固定通过阈值
  max_iterations: number;              // 默认 5
  current_iteration: number;
  
  // 迭代记录
  evolution_log: IterationLog[];
  best_score: number;
  best_iteration: number;
  best_visual_output: string;
  
  // 进化知识（跨轮次累积）
  generator_context: {
    mutation_history: MutationPatch[];
    known_failures: string[];
    design_constraints: string[];
    type_traps: string[];
    insight_blind_spots: string[];
    common_friction_sources: string[];
    missing_element_patterns: string[];
  };
}

interface IterationLog {
  iteration: number;
  score: number;
  score_breakdown: ScoreBreakdown;
  visual_output_snapshot: string;
  mutation_patches: MutationPatch[];
  topology_diff: TopologyDiff;
}

interface ScoreBreakdown {
  type_match_score: number;     // 0-1
  readability_score: number;    // 0-1
  coverage_score: number;       // 0-1
  friction_penalty: number;     // 0-1 (越低越好)
  total: number;                // 0-10
}

interface TopologyDiff {
  chart_type_mismatch: boolean;
  missing_elements: string[];
  friction_violations: string[];
  readability_gaps: string[];
  severity: "CRITICAL" | "MAJOR" | "MINOR";
}

interface MutationPatch {
  patch_id: string;
  dimension: "type" | "insight" | "friction" | "element";
  score_loss: number;
  current_state: string;
  target_state: string;
  instruction: string;
  priority: "P0" | "P1" | "P2";
}
```

## Prompt 注入协议

### 首轮生成（无历史上下文）

```
[visual-creator 调用]
数据: {data_payload}
意图: {viewer_intent}
受众: {audience}
```

### 迭代生成（携带进化上下文）

```
[visual-creator 调用 - 第{N}轮自进化迭代]

数据: {data_payload}
意图: {viewer_intent}
受众: {audience}

=== 自进化约束（必须严格遵守）===

上一版评测得分: {prev_score}/10.0（未达标，需 ≥ 9.6）

【P0 修复项 - 严重失分，必须修复】
{P0_patches}

【P1 修复项 - 较大失分，强烈建议修复】
{P1_patches}

【P2 修复项 - 小幅失分，建议修复】
{P2_patches}

已知禁止重复的错误：
{known_failures}

累积设计约束：
{design_constraints}
```

## 调用 infovis-evaluator 的标准协议

每轮评测时，调用 infovis-evaluator 技能，传入以下信息：

```
[infovis-evaluator 调用]

## 意图解析阶段
data_payload: {data_payload}
viewer_intent: {viewer_intent}
audience: {audience}

## 待评测可视化产物
chart_code_or_image: {visual_output}

## 特殊说明
本次评测为自进化流水线的第{N}轮，请严格按照评测矩阵输出结构化 JSON 分数，
不要简化流程。请重点关注：
- 核心洞察是否可读（高权重维度）
- 必要元素是否完整覆盖
```

## 分数到优先级映射

| 维度失分 | 优先级 |
|---------|--------|
| > 2.0 分 | P0（严重，阻塞通过） |
| 1.0–2.0 分 | P1（较大，强烈修复） |
| < 1.0 分 | P2（小幅，建议修复） |

## 进化收敛判断

如果连续 2 轮得分提升 < 0.1，可能陷入局部最优，应触发**激进变异**策略：

```
[激进变异触发条件]
if (iter_n_score - iter_n_minus_1_score < 0.1) AND
   (iter_n_minus_1_score - iter_n_minus_2_score < 0.1):
   
   → 激进变异：完全重新选择图表类型
   → 丢弃当前生成方向，从 Expected Topology 重新推导
   → 在 Prompt 中标注："请完全重新设计，忽略之前的方案"
```
