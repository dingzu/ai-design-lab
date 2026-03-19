<template>
  <div class="app">
    <NavBar />
    <HeroSection />
    <ManifestoSection />
    <CapabilitiesSection />
    <WorkflowSection />
    <ToolsSection />
    <WorksSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ManifestoSection from './components/ManifestoSection.vue'
import CapabilitiesSection from './components/CapabilitiesSection.vue'
import WorkflowSection from './components/WorkflowSection.vue'
import ToolsSection from './components/ToolsSection.vue'
import WorksSection from './components/WorksSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
