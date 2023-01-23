import axios from 'axios';
import router from './router';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    // baseURL: 'http://corlab-app.test/api',
})

// axiosClient.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response.status === 401) {
//         sessionStorage.removeItem('TOKEN')
//         router.push({name: 'Login'})
//     } else if (error.response.status === 404) {
//         router.push({name: 'NotFound'})
//     }
//     return error;
// })
export default axiosClient;
