import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { useCart } from "../Cart/CartContext";

export default function Menu() {
  const [dishes, setDishes] = useState([]);
  const { cart, addToCart } = useCart(); 

  useEffect(() => {
    fetch("https://e-commerce-oo7y.onrender.com/api/dishes")
      .then((res) => res.json())
      .then((data) => {
        console.log("Received data:", data);
        setDishes(Array.isArray(data) ? data : []); 
      })
      .catch((err) => console.error("Error fetching dishes:", err));
  }, []);

  const getQuantity = (dishId) => {
    const item = cart.find((i) => i.id === dishId);
    return item ? item.cantidad : 0;
  };

  const starters = dishes.filter((d) => d.category === "Starters");
  const mainCourses = dishes.filter((d) => d.category === "Main Courses");
  const desserts = dishes.filter((d) => d.category === "Desserts");

  const renderDishes = (categoryDishes) =>
    categoryDishes.map((dish) => (
      <div key={dish.id} className={styles.card}>
        <img src={dish.image} alt={dish.name} className={styles.image} />
        <div className={styles.info}>
          <h4>{dish.name}</h4>
          <p>{dish.description}</p>
          <div className={styles.footer}>
            <span className={styles.price}>{dish.price}</span>
            <button className={styles.button} onClick={() => addToCart(dish)}>
              Add to Cart {getQuantity(dish.id) > 0 && `(${getQuantity(dish.id)})`}
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <section className={styles.menu}>
      <h2 className={styles.title}>Our Menu</h2>
      <p className={styles.subtitle}>
        Discover our selection of traditional dishes prepared with fresh ingredients and lots of love
      </p>

      <h3 className={styles.category}>Starters</h3>
      <div className={styles.grid}>{renderDishes(starters)}</div>

      <h3 className={styles.category}>Main Courses</h3>
      <div className={styles.grid}>{renderDishes(mainCourses)}</div>

      <h3 className={styles.category}>Desserts</h3>
      <div className={styles.grid}>{renderDishes(desserts)}</div>
    </section>
  );
}
