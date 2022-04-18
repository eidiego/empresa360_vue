import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Home from '@/views/MyHome.vue'
import Login from '@/views/MyLogin.vue'
import Site from '@/views/MySite.vue'

const routes = [
    {
        path: '/', //localhost:8080/login
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
  
] 

const router = createRouter({
    history: createWebHistory(),
    routes //routes: routes
})

export default router