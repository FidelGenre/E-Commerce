import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import { CartProvider } from './Components/Cart/CartContext';
import Cart from './Components/Cart/Cart';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Header onCartClick={() => setIsCartOpen(true)} />

      {/* Secciones con ids para scroll */}
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="menu">
        <Menu />
      </section>

      <section id="contact">
        <Footer />
      </section>

      {/* Carrito */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
}

export default App;
