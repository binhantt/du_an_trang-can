<template>
  <b-navbar toggleable="sm" class="bg-black shadow-sm border-bottom border-dark">
    <b-container>
      <!-- Toggle Button -->
      <b-navbar-toggle v-model="isNavOpen" target="nav-collapse">
        <template #default="{ expanded }">
          <i :class="expanded ? 'fas fa-times' : 'fas fa-bars'" class="text-white"></i>
        </template>
      </b-navbar-toggle>

      <!-- Collapsible Content -->
      <b-collapse id="nav-collapse" is-nav v-model="isNavOpen" class="bg-black d-flex justify-content-between">
        <NavbarRoutes :onLinkClick="() => isNavOpen = false" />
        <b-navbar-nav class="d-flex align-items-center">
          <NavbarSocialLinks />
          <NavbarCvButton />
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { ref } from 'vue'

const isNavOpen = ref(false)

import NavbarRoutes from '@/components/Navbar/NavbarRoutes.vue'
import NavbarSocialLinks from '@/components/Navbar/NavbarSocialLinks.vue'
import NavbarCvButton from '@/components/Navbar/NavbarCvButton.vue'
</script>
