import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("columns", {
  state() {
    return {
      columns: [],
    };
  },

  getters: {},

  actions: {
    async fetchColumns() {
      const { data: columns } = await supabase
        .from("columns")
        .select("*")
        .order("id", { ascending: true });

      this.columns = columns;
    },

    async insertColumns(user, order) {
      const { error } = await supabase
        .from("columns")
        .insert({ user_id: user, order: order });
      if (error) throw error;
    },

    async updateTitleCol(title, id) {
      const { error } = await supabase
        .from("columns")
        .update({ title: title })
        .eq("id", id);

      if (error) throw error;
    },

    async deleteColumns(id) {
      const { error } = await supabase
      .from("columns")
      .delete("*")
      .eq("id", id);
      if (error) throw error;
    },
  },
});
