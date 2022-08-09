<template>
  <div class="my-[12vh] flex flex-col justify-center items-center">
    <StarHero :heroContentType="heroContentType"></StarHero>
    <div class="px-[20%] flex flex-col justify-center">
      <div class="flex flex-col">
        <span class="text-3xl">1. 사고 및 책임 보상</span>
        <img src="../assets/policy/img-meritz.jpg" alt="" />
        <div class="">
          <div class="table w-full">
            <div class="table-header-group">
              <div class="table-row">
                <div class="table-cell text-center">항목</div>
                <div class="table-cell text-center">보장</div>
                <div class="table-cell text-center">비고</div>
              </div>
            </div>
            <div class="table-row-group">
              <div class="table-row">
                <div class="table-cell">대인 배상</div>
                <div class="table-cell">무한</div>
                <div class="table-cell">
                  고객 자동차 보험 대인, 초과 손해 담보
                </div>
              </div>
              <div class="table-row">
                <div class="table-cell">대물 배상</div>
                <div class="table-cell">2억원</div>
                <div class="table-cell">고객의 자동차 이외의 대물 손해</div>
              </div>
              <div class="table-row">
                <div class="table-cell">자차손해</div>
                <div class="table-cell">8천만원</div>
                <div class="table-cell">고객의 자동차에 대한 손해 보장</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
