<template>
  <!--  INSERTAR TAREAS -->
  <div class="my-2">
    <div
      v-if="valueColumn === false"
      class="bg-orange w-max rounded-full mx-auto p-3 shadow shadow-black"
    >
      <img
        src="../img/icono_suma.png"
        @click="switchValueColumn()"
        alt="icono suma"
        width="20"
      />
    </div>
    <div v-if="valueColumn === true" class="flex justify-around">
      <img
        src="../img/confirm_icon.png"
        @click="insert(column.id), switchValueToDo()"
        alt="edit icon"
        width="40"
        class="bg-white border-2 border-green-500 rounded-full p-1"
      />
      <img
        src="../img/cancel.png"
        @click="switchValueColumn()"
        alt="cancel icon"
        width="40"
        class="bg-white border-2 border-red-500 rounded-full p-1"
      />
    </div>

    <div
      v-if="valueColumn === true"
      class="flex flex-col p-2 m-4 gap-2 bg-white rounded-xl"
    >
      <input
        type="text"
        v-model="title"
        name="task"
        id="task"
        placeholder="title"
        class="font-bold color-dark-blue uppercase border-b-2 borderColor pb-3 px-2"
      />
      <textarea
        @input="resize($event)"
        type="text"
        v-model="description"
        name="task"
        id="task"
        placeholder="description"
        class="mt-5 px-2"
      />
    </div>
  </div>
  <!-- FINALIZA INSERTAR TAREAS -->
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";
import columnsStore from "../stores/columns";

export default {

  props:[
    "column"
  ],

  data() {
    return {
      title: null,
      description: null,
      valueColumn: false,
    };
  },

  computed:{
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    ...mapStores(columnsStore),
  },

  methods: {
    async insert(status) {
      await this.tasksStore.insertTasks(
        this.userStore.user.id,
        this.title,
        this.description,
        status
      );
      await this.tasksStore.fetchTasks();
    },

    switchValueColumn() {
      if (this.valueColumn === true) {
        this.valueColumn = false;
      } else if (this.valueColumn === false) {
        this.valueColumn = true;
      }
    },

    resize(event) {
      event.target.style.height = "auto";
      event.target.style.height = `${event.target.scrollHeight}px`;
    },
  },
};
</script>

<style></style>
