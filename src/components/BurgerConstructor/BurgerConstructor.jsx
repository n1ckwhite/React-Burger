import React from "react";
import stylesBurgerConstructor from "./BurgerConstructor.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { BurgerConstructorItem } from "../BurgetConstructorItem/BurgerConstructorItem";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import { DELETE_CONSTRUCTOR_ITEM} from "../../services/action";
export const BurgerConstructor = ({ openModal }) => {
  const burgers = useSelector((state) => state.currentIngredient.ingredients);
  const bun = useSelector((state) => state.currentIngredient.bun);
  const dispatch = useDispatch();
  const onDelete = (item) => {
    dispatch({
      type: DELETE_CONSTRUCTOR_ITEM,
      indx: item,
    });
  };
  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: !!monitor.isOver(),
    }),
  });
  const prices = burgers.reduce((a, b) => a + b.price, 0);
  return (
    <section className={`${stylesBurgerConstructor.section} mt-25`}>
      <ul className={stylesBurgerConstructor.ulUnder}>
        {bun.map((i) => {
          if (i.type === "bun") {
            return (
              <BurgerConstructorItem
                key={i._id}
                item={i}
                type="top"
                isLocked={true}
                position={true}
              />
            );
          }
        })}
        <ul
          className={stylesBurgerConstructor.ul}
          ref={dropRef}
          style={{ border: isHover ? "3px solid #4C4CFF" : "" }}
        >
          {burgers.map((i) => {
            return (
              <BurgerConstructorItem
                key={i._id}
                item={i}
                type="middle"
                drag={true}
                onDelete={() => onDelete(i._id)}
              />
            );
          })}
        </ul>
        {bun.map((i) => {
          if (i.type === "bun") {
            return (
              <BurgerConstructorItem
                 key={i._id}
                item={i}
                type="bottom"
                isLocked={true}
                position={false}
              />
            );
          }
        })}
      </ul>
      <div className={`${stylesBurgerConstructor.info} mt-10`}>
        <p
          className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}
        >
          {bun[0] ? prices + bun[0].price * 2 : prices}
          <CurrencyIcon type="primary" />
        </p>
        <Button type="primary" size="medium" onClick={openModal} disabled={burgers.length ? false : true}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  openModal: PropTypes.func.isRequired,
};
