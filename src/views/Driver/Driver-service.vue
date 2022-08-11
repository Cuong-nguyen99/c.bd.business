<template>
  <div class="my-[12vh]">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
  </div>
  <div
    class="mx-[20%] mb-[10vh] pb-20 border-b border-ywGray2 flex flex-col gap-y-4"
  >
    <span v-for="(item, key) in instructionItems" class="text-2xl"
      >{{ key + 1 }}. {{ item }}</span
    >
  </div>
  <div class="mx-[20%] mb-[10vh] flex flex-col gap-y-10">
    <span class="text-3xl font-bold"
      >비즈니스 맞춤형 서비스로 고객을 모십니다.</span
    >
    <div class="mt-10 w-4/5 grid gap-y-10 gap-x-14 grid-cols-2 grid-rows-2">
      <div class="flex justify-start items-center gap-x-6">
        <div
          class="flex justify-center items-center w-[110px] h-[110px] border border-ywGray rounded-full"
        >
          <img src="../../assets/icon/ic-business.svg" alt="" />
        </div>
        <span class="text-lg text-ywGray">지방출장 장거리 서비스</span>
      </div>
      <div class="flex justify-start items-center gap-x-6">
        <div
          class="flex justify-center items-center w-[110px] h-[110px] border border-ywGray rounded-full"
        >
          <img src="../../assets/icon/ic-handle.svg" alt="" />
        </div>
        <span class="text-lg text-ywGray">특정기간 전담기사 서비스</span>
      </div>
      <div class="flex justify-start items-center gap-x-6">
        <div
          class="flex justify-center items-center w-[110px] h-[110px] border border-ywGray rounded-full"
        >
          <img src="../../assets/icon/ic-soju.svg" alt="" />
        </div>
        <span class="text-lg text-ywGray">출퇴근 or 회식 후 서비스</span>
      </div>
      <div class="flex justify-start items-center gap-x-6">
        <div
          class="flex justify-center items-center w-[110px] h-[110px] border border-ywGray rounded-full"
        >
          <img src="../../assets/icon/ic-golf.svg" alt="" />
        </div>
        <span class="text-lg text-ywGray">골프장 서비스</span>
      </div>
    </div>
  </div>

  <div class="mx-[20%] mb-[10vh] mt-10 flex flex-col gap-y-10">
    <span class="text-3xl font-bold">법인 서비스 비대면 (온라인) 이용절차</span>
    <span class="mb-8 text-lg">연중 무휴 24시간 서비스 가능.</span>

    <YWProgress :itemList="processItems"></YWProgress>
  </div>

  <div class="w-full relative">
    <img src="../../assets/driver/driver-mid-banner.jpg" class="h-fit" />
    <div
      class="absolute top-0 left-1/2 h-full flex flex-col justify-center gap-y-6"
    >
      <span class="text-2xl font-bold"
        >실시간 위치기반 모바일 어플리케이션</span
      >
      <p class="text-lg">
        스타드라이버 모바일 앱을 설치하고 터치 몇번으로 <br />
        법인서비스 전문교육을 수료한 A+ 기사를 실시간으로 배정받으세요.
      </p>
      <button class="mt-6 w-[380px] h-[80px] bg-primary text-white">
        고객용 어플리케이션
      </button>
    </div>
  </div>

  <div class="mx-[20%] my-20 flex flex-col">
    <span class="text-3xl font-bold">요금체제</span>
    <div class="mt-10 w-full h-px bg-black"></div>
    <div class="mt-4 flex flex-col">
      <div
        class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
      >
        <span class="font-bold text-2xl">시간할증</span>
        <span class="text-lg text-ywGray"
          >러시아워 출발 (06:00 ~ 09:00) 5,000원 추가 (야외 주간운행 할증
          없음)</span
        >
      </div>
      <div
        class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
      >
        <span class="font-bold text-2xl">경유할증</span>
        <span class="text-lg text-ywGray"
          >경유지 총거리 합산하여 요금책정 (5,000원 이상)</span
        >
      </div>
      <div
        class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
      >
        <span class="font-bold text-2xl">대기할증</span>
        <span class="text-lg text-ywGray"
          >최소 20분 무료/이후 초과 20분당 5,000원</span
        >
      </div>
      <div class="mt-8 pb-8 flex flex-col gap-y-5">
        <span class="font-bold text-2xl">부대비용</span>
        <span class="text-lg text-ywGray"
          >주차비, 톨비 등 각종 부대 비용 별도 정산</span
        >
      </div>
    </div>
  </div>

  <div class="mx-[20%] my-20 flex flex-col">
    <span class="mb-6 text-3xl font-bold">스타드라이버 구간(km) 요금표</span>
    <div class="my-8 flex justify-between items-center">
      <span class="text-xl font-bold">1. 서울, 경기 요금</span>
      <span>(Vat 별도)</span>
    </div>
    <table class="w-full table-fixed">
      <thead class="bg-ywBlue0 border-t-2 border-b-2 border-primary">
        <tr>
          <th
            colspan="2"
            class="text-xl font-bold py-3 border-r border-primary"
          >
            서울~서울
          </th>
          <th colspan="2" class="text-xl font-bold py-3">
            서울~경기 / 경기~서울 / 경기~경기
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td class="py-6 text-xl font-bold bg-ywGray8 border-r border-ywGray7">
            주행거리(km)
          </td>
          <td class="py-6 text-xl font-bold bg-ywGray8 border-r border-ywGray7">
            요금(원)
          </td>
          <td class="py-6 text-xl font-bold bg-ywGray8 border-r border-ywGray7">
            주행거리(km)
          </td>
          <td class="py-6 text-xl font-bold bg-ywGray8">요금(원)</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            0 ~ 10 km
          </td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">20,000</td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            0 ~ 10 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">20,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            10 ~ 15 km
          </td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">25,000</td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            10 ~ 15 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">25,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            15 ~ 20 km
          </td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">30,000</td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            15 ~ 20 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">30,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            20 ~ 30 km
          </td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">35,000</td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            20 ~ 25 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">35,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            30 ~ 40 km
          </td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">40,000</td>
          <td class="py-6 text-xl border-r border-b border-ywGray7">
            25 ~ 30 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">40,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl"></td>
          <td class="py-6 text-xl"></td>
          <td class="py-6 text-xl border-x border-b border-ywGray7">
            30 ~ 35 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">45,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 text-xl"></td>
          <td class="py-6 text-xl"></td>
          <td class="py-6 text-xl border-x border-b border-ywGray7">
            35 ~ 40 km
          </td>
          <td class="py-6 text-xl border-b border-ywGray7">50,000</td>
        </tr>
      </tbody>
    </table>
    <span class="my-4 text-sm"
      >서울~경기 / 경기~서울 / 경기~경기 : 40km이상 5km당 5,000원 추가</span
    >

    <div class="my-8 flex justify-between items-center">
      <span class="text-xl font-bold"
        >2. 지방 편도 요금 (수도권 출발 기준)</span
      >
      <span>(Vat 별도)</span>
    </div>
    <table class="my-10 w-full table-fixed">
      <thead class="bg-ywBlue0 border-t-2 border-b-2 border-primary">
        <tr>
          <th class="w-1/5 text-xl font-bold py-3 border-r border-primary">
            지방
          </th>
          <th class="w-3/5 text-xl font-bold py-3 border-r border-primary">
            시 / 군
          </th>
          <th class="w-1/5 text-xl font-bold py-3">편도요금(원)</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center">
          <td rowspan="2" class="py-6 border-r border-b text-xl">강원도</td>
          <td class="py-6 border text-xl">원주/철원/춘천/홍천/화천/횡성</td>
          <td class="py-6 border-b text-xl">120,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 border text-xl">
            강릉/고성/동해/삼척/속초/양구/양양/영월/인제/정선/태백/평창
          </td>
          <td class="py-6 border-b text-xl">150,000</td>
        </tr>

        <tr class="text-center">
          <td class="py-6 border-r border-b text-xl">충청북도</td>
          <td class="py-6 border text-xl">
            괴산/단양/보은/영동/옥천/음성/제천/증평/진천/청주/충주
          </td>
          <td class="py-6 border-b text-xl">120,000</td>
        </tr>

        <tr class="text-center">
          <td rowspan="2" class="py-6 border-r border-b text-xl">충청남도</td>
          <td class="py-6 border text-xl">아산/천안</td>
          <td class="py-6 border-b text-xl">100,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 border text-xl leading-10">
            계룡/공주/금산/논산/당진/대전/보령/부여/서산/서천/세종/연기/예산/
            <br />
            청양/태안/홍성
          </td>
          <td class="py-6 border-b text-xl">120,000</td>
        </tr>

        <tr class="text-center">
          <td rowspan="2" class="py-6 border-r border-b text-xl">경상북도</td>
          <td class="py-6 border text-xl leading-10">
            경산/고령/구미/군위/김천/대구/문경/봉화/상주/성주/안동/영주/영천/<br />
            예천/의성/칠곡
          </td>
          <td class="py-6 border-b text-xl">150,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 border text-xl">
            경주/영덕/영양/울진/청도/청송/포항
          </td>
          <td class="py-6 border-b text-xl">180,000</td>
        </tr>

        <tr class="text-center">
          <td rowspan="2" class="py-6 border-r border-b text-xl">경상남도</td>
          <td class="py-6 border text-xl">거창/산청/함양/합천</td>
          <td class="py-6 border-b text-xl">180,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 border text-xl leading-10">
            거제/고성/김해/남해/밀양/부산/사천/양산/울산/의령/진주/창녕/창원/
            <br />
            통영/하동/함안
          </td>
          <td class="py-6 border-b text-xl">200,000</td>
        </tr>

        <tr class="text-center">
          <td class="py-6 border-r border-b text-xl">전라북도</td>
          <td class="py-6 border text-xl">
            고창/군산/김제/무주/부안/완주/익산/임실/장수/전주/정읍/진안/남원/순창
          </td>
          <td class="py-6 border-b text-xl">150,000</td>
        </tr>

        <tr class="text-center">
          <td rowspan="2" class="py-6 border-r border-b text-xl">전라남도</td>
          <td class="py-6 border text-xl">곡성/광주/구례/담양/영광/장성</td>
          <td class="py-6 border-b text-xl">180,000</td>
        </tr>
        <tr class="text-center">
          <td class="py-6 border text-xl leading-10">
            강진/고흥/광양/나주/목포/무안/보성/순천/신안/여수/영암/완도/장흥/<br />
            진도/함평/해남/화순
          </td>
          <td class="py-6 border-b text-xl">200,000</td>
        </tr>
      </tbody>
    </table>

    <table class="my-10 w-full table-fixed">
      <thead class="h-[240px]">
        <tr>
          <th
            class="w-1/5 text-xl font-bold py-3 bg-ywBlue0 border-t-2 border-b-2 border-primary"
          >
            일일기사 서비스 <br />
            (수도권 > 업무 > 수도권)
          </th>
          <th
            class="w-3/5 text-xl py-3 pl-8 border-t-2 border-b-2 border-r-2 border-ywGray7 text-start leading-10 font-normal"
          >
            <p>1. 수도권 골프장 운행 4~8시간 기준 11만원 + 식대 1만원(별도)</p>
            <p>2. 지방권 골프장 운행 4~8시간 기준 지방 편도 요금 적용</p>
            <p>3. 8시간 이후 20분당 5,000원 추가</p>
            <p>4. 골프장 운행이 아닌 업무용 운행시 1만원 추가</p>
          </th>
          <th
            class="w-1/5 border-t-2 border-b-2 border-ywGray7 text-xl py-3 font-normal leading-10"
          >
            110,000 <br />
            (Vat 별도)
          </th>
        </tr>
      </thead>
    </table>
  </div>
  <div
    class="h-[480px] flex flex-col justify-center items-center bg-ywBlue6 gap-y-10"
  >
    <span class="text-white text-2xl font-bold">사고 책임 및 보상</span>
    <span class="text-white text-lg text-center leading-8"
      >“책임을 진다는 말은 보상을 할 때 비로소 할 수 있는 말입니다. <br />
      투명하고 명확한 보상을 하는 것이 진정으로 책임을 지는 것입니다.”</span
    >
    <button class="w-[250px] h-[80px] bg-primary text-white">바로가기 ></button>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";
  import YWProgress from "@/components/YWProgress.vue";

  export default defineComponent({
    name: "driver-service",
    components: {
      StarHero,
      YWProgress,
    },
    setup() {
      const currentTab = ref(StarContent.SERVICE);
      const heroContentType = ref(HeroContentType.DRIVER);

      const instructionItems = ref([
        "본 사 홈페이지에서 비대면으로 법인 서비스 계약 가능",
        "자체 개발 솔루션 스타드라이버 오픈 매칭 시스템으로 기사 실시간 위치 조회 가능",
        "법인 서비스 전문교육을 수료한 A+ 기사 배정",
        "건 별 현금 결제 대신 월 단위의 후불 결제 이용",
        "전자세금계산서 발행을 통한 업무 상 비용 증빙 및 경비 처리 가능",
      ]);

      const processItems = ref([
        "홈페이지 접속",
        "법인 회원가입",
        "계약 체결",
        "서비스 이용",
        "월 단위 정산 및 청구서 발행",
      ]);

      return {
        heroContentType,
        currentTab: currentTab,
        instructionItems,
        processItems,
      };
    },
  });
</script>

<style scoped></style>
