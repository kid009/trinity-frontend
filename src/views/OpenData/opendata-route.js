const opendataRoute = [
  {
    path: "/Api",
    name: "IndexApi",
    // route level code-splitting
    // this generates a separate chunk (Api.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Api" */ "./IndexApi.vue"),
  },

  {
    path: "/loginApi",
    name: "loginApi",
    // route level code-splitting
    // this generates a separate chunk (loginApi.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "loginApi" */ "./loginApi.vue"),
  },
  {
    path: "/RegisterApi",
    name: "RegisterApi",
    // route level code-splitting
    // this generates a separate chunk (RegisterApi.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "RegisterApi" */ "./RegisterApi.vue"),
  },
  {
    path: "/DataApi",
    name: "DataApi",
    // route level code-splitting
    // this generates a separate chunk (DataApi.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DataApi" */ "./DataApi.vue"),
  },
  {
    path: "/ProfileApi",
    name: "ProfileApi",
    // route level code-splitting
    // this generates a separate chunk (ProfileApi.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ProfileApi" */ "./ProfileApi.vue"),
  },
];

export default opendataRoute;
