import axios from "axios";
import { CATEGORIES, PLATZI_STORE_API_URL } from "../consts/services.const";

export const getCategory = async () => {
    const response = await axios.get(`${PLATZI_STORE_API_URL}${CATEGORIES}`)
    console.log(response.data)
    return response.data

}