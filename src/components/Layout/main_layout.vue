<template>
    <div class="main-layout d-flex p-0 vh-100" >
        <SidebarLayout class="sidebar border-end border-secondary d-none d-lg-block bg-black" style="width: 20%;"></SidebarLayout>
        <div class="d-flex flex-column flex-grow-1 vh-100" style="width: 80%;">
            <NavbarLayout class="navbar-wrapper" ></NavbarLayout>
            <div class="content-wrapper flex-grow-1 ps-md-4 pe-md-4  bg-black pt-3 "  bg-variant="dark" text-variant="light">
                <slot></slot>
            </div>

        </div>
    </div>
</template>

<style scoped>


@media (max-width: 991.98px) {
    .content-wrapper {
        padding-left: 0 !important;
    }
}
</style>

<script setup>
import SidebarLayout from '@/components/Layout/siblar_layout.vue'
import NavbarLayout from '@/components/Layout/navbar_layout.vue'

import { defineOptions } from 'vue'

defineOptions({
    name: 'MainLayout'
})
</script>