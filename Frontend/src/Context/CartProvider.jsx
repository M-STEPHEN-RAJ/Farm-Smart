import React, { useState } from "react";
import { CartContext } from "./CartContext"; 

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleToggleCart = (seed) => {
    if (!seed || !seed.id) {
      console.error("❌ Error: Missing `id` in seed object:", seed);
      return;
    }

    setCart((prevCart) =>
      prevCart.some((item) => item.id === seed.id)
        ? prevCart.filter((item) => item.id !== seed.id) // Remove item
        : [...prevCart, { ...seed }] // ✅ Ensure correct object structure
    );
  };

  return (
    <CartContext.Provider value={{ cart, handleToggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
