<template>
  <div class="h1">{{ product.name }}</div>
</template>

<script>
export default {
  name: "ProductInfo",
  props: ["product"],
};
</script>

<style lang="scss" scoped></style>
