import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from "./components";
// Pages
import {
  Home,
  Contact,
  Login,
  Register,
  Reset,
  Admin,
  Checkout,
  CheckoutDetails,
  CheckoutSuccess,
  OrderHistory,
  OrderDetails,
  NotFound,
} from "./pages";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import ProductDetails from "./components/product/productDetails/ProductDetails";
import store from "./redux/store";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
import Cart from "./pages/cart/Cart";
import ReviewProducts from "./components/reviewProducts/ReviewProducts";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route
              path="/admin/*"
              element={
                <AdminOnlyRoute>
                  <Admin />
                </AdminOnlyRoute>
              }
            />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-details" element={<CheckoutDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/order-details/:id" element={<OrderDetails />} />
            <Route path="/review-product/:id" element={<ReviewProducts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
