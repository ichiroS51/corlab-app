<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Administrar Examenes</h2>
            <div v-if="showSuccessMessage"
                class="alert bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full alert-dismissible fade show"
                role="alert">
                <strong class="mr-1">Precio </strong> editado correctamente! Por favor recargue el sitio para
                actualizar los datos.
                <button @click="hideMessages" type="button"
                    class="btn-close box-content w-6 h-6 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="alert" aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div v-if="showErrorMessage"
                class="alert bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show"
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
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs text-center">
                    <thead class="">
                        <tr class="text-center">
                            <th class="p-3">Examen #ID</th>
                            <th class="p-3">Precio</th>
                            <th class="p-3">Nombre</th>
                            <!-- <th class="p-3 text-right">Actualizada</th> -->
                            <th class="p-3">Editar</th>
                            <!-- <th class="p-3">Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) of data" :key="index"
                            class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>{{ item.id }}</p>
                            </td>
                            <td class="p-3">
                                <p>{{ data2[index].price }}</p>
                            </td>
                            <td class="p-3">
                                {{ item.name }}
                            </td>
                            <!-- <td class="p-3">
                                {{ item.updated_at }}
                            </td> -->
                            <td class="p-3 text-right text-blue-700"
                                @click="toUpdate({ id: item.id, price: data2[index].price, name: item.name, })">
                                <a href="#!"
                                    class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                </a>
                            </td>
                            <!-- <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
            <div>
                <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                        <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">Editar Perfil #{{ updateTest.id }}
                            </h3>
                        </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0">
                        <form @submit="editPrice">
                            <div class="shadow sm:overflow-hidden sm:rounded-md">
                                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-3 gap-6">
                                        <div class="col-span-3 sm:col-span-2">
                                            <label for="price" class="block text-sm font-medium text-gray-700">Precio
                                                del
                                                Perfil</label>
                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                <span
                                                    class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">$</span>
                                                <input v-model="updateTest.price" type="text" name="price"
                                                    id="company-website"
                                                    class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="0">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="name" class="block text-sm font-medium text-gray-700">Nombre
                                            del Perfil</label>
                                        <input type="text" name="name" id="first-name" autocomplete="given-name"
                                            v-model="updateTest.name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                </div>
                                <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button type="submit"
                                        class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Guardar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="hidden sm:block" aria-hidden="true">
                <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { ref } from "vue";

export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        let viewFormEdit = false;
        return {
            showSuccessMessage: ref(false),
            showErrorMessage: ref(false),
            loading: computed(() => store.state.dashboard.loading),
            data: computed(() => store.state.dashboard.data.tests),
            data2: computed(() => store.state.dashboard.data.catalogs),
            dataIsEmpty: computed(() => store.state.dashboard.isEmpty),
            updateTest: {
                id: '',
                price: '',
                name: '',
            },
        }
    },
    methods: {
        toUpdate(obj) {
            this.updateTest.id = obj.id;
            this.updateTest.price = obj.price;
            this.updateTest.name = obj.name;
        },

        editPrice(ev) {
            ev.preventDefault();
            this.$store
                .dispatch('dashboardTestsEdit', this.updateTest)
                .then((res) => {
                    this.showSuccessMessage = true
                    this.$router.push({
                        name: 'EditTests',
                    })
                })
                .catch((err) => {
                    console.log(err);
                    this.showErrorMessage = true;
                });
        },
    },
    mounted() {
        console.log('Component is mounted');
        this.$store.dispatch('dashboardTestsData');
    }
}
</script>
