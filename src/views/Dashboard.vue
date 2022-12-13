<template>
    <div>
        Dashboard
    </div>
    <div> 
        <div v-for="item in tasksStore.tasks" :key="item.id">
            <div>{{item.title}}</div>
            
        </div>
    </div>
    
</template>

<script>

import { mapStores } from 'pinia';
import tasksStore from "../stores/tasks";

export default {
    computed: {
        ...mapStores(tasksStore),
    },
    mounted() {
        this.tasksStore.fetchTasks()
    },
    
}
</script>