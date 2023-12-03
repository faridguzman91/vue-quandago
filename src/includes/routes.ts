// @ts-ignore
import { createRouter, createWebHistory } from "vue-router";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    component: Products,
    name: "products",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
