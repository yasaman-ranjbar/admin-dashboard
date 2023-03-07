import axios from "axios";

export function getProducts() {
   return axios.get("https://api.escuelajs.co/api/v1/products");
}