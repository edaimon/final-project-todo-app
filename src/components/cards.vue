<template>

      <div v-if="value === false" class="flex flex-col" >
        <div>{{ item.title }}</div>
        <div>{{ item.description }}</div>
        <div>{{ item.status }}</div>
      </div>
      <div v-if="value === true" class="flex flex-col" >
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
          width="15"
        />
      </div>
      <div class="flex justify-end">
            <img
            src="../img/delete.png"
            @click="deleteTask(item.id)"
            alt="delete icon"
            width="15"
            />

            <!-- MODIFICAR TASK -->
            <img
            src="../img/edit.png"
            @click="switchValue(id)"
            alt="edit icon"
            width="15"
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

}
    
}
</script>

<style></style>
