<template>
  <div class="product-card">
    <router-link :to="{name: 'ProductDetail', params: {id: product.id}}">
      <img :src="product.imageUrl[0]" :alt="product.name" />
      <b class="product-name">{{product.name}}</b>
      <div class="price">
        <span class="discount-price">{{ originalPrice }}</span>
        <b>{{ price }}</b>
      </div>
      <span class="discount-tag">{{ discountPercent }}% OFF</span>
    </router-link>
    <button class="add-cart" @click="$emit('addToCart')" :disabled="isCart">{{isCart ? "ADDED TO CART" : "ADD TO CART"}}</button>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: ["product","isCart"],
  computed: {
    price(){
      return Number(this.$props.product.price).toLocaleString("en-In",{
        maximumFractionDigits: 2,
        style: "currency",
        currency: "INR",
      })
    },
    originalPrice(){
      return Number(this.$props.product.originalPrice).toLocaleString("en-In",{
        maximumFractionDigits: 2,
        style: "currency",
        currency: "INR",
      })
    },
    discountPercent(){
      const { originalPrice, price } = this.$props.product;
      return Number(((originalPrice - price ) / originalPrice) * 100).toFixed(0)
    }
  },
}
</script>

<style lang="scss" scoped>
.product-card{
  position: relative;
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
  .discount-tag{
    background: #84be52;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 10px;
    padding: 2px 5px;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  
}
</style>
