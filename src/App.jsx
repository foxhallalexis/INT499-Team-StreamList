import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Subscriptions from "./pages/Subscriptions";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

import "./App.css";

function loadCart() {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
}

function App() {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const subscription = cart.find(
      (cartItem) => cartItem.type === "subscription"
    );
    if (
      item.type === "subscription" &&
      subscription
    ) {
      if (subscription.id === item.id) {
        return "Only one subscription may be added at a time.";
      }

      const message = "Only one subscription may be added at a time.";
      window.alert(message);
      return message;
    }

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });

    return `${item.name} added to your cart.`;
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.type !== "subscription"
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/subscriptions"
          element={<Subscriptions cart={cart} onAddToCart={addToCart} />}
        />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onRemove={removeFromCart}
              onQuantityChange={changeQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;