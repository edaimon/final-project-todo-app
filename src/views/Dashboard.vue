<template>
  <div class="flex flex-col mb-6 ">
    <div class="flex  p-5 font-sans font-bold text-5xl color-dark-blue ml-16 my-8">
      
      <h2> Dashboard </h2>
        <div class=" flex justify-start items-center  bg-cyan-500 rounded-full ml-10 p-3 shadow-2xl shadow-black">

          <img src="../img/icono_suma.png" alt="icono add column" width ="25" class="" >

        </div>

    </div>
   
    <div class="flex lg:flex-row flex-col justify-around gap-x-3 overflow-x-auto pl-96">
     
      <columns />
    
    </div>
  </div>
</template>

<script>
import columns from "../components/columns.vue";

export default {
  components: {
    columns,
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
