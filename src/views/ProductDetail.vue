<template>
  <base-layout>
    <div class="row">
      <div class="col-md-6">
        <product-image :url="product.imageUrl" />
      </div>
      <div class="col-md-6">
        <product-info :product="product" />
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout";
import ProductImage from "@/components/ProductDetail/ProductImage";
import ProductInfo from "@/components/ProductDetail/ProductInfo";
import { getProductDetail } from "@/service/apiService";

export default {
  name: "ProductDetail",
  components: {
    BaseLayout,
    ProductImage,
    ProductInfo,
  },
  data() {
    return {
      product: "",
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        let response = await getProductDetail(this.$route.params.id);
        if (response.status == 200) {
          this.product = response.data;
        }
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
