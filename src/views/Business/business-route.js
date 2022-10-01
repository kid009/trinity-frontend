import { h, resolveComponent } from "vue";

import BusinessDetailPage from "./BusinessDetailPage.vue";

const businessRoute = [
  {
    path: "business",
    name: "Business",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "BusinessDetailPage",
        component: BusinessDetailPage,
      },
    ],
  },
  {
    path: "/businessdetailindexpage",
    name: "BusinessDetailIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businessdetailindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessdetailindexpage" */ "./BusinessDetailIndexPage.vue"
      ),
  },
  {
    path: "/businessserviceindexpage",
    name: "BusinessServiceIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businessserviceindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessserviceindexpage" */ "../Business/BusinessService/BusinessServiceIndexPage.vue"
      ),
  },
  {
    path: "/businessservicedetailpage",
    name: "BusinessServiceDetailPage",
    // route level code-splitting
    // this generates a separate chunk (businessservicedetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessservicedetailpage" */ "../Business/BusinessService/BusinessServiceDetailPage.vue"
      ),
  },
  {
    path: "/businessproducttouristindexpage",
    name: "BusinessProductTouristIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businessproducttouristindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproducttouristindexpage" */ "../Business/BusinessProductTourist/BusinessProductTouristIndexPage.vue"
      ),
  },
  {
    path: "/businessproducttouristdetailpage",
    name: "BusinessProductTouristDetailPage",
    // route level code-splitting
    // this generates a separate chunk (businessproducttouristdetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproducttouristdetailpage" */ "../Business/BusinessProductTourist/BusinessProductTouristDetailPage.vue"
      ),
  },
  {
    path: "/businessproductcommunityindexpage",
    name: "BusinessProductCommunityIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businessproductcommunityindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproductcommunityindexpage" */ "../Business/BusinessProductCommunity/BusinessProductCommunityIndexPage.vue"
      ),
  },
  {
    path: "/businessproductcommunitydetailpage",
    name: "BusinessProductCommunityDetailPage",
    // route level code-splitting
    // this generates a separate chunk (businessproductcommunitydetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproductcommunitydetailpage" */ "../Business/BusinessProductCommunity/BusinessProductCommunityDetailPage.vue"
      ),
  },
  {
    path: "/businessproductbusinessindexpage",
    name: "BusinessProductBusinessIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businessproductbusinessindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproductbusinessindexpage" */ "../Business/BusinessProductBusiness/BusinessProductBusinessIndexPage.vue"
      ),
  },
  {
    path: "/businessproductbusinessdetailpage",
    name: "BusinessProductBusinessDetailPage",
    // route level code-splitting
    // this generates a separate chunk (businessproductbusinessdetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businessproductbusinessdetailpage" */ "../Business/BusinessProductBusiness/BusinessProductBusinessDetailPage.vue"
      ),
  },
];

export default businessRoute;
