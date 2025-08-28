// AboutUs.jsx
import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <h2>About Us</h2>
        <p>Discover the story behind Sabor Casero and our passion for traditional cooking</p>
      </div>

      <div className={styles.history}>
        <div className={styles.text}>
          <h3>Our Story</h3>
          <p>
            Sabor Casero was founded in 1995 as a small family restaurant with the dream
            of sharing traditional recipes that had been passed down through generations.
            What began as a family adventure has become one of the
            city's most beloved restaurants.
          </p>
          <br />
          <p>
            Our philosophy is simple: fresh ingredients, authentic recipes, and
            warm service that makes every guest feel at home. Each dish
            we serve is prepared with the same love and care that we would put
            into our own family table.
          </p>
        </div>
        <div className={styles.image}>
          <img src="traditional-restaurant-kitchen.png" alt="Restaurant Kitchen" />
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <span className="material-icons">❤️</span>
          <h4>Passion for Cooking</h4>
          <p>Each dish is prepared with love and dedication, keeping culinary traditions alive.</p>
        </div>
        <div className={styles.card}>
          <span className="material-icons">👪</span>
          <h4>Family & Community</h4>
          <p>We believe in the importance of creating a family-friendly atmosphere where every guest feels welcome.</p>
        </div>
        <div className={styles.card}>
          <span className="material-icons">🏆</span>
          <h4>Exceptional Quality</h4>
          <p>We carefully select each ingredient and maintain the highest quality standards.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
