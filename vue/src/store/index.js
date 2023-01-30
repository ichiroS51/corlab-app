import { createStore } from "vuex";
import axiosClient from "../axios";

const store = createStore({
    state: {
        user: {
            data: {},
            firstname: '',
            lastname: '',
            ci: 0,
            email: '',
            phone: '',
            token: sessionStorage.getItem("TOKEN"),
            method: {},
            total_pay: 0,
            pay_number: 0,
            profilesIds: [],
        },

        admin: {
            admin_token: '13495912374Abdmn&&&%$',
        },

        users: {
            users_token: '98000012324Abdmn&&&%$'
        },

        dashboard: {
            loading: false,
            data: {},
            isEmpty: false,
            test: {
                id: 0,
                price: 0,
            },
            invoice: {
                ci: 0,
                status: '',
            },
            create_user: {
                ci: 0,
                name: '',
                password: '',
                admin_id: 1,
            },
            users: {},
        },

        profiles: {},
    },
    getters: {
        getMethod(state) {
            return state.user.method;
        },
        getCi(state) {
            return state.user.ci;
        },
        getName(state) {
            return state.user.name;
        },
        getLast(state) {
            return state.user.lastname;
        },
        getEmail(state) {
            return state.user.email;
        },
        getPhone(state) {
            return state.user.phone;
        },
        getAdminToken(state) {
            return state.admin.admin_token;
        },
    },
    actions: {
        // Auth
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    console.log(data)
                    console.log(data.token);
                    // console.log(data.admin_id)
                    commit('setUser', data);
                })
            .catch((err) => console.log(err));
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout');
                    return response;
                })
                .catch((err) => console.log(err.response));
        },

        // Actions for save client information
        requestTest({ commit }, client) {
            commit('setEmail', client.email);
            commit('setName', client.firstname);
            commit('setLast', client.lastname);
            commit('setPhone', client.phone_number);
            console.log(this.state.user.email);
            // fetching to backend route api with axios
            return axiosClient.post('/test-info', client)
                .then(({ data }) => {
                    commit('setClient', data.firstname);
                    commit('setCI', data.user_ci);
                    console.log(this.state.user.ci);
                    return data;
                })
                .catch((err) => console.log(err));
        },
        // Actions for gen invoices for this user
        testSelect({ commit }, clientTests) {
            commit('setTotalPay', clientTests.tests);
            commit('setMethod', clientTests.method);
            commit('setProfilesIds', clientTests.profilesId);
            console.log(this.state.user.profilesIds);
            // fetching to backend route api with axios
            return axiosClient.post('/test-method', this.state.user)
                .then((res) => {
                    console.log("Total a Pagar: ", this.state.user.total_pay);
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },
        // Actions for pay invoice of this user
        pay({ commit }, number) {
            commit('setPayNumber', number)
            // fetching to backend route api with axios
            return axiosClient.post('/test-pay', this.state.user)
                .then(({ data }) => {
                    return data;
                })
                .catch((err) => console.log(err));
        },

        // admin actions
        dashboardInvoicesData({ commit }) {
            commit('setDashboardLoading', true);
            return axiosClient.get('/invoices')
                .then((res) => {
                    commit('setDashboardLoading', false);
                    commit('setDashboardInvoicesData', res.data);
                    // console.log(res.data);
                })
        },
        dashboardTestsData({ commit }) {
            commit('setDashboardLoading', true);
            return axiosClient.get('/tests')
                .then((res) => {
                    commit('setDashboardLoading', false);
                    commit('setDashboardTestsData', res.data);
                    // console.log(res.data);
                })
        },
        dashboardTestsEdit({ commit }, test) {
            commit('setPriceNumber', test)
            return axiosClient.post('/edit', this.state.dashboard.test)
                .then((res) => {
                    console.log(res)
                });
        },
        dashboardInvoicesStatusEdit({ commit }, invoice) {
            commit('setInvoiceDash', invoice);
            return axiosClient.post('/edit-invoice', this.state.dashboard.invoice)
                .then((res) => {
                    console.log(res);
                });
        },
        dashboardUserCreate({ commit }, user) {
            commit('setDashboardUserCreate', user);

            return axiosClient.post('create-user', this.state.dashboard.create_user)
                .then((res) => {
                    // console.log(res);
                    console.log("OK");
                })
                .catch((err) => console.log(err));
        },
        dashboardGetUserData({ commit }) {
            commit('setDashboardLoading', true);
            return axiosClient('show-users')
                .then((res) => {
                    commit('setDashboardLoading', false);
                    commit('getDashUser', res.data);
                    // console.log(res);
                    console.log('OK')
                })
                .catch((err) => console.log(err));
        },
        dashboardSetCItoEval({ commit }, user) {
            commit('setUserCItoResults', user.ci);
            console.log(this.user.ci);
        },

        // profiles
        getProfiles({ commit }) {
            return axiosClient.get("profiles")
                .then((res) => {
                    console.log(res.data);
                    commit('setProfilesDatatoFront', res.data);
                })
                .catch((err) => console.log(err));
        }

    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token);
        },
        setClient: (state, client) => {
            state.user.data = client;
        },
        setMethod: (state, method) => {
            state.user.method = method;
        },
        setCI: (state, ci) => {
            state.user.ci = ci;
        },
        setEmail: (state, mail) => {
            state.user.email = mail;
        },
        setName: (state, name) => {
            state.user.name = name;
        },
        setLast: (state, last) => {
            state.user.lastname = last;
        },
        setPhone: (state, phone) => {
            state.user.phone = phone;
        },
        setTotalPay(state, prices) {
            for (let prop of prices) {
                state.user.total_pay += prop;
            }
        },

        setProfilesIds: (state, ids) => {
            state.user.profilesIds = ids;
        },

        setPayNumber(state, number) {
            state.user.pay_number = parseInt(number);
        },

        setDashboardLoading: (state, value) => {
            state.dashboard.loading = value;
        },

        setDashboardInvoicesData: (state, data) => {
            state.dashboard.data = data;
            state.dashboard.isEmpty = Object.keys(data.invoices).length === 0;
        },
        setDashboardTestsData: (state, data) => {
            state.dashboard.data = data;
            state.dashboard.isEmpty = Object.keys(data.tests).length === 0;
        },

        setPriceNumber: (state, values) => {
            state.dashboard.test.id = parseInt(values.id);
            state.dashboard.test.price = parseInt(values.price);
        },

        setInvoiceDash: (state, invo) => {
            state.dashboard.invoice.ci = parseInt(invo.ci);
            if (invo.status.toUpperCase() === 'SI') {
                state.dashboard.invoice.status = 'SI';
            } else if (invo.status.toUpperCase() === 'NO') {
                state.dashboard.invoice.status = 'NO';
            }
        },

        setDashboardUserCreate: (state, user) => {
            state.dashboard.create_user.ci = parseInt(user.ci);
            state.dashboard.create_user.name = user.name;
            state.dashboard.create_user.password = user.password;
        },

        getDashUser: (state, data) => {
            state.dashboard.users = data;
            state.dashboard.isEmpty = Object.keys(data.users).length === 0;
        },

        setProfilesDatatoFront(state, data) {
            state.profiles = data;
        },

        setUserCItoResults(state, ci) {
            state.user.ci = parseInt(ci);
        },
    },
    modules: {},
})

export default store;
