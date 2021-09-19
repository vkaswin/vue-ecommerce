<template>
  <div class="search-box">
    <input
      type="text"
      placeholder="Search Products"
      v-model="search"
      @focus="handleFocus()"
    />
    <div class="search-icon">
      <i class="bi bi-search"></i>
    </div>
    <div
      class="overlay"
      @click="toggle"
      v-if="isOpen && search.length !== 0"
    ></div>
    <div class="search-dropdown" v-if="isOpen && search.length !== 0">
      <div v-if="products.length !== 0">
        <div
          v-for="list in products"
          :key="list.id"
          class="search-card"
          @click="$router.push(`/product/${list.id}`)"
        >
          <img :src="list.imageUrl[0]" :alt="list.name" />
          <b>{{ list.name }}</b>
        </div>
      </div>
      <div class="search-not-found" v-else>
        <b>No Products Found</b>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { searchProduct } from "@/service/apiService";
import { debounce } from "debounce";

export default {
  name: "Search",
  setup() {
    let search = ref("");

    let isOpen = ref(false);

    let products = ref([]);

    watch(
      search,
      debounce((value) => {
        getSearchProduct({ q: value });
      }, 500)
    );

    const toggle = () => {
      isOpen.value = false;
    };

    const handleFocus = () => {
      isOpen.value = true;
    };

    const getSearchProduct = async (params) => {
      try {
        let response = await searchProduct(params);
        if (response.status == 200) {
          products.value = response.data;
        }
      } catch (error) {
        console.log(error.response);
      }
    };

    return {
      search,
      isOpen,
      products,
      toggle,
      handleFocus,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  position: relative;
  z-index: 2;
  input {
    width: 100%;
    border: none;
    background: white;
    border-radius: 4px;
    padding: 5px 40px 5px 10px;
    outline: none;
  }
  .search-icon {
    background: #fbca55;
    border: none;
    width: 50px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    position: absolute;
    right: 0px;
    top: 0;
    cursor: pointer;
    i {
      color: #333;
      font-weight: bold;
    }
  }
  .search-dropdown {
    position: absolute;
    top: 34px;
    left: 2px;
    width: calc(100% - 5px);
    max-height: 300px;
    overflow-y: auto;
    background: #ffffff;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
  }
  .overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
  .search-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 10px;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
    }
    b {
      color: black;
    }
    &:hover {
      background: #f0f0f0;
    }
  }
  .search-not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    color: #0f1111;
  }
}
</style>
