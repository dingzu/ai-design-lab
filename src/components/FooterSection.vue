<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-mark">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="rgba(240,237,232,0.3)" stroke-width="2"/>
              <path d="M10 22L16 10L22 22" stroke="rgba(240,237,232,0.3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="16" cy="14" r="3" fill="rgba(240,237,232,0.3)"/>
            </svg>
            <span>AI Design Lab</span>
          </div>
          <p class="footer-tagline">探索 AI 时代设计生产力的边界</p>
        </div>

        <div class="footer-meta">
          <p class="footer-credit">
            Built with
            <span class="heart">♥</span>
            by a designer who embraces AI
          </p>
          <p class="footer-year">© {{ new Date().getFullYear() }} AI Design Lab</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-4xl) 0 var(--space-2xl);
  background: var(--bg-dark);
  color: var(--text-light);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.3), transparent);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-2xl);
}

.brand-mark {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(240, 237, 232, 0.5);
  margin-bottom: var(--space-sm);
}

.footer-tagline {
  font-size: var(--text-sm);
  color: rgba(240, 237, 232, 0.3);
}

.footer-credit {
  font-size: var(--text-sm);
  color: rgba(240, 237, 232, 0.3);
}

.heart {
  color: var(--accent-rose);
  display: inline-block;
  animation: float 2s var(--ease-out) infinite;
}

.footer-year {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: rgba(240, 237, 232, 0.2);
  margin-top: var(--space-sm);
}
</style>
