<template>
  <div class="flex flex-col mb-6">
    <div class="p-5 font-sans font-bold text-5xl color-dark-blue ml-7 my-8">Dashboard</div>
    <div class="flex lg:flex-row flex-col justify-around">
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
