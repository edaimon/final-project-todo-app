<template>

      <div v-if="value === false" class="flex flex-col bg-white rounded-lg p-2 my-2 cardsHeight" >
        <div class="font-bold color-dark-blue uppercase border-b-2 borderColor pb-3 px-2">{{ item.title }}</div>
        <div class="mt-5 px-2">{{ item.description }}</div>

        <div class="flex justify-between gap-4 pt-10">

          <div v-if="item.status === 1 || item.status === 2"> 
            <input type="checkbox" name="mark" id="mark" @click="switchCheckStatus()">
          </div>
         <div v-if="item.status === 3"> 
            <input type="checkbox" name="mark" id="mark" checked @click="switchCheckStatus()">
          </div>

          <div class="flex justify-around min-w-fit">
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
      </div>
      
      </div>
     

      <div v-if="value === true" class="bg-white p-2 flex flex-col gap-2 my-2 rounded-xl cardsHeight">
        <input
          type="text"
          v-model="item.title"
          name="item.id"
          id="item.id"
          placeholder="Introduce your new title"
          class="font-bold color-dark-blue uppercase border-b-2 borderColor pb-3 px-2"
        />
        <textarea
         @input="resize($event)"
          type="text"
          v-model="item.description"
          name="item.id"
          id="item.id"
          placeholder="Introduce your new description"
          class="textarea mt-3 px-2"
        />
        <div class="flex justify-end min-w-fit">
        <img
          src="../img/confirm_icon.png"
          @click="
            editTask(item.id, item.title, item.description), switchValue()
          "
          alt="edit icon"
          width="20"
        />
      </div>

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
          await this.tasksStore.moveTask(this.item.id, this.item.status);
          await this.tasksStore.fetchTasks();
        },

        resize(event){
            event.target.style.height = 'auto'
            event.target.style.height = `${event.target.scrollHeight}px`
        }
    },
    
}
</script>

<style>
.borderColor{
  border-color: #fb8500;
}
.cardsHeight{
  min-height: 5rem;
}

.textarea{
  width: 100%;
  outline: none;
  min-height: 50px;
  box-sizing:border-box;
}
</style>
