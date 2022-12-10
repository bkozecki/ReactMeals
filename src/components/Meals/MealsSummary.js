import React from "react";

import classes from "./MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delecious food, delivered right to You!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy delecious lunch or diner at home.
      </p>
      <p>
        All of our meals are cooked with high-quality, fresh ingridients, by
        experienced chefs!
      </p>
    </section>
  );
}
