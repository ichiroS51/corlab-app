<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil Bioquímico</h3>
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
                                        <label for="Glicemia" class="block text-sm font-medium text-gray-700">Glicemia <!--Tipo: Entero -->
                                         <span>(mg/dl)</span> <span>(V.N - 70 a 100)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Urea" class="block text-sm font-medium text-gray-700">Urea <!--Tipo: Entero -->
                                        <span>(mg/dl)</span> <span>(V.N 15 a 40)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Creatinina" class="block text-sm font-medium text-gray-700">Creatinina <!--Tipo: Float -->
                                        <span>(mg/dl)</span> <span>(V.N 0,4 a 1,5)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Acido Urico" class="block text-sm font-medium text-gray-700">Acido Urico <!--Tipo: Float -->
                                         <span>(mg/dl)</span> <span>(Menor a 5,6)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Colesterol" class="block text-sm font-medium text-gray-700">Colesterol <!--Tipo: Entero -->
                                        <span>(mg/dl)</span> <span>(V.N Hasta 200)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Triglicéridos" class="block text-sm font-medium text-gray-700">Triglicéridos <!--Tipo: Entero -->
                                        <span>(mg/dl)</span> <span>(V.N 35 a 165)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="H.D.L.COL" class="block text-sm font-medium text-gray-700">H.D.L.COL <!--Tipo: Entero -->
                                        <span>(mg/dl)</span><span>(M=>45/H=>40)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="L.D.L.COL" class="block text-sm font-medium text-gray-700">L.D.L.COL <!--Tipo: Entero -->
                                        <span>(mg/dl)</span><span>(Entre 120 y 130)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="V.L.D.L.COL" class="block text-sm font-medium text-gray-700">V.L.D.L.COL <!--Tipo: Entero -->
                                        <span>(mg/dl)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Bilirrubina total" class="block text-sm font-medium text-gray-700">Bilirrubina total <!--Tipo: Float -->
                                         <span>(mg/dl)</span><span>(hasta 1,0)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Bilirrubina directa" class="block text-sm font-medium text-gray-700">Bilirrubina directa <!--Tipo: Float -->
                                        <span>(mg/dl)</span><span>(hasta 0,3)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Bilirrubina indirecta" class="block text-sm font-medium text-gray-700">Bilirrubina indirecta <!--Tipo: Float -->
                                        <span>(mg/dl)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Proteinas totales" class="block text-sm font-medium text-gray-700">Proteinas totales <!--Tipo: Float -->
                                         <span>(g/dl)</span><span>(6,0-8,0)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Albúmina" class="block text-sm font-medium text-gray-700">Albúmina <!--Tipo: Float -->
                                        <span>(g/dl)</span><span>(3,5-4,8)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Globulinas" class="block text-sm font-medium text-gray-700">Globulinas <!--Tipo: Float -->
                                        <span>(g/dl)</span><span>(1,5-3,0)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Relación A/G" class="block text-sm font-medium text-gray-700">Relación A/G <!--Tipo: Float -->
                                        </label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Sodio" class="block text-sm font-medium text-gray-700">Sodio <!--Tipo: Entero -->
                                        <span>(mg/dl)</span><span>(V.N 135 a 155)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Potasio" class="block text-sm font-medium text-gray-700">Potasio <!--Tipo: Float -->
                                        <span>(mg/dl)</span><span>(V.N 3,5-5,3)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Calcio" class="block text-sm font-medium text-gray-700">Calcio <!--Tipo: Float -->
                                         <span>(mg/dl)</span><span>(V.N 8,8-11,0)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Fósforo" class="block text-sm font-medium text-gray-700">Fósforo <!--Tipo: Float -->
                                        <span>(mg/dl)</span><span>(A=&lt4,5/N=>4,6)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Hierro" class="block text-sm font-medium text-gray-700">Hierro <!--Tipo: Float -->
                                        <span>(mg/dl)</span></label>
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
