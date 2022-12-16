<template>
  <div class="flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/4 rounded-3xl py-4 shadow-lg shadow-blue-500 w-3/4 mx-auto my-6" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
    <h2 class="p-10 text-xl font-bold text-white text-center">TO DO</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" draggable="true" @dragstart="startDrag($event, item)" class="flex flex-col">
      <div v-if="item.status === 1" class="mx-3 my-1 p-2 bg-white rounded-xl">


        <cards :item="item"/>


      </div>
    </div>
    <div class="pt-10">
      <!--  INSERTAR TAREAS -->
      <div class="bg-orange w-max rounded-full mx-auto p-3">
        <img
        src="../img/icono_suma.png"
        @click="switchValueToDo()"
        alt="icono suma"
        width="20"
      />
      </div>
      
      <div v-if="valueToDo === true" class="flex flex-col p-2 m-4 gap-2 bg-yellow rounded-xl">
        <input
          type="text"
          v-model="title"
          name="task"
          id="task"
          placeholder="title"
        />
        <input
          type="text"
          v-model="description"
          name="task"
          id="task"
          placeholder="description"
        />
        <img
          src="../img/confirm_icon.png"
          @click="insert(1), switchValueToDo()"
          alt="edit icon"
          width="20"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col bg-blue-500 lg:w-1/4 rounded-3xl py-4 shadow-lg shadow-blue-500 w-3/4 mx-auto my-6" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
    <h2 class="p-10 text-xl font-bold text-white text-center">DOING</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" draggable="true" @dragstart="startDrag($event, item)" class="flex flex-col">
      <div v-if="item.status === 2" class="mx-3 my-1 p-2 bg-white rounded-xl">


        <cards :item="item"/>


      </div>
    </div>
    <div class="pt-10">
      <!-- INSERTAR TAREAS  -->
      <div class="bg-orange w-max rounded-full mx-auto p-3">
        <img
        src="../img/icono_suma.png"
        @click="switchValueDoing()"
        alt="icono suma"
        width="20"
      />
      </div>
      <div v-if="valueDoing === true" class="flex flex-col p-2 m-4 gap-2 bg-yellow rounded-xl">
        <input
          type="text"
          v-model="title"
          name="task"
          id="task"
          placeholder="title"
        />
        <input
          type="text"
          v-model="description"
          name="task"
          id="task"
          placeholder="description"
        />
        <img
          src="../img/confirm_icon.png"
          @click="insert(2), switchValueDoing()"
          alt="edit icon"
          width="20"
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col bg-gradient-to-r from-blue-500 to-cyan-500 lg:w-1/4 rounded-3xl py-4 shadow-lg shadow-blue-500 w-3/4 mx-auto my-6" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
    <h2 class="p-10 text-xl font-bold text-white text-center">DONE</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" draggable="true" @dragstart="startDrag($event, item)" class="flex flex-col">
      <div v-if="item.status === 3" class="mx-3 my-1 p-2 bg-white rounded-xl">


        <cards :item="item"/>


        </div>
      </div>
    
    <div class="pt-10">
      <!-- INSERTAR TAREAS   -->
      <div class="bg-orange w-max rounded-full mx-auto p-3">
        <img
        src="../img/icono_suma.png"
        @click="switchValueDone()"
        alt="icono suma"
        width="20"
      />
      </div>
      <div v-if="valueDone === true" class="flex flex-col p-2 m-4 gap-2 bg-yellow rounded-xl">
        <input
          type="text"
          v-model="title"
          name="task-title"
          id="task-title"
          placeholder="title"
        />
        <input
          type="text"
          v-model="description"
          name="task-description"
          id="task-description"
          placeholder="description"
        />
        <img
          src="../img/confirm_icon.png"
          @click="insert(3), switchValueDone()"
          alt="edit icon"
          width="20"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";
import cards from "./cards.vue";

export default {
  data() {
    return {
      title: null,
      description: null,
      status: null,
      valueToDo: false,
      valueDoing: false,
      valueDone: false,
    };
  },

  components: {
    cards,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
  },
  methods: {
    /* INSERTAR TAREAS */
    async insert(status) {
      await this.tasksStore.insertTasks(
        this.userStore.user.id,
        this.title,
        this.description,
        status
      );
      await this.tasksStore.fetchTasks();
    },

    switchValueToDo() {
      if (this.valueToDo === true) {
        this.valueToDo = false;
      } else if (this.valueToDo === false) {
        this.valueToDo = true;
      }
    },
    switchValueDoing() {
      if (this.valueDoing === true) {
        this.valueDoing = false;
      } else if (this.valueDoing === false) {
        this.valueDoing = true;
      }
    },
    switchValueDone() {
      if (this.valueDone === true) {
        this.valueDone = false;
      } else if (this.valueDone === false) {
        this.valueDone = true;
      }
    },
    startDrag(event, item){
      event.dataTransfer.setData('itemId', item.id);
    },
    onDrop(event, state){
      const itemId = event.dataTransfer.getData('itemId');
      let item = this.tasksStore.tasks.find((item) => item.id == itemId);
      item.status = state;
      this.tasksStore.moveTask(itemId, state);
    }
  },
  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style></style>
