import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: [],
    amount: 0,
    total: 0
}

const getItemAmount = (cart) => {
    return cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
    }, 0);
}

const getItemTotal = (cart) => {
    return cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
    }, 0);
}

const assignValues = (state, newCart) => {
    state.cart = newCart;
    state.amount = getItemAmount(newCart);
    state.total = getItemTotal(newCart);
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const cart = state.cart
            const newCart = []
            const newProduct = {...action.product};
            newProduct.amount = 1;
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.id) {
                    newProduct.amount = ++cart[i].amount;
                }
                else {
                    newCart.push(cart[i]);
                }
            }
            newCart.push(newProduct);
            assignValues(state, newCart);
        },

        removeFromCart: (state, action) => {
            const newCart = state.cart.filter((item) => item.id !== action.id)
            assignValues(state, newCart);
        },

        clearCart: (state) => {
            state.cart = 0;
            state.total = 0;
            state.amount = 0;
        },

        increaseAmount: (state, action) => {
            const cart = state.cart
            const newCart = [];
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.id) {
                    newCart.push({...cart[i], amount: ++cart[i].amount});
                }
                else {
                    newCart.push(cart[i]);
                }
            }

            assignValues(state, newCart);
        },

        decreaseAmount: (state, action) => {
            const cart = state.cart
            const newCart = [];
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === action.id) {
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
