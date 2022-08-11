<template>
  <div v-if="starContentItems" class="mb-20 flex flex-col gap-y-12">
    <div class="px-[20%] flex justify-between items-center">
      <span class="text-5xl">{{ starContentItems.title }}</span>
      <span>홈 > {{ headerTabs }} > {{ starContentItems.title }}</span>
    </div>
    <img :src="starContentItems.img" alt="" />
    <div
      v-if="starContentItems.subtitle"
      class="mt-4 px-[20%] flex flex-col gap-y-10"
    >
      <div class="flex gap-x-8">
        <div class="basis-1/4 pb-14 border-b-2 border-primary">
          <span class="text-primary text-4xl uppercase">{{
            starContentItems.subtitle
          }}</span>
        </div>
        <div
          class="basis-3/4 pt-2 pb-14 border-b-2 border-ywGray2 flex flex-col gap-y-10"
        >
          <div class="flex flex-col gap-y-4">
            <span
              v-for="item in starContentItems.desc.descTitle"
              class="text-3xl"
              >{{ item }}</span
            >
          </div>
          <div class="flex flex-col gap-y-2">
            <span
              v-for="item in starContentItems.desc.descContent"
              class="text-2xl"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="mt-4 flex gap-x-8">
        <div class="basis-1/4"></div>
        <div class="basis-3/4 flex flex-col gap-y-10">
          <span class="text-2xl">{{
            starContentItems.subDesc.subDescTitle
          }}</span>
          <div class="flex flex-col gap-y-2">
            <span
              v-for="items in starContentItems.subDesc.subDescContent"
              class="text-ywGray"
              >{{ items }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { HeroContentType, StarContent } from "@/shared/constant";
  import { defineComponent, ref, reactive, computed, toRefs } from "vue";

  export default defineComponent({
    props: ["heroContentType", "currentTab"],

    setup(props) {
      const { currentTab, heroContentType } = toRefs(props);

      const heroContentItems = ref({
        starDriver: {
          Intro: {
            img: computed(() => {
              return new URL(
                "../../assets/star/star-top-banner-1.jpg",
                import.meta.url
              ).href;
            }),
            title: "회사소개",
            subtitle: "Premium",
            desc: {
              descTitle: "고객의 믿음에 보답하는 고품격 서비스",
              descContent: null,
            },
            subDesc: {
              subDescTitle:
                "고객의 고귀한 하루를 위한 우리의 책임감은 밤 하늘의 별 빛보다 밝습니다.",
              subDescContent: [
                "‘믿음’ 이라는 작은 두 글자는 우리가 ‘보답’ 이라는 두 글자를 떠올리게 하는 큰 힘입니다.",
                "작은 것에서부터 큰 것까지 스타드라이버는 고객의 ‘믿음’에 ‘보답’하는 고품격 서비스로 모십니다.",
              ],
            },
          },
          Parter: {
            img: computed(() => {
              return new URL(
                "../../assets/star/star-top-banner-2.jpg",
                import.meta.url
              ).href;
            }),
            title: "주요 고객사",
            subtitle: "Shining",
            desc: {
              descTitle: "최고의 고객사와 함께 빛나는 기업",
              descContent: [
                "각 업계의 선두에서 이끄는 최고의 고객사와 함께 하기에 우리는 어제보다 오늘,",
                " 오늘보다 내일 더 빛날 수 있습니다.",
              ],
            },
            subDesc: {
              subDescTitle: "",
              subDescContent: "",
            },
          },
          Platform: {
            img: computed(() => {
              return new URL(
                "../../assets/star/star-top-banner-3.jpg",
                import.meta.url
              ).href;
            }),
            title: "오픈 매칭 플랫폼",
            subtitle: "Innovative",
            desc: {
              descTitle: "Star-T 오픈 매칭 플랫폼",
              descContent: [
                "자사 연구진이 개발한 실시간 위치기반 스마트 오픈매칭 플랫폼을 24시간 운영합니다.",
              ],
            },
            subDesc: {
              subDescTitle: "",
              subDescContent: "",
            },
          },
        },
        policyAgreement: {
          Compensate: {
            img: computed(() => {
              return new URL(
                "../../assets/policy/policy-top-banner-1.jpg",
                import.meta.url
              ).href;
            }),
            title: "사고책임보상",
            subtitle: "Responsibility",
            desc: {
              descTitle: [
                "책임을 진다는 말은 보상을 할 때 비로소 할 수 있는 말입니다.",
                "투명하고 명확한 보상을 하는 것이 진정으로 책임을 지는 것입니다.",
              ],
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
        },
        driverService: {
          Service: {
            img: computed(() => {
              return new URL(
                "../../assets/driver/driver-top-banner-1.jpg",
                import.meta.url
              ).href;
            }),
            title: "법인",
            subtitle: "Premium",
            desc: {
              descTitle: [
                "VIP 를 위한 프리미엄 서비스.",
                "“존엄한 당신을 더욱 존엄하게”",
              ],
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
          Charge: {
            img: computed(() => {
              return new URL(
                "../../assets/driver/driver-top-banner-2.jpg",
                import.meta.url
              ).href;
            }),
            title: "요금안내",
            subtitle: "Charge",
            desc: {
              descTitle: ["합리적인 서비스 요금으로 모시겠습니다."],
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
        },
        carSevice: {
          Service: {
            img: computed(() => {
              return new URL(
                "../../assets/car/car-top-banner-1.jpg",
                import.meta.url
              ).href;
            }),
            title: "탁송",
            subtitle: "Safe & Fast",
            desc: {
              descTitle: ["프리미엄 탁송 서비스 “신속하고 안전하게”"],
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
          Charge: {
            img: computed(() => {
              return new URL(
                "../../assets/car/car-top-banner-2.jpg",
                import.meta.url
              ).href;
            }),
            title: "요금안내",
            subtitle: "Charge",
            desc: {
              descTitle: ["합리적인 서비스 요금으로 모시겠습니다."],
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
          Delivery: {
            img: computed(() => {
              return new URL(
                "../../assets/car/car-top-banner-3.jpg",
                import.meta.url
              ).href;
            }),
            title: "제주탁송",
            subtitle: null,
            desc: {
              descTitle: null,
              descContent: null,
            },
            subDesc: {
              subDescTitle: null,
              subDescContent: null,
            },
          },
        },
        premiumMember: null,
        helpCenter: null,
      });

      const contentObj = computed(() => {
        // Star driver content
        if (heroContentType.value === HeroContentType.STAR) {
          if (currentTab.value === StarContent.INTRO) {
            return heroContentItems.value.starDriver.Intro;
          } else if (currentTab.value === StarContent.PARTER) {
            return heroContentItems.value.starDriver.Parter;
          } else {
            return heroContentItems.value.starDriver.Platform;
          }
        }
        // Policy content
        if (heroContentType.value === HeroContentType.POLICY)
          return heroContentItems.value.policyAgreement.Compensate;
        // Driver service content
        if (heroContentType.value === HeroContentType.DRIVER) {
          if (currentTab.value === StarContent.SERVICE) {
            return heroContentItems.value.driverService.Service;
          } else {
            return heroContentItems.value.driverService.Charge;
          }
        }
        // Car service content
        if (heroContentType.value === HeroContentType.CAR) {
          if (currentTab.value === StarContent.SERVICE) {
            return heroContentItems.value.carSevice.Service;
          } else if (currentTab.value === StarContent.PRICE) {
            return heroContentItems.value.carSevice.Charge;
          } else {
            return heroContentItems.value.carSevice.Delivery;
          }
        }
        // VIP member content
        if (heroContentType.value === HeroContentType.PREMIUM)
          return heroContentItems.value.premiumMember;
        else;
        return heroContentItems.value.helpCenter;
      });

      const headerTabs = computed(() => {
        switch (heroContentType.value) {
          case HeroContentType.STAR:
            return "스타드라이버";
          case HeroContentType.POLICY:
            return "책임 및 보상";
          case HeroContentType.DRIVER:
            return "운전대행 서비스";
          case HeroContentType.CAR:
            return "카 딜리버리 서비스";
          case HeroContentType.PREMIUM:
            return "VIP기업고객";
          default:
            return "고객센터";
        }
      });

      return {
        starContentItems: contentObj,
        currentTab,
        headerTabs,
      };
    },
  });
</script>

<style scoped></style>
