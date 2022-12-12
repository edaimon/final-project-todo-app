// /store/task.js
// NOTA: NOMBRE DEL ARCHIVO EN PLURAL (EN EL ASSIGNMENT LO PONE EN SINGULAR)



import { defineStore } from "pinia";
import { supabase } from "../supabase";



export default defineStore("tasks", {
  state() {
    return {
      tasks: null,
    };
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });

      this.tasks = tasks;
    },
  },
});
