<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="hidden sm:block" aria-hidden="true">
            <div class="py-5">
                <div class="border-t border-gray-200" />
            </div>
        </div>

        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Informaciòn Personal</h3>
                        <p class="mt-1 text-sm text-gray-600">
                            Nombres, apellidos, cèdula de identidad y demàs informaciòn necesaria serà solicitada en
                            èste formulario.
                        </p>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form @submit="request">
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                                            Nombres
                                        </label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            v-model="clientData.firstname" required />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="last-name"
                                            class="block text-sm font-medium text-gray-700">Apellidos</label>
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            v-model="clientData.lastname" required />
                                    </div>

                                    <div class="col-span-6 sm:col-span-4">
                                        <label for="email-address"
                                            class="block text-sm font-medium text-gray-700">Correo Electrònico</label>
                                        <input type="text" name="email-address" id="email-address" autocomplete="email"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            v-model="clientData.email" required />
                                    </div>

                                    <div class="col-span-2 sm:col-span-4">
                                        <label for="user_ci" class="block text-sm font-medium text-gray-700">Cèdula de
                                            Identidad</label>
                                        <input type="text" name="user_ci" id="user_ci" autocomplete="email"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            v-model="clientData.user_ci" required />
                                    </div>

                                    <!-- <div class="col-span-6 sm:col-span-3">
                                        <label for="country"
                                            class="block text-sm font-medium text-gray-700">Country</label>
                                        <select id="country" name="country" autocomplete="country-name"
                                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div> -->

                                    <!--                                    <div class="col-span-6">
                                        <label for="street-address" class="block text-sm font-medium text-gray-700">
                                            Direcciòn
                                        </label>
                                        <input type="text" name="street-address" id="street-address"
                                            autocomplete="street-address"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>-->

                                    <!--                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" class="block text-sm font-medium text-gray-700">Ciudad</label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>-->

                                    <!--                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="region"
                                            class="block text-sm font-medium text-gray-700">Estado</label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>-->

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="phone_number" class="block text-sm font-medium text-gray-700">Nùmero
                                            de Telèfono</label>
                                        <input type="text" name="phone_number" id="phone_number"
                                            autocomplete="phone_number"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            v-model="clientData.phone_number" required />
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button type="submit" v-if="hidden"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save {{ hidden }}</button>

                            </div>
                        </div>
                    </form>
                </div>
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
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Factura</h3>
                        <p class="mt-1 text-sm text-gray-600">
                            Elecciòn de los examenes que necesite y calculo del total a pagar y la elecciòn del mètodo
                            de pago. <span class="italic text-neutral-900 underline">Para pruebas de Heces y Orina traer
                                respectiva muestra en envase plástico
                                bien sellado.</span>
                        </p>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium text-gray-700">
                                            Nº de Comprobante
                                        </label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="country"
                                            class="block text-sm font-medium text-gray-700">Exàmen</label>
                                        <select id="country" name="country" autocomplete="country-name"
                                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <option v-for="test in testsList" :key="test.name">
                                                {{ test.testName }} {{ test.price }}$
                                            </option>
                                        </select>
                                    </div>

                                    <div class="col-span-6 sm:col-span-6">
                                        <label for="country"
                                            class="block text-sm font-medium text-gray-700">Country</label>
                                        <select id="country" name="country" autocomplete="country-name"
                                            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                            <option v-for="pay in payMethods" :key="pay.method">
                                                {{ pay.method }} {{ pay.bank }} {{ pay.ci }} 0{{ pay.cellPhone }}
                                                {{ pay.numCta }} {{ pay.name }}

                                            </option>
                                        </select>
                                    </div>

                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" class="block text-sm font-medium text-gray-700">Total a
                                            Pagar</label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            readonly />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="region" class="block text-sm font-medium text-gray-700">Nº de
                                            Factura</label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>

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

<script setup>
import store from '../store';

let hidden = true;

const testsList = [
    { testName: 'Orina', price: 20 },
    { testName: 'Heces', price: 10 },
    { testName: 'Ematologìa', price: 15 },
    { testName: 'Perfìl Bioquìmico', price: 5 },
];

const payMethods = [
    { method: 'Pago Mòvil', bank: 'Banco de Venezuela', ci: 12345678, cellPhone: 4141234567 },
    { method: 'Transferencia', bank: 'Banco de Venezuela', numCta: '01020618910100006366', ci: 12345678, name: 'Zulay Ramos' },
];

const clientData = {
    firstname: '',
    lastname: '',
    email: '',
    user_ci: '',
    phone_number: '',
};

function request(ev) {
    ev.preventDefault();
    store
        .dispatch('requestTest', clientData)
        .then((res) => {
            hidden = false;
            console.log(hidden)
        })
}

</script>
