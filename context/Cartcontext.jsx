import { createContext, useContext, useState } from "react";

const Cartcontext =createContext();

export function Cartprovider ({children}){
const [cartItems,setCartItems]=useState([]);
  
function addToCart (item){
    setCartItems([...cartItems,item])
}
function RemoveItem(item){
    
         setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    


}
    return(
        <Cartcontext.Provider value={{cartItems,addToCart,RemoveItem}}>
            {children}
        </Cartcontext.Provider>
    )
}

export function useCart(){
   return useContext(Cartcontext)
}