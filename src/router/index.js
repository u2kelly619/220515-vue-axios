import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView'
import TodoView from '../views/TodoView'

const routes = [
  {
    path: '/users/:userId',
    component: UserView,
  },
  {
    path: '/users/:userId/todos',
    component: TodoView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
