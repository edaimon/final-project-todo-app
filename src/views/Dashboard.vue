<template>
    <div>
        Dashboard

    </div>
</template>

<script>

import { mapStores } from 'pinia';
import taskStore from '../stores/tasks';

export default {
    data(){
        return{
/*             taskStore: TASKSTORE, */
            tasks: null,
        };
    },

    computed: {
        ...mapStores(taskStore)
    },

    methods: {
        fetchData (){
            this.taskStore.fetchTasks()
        },
    },

}
</script>