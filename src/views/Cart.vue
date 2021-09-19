<template>
  <base-layout>
    <cart-layout>
      <div class="cart-box">
        <div class="cart-title">
          <b>Shopping Cart</b>
        </div>
        <div class="row" v-if="cart.length !== 0">
          <div class="col-md-8">
            <cart-card
              v-for="list in cart"
              :key="list.id"
              :product="list"
              @plusQty="increaseQty(list)"
              @minusQty="decreaseQty(list)"
              @removeCart="deleteCart(list.id)"
            />
          </div>
          <div class="col-md-4">
            <order-summary :product="cart" />
          </div>
        </div>
        <div class="empty-cart" v-else>
          <img :src="emptyCart" alt="empty" />
          <router-link :to="{ name: 'Products' }">
            <button>Continue Shopping</button>
          </router-link>
        </div>
      </div>
    </cart-layout>
  </base-layout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout";
import CartCard from "@/components/Cart/CartCard";
import CartLayout from "@/layout/CartLayout";
import OrderSummary from "@/components/Cart/OrderSummary";
import useCart from "@/composables/useCart";
import { ref, watchEffect } from "vue";
import { useStore } from "vuex";

export default {
  name: "Cart",
  components: {
    BaseLayout,
    CartCard,
    OrderSummary,
    CartLayout,
  },
  setup() {
    const { updateCart, deleteCart } = useCart();

    const store = useStore();

    let cart = ref([]);

    let emptyCart = ref(require("@/assets/images/empty-cart.png"));

    watchEffect(() => {
      cart.value = store.state.cart.items;
    });

    const increaseQty = async (data) => {
      let body = { ...data, quantity: data.quantity + 1 };
      await updateCart(data.id, body);
    };

    const decreaseQty = async (data) => {
      if (data.quantity - 1 != 0) {
        let body = { ...data, quantity: data.quantity - 1 };
        await updateCart(data.id, body);
      }
    };

    return { cart, increaseQty, decreaseQty, deleteCart, emptyCart };
  },
};
</script>

<style lang="scss" scoped>
.cart-box {
  background: #fff;
  padding: 15px;
  .cart-title {
    color: #0f1111;
    font-size: 24px;
    border-bottom: 1px solid #ddd;
  }
}
.empty-cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 40px 0px;
  img {
    width: 400px;
    height: 280px;
  }
  button {
    background: #fbca55;
    border: none;
    border-radius: 4px;
    color: #0f1111;
    padding: 7px 0px;
    width: 200px;
  }
}
</style>
