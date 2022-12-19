<template>
  <div class="flex flex-col mb-6 ">
    <div class=" flex justify-between p-5 font-sans font-bold text-5xl color-dark-blue ml-16 my-8">
      
      <h2> Dashboard </h2>
        <div class=" flex flex-col">
        <div  class=" flex flex-col justify-start items-center  bg-cyan-500 rounded-full mr-16 mt-5 p-3 shadow-md shadow-gray-400 w-44">
          
          <img src="../img/icono_suma.png" @click="insertColumn(4)" alt="icono add column" width ="25" class=" ml-5" >


        </div>
        <input type="Text" v-model="titleColumn"  placeholder="Introduce your title">
      </div>
    </div>
   
    <div class="flex lg:flex-row flex-col justify-around gap-x-3 overflow-x-auto pl-96">
     
      <Columns />
    
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import columnsStore from "../stores/columns";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks"
import Columns from "../components/columns.vue";



export default {

  components: {
    Columns,
  },

  data(){
    return{
      titleColumn: null,
    }
  },
  computed: {
    ...mapStores(columnsStore),
    ...mapStores(userStore),
    ...mapStores(tasksStore),
  },

  methods:{

    async insertColumn(order) {
      await this.columnsStore.insertColumns(
        this.userStore.user.id,
        this.titleColumn,
        order
      );
      await this.columnsStore.fetchColumns();
    },

  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
