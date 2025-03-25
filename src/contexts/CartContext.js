import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);

      setTotal(total);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
      const newCart = [];
      const newProduct = product;
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
      setCart(newCart);
  };

  const removeFromCart = (id) => {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
  };

  const clearCart = () => {
      setCart([]);
  };

  const increaseAmount = (id) => {
      const newCart = [];
      for(let i = 0; i < cart.length; i++) {
          if(cart[i].id === id) {
              newCart.push({...cart[i], amount: ++cart[i].amount});
          }
          else {
              newCart.push(cart[i]);
          }
      }
      setCart(newCart);
  };

  const decreaseAmount = (id) => {
      const newCart = [];
      for(let i = 0; i < cart.length; i++) {
          if(cart[i].id === id) {
              if(cart[i].amount - 1 > 0) {
                  newCart.push({...cart[i], amount: --cart[i].amount});
              }
              else {
                  removeFromCart(id);
                  return;
              }
          }
          else {
              newCart.push(cart[i]);
          }
      }
      setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
