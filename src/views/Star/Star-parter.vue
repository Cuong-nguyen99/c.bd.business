<template>
  <div>
    <StarHero
      :heroContentType="heroContentType"
      :currentContent="currentContent"
    ></StarHero>
    <div class="mt-[8vh] mb-[15vh] px-[20%] flex flex-col">
      <span class="mb-8 text-3xl">주요 고객사</span>
      <div class="grid gap-10 grid-cols-6 grid-rows-3">
        <div v-for="(item, key) in contentItems" class="w-full flex">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";

  export default defineComponent({
    name: "star-parter",
    components: {
      StarHero,
    },
    setup() {
      const currentContent = ref(StarContent.PARTER);
      const heroContentType = ref(HeroContentType.STAR);

      const contentItems = ref([
        {
          name: "logo-abl",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-abl.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-benz",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-benz.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-bmw",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-bmw.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-genesis",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-genesis.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-gsmbiz",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-gsmbiz.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-kbcard",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-kbcard.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-kcar",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-kcar.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-kia",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-kia.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-kt-telecop",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-kt-telecop.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-kt",
          img: computed(() => {
            return new URL("../../assets/star/img-logo-kt.jpg", import.meta.url)
              .href;
          }),
        },
        {
          name: "logo-lexus",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-lexus.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-samsung",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-samsung.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-shinhan",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-shinhan.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-tss",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-tss.jpg",
              import.meta.url
            ).href;
          }),
        },
        {
          name: "logo-volvo",
          img: computed(() => {
            return new URL(
              "../../assets/star/img-logo-volvo.jpg",
              import.meta.url
            ).href;
          }),
        },
      ]);

      return {
        heroContentType,
        currentContent,
        contentItems,
      };
    },
  });
</script>

<style scoped></style>
