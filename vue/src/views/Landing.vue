<template>
    <div>
        <section>
            <div
                class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-5xl font-bold leading-none sm:text-6xl">Solicita
                        <span class="text-violet-400">tu prueba</span>
                    </h1>
                    <p class="mt-6 mb-8 text-lg sm:mb-12">Selecciona la prueba que necesites
                        <br class="hidden md:inline lg:hidden">en nuestra lista
                    </p>
                    <div
                        class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <router-link rel="noopener noreferrer" :to="{ name: 'InfoWhenLog' }"
                            class="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Solicitar</router-link>
                        <!--                    <a rel="noopener noreferrer" href="#"
                           class="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Malesuada</a>-->
                    </div>
                </div>
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="../assets/image_hero.jpg" alt=""
                        class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-full">
                </div>
            </div>
        </section>
        <section class="dark:text-gray-800">
            <div
                class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div
                    class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 class="text-5xl font-bold leading-none sm:text-6xl">Ubicanos en:
                        <span class="dark:text-violet-400">Av. Bolívar de Punta de Mata
                        </span>Al lado de Mercado MAXI C.A
                    </h1>
                    <p class="mt-6 mb-8 text-lg sm:mb-12">Contacto:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                        </svg>

                        <br class="hidden md:inline lg:hidden">+58 426-3378268 | 0414-1840052
                    </p>
                    <div
                        class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#"
                            class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">ramoszulay06@gmail.com</a>
                    </div>
                </div>
                <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="../assets/location.png" alt=""
                        class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$router.currentRoute.value.name === 'Landing');
    },
}
</script>
