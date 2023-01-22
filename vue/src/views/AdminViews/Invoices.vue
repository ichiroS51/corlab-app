<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Facturas Generadas</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <th class="p-3">Factura #ID</th>
                            <th class="p-3">Examenes</th>
                            <th class="p-3">Estado</th>
                            <th class="p-3">Total</th>
                            <th class="p-3 text-right">Metodo</th>
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
                            <td class="p-3 text-right">
                                <p>$15,792</p>
                            </td>
                            <!-- <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                    <span>Pending</span>
                                </span>
                            </td> -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
