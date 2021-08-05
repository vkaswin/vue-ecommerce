<template>
    <h1>Cart Page</h1>
</template>

<script>
import { updateCartProduct, deleteCartProduct } from '@/service/apiService'

export default {
  name: 'Cart',
  methods: {
    async increaseQty(data){
      let body = {
        id: data.id,
        quantity: data.quantity +1
      }
      this.updateCart(body)
    },
    async decreaseQty(data){
      if(data.quantity - 1 != 0){
        let body = {
          id: data.id,
          quantity: data.quantity -1
        }
        this.updateCart(body)
      }
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
    async deleteCart(id){
      try{
        let response = await deleteCartProduct(id);
        if(response.status == 200){
          console.log(response)
        }
      }
      catch(error){
        console.log(error.response)
      }
    },
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


</style>