import { h, resolveComponent } from "vue";

import ResearcherDetailPage from "./ResearcherDetailPage.vue";

const researcherRoute = [
  {
    path: "researcherroute",
    name: "ResearcherRoute",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "ResearcherDetailPage",
        component: ResearcherDetailPage,
      },
    ],
  },
];

export default researcherRoute;
