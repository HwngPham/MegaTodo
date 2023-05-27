import { createRouter, createWebHistory } from 'vue-router'
import Todo from './modules/todo/todo.vue'
const About = { template: '<div>About</div>' }

const routes = [
  { path: '/', component: Todo },
  { path: '/about', component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
