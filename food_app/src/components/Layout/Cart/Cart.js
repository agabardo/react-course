import React from "react";
import classes from "Cart.module.css";
const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: "sushi", amount: 1, price: 12 }].map(item => <li>{ item.name}</li>);
  return (
    <div className={cart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
export default Cart;