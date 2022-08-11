<template>
  <div class="my-[12vh]">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
  </div>

  <div class="mx-[20%]">
    <div class="pb-20 border-b-2 border-ywGray9 flex flex-col gap-y-8">
      <span class="text-[32px] font-bold">소개</span>
      <p v-for="item in listItems" class="text-xl">{{ item }}</p>
    </div>

    <div class="my-[12vh] px-14 flex justify-between items-center">
      <img src="../../assets/car/car-mid-fig-1.jpg" alt="" class="  " />
      <div class="w-[340px] flex flex-col gap-y-6">
        <div
          v-for="item in carItems"
          class="w-auto h-[72px] pl-7 border-2 border-primary bg-ywBlue7 rounded-full flex justify-start items-center gap-x-3"
        >
          <span class="basis-1/4 text-lg font-bold">{{ item.name }}</span>
          <span>{{ item.content }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full h-fit py-20 bg-ywBlue8">
    <img
      src="../../assets/car/car-mid-fig-2.svg"
      alt=""
      class="m-auto bg-transparent"
    />
  </div>

  <div class="mx-[370px] my-20 flex flex-col">
    <span class="text-3xl font-bold">장점</span>
    <div class="my-20 grid gap-y-8 gap-x-5 grid-cols-3 grid-rows-2">
      <div
        v-for="item in cardItems"
        class="w-[380px] h-[380px] py-8 flex flex-col justify-center items-center bg-white drop-shadow-[0_4px_16px_rgba(221,241,255,0.7)]"
      >
        <span class="mb-8 text-lg font-bold">{{ item.name }}</span>
        <div
          class="mb-10 w-[162px] h-[162px] rounded-full bg-ywBlue9 flex justify-center items-center"
        >
          <img :src="item.img" alt="" class="" />
        </div>
        <div class="flex flex-col items-center">
          <span v-for="descItem in item.desc" class="text-base">{{
            descItem
          }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-[370px] mb-[14vh] flex flex-col">
    <span class="mb-20 text-3xl font-bold">이용절차</span>
    <YWProgress :itemList="processItems"></YWProgress>
    <div class="mt-3 flex flex-col gap-y-1">
      <div class="flex gap-x-3">
        <img src="../../assets/icon/ic-ywcall.svg" alt="" class="" />
        <span class="text-primary">1800-9883</span>
      </div>
      <div class="flex gap-x-3">
        <img src="../../assets/icon/ic-ywemail.svg" alt="" class="" />
        <span class="text-primary">cs@ywmobile.co.kr</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";
  import YWProgress from "@/components/YWProgress.vue";

  export default defineComponent({
    name: "car-service",
    components: {
      StarHero,
      YWProgress,
    },
    setup() {
      const currentTab = ref(StarContent.SERVICE);
      const heroContentType = ref(HeroContentType.CAR);

      const listItems = [
        "고객이 원하는 곳까지 차량을 안전하고 신속하게 배달하는 서비스입니다. ",
        "자사 연구진이 개발한 실시간 위치기반 스마트 오픈매칭 플랫폼 Star-T를 운영하여",
        "개인 및 국내외 유수기업의 차량을 탁송합니다.",
        "수입차, 중고차, 렌터카, 전기차 및 정비차량, 리콜차량을 전문적으로 탁송하며 제주도 탁송 또한 진행합니다.",
      ];

      const carItems = [
        {
          name: "수입차",
          content: "정비 및 서비스센터 입고/출고",
        },
        {
          name: "중고차",
          content: "구입 및 판매/홈서비스",
        },
        {
          name: "렌터카",
          content: "고객에게 전달 및 회수",
        },
        {
          name: "전기차",
          content: "충전소 이동 및 고객에게 전달",
        },
        {
          name: "정비차량",
          content: "정비센터 입고/출고",
        },
        {
          name: "리콜차량",
          content: "서비스센터 입소/출고",
        },
        {
          name: "제주도",
          content: "제주도 ↔ 전국 ",
        },
      ];

      const cardItems = ref([
        {
          name: "시스템 API 연동",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-1.png", import.meta.url)
              .href;
          }),
          desc: [
            "기존 사용중인 고객사의 시스템과 API 연동을 통한",
            "편리한 주문, 호출 및 관리",
          ],
        },
        {
          name: "A+ 기사 배정",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-2.png", import.meta.url)
              .href;
          }),
          desc: [
            "자사의 체계적인 교육을 이수한",
            "법인 및 탁송 베테랑 전문기사 배정",
          ],
        },
        {
          name: "이동 경로 조회",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-3.png", import.meta.url)
              .href;
          }),
          desc: ["위치추적 기반으로 기사 및 차량의", "이동경로를 실시간 조회"],
        },
        {
          name: "분쟁 가능성 예방",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-4.png", import.meta.url)
              .href;
          }),
          desc: ["출발 및 도착 시 다각도에서", "차량사진 촬영하여 실시간 공유"],
        },
        {
          name: "책임 및 보상",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-5.png", import.meta.url)
              .href;
          }),
          desc: ["운행 중 발생한 범칙금 및", "과태료 7일 이내 처리"],
        },
        {
          name: "검증된 서비스",
          img: computed(() => {
            return new URL("../../assets/car/car-mid-ic-6.png", import.meta.url)
              .href;
          }),
          desc: [
            "BMW, 메르세데스-벤츠, 기아, Kcar",
            "조이 렌트카 등 국내외 유수기업의 공식 파트너",
          ],
        },
      ]);

      const processItems = ref([
        "접수 및 예약",
        "기사 배정",
        "차량 운행",
        "운행 완료",
        "월 단위 정산 및 청구서 발행",
      ]);

      return {
        heroContentType,
        currentTab,
        listItems,
        carItems,
        cardItems,
        processItems,
      };
    },
  });
</script>

<style scoped></style>
