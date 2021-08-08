import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Cart from "@/views/Cart";
import ProductDetail from "@/views/ProductDetail";
import Products from "@/views/Products";
import Address from "@/views/Address";
import Payment from "@/views/Payment";
import NotFound from "@/views/NotFound";

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
  {
    path: "/address",
    name: "Address",
    component: Address,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
