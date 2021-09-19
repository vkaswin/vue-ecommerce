<template>
  <swiper
    :slides-per-view="1"
    :space-between="10"
    :pagination="{ clickable: true }"
    :initialSlide="0"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
  >
    <swiper-slide v-for="list in image" :key="list.alt">
      <router-link :to="{ name: 'Products' }">
        <img :src="list.url" :alt="list.alt" class="banner" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Pagination]);

export default {
  name: "Carousel",
  props: ["image"],
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 300px;
}
</style>
