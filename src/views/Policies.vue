<template>
  <div class="my-[12vh] flex flex-col justify-center items-center">
    <StarHero :heroContentType="heroContentType"></StarHero>
    <div class="w-3/5 flex flex-col items-start">
      <span class="text-3xl">1. 사고 및 책임 보상</span>
      <img class="my-20" src="../assets/policy/img-meritz.jpg" alt="" />
      <table class="w-full table-auto">
        <thead class="bg-primary text-white">
          <tr>
            <th class="font-normal py-3">항목</th>
            <th class="font-normal py-3">보장</th>
            <th class="font-normal py-3">비고</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td class="py-3 bg-ywGray5 border-b border-ywGray6">대인 배상</td>
            <td class="py-3 border-r border-b border-ywGray7">무한</td>
            <td class="py-3 border-b border-ywGray7">
              고객 자동차 보험 대인, 초과 손해 담보
            </td>
          </tr>
          <tr class="text-center">
            <td class="py-3 bg-ywGray5 border-b border-ywGray6">W대물 배상</td>
            <td class="py-3 border-r border-b border-ywGray7">2억원</td>
            <td class="py-3 border-b border-ywGray7">
              고객의 자동차 이외의 대물 손해
            </td>
          </tr>
          <tr class="text-center">
            <td class="py-3 bg-ywGray5">자차손해</td>
            <td class="py-3 border-r border-b border-ywGray7">8천만원e</td>
            <td class="py-3 border-b border-ywGray7">
              고객의 자동차에 대한 손해 보장
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-20 mb-10 flex items-center gap-x-6">
        <div
          class="h-[147px] w-[280px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
        >
          <img src="../assets/icon/ic-call.svg" alt="" />
          <span class="text-base">피해접수 1800-9883</span>
        </div>
        <div class="w-[34px] h-px bg-ywGray"></div>
        <div
          class="h-[147px] w-[280px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
        >
          <img src="../assets/icon/ic-center.svg" alt="" />
          <span class="text-base">사고 및 보상처리</span>
        </div>
        <div class="w-[34px] h-px bg-ywGray"></div>
        <div
          class="h-[147px] w-[280px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
        >
          <img src="../assets/icon/ic-money.svg" alt="" />
          <span class="text-base">대리보험 및 현금 보상</span>
        </div>
      </div>

      <div class="flex flex-col my-10 gap-y-5">
        <span class="text-lg"
          >- 대인배상은 고객님의 책임보험 초과 손해 시 적용</span
        >
        <span class="text-lg"
          >- 기사를 제외한 모든 사람은 대인에 해당되며 무한으로 처리</span
        >
        <span class="text-lg"
          >- 대리운전 보험에서 자손의 범위는 기사만 해당</span
        >
      </div>
      <div class="my-16 w-full h-px bg-ywGray2"></div>

      <span class="text-3xl">2. 범칙금 및 과태료 보상</span>
      <div class="mt-10 flex flex-col gap-y-10">
        <span class="text-lg"
          >- 범칙금 및 과태료를 7일 이내 완벽 처리 보상합니다.</span
        >
        <div class="my-10 flex items-center gap-x-5">
          <div
            class="h-[147px] w-[257px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
          >
            <img src="../assets/icon/ic-call.svg" alt="" />
            <span class="text-base">피해접수 1800-9883</span>
          </div>
          <div class="w-[34px] h-px bg-ywGray"></div>
          <div
            class="h-[147px] w-[257px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
          >
            <img src="../assets/icon/ic-fax.svg" alt="" />
            <span class="text-base">팩스 혹은 이메일 송부</span>
          </div>
          <div class="w-[34px] h-px bg-ywGray"></div>
          <div
            class="h-[147px] w-[257px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
          >
            <img src="../assets/icon/ic-confirm.svg" alt="" />
            <span class="text-base">스타드라이버 운행사실 확인</span>
          </div>
          <div class="w-[34px] h-px bg-ywGray"></div>
          <div
            class="h-[147px] w-[257px] border border-ywGray rounded-xl flex flex-col justify-center items-center gap-y-5"
          >
            <img src="../assets/icon/ic-money.svg" alt="" />
            <span class="text-base">보상</span>
          </div>
        </div>
      </div>

      <div class="my-16 w-full h-px bg-ywGray2"></div>

      <span class="text-3xl">3. 렌터카 서비스</span>
      <span class="my-10 text-lg"
        >- 사고로 차량입고 시 렌터카 서비스를 운영하고 있습니다.</span
      >
    </div>
  </div>
</template>

<script lang="ts">
  import { HeroContentType } from "@/shared/constant";
  import { defineComponent, ref } from "vue";
  import StarHero from "@/components/star/StarHero.vue";

  export default defineComponent({
    name: "policy",
    components: {
      StarHero,
    },
    setup() {
      const heroContentType = ref(HeroContentType.POLICY);

      return {
        heroContentType,
      };
    },
  });
</script>

<style scoped></style>
