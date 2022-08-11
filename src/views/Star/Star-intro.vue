<template>
  <div class="my-[12vh] flex flex-col justify-center items-center">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
    <div class="w-3/5 flex flex-col">
      <span class="mb-8 text-3xl">OUR FAITH</span>
      <div class="w-full flex flex-col justify-center items-center gap-y-20">
        <div v-for="(item, key) in contentItems" class="w-full flex">
          <img :src="item.img" alt="" />
          <div class="ml-20 flex flex-col justify-center gap-y-8">
            <h2 class="uppercase text-[30px]">{{ item.title }}</h2>
            <div class="flex flex-col gap-y-2">
              <p v-for="descItem in item.desc" class="text-[18px] text-ywGray">
                {{ descItem }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="mt-20 mx-auto py-8 px-20 w-fit bg-ywGray4">
        <div class="flex justify-center items-center gap-x-4">
          <img src="../../assets/icon/ic-down.svg" alt="" />
          <span class="text-white text-base">스타드라이버 브로셔 다운로드</span>
        </div>
      </button>
    </div>
    <div class="my-[14vh] w-full h-px bg-ywGray2"></div>
    <div class="w-3/5 flex flex-col gap-y-10">
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.name
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.nameContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.date
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.dateContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.ceoName
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.ceoNameContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.address
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.addressContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.phone
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.phoneContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.email
        }}</span>
        <span class="basis-3/4 text-lg">{{ infoItems.emailContent }}</span>
      </div>
      <div
        class="w-full pb-10 border-b-[1px] border-ywGray4 flex justify-between items-center"
      >
        <span class="basis-1/4 text-ywGray font-bold text-lg">{{
          infoItems.regisNumber
        }}</span>
        <span class="basis-3/4 text-lg">{{
          infoItems.regisNumberContent
        }}</span>
      </div>
    </div>
    <div class="w-3/5 my-[10vh] flex flex-col gap-y-10 items-start">
      <span class="text-3xl">인증서</span>
      <div class="flex justify-between gap-x-2">
        <div
          v-for="items in certItems"
          class="flex flex-col items-center gap-y-6"
        >
          <img :src="items.img" alt="" />
          <span class="text-base text-ywGray">
            {{ items.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="w-full my-[10vh] flex flex-col">
      <span class="pl-[20%] text-3xl">오시는 길</span>
      <div class="mt-10 w-full h-[50vh] bg-slate-200"></div>
      <div class="mt-12 flex flex-col gap-y-8">
        <div class="pl-[20%] flex">
          <span class="basis-1/5 text-lg font-bold">와이더블유모바일(주)</span>
          <span class="text-lg text-ywGray"
            >서울특별시 강남구 테헤란로8길 32 타임코빌딩 6층 (역삼동)</span
          >
        </div>
        <div class="pl-[20%] flex">
          <div class="basis-1/5"></div>
          <div class="flex flex-col gap-y-2">
            <span class="text-lg text-ywGray">전화: 1800-9883</span>
            <span class="text-lg text-ywGray">팩스: 031-522-0535</span>
            <span class="text-lg text-ywGray">이메일: cs@ywmobile.co.kr</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";

  export default defineComponent({
    name: "star-intro",
    components: {
      StarHero,
    },
    setup() {
      const contentItems = ref([
        {
          img: computed(() => {
            return new URL(
              "../../assets/homepage/home-img-1.jpg",
              import.meta.url
            ).href;
          }),
          title: "Responsibility",
          desc: [
            "풍파를 마주해도 함부로 배를 버리지 않는 뱃사공이 있습니다.",
            "배와 끝까지 함께하는 것, 그것은 이 뱃사공의 책임입니다.",
          ],
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/homepage/home-img-2.jpg",
              import.meta.url
            ).href;
          }),
          title: "Compensation",
          desc: [
            "책임을 진다는 말은 보상을 할 때 비로소 할 수 있는 말입니다.",
            "투명하고 명확한 보상을 하는 것이 진정으로 책임을 지는 것입니다.",
          ],
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/homepage/home-img-3.jpg",
              import.meta.url
            ).href;
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

      const currentTab = ref(StarContent.INTRO);
      const heroContentType = ref(HeroContentType.STAR);

      const infoItems = reactive({
        name: "법인명",
        nameContent: "와이더블유모바일(주)",
        date: "설립일",
        dateContent: "2013년 3월 22일",
        ceoName: "대표이사",
        ceoNameContent: "이영석",
        address: "회사주소",
        addressContent: "서울특별시 강남구 테헤란로8길 32 타임코빌딩 6층",
        phone: "대표전화",
        phoneContent: "1800-9883",
        email: "대표메일",
        emailContent: "cs@ywmobile.co.kr",
        regisNumber: "사업자등록번호",
        regisNumberContent: "129-86-80162",
      });

      const certItems = ref([
        {
          img: computed(() => {
            return new URL(
              "../../assets/star/img-certify-01.jpg",
              import.meta.url
            ).href;
          }),
          title: "벤처기업확인서",
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/star/img-certify-02.jpg",
              import.meta.url
            ).href;
          }),
          title: "특허증",
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/star/img-certify-03.jpg",
              import.meta.url
            ).href;
          }),
          title: "특허증",
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/star/img-certify-04.jpg",
              import.meta.url
            ).href;
          }),
          title: "특허증",
        },
        {
          img: computed(() => {
            return new URL(
              "../../assets/star/img-certify-05.jpg",
              import.meta.url
            ).href;
          }),
          title: "특허증",
        },
      ]);

      return {
        currentTab,
        heroContentType,
        contentItems,
        infoItems,
        certItems,
      };
    },
  });
</script>

<style scoped></style>
