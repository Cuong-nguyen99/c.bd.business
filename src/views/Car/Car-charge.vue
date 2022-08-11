<template>
  <div class="my-[12vh]">
    <StarHero
      :heroContentType="heroContentType"
      :currentTab="currentTab"
    ></StarHero>
  </div>

  <div class="mx-[370px] mb-[14vh] flex gap-x-20">
    <div class="flex flex-col gap-y-5">
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold"
          >스타드라이버 탁송 구간 (km) 요금표</span
        >
        <span>(Vat 별도)</span>
      </div>
      <table class="w-fit table-fixed">
        <thead class="bg-ywBlue0 border-t-2 border-b-2 border-primary">
          <tr>
            <th
              class="w-[190px] h-20 text-xl font-bold py-3 border-r border-primary"
            >
              주행거리(km)
            </th>
            <th
              class="w-[160px] h-20 text-xl font-bold py-3 border-r border-primary"
            >
              요금(원)
            </th>
            <th class="w-[210px] h-20 text-base font-bold py-3">
              구간내 km 당 추가 요금(원)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              0 ~ 10 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              20,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">-</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              10 ~ 50 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              20,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">700</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              50 ~ 100 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              30,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">450</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              100 ~ 200 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              35,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">300</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              200 ~ 300 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              40,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">250</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              300 ~ 500 km
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              40,000
            </td>
            <td class="py-6 text-xl border-b border-ywGray7">250</td>
          </tr>
        </tbody>
      </table>
      <ul class="ml-7 list-disc text-sm leading-8">
        <li>경유 요금 : 거리에 따른 경유 요금 추가 (Min. 5,000원)</li>
        <li>
          취소 요금 : 도착 후 취소 5,000원 / 단, 예약콜 전일 배정 06:00 ~ 09:00
          취소시 10,000원
        </li>
        <li>경비 요금 : 주유비용, 세차비용 등 실비 정산</li>
        <li>
          조조/야간 : 오전 9시 이전 또는 오후 7시 이후 출발시 5,000원 추가
        </li>
        <li>
          서류 요금 : 회수서류 등기 또는 지점반납 등 서류 핸들링 비용 10,000원
        </li>
        <li>통행 요금 : 통행료 포함 / 단, 영종도 톨비 별도</li>
        <li>오지 지역 : 출,도착지 중 읍/면/리 지역인 경우 10,000원 추가</li>
      </ul>
    </div>
    <!-- <div class="basis-1/6"></div> -->

    <div class="flex flex-col gap-y-5">
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold"
          >지역별 도착지 기준 요금표 예시 (서울 여의도 출발기준)</span
        >
        <span>(Vat 별도)</span>
      </div>
      <table class="w-full table-fixed">
        <thead class="bg-ywBlue0 border-t-2 border-b-2 border-primary">
          <tr>
            <th
              class="w-[240px] h-20 text-xl font-bold py-3 border-r border-primary"
            >
              도착지
            </th>
            <th
              class="w-[150px] h-20 text-xl font-bold py-3 border-r border-primary"
            >
              주행거리(km)
            </th>
            <th class="w-[160px] h-20 text-xl font-bold py-3">예상 요금(원)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">서울</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">23km</td>
            <td class="py-6 text-xl border-b border-ywGray7">29,100</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">인천</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">55km</td>
            <td class="py-6 text-xl border-b border-ywGray7">50,250</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">
              경기도
            </td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">66km</td>
            <td class="py-6 text-xl border-b border-ywGray7">55,200</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">천안</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">100km</td>
            <td class="py-6 text-xl border-b border-ywGray7">70,500</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">대구</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">300km</td>
            <td class="py-6 text-xl border-b border-ywGray7">125,500</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">광주</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">320km</td>
            <td class="py-6 text-xl border-b border-ywGray7">130,500</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">목포</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">360km</td>
            <td class="py-6 text-xl border-b border-ywGray7">140,500</td>
          </tr>
          <tr class="text-center">
            <td class="py-6 text-xl border-r border-b border-ywGray7">부산</td>
            <td class="py-6 text-xl border-r border-b border-ywGray7">400km</td>
            <td class="py-6 text-xl border-b border-ywGray7">150,500</td>
          </tr>
        </tbody>
      </table>
      <ul class="ml-7 list-disc text-sm leading-8">
        <li>여러가지 요인에 따라 요금이 상이할 수 있습니다.</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import StarHero from "@/components/star/StarHero.vue";
  import { HeroContentType, StarContent } from "@/shared/constant";
  import YWProgress from "@/components/YWProgress.vue";

  export default defineComponent({
    name: "car-charge",
    components: {
      StarHero,
      YWProgress,
    },
    setup() {
      const currentTab = ref(StarContent.PRICE);
      const heroContentType = ref(HeroContentType.CAR);

      return {
        heroContentType,
        currentTab,
      };
    },
  });
</script>

<style scoped></style>
