import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/auth/Login";
import "./index.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import ProtectedRoute from "./pages/auth/ProtectedRoute";
import Products from "./pages/Products";
import User from "./pages/User";
import About from "./pages/About";
import ProductDetail from "./components/product/ProductDetail";
import PageError from "./pages/PageError";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageError />} />
      </Routes>
    </Router>
  </React.StrictMode>
);