import { h, resolveComponent } from "vue";

const producttouristRoute = [
  {
    path: "producttouristindexpage",
    name: "ProductTouristIndexPage",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "/productTouristIndexPage",
        name: "ProductTouristIndexPage",
        // route level code-splitting
        // this generates a separate chunk (productTouristIndexPage.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "productTouristIndexPage" */ "./ProductTouristIndexPage.vue"
          ),
      },
    ],
  },
  {
    path: "/producttouristdetailpage",
    name: "ProductTouristDetailPage",
    // route level code-splitting
    // this generates a separate chunk (producttouristdetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "producttouristdetailpage" */ "./ProductTouristDetailPage.vue"
      ),
  },
  {
    path: "/ProductIndex",
    name: "ProductIndex",
    // route level code-splitting
    // this generates a separate chunk (ProductIndex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ProductIndex" */ "./ProductIndex.vue"),
  },
];

export default producttouristRoute;
