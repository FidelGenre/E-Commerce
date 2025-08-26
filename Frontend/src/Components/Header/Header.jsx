import React, { useState } from 'react';
import styles from './Header.module.css';
import { useCart } from '../Cart/CartContext';

function Header({ onCartClick }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // cerrar menú en móvil
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>Sabor Casero</span>
      </div>

      <nav className={styles.nav}>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <ul className={`${styles.ul} ${menuOpen ? styles.navOpen : ''}`}>
          <li className={styles.navItem}><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
          <li className={styles.navItem}><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
          <li className={styles.navItem}><a href="#menu" onClick={(e) => handleClick(e, 'menu')}>Menu</a></li>
          <li className={styles.navItem}><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>

      <div className={styles.cart}>
        <button onClick={onCartClick}>
          🛒
          {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
