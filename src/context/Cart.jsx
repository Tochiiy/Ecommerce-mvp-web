import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartTotal: 0,
  cartCount: 0,
});

export default function CartProvider({ children }) {
  // Initialize cart from localStorage if it exists, otherwise empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("hubshub_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Whenever the cart changes, save the new cart to localStorage
  useEffect(() => {
    localStorage.setItem("hubshub_cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart (or increase quantity if it's already there)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product_id === product.product_id);
      
      if (existingItem) {
        // Map through and increase quantity of the matching item
        return prevCart.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      // If it's a new item, add it to the array with a quantity of 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
    
    alert(`${product.name} added to cart!`);
  };

  // Remove item completely from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product_id !== productId));
  };

  // Increase or decrease quantity
  const updateQuantity = (productId, amount) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.product_id === productId) {
          const newQuantity = item.quantity + amount;
          // Prevent quantity from dropping below 1
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      });
    });
  };

  // Empty the entire cart (useful for after a successful checkout)
  const clearCart = () => {
    setCart([]);
  };

  // Calculate totals on the fly
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        cartTotal, 
        cartCount 
      }}
    >
      {children}
    </CartContext.Provider>
  );
}