<template>
  <div class="image-wrapper">
    <div>
      <swiper
        :slides-per-view="4"
        :space-between="0"
        direction="vertical"
        :initialSlide="0"
        :navigation="{ nextEl: '#nextImg', prevEl: '#prevImg' }"
        class="swiper-image"
      >
        <swiper-slide v-for="(list, index) in url" :key="list">
          <div
            :class="[
              activeIndex === index ? 'active' : 'inactive',
              'product-img',
            ]"
            @click="activeIndex = index"
          >
            <img :src="list" :alt="list" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-arrow" v-if="url.length > 4">
        <i class="bi bi-chevron-up swiper-up" id="prevImg"></i>
        <i class="bi bi-chevron-down swiper-down" id="nextImg"></i>
      </div>
    </div>
    <div class="preview-img">
      <img :src="url?.[activeIndex]" :alt="url?.[activeIndex]" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation]);

export default {
  name: "ProductImage",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["url"],
  data() {
    return {
      activeIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.image-wrapper {
  display: flex;
  gap: 10px;
  margin: 10px 0px;
  .swiper-image {
    padding: 10px 10px 0px 10px;
    height: 370px;
  }
  .product-img {
    background: white;
    width: 80px;
    height: 80px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .active {
    border: 1px solid #e77600;
    filter: drop-shadow(0px 0px 6px #e47911);
  }
  .inactive {
    border: 1px solid transparent;
  }
  .preview-img {
    width: calc(100% - 100px);
    height: 380px;
    border: 1px solid #ddd;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    .swiper-up {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      color: black;
      font-size: 14px;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-down {
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      color: black;
      font-size: 14px;
      border-radius: 50%;
      cursor: pointer;
      outline: none;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
