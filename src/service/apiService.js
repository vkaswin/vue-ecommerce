import axios from "axios";
import { endpoints } from "@/config/api";

export const getAllProduct = async () => {
  let request = await axios({
    method: "get",
    url: endpoints.PRODUCT,
  });
  return request;
};

export const addCartProduct = async (data) => {
  let request = await axios({
    method: "post",
    url: endpoints.CART,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  return request;
};

export const updateCartProduct = async (data) => {
  let request = await axios({
    method: "put",
    url: endpoints.CART,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  return request;
};

export const deleteCartProduct = async () => {
  let request = await axios({
    method: "delete",
    url: endpoints.CART,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return request;
};
