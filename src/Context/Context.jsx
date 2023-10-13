import React from "react";
import Products from "../component/Products";

export const ShopContext = React.createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const Context = (props) => {
  const [cartItems, setCartTtems] = React.useState(getDefaultCart());
  const addToCart = (ItemId) => {
    setCartTtems((prev) => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
  };
  const removeFromCart = (ItemId) => {
    setCartTtems((prev) => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  };
  const Update = (Amount,ItemId) =>{
      setCartTtems((prev)=>({...prev,[ItemId]:Amount}))
  }
  const getTotalPrice = () =>{
    let TotalPrice = 0

    for(const items in cartItems){
      if(cartItems[items] > 0){
        let itemInfo = Products.find((product)=>product.id === Number(items))
        TotalPrice+=cartItems[items] * itemInfo.price
      }
   
    }
    return TotalPrice;
  }
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    Update,
    getTotalPrice
  }
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default Context;
