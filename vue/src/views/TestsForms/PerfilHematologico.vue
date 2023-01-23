<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil Hematologico</h3>
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
                                        <input type="text" name="ci" id="last-name" autocomplete="family-name"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Primer INput -->
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="hemoglobina_h" class="block text-sm font-medium text-gray-700">Hemoglobina H <!--Tipo: Float -->
                                         <span>(gr.%)</span></label>
                                        <input type="text" name="hemoglobina_h" id="hemoglobina_h" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="hematocrito" class="block text-sm font-medium text-gray-700">Hematocrito <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="hematocrito" id="hematocrito" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="leucocitos_h" class="block text-sm font-medium text-gray-700">Leucocitos H <!--Tipo: Entero -->
                                        <span>(p/mm3)</span></label>
                                        <input type="text" name="leucocitos_h" id="leucocitos_h"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="plaquetas" class="block text-sm font-medium text-gray-700">Plaquetas <!--Tipo: Entero (6 digitos) -->
                                         <span>(p/mm3)</span></label>
                                        <input type="text" name="plaquetas" id="plaquetas" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="hematies_h" class="block text-sm font-medium text-gray-700">Hematíes H <!--Tipo: Entero -->
                                        <span>(mm3)</span></label>
                                        <input type="text" name="hematies_h" id="hematies_h" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="reticulocitos" class="block text-sm font-medium text-gray-700">Reticulocitos <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="reticulocitos" id="reticulocitos"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="eritrosedimentacion" class="block text-sm font-medium text-gray-700">Eritrosedimentación <!--Tipo: Entero -->
                                         <span>(1h)</span> <span>(mm)</span></label>
                                        <input type="text" name="eritrosedimentacion" id="eritrosedimentacion" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="coombs" class="block text-sm font-medium text-gray-700">Coombs <!--Tipo: Varchar -->
                                        </label>
                                        <input type="text" name="coombs" id="coombs" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="cayados" class="block text-sm font-medium text-gray-700">Cayados <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="cayados" id="cayados"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="neutrofilos" class="block text-sm font-medium text-gray-700">Neutrófilos <!--Tipo: Float -->
                                         <span>(%)</span></label>
                                        <input type="text" name="neutrofilos" id="neutrofilos" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="linfocitos" class="block text-sm font-medium text-gray-700">Linfocitos <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="linfocitos" id="linfocitos" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="eosinofilos" class="block text-sm font-medium text-gray-700">Eosinófilos <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="eosinofilos" id="eosinofilos"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="monocitos" class="block text-sm font-medium text-gray-700">Monocitos <!--Tipo: Float -->
                                         <span>(%)</span></label>
                                        <input type="text" name="monocitos" id="monocitos" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="basofilos" class="block text-sm font-medium text-gray-700">Basófilos <!--Tipo: Float -->
                                        <span>(%)</span></label>
                                        <input type="text" name="basofilos" id="basofilos" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="frotis" class="block text-sm font-medium text-gray-700">Frotis <!--Tipo: Varchar -->
                                        </label>
                                        <input type="text" name="frotis" id="frotis"
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
