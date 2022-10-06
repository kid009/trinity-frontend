import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLazyLoad from "vue3-lazyload";
import BackToTop from "vue-backtotop";

createApp(App)
  .use(store)
  .use(router)
  .use(VueLazyLoad)
  .use(BackToTop)
  .mount("#app");
