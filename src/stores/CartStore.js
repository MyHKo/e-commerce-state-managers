import { create } from "zustand";

const useCartStore = create((set, get) => {

    const setItemAmount = (cart) => {
        const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
        }, 0);

        const total = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.price * currentItem.amount;
        }, 0);

        set((state) => ({...state, itemAmount: amount, total: total}))
    }

    return {
        cart: [],
        itemAmount: 0,
        total: 0,
        addToCart: (product, id) => {
            const cart = get().cart;
            const newCart = [];
            const newProduct = {...product};
            newProduct.amount = 1;
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === id) {
                    newProduct.amount = ++cart[i].amount;
                }
                else {
                    newCart.push(cart[i]);
                }
            }
            newCart.push(newProduct);
            setItemAmount(newCart);
            set((state) => ({...state, cart: newCart}))
        },
        removeFromCart: (id) => {
            const newCart = get().cart.filter((item) => item.id !== id);
            setItemAmount(newCart)
            set((state) => ({...state, cart: newCart}))
        },
        clearCart: () => {
            setItemAmount([])
            set((state) => ({...state, cart: []}))
        },
        increaseAmount: (id) => {
            const cart = get().cart
            const newCart = [];
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === id) {
                    newCart.push({...cart[i], amount: ++cart[i].amount});
                }
                else {
                    newCart.push(cart[i]);
                }
            }
            setItemAmount(newCart)
            set((state) => ({newCart, ...state}));
        },
        decreaseAmount: (id) => {
            const cart = get().cart
            const newCart = [];
            for(let i = 0; i < cart.length; i++) {
                if(cart[i].id === id) {
                    if(cart[i].amount - 1 > 0) {
                        newCart.push({...cart[i], amount: --cart[i].amount});
                    }
                    else {
                        get().removeFromCart(id);
                        return;
                    }
                }
                else {
                    newCart.push(cart[i]);
                }
            }
            setItemAmount(newCart)
            set((state) => ({newCart, ...state}));
        }
    }
})

export { useCartStore };
