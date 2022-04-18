import { createRouter, createWebHistory } from 'vue-router'
//createWebHashHistory
import Vendas from '@/components/vendas/MySells.vue'
import Servicos from '@/components/servicos/MyServices.vue'
import Home from '@/views/MyHome.vue'
import Login from '@/views/MyLogin.vue'
import Site from '@/views/MySite.vue'

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            { path: 'vendas', component: Vendas }, //localhost:8080/home/vendas
            { path: 'servicos', component: Servicos } //localhost:8080/home/servicos
        ]
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