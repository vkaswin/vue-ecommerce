import axios from "axios";
import { endpoints } from "@/config/api";

export const getAllProducts = async () => {
  let request = await axios({
    method: "get",
    url: endpoints.product.GET_ALL_PRODUCT,
  });
  return request;
};
