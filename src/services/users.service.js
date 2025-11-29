import axios from "axios";
import { PLATZI_STORE_API_URL, USERS } from "../consts/services.const";

export const getUsers = async () => {
    const response = await axios.get(`${PLATZI_STORE_API_URL}${USERS}`)
    console.log(response.data)
    return response.data

}