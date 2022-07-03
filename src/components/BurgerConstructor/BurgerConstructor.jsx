import React from "react";
import stylesBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { BurgerConstructorItem } from "../BurgetConstructorItem/BurgerConstructorItem";
import {useSelector} from "react-redux";

export const BurgerConstructor = ({ openModal }) => {
  const burgers = useSelector(state => state.ingredients.ingredients)
  const prices = burgers.reduce((a, b) => a + b.price, 0);
  return (
    <section className={`${stylesBurgerConstructor.section} mt-25`}>
      <ul className={stylesBurgerConstructor.ulUnder}>
        <BurgerConstructorItem
          item={burgers[0]}
          type="top"
          isLocked={true}
          position={true}
        />
        <ul className={stylesBurgerConstructor.ul}>
          {burgers.map((item) =>
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
          item={burgers[0]}
          type="bottom"
          isLocked={true}
          position={false}
        />
      </ul>
      <div className={`${stylesBurgerConstructor.info} mt-10`}>
        <p
          className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}
        >
          {prices + 2 * burgers[0].price}
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
};
