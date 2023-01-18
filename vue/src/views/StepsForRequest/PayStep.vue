<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div>
            <h2 class="sr-only">Steps</h2>
            <div>
                <div class="overflow-hidden rounded-full bg-gray-200">
                    <div class="h-2 w-full rounded-full bg-blue-500"></div>
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

                    <li class="flex items-center justify-end text-blue-600">
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
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">
                        <p class="max-w-xl text-lg">
                            Factura
                        </p>

                        <div class="mt-8">
                            <span href="" class="text-2xl font-bold text-pink-600">
                                REALIZAR EL PAGO PRIMERO, LUEGO INGRESAR EL NUMERO DE COMPROBANTE EN EL CAMPO QUE INDICA
                            </span>

                            <address class="mt-2 not-italic">
                                {{ method }}
                            </address>
                        </div>
                    </div>

                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form @submit="payRequest">
                            <div>
                                <label class="sr-only" for="name">Nombre</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Nombre"
                                    type="text" id="name" readonly :value="user_name" />
                            </div>
                            <div>
                                <label class="sr-only" for="name">CI</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="CI"
                                    type="text" id="name" readonly :value="user_ci" />
                            </div>

                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label class="sr-only" for="email">Correo</label>
                                    <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address" type="email" id="Correo Electrònico" readonly :value="user_email"  />
                                </div>

                                <div>
                                    <label class="sr-only" for="phone">Telèfono</label>
                                    <input class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Phone Number" type="tel" id="Telèfono" readonly :value="user_phone" />
                                </div>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="region" class="sr-only block text-sm font-medium text-gray-700">Nº
                                    de
                                    Comprobante</label>
                                <input v-model="pay_number" type="text" name="region" id="region" autocomplete="address-level1"
                                    class="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="Nùmero de Comprobante"/>
                            </div>

                            <div class="mt-4">
                                <button type="submit"
                                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                                    <span class="font-medium"> Solicitar </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        return {
            method: store.getters.getMethod,
            user_ci: store.getters.getCi,
            user_name: store.getters.getName,
            user_email: store.getters.getEmail,
            user_phone: store.getters.getPhone,
            pay_number: 0,
        }
    },

    methods: {
        payRequest(ev) {
            ev.preventDefault();
            this.$store
                .dispatch('pay', this.pay_number)
                .then((res) => {
                    // this.$router.push({
                    //     name: 'Pay'
                    // });
                    console.log('Request Test Successfully')
                })
                .catch((error) => {
                    this.$loading.value = false;
                    if (error.response.status === 422) {
                        errors.value = error.response.data.errors;
                    }
                });
        },
    }
}
</script>
