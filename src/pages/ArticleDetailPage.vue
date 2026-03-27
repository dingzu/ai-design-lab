<template>
  <!-- ── 顶部返回栏 ── -->
  <div class="detail-topbar" :class="{ 'is-hidden': topbarHidden }">
    <div class="topbar-inner wrap">
      <RouterLink to="/articles" class="back-btn">
        <span class="back-icon">←</span>
        <span>精选文章</span>
      </RouterLink>
      <div class="topbar-title">{{ current.title }}</div>
      <div class="topbar-nav">
        <RouterLink
          v-if="prev"
          :to="`/articles/${prev.id}`"
          class="topbar-arrow"
          :title="prev.title"
        >←</RouterLink>
        <span v-else class="topbar-arrow disabled">←</span>
        <RouterLink
          v-if="next"
          :to="`/articles/${next.id}`"
          class="topbar-arrow"
          :title="next.title"
        >→</RouterLink>
        <span v-else class="topbar-arrow disabled">→</span>
      </div>
    </div>
  </div>

  <!-- ── 文章内容 iframe ── -->
  <div class="detail-content">
    <iframe
      ref="iframeRef"
      :src="`/articles/article-0${articleId}.html`"
      :key="articleId"
      class="article-iframe"
      :style="{ height: iframeHeight + 'px' }"
      frameborder="0"
      @load="onIframeLoad"
    />
  </div>

  <!-- ── 底部上下篇导航 ── -->
  <footer class="detail-footer">
    <div class="footer-inner wrap">
      <!-- 上一篇 -->
      <RouterLink
        v-if="prev"
        :to="`/articles/${prev.id}`"
        class="sibling-card sibling-prev"
      >
        <div class="sibling-hero" :style="{ background: prev.heroBg }"/>
        <div class="sibling-body">
          <div class="sibling-label text-3">← 上一篇</div>
          <div class="sibling-title">{{ prev.title }}</div>
          <div class="sibling-tags">
            <span
              v-for="tag in prev.tags"
              :key="tag"
              class="sibling-tag"
              :style="{ color: prev.tagColor }"
            >{{ tag }}</span>
          </div>
        </div>
      </RouterLink>
      <div v-else class="sibling-card sibling-placeholder"/>

      <!-- 回列表 -->
      <RouterLink to="/articles" class="back-center">
        <span class="back-center-icon">⊞</span>
        <span>全部文章</span>
      </RouterLink>

      <!-- 下一篇 -->
      <RouterLink
        v-if="next"
        :to="`/articles/${next.id}`"
        class="sibling-card sibling-next"
      >
        <div class="sibling-hero" :style="{ background: next.heroBg }"/>
        <div class="sibling-body">
          <div class="sibling-label text-3">下一篇 →</div>
          <div class="sibling-title">{{ next.title }}</div>
          <div class="sibling-tags">
            <span
              v-for="tag in next.tags"
              :key="tag"
              class="sibling-tag"
              :style="{ color: next.tagColor }"
            >{{ tag }}</span>
          </div>
        </div>
      </RouterLink>
      <div v-else class="sibling-card sibling-placeholder"/>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = computed(() => Number(route.params.id))

/* ── iframe 自适应高度 ── */
const iframeRef = ref(null)
const iframeHeight = ref(1800)

function onIframeLoad() {
  try {
    const doc = iframeRef.value?.contentDocument
    if (!doc) return
    // 等两帧，确保 iframe 内部字体完成布局后再读高度；
    // +2px 安全余量防止 iframe 内部滚动条出现（内部滚动条会吃掉首次向下滑事件造成卡顿）
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const h = doc.documentElement.scrollHeight || doc.body.scrollHeight
      if (h > 200) iframeHeight.value = h + 2
    }))
  } catch (e) {
    // 跨域时无法读取，保留默认高度
    iframeHeight.value = 2200
  }
}

// 切换文章时重置高度
watch(articleId, () => { iframeHeight.value = 1800 })

/* ── 顶部栏滚动显隐 ── */
const topbarHidden = ref(false)
let prevY = 0

function handleScroll() {
  const currentY = window.scrollY
  const delta = currentY - prevY

  if (delta > 0) {
    // 向下滚动 → 立即隐藏
    topbarHidden.value = true
  } else if (delta < 0) {
    // 向上滚动 → 立即显示，无延迟无阻尼
    topbarHidden.value = false
  }

  prevY = currentY
}

onMounted(() => {
  prevY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const articles = [
  {
    id: 1,
    title: 'AI 时代的产品与组织',
    tags: ['行业洞察', '组织变革'],
    tagColor: 'hsl(28,45%,28%)',
    heroBg: 'linear-gradient(160deg, hsl(28,42%,87%) 0%, hsl(28,28%,91%) 50%, hsl(28,16%,94%) 100%)',
  },
  {
    id: 2,
    title: 'AI 重塑设计：设计工作的智能化演进实践',
    tags: ['设计实践', 'AI 方法论'],
    tagColor: 'hsl(175,45%,26%)',
    heroBg: 'linear-gradient(160deg, hsl(175,42%,87%) 0%, hsl(175,28%,91%) 50%, hsl(175,16%,94%) 100%)',
  },
  {
    id: 3,
    title: '设计工程化与 AI 时代 Token 设计',
    tags: ['技术/系统', 'Token 设计'],
    tagColor: 'hsl(210,45%,28%)',
    heroBg: 'linear-gradient(160deg, hsl(210,42%,87%) 0%, hsl(210,28%,91%) 50%, hsl(210,16%,94%) 100%)',
  },
  {
    id: 4,
    title: 'AI 知识库构建与内容运营方法论',
    tags: ['方法论', 'AI 工具', '内容运营'],
    tagColor: 'hsl(270,45%,28%)',
    heroBg: 'linear-gradient(160deg, hsl(270,42%,87%) 0%, hsl(270,28%,91%) 50%, hsl(270,16%,94%) 100%)',
  },
  {
    id: 5,
    title: '阿里云 UES：AI 驱动的体验度量',
    tags: ['体验度量', 'AI 实践'],
    tagColor: 'hsl(175,45%,26%)',
    heroBg: 'linear-gradient(160deg, hsl(175,42%,87%) 0%, hsl(175,28%,91%) 50%, hsl(175,16%,94%) 100%)',
  },
  {
    id: 6,
    title: 'AI 时代下，设计中的情绪体验',
    tags: ['情绪体验', '设计实践'],
    tagColor: 'hsl(340,45%,30%)',
    heroBg: 'linear-gradient(160deg, hsl(340,42%,87%) 0%, hsl(340,28%,91%) 50%, hsl(340,16%,94%) 100%)',
  },
]

const current = computed(() => articles.find(a => a.id === articleId.value) || articles[0])
const prev    = computed(() => articles.find(a => a.id === articleId.value - 1) || null)
const next    = computed(() => articles.find(a => a.id === articleId.value + 1) || null)
</script>

<style scoped>
/* ── 顶部返回栏 ── */
.detail-topbar {
  position: fixed;
  top: var(--nav-h); left: 0; right: 0;
  z-index: 100;
  height: 48px;
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  opacity: 1;
  pointer-events: auto;
  transition: none;
}
.detail-topbar.is-hidden {
  opacity: 0;
  pointer-events: none;
}
.topbar-inner {
  height: 100%;
  display: flex; align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.back-btn {
  display: flex; align-items: center; gap: 6px;
  font-size: 13px; font-weight: 500; color: var(--text-2);
  padding: 4px 10px; border-radius: var(--radius-sm);
  transition: background 140ms, color 140ms;
  white-space: nowrap; flex-shrink: 0;
}
.back-btn:hover { background: var(--bg-subtle); color: var(--text); }
.back-icon { font-size: 15px; line-height: 1; }

.topbar-title {
  flex: 1;
  font-size: 13px; font-weight: 600; color: var(--text);
  text-align: center;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}

.topbar-nav {
  display: flex; gap: 2px; flex-shrink: 0;
}
.topbar-arrow {
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border-radius: var(--radius-sm);
  font-size: 16px; color: var(--text-2);
  transition: background 140ms, color 140ms;
}
.topbar-arrow:hover { background: var(--bg-subtle); color: var(--text); }
.topbar-arrow.disabled { color: var(--border); cursor: not-allowed; }

/* ── iframe ── */
.detail-content {
  padding-top: calc(var(--nav-h) + 48px); /* 保持占位，内容不跳动 */
}
.article-iframe {
  display: block;
  width: 100%;
  min-height: 600px;
  border: none;
  background: #f5f5f7; /* 与页面底色一致，遮住 iframe 安全余量区的 body 渐变背景 */
}

/* ── 底部导航 ── */
.detail-footer {
  background: var(--bg);
  border-top: 1px solid var(--border);
}
.footer-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 48px;
}

/* 回列表按钮 */
.back-center {
  display: flex; flex-direction: column; align-items: center; gap: 4px;
  padding: 14px 24px; border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  font-size: 13px; font-weight: 500; color: var(--text-2);
  background: var(--bg-card);
  transition: background 150ms, border-color 150ms, color 150ms;
  white-space: nowrap;
}
.back-center:hover { background: var(--bg-subtle); color: var(--text); border-color: var(--border-2); }
.back-center-icon { font-size: 18px; line-height: 1; }

/* 上下篇卡片 */
.sibling-card {
  display: flex; align-items: stretch;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 80px;
  transition: transform 160ms ease, box-shadow 160ms ease;
  cursor: pointer;
}
.sibling-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
.sibling-placeholder {
  background: transparent;
  border-color: transparent;
  cursor: default;
  pointer-events: none;
}

.sibling-hero {
  width: 6px;
  flex-shrink: 0;
}
.sibling-body {
  padding: 14px 16px;
  display: flex; flex-direction: column; gap: 5px; flex: 1;
}
.sibling-prev .sibling-body { align-items: flex-start; }
.sibling-next .sibling-body { align-items: flex-end; text-align: right; }

.sibling-label {
  font-size: 11px; font-weight: 600; letter-spacing: 0.05em;
}
.sibling-title {
  font-size: 14px; font-weight: 600; color: var(--text);
  line-height: 1.4;
}
.sibling-tags {
  display: flex; gap: 5px; flex-wrap: wrap;
}
.sibling-next .sibling-tags { justify-content: flex-end; }
.sibling-tag {
  font-size: 11px; font-weight: 600; letter-spacing: 0.03em;
  background: rgba(0,0,0,0.04);
  padding: 2px 7px; border-radius: 10px;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .back-center { order: -1; }
  .topbar-title { display: none; }
}
</style>
