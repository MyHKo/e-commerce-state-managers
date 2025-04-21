import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, INCREASE_AMOUNT, DECREASE_AMOUNT } from "../constants";

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

const addToCart = (state, action) => {
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
    return {
        ...state,
        cart: newCart,
        amount: getItemTotal(newCart),
        total: getItemTotal(newCart),
    }
}

const removeFromCart = (state, action) => {
    const newCart = state.cart.filter((item) => item.id !== action.id)
    return {
        ...state,
        cart: newCart,
        amount: getItemAmount(newCart),
        total: getItemTotal(newCart),
    }
}

const increaseAmount = (state, action) => {
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

    return {
        ...state,
        cart: newCart,
        amount: getItemTotal(newCart),
        total: getItemTotal(newCart),
    }
}

const decreaseAmount = (state, action) => {
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

    return {
        ...state,
        cart: newCart,
        amount: getItemTotal(newCart),
        total: getItemTotal(newCart),
    }
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action)
        case REMOVE_FROM_CART:
            return removeFromCart(state, action)
        case CLEAR_CART:
            return {
                ...state,
                cart: [],
                amount: 0,
                total: 0
            }
        case INCREASE_AMOUNT:
            return increaseAmount(state, action)
        case DECREASE_AMOUNT:
            return decreaseAmount(state, action)
        default:
            return state
    }
}

export default cartReducer
