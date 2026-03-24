<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner container">
      <RouterLink to="/" class="nav-brand">
        <span class="brand-text">R&amp;D design</span>
      </RouterLink>
      <div class="nav-links">
        <RouterLink to="/skill">SKILL 开发</RouterLink>
        <RouterLink to="/genui">GenUI</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => { isScrolled.value = window.scrollY > 60 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: var(--space-lg) 0;
  transition: all var(--duration-normal) var(--ease-out);
}
.navbar.scrolled {
  padding: var(--space-sm) 0;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-brand {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-primary);
}
.nav-links {
  display: flex;
  gap: var(--space-xl);
}
.nav-links a {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--duration-fast) var(--ease-out);
  letter-spacing: 0.02em;
}
.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--text-primary);
}
</style>
