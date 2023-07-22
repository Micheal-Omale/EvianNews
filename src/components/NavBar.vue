<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value =! isMobileMenuOpen.value;
};
</script>

<template>
  
    <header class="mx-auto p-4 bg-amber-400 font-serif">
      <div class="container px-16 mx-auto flex flex-wrap justify-between">
        <a class="font-bold text-3xl">
          <span class="text-amber-700">Evian</span>News
        </a>
        <svg
          @click="toggleMobileMenu"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 md:hidden"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
        </svg>
        <nav class="hidden md:flex space-x-7 text-xl">
          <router-link
            to="/"
            class="hover:text-gray-500 hover:border-b-4 border-gray-400 transition-colors"
          >
            Home
          </router-link>
          <router-link
            to="/technolgy"
            class="hover:text-gray-500 hover:border-b-4 border-gray-400 transition-colors"
          >
            Technology
          </router-link>
          <router-link
            to="/sport"
            class="hover:text-gray-500 hover:border-b-4 border-gray-400 transition-colors"
          >
            Sport
          </router-link>
        </nav>
      </div>
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4 space-y-4 text-center">
        <router-link to="/" class="block text-white">Home</router-link>
        <router-link to="/technology" class="block text-white">Technology</router-link>
        <router-link to="/sport" class="block text-white">Sport</router-link>
      </div>
    </header>

  

  
</template>

<style scoped>

</style>
