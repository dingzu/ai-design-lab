# bb-browser 技术方案研究

## 一、概述

**bb-browser** (Buildbarn Browser) 是一个用 Go 编写的 Web 前端服务，用于探索和调试 Remote Execution API 中的构建缓存和执行结果。

### 核心定位
- **作用**：可视化展示 Content Addressable Storage (CAS) 和 Action Cache (AC) 中的对象
- **主要用途**：深入了解远程执行的工作原理，特别是在构建失败时进行调试
- **适用场景**：与 Bazel、Buck2、BuildStream 等构建工具配合使用的远程执行系统

---

## 二、技术架构

### 2.1 Buildbarn 项目体系

bb-browser 是 **Buildbarn 项目**的一部分，该项目提供了 Remote Execution Protocol 的完整实现：

```
┌─────────────────────────────────────────────────────┐
│               Buildbarn 生态系统                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐  ┌──────────────┐              │
│  │  bb-storage  │  │ bb-browser   │              │
│  │  (存储守护进程)│  │ (Web前端)    │              │
│  └──────────────┘  └──────────────┘              │
│         ▲                  ▲                       │
│         │                  │                       │
│  ┌──────┴──────────────────┴────────┐            │
│  │    bb-remote-execution           │            │
│  │    (远程执行引擎)                  │            │
│  └──────────────────────────────────┘            │
│         ▲                                          │
│         │                                          │
│  ┌──────┴──────────────────────────┐             │
│  │  Build Clients                  │             │
│  │  (Bazel, Buck2, BuildStream)    │             │
│  └─────────────────────────────────┘             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 2.2 核心组件

| 组件 | 功能 | 技术栈 |
|------|------|--------|
| **bb-storage** | 存储守护进程，支持分片存储 | Go + gRPC |
| **bb-remote-execution** | 远程构建任务执行引擎 | Go + Docker |
| **bb-browser** | Web 界面，可视化 CAS/AC | Go + Web UI |
| **bb-clientd** | 客户端守护进程 | Go |

---

## 三、bb-browser 工作原理

### 3.1 核心功能

1. **展示 Content Addressable Storage (CAS)**
   - 存储构建过程中的所有输入和输出文件
   - 基于内容的哈希索引（Digest）

2. **展示 Action Cache (AC)**
   - 缓存构建动作的结果
   - 避免重复执行相同的构建任务

3. **调试失败的构建**
   - 显示未缓存的失败构建结果
   - 提供详细的构建日志和错误信息

### 3.2 访问机制

```
Build Client (Bazel)
      │
      ├──> Remote Execution Request
      │
      v
bb-storage (gRPC)
      │
      ├──> Store to CAS/AC
      │
      v
bb-browser (HTTP)
      │
      └──> Web UI 可视化展示
```

### 3.3 独特设计

#### 自动生成链接
- Buildbarn 的 worker 会自动在 RPC 响应和日志中生成指向 bb-browser 的链接
- 用户可以直接点击链接查看构建详情

#### 存储失败结果
- 即使构建失败（通常不会缓存），bb-browser 仍可以展示这些结果
- Worker 会将失败结果写入 CAS（使用自定义消息格式）

---

## 四、部署方式

### 4.1 Docker Compose 部署（推荐入门）

```bash
# 克隆部署仓库
git clone https://github.com/buildbarn/bb-deployments.git
cd bb-deployments/docker-compose

# 启动服务
./run.sh
```

### 4.2 容器镜像

最新镜像（2025-08-20）：
```
ghcr.io/buildbarn/bb-browser:20250820T143915Z-823deb2
```

### 4.3 配置示例

```bash
docker run \
    --rm \
    -p 80:80 \
    -v $(pwd)/config:/config \
    bazel/cmd/bb_browser:bb_browser_container \
    /config/browser.jsonnet
```

**配置要点**：
- 使用 `.jsonnet` 格式的配置文件
- 配置存储后端（S3、Redis、gRPC 等）
- 设置 gRPC 服务地址（如 `bb-storage:8980`）

---

## 五、与构建工具集成

### 5.1 Bazel 集成

```bash
# 使用远程执行
bazel build \
    --config=remote-ubuntu-22-04 \
    @abseil-hello//:hello_main

# 输出示例
# INFO: 33 processes: 4 internal, 29 remote.
# INFO: Build completed successfully, 33 total actions
```

**关键参数**：
- `--remote_executor=grpc://localhost:8980`
- `--remote_instance_name=fuse`
- `--remote_default_exec_properties`

### 5.2 Buck2 集成

在 `platform/defs.bzl` 中定义平台属性，在 `.buckconfig` 中设置 RPC 端点。

### 5.3 Pants 集成

在 `pants.toml` 中配置：
```toml
[GLOBAL]
remote_cache_read = true
remote_cache_write = true
remote_store_address = "grpc://localhost:8980"
remote_execution_address = "grpc://localhost:8980"
remote_execution = true
remote_instance_name = "fuse"
```

---

## 六、典型应用场景

### 6.1 远程缓存
- 多人协作时共享构建缓存
- 加速 CI/CD 构建流程
- 避免重复编译相同代码

### 6.2 远程执行
- 将构建任务分布到多台机器
- 统一构建环境（使用容器镜像）
- 提升大型项目的构建速度

### 6.3 调试分析
- 查看构建失败的详细日志
- 分析依赖关系和文件变化
- 审计构建过程的输入输出

---

## 七、技术优势

| 优势 | 说明 |
|------|------|
| **协议标准化** | 实现 Remote Execution API（Google 提出） |
| **灵活存储** | 支持多种存储后端（本地、S3、Redis） |
| **容器化部署** | 提供完整的 Docker/K8s 部署方案 |
| **多工具支持** | 兼容 Bazel、Buck2、Pants 等主流构建工具 |
| **调试友好** | 自动生成链接，保存失败构建结果 |
| **开源社区** | 活跃的社区支持（#buildbarn Slack 频道） |

---

## 八、局限性与注意事项

### 8.1 使用前提
- 需要支持 Remote Execution API 的构建客户端
- 必须知道对象的 Digest 才能查看（无法随意浏览）
- 最佳实践是由构建服务自动生成链接

### 8.2 部署复杂度
- 完整部署需要多个组件协同工作
- 需要配置存储后端和网络连接
- 对于小型项目可能过于重量级

### 8.3 学习曲线
- 需要理解 Remote Execution API 的概念
- 需要熟悉 CAS（Content Addressable Storage）
- 配置文件使用 Jsonnet 格式（类似 JSON 的模板语言）

---

## 九、快速验证示例

### 9.1 启动 Buildbarn 服务

```bash
cd bb-deployments/docker-compose
./run.sh
```

### 9.2 执行远程构建

```bash
# 构建示例项目
bazel build --config=remote-ubuntu-22-04 @abseil-hello//:hello_main

# 运行测试
bazel test --config=remote-ubuntu-22-04 @abseil-hello//:hello_test
```

### 9.3 验证缓存效果

```bash
# 清除本地缓存
bazel clean

# 重新构建（应使用远程缓存）
bazel build --config=remote-ubuntu-22-04 @abseil-hello//:hello_main
# 输出会显示从缓存中获取结果
```

---

## 十、参考资源

### 官方资源
- **GitHub 组织**：https://github.com/buildbarn
- **bb-browser 仓库**：https://github.com/buildbarn/bb-browser
- **部署示例**：https://github.com/buildbarn/bb-deployments
- **Slack 社区**：buildteamworld.slack.com (#buildbarn)

### 技术文档
- Remote Execution API：https://github.com/bazelbuild/remote-apis
- Bazel Remote Execution：https://bazel.build/
- Docker Images：https://github.com/catthehacker/docker_images

### 商业支持
- Aspect Build（自托管）
- Meroton（云托管）
- Tweag by Modus Create（咨询服务）

---

## 十一、总结

bb-browser 是一个专为远程构建系统设计的可视化调试工具，特别适合以下场景：

✅ **适合**：
- 大型团队协作的构建系统
- 需要远程执行的分布式构建
- 频繁失败需要调试的构建任务

❌ **不适合**：
- 单人开发的小型项目
- 本地构建已经足够快的场景
- 不需要缓存共享的环境

**核心价值**：通过可视化界面深入理解远程构建的执行细节，帮助开发者快速定位和解决构建问题。

---

*研究日期：2026-03-24*  
*研究人员：hiro*  
*技术栈：Go, gRPC, Docker, Remote Execution API*
