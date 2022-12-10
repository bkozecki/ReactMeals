import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImg from "../../assets/foodTable.jpeg";
import logo from "../../assets/food-app-logo.png";
import classes from "./Header.module.css";
import CartContext from "../../store/cart-context";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-wrap"]}>
          <img className={classes["header-logo"]} src={logo} alt="logo"></img>
          <h1>ReactMeals</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="Table full of food" />
      </div>
    </>
  );
};

export default Header;
