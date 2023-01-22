<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">Perfil Coagulación</h3>
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
                                        <label for="T.sangría" class="block text-sm font-medium text-gray-700">T.sangría <!--Tipo: Entero -->
                                         <span>(Seg)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Segundo Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="T.Coagulación" class="block text-sm font-medium text-gray-700">T.Coagulación <!--Tipo: Entero -->
                                        <span>(Seg)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>

                                    <!-- Tercer Input -->
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="T.P Tromboplastina" class="block text-sm font-medium text-gray-700">T.P Tromboplastina <!--Tipo: Entero -->
                                        <span>(Seg)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                     <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Control T.P.T" class="block text-sm font-medium text-gray-700">Control T.P.T <!--Tipo: Entero -->
                                         <span>(Seg)</span> <span>(V.N +/- 6seg)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="T. Protrombina" class="block text-sm font-medium text-gray-700">T. Protrombina <!--Tipo: Float -->
                                        <span>(Seg)</span></label> 
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Control T.P" class="block text-sm font-medium text-gray-700">Control T.P <!--Tipo: Float -->
                                        <span>(Seg)</span></label>
                                        <input type="text" name="postal-code" id="postal-code"
                                            autocomplete="postal-code"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="Razón T.P" class="block text-sm font-medium text-gray-700">Razón T.P <!--Tipo: Float -->
                                        <span>(V.N 0,8-1,2)</span></label>
                                        <input type="text" name="city" id="city" autocomplete="address-level2"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Fibrinógeno" class="block text-sm font-medium text-gray-700">Fibrinógeno <!--Tipo: Entero -->
                                        <span>(mg/dl)</span><span>(V.N 200-400)</span></label>
                                        <input type="text" name="region" id="region" autocomplete="address-level1"
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                                    </div>
                                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="Grupo Sanguíneo" class="block text-sm font-medium text-gray-700">Grupo Sanguíneo <!--Tipo: Varchar Númerico (A+,AB+,etc) -->
                                        <span>(Rh(D))</span></label>
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
