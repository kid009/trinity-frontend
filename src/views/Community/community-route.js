const communityRoute = [
  {
    path: "/community",
    name: "CommunityIndex",
    // route level code-splitting
    // this generates a separate chunk (community.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "community" */ "./CommunityIndex.vue"),
  },
  {
    path: "/communitydetail",
    name: "CommunityDetail",
    // route level code-splitting
    // this generates a separate chunk (communitydetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "communitydetail" */ "./CommunityDetail.vue"),
  },
  {
    path: "/CommunityPageDetail",
    name: "CommunityPageDetail",
    // route level code-splitting
    // this generates a separate chunk (CommunityPageDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CommunityPageDetail" */ "./CommunityPageDetail.vue"
      ),
  },
];

export default communityRoute;
