import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../../UI/Input";
const MealItemForm = (props) => {
  const [formIsValid, updateFormIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value, 10);
    if (enteredAmount < 1) {
      updateFormIsValid(false);
      return null;
    }

    props.onAddToCart(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>Add</button>
      {!formIsValid && <span>Invalid amount</span>}
    </form>
  );
}
export default MealItemForm;