import { h, resolveComponent } from "vue";
const touristrouteRoute = [
  {
    path: "touristroute",
    name: "TouristRoute",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "/touristroute",
        name: "TouristRouteIndex",
        // route level code-splitting
        // this generates a separate chunk (touristroute.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "touristroute" */ "./TouristRouteIndex.vue"
          ),
      },
    ],
  },
  {
    path: "/touristroutedetail",
    name: "TouristRouteDetail",
    // route level code-splitting
    // this generates a separate chunk (touristroutedetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "touristroutedetail" */ "./TouristRouteDetail.vue"
      ),
  },
  {
    path: "/touristroutesubRoute",
    name: "TouristRouteSubRoute",
    // route level code-splitting
    // this generates a separate chunk (touristroutesubRoute.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "touristroutesubRoute" */ "./TouristRouteSubRoute.vue"
      ),
  },
  {
    path: "/activitydetail",
    name: "ActivityDetail",
    // route level code-splitting
    // this generates a separate chunk (activitydetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "activitydetail" */ "../../components/TouristRoute/TouristRouteDetail/ActivityDetail.vue"
      ),
  },
  {
    path: "/activityindex",
    name: "ActivityIndex",
    // route level code-splitting
    // this generates a separate chunk (activityindex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "activityindex" */ "./ActivityIndex.vue"),
  },
  {
    path: "/activitydetailall",
    name: "ActivityDetailAll",
    // route level code-splitting
    // this generates a separate chunk (activitydetailall.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "activitydetailall" */ "../../components/TouristRoute/Activity/ActivityDetailAll.vue"
      ),
  },
];

export default touristrouteRoute;
