import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Dashboard',
        name: 'bashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: DashboardView
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;