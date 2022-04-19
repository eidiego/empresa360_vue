import { createRouter, createWebHistory } from 'vue-router'
import Vendas from '@/components/vendas/MySells.vue'
import Leads from '@/components/vendas/MyLeads.vue'
import Lead from '@/components/vendas/MyLead.vue'
import Dashboard from '@/components/dashboard/MyDashboard.vue'
import Contratos from '@/components/vendas/MyContracts.vue'
import VendasPadrao from '@/components/vendas/VendasPadrao.vue'
import Servicos from '@/components/servicos/MyServices.vue'
import Home from '@/views/MyHome.vue'
import Login from '@/views/MyLogin.vue'
import Site from '@/views/MySite.vue'

const routes = [{
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [{
                path: 'vendas',
                component: Vendas,
                children: [
                    { path: 'leads', component: Leads },
                    { path: 'leads/:id', component: Lead },
                    { path: 'contratos', component: Contratos },
                    { path: '', component: VendasPadrao },
                ]
            }, //localhost:8080/home/vendas
            { path: 'servicos', component: Servicos }, //localhost:8080/home/servicos
            { path: 'dashboard', component: Dashboard }
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