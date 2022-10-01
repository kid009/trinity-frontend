const mobileRoute = [
  {
    path: "/MobileIndex",
    name: "MobileIndex",
    // route level code-splitting
    // this generates a separate chunk (MobileIndex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "MobileIndex" */ "./MobileIndex.vue"),
  },
];

export default mobileRoute;
