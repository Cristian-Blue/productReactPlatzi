import axios from "axios";
import { PLATZI_STORE_API_URL, PRODUCTS } from "../consts/services.const";

export const getProducts = async () => {
    const response = await axios.get(`${PLATZI_STORE_API_URL}${PRODUCTS}`)
    return response.data
}

export const postProducts = async (product) =>{
    try{
        const response = await axios.post(`${PLATZI_STORE_API_URL}${PRODUCTS}`, product)
        if(response.status !== 201){
            return {msn : response.message || 'Error al crear el producto', succes: false}
        }
        return {msn : 'Producto creado correctamente' , succes: true}
    }catch(error){
        return {error : error.message || 'Error al crear el producto', succes: false}
    }

}