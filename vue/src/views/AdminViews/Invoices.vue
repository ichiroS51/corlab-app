<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Facturas Generadas</h2>
            <div v-if="loading"
                class="bg-blue-100 rounded-lg py-5 px-6 mb-3 text-base text-blue-700 inline-flex items-center w-full"
                role="alert">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle"
                    class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                    </path>
                </svg>
                Cargando Contenido...
            </div>
            <div v-if="showSuccessMessage"
                class="alert bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full alert-dismissible fade show"
                role="alert">
                <strong class="mr-1">Estado </strong> confirmado correctamente! Por favor recargue el sitio para actualizar los datos.
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
            <div v-if="dataIsEmpty" class="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700 mb-3"
                role="alert">
                No hay registros de Facturas
            </div>
            <div v-if="!dataIsEmpty" class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <th class="p-3">Factura #ID</th>
                            <th class="p-3">Nª De Pago</th>
                            <th class="p-3">Estado</th>
                            <th class="p-3">CI del Cliente</th>
                            <th class="p-3">Total</th>
                            <th class="p-3">Editar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in data" :key="index"
                            class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>{{ item.id }}</p>
                            </td>
                            <td class="p-3">
                                <span v-if="item.pay_number === null"
                                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">Ninguno</span>
                                <p>{{ item.pay_number }}</p>
                            </td>
                            <td class="p-3">
                                <span v-if="item.status === null"
                                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded">Por
                                    Confirmar</span>
                                <span v-else-if="item.status === 'SI'"
                                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Confirmado</span>
                                <span v-else-if="item.status === 'NO'"
                                    class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">No
                                    Confirmado</span>
                            </td>
                            <td class="p-3">
                                <p>{{ item.user_ci }}</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>{{ item.total_pay }}$</p>
                            </td>
                            <td class="p-3 text-right text-blue-700"
                                @click="toEdit({ ci: item.user_ci, status: item.status })">
                                <a href="#!"
                                    class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                <h3 class="text-lg font-medium leading-6 text-gray-900">Editar Estado del Pago
                                </h3>
                                <p class="mt-1 text-sm text-gray-600">Escriba: "Si" para confirmar el pago, "No" si es
                                    aun no ha sido confirmado el pago</p>
                            </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                            <form @submit="edit">
                                <div class="shadow sm:overflow-hidden sm:rounded-md">
                                    <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="ci" class="block text-sm font-medium text-gray-700">CI del
                                                    cliente</label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <span
                                                        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">V
                                                        -</span>
                                                    <input v-model="invoiceEdit.ci" type="text" name="ci"
                                                        id="company-website"
                                                        class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="0">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="name" class="block text-sm font-medium text-gray-700">Estado del
                                                Pago</label>
                                            <input v-model="invoiceEdit.status" type="text" name="name" id="first-name"
                                                autocomplete="given-name"
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
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default {
    setup() {
        const store = useStore();

        return {
            showSuccessMessage: ref(false),
            showErrorMessage: ref(false),
            invoiceEdit: {
                ci: '',
                status: '',
            },
            dataIsEmpty: computed(() => store.state.dashboard.isEmpty),
            loading: computed(() => store.state.dashboard.loading),
            data: computed(() => store.state.dashboard.data.invoices),
        }
    },

    methods: {
        toEdit(obj) {
            this.invoiceEdit.ci = obj.ci;
            if (obj.status === null) {
                this.invoiceEdit.status = '';
            }
        },

        edit(ev) {
            ev.preventDefault();
            this.$store
                .dispatch('dashboardInvoicesStatusEdit', this.invoiceEdit)
                .then((res) => {
                    console.log("Edit status successfully");
                    this.showSuccessMessage = true;
                    this.$forceUpdate();
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    this.showErrorMessage = true;
                });
        },

        hideMessages(ev) {
            this.showSuccessMessage = false;
            this.showErrorMessage = false;
        },
    },

    mounted() {
        console.log(`the component is now mounted.`)
        this.$store.dispatch('dashboardInvoicesData');
    }
}


</script>
