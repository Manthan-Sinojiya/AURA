import React, { createContext, useState, useContext } from 'react';
import { toast } from 'sonner';

// Create Context
const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    toast.success('Added to Cart', { description: `${product.name} has been added to your cart.` });
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1, size: 'M' }];
    });
  };

  // Update Cart Quantity
  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    const existing = wishlistItems.find(item => item.id === product.id);
    if (existing) {
      toast.info('Removed from Wishlist', { description: `${product.name} has been removed.` });
      setWishlistItems(prev => prev.filter(item => item.id !== product.id));
    } else {
      toast.success('Added to Wishlist', { description: `${product.name} has been added.` });
      setWishlistItems(prev => [...prev, product]);
    }
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(item => item.id === id);
  };

  return (
    <ShopContext.Provider value={{
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      wishlistItems,
      toggleWishlist,
      isInWishlist
    }}>
      {children}
    </ShopContext.Provider>
  );
};
