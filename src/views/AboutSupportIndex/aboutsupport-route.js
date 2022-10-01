const aboutsupportRoute = [
  {
    path: "/AboutUsPage",
    name: "AboutUsPage",
    // route level code-splitting
    // this generates a separate chunk (AboutUsPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "AboutUsPage" */ "./AboutUsPage.vue"),
  },
  {
    path: "/SupportPage",
    name: "SupportPage",
    // route level code-splitting
    // this generates a separate chunk (SupportPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SupportPage" */ "./SupportPage.vue"),
  },
  {
    path: "/PartnerPage",
    name: "PartnerPage",
    // route level code-splitting
    // this generates a separate chunk (PartnerPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "PartnerPage" */ "./PartnerPage.vue"),
  },
];

export default aboutsupportRoute;
