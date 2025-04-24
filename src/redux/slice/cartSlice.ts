import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProductInterface } from "../../interfaces/ProductInterface"

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

const getItemAmount = (cart: Array<ProductInterface>) => {
    return cart.reduce((accumulator: number, currentItem: ProductInterface) => {
        return accumulator + currentItem.amount;
    }, 0);
}

const getItemTotal = (cart: Array<ProductInterface>) => {
    return cart.reduce((accumulator: number, currentItem: ProductInterface) => {
        return accumulator + currentItem.price * currentItem.amount;
    }, 0);
}

const assignValues = (state: cartSliceState, newCart: Array<ProductInterface>) => {
    state.cart = newCart;
    state.amount = getItemAmount(newCart);
    state.total = getItemTotal(newCart);
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {

        addToCart: (state, action: PayloadAction<{id: number, product: ProductInterface}>) => {
            const cart: Array<ProductInterface> = state.cart
            const newCart: Array<ProductInterface> = []
            const newProduct: ProductInterface = {...action.payload.product};
            newProduct.amount = 1;
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

        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            const newCart = state.cart.filter((item: ProductInterface) => item.id !== action.payload.id)
            assignValues(state, newCart);
        },

        clearCart: (state) => {
            state.cart = [];
            state.total = 0;
            state.amount = 0;
        },

        increaseAmount: (state, action: PayloadAction<{id: number}>) => {
            const cart = state.cart
            const newCart = [];
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

        decreaseAmount: (state, action: PayloadAction<{id: number}>) => {
            const cart = state.cart
            const newCart = [];
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
