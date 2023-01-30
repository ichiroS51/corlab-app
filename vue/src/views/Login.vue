<template>
    <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div class="w-full max-w-md space-y-8">
            <div>
                <img class="mx-auto h-28 w-auto" src="../assets/logo.png" alt="Your Company">
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Iniciar Sesion
                </h2>
            </div>
            <form class="mt-8 space-y-6" @submit="login">
                <input type="hidden" name="remember" value="true">
                <div class="-space-y-px rounded-md shaw-sm">
                    <div v-if="erroMsg"
                        class="alert bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show"
                        role="alert">
                        <strong class="mr-1">{{ erroMsg }}</strong>
                        <button type="button" @click="erroMsg = ''"
                            class="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="alert" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <label for="email-address" class="sr-only">Correo Electrònico</label>
                        <input id="email-address" name="email" type="email" autocomplete="email" required
                            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Correo Electronico" require v-model="user.email">
                    </div>
                    <div>
                        <label for="password" class="sr-only">Contraseña</label>
                        <input id="password" name="password" type="password" autocomplete="current-password" required
                            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder="Password" require v-model="user.password">
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <div class="text-sm">
                        <router-link :to="{ name: 'NotConnNoLog' }" href="#"
                            class="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste tu
                            contraseña?</router-link>
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <!-- Heroicon name: mini/lock-closed -->
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                        Iniciar Sesiòn
                    </button>
                </div>
            </form>
        </div>
        <img src="../assets/image_hero.jpg" alt="" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
    </div>
</template>

<script>
import store from "../store";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { ref } from "vue";
import { computed } from "vue";

export default {
    setup() {
        const router = useRouter();
        const theStore = useStore();
        let loading = ref(false);

        return {
            user: {
                email: '',
                password: '',
            },
            erroMsg: ref(""),
            admin_id: theStore.getters.getAdminToken,
            users_token: computed(() => theStore.state.users.users_token),
        }
    },

    methods: {
        login(ev) {
            ev.preventDefault();

            store.dispatch('login', this.user)
                .then((res) => {
                    console.log(res)
                    if (sessionStorage.getItem("TOKEN") === this.admin_id) {
                        this.$router.push({
                            name: 'Invoices',
                        })
                    } else if (sessionStorage.getItem("TOKEN") === this.users_token) {
                        this.$router.push({
                            name: 'Landing',
                        })
                    }
                })
                .catch((err) => {
                    this.erroMsg = "Datos Invalidos";
                    console.log(err);
                });
        }
    }
}
</script>


<style scoped>

</style>
