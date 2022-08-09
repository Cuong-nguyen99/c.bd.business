<template>
  <div id="app">
    <YWLayout>
      <router-view appear></router-view>
    </YWLayout>
  </div>
</template>
<script lang="ts">
  import YWLayout from "@/components/layouts/YWLayout.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    components: {
      YWLayout,
    },
  });
</script>

<style lang="scss">
  #app {
    font-family: "Noto Sans KR", sans-serif;
  }
</style>
