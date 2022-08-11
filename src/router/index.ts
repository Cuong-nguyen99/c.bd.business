import { createRouter, createWebHistory } from "vue-router";
import starRoutes from "../router/star.routes";
import driverRoutes from "../router/driver.routes";
import carRoutes from "../router/car.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/star",
      name: "star",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Star/Star.vue"),
      children: starRoutes,
    },
    {
      path: "/policies",
      name: "policies",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Policies.vue"),
    },
    {
      path: "/driver-service",
      name: "driver-service",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Driver/Driver.vue"),
      children: driverRoutes,
    },
    {
      path: "/car",
      name: "car",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Car/Index.vue"),
      children: carRoutes,
    },
    {
      path: "/premium-member",
      name: "premium-member",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PremiumMember.vue"),
    },
    {
      path: "/help-center",
      name: "help-center",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HelpCenter.vue"),
    },
  ],
});

export default router;
