import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // css configuration for toast
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext"; // import CartProvider to manage cart globally

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wrapping entire app with CartProvider to share cart data across all components
  <CartProvider>
    <BrowserRouter>
      <App />
     <ToastContainer 
  position="top-right"
  style={{ top: "90px" }}  // push down by 80px (adjust as needed)
/>
    </BrowserRouter>
  </CartProvider>
);
