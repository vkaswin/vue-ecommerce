<template>
    <Header />
    <div class="container-lg main-content">
        <slot></slot>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
    name: "BaseLayout",
    components: {
        Header,
        Footer
    },
}
</script>

<style lang="scss" scoped>
    .main-content{
        padding-top: 60px;
    }
</style>