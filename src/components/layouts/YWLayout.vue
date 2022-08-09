<template>
  <div class="w-full h-screen flex flex-col items-center">
    <header
      class="w-full border-b-[1px] border-ywGray3 pl-[35%] flex items-center gap-x-32"
    >
      <div
        class="flex-initial min-w-fit h-[80px] flex justify-between items-center gap-x-8 font-bold text-[15px]"
      >
        <router-link to="/">스타드라이버</router-link>
        <router-link to="/">책임 및 보상</router-link>
        <router-link to="/">운전대행 서비스</router-link>
        <router-link to="/">카 딜리버리 서비스</router-link>
        <router-link to="/">VIP기업고객</router-link>
        <router-link to="/">고객센터</router-link>
      </div>
      <div class="h-full flex justify-between items-center gap-x-4 text-[12px]">
        <router-link to="/">APP 바로가기</router-link> |
        <router-link to="/">로그인</router-link> |
        <router-link to="/">회원가입</router-link>
      </div>
    </header>
    <main class="w-full">
      <slot></slot>
    </main>
    <footer class="w-full border-t-[1px] border-ywGray2 pt-[6vh] px-[20%]">
      <div class="mb-[8vh] w-full flex flex-col justify-center items-start">
        <div class="flex items-start gap-x-20">
          <div class="flex flex-col gap-y-6 text-ywGray">
            <router-link class="text-black" to="/">스타드라이버</router-link>
            <router-link to="/">회사소개</router-link>
            <router-link to="/">주요고객사</router-link>
            <router-link to="/">오픈 매칭 플랫폼</router-link>
          </div>
          <div class="flex flex-col gap-y-6 text-ywGray">
            <router-link class="text-black" to="/">책임 및 보상</router-link>
            <router-link to="/">사고책임보상</router-link>
          </div>
          <div class="flex flex-col gap-y-6 text-ywGray">
            <router-link class="text-black" to="/">서비스</router-link>
            <router-link to="/">법인</router-link>
            <router-link to="/">요금안내</router-link>
          </div>
          <div class="flex flex-col gap-y-6 text-ywGray">
            <router-link class="text-black" to="/">VIP기업고객</router-link>
            <router-link to="/">B2B 서비스</router-link>
            <router-link to="/">온라인 계약</router-link>
            <router-link to="/">마이 페이지</router-link>
          </div>
          <div class="flex flex-col gap-y-6 text-ywGray">
            <router-link class="text-black" to="/">고객센터</router-link>
            <router-link to="/">공지사항</router-link>
            <router-link to="/">FAQ</router-link>
          </div>
        </div>
        <div class="w-full h-px bg-ywGray2 my-12"></div>
        <div class="mb-10 flex w-[70%] justify-between">
          <span>서비스 이용 약관</span>
          <span>개인정보 처리방침</span>
          <span>개인정보 수집 및 이용을 위한 이용자 동의사항</span>
          <span>위치기반 서비스 이용약관</span>
        </div>
        <div class="flex flex-col justify-start gap-y-3 text-ywGray1">
          <span class="font-bold text-black">와이더블유모바일(주)</span>
          <span>서울특별시 강남구 테헤란로8길 32 타임코빌딩 6층 (역삼동)</span>
          <span>대표이사: 이영석 | 사업자등록번호: 129-86-80162</span>
          <span>개인정보취급책임자: 장성열</span>
          <span>고객센터 (법인 대표 번호): 1800-9883 | FAX: 031-522-0535</span>
          <span>E-mail: cs@ywmobile.co.kr</span>
          <span>COPYRIGHT © 2022 와이더블유모바일. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({});
</script>

<style scoped></style>
