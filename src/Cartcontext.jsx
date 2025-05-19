import React, { useEffect } from "react";
import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalprice, setTotalprice] = useState(0);

  useEffect(() => {
    loadcartitems();
  }, []);

  const loadcartitems = async () => {
    let carts = await AsyncStorage.getItem("carts");
    carts = carts ? JSON.parse(carts) : [];
    setCarts(carts);
  };

  const addtocart = async (item) => {
    const itemindex = carts.findIndex((cart) => cart.id === item.id);
    if (itemindex === -1) {
      const newcart = [...carts, item];
      await AsyncStorage.setItem("carts", JSON.stringify(newcart));
      setCarts(newcart);
      totalsum(newcart)
    }
  };
  
  const totalsum=(carts)=>{
    //  let carts=AsyncStorage.getItem("carts")
    //  carts=carts?JSON.parse(carts):[]
     const totalsum=carts.reduce((amount,item)=>(amount+item.price),0)
     console.log("total sum ",totalsum)
     setTotalprice(totalsum)
  }

  const deletefromcart = async (item) => {
    const newcart = carts.filter((cart) => cart.id !== item.id);
    await AsyncStorage.setItem("carts",JSON.stringify(newcart))
    setCarts(newcart);
    totalsum(newcart)
  };

  const value = {
    carts,
    addtocart,
    deletefromcart,
    totalprice
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
