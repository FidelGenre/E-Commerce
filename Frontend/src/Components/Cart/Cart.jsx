import React, { useState } from "react";
import { useCart } from "./CartContext";
import styles from "./Cart.module.css";

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, clearCart } = useCart();
  const [isPaid, setIsPaid] = useState(false);

  if (!isOpen) return null;

  const toNumber = (val) =>
    typeof val === "number" ? val : parseFloat(String(val).replace(/[^0-9.-]+/g, ""));

  const total = cart.reduce((sum, item) => sum + item.cantidad * toNumber(item.price), 0);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPaid(false); 
    onClose();
  };

  const handlePay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPaid(true);
    clearCart();
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.closeBtn} onClick={handleClose}>X</button>
        <h2>My Cart</h2>

        {isPaid ? (
          <div className={styles.paidScreen}>
            <h3>Thank you for your purchase!</h3>
            <p>Your order has been successfully processed.</p>
          </div>
        ) : cart.length === 0 ? (
          <p>The cart is empty.</p>
        ) : (
          <>
            <div className={styles.items}>
              {cart.map((item) => {
                const unit = toNumber(item.price);
                const sub = unit * item.cantidad;
                return (
                  <div key={item.id} className={styles.item}>
                    <img src={item.image} alt={item.name} className={styles.img} />
                    <div>
                      <h4>{item.name}</h4>
                      <p>Quantity: {item.cantidad}</p>
                      <p>Unit Price: €{unit.toFixed(2)}</p>
                      <p>Subtotal: €{sub.toFixed(2)}</p>
                    </div>
                    <button
                      type="button"
                      className={styles.removeBtn}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeFromCart(item.id);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <h3>Total: €{total.toFixed(2)}</h3>

            <div className={styles.actions}>
              <button type="button" className={styles.clearBtn} onClick={clearCart}>
                Clear Cart
              </button>
              <button type="button" className={styles.payBtn} onClick={handlePay}>
                Pay
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
