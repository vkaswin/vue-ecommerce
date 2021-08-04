<template>
  <h1>{{product.name}}</h1>
  <div class="product-card">

  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ["product"]
}
</script>

<style lang="scss" scoped>
.produt-card{
  color: red;
}
</style>
