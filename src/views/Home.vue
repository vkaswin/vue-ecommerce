<template>
  <h1>Home Page</h1>
  <product-card v-for="(list,index) in products" :key="index" :product='list' />
</template>

<script>
import ProductCard from '@/components/ProductCard'
import {getAllProducts} from '@/service/Product'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data(){
    return{
      products: [],
    }
  },
  mounted(){
    this.getProducts()
  },
  methods: {
    async getProducts(){
      try{
        let response = await getAllProducts();
        if(response.status == 200){
          console.log(response)
          this.products = response.data
        }
      }
      catch(error){
        console.log(error.response)
      }
    }
  }
}
</script>
