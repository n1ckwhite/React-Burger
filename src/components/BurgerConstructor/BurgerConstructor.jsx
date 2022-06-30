import React, { useContext } from "react";
import stylesBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { IngredientsContext } from "../../services/IngredientsContext";
import { BurgerConstructorItem } from "../BurgetConstructorItem/BurgerConstructorItem";

export const BurgerConstructor = ({ bur, openModal }) => {
  const [...ingredients] = useContext(IngredientsContext);
  const prices = ingredients.reduce((a, b) => a + b.price, 0);
  return (
    <section className={`${stylesBurgerConstructor.section} mt-25`}>
      <ul className={stylesBurgerConstructor.ulUnder}>
        <BurgerConstructorItem
          item={bur}
          type="top"
          isLocked={true}
          position={true}
        />
        <ul className={stylesBurgerConstructor.ul}>
          {ingredients.map((item) =>
            item.type !== "bun" ? (
              <BurgerConstructorItem
                key={item._id}
                item={item}
                type="middle"
                drag={true}
              />
            ) : null
          )}
        </ul>
        <BurgerConstructorItem
          item={bur}
          type="bottom"
          isLocked={true}
          position={false}
        />
      </ul>
      <div className={`${stylesBurgerConstructor.info} mt-10`}>
        <p
          className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}
        >
          {prices + 2 * bur.price}
          <CurrencyIcon type="primary" />
        </p>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired,
  bur: PropTypes.object.isRequired,
};
