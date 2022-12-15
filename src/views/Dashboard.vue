<template>
    <div class="p-5">
        Dashboard
    </div>
    <div class="flex justify-around"> 
        <columns/>
    </div>
    
</template>

<script>
import columns from "../components/columns.vue"

export default{

    components: {
        columns,
    },


}




</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>