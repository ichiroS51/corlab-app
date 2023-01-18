<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <h2 class="sr-only">Steps</h2>
        <div>
            <div class="overflow-hidden rounded-full bg-gray-200">
                <div class="h-2 w-1/4 rounded-full bg-blue-500"></div>
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

                <li class="flex items-center justify-end">
                    <span class="hidden sm:inline"> Factura </span>

                    <svg class="h-6 w-6 sm:ml-2 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </li>
            </ol>

        </div>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>
