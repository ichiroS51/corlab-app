<template>
    <div class="min-h-full">
        <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="../assets/logo.png" alt="Your Company" />
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <router-link v-for="item in navigation" :key="item.name" :to="item.to"
                                    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton
                                        class="flex max-w-xs items-center rounded-full bg-gray-800 text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span class="sr-only">Open user menu</span>
                                        <!--                                        <img class="h-8 w-8 rounded-full" :src="user.imageUrl" alt=""/>-->
                                        <UserIcon class="h-6 w-6" aira-hidden="true" />
                                    </MenuButton>
                                </div>
                                <transition enter-active-class="transition ease-out duration-100"
                                    enter-from-class="transform opacity-0 scale-95"
                                    enter-to-class="transform opacity-100 scale-100"
                                    leave-active-class="transition ease-in duration-75"
                                    leave-from-class="transform opacity-100 scale-100"
                                    leave-to-class="transform opacity-0 scale-95">
                                    <MenuItems
                                        class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem @click="logout" v-for="item in userNavigation" :key="item.name"
                                            v-slot="{ active }">
                                        <a :href="item.href"
                                            :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{
                                                item.name
                                            }}</a>
                                        </MenuItem>
                                    </MenuItems>
                                </transition>
                            </Menu>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}
                    </DisclosureButton>
                </div>
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0 text-gray-400">
                            <UserIcon class="h-6 w-6" aira-hidden="true" />
                        </div>
                        <!-- <div class="ml-3">
                            <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
                            <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
                        </div> -->
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                        <DisclosureButton @click="logout" v-for="item in userNavigation" :key="item.name" as="a"
                            :href="item.href"
                            class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                            {{ item.name }}
                        </DisclosureButton>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>
        <main>

            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon } from '@heroicons/vue/24/outline';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        BellIcon,
        Bars3Icon,
        // MenuIcon,
        XMarkIcon,
        UserIcon,
        // XIcon,
        Notification,
    },

    setup() {
        const store = useStore();
        const router = useRouter();

        return {
            navigation: [
                { name: 'Inicio', to: { name: "Landing" }, current: router.currentRoute.value.name === 'Landing' },
                { name: 'Ver Resultados', to: { name: "InvoRe" }, current: router.currentRoute.value.name === 'InvoRe' },
                { name: 'Conòcenos', to: { name: "AboutLog" }, current: router.currentRoute.value.name === 'AboutLog' },
                { name: 'Pruebas Disponibles', to: { name: "ProfilesLog" }, current: router.currentRoute.value.name === 'ProfilesLog' },
            ],
            user: {
                name: 'Tom Cook',
                email: 'tom@example.com',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            userNavigation: [
                { name: 'Cerrar Sesiòn', href: '#' },
            ],
        }

    },

    methods: {
        logout() {
            this.$store.dispatch("logout").then(() => {
                this.$router.push({
                    name: "Login",
                });
            });
        }
    }
}


</script>
