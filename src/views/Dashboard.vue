<template>
  <div class="flex flex-col">
    <div class="p-5 font-sans font-bold text-3xl color-dark-blue">Dashboard</div>
    <div class="flex justify-around">
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
