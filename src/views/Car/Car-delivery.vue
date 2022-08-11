<template>
  <div class="my-[12vh]">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
  </div>

  <div class="mx-[370px] my-10">
    <h6 class="text-[32px] font-bold">
      ‘제주도 한 달 살기’ <br />
      ‘렌터카 VS 자차’ 당신의 선택은 무엇입니까?
    </h6>
    <p class="mt-8 text-2xl leading-[48px]">
      제주도에서의 렌터카 이용 비용은 만만치 않습니다. <br />
      관광산업이 차지하는 비중이 전체 산업의 70% 이상인 제주도에서 성수기에는
      경차만 빌려도 <br />
      하루에 12만 원 이상 지불하기도 합니다. <br />
      이러한 이유로 최근에는 단기간 제주도를 방문 할 때에도 ‘자차’를 가져가는
      경우가 많아지고 있습니다. <br />
      무엇보다도 비용적인 측면에서 훨씬 더 저렴하기 때문입니다.
    </p>
  </div>
  <img src="../../assets/car/car-mid-fig-3.png" alt="" class="mx-auto my-14" />
  <div class="mx-[370px] flex flex-col gap-y-5">
    <span class="text-xl font-bold">1. 렌터카</span>
    <table class="w-fit table-fixed">
      <thead class="border-t-2 border-ywGray7">
        <tr>
          <th
            class="w-[260px] h-16 bg-ywBlue10 text-lg border-t-2 border-b border-primary"
          >
            (일)
          </th>
          <th
            class="w-[230px] h-16 border-r border-b border-ywGray7 font-normal"
          >
            7일
          </th>
          <th
            class="w-[230px] h-16 border-r border-b border-ywGray7 font-normal"
          >
            14일
          </th>
          <th
            class="w-[230px] h-16 border-r border-b border-ywGray7 font-normal"
          >
            30일
          </th>
          <th class="w-[230px] h-16 border-b border-ywGray7 font-normal">
            60일
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="w-[260px] h-16 bg-ywBlue10 text-lg border-b-2 border-primary"
          >
            K5 기준 렌터카
          </th>
          <th
            class="w-[230px] h-16 border-r border-b-2 border-ywGray7 font-normal"
          >
            87만원
          </th>
          <th
            class="w-[230px] h-16 border-r border-b-2 border-ywGray7 font-normal"
          >
            185만원
          </th>
          <th
            class="w-[230px] h-16 border-r border-b-2 border-ywGray7 font-normal"
          >
            412만원
          </th>
          <th class="w-[230px] h-16 border-b-2 border-ywGray7 font-normal">
            850만원
          </th>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-12 mx-[370px] flex flex-col gap-y-5">
    <span class="text-xl font-bold">2. 자차</span>
    <table class="w-auto table-fixed">
      <thead class="border-t-2 border-ywGray7">
        <tr>
          <th
            class="w-[260px] h-16 bg-ywBlue10 text-lg border-t-2 border-b border-primary"
          >
            경로 (왕복)
          </th>
          <th
            class="w-[460px] h-16 border-r border-b border-ywGray7 font-normal"
          >
            탁송왕복 / 서울-목포항-제주항-성산일출봉 기준
          </th>
          <th
            class="w-[460px] h-16 border-r border-b border-ywGray7 font-normal"
          >
            탁송왕복 / 서울-인천항-제주항-성산일출봉 기준
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th
            class="w-[260px] h-16 bg-ywBlue10 text-lg border-b-2 border-primary"
          >
            K5 기준 자차
          </th>
          <th
            class="w-[460px] h-16 border-r border-b-2 border-ywGray7 font-normal"
          >
            60만원
          </th>
          <th
            class="w-[460px] h-16 border-r border-b-2 border-ywGray7 font-normal"
          >
            90만원
          </th>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="ml-[370px] pl-4 mt-6 mb-[10vh] text-sm">
    * 기아 K5 / 2022년 8월 제주 ** 렌터카 이용 기준으로 차량 모델, 업체 및
    이용시기에 따라 상이할 수 있습니다.
  </p>

  <div
    class="w-full px-[370px] h-[140vh] bg-ywBlue10 flex justify-between items-center"
  >
    <div class="flex flex-col justify-start">
      <h4 class="text-[32px] font-bold">소개</h4>
      <p class="my-6 text-xl font-bold leading-[38px]">
        ‘내 집 문앞’에서 키만 건네면 <br />
        기사가 알아서 다 해주는 제주탁송 서비스가 있습니다.
      </p>
      <div class="w-[145px] h-4 mb-4 relative bg-ywBlue11">
        <span class="absolute bottom-0.5 text-lg font-bold uppercase"
          >Door to Door</span
        >
      </div>
      <p class="my-5">
        내 집 문 앞까지 찾아오는, <br />
        고객의 차량을 목적지까지 정확하고 안전하게 운송하는 서비스.
      </p>
      <p class="text-ywGray10 leading-7">
        ‘내 집 문 앞’에서 내 차의 키를 기사에게 건네면 기사가 목적지의 ‘문
        앞’까지 <br />
        내 차를 운송해드리는 <b>도어 투 도어(DOOR TO DOOR)</b> 서비스 입니다.
        <br />
        가져갈 캐리어 등 짐을 내 차 트렁크에 넣어두고 제주도 갈 때는 몸만 가뿐히
        이동하세요. <br />
        24시간 이내에 전문기사가 내 차를 제주도 목적지의 ‘문 앞’에
        운송하여드립니다. <br />
        ‘문 앞’에서 내 차를 받으세요. <br />
        이제 즐겁게 제주 라이프를 즐기세요.
      </p>
      <div
        class="mt-[120px] w-[490px] h-[160px] bg-white rounded-[49px] flex flex-col justify-center items-center gap-y-3"
      >
        <div class="flex gap-x-3">
          <img src="../../assets/icon/ic-pin-blue.svg" alt="" class="" />
          <span class="text-lg"
            ><b>경로 1 :</b> 출발/도착지 - 인천항 - 제주항- 출발/도착지</span
          >
        </div>
        <div class="flex gap-x-3">
          <img src="../../assets/icon/ic-pin-pink.svg" alt="" class="" />
          <span class="text-lg"
            ><b>경로 2 :</b> 출발/도착지 - 목포항 - 제주항- 출발/도착지</span
          >
        </div>
      </div>
      <ul class="mt-5 ml-5 text-primary text-sm list-disc">
        <li>일부 산간 지역의 경우 서비스가 불가할 수 있습니다.</li>
      </ul>
    </div>
    <div>
      <img src="../../assets/car/car-mid-fig-4.png" alt="" class="w-fit" />
    </div>
  </div>

  <div class="w-full px-[370px] py-[120px] bg-ywBlue12 flex flex-col">
    <h4 class="mb-14 text-[32px] font-bold">스타드라이버를 ‘추천’합니다.</h4>

    <div class="mr-32 grid gap-y-8 grid-cols-2 grid-rows-4">
      <div v-for="item in likeItems" class="flex gap-x-4 items-center">
        <img
          src="../../assets/icon/ic-good.svg"
          alt=""
          class="w-[38px] h-[34px]"
        />
        <span class="whitespace-nowrap">{{ item }}</span>
      </div>
    </div>
  </div>

  <div class="mx-[370px] my-[14vh] flex flex-col">
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
  import { defineComponent, ref } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";
  import YWProgress from "@/components/YWProgress.vue";

  export default defineComponent({
    name: "car-delivery",
    components: {
      StarHero,
      YWProgress,
    },
    setup() {
      const currentTab = ref(StarContent.DELIVERY);
      const heroContentType = ref(HeroContentType.CAR);

      const likeItems = ref([
        "‘제주도 한 달 살기’를 계획할 경우",
        "내 차 탁송의 전과정을 투명하게 실시간으로 확인하길 희망할 경우",
        "렌트카 비용이 부담되어 ‘자차’ 이용을 고민할 경우",
        "내 차가 흠집없이 안전하게 탁송되길 희망할 경우",
        "문 앞까지 찾아오는 ‘도어 투 도어’ 서비스가 필요할 경우",
        "사고 시 100% 책임 및 보상을 희망할 경우",
        "출발지에서 목적지까지 정확한 탁송이 필요할 경우",
        "BMW, 메르세데스-벤츠, 볼보, 제네시스, K car 등 국내외 유수 기업의 전문기사가 필요할 경우",
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
        likeItems,
        processItems,
      };
    },
  });
</script>

<style scoped></style>
