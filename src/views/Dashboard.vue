<template>
    <div>
        Dashboard
        {{taskStore}}
    </div>
</template>

<script>

import { mapStores } from 'pinia';
import userStore from '../stores/user';
import taskStore from "../stores/tasks"

export default {
    data(){
        return{

        };
    },
    computed: {
        ...mapStores(userStore),
        ...mapStores(taskStore)
    },

    methods: {
        login() {
            this.userStore.signUp()
        }
    }
}
</script>