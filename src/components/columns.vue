<template>
  <div
    v-for="column in columnsStore.columns"
    :key="column.id"
    class="flex flex-col shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/4 rounded-3xl shadow-lg shadow-blue-500 w-3/4 mt-10"
    @drop="onDrop($event, column.id)"
    @dragover.prevent
    @dragenter.prevent
  >
     <editTitleCol :column="column" />

    <div
      v-for="item in tasksStore.getTasksByStatus(column.id)"
      :key="item.id"
      draggable="true"
      @dragstart="startDrag($event, item)"
      class="flex flex-col"
    >
      <div
        v-if="item.status === column.id"
        class="mx-3 my-3 p-2 bg-white rounded-xl shadow-md shadow-gray-400"
      >
        <cards :item="item" />
      </div>
    </div>

    <addTask :column="column"/>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
import userStore from "../stores/user";
import columnsStore from "../stores/columns";
import cards from "./cards.vue";
import addTask from "./addTask.vue";
import editTitleCol from"./editTitleCol.vue";

export default {
  data() {
    return {
      status: null,
      titleColumn: null,
    };
  },

  components: {
    cards, addTask, editTitleCol,
  },
  computed: {
    ...mapStores(tasksStore),
    ...mapStores(userStore),
    ...mapStores(columnsStore),
  },
  methods: {
    startDrag(event, item) {
      event.dataTransfer.setData("itemId", item.id);
    },
    onDrop(event, state) {
      const itemId = event.dataTransfer.getData("itemId");
      let item = this.tasksStore.tasks.find((item) => item.id == itemId);
      item.status = state;
      this.tasksStore.moveTask(itemId, state);
    },

  },
  mounted() {
    this.tasksStore.fetchTasks();
    this.columnsStore.fetchColumns();
  },
};
</script>

<style></style>
