<template class="m-0 p-0 scroll-smooth">
  <header id="header">
    <div class="flex flex-wrap justify-between w-auto">
      <RouterLink class="item h-auto px-10 py-5" to="/"><img src="./assets/logo-taskie-web.png" alt="logo" width="180"/></RouterLink>
      <RouterLink class="item h-auto px-10 py-5" to="/Dashboard" custom><img src="./assets/user.svg" alt="user" width="36" /></RouterLink>
      <button @click="signOut" >Signout!</button> 
          
        
    </div>
  </header>

  <RouterView />
</template>


<script>

import { mapStores } from 'pinia';
import userStore from './stores/user';


export default {
  computed: {
    ...mapStores(userStore)
  },

  methods: {
    signOut() {
      this.userStore.signOut();
      
      
    },

    // reloadPage() {
    //   window.location.reload();
    // },
  },

    
};
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
}

#header {
  background-color: #8ecae6;
}
</style>
