import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./components/UserContext";

const AppLayout = () => {
  return (
    <UserContext.Provider value={{ logged: "rohan" }}>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurantMenu/:resId" element={<RestaurantMenu />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);
