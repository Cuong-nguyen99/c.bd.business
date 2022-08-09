<template>
  <div>
    <StarHero
      :heroContentType="heroContentType"
      :currentContent="currentContent"
    ></StarHero>
    <div class="mb-[15vh] px-[20%] flex flex-col">
      <span class="mb-8 text-3xl">주요 고객사</span>
      <div class="flex flex-col gap-y-10">
        <div class="h-[80vh] bg-ywGray2"></div>
        <div class="mt-4 flex flex-col">
          <div
            class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
          >
            <span class="font-bold text-xl"
              >1. 고객 feedback 기반 A+급 기사 우선 배정</span
            >
            <span class="text-lg text-ywGray"
              >- 사고로 차량입고 시 렌터카 서비스를 운영하고 있습니다.</span
            >
          </div>
          <div
            class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
          >
            <span class="font-bold text-xl">2. 24시간 실시간 위치조회</span>
            <span class="text-lg text-ywGray"
              >- 배정된 기사의 프로필 제공은 물론 접수-배정-운행-완료-이동
              경로를 실시간으로 조회 가능.</span
            >
          </div>
          <div
            class="border-b-[1px] mt-8 pb-8 border-ywGray2 flex flex-col gap-y-5"
          >
            <span class="font-bold text-xl">3. 가격 문제로 배정 지연 방지</span>
            <span class="text-lg text-ywGray"
              >- 업계 최초 : 주문 체결가 및 기사 제시가의 빅데이터 분석을 통한
              최적 추천가 제시 시스템.</span
            >
          </div>
          <div class="mt-8 pb-8 flex flex-col gap-y-5">
            <span class="font-bold text-xl"
              >4. APP에서 ‘앱으로 호출’ 및 ‘전화 호출’ 모두 가능</span
            >
            <span class="text-lg text-ywGray"
              >- APP 메인 페이지 하단의 ‘앱으로 호출’ 과 ‘전화 호출’ 클릭으로
              기사 배정 가능.</span
            >
          </div>
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
      const heroContentType = ref(HeroContentType.STAR);
      const currentContent = ref(StarContent.PLATFORM);

      return {
        currentContent,
        heroContentType,
      };
    },
  });
</script>

<style scoped></style>
