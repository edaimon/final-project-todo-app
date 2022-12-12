<template>
  <header>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/projects">Go to Home</RouterLink>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>



<style scoped>


</style>
