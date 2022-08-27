import React, { FC } from "react";
import stylesIngredientCard from "./IngredientCard.module.css";
import {
  CREATE_CURRENT_INGREDIENT,
  REPLACE_BUN_INGREDIENT,
} from "../../services/action";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { IIngredient } from "../../services/types/index";

interface IProps {
  ingredient: IIngredient;
  openModal: (A: IIngredient) => void;
}

interface IState {
  currentIngredient: {
    bun: [IIngredient];
    ingredients: [IIngredient];
  };
}

export const IngredientCard: FC<IProps> = ({ ingredient, openModal }) => {
  const { v4: uuidv4 } = require("uuid");
  const ingredients = useSelector(
    (state: IState) => state.currentIngredient.ingredients
  );
  const bun = useSelector((state: IState) => state.currentIngredient.bun);
  const arr = [...bun, ...bun, ...ingredients];
  const counter = arr.filter((item) => item._id === ingredient._id).length;
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient._id,
    end: () => {
      addIngredient();
    },
  });

  const addIngredient = () => {
    if (ingredient.type === "bun") {
      dispatch({
        type: REPLACE_BUN_INGREDIENT,
        bun: ingredient,
        key: uuidv4(),
      });
    } else {
      dispatch({
        type: CREATE_CURRENT_INGREDIENT,
        it: ingredient,
        key: uuidv4(),
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
