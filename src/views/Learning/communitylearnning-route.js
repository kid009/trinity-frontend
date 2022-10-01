import { h, resolveComponent } from "vue";

import CommunityLearningIndex from "./CommunityLearningIndex.vue";

const communitylearnningRoute = [
  {
    path: "communitylearnning",
    name: "CommunityLearnning",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "CommunityLearningIndex",
        component: CommunityLearningIndex,
      },
    ],
  },
  {
    path: "/communitycasestudy",
    name: "CommunityCaseStudy",
    // route level code-splitting
    // this generates a separate chunk (communitycasestudy.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "communitycasestudy" */ "./CommunityCaseStudy.vue"
      ),
  },
  {
    path: "/researcherlearningindex",
    name: "ResearcherLearningIndex",
    // route level code-splitting
    // this generates a separate chunk (researcherlearningindex.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "researcherlearningindex" */ "./ResearcherLearningIndex.vue"
      ),
  },
  {
    path: "/researcherlearningdetailpage",
    name: "ResearcherLearningDetailPage",
    // route level code-splitting
    // this generates a separate chunk (researcherlearningdetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "researcherlearningdetailpage" */ "./ResearcherLearningDetailPage.vue"
      ),
  },
  {
    path: "/businesslearnningknowhowindexpage",
    name: "BusinessLearnningKnowhowIndexPage",
    // route level code-splitting
    // this generates a separate chunk (businesslearnningknowhowindexpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businesslearnningknowhowindexpage" */ "./BusinessLearnningKnowhowIndexPage.vue"
      ),
  },
  {
    path: "/businesslearnningknowhowdetailpage",
    name: "BusinessLearnningKnowhowDetailPage",
    // route level code-splitting
    // this generates a separate chunk (businesslearnningknowhowdetailpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "businesslearnningknowhowdetailpage" */ "./BusinessLearnningKnowhowDetailPage.vue"
      ),
  },
  {
    path: "/LearnmoreViewPage",
    name: "LearnmoreViewPage",
    // route level code-splitting
    // this generates a separate chunk (LearnmoreViewPage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearnmoreViewPage" */ "./LearningPage/LearnmoreViewPage.vue"
      ),
  },
  {
    path: "/Learning",
    name: "LearningViewPage",
    // route level code-splitting
    // this generates a separate chunk (Learning.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "Learning" */ "./LearningPage/LearningViewPage.vue"
      ),
  },
  {
    path: "/LearningTour",
    name: "LearningTourPage",
    // route level code-splitting
    // this generates a separate chunk (LearningTour.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningTour" */ "./LearningPage/LearningTourPage.vue"
      ),
  },
  {
    path: "/LearningResearcher",
    name: "LearningResearcherPage",
    // route level code-splitting
    // this generates a separate chunk (LearningResearcher.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningResearcher" */ "./LearningPage/LearningResearcherPage.vue"
      ),
  },
  {
    path: "/LearningCommunity",
    name: "LearningCommunityPage",
    // route level code-splitting
    // this generates a separate chunk (LearningCommunity.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningCommunity" */ "./LearningPage/LearningCommunityPage.vue"
      ),
  },
  {
    path: "/LearningBussiness",
    name: "LearningBussinessPage",
    // route level code-splitting
    // this generates a separate chunk (LearningBussiness.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningBussiness" */ "./LearningPage/LearningBussinessPage.vue"
      ),
  },
  {
    path: "/LearningTourDetail",
    name: "LearningTourDetailPage",
    // route level code-splitting
    // this generates a separate chunk (LearningTourDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningTourDetail" */ "./LearningPage/LearnningDetail/LearningTourDetailPage.vue"
      ),
  },
  {
    path: "/LearningAagency",
    name: "LearningAagencyPage",
    // route level code-splitting
    // this generates a separate chunk (LearningAagency.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningAagency" */ "./LearningPage/LearningAagencyPage.vue"
      ),
  },
  {
    path: "/LearningDetail",
    name: "LearningDetailPage",
    // route level code-splitting
    // this generates a separate chunk (LearningTourDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "LearningTourDetail" */ "./LearningPage/LearnningDetail/LearningDetailPage.vue"
      ),
  },
];

export default communitylearnningRoute;
