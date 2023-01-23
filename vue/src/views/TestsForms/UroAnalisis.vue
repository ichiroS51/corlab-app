<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Uroanálisis</h3>
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
                                        <label for="color_u" class="block text-sm font-medium text-gray-700">Color U <!--Tipo: Varchar -->
                                        </label>
                                        <input type="text" name="color_u" id="color_u" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="aspecto_u" class="block text-sm font-medium text-gray-700">Aspecto U <!--Tipo: Varchar -->
                                        </label>
                                        <input type="text" name="aspecto_u" id="aspecto_u" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="densidad" class="block text-sm font-medium text-gray-700">Densidad <!--Tipo: Entero -->
                                        </label>
                                        <input type="text" name="densidad" id="densidad"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="reaccion_u" class="block text-sm font-medium text-gray-700">Reacción U <!--Tipo: Varchar -->
                                        </label>
                                        <input type="text" name="reaccion_u" id="reaccion_u" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="proteinas" class="block text-sm font-medium text-gray-700">Proteinas <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="proteinas" id="proteinas" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="glucosa" class="block text-sm font-medium text-gray-700">Glucosa <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="glucosa" id="glucosa"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="hemoglobina_u" class="block text-sm font-medium text-gray-700">Hemoglobina U <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="hemoglobina_u" id="hemoglobina_u" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="bilirrubina" class="block text-sm font-medium text-gray-700">Bilirrubina  <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="bilirrubina" id="bilirrubina" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="urobilinogeno" class="block text-sm font-medium text-gray-700">Urobilinógeno <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="urobilinogeno" id="urobilinogeno" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="c_cetonicos" class="block text-sm font-medium text-gray-700">C. Cetónicos <!--Tipo: Varchar -->
                                        <span>(+ ó -)</span></label>
                                        <input type="text" name="c_cetonicos" id="c_cetonicos" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="cel_ep_planas" class="block text-sm font-medium text-gray-700">Cel. ep. planas <!--Tipo: Varchar -->
                                        <span>(xc)</span></label>
                                        <input type="text" name="cel_ep_planas" id="cel_ep_planas" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="hematies_u" class="block text-sm font-medium text-gray-700">Hematies U <!--Tipo: Entero -->
                                        <span>(xc)</span><span>(V.N 0-2)</span></label>
                                        <input type="text" name="hematies_u" id="hematies_u" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="cel_ep_redondas" class="block text-sm font-medium text-gray-700">Cel. ep. redondas <!--Tipo: Varchar -->
                                        <span>(xc)</span></label>
                                        <input type="text" name="cel_ep_redondas" id="cel_ep_redondas" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="leucocitos_u" class="block text-sm font-medium text-gray-700">Leucocitos U <!--Tipo: Entero -->
                                        <span>(xc)</span><span>(V.N 2-3)</span></label>
                                        <input type="text" name="leucocitos_u" id="leucocitos_u" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="bacterias" class="block text-sm font-medium text-gray-700">Bacterias <!--Tipo: Varchar -->
                                        <span>(xc)</span></label>
                                        <input type="text" name="bacterias" id="bacterias" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="mucina" class="block text-sm font-medium text-gray-700">Mucina <!--Tipo: Entero -->
                                        <span>(xc)</span></label> 
                                        <input type="text" name="mucina" id="mucina" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="cristales" class="block text-sm font-medium text-gray-700">Cristales <!--Tipo: Varchar -->
                                        <span>(xc)</span></label>
                                        <input type="text" name="cristales" id="cristales" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="cilindros" class="block text-sm font-medium text-gray-700">Cilindros <!--Tipo: Varchar -->
                                        <span>(xc)</span></label>
                                        <input type="text" name="cilindros" id="cilindros" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="otros_u" class="block text-sm font-medium text-gray-700">Otros U  <!--Tipo: Text -->
                                        </label>
                                        <input type="text" name="otros_u" id="otros_u" autocomplete="address-level1"
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