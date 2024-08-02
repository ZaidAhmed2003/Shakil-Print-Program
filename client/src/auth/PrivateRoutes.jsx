// src/components/PrivateRoutes.jsx
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
