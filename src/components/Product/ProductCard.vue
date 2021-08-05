<template>
  <div class="product-card">
    <router-link :to="{name: 'ProductDetail', params: {id: product.id}}">
    <img :src="product.imageUrl[0]" :alt="product.name" />
    <b class="product-name">{{product.name}}</b>
    <div class="price">
      <span class="discount-price">{{price(product.originalPrice)}}</span>
      <b>{{price(product.price)}}</b>
    </div>
    </router-link>
    <button class="add-cart" @click="$emit('addToCart',product)" :disabled="cart">{{cart ? "ADDED TO CART" : "ADD TO CART"}}</button>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ["product","cart"],
  methods: {
    price(num){
      return Number(num).toLocaleString("en-In",{
        maximumFractionDigits: 2,
        style: "currency",
        currency: "INR",
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.product-card{
  width: 100%;
  height: 380px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  img{
    width: 100%;
    height: 250px;
    margin-bottom: 10px;
  }
  .product-name{
    color:#151b39;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .price{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    b{
      color:  #ef4281;
    }
    span{
      color: rgb(170,170,181);
      text-decoration: line-through;
      font-size: 14px;
    }
  }
  button{
    background: #24aeb1;
    border-radius: 4px;
    border: none;
    padding: 7px 0px;
    width: 100%;
    color: white;
    font-weight: bold;
  }
  
}
</style>
