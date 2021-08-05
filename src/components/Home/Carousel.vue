<template>
    <Swiper
        :slides-per-view="1"
        :space-between="10"
        :pagination="{ clickable: true }"
        :initialSlide="0"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
        <SwiperSlide v-for="list in image" :key="list.alt">
            <img :src="list.url" :alt="list.alt" class="banner">     
        </SwiperSlide>
    </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, {
  Autoplay,
  Pagination
} from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay,Pagination]);

export default {
    name: "Carousel",
    props: ["image"],
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        width: 100%;
        height: 300px;
    }
</style>