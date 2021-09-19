<template>
  <BaseLayout>
    <Carousel :image="banner" />
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layout/BaseLayout";
import Carousel from "@/components/Home/Carousel";

export default {
  name: "Home",
  components: {
    BaseLayout,
    Carousel,
  },
  data() {
    return {
      banner: [
        {
          url: require("@/assets/images/banner/banner-1.jpg"),
          alt: "banner-1",
        },
        {
          url: require("@/assets/images/banner/banner-2.jpg"),
          alt: "banner-2",
        },
        {
          url: require("@/assets/images/banner/banner-3.jpg"),
          alt: "banner-3",
        },
        {
          url: require("@/assets/images/banner/banner-4.jpg"),
          alt: "banner-4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
