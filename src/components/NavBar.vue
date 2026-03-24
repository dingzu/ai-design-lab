<template>
  <nav class="nav">
    <div class="wrap nav-inner">
      <RouterLink to="/" class="nav-logo">R&amp;D design</RouterLink>
      <div class="nav-right">
        <RouterLink to="/skill" class="nav-link" :class="{ active: route.path === '/skill' }">SKILL 开发</RouterLink>
        <RouterLink to="/genui" class="nav-link" :class="{ active: route.path === '/genui' }">GenUI</RouterLink>
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
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border);
}
.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-mono);
  font-size: var(--t-sm);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text);
}
.nav-right {
  display: flex;
  align-items: center;
  gap: 0;
}
.nav-link {
  font-family: var(--font-mono);
  font-size: var(--t-xs);
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-text-3);
  padding: 0 var(--s-4);
  height: var(--nav-h);
  display: flex;
  align-items: center;
  border-left: 1px solid var(--c-border);
  transition: color 150ms, background 150ms;
}
.nav-link:hover,
.nav-link.active {
  color: var(--c-text);
  background: var(--c-bg-2);
}
</style>
