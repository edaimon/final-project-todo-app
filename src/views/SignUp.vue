<template>
    <div>
        SignUp

        <div>
            <input type="text" v-model="email" placeholder="Enter your mail">
            <input type="password" v-model="password" name="password" placeholder="Enter your password">
         </div>
        <button @click="register()">Register!</button>
        <button @click="login()">Login!</button>
        <button @click="signOut"> Signout! </button>
    </div>
</template>

<script>

import { mapStores } from 'pinia';
import userStore from '../stores/user';


export default {
    computed: {
        ...mapStores(userStore)
    },

    data(){
        return{
            email: null,
            password: null,
        }
    },

    methods: {
        register() {
            this.userStore.signUp(this.email, this.password)
        },
        async login() {
            const signInConfirm = await this.userStore.signIn(this.email, this.password)
            if (signInConfirm === 0){
                this.$router.push("Dashboard");
            } 
        },
        signOut(){
            this.userStore.signOut()
        },

    },
};
</script>