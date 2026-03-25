<template>
  <nav class="nav">
    <div class="nav-inner wrap">
      <RouterLink to="/" class="nav-logo">R&amp;D design</RouterLink>
      <div class="nav-links">
        <RouterLink to="/" class="nav-link" :class="{ active: route.path === '/' }">首页</RouterLink>
        <RouterLink to="/skill" class="nav-link" :class="{ active: route.path === '/skill' }">SKILL 开发</RouterLink>
        <RouterLink to="/genui" class="nav-link" :class="{ active: route.path === '/genui' }">GenUI</RouterLink>
        <RouterLink to="/hub" class="nav-link" :class="{ active: route.path.startsWith('/hub') }">研究汇总</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  height: var(--nav-h);
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
}
.nav-links {
  display: flex;
  gap: 4px;
}
.nav-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-2);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  transition: background 150ms, color 150ms;
}
.nav-link:hover { background: var(--bg-subtle); color: var(--text); }
.nav-link.active { background: var(--bg-subtle); color: var(--text); font-weight: 600; }
</style>
