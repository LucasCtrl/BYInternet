import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import createRouter from './pages/routes'

import './style.css'
import App from './App.vue'

const store = createPinia()
const router = createRouter(createWebHistory())
const app = createApp(App)

app.use(router).use(store).mount('#app')
