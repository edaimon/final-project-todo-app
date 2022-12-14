<template>
    <div>
        Dashboard
    </div>
    <div class="flex justify-around"> 
        <div class="flex flex-col">
            <h2>TO DO</h2>
            <div v-for="item in tasksStore.tasks" :key="item.id" class="">  
                    <div v-if="item.status === 1">
                        {{item.title}}
                        {{item.description}}
                        status:{{item.status}}
                        <img src="../img/delete.png" @click="deleteTask(item.id)" alt="delete icon" width="15">    
                        <img src="../img/edit.png" @click="switchValue()" alt="edit icon" width="15" >

                        <div v-if="value === true">    
                            <input type="text" v-model="item.title" name="item.id" id="item.id" placeholder="Introduce your new title" >
                            <input type="text" v-model="item.description" name="item.id" id="item.id" placeholder="Introduce your new description" >
                            <img src="../img/confirm_icon.png" @click="editTask(item.id, item.title, item.description), switchValue()"  alt="edit icon" width="15"  >
                        </div> 

                    </div>
            
            </div>
        </div>
        <div class="flex flex-col">
            <h2>DOING</h2>
            <div v-for="item in tasksStore.tasks" :key="item.id" class="flex flex-col"> 
                     <div v-if="item.status === 2">
                
                        {{item.title}}
                        {{item.description}}
                        status:{{item.status}}
                        <img src="../img/delete.png" @click="deleteTask(item.id)" alt="delete icon" width="15">
                        <img src="../img/edit.png" @click="switchValue()" alt="edit icon" width="15" >
                            <div v-if="value === true">    
                                <input type="text" v-model="item.title" name="item.id" id="item.id" placeholder="Introduce your new title" >
                                <input type="text" v-model="item.description" name="item.id" id="item.id" placeholder="Introduce your new description" >
                                <img src="../img/confirm_icon.png" @click="editTask(item.id, item.title, item.description), switchValue()"  alt="edit icon" width="15"  >
                            </div>    
                    </div>
             </div>
         </div>
         <div class="flex flex-col">
            <h2>DONE</h2>
            <div v-for="item in tasksStore.tasks" :key="item.id" class="flex flex-col"> 
                     <div v-if="item.status === 3">
                
                        {{item.title}}
                        {{item.description}}
                        status:{{item.status}}
                        <img src="../img/delete.png" @click="deleteTask(item.id)" alt="delete icon" width="15">
                        <img src="../img/edit.png" @click="switchValue()" alt="edit icon" width="15" >
                            <div v-if="value === true">    
                                <input type="text" v-model="item.title" name="item.id" id="item.id" placeholder="Introduce your new title" >
                                <input type="text" v-model="item.description" name="item.id" id="item.id" placeholder="Introduce your new description" >
                                <img src="../img/confirm_icon.png" @click="editTask(item.id, item.title, item.description), switchValue()"  alt="edit icon" width="15"  >
                            </div>    
                    </div>
             </div>
         </div>
    </div>
    
    <div>
        <!-- INSERTAR TAREAS -->
    <input type="text" v-model="title" name="task" id="task" placeholder="Introduce your new title">
    <input type="text" v-model="description" name="task" id="task" placeholder="Introduce your new description">
    <img src="../img/icono_suma.png" @click="insert()" alt="icono suma" width="15" class=" bg-slate-500 rounded-full">

    </div>
</template>

<script>

import { mapStores } from 'pinia';
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";

export default {
    data(){
        return{
            title: null,
            description: null,
            value: false,
        };
    },
    computed: {
        ...mapStores(tasksStore),
        ...mapStores(userStore)
    },
    methods:{

        /* INSERTAR TAREAS */
        async insert(){
           await this.tasksStore.insertTasks(this.userStore.user.id, this.title, this.description)
           await this.tasksStore.fetchTasks()
        },

        async editTask(id, title , description){
            await this.tasksStore.updateTasks(id, title, description)
        },

        async deleteTask(id){
            await this.tasksStore.deleteTasks(id)
            await this.tasksStore.fetchTasks()
        },

        switchValue(){
            if( this.value === true){
                this.value = false;
            }
            else if( this.value === false){
                this.value = true;
            }
            
        }

    },
    mounted() {
        this.tasksStore.fetchTasks()
    },
    
}
</script>

<style>

</style>