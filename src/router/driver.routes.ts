import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "driver-default",
    redirect: "/driver-corp",
  },
  {
    path: "/driver-corp",
    name: "driver-corp",
    component: () => import("../views/Driver/Driver-service.vue"),
  },
  {
    path: "/driver-charge",
    name: "driver-charge",
    component: () => import("../views/Driver/Driver-charge.vue"),
  },
];

export default routes;
