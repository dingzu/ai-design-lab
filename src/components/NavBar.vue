<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-inner container">
      <div class="nav-brand">
        <span class="brand-text">AI Design Lab</span>
      </div>
      <div class="nav-links">
        <!-- 导航链接 -->
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: var(--space-lg) 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.navbar.scrolled {
  padding: var(--space-sm) 0;
  background: rgba(250, 248, 245, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(26, 26, 46, 0.06);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-text {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
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

.nav-links a:hover {
  color: var(--accent-indigo);
}
</style>
