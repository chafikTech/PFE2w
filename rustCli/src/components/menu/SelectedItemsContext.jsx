import React, { createContext, useState } from "react";

export const SelectedItemsContext = createContext();

export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = (item) => {
    setSelectedItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (title) => {
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.title !== title),
    );
  };

  return (
    <SelectedItemsContext.Provider
      value={{ selectedItems, addItem, removeItem }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};

