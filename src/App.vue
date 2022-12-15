<template class="m-0 p-0 scroll-smooth">
  <header id="header">
    <div class="flex flex-wrap justify-between w-auto">
    <RouterLink class="item h-auto px-10 py-5" to="/"><img src="./assets/logo-taskie-web.png" alt="logo" width="180"/></RouterLink>
    <RouterLink class="item h-auto px-10 py-5" to="/Dashboard"><img src="./assets/user.svg" alt="user" width="36"/></RouterLink>

    
  </div>
  </header>

  <RouterView />
</template>

<script >
// import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>



<style scoped>
* {
  padding: 0;
  margin: 0;
}

#header {
  background-color: #8ECAE6;
}
</style>
