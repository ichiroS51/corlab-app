<template>
    <div class="container flex flex-col justify-center p-6 mx-auto">
        <div class="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 class="mb-4 text-2xl font-bold leading-tight">Usuarios Creados</h2>
            <div v-if="loading"
                class="bg-blue-100 rounded-lg py-5 px-6 mb-3 text-base text-blue-700 inline-flex items-center w-full"
                role="alert">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle"
                    class="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path fill="currentColor"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z">
                    </path>
                </svg>
                Cargando Contenido...
            </div>
            <div v-if="dataIsEmpty" class="bg-yellow-100 rounded-lg py-5 px-6 mb-4 text-base text-yellow-700 mb-3"
                role="alert">
                No hay registros de Usuarios
            </div>
            <div v-if="!dataIsEmpty" class="overflow-x-auto">
                <table class="min-w-full text-xs">
                    <thead class="">
                        <tr class="text-left">
                            <th class="p-3">Usuario ID</th>
                            <th class="p-3">Nombre de Usuario</th>
                            <th class="p-3">CI</th>
                            <th class="p-3">Correo</th>
                            <!-- <th class="p-3">Status</th> -->
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) of users" :key="index" class="border-b border-opacity-20 dark:border-gray-700">
                            <td class="p-3">
                                <p>{{ item.id }}</p>
                            </td>
                            <td class="p-3">
                                <p>{{ item.name }}</p>
                            </td>
                            <td class="p-3">
                                <p>{{ clients[index].user_ci }}</p>
                            </td>
                            <td class="p-3">
                                <p>{{ clients[index].email }}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const loading = computed(() => store.state.dashboard.loading);
const users = computed(() => store.state.dashboard.users.users);
const clients = computed(() => store.state.dashboard.users.clients);
const dataIsEmpty = computed(() => store.state.dashboard.isEmpty);

store.dispatch("dashboardGetUserData")
</script>
