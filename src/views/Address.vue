<template>
  <base-layout>
    <cart-layout>
      <router-link :to="{ name: 'Payment' }">
        <h1>Address Page</h1>
      </router-link>
    </cart-layout>
  </base-layout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout";
import CartLayout from "@/layout/CartLayout";

export default {
  name: "Address",
  components: {
    BaseLayout,
    CartLayout,
  },
};
</script>

<style lang="scss" scoped></style>
