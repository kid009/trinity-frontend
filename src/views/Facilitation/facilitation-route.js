const facilitationRoute = [
  {
    path: "/facilitationindexpage",
    name: "FacilitationIndexPage",
    // route level code-splitting
    // this generates a separate chunk (facilitationindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "facilitationindexpage" */ "./FacilitationIndexPage.vue"
      ),
  },
  {
    path: "/roomsindexpage",
    name: "RoomsIndexPage",
    // route level code-splitting
    // this generates a separate chunk (roomsindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "roomsindexpage" */ "./RoomsIndexPage.vue"),
  },
  {
    path: "/restaurantindexpage",
    name: "RestaurantIndexPage",
    // route level code-splitting
    // this generates a separate chunk (restaurantindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "restaurantindexpage" */ "./RestaurantIndexPage.vue"
      ),
  },
  {
    path: "/facilitationdetailindexpage",
    name: "FacilitationDetailIndexPage",
    // route level code-splitting
    // this generates a separate chunk (facilitationdetailindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "facilitationdetailindexpage" */ "./FacilitationDetailIndexPage.vue"
      ),
  },
  {
    path: "/travalmapindexpage",
    name: "TravalMapIndexPage",
    // route level code-splitting
    // this generates a separate chunk (travalmapindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "travalmapindexpage" */ "./TravalMapIndexPage.vue"
      ),
  },
];

export default facilitationRoute;
