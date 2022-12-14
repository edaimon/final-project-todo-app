<template>

      <div class="flex flex-col">
        <div>title: {{ item.title }}</div>
        <div>description: {{ item.description }}</div>
        <div>status:{{ item.status }}</div>
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
      <div v-if="value === true">
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
      <!-- END MODIFICAR TASK -->

</template>

<script>
export default{
    data(){
        return{
            value: false,
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

}
    
}
</script>

<style></style>
