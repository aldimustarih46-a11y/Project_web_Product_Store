import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/auth/Login";
import "./index.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import ProtectedRoute from "./pages/auth/ProtectedRoute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      </Routes>
    </Router>
  </React.StrictMode>
);