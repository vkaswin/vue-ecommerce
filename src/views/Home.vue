<template>
  <BaseLayout>
      <Carousel :image="banner" />
  </BaseLayout>
</template>

<script>
import BaseLayout from '@/layout/BaseLayout'
import Carousel from '@/components/Home/Carousel'
import { getAllProduct, addCartProduct } from '@/service/apiService'

export default {
  name: 'Home',
  components: {
    BaseLayout,
    Carousel
  },
  data(){
    return{
      products: [],
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
  },
}
</script>

<style lang="scss" scoped>
  
</style>