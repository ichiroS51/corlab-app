import { createStore } from "vuex"

const store = createStore({
    state: {
        user: {
            data: {},
            token: null,
        }
    },
    getters: {

    },
    actions: {

    },
    mutations: {

    },
    modules: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
        }
    },
})


export default store;
