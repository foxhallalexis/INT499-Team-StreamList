import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Subscriptions from "./pages/Subscriptions";
import Watchlist from "./pages/Watchlist";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;