import { createContext, useContext, useState } from "react";

const Cartcontext = createContext();

export function Cartprovider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  }

  function removeItem(item) {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
  }

  function increaseQuantity(item) {
    setCartItems(
      cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  function decreaseQuantity(item) {
    setCartItems(
      cartItems
        .map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(cartItem => cartItem.quantity > 0)
    );
  }
 const getItemQuantity = (id) => {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  };
  return (
    <Cartcontext.Provider
      value={{ cartItems, addToCart, removeItem, increaseQuantity, decreaseQuantity , getItemQuantity}}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export function useCart() {
  return useContext(Cartcontext);
}
