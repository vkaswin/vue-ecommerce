<template>
  <base-layout>
    <div class="product-container">
      <product-card v-for="list in products" :key="list.name" :product='list' @addToCart="addCart(list)"  />
    </div>
  </base-layout>
</template>

<script>
import ProductCard from '@/components/Product/ProductCard'
import BaseLayout from '@/layout/BaseLayout'
import { getAllProduct } from '@/service/apiService'
import useCart from "@/composables/useCart"
import { ref } from 'vue'

export default {
  name: 'Products',
  components: {
    ProductCard,
    BaseLayout
  },
  mounted(){
    this.getProducts()
  },
  setup(){
    let products = ref([])

    const { addCart } = useCart();

    const getProducts = async () => {
      try{
        let response = await getAllProduct();
        if(response.status == 200){
          products.value = response.data
        }
      }
      catch(error){
        console.log(error.response)
      }
    }

    return { products, addCart,getProducts }
  },
}
</script>

<style lang="scss" scoped>
  .product-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 30px 15px;
    margin: 40px 0px;
  }
</style>