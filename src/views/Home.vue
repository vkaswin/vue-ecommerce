<template>
  <h1>Home Page</h1>
  <product-card v-for="(list,index) in products" :key="index" :product='list' />
</template>

<script>
import ProductCard from '@/components/ProductCard'
import { getAllProduct } from '@/service/apiService'

export default {
  name: 'Home',
  components: {
    ProductCard
  },
  data(){
    return{
      products: [],
       banner: [
         {
           url: require("@/assets/banner/banner-1.jpg"),
           alt: "banner-1"
         },
         {
           url: require("@/assets/banner/banner-2.jpg"),
           alt: "banner-2"
         },
         {
           url: require("@/assets/banner/banner-3.jpg"),
           alt: "banner-3"
         },
         {
           url: require("@/assets/banner/banner-4.jpg"),
           alt: "banner-4"
         }
       ]
    }
  },
  async mounted(){
    await this.getProducts()
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
  }
}
</script>
