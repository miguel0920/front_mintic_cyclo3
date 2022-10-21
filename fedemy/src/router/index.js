import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DashboardView from '../views/DashboardView';
import UsersView from '../views/UsersView';
import CreateUserView from '../views/CreateUserView';
import UpdateUserView from '../views/UpdateUserView';

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Dashboard',
        name: 'dashboard',
        component: DashboardView
    },
    {
        path: '/Users',
        name: 'users',
        component: UsersView
    },
    {
        path: '/CreateUser',
        name: 'createuser',
        component: CreateUserView
    },
    {
        path: '/UpdateUser/:id?',
        name: 'updateuser',
        component: UpdateUserView
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;