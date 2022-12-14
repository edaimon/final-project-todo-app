<template>
    <div>
        Dashboard
    </div>
    <div> 
        <div v-for="item in tasksStore.tasks" :key="item.id" class="p-10">
            <div>{{item.title}}</div>
        </div>
    </div>
    
    <div>
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
        };
    },
    computed: {
        ...mapStores(tasksStore),
        ...mapStores(userStore)
    },
    methods:{
        async insert(){
           await this.tasksStore.insertTasks(this.userStore.user.id, this.title, this.description)
           await this.tasksStore.fetchTasks()

        }

    },
    mounted() {
        this.tasksStore.fetchTasks()
    },
    
}
</script>

<style>

</style>