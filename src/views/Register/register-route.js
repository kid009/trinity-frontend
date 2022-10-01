const registerRoute = [
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "register" */ "./Register.vue"),
  },
  {
    path: "/setaccount",
    name: "SetAccount",
    // route level code-splitting
    // this generates a separate chunk (setaccount.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "setaccount" */ "./SetAccount.vue"),
  },
];

export default registerRoute;
