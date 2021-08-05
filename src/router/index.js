import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart";
import ProductDetail from "@/views/ProductDetail";
import Products from "@/views/Products";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/product",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
