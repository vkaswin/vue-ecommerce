<template>
  <base-layout>
    <div class="cart-box">
      <div class="cart-title">
        <b>Shopping Cart</b>
      </div>
      <div class="row">
        <div class="col-md-8">
          <cart-card v-for="list in cart" :key="list.id" :product="list" @plusQty="increaseQty(list)" @minusQty="decreaseQty(list)" @removeCart="deleteCart(list.id)"/>
        </div>
        <div class="col-md-4">
          <div class="order-summary">
            
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout"
import CartCard from '@/components/Cart/CartCard'
import useCart from "@/composables/useCart"

export default {
  name: 'Cart',
  components: {
    BaseLayout,
    CartCard
  },
  setup(){
    const { cart ,updateCart, deleteCart } = useCart()

    const increaseQty = async (data) => {
      let body = {...data, quantity: data.quantity +1 }
      await updateCart(data.id, body)
    }

    const decreaseQty = async (data) => {
      if(data.quantity - 1 != 0){
        let body = {...data, quantity: data.quantity -1 }
        await updateCart(data.id, body)
      }
    }

    return { cart ,increaseQty, decreaseQty, deleteCart }
  },

}
</script>

<style lang="scss" scoped>
  .cart-box{
    background: #FFF;
    padding: 15px;
    .cart-title{
      color: #0f1111;
      font-size: 24px;
      border-bottom: 1px solid #ddd;
    }
  }

</style>