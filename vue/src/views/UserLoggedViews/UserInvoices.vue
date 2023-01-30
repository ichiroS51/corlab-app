<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="border-b">
                                <tr>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        ID #
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        N. De Pago
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Estado
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        CI
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Total
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Resultados
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of data" :key="index" class="border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>{{ item.id }}</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <span v-if="item.pay_number === null"
                                            class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-500 text-white rounded">Ninguno</span>
                                        <p>{{ item.pay_number }}</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <span v-if="item.status === null"
                                            class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-400 text-white rounded">Por
                                            Confirmar</span>
                                        <span v-else-if="item.status === 'SI'"
                                            class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">Confirmado</span>
                                        <span v-else-if="item.status === 'NO'"
                                            class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">No
                                            Confirmado</span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>{{ item.user_ci }}</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>{{ item.total_pay }}$</p>
                                    </td>
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <router-link :to="{ name: 'NotConn' }"
                                            class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:text-indigo-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                            </svg>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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
            data: computed(() => store.state.dashboard.data.invoices),
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
        this.$store.dispatch('dashboardInvoicesData');
        // this.$store.dispatch('dashboardTestsData');
    }
}
</script>
