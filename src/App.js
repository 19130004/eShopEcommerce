import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from "./components";
// Pages
import { Home, Contact, Login, Register, Reset, Admin } from "./pages";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";
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
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
