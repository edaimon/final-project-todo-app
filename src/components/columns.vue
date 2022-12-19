<template>
  
  <div v-for= " column in columnsStore.columns" :key="column.id" class="flex flex-col shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/4 rounded-3xl py-4 shadow-lg shadow-blue-500 w-3/4 mx-50px my-6 " @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
   
     <div v-for="item in tasksStore.tasks" :key="item.id" draggable="true" @dragstart="startDrag($event, item)" class="flex flex-col">
        
        
          <div v-if="item.status === 1" class="mx-3 my-1 p-2 bg-white rounded-xl">
          
          
            <cards :item="item"/>


           </div>
          

    </div>

  <!--  INSERTAR TAREAS -->
    <div class="pt-10">

      <div v-if="valueColumn === false" class="bg-orange w-max rounded-full mx-auto p-3 shadow shadow-black">
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
            @click="insert(1), switchValueToDo()"
            alt="edit icon"
            width="40"
            class="bg-white border-2 border-green-500 rounded-full p-1"
          />
          <img src="../img/cancel.png" @click="switchValueColumn()" alt="cancel icon" width="40" class="bg-white border-2 border-red-500 rounded-full p-1">
      </div>

      <div v-if="valueColumn === true" class="flex flex-col p-2 m-4 gap-2 bg-white rounded-xl">
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
  </div>

</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";
import columnsStore from "../stores/columns";
import cards from "./cards.vue";

export default {
  data() {
    return {
      title: null,
      description: null,
      status: null,
      valueColumn: false,
    };
  },

  components: {
    cards,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    ...mapStores(columnsStore),
  },
  methods: {
    /* INSERTAR TAREAS */
    async insertColumns(status) {
      await this.tasksColumns.insertColumns(
        this.userStore.user.id,
        this.titleColumn,
        status
      );
      await this.tasksStore.fetchTasks();
    },

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

    startDrag(event, item){
      event.dataTransfer.setData('itemId', item.id);
    },
    onDrop(event, state){
      const itemId = event.dataTransfer.getData('itemId');
      let item = this.tasksStore.tasks.find((item) => item.id == itemId);
      item.status = state;
      this.tasksStore.moveTask(itemId, state);
    },
    resize(event){
            event.target.style.height = 'auto'
            event.target.style.height = `${event.target.scrollHeight}px`
        }
  },
  mounted() {
    this.tasksStore.fetchTasks();
    this.columnsStore.fetchColumns();
  },
};
</script>

<style></style>
