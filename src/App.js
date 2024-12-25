import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Purchase from "./context/Purchase";
import Cart from "./context/Cart";

import { CartProvider } from "./context/CartContext";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists, increase the quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // If it's a new product, add it to the cart with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  return (
    <CartProvider>
      <div className="App">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/">
              <Route path="" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route
                path="purchase"
                element={<Purchase addToCart={addToCart} />}
              />
              <Route path="*" element={"404"} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
