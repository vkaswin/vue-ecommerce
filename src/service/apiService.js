import axios from "axios";
import { endpoints } from "@/config/api";

export const getAllProduct = async () => {
  let request = await axios({
    method: "get",
    url: endpoints.PRODUCT,
  });
  return request;
};

export const searchProduct = async (params) => {
  let request = await axios({
    method: "get",
    url: endpoints.SEARCH,
    params: params,
  });
  return request;
};

export const getProductDetail = async (id) => {
  let request = await axios({
    method: "get",
    url: `${endpoints.PRODUCT}/${id}`,
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

export const deleteCartProduct = async (id) => {
  let request = await axios({
    method: "delete",
    url: `${endpoints.CART}/${id}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return request;
};

export const getCartProduct = async () => {
  let request = await axios({
    method: "get",
    url: endpoints.CART,
  });
  return request;
};
