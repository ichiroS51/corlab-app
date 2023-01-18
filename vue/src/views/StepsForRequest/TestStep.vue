<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div>
            <h2 class="sr-only">Steps</h2>
            <div>
                <div class="overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 w-1/2 rounded-full bg-blue-500"></div>
                </div>

                <ol class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                    <li class="flex items-center justify-start text-blue-600">
                        <span class="hidden sm:inline"> Informacion </span>

                        <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                    </li>

                    <li class="flex items-center justify-center text-blue-600">
                        <span class="hidden sm:inline"> Examenes </span>

                        <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                    </li>

                    <li class="flex items-center justify-end">
                        <span class="hidden sm:inline"> Factura </span>

                        <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </li>
                </ol>

            </div>
        </div>
        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200" />
            </div>
        </div>
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Examenes</h3>
                        <p class="mt-1 text-sm text-gray-600">
                            Elecciòn de los examenes que necesite y calculo del total a pagar y la elecciòn del
                            mètodo
                            de pago. <span class="italic text-neutral-900 underline">Para pruebas de Heces y
                                Orina traer
                                respectiva muestra en envase plástico
                                bien sellado.</span>
                        </p>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form @submit="genInvoice">
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <!-- <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                                            Nº de Comprobante
                                        </label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div> -->
                                    <label for="tests"
                                        class="col-span-6 sm:col-span-6 block text-sm font-medium text-gray-700">Seleccione
                                        los Exàmenes</label>
                                    <div class="col-span-6 sm:col-span-6 flex">
                                        <div>
                                            <div class="form-check" v-for="test in testsList" :key="test.name">
                                                <input
                                                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                                    type="checkbox" :value="test.price" @input="pushTests" name="tests">
                                                <label class="text-sm font-medium text-gray-700" for="tests">
                                                    {{ test.testName }} {{ test.price }}$
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>{{ clientTests.tests }}</div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Metodos de
                                            Pago</label>
                                        <select id="methods" name="methods" autocomplete="methods"
                                            v-model="clientTests.method"
                                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <option v-for="pay in payMethods" :key="pay.method">
                                                {{ pay.method }} {{ pay.bank }} {{ pay.ci }} 0{{ pay.cellPhone }}
                                                {{ pay.numCta }} {{ pay.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <!-- <div>Methods Tests: {{ clientTests.method }}</div> -->

                                    <!-- <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="region" class="block text-sm font-medium text-gray-700">Nº
                                            de
                                            Factura</label>
                                            <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                        </div> -->
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button type="submit"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref } from "vue";

export default {
    setup() {
        const router = useRouter();
        const loading = ref(false);
        const errors = ref({});
        const store = useStore();

        return {
            testsList: [
                { testName: 'Orina', price: 20 },
                { testName: 'Heces', price: 10 },
                { testName: 'Ematologìa', price: 15 },
                { testName: 'Perfìl Bioquìmico', price: 5 },
            ],
            payMethods: [
                { method: 'Pago Mòvil', bank: 'Banco de Venezuela', ci: 12345678, cellPhone: 4141234567 },
                { method: 'Transferencia', bank: 'Banco de Venezuela', numCta: '01020618910100006366', ci: 12345678, name: 'Zulay Ramos' },
            ],
            clientTests: {
                tests: [],
                method: {},
            }
        }
    },

    methods: {
        genInvoice(ev) {
            ev.preventDefault();
            this.$store
                .dispatch('testSelect', this.clientTests)
                .then((res) => {
                    this.$router.push({
                        name: 'Pay'
                    });
                    console.log('Info Set')
                })
                .catch((error) => {
                    this.$loading.value = false;
                    if (error.response.status === 422) {
                        errors.value = error.response.data.errors;
                    }
                });
        },

        pushTests(e) {
            this.clientTests.tests.push(parseInt(e.target.value));
        }
    }
}
</script>
