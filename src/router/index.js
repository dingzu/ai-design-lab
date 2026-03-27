import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SkillPage from '../pages/SkillPage.vue'
import SkillResearchPage from '../pages/SkillResearchPage.vue'
import SkillHubPage from '../pages/SkillHubPage.vue'
import GenUIPage from '../pages/GenUIPage.vue'
import BBBrowserPage from '../pages/BBBrowserPage.vue'
import ArticlesPage from '../pages/ArticlesPage.vue'
import ArticleDetailPage from '../pages/ArticleDetailPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/skill', component: SkillPage },
  { path: '/skill/research', component: SkillResearchPage },
  { path: '/hub/:articleId?', component: SkillHubPage },
  { path: '/genui', component: GenUIPage },
  { path: '/articles', component: ArticlesPage },
  { path: '/articles/:id', component: ArticleDetailPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})
