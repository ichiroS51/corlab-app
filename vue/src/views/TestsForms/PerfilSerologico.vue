<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil Serológico</h3>
                        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="Nombre" class="block text-sm font-medium text-gray-700">Nombre
                                        </label>
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="Cédula" class="block text-sm font-medium text-gray-700">Cédula
                                        </label>
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Primer INput -->
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="VDRL" class="block text-sm font-medium text-gray-700">VDRL <!--Tipo: Varchar -->
                                         <span>(Reactivo o No)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="ASTO" class="block text-sm font-medium text-gray-700">ASTO <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="R.A. test" class="block text-sm font-medium text-gray-700">R.A. test <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="P.C.R" class="block text-sm font-medium text-gray-700">P.C.R <!--Tipo: Varchar -->
                                         <span>(+ o -)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Ag. Febriles" class="block text-sm font-medium text-gray-700">Ag. Febriles <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Cel. L.E." class="block text-sm font-medium text-gray-700">Cel. L.E. <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="H.I.V (I y II) Elisa" class="block text-sm font-medium text-gray-700">H.I.V (I y II) Elisa <!--Tipo: Varchar -->
                                        <span>(Reactivo o No)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Chaga-test" class="block text-sm font-medium text-gray-700">Chaga-test <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Toxo-test" class="block text-sm font-medium text-gray-700">Toxo-test <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Mono-test" class="block text-sm font-medium text-gray-700">Mono-test <!--Tipo: Varchar -->
                                        <span>(+ o -)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
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