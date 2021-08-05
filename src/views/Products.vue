<template>
  <BaseLayout>
    <div class="product-container">
      <product-card v-for="list in products" :key="list.name" :product='list' :cart="isCart(list.id)" @addToCart="addCart"  />
    </div>
  </BaseLayout>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard'
import BaseLayout from '@/layout/BaseLayout'
import { getAllProduct, addCartProduct, getCartProduct } from '@/service/apiService'

export default {
  name: 'Products',
  components: {
    ProductCard,
    BaseLayout
  },
  data(){
    return{
      products: [],
      cart: [],
      banner: [
         {
           url: require("@/assets/images/banner/banner-1.jpg"),
           alt: "banner-1"
         },
         {
           url: require("@/assets/images/banner/banner-2.jpg"),
           alt: "banner-2"
         },
         {
           url: require("@/assets/images/banner/banner-3.jpg"),
           alt: "banner-3"
         },
         {
           url: require("@/assets/images/banner/banner-4.jpg"),
           alt: "banner-4"
         }
       ]
    }
  },
  async mounted(){
    await this.getProducts()
    await this.getCart()
  },
  methods: {
    async getProducts(){
      try{
        let response = await getAllProduct();
        if(response.status == 200){
          this.products = response.data
        }
      }
      catch(error){
        console.log(error.response)
      }
    },
    async addCart(data){
      try{
        let response = await addCartProduct(data);
        if(response.status == 201){
            this.getCart()
        }
      }
      catch(error){
        console.log(error.response)
      }
    },
    async getCart(){
      try{
        let response = await getCartProduct();
        if(response.status == 200){
          this.cart = response.data
        }
      }
      catch(error){
        console.log(error.response)
      }
    }
  },
  computed: {
    isCart(){
      return (id) => this.cart.findIndex((list)=>list.id === id) != -1 ? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
  .product-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px 15px;
  }
</style>