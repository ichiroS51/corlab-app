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
                                        Precio
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Nombre
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of data" :key="index" class="border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>{{ item.id }}</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>{{ data2[index].price }}</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {{ item.name }}
                                    </td>
                                    <router-link :to="{ name: 'Info' }"
                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:text-indigo-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </router-link>
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
