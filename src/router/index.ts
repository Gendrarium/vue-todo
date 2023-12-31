import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import TodosPage from "@/pages/TodosPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/todos",
    name: "todos",
    component: TodosPage,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
