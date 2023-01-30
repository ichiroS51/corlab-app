import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';
import Login from '../views/Login.vue';
import Logged from '../components/Logged.vue';
import NotLogged from '../components/NotLogged.vue';
import NotLog from '../views/NotLog.vue';
import store from '../store/';
import InformationStep from '../views/StepsForRequest/InformationStep.vue';
import TestStep from '../views/StepsForRequest/TestStep.vue';
import PayStep from '../views/StepsForRequest/PayStep.vue';
import DashBoard from '../components/Dashboard.vue';
import CreateNewUser from '../views/AdminViews/CreateNewUser.vue';
import AdminUsers from '../views/AdminViews/AdminUsers.vue';
import EditInvoices from '../views/AdminViews/EditInvoices.vue';
import EditTests from '../views/AdminViews/EditTests.vue';
import Invoices from '../views/AdminViews/Invoices.vue';
import ProfilesRequests from '../views/AdminViews/ProfilesRequests.vue';
import PerfilHematologico from '../views/TestsForms/PerfilHematologico.vue';
import PerfilBioquimico from '../views/TestsForms/PerfilBioquimico.vue';
import PerfilCoagulación from '../views/TestsForms/PerfilCoagulación.vue';
import PerfilSerologico from '../views/TestsForms/PerfilSerologico.vue';
import PerfilEnzimatico from '../views/TestsForms/PerfilEnzimatico.vue';
import CoproAnalisis from '../views/TestsForms/CoproAnalisis.vue';
import UroAnalisis from '../views/TestsForms/UroAnalisis.vue';
import PruebaDeEmbarazo from '../views/TestsForms/PruebaEmbarazo.vue';
import AdminResultsTests from '../views/AdminViews/AdminResultsTests.vue';
import AvailableTests from '../views/AvailableTests.vue';
import About from '../views/About.vue';
import UserInvoices from '../views/UserLoggedViews/UserInvoices.vue';
import Error from '../views/Error.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/app',
            name: 'Logged',
            component: Logged,
            meta: { requiresAuth: true },
            children: [{
                    path: '/app/landing',
                    name: 'Landing',
                    component: Landing,
                },
                {
                    path: '/info',
                    name: 'InfoWhenLog',
                    component: InformationStep,
                },
                {
                    path: '/test',
                    name: 'TestWhenLog',
                    component: TestStep,
                },
                {
                    path: '/pay',
                    name: 'PayWhenLog',
                    component: PayStep,
                },
                {
                    path: '/available-tests',
                    name: 'ProfilesLog',
                    component: AvailableTests,
                },
                {
                    path: '/about',
                    name: 'AboutLog',
                    component: About,
                },
                {
                    path: '/invoices-requested',
                    name: 'InvoRe',
                    component: UserInvoices,
                },
                {
                    path: '/not-connection',
                    name: 'NotConn',
                    component: Error,
                },
            ]
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashBoard,
            meta: { requiresAuth: true },
            children: [{
                    path: '/dashboard/new-user',
                    name: 'NewUser',
                    component: CreateNewUser,
                },
                {
                    path: '/dashboard/users-admin',
                    name: 'AdminUsers',
                    component: AdminUsers,
                },
                {
                    path: '/dashboard/edit-invoices',
                    name: 'EditInvoices',
                    component: EditInvoices,
                },
                {
                    path: '/dashboard/profiles-requests',
                    name: 'ProRe',
                    component: ProfilesRequests,
                },
                {
                    path: '/dashboard/invoices',
                    name: 'Invoices',
                    component: Invoices,
                },
                {
                    path: '/dashboard/edit-tests',
                    name: 'EditTests',
                    component: EditTests,
                },
                {
                    path: '/dashboard/profile-hematologic',
                    name: 'PerfilHema',
                    component: PerfilHematologico,
                },
                {
                    path: '/dashboard/profile-bioquimic',
                    name: 'PerfilBioqui',
                    component: PerfilBioquimico,
                },
                {
                    path: '/dashboard/profile-coagulation',
                    name: 'PerfilCoagula',
                    component: PerfilCoagulación,
                },
                {
                    path: '/dashboard/profile-serologic',
                    name: 'PerfilSerologi',
                    component: PerfilSerologico,
                },
                {
                    path: '/dashboard/profile-enzimatic',
                    name: 'PerfilEnzimati',
                    component: PerfilEnzimatico,
                },
                {
                    path: '/dashboard/profile-coproanalisis',
                    name: 'CoproAnalisis',
                    component: CoproAnalisis,
                },
                {
                    path: '/dashboard/profile-uroanalisis',
                    name: 'UroAnalisis',
                    component: UroAnalisis,
                },
                {
                    path: '/dashboard/profile-pruebaembarazo',
                    name: 'PruebaDeEmbarazo',
                    component: PruebaDeEmbarazo,
                },
                {
                    path: '/not-connection',
                    name: 'DashError',
                    component: Error,
                },
            ],

        },
        {
            path: '/dashboard/tests/result',
            name: 'AdminResults',
            component: AdminResultsTests,
        },
        {
            path: '/',
            name: 'NotLogged',
            component: NotLogged,
            children: [{
                    path: '/',
                    name: 'Notlog',
                    component: NotLog,
                },
                {
                    path: '/login',
                    name: 'Login',
                    component: Login,
                },
                {
                    path: '/info',
                    name: 'Info',
                    component: InformationStep,
                },
                {
                    path: '/test',
                    name: 'Test',
                    component: TestStep,
                },
                {
                    path: '/pay',
                    name: 'Pay',
                    component: PayStep,
                },
                {
                    path: '/available-tests',
                    name: 'Profiles',
                    component: AvailableTests,
                },
                {
                    path: '/about',
                    name: 'About',
                    component: About,
                },
                {
                    path: '/not-connection',
                    name: 'NotConnNoLog',
                    component: Error,
                },
            ]
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (store.state.user.token && (to.name === 'Login' || to.name === 'Notlog' || to.name === 'Logged')) {
        next({ name: 'Landing' });
    } else {
        next()
    }
})

export default router;
