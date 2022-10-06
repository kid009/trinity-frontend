import { h, resolveComponent } from "vue";

import PlanTrip from "./PlanTrip.vue";
import ShowTrip from "./ShowTrip.vue";

const plantripRoute = [
  {
    path: "plantrip",
    name: "PlanTrip",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "PlanTrip",
        component: PlanTrip,
      },
      {
        path: "/showTrip",
        name: "ShowTrip",
        component: ShowTrip,
      },
    ],
  },
  {
    path: "/FormIndex",
    name: "FormIndex",
    // route level code-splitting
    // this generates a separate chunk (FormIndex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "FormIndex" */ "./FormIndex.vue"),
  },

  {
    path: "/formCreate",
    name: "Create",
    // route level code-splitting
    // this generates a separate chunk (formCreate.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "formCreate" */ "./Create.vue"),
  },
];

export default plantripRoute;
