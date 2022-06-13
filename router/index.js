const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/page2",
    name: "Page2",

    component: () =>
      import(/* webpackChunkName: "Page2" */ "./components/Page2.vue"),
  },
];

 const router = createRouter({  
     history: createWebHistory(process.env.BASE_URL),
        routes
 })