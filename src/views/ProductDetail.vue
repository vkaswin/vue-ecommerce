<template>
    <h1>Product Detail</h1>
</template>

<script>
import { getProductDetail } from '@/service/apiService'

export default {
    name: "ProductDetail",
    data(){
        return{
            product: ""
        }
    },
    async created(){
        await this.getProduct()
    },
    methods: {
        async getProduct(){
            try{
                let response = await getProductDetail(this.$route.params.id)
                if(response.status == 200){
                    console.log(response)
                    this.product = response.data
                }
            }
            catch(error){
                console.log(error.response)
            }
        }
    }
}
</script>