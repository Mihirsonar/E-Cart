import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize as an array

  const addItem = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        // If product already exists in the cart, update quantity
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Otherwise, add new product to the cart
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };

  const reduceItem = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        // Reduce quantity if it's greater than 1
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Remove the product from the cart if quantity is 1 or less
        return prevCart.filter(item => item.id !== productId);
      }
    });
  };

  const getProductCount = (productId) => {
    const item = cart.find(product => product.id === productId);
    return item ? item.quantity : 0;
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, reduceItem, getProductCount, getTotalPrice}}>
      {children}
    </CartContext.Provider>
  );
};
