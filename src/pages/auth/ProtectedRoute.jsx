import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));

  // ❌ belum login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // ❌ sudah login tapi bukan admin
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // ✅ admin
  return children;
};

export default ProtectedRoute;