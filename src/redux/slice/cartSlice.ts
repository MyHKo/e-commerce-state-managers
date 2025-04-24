import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductInterface } from "../../interfaces/ProductInterface"
import {ApiProductInterface} from "../../interfaces/ApiProductInterface";

interface cartSliceState {
    cart: Array<ProductInterface>,
    amount: number,
    total: number
}

const initialState: cartSliceState = {
    cart: [],
    amount: 0,
    total: 0
}

const getItemAmount = (cart: Array<ProductInterface>): number => {
    return cart.reduce((accumulator: number, currentItem: ProductInterface) => {
        return accumulator + currentItem.amount;
    }, 0);
}

const getItemTotal = (cart: Array<ProductInterface>): number => {
    return cart.reduce((accumulator: number, currentItem: ProductInterface) => {
        return accumulator + currentItem.price * currentItem.amount;
    }, 0);
}

const assignValues = (state: cartSliceState, newCart: Array<ProductInterface>): void => {
    state.cart = newCart;
    state.amount = getItemAmount(newCart);
    state.total = getItemTotal(newCart);
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<{id: number, product: ApiProductInterface}>): void => {
            const cart: Array<ProductInterface> = state.cart
            const newCart: Array<ProductInterface> = []
            const newProduct = {
                ...action.payload.product,
                amount: 1} as ProductInterface
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.payload.id) {
                    newProduct.amount = ++cart[i].amount;
                }
                else {
                    newCart.push(cart[i]);
                }
            }
            newCart.push(newProduct);
            assignValues(state, newCart);
        },

        removeFromCart: (state, action: PayloadAction<{id: number}>): void => {
            const newCart = state.cart.filter((item: ProductInterface) => item.id !== action.payload.id)
            assignValues(state, newCart);
        },

        clearCart: (state): void => {
            state.cart = [];
            state.total = 0;
            state.amount = 0;
        },

        increaseAmount: (state, action: PayloadAction<{id: number}>): void => {
            const cart: Array<ProductInterface> = state.cart
            const newCart: Array<ProductInterface> = []
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.payload.id) {
                    newCart.push({...cart[i], amount: ++cart[i].amount});
                }
                else {
                    newCart.push(cart[i]);
                }
            }

            assignValues(state, newCart);
        },

        decreaseAmount: (state, action: PayloadAction<{id: number}>): void => {
            const cart: Array<ProductInterface> = state.cart
            const newCart: Array<ProductInterface> = []
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.payload.id) {
                    if(cart[i].amount - 1 > 0) {
                        newCart.push({...cart[i], amount: --cart[i].amount});
                    }
                }
                else {
                    newCart.push(cart[i]);
                }
            }

            assignValues(state, newCart);
        }
    }
})

export const {addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount} = cartSlice.actions
export default cartSlice.reducer
