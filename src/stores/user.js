// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const response = await supabase.auth.signUp({
        email: 'example1@email.com',
        password: 'example-password',
      })
      
      const data = response.data
      const error = response.error
      
      if (error) throw error;
      if (user) this.user = data.user;
    },

    async signIn(email, password){
      const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },

    async signOut(){
      const { error } = await supabase.auth.signOut();
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
