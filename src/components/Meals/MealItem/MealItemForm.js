import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [amoutValid, setAmountValid] = useState(true);
  const amountImputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountImputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmount > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        ref={amountImputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!amoutValid ? <p>Please enter valid amount! (1-5)</p> : ""}
    </form>
  );
}
