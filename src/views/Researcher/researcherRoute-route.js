import { h, resolveComponent } from "vue";

import ResearcherDetailPage from "./ResearcherDetailPage.vue";
import ResearcherInnovationDetail from "./ResearcherInnovationDetail.vue";



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
  {
    path: "researcherinnovationdetail",
    name: "ResearcherInnovationDetail",
    component: ResearcherInnovationDetail,
  },
 
  
];

export default researcherRoute;
