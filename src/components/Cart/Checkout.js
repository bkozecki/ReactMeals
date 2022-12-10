import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

export default function Checkout(props) {
  const [wasTouched, setWasTouched] = useState({
    name: false,
    street: false,
    city: false,
    postalCode: false,
  });

  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  let formValid;
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWasTouched((prevState) => ({
      ...prevState,
      [name]: true,
    }));
    setFormValidity((prevState) => ({
      ...prevState,
      [name]: !isEmpty(value) ? true : false,
    }));
  };

  const validator = () => {
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreet);
    const enteredCityValid = !isEmpty(enteredCity);
    const enteredPostalValid = !isEmpty(enteredPostalCode);

    setFormValidity({
      name: enteredNameValid && wasTouched.name,
      street: enteredStreetValid && wasTouched.street,
      city: enteredCityValid && wasTouched.city,
      postalCode: enteredPostalValid && wasTouched.postalCode,
    });

    formValid =
      enteredNameValid &&
      enteredStreetValid &&
      enteredCityValid &&
      enteredPostalValid;

    return formValid;
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    validator();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    if (!formValid) {
      return;
    }
    props.onSubmit({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameClasses = `${classes.control} ${
    formValidity.name && wasTouched ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    formValidity.street && wasTouched ? "" : classes.invalid
  }`;
  const postalClasses = `${classes.control} ${
    formValidity.postalCode && wasTouched ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    formValidity.city && wasTouched ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          name="name"
          onChange={handleChange}
        />
        {!formValidity.name && <p>Please entere a valid name!</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          ref={streetInputRef}
          onChange={handleChange}
        />
        {!formValidity.street && <p>Please entere a valid street!</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          name="postalCode"
          ref={postalInputRef}
          onChange={handleChange}
        />
        {!formValidity.postalCode && <p>Please entere a valid postal code!</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          ref={cityInputRef}
          onChange={handleChange}
        />
        {!formValidity.city && <p>Please entere a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}
