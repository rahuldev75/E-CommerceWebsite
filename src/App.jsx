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
import MyState from "./context/myState";

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
         <Route path="/*" element={<NoPage />} /> 
          <Route path="/productInfo" element={<ProductInfo />} />
          <Route path ="cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/user-dashboard" element={<UserDashboard />} />
           <Route path="/admin-dashboard" element={<AdminDashboard />} />



        </Routes>
      </Router>
    </MyState>
  );
}

export default App;