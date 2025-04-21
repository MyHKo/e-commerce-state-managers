import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_REQUEST} from "../constants";

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_PRODUCTS_REQUEST})

        try {
            const response = fetch("https://fakestoreapi.com/products")
            const data = (await response).json()

            dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type: FETCH_PRODUCTS_ERROR, e})
        }
    }
}
