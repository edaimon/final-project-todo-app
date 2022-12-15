<template>
    <div class="flex justify-center items-center mt-52">
        <div class="flex flex-col  bg-white p-10 w-1/3 h-96 rounded-l-xl">
            <h2 class="m-5 text-center">SIGN IN</h2>
            <input type="text" v-model="email" placeholder="Enter your mail" class=" border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 m-5">
            <input type="password" v-model="password" name="password" placeholder="Enter your password" class=" border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 m-5">
            <div class="flex justify-center pt-5">
                <button @click="login()" class=" bg-blue-400 rounded-lg w-32 text-center">LOGIN!</button>
            </div>            
            <div class="flex justify-center pt-5">
             <p>you dont have an account?</p>
             <button @click="switchImage = !switchImage" class="pl-5"> Register!</button>
            </div>

         </div>

         <div class="flex flex-col  bg-white p-10 w-1/3 h-96 rounded-r-xl">
            <h2 class="m-5 text-center"> SIGN UP</h2>
            <input type="text" v-model="email" placeholder="Enter your mail" class=" border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 m-5">
            <input type="password" v-model="password" name="password" placeholder="Enter your password" class=" border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 m-5">
            <div class="flex justify-center pt-5">
                <button @click="register()" class=" bg-blue-400 rounded-lg w-32">REGISTER!</button>
            </div>
            <div class="flex justify-center pt-5">
                <p>Already a user?</p>
                <button @click="switchImage = !switchImage" class="pl-5">Login!</button>
            </div>
        </div>
<!--         <button @click="signOut"> Signout! </button> -->
        <img src="../img/presentation_1.jpg" alt="img_presentation" width="700" class="imgPosition rounded-xl" :class="{'imgPositionSwitch': switchImage}">
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
            switchImage: false,
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

        switchFormRegister(){



        },

        signOut(){
            this.userStore.signOut()
        },

    },
};
</script>

<style scoped>

body{
    background-color: #8ECAE6;
}

.imgPosition{
    position: absolute;
    right: 280px;
    transition: transform 1s;
}

.imgPositionSwitch{

    transform: translateX(-680px);
}
</style>