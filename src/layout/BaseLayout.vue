<template>
    <Header :count="cart.length" />
    <div class="container-lg main-content">
        <slot></slot>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import {getCartProduct} from '@/service/apiService'

export default {
    name: "BaseLayout",
    components: {
        Header,
        Footer
    },
    data(){
        return{
            cart: [],
        }
    },
    async created(){
        this.getCart()
    },
    methods: {
        async getCart(){
            try{
                let response = await getCartProduct()
                if(response.status == 200){
                    this.cart = response.data
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
    .main-content{
        padding-top: 60px;
    }
</style>