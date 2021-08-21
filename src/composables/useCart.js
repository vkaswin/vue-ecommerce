import { ref } from "vue";
import { useStore } from "vuex";
import {
  getCartProduct,
  addCartProduct,
  updateCartProduct,
  deleteCartProduct,
} from "@/service/apiService";

const useCart = () => {
  const store = useStore();

  const getCart = async () => {
    try {
      let response = await getCartProduct();
      if (response.status == 200) {
        store.dispatch("cartItems", response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const addCart = async (data) => {
    try {
      let response = await addCartProduct(data);
      if (response.status == 201) {
        getCart();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const deleteCart = async (id) => {
    try {
      let response = await deleteCartProduct(id);
      if (response.status == 200) {
        getCart();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const updateCart = async (id, data) => {
    try {
      let response = await updateCartProduct(id, data);
      if (response.status == 200) {
        getCart();
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return { addCart, deleteCart, getCart, updateCart };
};

export default useCart;
