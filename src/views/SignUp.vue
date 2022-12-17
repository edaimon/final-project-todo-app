<template>


    <div class=" sizeContainer bg-blue-400 flex justify-center items-center box-border color-dark-blue">
        <!-- SIGN IN FORM -->
            <div v-if="switchForm === false" class="sizeContainer flex flex-col justify-around  bg-white  min-w-fit"> <!-- PONER AQUI EL FALSE SE MOSTRARA EL FORM DEL SIGNIN -->
                <div class="sizeContainerForm flex flex-col justify-center items-center">
                    <h2 class="m-5 text-center text-5xl font-bold textColor">WELCOME TO TASKIE!</h2>
                    <form action="submit" @submit.prevent="login()" class="flex flex-col justify-evenly h-1/3 my-10 w-1/4">
                        <div class="inputBox ">
                            <input type="text" v-model="email"  class=" inputMail w-full border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 h-14">
                            <p>Enter your email</p>
                        </div>
                        <div class="inputBoxPass">
                            <input type="password" v-model="password" name="password" class="inputPass w-full border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 h-14">
                            <p>Enter your password</p>
                        </div>
                        <div class="flex justify-center pt-5">
                            <button class="loginBtt rounded-lg w-64 h-16 text-center text-white font-bold shadow-xl">LOGIN!</button>
                        </div>     
                    </form>       
                    <div class="flex justify-center pt-5">
                    <p>you dont have an account?</p>
                    <button @click="switchImage = !switchImage, switchForm = !switchForm" class=" font-bold pl-5"> Register!</button>
                    </div>
                </div>
            </div>

         <!-- SIGN UP FORM -->
         
            <div v-if="switchForm === true" class="sizeContainer flex flex-col items-end bg-white min-w-fit">  <!--PONER QUE SI LA VARIABLE SE CONVIERTE EN TRU SE MUESTRA ESTA -->
                <div class="sizeContainerForm flex flex-col justify-center items-center">
                    <h2 class="m-5 text-center text-5xl font-bold textColor"> CREATE AN ACCOUNT</h2>
                    <form action="sumbit" @submit.prevent="register()"  class="flex flex-col justify-evenly h-1/3 my-10 w-1/4">
                        <div class="inputBox ">
                            <input type="text" v-model="email"  class=" inputMail w-full border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 h-14">
                            <p>Enter your email</p>
                        </div>
                        <div class="inputBoxPass">
                            <input type="password" v-model="password" name="password" class="inputPass w-full border-2 border-blue-200 rounded-lg text-center pt-1 pb-1 placeholder-gray-900 h-14">
                            <p>Enter your password</p>
                        </div>
                        <div class="flex justify-center pt-5">
                            <button class="loginBtt rounded-lg w-64 h-16 text-center text-white font-bold shadow-xl">REGISTER!</button>
                        </div>
                    </form>
                    <div class="flex justify-center pt-5">
                        <p>Already a user?</p>
                        <button @click="switchImage = !switchImage, switchForm = !switchForm" class="font-bold pl-5">Login!</button>
                    </div>
             </div>
            </div>  
            
            <div class=" imgPosition shadow-2xl" :class="{'imgPositionSwitch': switchImage}">
                <img src="../img/presentation.jpg" alt="img_presentation" class=" imgSize">
            </div> 

       
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
            switchForm: false,
        }
    },

    methods: {

       async register() {
           const signUp = await this.userStore.signUp(this.email, this.password)
           alert(MessageEvent="Confirm your email, please.")
           if (signUp === 1){
            this.switchImage = false;
            this.switchForm = false;
            }
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

<style>


.imgPosition{
    position:absolute;
    right: 0;
    transition: transform 0.6s;  
    z-index: 2;
    width: 50vw;
}

.imgPositionSwitch{
    transform: translateX(-100%);
}

.sizeContainer{
    height: 90vh;
    width: 100vw;
    z-index: 1;
}

.sizeContainerForm{
    height: 90vh;
    width: 50vw;
}

.imgSize{
    height: 90vh;
    object-fit:cover;
}
/*
.itemSize{
    width: 100%;
} */

.loginBtt{
    background-color: #219ebc;
}

.loginBtt:hover{
    background-color: white;
    color: #023047;
    border-width:2px;
    border-color: #219ebc;
}

.inputBox{
    position:relative;
}

.inputBoxPass{
    position:relative;
}

.inputBox input{
    outline: none;
}

.inputBoxPass input{
    outline: none;
}

.inputBox p{
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translateY(-50%);
    color:#023047;
    font-size: 1.2rem;
    pointer-events: none;
    transition: .3s;
}

.inputBoxPass p{
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translateY(-50%);
    color:#023047;
    font-size: 19px;
    pointer-events: none;
    transition: .3s;
}

.inputMail:focus ~ p{
    top: 0;
    left: 30%;
    padding: 0 2px;
    background-color: white;
}

.inputPass:focus ~ p{
    top: 0;
    left: 25%;
    padding: 0 2px;
    background-color: white;
}

</style>