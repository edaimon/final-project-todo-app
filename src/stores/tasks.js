// /store/task.js
// NOTA: NOMBRE DEL ARCHIVO EN PLURAL (EN EL ASSIGNMENT LO PONE EN SINGULAR)



import { defineStore } from "pinia";
import { supabase } from "../supabase";



export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
      id: null,
      title: null,
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
    async insertTasks(user, title, description){
    const { error } = await supabase
        .from('tasks')
        .insert({user_id: user, title: title, description: description})
        if (error) throw error;
    },
    async updateTasks(id, title, description){
    const { error } = await supabase
        .from('tasks')
        .update({ title:title, description: description })
        .eq('id', id)
        if (error) throw error;
      },

      async deleteTasks(id){
        const { error } = await supabase
          .from('tasks')
          .delete("*")
          .eq('id', id)
          if (error) throw error;
      }
  },
});
