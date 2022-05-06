import { useState, createContext } from "react";
import React from "react";

//objeto
export const CartContext = createContext();

//component
export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevArray) => [...prevArray, item]);
  };

  const removeItem = (id, category) => {
    let index = items.findIndex(
      (item) => item.id == id && item.category == category
    );
    const firstPart = items.slice(0, index);
    const secondPart = items.slice(index + 1);
    const newArr = [...firstPart, ...secondPart];
    setItems(newArr);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
