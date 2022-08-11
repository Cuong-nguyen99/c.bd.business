<template>
  <div class="my-[12vh]">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
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
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";

  export default defineComponent({
    name: "driver-charge",
    components: {
      StarHero,
    },
    setup() {
      const currentTab = ref(StarContent.PRICE);
      const heroContentType = ref(HeroContentType.DRIVER);

      return {
        heroContentType,
        currentTab,
      };
    },
  });
</script>

<style scoped></style>
