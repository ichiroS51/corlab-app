<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil Enzimático</h3>
                        <p class="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                </div>
                <div class="mt-5 md:col-span-2 md:mt-0">
                    <form action="#" method="POST">
                        <div class="overflow-hidden shadow sm:rounded-md">
                            <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="ci" class="block text-sm font-medium text-gray-700">Cédula
                                        </label>
                                        <input type="text" name="ci" id="ci" autocomplete="family-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Primer INput -->
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="s_g_o_t" class="block text-sm font-medium text-gray-700">S.G.O.T <!--Tipo: Entero -->
                                         <span>(UI/L)</span><span>(V.N 3-35)</span></label>
                                        <input type="text" name="s_g_o_t" id="s_g_o_t" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="s_g_p_t" class="block text-sm font-medium text-gray-700">S.G.P.T <!--Tipo: Entero -->
                                        <span>(UI/L)</span><span>(V.N 3-38)</span></label>
                                        <input type="text" name="s_g_p_t" id="s_g_p_t" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="f_alcalina" class="block text-sm font-medium text-gray-700">F. alcalina <!--Tipo: Entero -->
                                        <span>(UI/L)</span></label>
                                        <input type="text" name="f_alcalina" id="f_alcalina"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="f_acida" class="block text-sm font-medium text-gray-700">F. Ácida <!--Tipo: Entero -->
                                         <span>(UI/L)</span></label>
                                        <input type="text" name="f_acida" id="f_acida" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="c_p_k" class="block text-sm font-medium text-gray-700">C.P.K. <!--Tipo: Entero -->
                                        <span>(UI/L)</span></label>
                                        <input type="text" name="c_p_k" id="c_p_k" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="amilasa" class="block text-sm font-medium text-gray-700">Amilasa <!--Tipo: Entero -->
                                        <span>(UA/ml)</span><span>(V.N 25-125)</span></label>
                                        <input type="text" name="amilasa" id="amilasa"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="g_g_t" class="block text-sm font-medium text-gray-700">G.G.T. <!--Tipo: Entero -->
                                        <span>(UI/L)</span></label>
                                        <input type="text" name="g_g_t" id="g_g_t" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="ldh" class="block text-sm font-medium text-gray-700">LDH <!--Tipo: Entero -->
                                        <span>(UI/L)</span></label>
                                        <input type="text" name="ldh" id="ldh" autocomplete="address-level1"
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