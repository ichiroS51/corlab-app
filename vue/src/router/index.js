import {createRouter, createWebHistory} from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
        },
    ]
});

export default router;
