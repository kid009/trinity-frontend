import { h, resolveComponent } from "vue";

import Product from "./Product.vue";

const productRoute = [
  {
    path: "product",
    name: "product",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "Product",
        component: Product,
      },
    ],
  },
  {
    path: "/productdetail",
    name: "ProductDetail",
    // route level code-splitting
    // this generates a separate chunk (productdetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "productdetail" */ "./ProductDetail.vue"),
  },
  {
    path: "/technologypage",
    name: "TechnologyPage",
    // route level code-splitting
    // this generates a separate chunk (technologypage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "technologypage" */ "./TechnologyPage.vue"),
  },
  {
    path: "/technologydetail",
    name: "TechnologyDetail",
    // route level code-splitting
    // this generates a separate chunk (technologydetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "technologydetail" */ "./TechnologyDetail.vue"
      ),
  },
  {
    path: "/innovationprocesspage",
    name: "InnovationProcessPage",
    // route level code-splitting
    // this generates a separate chunk (innovationprocesspage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "innovationprocesspage" */ "../Product/InnovationProcess/InnovationProcessPage.vue"
      ),
  },
  {
    path: "/innovationprocessdetail",
    name: "InnovationProcessDetail",
    // route level code-splitting
    // this generates a separate chunk (innovationprocessdetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "innovationprocessdetail" */ "../Product/InnovationProcess/InnovationProcessDetail.vue"
      ),
  },
  {
    path: "/innovationobjectpage",
    name: "InnovationObjectPage",
    // route level code-splitting
    // this generates a separate chunk (innovationobjectpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "innovationobjectpage" */ "../Product/InnovationObject/InnovationObjectPage.vue"
      ),
  },
  {
    path: "/innovationobjectdetail",
    name: "InnovationObjectDetail",
    // route level code-splitting
    // this generates a separate chunk (innovationobjectdetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "innovationobjectdetail" */ "../Product/InnovationObject/InnovationObjectDetail.vue"
      ),
  },
  {
    path: "/researcherproductpage",
    name: "ResearcherProductPage",
    // route level code-splitting
    // this generates a separate chunk (researcherproductpage.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "researcherproductpage" */ "../Product/ResearcherProduct/ResearcherProductPage.vue"
      ),
  },
  {
    path: "/researcherproductdetail",
    name: "ResearcherProductDetail",
    // route level code-splitting
    // this generates a separate chunk (researcherproductdetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "researcherproductdetail" */ "../Product/ResearcherProduct/ResearcherProductDetail.vue"
      ),
  },
];

export default productRoute;
