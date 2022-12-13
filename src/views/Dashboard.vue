<template>
    <div>
        Dashboard
    </div>
    <div> 
        <div v-for="item in tasks" :key="item.id">
            <div>{{item.title}}</div>
        </div>
    </div>
</template>

<script>

import { mapStores } from 'pinia';
import tasksStore from "../stores/tasks";

export default {
    data(){
        return{
            tasks: null,
        };
    },
    computed: {
        ...mapStores(tasksStore)
    },

    methods: {
        async fetchData(){
            const fetchedData = await this.tasksStore.fetchTasks()
            console.log(fetchedData)
            this.tasks = fetchedData;
        },
    }
}
</script>