<template>

     <h2 @dblclick="switchTitle = !switchTitle " class="p-5 text-3xl font-bold text-center">{{ column.title }}</h2>  
     <input v-model="column.title" type="text" v-if="switchTitle === true"> 
     <button>
     <img @click="columnsStore.updateTitleCol(column.title, column.id); switchTitle = !switchTitle" src="../img/confirm_icon.png" alt="confirm icon" width="20">
    </button>   
    <button>   
        <img @click="deleteColumn(column.id)" src="../img/delete.png" alt="delete icon" width="20">
    </button>
</template>


<script>
import { mapStores } from "pinia";
import columnsStore from "../stores/columns";

export default {

    data(){
        return{

            switchTitle:false,

        }
    },
    computed:{
        ...mapStores(columnsStore),
    },
    props:[
        "column",
    ],

    methods:{
        async deleteColumn(id) {
          await this.columnsStore.deleteColumns(id);
          await this.columnsStore.fetchColumns();
        },
    }


}
</script>


<style>

</style>