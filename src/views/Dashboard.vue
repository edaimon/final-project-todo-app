<template>
    <div>
        Dashboard
        <form action="">
            
        </form>
        <button @click="login">Login!</button>
    </div>
</template>

<script>

import { mapStores } from 'pinia';
import userStore from '../stores/user';


export default {
    computed: {
        ...mapStores(userStore)
    },

    methods: {
        login() {
            this.userStore.signUp()

        }
    }
}
</script>