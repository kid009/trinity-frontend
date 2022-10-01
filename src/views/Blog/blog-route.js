import { h, resolveComponent } from "vue";

const blogRoute = [
  {
    path: "blog",
    name: "Blog",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "/blog",
        name: "Blog",
        // route level code-splitting
        // this generates a separate chunk (blog.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "blog" */ "./Blog.vue"),
      },
    ],
  },
  {
    path: "/blogdetail",
    name: "BlogDetail",
    // route level code-splitting
    // this generates a separate chunk (blogdetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "blogdetail" */ "./BlogDetail.vue"),
  },
  
];

export default blogRoute;
