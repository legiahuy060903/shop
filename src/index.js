import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Detail from "./components/Detail/Detail";
import Cart from "./components/Cart/Cart";
import Login from "./components/Ath/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="detail" element={<Detail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
