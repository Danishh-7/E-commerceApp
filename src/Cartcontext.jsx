import React, { useEffect } from "react";
import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
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
    const totalsum = carts.reduce((amount, item) => amount + (item.price || 0), 0);
     console.log("total sum ",totalsum)
     setTotalprice(totalsum)
  }

  const deletefromcart = async (item) => {
    const newcart = carts.filter((cart) => cart.id !== item.id);
    await AsyncStorage.setItem("carts",JSON.stringify(newcart))
    setCarts(newcart);
    totalsum(newcart)
  };
  const handlecheckout =  async() => {
    if (carts.length > 0) {
      Alert.alert("Success", "Order completed");
  
      setCarts([]); 
      totalsum([]); 
  
      try {
        console.log("Saving new cart to AsyncStorage...");
        await AsyncStorage.setItem("carts", JSON.stringify([]));
        console.log("Cart cleared in AsyncStorage.");
        // Optional: Verify
        const storedCart = await AsyncStorage.getItem("carts");
        console.log("Stored cart after clearing:", storedCart);
      } catch (error) {
        console.error("Error saving to AsyncStorage during checkout:", error);
      }
    } else {
      Alert.alert("Hold on", "Please add some items to checkout");
    }
  };
  
  const value = {
    carts,
    addtocart,
    deletefromcart,
    totalprice,
    handlecheckout
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
