<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Administrar Facturas</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <th class="p-3">Factura #ID</th>
                            <th class="p-3">Pago</th>
                            <th class="p-3">Solicitada</th>
                            <th class="p-3 text-right">Actualizada</th>
                            <th class="p-3">Editar</th>
                            <!-- <th class="p-3">Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>97412378923</p>
                            </td>
                            <td class="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td class="p-3">
                                <p>14 Jan 2022</p>
                                <p class="dark:text-gray-400">Friday</p>
                            </td>
                            <td class="p-3">
                                <p>01 Feb 2022</p>
                                <p class="dark:text-gray-400">Tuesday</p>
                            </td>
                            <td class="p-3 text-right text-blue-700">
                                <a href="#!"
                                    class="text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>

                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
