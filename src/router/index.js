import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import SprintVillagear from "../layouts/SprintVillagear.vue";
import communityRoute from "../views/Community/community-route";
import touristrouteRoute from "../views/TouristRoute/touristRoute-route";
import productRoute from "../views/Product/product-route";
import plantripRoute from "../views/PlanTrip/plantrip-route";
import blogRoute from "../views/Blog/blog-route";
import registerRoute from "../views/Register/register-route";
import businessRoute from "../views/Business/business-route";

import researcherRoute from "../views/Researcher/researcherRoute-route";

import communitylearnningRoute from "../views/Learning/communitylearnning-route";

import producttouristRoute from "../views/ProductTouristPageView/producttourist-route";

import facilitationRoute from "../views/Facilitation/facilitation-route";
import opendataRoute from "../views/OpenData/opendata-route";

import aboutsupportRoute from "../views/AboutSupportIndex/aboutsupport-route";

import mobileRoute from "../views/MobileView/mobile-route";
const routes = [
  {
    path: "/",
    name: "SprintVillagear",
    component: SprintVillagear,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      ...communityRoute,
      ...touristrouteRoute,
      ...productRoute,
      ...blogRoute,
      ...registerRoute,
      ...plantripRoute,
      ...businessRoute,
      ...communitylearnningRoute,
      ...researcherRoute,
      ...producttouristRoute,
      ...facilitationRoute,
      ...opendataRoute,
      ...aboutsupportRoute,
      ...mobileRoute,
    ],
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
