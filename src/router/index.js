import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import ImagePage from "../views/ImagePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/img-page",
    name: "ImagePage",
    component: ImagePage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
