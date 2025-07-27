import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NoPage from "./pages/noPage/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import HomePage from "./pages/Home/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/*" element={<NoPage />} /> */}
          <Route path="/productInfo" element={<ProductInfo />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;