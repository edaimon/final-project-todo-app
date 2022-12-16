<template>

  <div v-if="item.status === 1 || item.status === 2"> 
    <input type="checkbox" name="mark" id="mark" @click="switchCheckStatus()">
  </div>
  <div v-if="item.status === 3"> 
    <input type="checkbox" name="mark" id="mark" checked @click="switchCheckStatus()">
  </div>

      <div v-if="value === false" class="flex flex-col bg-white rounded-lg p-2 my-2" >
        <div class="font-bold color-dark-blue uppercase">{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>{{ item.status }}</div>
      </div>
     
      <div class="flex justify-end gap-4">
            <img
            src="../img/delete.png"
            @click="deleteTask(item.id)"
            alt="delete icon"
            width="25"
            />

            <!-- MODIFICAR TASK -->
            <img
            src="../img/edit.png"
            @click="switchValue(id)"
            alt="edit icon"
            width="20"
            />
      </div>
      <div v-if="value === true" class="bg-yellow p-2 flex flex-col gap-2 my-2 rounded-xl">
        <input
          type="text"
          v-model="item.title"
          name="item.id"
          id="item.id"
          placeholder="Introduce your new title"
        />
        <input
          type="text"
          v-model="item.description"
          name="item.id"
          id="item.id"
          placeholder="Introduce your new description"
        />
        <img
          src="../img/confirm_icon.png"
          @click="
            editTask(item.id, item.title, item.description), switchValue()
          "
          alt="edit icon"
          width="20"
        />
      </div>

      <!-- END MODIFICAR TASK -->

</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";
export default{
    data(){
        return{
            value: false,
        }
    },
    computed:{
        ...mapStores(tasksStore),
        ...mapStores(userStore),
        checkStatus(){
          return this.item.status === 3
        }
    },

    props: [
    "item",
    ],

methods:{
    async editTask(id, title, description) {
      await this.tasksStore.updateTasks(id, title, description);
    },

    async deleteTask(id) {
      await this.tasksStore.deleteTasks(id);
      await this.tasksStore.fetchTasks();
    },

    switchValue() {
      if (this.value === true) {
        this.value = false;
      } else if (this.value === false) {
        this.value = true;
      }
    },

    async switchCheckStatus(){
      if (this.item.status != 3){
        this.item.status = 3
      } else if (this.item.status === 3){
        this.item.status = 1
      }
      console.log("checkstatus= " + this.checkStatus)
      await this.tasksStore.checkTasks(this.item.id, this.item.status);
      await this.tasksStore.fetchTasks();
    }

}
    
}
</script>

<style></style>
