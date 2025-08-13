import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import HomePage from "./pages/Home/HomePage";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage"; // Add this import
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";

import { ProtectedRouteForUser } from "./protectedRoute/protectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/protectedRouteForAdmin";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/addproduct"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/updateproduct"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />

          <Route
            path="/addproductpage"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<NoPage />} />
        </Routes>

        <Toaster />
      </Router>
    </MyState>
  );
};

export default App;