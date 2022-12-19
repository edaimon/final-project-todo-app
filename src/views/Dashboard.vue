<template>
  <div class="flex flex-col mb-6 ">
    <div class=" flex justify-between p-5 font-sans font-bold text-5xl color-dark-blue ml-16 my-8">
      
      <h2> Dashboard </h2>
        
        <div @click="" class=" flex justify-start items-center  bg-cyan-500 rounded-full mr-16 mt-5 p-3 shadow-md shadow-gray-400 w-44">
          <p class=" text-lg"> New column </p>
          <img src="../img/icono_suma.png" alt="icono add column" width ="25" class=" ml-5" >

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
