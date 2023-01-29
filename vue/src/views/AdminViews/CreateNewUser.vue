<template>
    <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg">
            <h1 class="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                Crear Usuario para Cliente
            </h1>

            <p class="mx-auto mt-4 max-w-md text-center text-gray-500">
                En los siguientes campos insertaras la informaciòn necesaria para poder crear un usuario para un un
                cliente especìfico dentro de la aplicaciòn
            </p>

            <div v-if="showSuccessMessage" class="alert bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full alert-dismissible fade show"
                role="alert">
                <strong class="mr-1">Usuario </strong> creado correctamente!
                <button @click="hideMessages" type="button"
                    class="btn-close box-content w-6 h-6 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="alert" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div v-if="showErrorMessage" class="alert bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show"
                role="alert">
                <strong class="mr-1">Error </strong> , datos invalidos!
                <button @click="hideMessages" type="button"
                    class="btn-close box-content w-6 h-6 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="alert" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <form @submit="createUser" class="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
                <p class="text-lg font-medium">Ingrese los Datos</p>

                <div>
                    <label for="ci" class="text-sm font-medium">Cèdula del Usuario</label>
                    <div class="relative mt-1">
                        <input type="text" id="ci" name="ci" v-model="user.ci"
                            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Ingresar CI" />
                    </div>
                </div>

                <div>
                    <label for="username" class="text-sm font-medium">Nombre de Usuario</label>
                    <div class="relative mt-1">
                        <input type="text" id="username" name="username" v-model="user.name"
                            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Ingresar Nombre de Usuario" />
                    </div>
                </div>

                <div>
                    <label for="password" class="text-sm font-medium">Contraseña</label>
                    <div class="relative mt-1">
                        <input type="password" id="password" v-model="user.password"
                            class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Contraseña" />
                    </div>
                </div>

                <button type="submit"
                    class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                    Crear Usuario
                </button>
            </form>
        </div>
    </div>

</template>

<script>
import store from "../../store";
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import { ref } from "vue";

export default {
    setup() {
        const router = useRouter();
        const theStore = useStore();
        let loading = ref(false);

        return {
            showSuccessMessage: ref(false),
            showErrorMessage: ref(false),
            user: {
                ci: '',
                name: '',
                password: '',
            }
        }
    },

    methods: {
        createUser(ev) {
            ev.preventDefault();

            store
                .dispatch('dashboardUserCreate', this.user)
                .then((res) => {
                    console.log(res);
                    this.showSuccessMessage = true;
                })
                .catch((err) => {
                    console.log(err);
                    this.showErrorMessage = true;
                })
        },

        hideMessages(ev) {
            this.showSuccessMessage = false;
            this.showErrorMessage = false;
        },
    },
}

</script>
