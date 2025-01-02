import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";
import Home from "./Pages/Home.jsx";
import MealsPage from "./Pages/MealsPage.jsx";
import ContactPage from "./components/Contact.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/meals" element={<MealsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </BrowserRouter>
  );
}

export default App;
