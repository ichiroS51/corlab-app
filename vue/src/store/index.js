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
            token: 1324,
            method: {},
            total_pay: 0,
            pay_number: 0,
        }
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
    },
    actions: {
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
            console.log(this.state.user.ci);
            console.log(clientTests.tests)
            commit('setTotalPay', clientTests.tests);
            commit('setMethod', clientTests.method);
            // fetching to backend route api with axios
            return axiosClient.post('/test-method', this.state.user)
                .then(({ data }) => {
                    console.log("Total a Pagar: ", this.state.user.total_pay);
                    return data;
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
        }
    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
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
        setPayNumber(state, number) {
            state.user.pay_number = parseInt(number);
        },
    },
    modules: {},
})

export default store;
