<template>
  <div class="flex flex-col justify-center items-center">
    <div class="w-full min-h-fit">
      <img
        class="w-full h-[720px]"
        src="@/assets/homepage/main-banner-1.jpg"
        alt=""
      />
      <div
        class="absolute z-auto top-[45%] left-[20%] flex flex-col justify-start text-white"
      >
        <h2 class="uppercase text-[48px] font-bold">Premium</h2>
        <span class="text-[36px]">고객의 믿음에 보답하는 고품격 서비스</span>
      </div>
    </div>
    <div
      class="w-[60%] mt-[12vh] mb-[16vh] flex flex-col justify-between items-center gap-y-20"
    >
      <div
        v-for="(item, key) in contentItems"
        class="w-full flex justify-between items-center gap-x-10"
        :class="{
          'flex-row-reverse': key % 2 !== 0,
        }"
      >
        <img :src="item.img" alt="" />
        <div
          class="flex flex-col justify-center gap-y-8"
          :class="{ 'mr-auto': key % 2 === 0 }"
        >
          <h2 class="uppercase text-[30px]">{{ item.title }}</h2>
          <div class="flex flex-col gap-y-2">
            <p v-for="descItem in item.desc" class="text-[18px] text-ywGray">
              {{ descItem }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed } from "@vue/reactivity";
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "home",
    setup() {
      const contentItems = ref([
        {
          img: computed(() => {
            return new URL("../assets/homepage/home-img-1.jpg", import.meta.url)
              .href;
          }),
          title: "Responsibility",
          desc: [
            "풍파를 마주해도 함부로 배를 버리지 않는 뱃사공이 있습니다.",
            "배와 끝까지 함께하는 것, 그것은 이 뱃사공의 책임입니다.",
          ],
        },
        {
          img: computed(() => {
            return new URL("../assets/homepage/home-img-2.jpg", import.meta.url)
              .href;
          }),
          title: "Compensation",
          desc: [
            "책임을 진다는 말은 보상을 할 때 비로소 할 수 있는 말입니다.",
            "투명하고 명확한 보상을 하는 것이 진정으로 책임을 지는 것입니다.",
          ],
        },
        {
          img: computed(() => {
            return new URL("../assets/homepage/home-img-3.jpg", import.meta.url)
              .href;
          }),
          title: "Trust",
          desc: [
            "책임과 보상에 대한 명확한 행동으로 신뢰는 탄생합니다.",
            "가는 것이 있어야 오는 것이 있습니다. ",
            "우리는 오는 것을 기다리지 않습니다. ",
            "우리는 먼저 갑니다.",
          ],
        },
      ]);
      return {
        contentItems,
      };
    },
  });
</script>

<style scoped></style>
