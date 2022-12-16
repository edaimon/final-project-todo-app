<template class="m-0 p-0 scroll-smooth">
  <header id="header">
    <div class="flex flex-wrap justify-between items-center navh">
      <div class="item px-20  align-middle">
        <RouterLink to="/"><img src="./assets/logo-taskie-web.png" alt="logo" width="180"/></RouterLink>
      </div>
      <div class="item h-auto px-20 align-middle">
        <!-- <RouterLink " to="/Dashboard"><button @click="signOut" >Signout</button></RouterLink> -->
        <button v-if="!!userStore.user" @click="signOut"><img src="./assets/logout-icon.svg" alt="user" width="36"/>Signout</button>
      </div>
          
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
    async signOut() {
      await this.userStore.signOut();
      this.$router.push("/");
      // this.$forceUpdate();
      
    },

  },

  // mounted() {
  //   this.$router.push('/');
  // },
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

.navh{
  height: 10vh;
  z-index: 2;
}
</style>
