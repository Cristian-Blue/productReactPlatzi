import axios from "axios";
import { PLATZI_STORE_API_URL, PRODUCTS } from "../consts/services.const";

export const getProducts = async () => {
    const response = await axios.get(`${PLATZI_STORE_API_URL}${PRODUCTS}`)
    console.log(response.data)
    return response.data

}