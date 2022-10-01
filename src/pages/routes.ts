import { createRouter, RouterHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import SettingsPage from './SettingsPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/settings',
    component: SettingsPage,
  },
]

export default function (history: RouterHistory) {
  return createRouter({
    history,
    routes,
  })
}
