import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Logged from '../components/Logged.vue';
import NotLogged from '../components/NotLogged.vue';
import NotLog from '../views/NotLog.vue';
import store from '../store/';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/landing',
            name: 'Logged',
            component: Logged,
            meta: { requiresAuth: true },
            children: [
                {
                    path: '/landing',
                    name: 'Landing',
                    component: Landing,
                },
            ]
        },
        {
            path: '/',
            name: 'NotLogged',
            component: NotLogged,
            meta: { isGuest: true },
            children: [
                {
                    path: '/',
                    name: 'Notlog',
                    component: NotLog,
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: Login,
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (store.state.user.token && to.isGuest === 'Login') {
        next({ name: 'Landing' });
    } else {
        next()
    }
})

export default router;
