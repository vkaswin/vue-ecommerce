<template>
  <div class="cart-card">
    <div class="product-img">
      <img :src="product.imageUrl[0]" alt="" />
    </div>
    <div class="product-info">
      <b class="product-name">{{ product.name }}</b>
      <b>{{ price(product.price) }}</b>
      <span class="discount-price">{{ price(product.originalPrice) }}</span>
      <div class="qty-btn">
        <div class="minus" @click="$emit('minusQty')">
          <i class="bi bi-dash"></i>
        </div>
        <div class="qty">
          <span>{{ product.quantity }}</span>
        </div>
        <div class="plus" @click="$emit('plusQty')">
          <i class="bi bi-plus"></i>
        </div>
      </div>
      <div class="remove-cart" @click="$emit('removeCart')">
        <i class="bi bi-trash"></i>
        <span>Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: ["product"],
  setup() {
    const price = (num) => {
      return Number(num).toLocaleString("en-In", {
        style: "currency",
        currency: "INR",
      });
    };

    return { price };
  },
};
</script>

<style lang="scss" scoped>
.cart-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  display: flex;
  gap: 15px;
  margin: 15px 0px;
  .product-img {
    img {
      width: 150px;
      height: 150px;
    }
  }
  .product-info {
    display: flex;
    flex-direction: column;
    .product-name {
      font-size: 20px;
      color: #0f1111;
    }
    .sale-price {
      color: #0f1111;
    }
    .discount-price {
      text-decoration: line-through;
      font-size: 14px;
    }
    .remove-cart {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }
    .qty-btn {
      display: flex;
      flex-direction: row;
      border: 1px solid #ccc;
      width: 100px;
      height: 30px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      i {
        font-size: 18px;
        cursor: pointer;
      }
      span {
        font-size: 14px;
      }
    }
  }
}
</style>
