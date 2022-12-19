import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore ("columns",{
    state(){
        return{
            columns: [],

        }
    },

    getters:{

    },

    actions:{

        async fetchColumns(){
            const { data: columns} = await supabase
            .from("columns")
            .select("*");

            this.columns = columns;
        },

        async insertColumns (user, id, title, order){
        const {error} = await supabase
        .from("columns")
        .insert({user_id:user, title:title, id:id, order: order})
        if (error) throw error;    
        }

    }
})