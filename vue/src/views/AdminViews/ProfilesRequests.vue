<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Perfiles Disponibles</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <!-- <th class="p-3">#ID</th> -->
                            <th class="p-3">ID</th>
                            <th class="p-3">Nombre de la Prueba</th>
                            <!-- <th class="p-3">ID del Perfil</th> -->
                            <!-- <th class="p-3">Evaluar</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in profiles" :key="index"
                            class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>#{{ item.id }}</p>
                            </td>
                            <td class="p-3">
                                <p>{{ item.name }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br>
            <h2 class="mb-4 text-2xl font-bold leading-tight">Perfiles Solicitados</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <!-- <th class="p-3">#ID</th> -->
                            <th class="p-3">ID</th>
                            <th class="p-3">ID del Perfil</th>
                            <th class="p-3">CI del Cliente</th>
                            <th class="p-3">Evaluar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in selected" :key="index"
                            class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>{{ item.id }}</p>
                            </td>
                            <td class="p-3 text-left">
                                <p>#{{ item.profile_id }}</p>
                            </td>
                            <td class="p-3">
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <span
                                        class="inline-flex items-center rounded-l-md border border-r-0 border-gray-100 bg-gray-50 px-3 text-sm text-gray-500">V
                                        -</span>
                                    <input :value="item.client_id" type="text" name="ci" id="company-website"
                                        class="flex-1 rounded-none rounded-r-md border-gray-100 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                        placeholder="0" readonly>
                                </div>
                                <!-- <p>V-{{ item.client_id }}</p> -->
                            </td>
                            <td class="p-3 text-right text-blue-700">
                                <a @click.prevent="goToResults(item.profile_id)" href="#!"
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
            user: {
                ci: 0,
            },
            dataIsEmpty: computed(() => store.state.dashboard.isEmpty),
            // loading: computed(() => store.state.dashboard.loading),
            // data: computed(() => store.state.dashboard.data.invoices),
            selected: computed(() => store.state.dashboard.data.tests),
            profiles: computed(() => store.state.dashboard.data.profiles),
        }
    },

    methods: {
        goToResults(id) {
            switch (id) {
                case 1:
                    this.$router.push({
                        name: 'PerfilHema'
                    });
                    break;
                case 2:
                    this.$router.push({
                        name: 'PerfilBioqui'
                    });
                    break;
                case 3:
                    this.$router.push({
                        name: 'PerfilCoagula'
                    });
                    break;
                case 4:
                    this.$router.push({
                        name: 'PerfilSerologi'
                    });
                    break;
                case 5:
                    this.$router.push({
                        name: 'PerfilEnzimati'
                    });
                    break;
                case 6:
                    this.$router.push({
                        name: 'CoproAnalisis'
                    });
                    break;
                case 7:
                    this.$router.push({
                        name: 'UroAnalisis'
                    });
                    break;
                case 8:
                    this.$router.push({
                        name: 'PruebaDeEmbarazo'
                    });
                    break;
            }
        }
    },

    mounted() {
        console.log(`the component is now mounted.`)
        this.$store.dispatch('dashboardInvoicesData');
    }
}


</script>
