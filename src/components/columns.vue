<template>
  <div class="flex flex-col">
    <h2 class="p-10">TO DO (status 1)</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" class="">
      <div v-if="item.status === 1" class="border-2 border-black m-1 p-2">


        <cards :item="item"/>


      </div>
    </div>
    <div class="pt-10">
      <!--  INSERTAR TAREAS -->
      <img
        src="../img/icono_suma.png"
        @click="switchValueToDo()"
        alt="icono suma"
        width="15"
        class="bg-slate-500 rounded-full"
      />
      <div v-if="valueToDo === true">
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
          @click="insert(), switchValueToDo()"
          alt="edit icon"
          width="15"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col">
    <h2 class="p-10">DOING (status 2)</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" class="flex flex-col">
      <div v-if="item.status === 2" class="border-2 border-black m-1 p-2">


        <cards :item="item"/>


      </div>
    </div>
    <div class="pt-10">
      <!-- INSERTAR TAREAS  -->
      <img
        src="../img/icono_suma.png"
        @click="switchValueDoing()"
        alt="icono suma"
        width="15"
        class="bg-slate-500 rounded-full"
      />
      <div v-if="valueDoing === true">
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
          @click="insert(), switchValueDoing()"
          alt="edit icon"
          width="15"
        />
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <h2 class="p-10">DONE (status 3)</h2>
    <div v-for="item in tasksStore.tasks" :key="item.id" class="flex flex-col">
      <div v-if="item.status === 3" class="border-2 border-black m-1 p-2">


        <cards :item="item"/>


        </div>
      </div>
      <!-- END MODIFICAR TASK -->
    </div>
    <div class="pt-10">
      <!-- INSERTAR TAREAS   -->
      <img
        src="../img/icono_suma.png"
        @click="switchValueDone()"
        alt="icono suma"
        width="15"
        class="bg-slate-500 rounded-full"
      />
      <div v-if="valueDone === true">
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
          @click="insert(), switchValueDone()"
          alt="edit icon"
          width="15"
        />
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
    async insert() {
      await this.tasksStore.insertTasks(
        this.userStore.user.id,
        this.title,
        this.description
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
  },
  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style></style>