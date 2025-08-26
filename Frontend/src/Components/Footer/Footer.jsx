import React from "react";
import styles from "./Footer.module.css";

function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Sabor Casero</h3>
          <p>Authentic homemade cuisine with the finest ingredients and the classic taste.</p>
        </div>

        <div className={styles.column}>
          <h3>Contact</h3>
          <p className={styles.icon}>123 Main Street</p>
          <p className={styles.icon}>+00 000 000 000</p>
          <p className={styles.icon}>info@saborcasero.com</p>
        </div>

        <div className={styles.column}>
          <h3>Hours</h3>
          <p className={styles.icon}>Mon - Fri: 12:00 PM - 11:00 PM</p>
          <p className={styles.icon}>Sat - Sun: 11:00 AM - 12:00 AM</p>
        </div>

        <div className={styles.column}>
          <h3>Links</h3>
          <p style={{cursor: 'pointer'}} onClick={() => scrollToSection('menu')}>Our Menu</p>
          <p style={{cursor: 'pointer'}} onClick={() => scrollToSection('about')}>About Us</p>
          <p style={{cursor: 'pointer'}} onClick={() => scrollToSection('footer')}>Contact</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Sabor Casero. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
