import { FETCH_PRODUCTS_SUCCESS } from "../constants";

export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()

            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: data})
        } catch (e) {
            console.error(e)
        }
    }
}
