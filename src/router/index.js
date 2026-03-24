import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SkillPage from '../pages/SkillPage.vue'
import SkillResearchPage from '../pages/SkillResearchPage.vue'
import SkillHubPage from '../pages/SkillHubPage.vue'
import GenUIPage from '../pages/GenUIPage.vue'
import BBBrowserPage from '../pages/BBBrowserPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/skill', component: SkillPage },
  { path: '/skill/research', component: SkillResearchPage },
  { path: '/hub', component: SkillHubPage },
  { path: '/hub/bb-browser', component: BBBrowserPage },
  { path: '/genui', component: GenUIPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
