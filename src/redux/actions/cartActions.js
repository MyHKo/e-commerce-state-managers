import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_AMOUNT, DECREASE_AMOUNT } from "../constants";

export const addToCart = ( payload ) => ({
    type: ADD_TO_CART,
    product: payload.product,
    id: payload.id,
})

export const removeFromCart = ( id ) => ({
    type: REMOVE_FROM_CART,
    id: id
})

export const clearCart = ()=> ({
    type: CLEAR_CART
})

export const increaseAmount = ( id ) => ({
    type: INCREASE_AMOUNT,
    id: id
})

export const decreaseAmount = ( id ) => ({
    type: DECREASE_AMOUNT,
    id: id
})
