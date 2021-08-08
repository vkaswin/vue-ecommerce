<template>
    <base-layout>
        <cart-layout>
            <h1>Payment Page</h1>
        </cart-layout>
    </base-layout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout"
import CartLayout from '@/layout/CartLayout'

export default {
    name: "Payment",
    components: {
        BaseLayout,
        CartLayout
    }
}
</script>

<style lang="scss" scoped>

</style>