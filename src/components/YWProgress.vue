<template>
  <div class="flex justify-center items-center">
    <div
      class="w-full flex flex-col items-start pb-12 border-b-8 border-ywBlue1"
    >
      <span class="mb-8 text-4xl font-bold">1</span>
      <span class="text-lg">{{ itemList[0] }}</span>
    </div>
    <div
      class="w-full flex flex-col items-start pb-12 border-b-8 border-ywBlue2"
    >
      <span class="mb-8 text-4xl font-bold">2</span>
      <span class="text-lg">{{ itemList[1] }}</span>
    </div>
    <div
      class="w-full flex flex-col items-start pb-12 border-b-8 border-ywBlue3"
    >
      <span class="mb-8 text-4xl font-bold">3</span>
      <span class="text-lg">{{ itemList[2] }}</span>
    </div>
    <div
      class="w-full flex flex-col items-start pb-12 border-b-8 border-ywBlue4"
    >
      <span class="mb-8 text-4xl font-bold">4</span>
      <span class="text-lg">{{ itemList[3] }}</span>
    </div>
    <div
      class="w-full flex flex-col items-start pb-12 border-b-8 border-ywBlue5"
    >
      <span class="mb-8 text-4xl font-bold">5</span>
      <span class="text-lg">{{ itemList[4] }}</span>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRefs } from "vue";

  export default defineComponent({
    name: "yw-progress",
    props: ["itemList"],
    setup(props) {
      const { itemList } = toRefs(props);

      return {
        itemList,
      };
    },
  });
</script>

<style scoped></style>
