import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Header, Footer } from "./components";
// Pages
import { Home, Contact } from "./pages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
