import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Billing from "./pages/Billing/Billing";
import PurchaseOrders from "./pages/PurchaseOrders/PurchaseOrders";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import { fetchPurchaseOrders } from "./store/Data/fetchPurchaseOrdersSlice";
import PurchaseOrderDetail from "./pages/PurchaseOrders/components/PurchaseOrderDetail";
import AddPurchaseOrder from "./pages/PurchaseOrders/components/AddPurchaseOrder";
import { openPurchaseOrder } from "./store/PurchaseOrder/PurchaseOrderSlice";
import PrivateRoute from "./auth/PrivateRoutes";
import { loginSuccess, logout } from "./store/Auth/authSlice";
import { getToken } from "./utils/tokenUtils";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Check if token exists and update state accordingly
    const token = getToken();
    if (token) {
      // Set authenticated state if needed
      dispatch(fetchPurchaseOrders());
    }
  }, [dispatch]);

  // useEffect(() => {}, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Dashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/billing",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Billing />
        </PrivateRoute>
      ),
    },
    {
      path: "/purchaseorders",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <PurchaseOrders />
        </PrivateRoute>
      ),
    },
    {
      path: "/settings",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Settings />
        </PrivateRoute>
      ),
    },
    {
      path: "/purchaseorders/:purchaseOrderNumber",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <PurchaseOrderDetail />
        </PrivateRoute>
      ),
    },
    {
      path: "/addpurchaseorder",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <AddPurchaseOrder />
        </PrivateRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
