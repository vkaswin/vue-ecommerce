<template>
  <div class="summary-box">
    <div class="title">
      <b>Order Summary</b>
    </div>
    <div class="price-detail">
      <span>Cart Value</span>
      <span>{{ cartValue }}</span>
    </div>
    <div class="price-detail">
      <span>Delivery Charge</span>
      <span>FREE</span>
    </div>
    <div class="price-detail">
      <span style="color: #4caf50">Total Discount</span>
      <span style="color: #4caf50">- {{ discount }}</span>
    </div>
    <div class="order-total">
      <b>Order Total</b>
      <b>{{ total }}</b>
    </div>
    <router-link :to="{ name: 'Address' }">
      <button class="btn-checkout">PROCEED</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OrderSummary",
  props: ["product"],
  computed: {
    total() {
      let totalValue = this.$props.product.reduce((current, previous) => {
        return current + previous.quantity * previous.price;
      }, 0);
      return Number(totalValue).toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      });
    },
    discount() {
      let totalDiscount = this.$props.product.reduce((current, previous) => {
        return (
          current +
          (previous.originalPrice * previous.quantity -
            previous.price * previous.quantity)
        );
      }, 0);
      return Number(totalDiscount).toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      });
    },
    cartValue() {
      let cart = this.$props.product.reduce((current, previous) => {
        return current + previous.price * previous.quantity;
      }, 0);
      return Number(cart).toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.summary-box {
  width: 100%;
  background: #fff;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px 0px;
  .title {
    color: #0f1111;
    font-size: 20px;
  }
  .price-detail {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0px;
  }
  .order-total {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0px;
    padding: 10px 0px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-size: 20px;
  }
  .btn-checkout {
    width: 100%;
    background: #fbca55;
    border: none;
    border-radius: 4px;
    color: #0f1111;
    padding: 7px 0px;
    margin: 10px 0px;
  }
}
</style>
