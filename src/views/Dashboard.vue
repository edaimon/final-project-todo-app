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
    <input type="text" name="task" id="task" placeholder="Introduce your new task">
    <img src="../img/icono_suma.png" @click="" alt="icono suma" width="15" class=" bg-slate-500 rounded-full">

    </div>
</template>

<script>

import { mapStores } from 'pinia';
import tasksStore from "../stores/tasks";

export default {
    computed: {
        ...mapStores(tasksStore),
    },
    method:{
        insert(){
            this.tasksStore.insertTasks()
        }

    },
    mounted() {
        this.tasksStore.fetchTasks()
    },
    
}
</script>

<style>

</style>