import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "star-default",
    redirect: "/introduction",
  },
  {
    path: "/introduction",
    name: "intro",
    component: () => import("../views/Star/Star-intro.vue"),
  },
  {
    path: "/parter",
    name: "parter",
    component: () => import("../views/Star/Star-parter.vue"),
  },
  {
    path: "/platform",
    name: "platform",
    component: () => import("../views/Star/Star-platform.vue"),
  },
];

export default routes;
