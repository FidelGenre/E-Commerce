import React from 'react';
import styles from './Home.module.css';

function Home() {

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className={styles.home}>
        <div className={styles.content}>
          <h2 className={styles.title}>The Best Homemade Restaurant</h2>
          <p className={styles.paragraph}>
            Discover our premium selection of dishes, prepared with passion and served to perfection, offering you a unique experience in every bite.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryBtn} onClick={scrollToMenu}>View Catalog</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="fotografia-de-comida-platos7.jpg" alt="Food" className={styles.logo} />
        </div>
      </div>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Why Choose Sabor Casero?</h2>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Premium Quality</h3>
            <p>
              Each dish is prepared with the finest ingredients, ensuring quality and freshness in every bite.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Artisanal Food</h3>
            <p>
              Our artisanal cooking process highlights the unique flavors of each dish.
            </p>
          </div>
          <div className={styles.card}>
            <h3>Fair Trade</h3>
            <p>
              We work directly with local producers, ensuring fair prices and sustainable practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
