import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "car-default",
    redirect: "/car-service",
  },
  {
    path: "/car-service",
    name: "car-service",
    component: () => import("../views/Car/Car-service.vue"),
  },
  {
    path: "/car-charge",
    name: "car-charge",
    component: () => import("../views/Car/Car-charge.vue"),
  },
  {
    path: "/car-delivery",
    name: "car-delivery",
    component: () => import("../views/Car/Car-delivery.vue"),
  },
];

export default routes;
