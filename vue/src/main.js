import { createApp } from 'vue'
import './style.css'
import store from './store'
import router from './router'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .mount('#app')
