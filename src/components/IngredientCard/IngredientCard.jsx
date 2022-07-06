import React from "react";
import stylesIngredientCard from "./IngredientCard.module.css";
import {
  CREATE_CURRENT_INGREDIENT,
  REPLACE_BUN_INGREDIENT,
} from "../../services/action";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { menuItemPropTypes } from "../../utils/constans";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

export const IngredientCard = ({ ingredient, openModal }) => {
  const ingredients = useSelector(
    (state) => state.currentIngredient.ingredients
  );
  const bun = useSelector((state) => state.currentIngredient.bun);
  const arr = [...bun, ...bun, ...ingredients];
  const counter = arr.filter((item) => item._id === ingredient._id).length;
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient.id,
    end: () => {
      addIngredient();
    },
  });

  const addIngredient = () => {
    if (ingredient.type === "bun") {
      dispatch({
        type: REPLACE_BUN_INGREDIENT,
        bun: ingredient,
      });
    } else {
      dispatch({
        type: CREATE_CURRENT_INGREDIENT,
        it: ingredient,
      });
    }
  };
  return (
    <li
      ref={dragRef}
      className={`${stylesIngredientCard.li} mt-6`}
      onClick={() => {
        openModal(ingredient);
      }}
    >
      {counter !== 0 ? <Counter count={counter} /> : <></>}
      <img src={ingredient.image} alt={ingredient.name} />
      <p
        className={`${stylesIngredientCard.prices} text text_type_digits-default mt-4 mb-4`}
      >
        {ingredient.price}
        <CurrencyIcon type="primary" />
      </p>
      <p className="text text_type_main-default">{ingredient.name}</p>
    </li>
  );
};

IngredientCard.propTypes = {
  ingredient: menuItemPropTypes.isRequired,
  openModal: PropTypes.func.isRequired,
};
