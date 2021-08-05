<template>
  <h1>{{product.name}}</h1>
  <div class="product-card">

  </div>
</template>

<script>
import { addCartProduct,updateCartProduct } from '@/service/apiService'

export default {
  name: 'ProductCard',
  props: ["product"],
  methods: {
    async increaseQty(data){
      let body = {
        id: data.id,
        quantity: data.quantity +1
      }
      this.updateCart(body)
    },
    async updateCart(){
      try{
        let response = await updateCartProduct(body);
        if(response.status == 200){
          console.log(response)
        }
      } 
      catch(error){
        console.log(error.response)
      }
    },
    async addCart(){
      try{
        let response = await addCartProduct(body);
        if(response.status == 200){
          console.log(response)
        }
      }
      catch(error){
        console.log(error.response)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.produt-card{
  color: red;
}
</style>
